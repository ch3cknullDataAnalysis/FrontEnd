type ISeriesData =
  | number
  | string
  | {
      name: string
      value: number
    }

interface ISeries {
  name: string
  type: 'line' | 'bar' | 'pie'
  data: ISeriesData[]
}

export interface ILineOption {
  title: {
    text: string
  }
  tooltip?: any
  xAxis: {
    data: string[]
  }
  series: ISeries[]
}
