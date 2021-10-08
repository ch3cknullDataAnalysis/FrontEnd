import { EChartsOption } from 'echarts'
import { IShowResponse } from './data_types'

export function format(input: IShowResponse) {
  const rawData = input.data

  const series: any[] = rawData.map((s) => {
    return {
      name: s.cityName,
      type: 'line',
      data: s.raw[1],
    }
  })

  const legend: any[] = rawData.map((s) => s.cityName)

  const options: EChartsOption = {
    title: {
      // text: input.keyName,
    },
    tooltip: {},
    xAxis: {
      // data: rawData.map((s) => s.year),
      data: [2013, 2014, 2015, 2016, 2017, 2018],
      // data: rawData[0],
    },
    legend: {
      data: legend,
    },
    yAxis: {},
    series: series,
  }

  const statData = input.data.map((s) => {
    return {
      ...s.stat,
      city: s.cityName,
    }
  })

  return {
    options,
    statData,
  }
}
