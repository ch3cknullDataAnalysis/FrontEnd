<script lang="ts" setup>
defineProps<{ tableData: any }>()
</script>

<template>
  <el-table class="w-full pb-6" :data="tableData" stripe>
    <el-table-column prop="city" label="城市" />
    <el-table-column prop="max" label="最大值" />
    <el-table-column prop="min" label="最小值" />
    <el-table-column prop="max" label="均值" />
    <el-table-column prop="medi" label="中位数" />
    <el-table-column prop="sum" label="总和" />
  </el-table>
</template>
