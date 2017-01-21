<template>
  <div>
    <md-subheader>{{ totalResults }} results</md-subheader>
    <md-list class="custom-list md-triple-line">
      <template v-for="item in items">
        <md-list-item>
          <div class="md-list-text-container">
            <p>
              <a :href="item.permalink" target="_blank">{{ item.title }}</a>
            </p>
            <span>
              <template v-for="tag in item.tags">
                <md-chip>{{tag}}</md-chip>
              </template>
            </span>
            <span v-html="item.excerpt"></span>
          </div>
        </md-list-item>
      </template>
    </md-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'items',
    'totalResults'
  ])
}
</script>

<style scoped>
/*
.md-subheader {
  min-height: 20px;
}
*/
</style>
