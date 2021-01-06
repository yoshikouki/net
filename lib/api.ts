import Axios, {AxiosResponse} from "axios";

export interface GetBlogPostsResponse {
  posts: []
  message: null | string
  status: number
}

export interface BlogPostData {
  title: string
  url: string
  likes: number
  date: string
  tags: string[]
  service: string
}

export default class Api {
  public async getBlogPosts() {
    const notePosts = await this.fetchNotePosts()
    const qiitaPosts = await this.fetchQiitaPosts()
    const posts = notePosts.concat(qiitaPosts)
    return {
      posts: posts,
      message: null,
      status: 200
    }
  }

  public async fetchNotePosts() {
    const url = "https://note.com/api/v2/creators/yoshikouki/contents"
    const params = { kind : "note" }
    const notePosts: NoteApiResponse = await this.getFrom(url, params)
    return notePosts.data.contents.map((value: NoteContent) => {
      const date = new Date(value.publishAt).getTime()
      const tags = value.hashtags.map((tag) => { return tag.hashtag.name.slice(1) })

      return {
        title: value.name,
        url: value.noteUrl,
        likes: value.likeCount,
        date: date,
        tags: tags,
        service: "note"
      }
    })
  }

  public async fetchQiitaPosts() {
    const url = "https://qiita.com/api/v2/users/yoshikouki/items"
    const params = { per_page : 20 }
    const qiitaPosts = await this.getFrom(url, params)
    return qiitaPosts.map((value: QiitaContent) => {
      const date = new Date(value.created_at).getTime()
      const tags = value.tags.map((tag) => { return tag.name })

      return {
        title: value.title,
        url: value.url,
        likes: value.likes_count,
        date: date,
        tags: tags,
        service: "Qiita"
      }
    })
  }

  public getFrom(url: string, paramsData?: {}) {
    return Axios.get(url, { params : paramsData })
      .then((res: AxiosResponse) => {
        return res.data
      })
      .catch((error) => {
        console.log("[ERROR] Axios get (Api#getFrom)")
        console.log("message: ", error.message)
      })
  }

  public static ErrorGetBlogPosts: GetBlogPostsResponse = {
    posts:[],
    message: '[ERROR] ブログ記事の取得に失敗しました。Api#getBlogPosts ',
    status: 404
  }
  
  public static convertDateToString(time: string) {
    const date = new Date(time)
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }
}

interface QiitaContent {
  "rendered_body": string,
  "body": string,
  "coediting": boolean,
  "comments_count": number,
  "created_at":string,
  "group": null,
  "id": string,
  "likes_count": number,
  "private": boolean,
  "reactions_count": number,
  "tags": [
    {
      "name": string,
      "versions": []
    }
  ],
  "title": string,
  "updated_at": string,
  "url": string,
  "user": {
    "description": string,
    "facebook_id": string,
    "followees_count": number,
    "followers_count": number,
    "github_login_name": string,
    "id": string,
    "items_count": number,
    "linkedin_id": string,
    "location": string,
    "name": string,
    "organization": string,
    "permanent_id": number,
    "profile_image_url": string,
    "team_only": boolean,
    "twitter_screen_name": string,
    "website_url": string
  },
  "page_views_count": null
}

interface NoteApiResponse {
  "data": {
    "contents": [NoteContent],
    "isLastPage": boolean,
    "totalCount": number
  }
}

export interface NoteContent {
  "id": number,
  "type": string,
  "status": string,
  "name": string,
  "description": null,
  "price": number,
  "key": string,
  "slug": string,
  "publishAt": string,
  "thumbnailExternalUrl": string,
  "eyecatch": string,
  "user": {
    "id": number,
    "name": string,
    "urlname": string,
    "nickname": string,
    "userProfileImagePath": string,
    "customDomain": null,
    "disableSupport": boolean,
    "likeAppealText": null,
    "likeAppealImage": null,
    "purchaseAppealTextNote": null,
    "twitterNickname": string
  },
  "canRead": boolean,
  "isAuthor": boolean,
  "externalUrl": null,
  "customDomain": null,
  "body": string,
  "separator": null,
  "isLimited": boolean,
  "isTrial": boolean,
  "canUpdate": boolean,
  "tweetText": string,
  "additionalAttr": {
    "index": [
      {
        "name": string,
        "body": string
      },
    ],
    "anonymousLikeCount": number
  },
  "isRefund": boolean,
  "commentCount": number,
  "likes": [],
  "likeCount": number,
  "anonymousLikeCount": number,
  "isLiked": boolean,
  "disableComment": boolean,
  "hashtags": [
    {
      "hashtag": {
        "name": string
      }
    },
  ],
  "twitterShareUrl": string,
  "facebookShareUrl": string,
  "lineShareUrl": string,
  "audio": {},
  "pictures": [],
  "limitedMessage": null,
  "labels": [],
  "priorSale": null,
  "canMultipleLimitedNote": boolean,
  "hasEmbeddedContent": boolean,
  "isPinned": boolean,
  "pinnedUserNoteId": null,
  "isTreasuredNote": boolean,
  "spEyecatch": string,
  "enableBacktoDraft": boolean,
  "notificationMessages": [],
  "isProfiled": boolean,
  "isForWork": boolean,
  "isCircleDescription": boolean,
  "noteDraft": null,
  "noteUrl": string
}
