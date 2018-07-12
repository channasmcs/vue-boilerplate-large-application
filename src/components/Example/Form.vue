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
/* 
eslint-disable 
*/
import { postSampleAction, getSampleAction,	updateSampleAction,	deleteSampleAction } from '@/api/SampleAPI'
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
      postSampleAction(
          this.formData,
          response => {
               // after POST sucess 
          },
          error => {
              
          }
      )
    },
    Getdata(id) {
      getSampleAction(
        id,
      response => {
           // after GET sucess     
      },
        error => {}
      )
    },
    update(id) {
      updateSampleAction(
        id,
        this.formData,
          (response) => {
          this.load = false
            // after PUT sucess
        }, error => {

        }
      )
    },
    delete(id){
      deleteSampleAction(
        {id:id},
        response => {
           // after DELETE sucess   
        },
        error => {
             
        }
      )
    }
  }
}
</script>
