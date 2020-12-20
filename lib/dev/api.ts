import Axios, {AxiosResponse} from 'axios'

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

export function callApi(zipcode: number) {
  let url = 'http://zipcloud.ibsnet.co.jp/api/search'
  return Axios.get(url, { params : { zipcode : zipcode } })
    .then((res: AxiosResponse) => {
      const json: zipCloudJson = res.data
      return json
    })
    .catch(() => {
      console.log("[ERROR] Axios get")
      return false
    })
}

export function returnTest() {
  return "test"
}
