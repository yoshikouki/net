import { zipCloudJson, callApi, returnTest } from "../../../lib/dev/api"

test('最初のテスト', () => {
  let res: string;
  res = returnTest()
  expect(res).toBe("test")
})
