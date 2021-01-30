import Api from './api'

describe('API クラスのテスト', () => {
  test('#convertDateToString', () => {
    const date = new Date(2021, 0, 1).getTime()
    expect(Api.convertDateToString(date)).toBe('2021/1/1')
  })

  // test('#getBlogPosts',  async () => {
  //   const api = new Api()
  //   const posts = await api.getBlogPosts()
  //   expect(posts.posts.slice(-1)).toBe([])
  // })

  // test('#fetchRssFeed', async () => {
  //   const feed = await api.fetchRssFeed('https://qiita.com/yoshikouki/feed.atom')
  //   const feed = await api.fetchRssFeed('https://note.com/yoshikouki/rss')
  //   expect(feed.items[0].pubDate).toBe("")
  // })
})
