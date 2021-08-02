exports.ids = [5];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((number, singularWord) => {
  const text = `${number} ${singularWord}`;
  if (number == 1) return text;
  return text + 's';
});

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

/***/ })

};;
//# sourceMappingURL=property-details.js.map