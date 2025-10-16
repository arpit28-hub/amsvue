<template>
  <div class="py-10 apex-chart">
    <v-row>
      <v-col cols="4">
        <div class="pa-4 chart-box">
          <div class="text-h6 text-start font-weight-bold text-capitalize">Asset Distribution</div>
          <div id="chart">
            <apexchart
              type="donut"
              width="380"
              :options="chartOptions1"
              :series="series1"
            ></apexchart>
          </div>
        </div>
      </v-col>
      <v-col cols="4" class="text-center">
        <div class="pa-4 chart-box">
          <div class="text-h6 text-start font-weight-bold text-capitalize">Depreciation Status</div>
          <div id="chart">
            <apexchart
              type="donut"
              width="380"
              :options="chartOptions2"
              :series="series2"
            ></apexchart>
          </div>
        </div>
      </v-col>
      <v-col cols="4" class="text-center">
        <div class="pa-4 h-100 chart-box">
          <div class="text-h6 text-start font-weight-bold text-capitalize">
            Service Contracts Overview
          </div>
          <div v-for="(item, index) in overview" :key="index">
            <v-card class="my-3" :style="{ backgroundColor: `${item.bg}` }">
              <template #prepend>
                <v-icon size="15" :color="item.color">mdi-circle</v-icon>
              </template>
              <template #title>
                <div class="text-body-1 font-weight-bold" :style="{ color: `${item.color}` }">
                  {{ item.title }}
                </div>
              </template>
              <template #append>
                <div class="text-h5" :style="{ color: `${item.color}` }">{{ item.value }}</div>
              </template>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { service_contracts_overview } from '@/data/dashboard'
import VueApexCharts from 'vue3-apexcharts'
export default {
  name: 'charts',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      overview: service_contracts_overview,
      series1: [15, 5, 35, 25, 20],
      series2: [25, 10, 30, 35],
      chartOptions2: {
        chart: {
          width: 380,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
            expandOnClick: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: ['0-2 Years', '3-5 Years', '6-10 Years', '10+ Years'],
        fill: {
          type: 'gradient',
        },
        legend: {
          position: 'bottom',
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },

      chartOptions1: {
        chart: {
          width: 380,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
            expandOnClick: true,
          },
        },
        labels: ['Manufacturing', 'IT Equipment', 'Vehicles', 'Facilities', 'Tools'],

        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          position: 'bottom',
        },
        title: {},
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
