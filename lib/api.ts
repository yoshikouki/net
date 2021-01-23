import Parser from "rss-parser";

export interface BlogPosts {
  message: null,
  posts: Post[],
  status: number
}

export interface Post {
  title: string
  url: string
  date: number
  service: string
  description: string
}

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
    const posts = {
      posts: items,
      message: null,
      status: 200
    }
    return posts
  }

  public static convertDateToString(time: string) {
    const date = new Date(time)
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }
}
