import * as api from "../../../lib/dev/api"

test('郵便番号で住所を取得する', async () => {
  const res = await api.callApi()
  expect(res.status).toBe(200)
  expect(res.results[0].address3).toBe("宇宿")
  expect(res.results[0].zipcode).toBe("8900073")
})

test('最初のテスト', () => {
  let res: string;
  res = api.returnTest()
  expect(res).toBe("test")
})
