webpackJsonp([28],{500:function(t,e,a){var n=a(8)(a(582),a(660),null,null,null);t.exports=n.exports},582:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{data1:this.getMockData(),targetKeys1:this.getTargetKeys(),data3:this.getMockData(),targetKeys3:this.getTargetKeys(),listStyle:{width:"250px",height:"300px"}}},methods:{getMockData:function(){for(var t=[],e=1;e<=20;e++)t.push({key:e.toString(),label:"内容"+e,description:"内容"+e+"的描述信息",disabled:3*Math.random()<1});return t},getTargetKeys:function(){return this.getMockData().filter(function(){return 2*Math.random()>1}).map(function(t){return t.key})},render1:function(t){return t.label},handleChange1:function(t,e,a){console.log(t),console.log(e),console.log(a),this.targetKeys1=t},handleChange3:function(t){this.targetKeys3=t},render3:function(t){return t.label+" - "+t.description},reloadMockData:function(){this.data3=this.getMockData(),this.targetKeys3=this.getTargetKeys()}}}},660:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated fadeIn"},[a("Row",[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"doc-header"},[a("Transfer",{attrs:{data:t.data1,"target-keys":t.targetKeys1,"render-format":t.render1},on:{"on-change":t.handleChange1}})],1),t._v(" "),a("div",{staticClass:"doc-content"},[a("h5",[t._v("基础用法")]),t._v(" "),a("p",[t._v(" 基本用法，展示了 data、target-keys、每行的渲染函数 render-format 以及回调函数 on-change 的用法")])])])],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"doc-header"},[a("Transfer",{attrs:{data:t.data3,"target-keys":t.targetKeys3,"list-style":t.listStyle,"render-format":t.render3,operations:["向左移动","向右移动"],filterable:""},on:{"on-change":t.handleChange3}},[a("div",{style:{float:"right",margin:"5px"}},[a("i-button",{attrs:{type:"ghost",size:"small"},on:{click:t.reloadMockData}},[t._v("刷新")])],1)])],1),t._v(" "),a("div",{staticClass:"doc-content"},[a("h5",[t._v("高级用法")]),t._v(" "),a("p",[t._v(" 穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。 ")])])])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=28.4f868e49400dc8859b20.js.map