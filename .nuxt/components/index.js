import { wrapFunctional } from './utils'

export { default as HomeCard } from '../../components/HomeCard.vue'
export { default as HomeRow } from '../../components/HomeRow.vue'
export { default as ImageUploader } from '../../components/ImageUploader.vue'
export { default as PropertyDescription } from '../../components/PropertyDescription.vue'
export { default as PropertyDetails } from '../../components/PropertyDetails.vue'
export { default as PropertyGallery } from '../../components/PropertyGallery.vue'
export { default as PropertyHost } from '../../components/PropertyHost.vue'
export { default as PropertyMap } from '../../components/PropertyMap.vue'
export { default as PropertyReviews } from '../../components/PropertyReviews.vue'
export { default as ShortText } from '../../components/ShortText.vue'

export const LazyHomeCard = import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeRow = import('../../components/HomeRow.vue' /* webpackChunkName: "components/home-row" */).then(c => wrapFunctional(c.default || c))
export const LazyImageUploader = import('../../components/ImageUploader.vue' /* webpackChunkName: "components/image-uploader" */).then(c => wrapFunctional(c.default || c))
export const LazyPropertyDescription = import('../../components/PropertyDescription.vue' /* webpackChunkName: "components/property-description" */).then(c => wrapFunctional(c.default || c))
export const LazyPropertyDetails = import('../../components/PropertyDetails.vue' /* webpackChunkName: "components/property-details" */).then(c => wrapFunctional(c.default || c))
export const LazyPropertyGallery = import('../../components/PropertyGallery.vue' /* webpackChunkName: "components/property-gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyPropertyHost = import('../../components/PropertyHost.vue' /* webpackChunkName: "components/property-host" */).then(c => wrapFunctional(c.default || c))
export const LazyPropertyMap = import('../../components/PropertyMap.vue' /* webpackChunkName: "components/property-map" */).then(c => wrapFunctional(c.default || c))
export const LazyPropertyReviews = import('../../components/PropertyReviews.vue' /* webpackChunkName: "components/property-reviews" */).then(c => wrapFunctional(c.default || c))
export const LazyShortText = import('../../components/ShortText.vue' /* webpackChunkName: "components/short-text" */).then(c => wrapFunctional(c.default || c))
