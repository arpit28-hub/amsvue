<template>
  <div class="px-4">
    <!-- <div class="text-capitalize text-h5 font-weight-bold">dashboard</div> -->
    <PerformanceSection></PerformanceSection>
    <CriticalAlerts></CriticalAlerts>
    <Charts></Charts>
  </div>
</template>

<script>
import PerformanceSection from '@/components/dashboard/PerformanceSection.vue'
import CriticalAlerts from '@/components/dashboard/CriticalAlerts.vue';
import Charts from '@/components/dashboard/Charts.vue';
export default {
  components: { PerformanceSection,CriticalAlerts,Charts },
}
</script>

<style lang="scss" scoped></style>
