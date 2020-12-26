import Axios, {AxiosResponse} from 'axios'

export interface ZipCloudJson {
  message: null,
  results: [
    {
      address1: string,
      address2: string,
      address3: string,
      kana1: string,
      kana2: string,
      kana3: string,
      prefcode: string,
      zipcode: string
    }
  ],
  status: number
}

export default class DevApi {
  public getNotePosts() {
    const url = "https://note.com/api/v2/creators/yoshikouki/contents"
    const params = { kind : "note" }
    return this.requestGet(url, params)
  }

  public getAddressData(zipcode: number) {
    const url = 'https://zipcloud.ibsnet.co.jp/api/search'
    const params = { zipcode : zipcode }
    return this.requestGet(url, params)
  }

  public requestGet(url: string, params?: {}) {
    return Axios.get(url, { params : params })
      .then((res: AxiosResponse) => {
        return res.data
      })
      .catch(() => {
        console.log("[ERROR] Axios get (DevApi#requestGet)")
        return false
      })
  }

  public static returnTest() {
    return "test"
  }
}
