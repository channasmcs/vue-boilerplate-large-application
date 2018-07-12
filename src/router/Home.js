const home = resolve => require(['@/views/Static/Index'], resolve)
const about = resolve => require(['@/views/Static/About'], resolve)
const exampleForm = resolve => require(['@/views/Example/Form'], resolve)

export default [{
  path: '/',
  name: 'home',
  component: home
}, {
  path: '/about-us',
  name: 'about',
  component: about
}, {
  path: '/example',
  name: 'example',
  component: exampleForm,
  children: [{
    path: 'form',
    name: 'example-form',
    component: exampleForm
  }]
}]
