<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar order="1" color="grey-100">
      <VSpacer />
      <Appbar></Appbar>
    </v-app-bar>

    <v-navigation-drawer color="primary" permanent>
      <template #prepend>
        <v-img :src="glogo" width="200px" class="mx-auto pa-5"></v-img>
      </template>
      <Sidebar></Sidebar>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <v-container fluid class="">
        <RouterView></RouterView>
      </v-container>
    </v-main>
  </v-layout>
</template>
<script>
import Sidebar from './components/Sidebar.vue'
import verticalNavBar from '@/data/VerticalNavBar'
import glogo from '@/assets/images/logos/asset-white-logo.png'
import Appbar from './components/Appbar.vue'
export default {
  name: 'MainLayout',
  components: { Sidebar, Appbar },
  data() {
    return {
      navItem: verticalNavBar,
      glogo,
    }
  },
}
</script>
