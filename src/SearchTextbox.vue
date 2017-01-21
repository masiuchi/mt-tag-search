<template>
  <div>
    <md-input-container>
      <md-icon class="md-primary">search</md-icon>
      <md-input placeholder="Search" v-model="searchText" @change="searchWithWait"></md-input>
    </md-input-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ObjectAssign from 'object-assign'

export default {
  created () {
    this.searchImmediately()
  },
  data () {
    return {
      searchText: '',
      timerQueue: []
    }
  },
  methods: ObjectAssign(
    mapActions(['searchMTTags']),
    {
      reset () {
        this.searchText = ''
        this.searchImmediately()
      },
      searchImmediately () {
        this.timerQueue = []
        this.searchMTTags(this.searchText)
      },
      searchWithWait () {
        const that = this
        const id = setTimeout(() => {
          if (that.timerQueue.length === 1) {
            that.searchMTTags(that.searchText)
          }
          that.timerQueue.shift()
        }, 500)
        this.timerQueue.push(id)
      }
    }
  )
}
</script>

<style scoped>
</style>
