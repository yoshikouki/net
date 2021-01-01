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

const errorZipCloudJson = {
  message: null,
  results: [
    {
      address1: "ErrorAddress1",
      address2: "ErrorAddress2",
      address3: "ErrorAddress3",
      kana1: "ErrorKana1",
      kana2: "ErrorKana2",
      kana3: "ErrorKana3",
      prefcode: "ErrorPrefcode",
      zipcode: '0000000'
    }
  ],
  status: 400
}

export default class DevApi {

public async getAddressData(zipcode: number) {
    const url = 'https://zipcloud.ibsnet.co.jp/api/search'
    const params = { zipcode : zipcode }
    const res = this.requestGet(url, params)
    return await res ? res : errorZipCloudJson
  }

  public requestGet(url: string, paramsData?: {}) {
    return Axios.get(url, { params : paramsData })
      .then((res: AxiosResponse) => {
        return res.data
      })
      .catch((error) => {
        console.log("[ERROR] Axios get (DevApi#requestGet)")
        console.log("message: ", error.message)
        return false
      })
  }

  public static returnTest() {
    return "test"
  }
}
