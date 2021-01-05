import React from "react";
import {BlogPostData, GetBlogPostsResponse} from "../lib/api";
import {ColDef, DataGrid, RowsProp} from "@material-ui/data-grid";
import {useRouter} from "next/router";

interface Props {
  posts: GetBlogPostsResponse
}

export const PostList = ({posts}: Props) => {
  const router = useRouter()
  const rows: RowsProp = posts.posts.map((post: BlogPostData) => {
    return {
      id: post.title,
      title: post.title,
      url: post.url,
      likes: post.likes,
      date: post.date,
      tags: post.tags,
      service: post.service
    }
  })
  const columns: ColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'title', headerName: 'タイトル', width: 300 },
    { field: 'date', headerName: '日付', width: 150 },
    { field: 'service', headerName: 'SNS', width: 100 },
    { field: 'likes', headerName: 'Like', width: 100 },
    { field: 'tags', headerName: 'タグ', width: 300 },
  ]

  return (
    <div style={{ height: 1000, width: 800 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowClick={async (param) => {
          await router.push(rows[param.rowIndex].url)
        }}
      />
    </div>
  )
}
