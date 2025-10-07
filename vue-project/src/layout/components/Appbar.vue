<template>
  <div class="pa-4 d-flex w-100">
    <v-breadcrumbs :items="breadcrumbs" :divider="breadcrumbs.length > 2 ? '>' : ''">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :to="item.to"
          class="text-capitalize font-weight-bold text-h6"
          :disabled="item.disabled"
        >
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-btn class="mx-4" icon><v-icon>mdi-refresh</v-icon> </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn class="ms-4" icon>
      <v-avatar color="grey-200"><v-icon>mdi-account</v-icon></v-avatar>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Appbar',
  data() {
    return {}
  },
  computed: {
    breadcrumbs() {
      return this.$route.matched.map((route, index, arr) => ({
        text: route.meta?.breadcrumb || route.name, // Use meta if available
        to: route.path,
        disabled: index === arr.length - 1, // last one = current page
      }))
    },
  },
}
</script>

<style lang="scss" scoped></style>
