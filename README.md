# vue-boilerplate-large-application
> Organize Vue.js Application and Make It Scale (life in vue js)

### Vue boilerplate large application  codebase containing demo large application architecture with example t

please read full article 
[Organize Vue.js Application and Make It Scale (life in vue js)](https://medium.com/@channasmcs/organize-vue-js-application-and-make-it-scale-life-in-vue-js-28a40cb94dfe)

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

###/api
this folder contain all http request (API call). i used axios as HTTP client for making api calls instead of vue-resource. Axios is a very popular JavaScript library for making HTTP requests. It’ s an HTTP client that makes use of the modern Promises API by default and runs on both the client and the server.

###/assets
in assets folder contain image and common css files. but recommend deal with CDN

###/library
this folder contain most common and nature fils of your application. you can make it as a global variable then import the library into necessary file:


###/components
Components are reusable Vue instances in application.basically you can create custom element and reuse inside application. try to keep well organize file structure for components its very help when reuse and customize. HTML, JS, and CSS are all located in one single file. this is okay for small components, and you could argue that it promotes keeping things simple and breaking big components into many smaller components. and keep readme file for each components. it very help to understand other developer what this component and how use


###/transforms
some time you have deal with non standardize data. so you have to reformat for standard output or only load necessary data in to DOM . transformers give you the flexibility to create a format for JSON that you need.

###/router
Vue Router is the official router in vue js . i split in to child files to keeping things simple. nice article

/view
this is main layout folder. you can Utilizing layout to render components to DOM

###/vuex
Vuex is a state management in Vue.js. It working as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

