<template>
  <div class="px-4">
    <div class="text-capitalize text-h5 font-weight-bold">dashboard</div>
    <PerformanceSection></PerformanceSection>
  </div>
</template>

<script>
import PerformanceSection from '@/components/dashboard/performanceSection.vue'
export default {
  components: { PerformanceSection },
}
</script>

<style lang="scss" scoped></style>
