exports.ids = [11];
exports.modules = {

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin.vue?vue&type=template&id=0338969a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-4"},[_vm._ssrNode("<h1 class=\"text-2xl font-bold\">Admin</h1> "),_vm._ssrNode("<div class=\"bg-gray-200 p-2\">","</div>",[_c('nuxt-link',{attrs:{"to":"/admin/homes/"}},[_vm._v("Homes")])],1),_vm._ssrNode(" "),_c('nuxt-child')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin.vue?vue&type=template&id=0338969a&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(28);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin.vue?vue&type=script&lang=js&
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

/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  asyncData({
    $config,
    redirect
  }) {
    if (!external_js_cookie_default.a.get($config.auth.cookieName)) {
      redirect('/no-access/');
    }
  }

});
// CONCATENATED MODULE: ./pages/admin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1cb1123a"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=admin.js.map