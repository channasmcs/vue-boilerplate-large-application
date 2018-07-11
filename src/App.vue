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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
