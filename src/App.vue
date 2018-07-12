<template>
  <div id="app">
    <app-header></app-header>
      <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './views/Partials/Header.vue'
import footer from './views/Partials/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': header,
    'app-footer': footer
  }
}
</script>
