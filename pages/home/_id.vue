<template>
  <div class="app-container">
    <PropertyGallery :images="home.images" />
    <PropertyDetails :home="home" />
    <PropertyDescription :home="home" />
    <PropertyMap :home="home" />
    <PropertyReviews :reviews="reviews" />
    <PropertyHost :user="user" />
  </div>
</template>

<script>
import PropertyDetails from "../../components/PropertyDetails.vue";
import PropertyGallery from "../../components/PropertyGallery.vue";
import ShortText from "../../components/ShortText.vue";

export default {
  components: { ShortText, PropertyGallery, PropertyDetails },
  head() {
    return {
      title: this.home.title,
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-type", property: "og:title", content: this.home.title },
        {
          hid: "og-type",
          property: "og:description",
          content: this.home.description
        },
        {
          hid: "og-image",
          property: "og:image",
          content: this.$img(
            this.home.images[0],
            { width: 1200 },
            { provider: "cloudinary " }
          )
        },
        {
          hid: "og-url",
          property: "og:url",
          content: `${this.$config.rootUrl}/home/${this.home.objectID}`
        }
      ]
    };
  },
  async asyncData({ params, $dataApi, error }) {
    const responses = await Promise.all([
      $dataApi.getHome(params.id),
      $dataApi.getReviewsByHomeId(params.id),
      $dataApi.getUserByHomeId(params.id)
    ]);
    const badResponse = responses.find(response => !response.ok);
    if (badResponse)
      return error({
        statusCode: badResponse.status,
        message: badResponse.statusText
      });

    return {
      home: responses[0].json,
      reviews: responses[1].json.hits,
      user: responses[2].json.hits[0]
    };
  },

  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleString(undefined, {
        month: "long",
        year: "numeric"
      });
    }
  }
};
</script>
