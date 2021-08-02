<template>
	<div class="app-section">
		<div class="app-wrapper">
			<div class="app-masonry">
				<div
					v-for="publicId in images"
					:key="publicId"
					:style="`background-image:url(${getImageUrl(publicId)})`"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			images: {
				type: Array,
				required: true
			}
		},
		methods: {
			getImageUrl(publicId) {
				const a = this.$img(
					publicId,
					{
						width: 600
					},
					{ provider: 'cloudinary' }
				)

				// const b = this.$cloudinary.image.url(publicId, {
				// 	width: 600,
				// 	crop: 'scale'
				// })

				return a
			}
		}
	}
</script>

<style></style>
