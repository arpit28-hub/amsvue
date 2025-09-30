<template>
  <div>
    <v-row>
      <v-col cols="auto" class="pa-2">
        <v-card  subtitle="The #1 Vue UI Library" >
          <template v-slot:title>
            <span class="font-weight-black">Welcome</span>
          </template>

          <v-card-text class="bg-surface-light pt-4"> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto" class="pa-2">
        <v-card class="mx-auto" subtitle="The #1 Vue UI Library" >
          <template v-slot:title>
            <span class="font-weight-black">Welcome </span>
          </template>

          <v-card-text class="bg-surface-light pt-4"> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto" class="pa-2">
        <v-card class="mx-auto" subtitle="The #1 Vue UI Library" >
          <template v-slot:title>
            <span class="font-weight-black">Welcome</span>
          </template>

          <v-card-text class="bg-surface-light pt-4"> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto" class="pa-2">
        <v-card class="mx-auto" subtitle="The #1 Vue UI Library" >
          <template v-slot:title>
            <span class="font-weight-black">Welcome </span>
          </template>

          <v-card-text class="bg-surface-light pt-4"> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto" class="pa-2">
        <v-card class="mx-auto" subtitle="The #1 Vue UI Library" >
          <template v-slot:title>
            <span class="font-weight-black">Welcome </span>
          </template>

          <v-card-text class="bg-surface-light pt-4"> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { dashboard_Performance_data } from '@/data/dashboard'
export default {
  data() {
    return {
      dashPD: dashboard_Performance_data,
    }
  },
}
</script>

<style lang="scss" scoped></style>
