import { EChartsOption } from 'echarts'
import { IShowResponse } from './data_types'

export function format(input: IShowResponse) {
  const rawData = input.raw.IRawCityData
  // const keyName

  const options: EChartsOption = {
    title: {
      text: input.raw.keyName,
    },
    tooltip: {},
    xAxis: {
      // data: rawData.map((s) => s.year),
      data: rawData[0],
    },
    legend: {
      data: [input.raw.name],
      // need cityName
    },
    yAxis: {},
    series: [
      {
        name: input.raw.name,
        type: 'line',
        // data: rawData.map((s) => s.data),
        data: rawData[1],
      },
    ],
  }

  const statData = input.stat

  return {
    options,
    statData,
  }
}
