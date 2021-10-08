// 元数据类型
// type IRawCityData = {
//   year: number // 年份
//   data: number // 原始数据
// }

type IRawCityData = any[]

type IRawData = {
  name: string // 城市名称
  keyName: string // 对应指标 和传递的key一致
  IRawCityData: IRawCityData[] //统计数据 数组
}

// 统计数据类型，包含统计指标
export interface IStat {
  sum: number
  mean: number
  medi: number
  max: number
  min: number
}

// 展示数据接口
export interface IShowResponse {
  // 0 为成功，其他为失败
  code: number
  // 错误信息
  message?: string
  // 元数据
  raw: IRawData //map
  // 统计指标
  stat: IStat //map
}

export interface IShowRequest {
  key: string // 传递的对应属性名称
  id: number //城市的id
}
