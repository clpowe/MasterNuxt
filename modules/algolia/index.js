import bodyParser from 'body-parser'
import userRoughter from './routers/user'
import homesRoughter from './routers/homes'
import getApis from './apis'

export default function() {
	const algoliaConfig = this.options.privateRuntimeConfig.algolia
	const apis = getApis(algoliaConfig)

	this.nuxt.hook('render:setupMiddleware', (app) => {
		app.use(bodyParser.json())
		app.use('/api/user', userRoughter(apis))
		app.use('/api/homes', homesRoughter(apis))
	})
}
