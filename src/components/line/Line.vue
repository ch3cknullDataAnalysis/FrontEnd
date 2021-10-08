<script lang="ts" setup>
import { init, EChartsOption, EChartsType } from 'echarts'
import { ref, onMounted } from 'vue'
import { useResizeObserver, useIntersectionObserver, useTimeoutFn } from '@vueuse/core'
import { show } from '../../api'
import { format } from './format'
import ShowTable from '../table/ShowTable.vue'

const container = ref<HTMLElement>()
let chart: Readonly<EChartsType>
const isLoad = ref(false)

let max = ref(0)
let min = ref(0)
let medi = ref(0)
let mean = ref(0)
let sum = ref(0)

onMounted(async () => {

  const res = await show()
  const response = format(res)
  const options = response.options
  max.value = response.statData.max
  min.value = response.statData.min
  medi.value = response.statData.medi
  mean.value = response.statData.mean
  sum.value = response.statData.sum


  useIntersectionObserver(container!.value, () => {
    if (isLoad.value) return
    useTimeoutFn(() => {
      chart = init(container.value!)
      chart.setOption<EChartsOption>(options)
      useResizeObserver(container.value, () => {
        chart.resize()
      })
    }, 800)
    isLoad.value = true
  })

})

</script>

<template>
  <div class="main">
    <div class="container h-[400px]" ref="container">
      <div
        text="center xl gray-500"
        class="font-bold mt-[8%] tracking-widest"
      >数据加载中</div>
    </div>
    <ShowTable
      class="-mt-6 mb-3"
      :min="min"
      :max="max"
      :mean="mean"
      :sum="sum"
      :medi="medi"
    />
  </div>
</template>

<style lang="css" scoped>
.main {
  @apply border rounded-xl shadow
    m-3 p-5 pb-0;
}
</style>