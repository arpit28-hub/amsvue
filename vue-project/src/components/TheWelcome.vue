<template>
  <v-layout class="rounded rounded-md border">
    <v-navigation-drawer permanent>
      <v-list nav>
        <div v-for="(item, title) in navItem" :key="title">
          <v-list-item v-if="!item.subMenu">
            {{ item.title }}
            <template #prepend>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </template>
          </v-list-item>
          <v-list-group v-else value="Actions">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="item.title"></v-list-item>
            </template>
            <v-list-item
              v-for="(item, i) in item.subMenu"
              :key="i"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.title"
            ></v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar title="Application bar"></v-app-bar>
    <v-main class="d-flex align-center justify-center" height="300">
      <v-container>
        <v-sheet border="dashed md" color="surface-light" height="200" rounded="lg" width="100%">
        </v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import verticalNavBar from '@/data/verticalNavBar'
export default {
  name: 'MainLayout',
  data() {
    return {
      navItem: verticalNavBar,
      welcome: 'hello world',
    }
  },
}
</script>

<style></style>
