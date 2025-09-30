<template>
      <v-container>
        <v-sheet
          border="dashed md"
          color="surface-light"
          height="200"
          rounded="lg"
          width="100%"
        >
      <RouterView></RouterView>
      </v-sheet>
      </v-container>
</template>

<script>
export default {
  name:'main',
}
</script>

<style lang="scss" scoped></style>
