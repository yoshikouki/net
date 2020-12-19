import https from "https";

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
  let res: zipCloudJson = {
    "message": null,
    "results": [
      {
        "address1": "鹿児島県",
        "address2": "鹿児島市",
        "address3": "宇宿",
        "kana1": "ｶｺﾞｼﾏｹﾝ",
        "kana2": "ｶｺﾞｼﾏｼ",
        "kana3": "ｳｽｷ",
        "prefcode": "46",
        "zipcode": "8900073"
      }
    ],
    "status": 200
  }
  return res
}

export function returnTest() {
  return "test"
}
