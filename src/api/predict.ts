import { instance } from './instance'
import { API_PREDICT } from './constant'

interface IPredictParams {
  cityNum: string
  key: string
}

interface IPredictResponse {
  code: number
  message: string
  data: number | string
}

export async function predict(
  params: IPredictParams
): Promise<IPredictResponse> {
  const res = await instance.get(API_PREDICT, { params })

  return res.data
}
