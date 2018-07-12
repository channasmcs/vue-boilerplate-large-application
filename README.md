# vue-boilerplate-large-application
> Organize Vue.js Application and Make It Scale (life in vue js)

### Vue boilerplate large application  codebase containing demo large application architecture with example t

## Build Setup

The stack is built using [vue-cli webpack](https://github.com/vuejs-templates/webpack) so to get started all you have to do is:
``` bash
# install dependencies
> npm install
# serve with hot reload at localhost:8080
> npm run dev
```

Other commands available are:
``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run single unit tests
npm run unit

# run continous unit tests
npm run units

# run e2e tests
npm run e2e

# run all tests
npm test
```

# Examples
In applicateion contain some hint and example and also perbuild :

## 1. Setup Axio js with Globel HTTPS Handler 
already function common HTTPS handler to easy apply with API

 example file path   
 
[ /src/library/Common/HttpHandler.js](https://github.com/vuejs-templates/webpack)
[ src/components/Example/Form.vue](https://github.com/channasmcs/vue-boilerplate-large-application/blob/master/src/components/Example/Form.vue)
   
    
``` bash
    postSampleAction(
        this.formData,
        response => {
            // after POST sucess 
        },
        error => {
    }
    getSampleAction(
        id,
        response => {
            // after GET sucess     
        },
        error => {}
    )
    updateSampleAction(
        id,
        this.formData,
          (response) => {
          this.load = false
            // after PUT sucess
        }, error => {
        }
    )
    deleteSampleAction(
        {id:id},
        response => {
           // after DELETE sucess   
        },
        error => {
             
        }
    )
```

## 1. Setup reusable components
basic example how use reusable components with vue js

[ /src/components/UI/Input.vue](https://github.com/channasmcs/vue-boilerplate-large-application/blob/master/src/components/UI/Input.vue)

``` bash
# In DOM 
<app-form-input label='Input title'>
    <input type="text" name="name" v-model="formData.name">
</app-form-input>
```
