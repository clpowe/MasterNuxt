exports.ids = [9,10];
exports.modules = {

/***/ 33:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


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


/***/ })

};;
//# sourceMappingURL=property-reviews.js.map