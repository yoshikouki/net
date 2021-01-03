import React from "react";
import Layout from "../components/layout";
import Api, {GetBlogPostsResponse} from "../lib/api";
import {GetStaticProps} from "next";
import {PostList} from "../components/PostList";

interface Props {
  posts: GetBlogPostsResponse
}

export default function Blog({posts}: Props) {
  return (
    <Layout title={'Blog | yoshikouki.net'}>
      <PostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const api = new Api()
  const posts = await api.getBlogPosts()
  return {
    props: {
      posts: posts
    }
  }
}
