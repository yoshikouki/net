import React from "react";
import Layout from "../../components/layout";
import LaboApi, {GetBlogPostsResponse} from "../../lib/labo/api";
import {GetStaticProps} from "next";
import {LaboPostList} from "../../components/labo/PostList";

interface Props {
  posts: GetBlogPostsResponse
}

export default function LaboBlog({posts}: Props) {
  return (
    <Layout title={'Labo-Blog | yoshikouki.net'}>
      <LaboPostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const api = new LaboApi()
  const posts = await api.getBlogPosts()
  return {
    props: {
      posts: posts
    }
  }
}
