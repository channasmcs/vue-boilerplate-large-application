import Vue from 'vue'
import Router from 'vue-router'

// child routes
import Home from '@/router/home'

Vue.use(Router)
const DefaultRoute = []

/**
setup default route here
example
const DefaultRoute = [{
  path: '/',
  name: '',
  component: ''
}]
 */

const ChildRoute = DefaultRoute.concat(
  Home
)
export default new Router({
  mode: 'history',
  routes: ChildRoute
})
