const home = resolve => require(['@/views/Static/Index'], resolve)
const about = resolve => require(['@/views/Static/About'], resolve)

export default [{
  path: '/',
  name: 'home',
  component: home
}, {
  path: '/about-us',
  name: 'about',
  component: about
}]
