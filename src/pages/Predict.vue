<script lang="ts" setup>
import Line from '../components/line/Line.vue'
import { KEYS } from '../utils/constant'
import { ref } from 'vue'

const value = ref<string>('gdpSum')

</script>

<template>
  <div class="overflow-hidden">
    <div class="w-full p-3 pb-0 header" style="direction: rtl;">
      <el-button>切换</el-button>
      <el-select
        v-model="value"
        class="mr-3 text-left w-300px"
        filterable
        collapse-tags
        placeholder="属性值"
      >
        <el-option
          v-for="item in KEYS"
          :key="item.value"
          :value="item.name"
          :label="item.value"
        ></el-option>
      </el-select>
    </div>
    <Line name="预测" :key-name="`1`" :multi="false" />
  </div>
</template>
