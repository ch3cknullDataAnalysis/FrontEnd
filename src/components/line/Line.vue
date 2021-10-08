<script lang="ts" setup>
import { init } from 'echarts'
import { ref, onMounted } from 'vue'
import { useResizeObserver, useIntersectionObserver, useTimeoutFn } from '@vueuse/core'
import { show } from '../../api'
import { format } from './format'
import { PROVINCE } from './constant'
import { ElSelect } from 'element-plus'

const container = ref<HTMLElement>()
const isLoad = ref(false)
let chart: any
const tableData = ref<any[]>([])
const value = ref<number>()


onMounted(async () => {

  const res = await show({
    cityNum: '110000',
    key: 'gdpSum'
  })
  const response = format(res)
  const options = response.options
  tableData.value = response.statData

  useIntersectionObserver(container!.value, () => {
    if (isLoad.value) return
    useTimeoutFn(() => {
      chart = init(container.value!)
      chart.setOption(options)
      useResizeObserver(container.value, () => {
        chart.resize()
      })
    }, 400)
    isLoad.value = true
  })
})

</script>

<template>
  <div class="main">
    <span class="pl-2 text-2xl text-gray-600 float-left">aaa</span>
    <el-select
      v-model="value"
      class="w-140px float-right"
      multiple
      filterable
      small
      placeholder="省份名称"
    >
      <el-option
        v-for="item in PROVINCE"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <div class="h-[400px] mt-16" ref="container">
      <div
        text="center xl gray-400"
        class="font-bold tracking-widest top-2/5 relative"
      >数据加载中</div>
    </div>
    <el-table class="w-full pb-6" :data="tableData" stripe>
      <el-table-column prop="city" label="City" />
      <el-table-column prop="max" label="Max" />
      <el-table-column prop="min" label="Min" />
      <el-table-column prop="max" label="Mean" />
      <el-table-column prop="median" label="Median" />
      <el-table-column prop="sum" label="Sum" />
    </el-table>
  </div>
</template>

<style lang="css" scoped>
.main {
  @apply border rounded-xl shadow
    m-3 p-2 pb-0 overflow-hidden;
}
</style>