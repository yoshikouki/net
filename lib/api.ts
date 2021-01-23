import Parser from "rss-parser";
import {Post} from "blog";

const ParserCustomField = {
  customFields: {
  }
}

export default class Api {
  public async getBlogPosts() {
    const url = 'https://note.com/yoshikouki/rss'
    const parser = new Parser(ParserCustomField)
    const feed = await parser.parseURL(url)
    const items = feed.items.map((item) => {
      let itemTitle = String(item.title)
      let itemUrl = String(item.link)
      let itemDate = new Date(String(item.pubDate)).getTime()
      const post: Post = {
        title: itemTitle,
        url: itemUrl,
        date: itemDate,
        service: 'note',
      }
      return post
    })
    return {
      posts: items,
      message: null,
      status: 200
    }
  }

  public static convertDateToString(time: string) {
    const date = new Date(time)
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }
}
