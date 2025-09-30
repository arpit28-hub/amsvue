<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar order="1" title="Application bar"></v-app-bar>

    <v-navigation-drawer color="primary" permanent>
      <template #prepend>
        <v-img :src="glogo" width="200px" class="mx-auto pa-5"></v-img>
      </template>
      <Sidebar></Sidebar>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" >
      <v-container fluid>
        <v-sheet border="dashed md" color="surface-light" rounded="lg" width="100%">
          <RouterView></RouterView>
        </v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>
<script>
import Sidebar from './components/Sidebar.vue'
// import MainContent from './components/MainContent.vue'
import verticalNavBar from '@/data/VerticalNavBar'
import glogo from '@/assets/images/logos/asset-white-logo.png'
export default {
  name: 'MainLayout',
  components: { Sidebar },
  data() {
    return {
      navItem: verticalNavBar,
      glogo,
    }
  },
}
</script>
