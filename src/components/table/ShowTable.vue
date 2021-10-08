<script lang="ts" setup>
import { IStat } from '../line/data_types';

const props = defineProps<{
  max: number
  min: number
  mean: number
  medi: number
  sum: number
}>()

</script>

<template>
  <div>
    <table class="text-center w-full">
      <tr class="tr">
        <td class="col">city</td>
        <td class="col">max</td>
        <td class="col">min</td>
        <td class="col">mean</td>
        <td class="col">median</td>
        <td class="col">sum</td>
        <hr class="pb-2 col-span-6" />
      </tr>
      <!-- <tr> -->
      <tr class="tr">
        <td class="col">{{ '' }}</td>
        <td class="col">{{ props.max.toFixed(2) }}</td>
        <td class="col">{{ props.min.toFixed(2) }}</td>
        <td class="col">{{ props.mean.toFixed(2) }}</td>
        <td class="col">{{ props.medi.toFixed(2) }}</td>
        <td class="col">{{ props.sum.toFixed(2) }}</td>
        <hr class="pb-2 col-span-6" />
      </tr>
    </table>
  </div>
</template>

<style scoped>
.tr {
  @apply w-full grid grid-cols-6 overflow-y-auto;
}

.col {
  @apply px-2;
}
</style>
