<template>
  <div>
    <div>{{storeValue}}</div>
    <div>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'StoreExample',
  computed: {
    ...mapGetters('storeExample', ['storeValue'])
  },
  methods: {
    ...mapMutations('storeExample', ['increment', 'decrement']),
    ...mapActions('storeExample', ['save'])
  }
}
</script>

<style scoped>
</style>
