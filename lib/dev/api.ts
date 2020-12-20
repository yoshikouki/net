import Axios, {AxiosResponse} from 'axios'
import { zipCloudJson } from './api.interface'

export default class Api {
  public getAddressData(zipcode: number) {
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

  public static returnTest() {
    return "test"
  }
}
