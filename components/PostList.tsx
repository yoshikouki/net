import React from "react";
import {BlogPostData, GetBlogPostsResponse} from "../lib/api";

interface Props {
  posts: GetBlogPostsResponse
}

export const PostList = ({posts}: Props) => {
  const title = posts.posts.map((post: BlogPostData) => { return post.title }).join(' ')
  return (
    <p>{title}</p>
  )
}
