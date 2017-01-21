<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">MT tag search</h1>
    </md-toolbar>

    <div class="main-content">
      <search-textbox></search-textbox>
      <search-list></search-list>
    </div>

  </div>
</template>

<script>
import SearchList from './SearchList.vue'
import SearchTextbox from './SearchTextbox.vue'

export default {
  name: 'app',
  components: {
    SearchList,
    SearchTextbox
  }
}
</script>

<style scoped>
.main-content {
  padding: 16px;
}
</style>
