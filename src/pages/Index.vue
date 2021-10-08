<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue';
import Line from '@/components/line/Line.vue'

onMounted(() => {
  useTitle('Title')
})

</script>

<template>
  <div class="navbar">NavBar</div>
  <div class="main-content">
    <div class="left">
      <ul class="space-y-2 py-3">
        <li
          v-for="i in 10"
          text="white"
          class="rounded-md bg-blue-300 p-2 transition hover:(bg-blue-400)"
        >{{ i }}</li>
      </ul>
    </div>
    <div class="right">
      <Line v-for="i in 3" :key="i" />
    </div>
  </div>
  <el-backtop />
</template>

<style lang="css" scoped>
.navbar {
  @apply bg-blue-400 shadow text-white p-2 px-3 text-2xl;
}

.main-content {
  @apply overflow-hidden;
}

.left,
.right {
  @apply w-full inline-block;
}

.left {
  @apply pl-3 hidden;
  @apply lg:(float-left w-1/5 inline-block) ;
}

.right {
  @apply min-w-[375px] lg:(float-left w-4/5) ;
}
</style>
