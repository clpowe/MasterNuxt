import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HomeCard: () => import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => wrapFunctional(c.default || c)),
  HomeRow: () => import('../../components/HomeRow.vue' /* webpackChunkName: "components/home-row" */).then(c => wrapFunctional(c.default || c)),
  ImageUploader: () => import('../../components/ImageUploader.vue' /* webpackChunkName: "components/image-uploader" */).then(c => wrapFunctional(c.default || c)),
  PropertyDescription: () => import('../../components/PropertyDescription.vue' /* webpackChunkName: "components/property-description" */).then(c => wrapFunctional(c.default || c)),
  PropertyDetails: () => import('../../components/PropertyDetails.vue' /* webpackChunkName: "components/property-details" */).then(c => wrapFunctional(c.default || c)),
  PropertyGallery: () => import('../../components/PropertyGallery.vue' /* webpackChunkName: "components/property-gallery" */).then(c => wrapFunctional(c.default || c)),
  PropertyHost: () => import('../../components/PropertyHost.vue' /* webpackChunkName: "components/property-host" */).then(c => wrapFunctional(c.default || c)),
  PropertyMap: () => import('../../components/PropertyMap.vue' /* webpackChunkName: "components/property-map" */).then(c => wrapFunctional(c.default || c)),
  PropertyReviews: () => import('../../components/PropertyReviews.vue' /* webpackChunkName: "components/property-reviews" */).then(c => wrapFunctional(c.default || c)),
  ShortText: () => import('../../components/ShortText.vue' /* webpackChunkName: "components/short-text" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
