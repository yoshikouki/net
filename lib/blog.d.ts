declare module 'blog' {
  interface BlogPosts {
    message: null,
    posts: Post[],
    status: number
  }

  interface Post {
    title: string
    url: string
    date: number
    service: string
  }
}
