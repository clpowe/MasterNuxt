exports.ids = [3];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUploader.vue?vue&type=template&id=1b95849a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"file\" accept=\".jpeg,.jpg,image/jpg\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ImageUploader.vue?vue&type=template&id=1b95849a&

// EXTERNAL MODULE: ./utils/fetchUtils.js
var fetchUtils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ImageUploader.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var ImageUploadervue_type_script_lang_js_ = ({
  methods: {
    async uploadFile(e) {
      const file = e.target.files[0];
      if (!file) return;
      const filename = file.name.split('.').slice(0, -1).join('.') + Date.now();
      const options = {
        timestamp: Date.now(),
        public_id: filename
      };
      const response = await Object(fetchUtils["b" /* unWrap */])(await fetch('/api/cloudinary/signature', {
        method: 'POST',
        body: JSON.stringify(options),
        headers: {
          'Content-Type': 'application/json'
        }
      }));
      const signature = response.json.signature;

      const readData = fileObj => new Promise(resolve => {
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);

        reader.readAsDataURL(fileObj);
      });

      const data = await readData(file);
      const asset = await this.$cloudinary.upload(data, { ...options,
        apiKey: this.$config.cloudinary.apiKey,
        signature
      });
      this.$emit('file-uploaded', asset.public_id);
    }

  }
});
// CONCATENATED MODULE: ./components/ImageUploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageUploadervue_type_script_lang_js_ = (ImageUploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ImageUploader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ImageUploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71781681"
  
)

/* harmony default export */ var ImageUploader = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=image-uploader.js.map