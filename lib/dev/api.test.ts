import DevApi from "./api";

describe("開発中 API クラス", () => {
  test('郵便番号で住所を取得する', async () => {
    const api = new DevApi()
    const res = await api.getAddressData(8900073)
    expect(res.status).toBe(200)
    expect(res.results[0].address3).toBe("宇宿")
    expect(res.results[0].zipcode).toBe("8900073")
  })

  test('最初のテスト', () => {
    let res: string;
    res = DevApi.returnTest()
    expect(res).toBe("test")
  })
})
