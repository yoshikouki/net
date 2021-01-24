import Parser from "rss-parser";
import {Post} from "blog";

const ParserCustomField = {
  customFields: {
  }
}

export default class Api {
  public async getBlogPosts() {
    const noteItems = await this.getNoteItems()
    const qiitaItems = await this.getQiitaItems()
    const items = noteItems.concat(qiitaItems)
    return {
      posts: items,
      message: null,
      status: 200
    }
  }

  public async getNoteItems() {
    const feed = await this.fetchRssFeed('https://note.com/yoshikouki/rss')
    return feed.items.map((item) => {
      let itemTitle = String(item.title)
      let itemUrl = String(item.link)
      let itemDate = new Date(String(item.pubDate)).getTime()
      let post: Post = {
        title: itemTitle,
        url: itemUrl,
        date: itemDate,
        service: 'note',
      }
      return post
    })
  }

  public async getQiitaItems() {
    const feed = await this.fetchRssFeed('https://qiita.com/yoshikouki/feed.atom')
    return feed.items.map((item) => {
      let itemTitle = String(item.title)
      let itemUrl = String(item.link)
      let itemDate = new Date(String(item.pubDate)).getTime()
      let post: Post = {
        title: itemTitle,
        url: itemUrl,
        date: itemDate,
        service: 'Qiita',
      }
      return post
    })
  }

  public async fetchRssFeed(url = "") {
    const parser = new Parser(ParserCustomField)
    return await parser.parseURL(url)
  }

  public static convertDateToString(time: number) {
    const date = new Date(time)
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }
}
