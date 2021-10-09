<script lang="ts" setup>
import { EChartsType, init } from 'echarts'
import { ref, shallowRef } from 'vue'
import { useResizeObserver, useIntersectionObserver, useTimeoutFn } from '@vueuse/core'
import { show } from '../../api'
import { format } from './format'
import { PROVINCE } from '../../utils/constant'
import { IShowRequest } from './data_types'
import tableVue from '../table/table.vue'

const props = withDefaults(defineProps<{
  name: string,
  keyName: string,
  multi?: boolean
}>(), {
  multi: false
})

const container = ref<HTMLElement>()
const isLoad = ref(false)
const chart = shallowRef<EChartsType>()
const tableData = ref<any[]>([])
const value = props.multi ? ref<string[]>(['110000']) : ref<string>('110000')

useIntersectionObserver(container, async ([{ isIntersecting }]) => {
  if (!isLoad.value && isIntersecting) {
    useTimeoutFn(() => {
      const table = init(container.value!)
      useResizeObserver(container.value, () => {
        table.resize()
      })
      chart.value = table
      update()
    }, 0)
    isLoad.value = true
  }
})

async function update () {
  const params: IShowRequest = { cityNum: value.value.toString(), key: props.keyName }
  const res = await show(params)
  const response = format(res)
  const options = response.options
  tableData.value = response.statData
  chart.value!.setOption(options)
}
</script>

<template>
  <div class="main" :name="props.keyName">
    <span class="text-xl pl-2 text-gray-600 float-left">{{ props.name }}</span>
    <el-select
      v-model="value"
      class="w-180px float-right"
      :multiple="props.multi"
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
    <el-button @click="update" class="mr-3 float-right">更新</el-button>
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