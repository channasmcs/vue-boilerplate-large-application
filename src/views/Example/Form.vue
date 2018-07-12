<style scoped>

</style>
<template>
      <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
               <app-example-form style="padding: 74px;"></app-example-form>
            </div>
        </div>
    </div>
</template>
<script>

import exampleForm from '@/components/Example/Form.vue'
export default {
  components: {
    'app-example-form': exampleForm
  }
}
</script>
