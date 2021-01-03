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
      id: post.url,
      title: post.title,
      url: post.url
    }
  })
  const columns: ColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'title', headerName: 'タイトル', width: 600 },
  ]

  return (
    <div style={{ height: 400, width: 600 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={10}
        onRowClick={async (param) => {
          await router.push(rows[param.rowIndex].url)
        }}
      />
    </div>
  )
}
