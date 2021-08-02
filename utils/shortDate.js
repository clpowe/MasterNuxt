export default (dateStr) => {
	const date = new Date(dateStr)
	return date.toLocaleString(undefined, {
		month: 'long',
		year: 'numeric'
	})
}
