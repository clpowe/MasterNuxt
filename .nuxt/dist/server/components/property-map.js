exports.ids = [8];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=property-map.js.map