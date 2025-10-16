<template>
  <div class="bg-orange-lighten-5 rounded-lg pa-8 alert-sec">
    <div class="text-h6 mb-5 font-weight-bold">
      <v-icon color="red" size="20">mdi-alert</v-icon> Critical Alerts & Overdue Items
    </div>
    <v-row>
      <v-col cols="4" v-for="(item, index) in alerts" :key="index">
        <v-card
          class="border-left border-primary alert-cd pa-2"
          :style="{
            borderLeft: `.3125rem solid ${item.color}`,
            // background: `linear-gradient(to right, #fff 20%,  80%)`,
          }"
        >
          <template #append>
            <v-icon size="60" :color="item.color">{{ item.aicon }}</v-icon>
          </template>
          <template #prepend>
            <v-icon size="50" :color="item.color">{{ item.picon }}</v-icon>
          </template>
          <template #title>
            <div class="text-body-1 text-black font-weight-bold">{{ item.title }}</div>
          </template>
          <template #subtitle>
            <div>{{ item.subtitle }}</div>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { critical_alert_data } from '@/data/dashboard'
export default {
  name: 'criticalAlerts',
  data() {
    return {
      alerts: critical_alert_data,
    }
  },
}
</script>

<style lang="scss" scoped></style>
