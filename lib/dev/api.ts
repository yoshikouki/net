import * as axios from 'axios'

export interface zipCloudJson {
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

export function callApi() {
  let url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=8900073'
  return axios.default.get(url)
    .then((res: axios.AxiosResponse) => {
      return res.data
    })
    .catch(() => {
      console.log("[ERROR] Axios get")
      return false
    })
}

export function returnTest() {
  return "test"
}
