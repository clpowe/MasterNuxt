export default {
	user(state, user) {
		state.isLoggedIn = !!user
		state.user = user
	}
}
