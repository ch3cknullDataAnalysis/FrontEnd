<script lang="ts" setup>
defineProps<{ tableData: any }>()
</script>

<template>
  <el-table class="w-full pb-6" :data="tableData" stripe>
    <el-table-column prop="city" label="City" />
    <el-table-column prop="max" label="Max" />
    <el-table-column prop="min" label="Min" />
    <el-table-column prop="max" label="Mean" />
    <el-table-column prop="medi" label="Median" />
    <el-table-column prop="sum" label="Sum" />
  </el-table>
</template>
