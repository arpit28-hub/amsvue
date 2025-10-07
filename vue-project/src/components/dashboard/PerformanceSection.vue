<template>
  <div class="performance-section px-5 pb-10">
    <div class="text-h6 pb-2 font-weight-bold">Key Performance Indicators</div>
    <div class="d-flex">
      <div class="pa-2 performance-card">
        <v-card class="shd">
          <template #prepend>
            <div class="cdIcon bg-blue">
              <v-icon size="40">mdi-package-variant</v-icon>
            </div>
          </template>
          <template #title>
            <div class="text-h4 text-end font-weight-bold text-black">
              {{ dashPD.totalAssets.count }}
            </div>
          </template>
          <template #subtitle>
            <div class="text-end text-green-lighten-1">
              <v-icon size="18" color="green-lighten-1">mdi-arrow-up </v-icon
              >{{ `${dashPD.totalAssets.changeThisMonth}% this month` }}
            </div>
          </template>
          <v-card-item>
            <div class="text-body-2 font-weight-bold">Total Assets</div>
            <v-progress-linear
              :model-value="dashPD.totalAssets.operationalPercentage"
              :height="6"
              color="blue"
              striped
            ></v-progress-linear>
            <div class="text-caption">
              {{ `${dashPD.totalAssets.operationalPercentage}% operational` }}
            </div>
          </v-card-item>
        </v-card>
      </div>
      <!-- second card -->
      <div class="pa-2 performance-card">
        <v-card class="shd">
          <template #prepend>
            <div class="cdIcon bg-orange">
              <v-icon size="40">mdi-tune</v-icon>
            </div>
          </template>
          <template #title>
            <div class="text-h4 text-end font-weight-bold text-black">
              {{ dashPD.calibration.due }}
            </div>
          </template>
          <template #subtitle>
            <div class="text-end text-red">
              <v-icon size="18" color="red">mdi-alert </v-icon
              >{{ `${dashPD.calibration.overdue} Overdue` }}
            </div>
          </template>
          <v-card-item>
            <div class="text-body-2 font-weight-bold">Calibration Due</div>
            <v-progress-linear
              :model-value="dashPD.totalAssets.operationalPercentage"
              :height="6"
              color="orange"
              striped
            ></v-progress-linear>
            <div class="text-caption">
              {{ `${dashPD.calibration.overduePercentage}% overdue` }}
            </div>
          </v-card-item>
        </v-card>
      </div>
      <!-- Third card -->
      <div class="pa-2 performance-card">
        <v-card class="shd">
          <template #prepend>
            <div class="cdIcon bg-green">
              <v-icon size="40">mdi-package-variant</v-icon>
            </div>
          </template>
          <template #title>
            <div class="text-h4 text-end font-weight-bold text-black">
              {{ dashPD.bookValue.amount }}
            </div>
          </template>
          <template #subtitle>
            <div
              class="text-end"
              :class="YTDchange ? 'text-green-lighten-1' : 'text-red-lighten-1'"
            >
              <v-icon size="18" :color="YTDchange ? 'green' : 'red'">{{
                YTDchange ? 'mdi-arrow-up' : 'mdi-arrow-down'
              }}</v-icon>
              {{ calChangeYTD }}% YTD
            </div>
          </template>
          <v-card-item>
            <div class="text-body-2 font-weight-bold">Book Value</div>
            <v-progress-linear
              :model-value="dashPD.totalAssets.operationalPercentage"
              :height="6"
              color="green"
              striped
            ></v-progress-linear>
            <div class="text-caption">
              {{ `${dashPD.bookValue.percentageOfOriginal}% of original value` }}
            </div>
          </v-card-item>
        </v-card>
      </div>
      <!-- fourth card -->
      <div class="pa-2 performance-card">
        <v-card class="shd">
          <template #prepend>
            <div class="cdIcon bg-pink">
              <v-icon size="40">mdi-handshake</v-icon>
            </div>
          </template>
          <template #title>
            <div class="text-h4 text-end font-weight-bold text-black">
              {{ dashPD.serviceContracts.count }}
            </div>
          </template>
          <template #subtitle>
            <div class="text-end text-orange-lighten-1">
              <v-icon size="18" color="orange-lighten-1">mdi-clock</v-icon
              >{{ `${dashPD.serviceContracts.expiringSoon} expiring` }}
            </div>
          </template>
          <v-card-item>
            <div class="text-body-2 font-weight-bold">Total Assets</div>
            <v-progress-linear
              :model-value="dashPD.serviceContracts.activePercentage"
              :height="6"
              color="pink"
              striped
            ></v-progress-linear>
            <div class="text-caption">
              {{ `${dashPD.serviceContracts.activePercentage}% active` }}
            </div>
          </v-card-item>
        </v-card>
      </div>
      <!-- fifth card -->
      <div class="pa-2 performance-card">
        <v-card class="shd">
          <template #prepend>
            <div class="cdIcon bg-purple">
              <v-icon size="40">mdi-progress-check</v-icon>
            </div>
          </template>
          <template #title>
            <div class="text-h4 text-end font-weight-bold text-black">
              {{ dashPD.complianceRate.percentage }}%
            </div>
          </template>
          <template #subtitle>
            <div
              class="text-end"
              :class="cpRateChange ? 'text-green-lighten-1' : 'text-red-lighten-1'"
            >
              <v-icon size="18" :color="cpRateChange ? 'green-lighten-1' : 'red-lighten-1'">{{
                cpRateChange ? 'mdi-arrow-up' : 'mdi-arrow-down'
              }}</v-icon
              >{{ calCPRate }} this month
            </div>
          </template>
          <v-card-item>
            <div class="text-body-2 font-weight-bold">Compliance Rate</div>
            <v-progress-linear
              :model-value="dashPD.complianceRate.percentage"
              :height="6"
              color="purple"
              striped
            ></v-progress-linear>
            <div class="text-caption">
              {{ dashPD.complianceRate.status }}
            </div>
          </v-card-item>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { dashboard_Performance_data } from '@/data/dashboard'
export default {
  data() {
    return {
      dashPD: dashboard_Performance_data,
      YTDchange: true,
      cpRateChange: true,
    }
  },

  computed: {
    calChangeYTD() {
      if (this.dashPD.bookValue.changeYTD > 0) {
        this.YTDchange = true
        return this.dashPD.bookValue.changeYTD
      } else {
        this.YTDchange = false
        return Math.abs(this.dashPD.bookValue.changeYTD)
      }
    },
    calCPRate() {
      if (this.dashPD.complianceRate.changeThisMonth > 0) {
        this.cpRateChange = true
        return this.dashPD.complianceRate.changeThisMonth
      } else {
        this.cpRateChange = false
        return Math.abs(this.dashPD.complianceRate.changeThisMonth)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.performance-card {
  width: 20%;
}
</style>
