<script lang="ts" setup>
import { EChartsOption, EChartsType, init, number } from 'echarts'
import { ref, shallowRef } from 'vue'
import { useResizeObserver, useIntersectionObserver, useTimeoutFn } from '@vueuse/core'
import { show, predict } from '../api'
import { format } from '../components/line/format'
import { PROVINCE, KEYS } from '../utils/constant'
import { IShowRequest } from '../components/line/data_types'
import tableVue from '../components/table/table.vue'

const container = ref<HTMLElement>()
const isLoad = ref(false)
const options = ref<EChartsOption>()
const chart = shallowRef<EChartsType>()
const tableData = ref<any[]>([])
const value = ref<string>('110000')
const keyName = ref<string>('gdpSum')

useIntersectionObserver(container, async ([{ isIntersecting }]) => {
  if (!isLoad.value && isIntersecting) {
    const table = init(container.value!)
    useResizeObserver(container.value, () => {
      table.resize()
    })
    chart.value = table
    update()
    isLoad.value = true
  }
})

async function update () {
  const params: IShowRequest = { cityNum: value.value.toString(), key: keyName.value }
  const res = await show(params)
  const response = format(res)
  options.value = response.options
  tableData.value = response.statData
  chart.value!.setOption(response.options)
}

async function predictButton () {
  await update()
  const params = { cityNum: value.value, key: keyName.value }
  const res = (await predict(params)).data
  const appendNumber = Number(res.toString())
  const innerOption: any = options.value

  innerOption?.series[0].data.push(appendNumber)
  chart.value?.setOption(innerOption)
}
</script>

<template>
  <div class="main">
    <div class="header" style="direction: rtl;">
      <el-button @click="predictButton" class="ml-3 float-right">更新</el-button>
      <el-select
        v-model="keyName"
        class="ml-3 w-180px float-right"
        filterable
        collapse-tags
        placeholder="属性值"
      >
        <el-option
          v-for="item in KEYS"
          :key="item.value"
          :label="item.value"
          :value="item.name"
        ></el-option>
      </el-select>
      <el-select
        v-model="value"
        class="w-140px float-right"
        filterable
        collapse-tags
        placeholder="省份名称"
      >
        <el-option
          v-for="item in PROVINCE"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <div class="h-[330px] mt-16" ref="container">
      <div
        text="center xl gray-400"
        class="font-bold tracking-widest top-2/5 relative"
      >数据加载中</div>
    </div>
    <tableVue :tableData="tableData" />
  </div>
</template>

<style lang="css" scoped>
.main {
  @apply border rounded-xl shadow
    m-3 p-2 pb-0 overflow-hidden;
}
</style>