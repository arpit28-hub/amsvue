<template>
  <v-list nav class="main-sidebar">
    <div v-for="(item, title) in navItem" :key="title">
      <v-list-item v-if="!item.subMenu" link slim>
        {{ item.title }}
        <template #prepend>
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </template>
      </v-list-item>
      <v-list-group v-else :value="item.title">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="item.icon"
            :title="item.title"
            slim
          ></v-list-item>
        </template>
        <v-list-item
          slim
          v-for="itemsub in item.subMenu"
          :key="itemsub.title"
          :prepend-icon="itemsub.icon"
          :title="itemsub.title"
          :value="itemsub.title"
        ></v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>

<script>
import VerticalNavBar from '@/data/VerticalNavBar'
export default {
  name: 'sidebar',
  data() {
    return {
      navItem: VerticalNavBar,
    }
  },
}
</script>

<style lang="scss" scoped></style>
