import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _44316f1c = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _08e8e37e = () => interopDefault(import('../pages/admin/homes.vue' /* webpackChunkName: "pages/admin/homes" */))
const _141397bd = () => interopDefault(import('../pages/no-access.vue' /* webpackChunkName: "pages/no-access" */))
const _1d7fbbaa = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _77bfe94d = () => interopDefault(import('../pages/home/_id.vue' /* webpackChunkName: "pages/home/_id" */))
const _12c21b1f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _44316f1c,
    name: "admin",
    children: [{
      path: "homes",
      component: _08e8e37e,
      name: "admin-homes"
    }]
  }, {
    path: "/no-access",
    component: _141397bd,
    name: "no-access"
  }, {
    path: "/search",
    component: _1d7fbbaa,
    name: "search"
  }, {
    path: "/home/:id?",
    component: _77bfe94d,
    name: "home-id"
  }, {
    path: "/",
    component: _12c21b1f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
