import Axios, {AxiosResponse} from 'axios'

export default class DevApi {
  public getAddressData(zipcode: number) {
    let url = 'http://zipcloud.ibsnet.co.jp/api/search'
    return Axios.get(url, { params : { zipcode : zipcode } })
      .then((res: AxiosResponse) => {
        return res.data
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
