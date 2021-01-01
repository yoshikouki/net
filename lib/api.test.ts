import Api from './api'

describe('API クラスのテスト', () => {
  test('投稿したブログを取得する',  async() => {
    const api = new Api()
    const posts = await api.getBlogPosts()
    expect(posts).toBe(Api.ErrorGetBlogPosts)
  })
})
