webpackJsonp([2],{493:function(t,e,o){function n(t){o(632)}var a=o(8)(o(575),o(669),n,"data-v-f59841ec",null);t.exports=a.exports},521:function(t,e,o){"use strict";function n(t){return/^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wz\.com$/i.test(t.trim())}function a(t,e){for(var o=0;o<e.length;o++)if(t===e[o])return!0;return!1}e.a=n,e.b=a},522:function(t,e,o){"use strict";e.__esModule=!0;var n=o(529),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e,o){return e in t?(0,a.default)(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},529:function(t,e,o){t.exports={default:o(531),__esModule:!0}},531:function(t,e,o){o(532);var n=o(11).Object;t.exports=function(t,e,o){return n.defineProperty(t,e,o)}},532:function(t,e,o){var n=o(21);n(n.S+n.F*!o(27),"Object",{defineProperty:o(22).f})},556:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(522),a=o.n(n),s=o(521);e.default={name:"Button",props:{type:{validator:function(t){return o.i(s.b)(t,["swipe","close","zoningin","corners","slice","alternate","smoosh","overlap","overlap","collision"])}},htmlType:{default:"button",validator:function(t){return o.i(s.b)(t,["button"])}},shap:{validator:function(t){return o.i(s.b)(t,["out","in","vertical","horizontal"])}},icon:String},data:function(){return{showSlot:!0}},computed:{classes:function(){var t;return["wz-coolhover",(t={},a()(t,"wz-coolhover-"+this.type+"-"+this.shap,!(!this.type||!this.shap||"swipe"!==this.type&&"overlap"!==this.type)),a()(t,"wz-coolhover-"+this.type,!!this.type&&!this.shap),t)]},iconClasses:function(){return"fa fa-"+this.icon}},mounted:function(){this.showSlot=void 0!==this.$slots.default}}},557:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(522),a=o.n(n),s=o(521);e.default={name:"Button",props:{type:{validator:function(t){return o.i(s.b)(t,["height","width","lean","arrow","change"])}},htmlType:{default:"button",validator:function(t){return o.i(s.b)(t,["button"])}},shap:{validator:function(t){return o.i(s.b)(t,["full","half","left","top","right","left"])}},icon:String},data:function(){return{showSlot:!0}},computed:{classes:function(){var t;return["wz-hover",(t={},a()(t,"wz-hover-"+this.type+"-"+this.shap,!!this.type&&!!this.shap&&"lean"!==this.type),a()(t,"wz-hover-"+this.type,!!this.type&&("lean"===this.type||"arrow"===this.type||"change"===this.type)),a()(t,"wz-hover-"+this.type+" wz-hover-"+this.type+"-"+this.shap,!!this.type&&o.i(s.b)(this.type,["arrow","change"])),a()(t,"ivu-icon ivu-icon-"+this.icon,!!this.icon),t)]},iconClasses:function(){return"fa fa-"+this.icon}},mounted:function(){this.showSlot=void 0!==this.$slots.default}}},575:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(639),a=o.n(n),s=o(638),i=o.n(s);e.default={name:"social-buttons",components:{HoverButton:a.a,CoolHoverButton:i.a}}},609:function(t,e,o){e=t.exports=o(467)(!0),e.push([t.i,".btn[data-v-f59841ec]{margin-bottom:4px}.doc-header[data-v-f59841ec]{width:100%;border-bottom:1.5px dashed #062873;padding-left:5px;padding-top:5px;padding-bottom:30px}.doc-content[data-v-f59841ec]{margin-top:10px;margin-bottom:50px;padding:5px;line-height:20px}.doc-content p[data-v-f59841ec]{margin-bottom:5px;margin-top:5px}.doc-content h5[data-v-f59841ec]{margin-bottom:10px;margin-top:10px}.showallcode[data-v-f59841ec]{height:100px}.hidecode[data-v-f59841ec]{height:100%}.highlight[data-v-f59841ec]{transition:all 1s ease}","",{version:3,sources:["E:/project/master/vue-framework-wz/src/views/components/HoverButtons.vue"],names:[],mappings:"AACA,sBACG,iBAAmB,CACrB,AACD,6BACM,WAAW,mCAA2C,AACtD,iBAAkB,AAClB,gBAAiB,AAEjB,mBAAqB,CAC1B,AACD,8BACM,gBAAgB,AAEhB,mBAAmB,AACnB,YAAa,AACb,gBAAkB,CACvB,AACD,gCACI,kBAAmB,AACnB,cAAgB,CACnB,AACD,iCACI,mBAAoB,AACpB,eAAiB,CACpB,AACD,8BACU,YAAc,CACvB,AACD,2BACU,WAAa,CACtB,AACD,4BACO,sBAA2B,CACjC",file:"HoverButtons.vue",sourcesContent:["\n.btn[data-v-f59841ec] {\n   margin-bottom: 4px;\n}\n.doc-header[data-v-f59841ec]{\n      width:100%;border-bottom:1.5px dashed rgb(6, 40, 115);\n      padding-left: 5px;\n      padding-top: 5px;\n\n      padding-bottom: 30px;\n}\n.doc-content[data-v-f59841ec]{\n      margin-top:10px;\n\n      margin-bottom:50px;\n      padding: 5px;\n      line-height: 20px;\n}\n.doc-content p[data-v-f59841ec]{\n    margin-bottom: 5px;\n    margin-top: 5px;\n}\n.doc-content h5[data-v-f59841ec]{\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n.showallcode[data-v-f59841ec]{\n          height: 100px;\n}\n.hidecode[data-v-f59841ec]{\n          height: 100%;\n}\n.highlight[data-v-f59841ec]{\n       transition:1000ms ease all;\n}\n\n"],sourceRoot:""}])},632:function(t,e,o){var n=o(609);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(468)("5086ee51",n,!0)},638:function(t,e,o){var n=o(8)(o(556),o(667),null,null,null);t.exports=n.exports},639:function(t,e,o){var n=o(8)(o(557),o(653),null,null,null);t.exports=n.exports},653:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.classes,attrs:{type:t.htmlType}},[t.showSlot?o("span",{ref:"slot"},[t._t("default")],2):t._e()])},staticRenderFns:[]}},667:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.classes,attrs:{type:t.htmlType}},[t.showSlot?o("span",{ref:"slot"},[t._t("default")],2):t._e()])},staticRenderFns:[]}},669:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animated fadeIn"},[o("Row",[o("Col",{attrs:{span:"24"}},[o("div",{staticClass:"doc-header"},[o("section",{staticClass:"color-1"},[o("p",{staticStyle:{"z-index":"1",position:"relative"}},[o("hover-button",{attrs:{type:"height",shap:"full"}},[t._v(" HOVER ONE")]),t._v(" "),o("hover-button",{attrs:{type:"height",shap:"half"}},[t._v(" HOVER TWO")]),t._v(" "),o("hover-button",{attrs:{type:"width",shap:"full"}},[t._v(" HOVER THREE")]),t._v(" "),o("hover-button",{attrs:{type:"width",shap:"half"}},[t._v(" HOVER FOUR")]),t._v(" "),o("hover-button",{attrs:{type:"lean"}},[t._v(" HOVER FIVE")])],1)])]),t._v(" "),o("div",{staticClass:"doc-content"},[o("h5",[t._v("简单悬停样式")]),t._v(" "),o("p",[t._v("适合主页跳转等场景使用，简单大方。")]),t._v(" "),o("p",[t._v("通过设置type为height、width、lean, shap 为full、half 创建不同样式。")]),t._v(" "),o("p",[t._v("注意父元素需要设置z-index>1 position为relative")])])])],1),t._v(" "),o("Row",[o("Col",{attrs:{span:"24"}},[o("div",{staticClass:"doc-header"},[o("section",{staticClass:"color-4"},[o("hover-button",{attrs:{type:"arrow",shap:"right",icon:"arrow-right-c"}},[t._v("Continue")]),t._v(" "),o("hover-button",{attrs:{type:"arrow",shap:"left",icon:"arrow-left-c"}},[t._v("Return")])],1)]),t._v(" "),o("div",{staticClass:"doc-content"},[o("h5",[t._v("简单悬停按钮")]),t._v(" "),o("p",[t._v("适合页面跳转及分页场景使用")])])])],1),t._v(" "),o("Row",[o("Col",{attrs:{span:"24"}},[o("div",{staticClass:"doc-header"},[o("section",{staticClass:"color-5"},[o("p",[o("hover-button",{attrs:{type:"change",shap:"top",icon:"ios-cart"}},[t._v("Add to cart")]),t._v(" "),o("hover-button",{attrs:{type:"change",shap:"top",icon:"android-delete"}},[t._v("Delete")]),t._v(" "),o("hover-button",{attrs:{type:"change",shap:"top",icon:"android-settings"}},[t._v("Settings")])],1),t._v(" "),o("p",[o("hover-button",{attrs:{type:"change",shap:"left",icon:"ios-cart"}},[t._v("Add to cart")]),t._v(" "),o("hover-button",{attrs:{type:"change",shap:"left",icon:"android-delete"}},[t._v("Delete")]),t._v(" "),o("hover-button",{attrs:{type:"change",shap:"left",icon:"android-settings"}},[t._v("Settings")])],1)])]),t._v(" "),o("div",{staticClass:"doc-content"},[o("h5",[t._v("普通悬停按钮")]),t._v(" "),o("p",[t._v("最常用的几个功能性按钮")])])])],1),t._v(" "),o("Row",[o("Col",{attrs:{span:"24"}},[o("div",{},[o("div",{staticClass:"wrap"},[o("cool-hover-button",{attrs:{type:"swipe"}},[t._v("Settings")]),t._v(" "),o("cool-hover-button",{attrs:{type:"swipe",shap:"out"}},[t._v(" Diagonal Swipe")]),t._v(" "),o("cool-hover-button",{attrs:{type:"swipe",shap:"in"}},[t._v("Double Swipe")]),t._v(" "),o("cool-hover-button",{attrs:{type:"close"}},[t._v("Diagonal Close")]),t._v(" "),o("cool-hover-button",{attrs:{type:"zoningin"}},[t._v("Zoning In")]),t._v(" "),o("cool-hover-button",{attrs:{type:"corners"}},[t._v("4 Corners")])],1),t._v(" "),o("div",{staticClass:"wrap"},[o("cool-hover-button",{attrs:{type:"slice"}},[t._v("Slice")]),t._v(" "),o("cool-hover-button",{attrs:{type:"alternate"}},[t._v("Alternate")]),t._v(" "),o("cool-hover-button",{attrs:{type:"smoosh"}},[t._v("Smoosh")]),t._v(" "),o("cool-hover-button",{attrs:{type:"overlap",shap:"vertical"}},[t._v("Vertical Overlap")]),t._v(" "),o("cool-hover-button",{attrs:{type:"overlap",shap:"horizontal"}},[t._v("Horizontal Overlap")]),t._v(" "),o("cool-hover-button",{attrs:{type:"collision"}},[t._v("Collision")])],1)]),t._v(" "),o("div",{staticClass:"doc-content"},[o("h5",[t._v("炫酷悬停按钮")]),t._v(" "),o("p",[t._v("通过设置type为swipe、close、zoningin、corners、slice、smoosh、overlap、collision创建不同样式的按钮，搭配shap 属性使用更佳哦")])])])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.477d662e02e5ec38f3af.js.map