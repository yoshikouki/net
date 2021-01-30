declare module 'blog' {
  interface BlogPosts {
    message: null
    posts: Post[]
    status: number
  }

  interface Post {
    title: string
    url: string
    date: number
    service: string
    description: string
  }

  interface NoteFeed {
    copyright: string
    description: string
    feedUrl: string
    items: NoteFeedItem[]
    language: string
    // サンプル "Sat, 23 Jan 2021 16:20:27 +0900"
    lastBuildDate: string
    link: string
    title: string
  }

  interface NoteFeedItem  {
    content: string
    contentSnippet: string
    guid: string
    // サンプル "2021-01-19T13:36:17.000Z"
    isoDate: string
    link: string
    // サンプル "Tue, 19 Jan 2021 22:36:17 +0900"
    pubDate: string
    title: string
  }

  interface QiitaFeed {
    feedUrl: string
    items: QiitaFeedItem[]
    // サンプル "2020-11-26T09:36:04.000Z"
    lastBuildDate: string
    link: string
    title: string
  }

  interface QiitaFeedItem {
    author: string
    content: string
    id: string
    // サンプル "2020-11-26T09:36:04.000Z"
    isoDate: string
    link: string
    // サンプル "2020-11-26T09:36:04.000Z"
    pubDate: string
    title: string
  }
}
