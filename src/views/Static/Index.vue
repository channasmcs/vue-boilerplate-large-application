<style scoped>

</style>
<template>
   <div class="container">
        <app-hello-world></app-hello-world>
    </div>
</template>
<script>

import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    'app-hello-world': HelloWorld
  }
}
</script>
