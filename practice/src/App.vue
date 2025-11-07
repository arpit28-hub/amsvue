<script>
import { mapActions, mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['temp'],['']),
  },
  methods: {
    handleClick() {
      alert('hellow')
    },
  },
}
</script>

<template>
  <div>
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
      <v-btn @click="handleClick" class="bg-secondary">hello</v-btn>
    </p>
    
    <h4>{{ temp }}</h4>
  </div>
</template>

<!-- <style scoped></style> -->
