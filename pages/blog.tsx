import React from "react";
import Layout from "../components/layout";
import Api, {GetBlogPostsResponse} from "../lib/api";
import {GetStaticProps} from "next";

interface Props {
  posts: GetBlogPostsResponse
}

export default function Blog({posts}: Props) {
  console.debug(posts)
  return (
    <Layout title={'Blog | yoshikouki.net'}>
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
