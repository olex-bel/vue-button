import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      const redirect = sessionStorage.getItem('redirect');

      if (redirect !== null) {
        sessionStorage.removeItem('redirect');
        next(redirect);
      } else {
        next();
      }
    }
  },
  {
    path: '/buttons',
    name: 'Buttons Demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue')
  },
  {
    path: '/windbnb',
    name: 'Windbnb Demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "windbnb" */ '../views/Windbnb.vue')
  },
  { path: "/404", component: () => import(/* webpackChunkName: "404" */ '../views/PageNotFound.vue') },
  { path: "*", component: () => import(/* webpackChunkName: "all" */ '../views/PageNotFound.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
