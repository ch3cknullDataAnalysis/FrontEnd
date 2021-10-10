<template>
  <div class="overflow-hidden">
    <div class="navbar">
      <span class="pr-6">Predict</span>
      <router-link to="/">主页</router-link>
      <router-link to="/predict">数据预测</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
.navbar {
  @apply space-x-4 bg-blue-400 shadow text-white text-xl p-2 px-3;
}
</style>
