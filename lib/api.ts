import Axios, {AxiosResponse} from "axios";

export interface GetBlogPostsResponse {
  posts: []
  message: null | string
  status: number
}

export default class Api {
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

  public async getBlogPosts() {
    const url = "https://note.com/api/v2/creators/yoshikouki/contents"
    const params = { kind : "note" }
    const posts: NoteApiResponse = await this.getFrom(url, params)
    return {
      posts: posts.data.contents,
      message: null,
      status: 200
    }
  }

  public static ErrorGetBlogPosts: GetBlogPostsResponse = {
    posts:[],
    message: '[ERROR] ブログ記事の取得に失敗しました。Api#getBlogPosts ',
    status: 404
  }
}

interface NoteApiResponse {
  "data": {
    "contents": [
      {
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
            {
              "name": string,
              "body": string
            },
            {
              "name": string,
              "body": string
            },
            {
              "name": string,
              "body": string
            },
            {
              "name": string,
              "body": string
            }
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
          {
            "hashtag": {
              "name": string
            }
          },
          {
            "hashtag": {
              "name": string
            }
          },
          {
            "hashtag": {
              "name": string
            }
          }
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
      },
    ],
    "isLastPage": boolean,
    "totalCount": number
  }
}
