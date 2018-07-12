<style scoped>

</style>
<template>
    <div class="form">
      <form v-on:submit.prevent="SubmitForm" novalidate>
        <app-form-input label='Input title'>
            <input type="text" name="name" v-model="formData.name">
        </app-form-input>
        <app-form-button
            buttonClasses="ui button black"
            buttonType="submit"
            v-on:clicked="SubmitForm()">
        </app-form-button>
      </form>
    </div>
</template>
<script>
import formInput from '@/components/UI/Input.vue'
import formButton from '@/components/UI/Button.vue'
export default {
  data () {
    return {
      formData: {
        name: ''
      }
    }
  },
  components: {
    'app-form-input': formInput,
    'app-form-button': formButton
  },
  methods: {
    SubmitForm () {
    }
  }
}
</script>
