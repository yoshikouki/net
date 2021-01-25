import React from "react";
import Api from "../lib/api";
import {BlogPosts, Post} from "blog";
import {Card, CardActionArea, CardContent, Chip, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {useRouter} from "next/router";
import {decodeHTML} from "entities";

interface Props {
  posts: BlogPosts
}

const useStyles = makeStyles({
  cardRoot: {
    minWidth: 275,
    margin: '0 0 40px',
    padding: '12px 0'
  },
  cardTitle: {
    margin: '8px 0'
  }
})

export const PostList = ({posts}: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const tagRegExp = /<(".*?"|'.*?'|[^'"])*?>/g
  return (
    <>{
      posts.posts.map((post: Post) => {
        let postDate = Api.convertDateToString(post.date)
        let postDescription = post.description ? post.description.replace(tagRegExp, ' ') : ''
        if (post.service == 'note') {
          postDescription = postDescription.replace(/続きをみる $/, "")
        }
        if (postDescription.length > 100) {
          postDescription = postDescription.slice(0, 100) + "..."
        }
        return (
          <Card className={classes.cardRoot}>
            <CardActionArea onClick={async () => {
              await router.push(post.url)
            }}>
              <CardContent>
                <Typography component={'p'} variant={'caption'}>
                  {postDate}
                </Typography>
                <Typography component={'h2'} variant={'h6'} className={classes.cardTitle}>
                  {post.title}
                </Typography>
                <Chip label={post.service}/>
                <Typography component={'p'} variant={'body2'} className={classes.cardTitle}>
                  {postDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })
    }</>
  )
}
