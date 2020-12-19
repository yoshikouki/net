import { zipCloudJson, callApi } from "../../../lib/dev/api"

test('郵便番号で住所を取得する', () => {
  let res: zipCloudJson = callApi()
  expect(res.status).toBe(200)
  expect(res.results[0]["zipcode"]).toBe("8900073")
})
