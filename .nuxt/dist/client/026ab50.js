(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{371:function(t,n,e){t.exports={}},374:function(t,n,e){"use strict";e(371)},375:function(t,n,e){"use strict";e.r(n);e(206);var o={data:function(){return{isExpanded:!1,chunks:[]}},props:{text:{type:String,required:!0},target:{type:Number,required:!0}},computed:{isTooLong:function(){return 2===this.chunks.length},displayText:function(){return!this.isTooLong||this.isExpanded?this.chunks.join(" "):this.chunks[0]+"..."}},created:function(){this.chunks=this.getChunks()},methods:{getChunks:function(){var t=this.text.indexOf(" ",this.target);return this.text.length<=this.target||-1===t?[this.text]:[this.text.substring(0,t),this.text.substring(t)]}}},r=(e(374),e(25)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._v(t._s(t.displayText)+"\n\t"),t.isTooLong&&!t.isExpanded?e("button",{staticClass:"link",on:{click:function(n){t.isExpanded=!0}}},[t._v("\n\t\tread more\n\t")]):t._e(),t._v(" "),t.isTooLong&&t.isExpanded?e("button",{staticClass:"link",on:{click:function(n){t.isExpanded=!1}}},[t._v("\n\t\tread less\n\t")]):t._e()])}),[],!1,null,null,null);n.default=component.exports}}]);