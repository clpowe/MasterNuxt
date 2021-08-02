exports.ids = [13,4,5,6,7,8,9,10];
exports.modules = {

/***/ 33:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((number, singularWord) => {
  const text = `${number} ${singularWord}`;
  if (number == 1) return text;
  return text + 's';
});

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (dateStr => {
  const date = new Date(dateStr);
  return date.toLocaleString(undefined, {
    month: 'long',
    year: 'numeric'
  });
});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShortText_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShortText.vue?vue&type=template&id=77dff20b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.displayText)+"\n\t")+((_vm.isTooLong && !_vm.isExpanded)?("<button class=\"link\">\n\t\tread more\n\t</button>"):"<!---->")+" "+((_vm.isTooLong && _vm.isExpanded)?("<button class=\"link\">\n\t\tread less\n\t</button>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShortText.vue?vue&type=template&id=77dff20b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShortText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ShortTextvue_type_script_lang_js_ = ({
  data() {
    return {
      isExpanded: false,
      chunks: []
    };
  },

  props: {
    text: {
      type: String,
      required: true
    },
    target: {
      type: Number,
      required: true
    }
  },
  computed: {
    isTooLong() {
      return this.chunks.length === 2;
    },

    displayText() {
      if (!this.isTooLong || this.isExpanded) return this.chunks.join(' ');
      return this.chunks[0] + '...';
    }

  },

  created() {
    this.chunks = this.getChunks();
  },

  methods: {
    getChunks() {
      const position = this.text.indexOf(' ', this.target);
      if (this.text.length <= this.target || position === -1) return [this.text];
      return [this.text.substring(0, position), this.text.substring(position)];
    }

  }
});
// CONCATENATED MODULE: ./components/ShortText.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShortTextvue_type_script_lang_js_ = (ShortTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ShortText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShortTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b8a0353e"
  
)

/* harmony default export */ var ShortText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDetails.vue?vue&type=template&id=3617108c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-wrapper"},[_vm._ssrNode("<div class=\"app-double-column app-property-details\">","</div>",[_vm._ssrNode("<div><h1>"+_vm._ssrEscape(_vm._s(_vm.home.title))+"</h1> <div class=\"app-flex\"><div class=\"app-address\">"+_vm._ssrEscape("\n\t\t\t\t\t"+_vm._s(_vm.home.location.address)+"\n\t\t\t\t\t"+_vm._s(_vm.home.location.city)+" "+_vm._s(_vm.home.location.state)+"\n\t\t\t\t\t"+_vm._s(_vm.home.location.country)+"\n\t\t\t\t")+"</div> <div class=\"app-rating\">"+_vm._ssrEscape("\n\t\t\t\t\t"+_vm._s(_vm.home.reviewValue)+" ")+"<span>"+_vm._ssrEscape(_vm._s(_vm.home.reviewCount))+"</span></div></div> <div class=\"app-property-details-footer\">"+_vm._ssrEscape("\n\t\t\t\t"+_vm._s(_vm.pluralize(_vm.home.guests, 'guest'))+" ·\n\t\t\t\t"+_vm._s(_vm.pluralize(_vm.home.bedrooms, 'room'))+" ·\n\t\t\t\t"+_vm._s(_vm.pluralize(_vm.home.beds, 'bed'))+" ·\n\t\t\t\t"+_vm._s(_vm.pluralize(_vm.home.bathrooms, 'bath'))+"\n\t\t\t")+"</div></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"app-price\">"+_vm._ssrEscape("\n\t\t\t\t$"+_vm._s(_vm.home.pricePerNight)+" ")+"<span>/night</span></div> "),_c('client-only',[_c('date-picker',{staticClass:"app-search",attrs:{"is-range":"","timezone":"UTC","modelConfig":{ timeAdjust: '00:00:00' }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var inputValue = ref.inputValue;
var inputEvents = ref.inputEvents;
return [_c('input',_vm._g({staticClass:"datepicker",domProps:{"value":inputValue.start}},inputEvents.start)),_vm._v(" "),_c('input',_vm._g({staticClass:"datepicker",domProps:{"value":inputValue.end}},inputEvents.end))]}}]),model:{value:(_vm.range),callback:function ($$v) {_vm.range=$$v},expression:"range"}})],1),_vm._ssrNode(" <button class=\"app-big-button\">\n\t\t\t\tRequest to book!\n\t\t\t</button>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyDetails.vue?vue&type=template&id=3617108c&

// EXTERNAL MODULE: ./utils/pluralize.js
var pluralize = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PropertyDetailsvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },

  mounted() {
    if (this.$route.query.result == 'success') {
      alert('Success!');
    }
  },

  methods: {
    pluralize: pluralize["a" /* default */],

    checkout() {
      const start = this.range.start.getTime() / 1000;
      const end = this.range.end.getTime() / 1000;
      this.$stripe.checkout(this.home.objectID, start, end);
    }

  },

  data() {
    return {
      range: {
        start: null,
        end: null
      }
    };
  }

});
// CONCATENATED MODULE: ./components/PropertyDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyDetailsvue_type_script_lang_js_ = (PropertyDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyDetails.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "76d2f645"
  
)

/* harmony default export */ var PropertyDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyGallery.vue?vue&type=template&id=66995abc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-section"},[_vm._ssrNode("<div class=\"app-wrapper\"><div class=\"app-masonry\">"+(_vm._ssrList((_vm.images),function(publicId){return ("<div"+(_vm._ssrStyle(null,("background-image:url(" + (_vm.getImageUrl(publicId)) + ")"), null))+"></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyGallery.vue?vue&type=template&id=66995abc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyGallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PropertyGalleryvue_type_script_lang_js_ = ({
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImageUrl(publicId) {
      const a = this.$img(publicId, {
        width: 600
      }, {
        provider: "cloudinary"
      }); // const b = this.$cloudinary.image.url(publicId, {
      //   width: 600,
      //   crop: "scale"
      // });

      return a;
    }

  }
});
// CONCATENATED MODULE: ./components/PropertyGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyGalleryvue_type_script_lang_js_ = (PropertyGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyGallery.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6fdd7355"
  
)

/* harmony default export */ var PropertyGallery = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDescription.vue?vue&type=template&id=524dd789&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-background-grey"},[_vm._ssrNode("<div class=\"app-wrapper\"><div class=\"app-double-column\"><div class=\"app-padded-vertical\"><h2 class=\"app-subtitle\">Description</h2> <div class=\"app-description\">"+_vm._ssrEscape(_vm._s(_vm.home.description))+"</div></div> <div class=\"app-padded-vertical\">"+(_vm._ssrList((_vm.home.features),function(feature,index){return ("<div class=\"app-tag\">"+_vm._ssrEscape("\n\t\t\t\t\t"+_vm._s(feature)+"\n\t\t\t\t")+"</div>")}))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyDescription.vue?vue&type=template&id=524dd789&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyDescription.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PropertyDescriptionvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/PropertyDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyDescriptionvue_type_script_lang_js_ = (PropertyDescriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyDescription.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyDescriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "84a22502"
  
)

/* harmony default export */ var PropertyDescription = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyMap.vue?vue&type=template&id=f9f3c572&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"app-wrapper app-padded-vertical\"><h2 class=\"app-subtitle\">Location</h2> <p class=\"app-discription\">"+_vm._ssrEscape("\n\t\t\t"+_vm._s(_vm.home.location.address)+"\n\t\t\t"+_vm._s(_vm.home.location.city)+"\n\t\t\t"+_vm._s(_vm.home.location.state)+"\n\t\t\t"+_vm._s(_vm.home.location.country)+"\n\t\t")+"</p> <div class=\"app-map\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyMap.vue?vue&type=template&id=f9f3c572&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PropertyMapvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  }

});
// CONCATENATED MODULE: ./components/PropertyMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyMapvue_type_script_lang_js_ = (PropertyMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyMap.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "739879df"
  
)

/* harmony default export */ var PropertyMap = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyReviews.vue?vue&type=template&id=69411862&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-padded-vertical"},[_vm._ssrNode("<div class=\"app-wrapper\">","</div>",[_vm._ssrNode("<div class=\"app-testimonials\">","</div>",_vm._l((_vm.reviews),function(review,index){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"app-testimonial-header\"><div><img"+(_vm._ssrAttr("src",review.reviewer.image))+" alt></div> <div><p class=\"app-testimonial-name\">"+_vm._ssrEscape("\n\t\t\t\t\t\t\t"+_vm._s(review.reviewer.name)+"\n\t\t\t\t\t\t")+"</p> <p class=\"app-testimonial-date\">"+_vm._ssrEscape("\n\t\t\t\t\t\t\t"+_vm._s(_vm.shortDate(review.date))+"\n\t\t\t\t\t\t")+"</p></div></div> "),_vm._ssrNode("<div class=\"app-testimonial-body\">","</div>",[_c('short-text',{attrs:{"text":review.comment,"target":150}})],1)],2)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyReviews.vue?vue&type=template&id=69411862&

// EXTERNAL MODULE: ./utils/shortDate.js
var shortDate = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyReviews.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PropertyReviewsvue_type_script_lang_js_ = ({
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  methods: {
    shortDate: shortDate["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/PropertyReviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyReviewsvue_type_script_lang_js_ = (PropertyReviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyReviews.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyReviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4213639e"
  
)

/* harmony default export */ var PropertyReviews = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShortText: __webpack_require__(37).default})


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHost.vue?vue&type=template&id=3aeb78ef&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-background-grey"},[_vm._ssrNode("<div class=\"app-wrapper app-padded-vertical\"><div class=\"app-host-header\"><div><img"+(_vm._ssrAttr("src",_vm.user.image))+" alt></div> <div><div class=\"app-host-name\">"+_vm._ssrEscape("\n\t\t\t\t\t"+_vm._s(_vm.user.name)+"\n\t\t\t\t")+"</div> <div class=\"app-host-date\">"+_vm._ssrEscape("\n\t\t\t\t\tJoined in "+_vm._s(_vm.shortDate(_vm.user.joined))+"\n\t\t\t\t")+"</div> <div class=\"app-flex\"><div class=\"app-host-reviews\">"+_vm._ssrEscape(_vm._s(_vm.user.reviewCount)+" reviews")+"</div></div></div></div> <div class=\"app-host-description\">"+_vm._ssrEscape(_vm._s(_vm.user.description))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PropertyHost.vue?vue&type=template&id=3aeb78ef&

// EXTERNAL MODULE: ./utils/shortDate.js
var shortDate = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PropertyHost.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PropertyHostvue_type_script_lang_js_ = ({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    shortDate: shortDate["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/PropertyHost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PropertyHostvue_type_script_lang_js_ = (PropertyHostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/PropertyHost.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PropertyHostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "34ff3c96"
  
)

/* harmony default export */ var PropertyHost = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=template&id=caceb3aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('PropertyGallery',{attrs:{"images":_vm.home.images}}),_vm._ssrNode(" "),_c('PropertyDetails',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('PropertyDescription',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('PropertyMap',{attrs:{"home":_vm.home}}),_vm._ssrNode(" "),_c('PropertyReviews',{attrs:{"reviews":_vm.reviews}}),_vm._ssrNode(" "),_c('PropertyHost',{attrs:{"user":_vm.user}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=template&id=caceb3aa&

// EXTERNAL MODULE: ./components/PropertyDetails.vue + 4 modules
var PropertyDetails = __webpack_require__(39);

// EXTERNAL MODULE: ./components/PropertyGallery.vue + 4 modules
var PropertyGallery = __webpack_require__(40);

// EXTERNAL MODULE: ./components/ShortText.vue + 4 modules
var ShortText = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    ShortText: ShortText["default"],
    PropertyGallery: PropertyGallery["default"],
    PropertyDetails: PropertyDetails["default"]
  },

  head() {
    return {
      title: this.home.title
    };
  },

  async asyncData({
    params,
    $dataApi,
    error
  }) {
    const responses = await Promise.all([$dataApi.getHome(params.id), $dataApi.getReviewsByHomeId(params.id), $dataApi.getUserByHomeId(params.id)]);
    const badResponse = responses.find(response => !response.ok);
    if (badResponse) return error({
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
        month: 'long',
        year: 'numeric'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/home/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5212f826"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PropertyGallery: __webpack_require__(40).default,PropertyDetails: __webpack_require__(39).default,PropertyDescription: __webpack_require__(44).default,PropertyMap: __webpack_require__(45).default,PropertyReviews: __webpack_require__(46).default,PropertyHost: __webpack_require__(47).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map