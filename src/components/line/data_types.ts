// 元数据类型
type IRawCityData = [number[], number[]]

// 统计数据类型，包含统计指标
export interface IStat {
  sum: number
  mean: number
  medium: number
  max: number
  min: number
}

// 单个城市的接口
interface CityData {
  cityName: string
  // 元数据
  raw: IRawCityData[] //数组
  // 统计指标
  stat: IStat //一组map
}

// 展示数据接口
export interface IShowResponse {
  // 0 为成功，其他为失败
  code: number
  keyName: string
  // 错误信息
  message: string
  data: CityData[]
}

export interface IShowRequest {
  key: string // 传递的对应属性名称
  cityNum: string //城市的id, 支持多选
}
