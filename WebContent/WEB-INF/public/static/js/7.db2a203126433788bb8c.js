webpackJsonp([7,9],{475:function(t,e,o){function i(t){o(538)}var n=o(8)(o(527),o(544),i,"data-v-3a22fc86",null);t.exports=n.exports},482:function(t,e,o){function i(t){o(624)}var n=o(8)(o(564),o(655),i,"data-v-6431e69a",null);t.exports=n.exports},527:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{row:Object}}},533:function(t,e,o){e=t.exports=o(467)(!0),e.push([t.i,".expand-row[data-v-3a22fc86]{margin-bottom:16px}","",{version:3,sources:["E:/project/master/vue-framework-wz/src/views/table-expand.vue"],names:[],mappings:"AACA,6BACI,kBAAoB,CACvB",file:"table-expand.vue",sourcesContent:["\n.expand-row[data-v-3a22fc86]{\n    margin-bottom: 16px;\n}\n\n"],sourceRoot:""}])},538:function(t,e,o){var i=o(533);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(468)("8221a8ac",i,!0)},544:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0===t.row.task_status?o("Steps",{attrs:{current:1}},[o("Step",{attrs:{title:"已上传"}}),t._v(" "),o("Step",{attrs:{title:"正在分析",content:"正在分析，大概需要5-10分钟,请耐心等待"}}),t._v(" "),o("Step",{attrs:{title:"分析完成"}})],1):1===t.row.task_status?o("Steps",{attrs:{current:2}},[o("Step",{attrs:{title:"已上传"}}),t._v(" "),o("Step",{attrs:{title:"正在分析"}}),t._v(" "),o("Step",{attrs:{title:"分析完成",content:"分析完成，请点击查看"}})],1):t._e()},staticRenderFns:[]}},564:function(t,e,o){"use strict";function i(t){n=Qiniu.uploader({runtimes:"html5,flash,html4",browse_button:"pickfiles",uptoken_func:function(){},get_new_uptoken:!1,unique_names:!1,save_key:!1,domain:"http://qiniu-plupload.qiniudn.com/",container:"container",max_file_size:"1024mb",flash_swf_url:"static/bower_components/plupload/js/Moxie.swf",max_retries:0,dragdrop:!0,drop_element:"container",chunk_size:"10mb",auto_start:!0,multi_selection:!0,filters:{max_file_size:"1000mb",prevent_duplicates:!1,mime_types:[{title:"Video files",extensions:"mp4"},{title:"Image files",extensions:"jpg,png,jpeg"}]},init:{FilesAdded:function(e,o){plupload.each(o,function(e){t.progresshow=!0})},BeforeUpload:function(e,o){t.progresscount=10,t.progresstatus="active",t.progressspeed="1.5 Mb/s";var i=setInterval(function(){40===t.progresscount?(clearInterval(i),t.$Notice.success({title:"上传成功"}),setTimeout(function(){t.progressspeed=0,t.progresstatus="wrong",t.$Message.error("上传失败"),setTimeout(function(){t.progresscount=0,t.progresshow=!1;var e={task_status:0,timestamp:"2017-08-10 17:03:54",video_duration:"11.121667",video_size:1732410,video_name:"http://otl6ypoog.bkt.clouddn.com/Objectstoarge/videos/2017-08-10/33337_p.mp4"};t.video_list.push(e),t.setInitPage(1)},4e3)},1e3)):t.progresscount+=2},100)},UploadProgress:function(t,e){},FileUploaded:function(t,e,o){},Error:function(t,e,o){},UploadComplete:function(){},Key:function(t,e){}}})}Object.defineProperty(e,"__esModule",{value:!0});var n,s=o(475),a=o.n(s);e.default={components:{expandRow:a.a},name:"buttons",data:function(){var t=this;return{progresshow:!1,progresscount:0,progresstatus:"active",progressspeed:0,video_list:[{task_status:0,timestamp:"2017-08-10 17:03:54",video_duration:"11s",video_size:1732410,video_name:"p.mp4"},{task_status:1,timestamp:"2017-08-10 17:03:54",video_duration:"11s",video_size:1732410,video_name:"p.mp4"},{task_status:1,timestamp:"2017-08-10 17:03:54",video_duration:"11s",video_size:1732410,video_name:"p.mp4"},{task_status:0,timestamp:"2017-08-10 17:03:54",video_duration:"11s",video_size:1732410,video_name:"p.mp4"},{task_status:1,timestamp:"2017-08-10 17:03:54",video_duration:"11s",video_size:1732410,video_name:"p.mp4"},{task_status:0,timestamp:"2017-08-10 17:03:54",video_duration:"11s",video_size:1732410,video_name:"p.mp4"}],pageindex:1,page_video_list:[],lodding:!1,list_loadding:!1,columns7:[{type:"expand",width:"30",ellipsis:"true",render:function(t,e){return t(a.a,{props:{row:e.row}})}},{title:"视频名称",key:"video_name",ellipsis:"true"},{title:"上传时间",ellipsis:"true",key:"timestamp"},{title:"时长",ellipsis:"true",key:"video_duration"},{title:"大小",ellipsis:"true",key:"video_size",filters:[{label:"大于10M",value:1},{label:"小于10M",value:2}],filterMultiple:!1,filterMethod:function(t,e){return 1===t?e.video_size>10737418240:2===t?e.video_size<10485760:void 0}},{title:"状态",ellipsis:"true",filters:[{label:"处理完成",value:1},{label:"正在处理",value:2}],filterMultiple:!1,filterMethod:function(t,e){return 1===t?1===e.task_status:2===t?0===e.task_status:void 0},render:function(t,e){var o=parseInt(e.row.task_status);return 0===o?t("div",[t("Tag",{props:{type:"dot",color:"blue"}},"正在处理")]):1===o?t("div",[t("Tag",{props:{type:"dot",color:"green"}},"处理完成")]):void 0}},{title:"操作",key:"action",align:"center",ellipsis:"true",render:function(e,o){var i=parseInt(o.row.task_status);return 0===i?e("div",[e("Tooltip",{props:{content:"还未分析完成，暂时不能查看"}},[e("Button",{props:{type:"primary",size:"small",loading:!0},style:{marginRight:"5px"}},"处理中")]),e("Button",{props:{type:"error",size:"small",disabled:!0},on:{click:function(){t.remove(o.index)}}},"删除")]):1===i?e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.$router.push({path:"/tabledetail/"+(10*(t.pageindex-1)+o.index)})}}},"查看结果"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(o.index)}}},"删除")]):void 0}}]}},methods:{remove:function(t){this.video_list.splice(t,1)},qiniu_upload:function(){n.start()},setInitPage:function(t){this.page_video_list=[],this.pageindex=t;for(var e=this.video_list,o=10*(t-1);o<10*(t-1)+10;o++)o<e.length&&this.page_video_list.push(this.video_list[o])},exportData:function(t){1===t?this.$refs.table.exportCsv({filename:"原始数据",columns:this.columns7,data:this.video_list}):2===t&&this.$refs.table.exportCsv({filename:"排序和过滤后的数据",original:!1})}},mounted:function(){var t=this;this.list_loadding=!0,setTimeout(function(){t.list_loadding=!1},2e3),i(t),this.setInitPage(1)}}},601:function(t,e,o){e=t.exports=o(467)(!0),e.push([t.i,'.ivu-tag-dot[data-v-6431e69a]{border:none!important}tr.ivu-table-row-hover td .ivu-tag-dot[data-v-6431e69a]{background-color:#ebf7ff!important}.demo-i-circle-custom h1[data-v-6431e69a]{color:#3f414d;font-size:10px;font-weight:400}.demo-i-circle-custom p[data-v-6431e69a]{color:#657180;font-size:8px;margin:5px 0 2px}.demo-i-circle-custom span[data-v-6431e69a]{display:block;padding-top:15px;color:#657180;font-size:10px}.demo-i-circle-custom span[data-v-6431e69a] :before{content:"";display:block;width:50px;height:1px;margin:0 auto;background:#e0e3e6;position:relative;top:-20px}.demo-i-circle-custom span i[data-v-6431e69a]{font-style:normal;color:#3f414d}.ivu-btn.ivu-btn-primary.ivu-btn-small[data-v-6431e69a]:not(.ivu-btn-loading){padding:2px 10px!important}td.ivu-table-expanded-cell[data-v-6431e69a]{background-color:#fff!important}',"",{version:3,sources:["E:/project/master/vue-framework-wz/src/views/Table.vue"],names:[],mappings:"AACA,8BACC,qBAAuB,CACvB,AACD,wDACC,kCAAoC,CACpC,AACD,0CACY,cAAe,AACf,eAAgB,AAChB,eAAoB,CAC/B,AACD,yCACY,cAAe,AACf,cAAe,AACf,gBAAkB,CAC7B,AACD,4CACY,cAAe,AACf,iBAAkB,AAClB,cAAe,AACf,cAAgB,CAC3B,AACD,oDACgB,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,cAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,SAAW,CAC1B,AACD,8CACY,kBAAmB,AACnB,aAAe,CAC1B,AAED,8EACU,0BAA4B,CACrC,AACD,4CACQ,+BAAkC,CACzC",file:"Table.vue",sourcesContent:["\n.ivu-tag-dot[data-v-6431e69a]{\r\n\tborder: none!important;\n}\ntr.ivu-table-row-hover td .ivu-tag-dot[data-v-6431e69a]{\r\n\tbackground-color: #ebf7ff!important;\n}\n.demo-i-circle-custom h1[data-v-6431e69a]{\r\n            color: #3f414d;\r\n            font-size: 10px;\r\n            font-weight: normal;\n}\n.demo-i-circle-custom p[data-v-6431e69a]{\r\n            color: #657180;\r\n            font-size: 8px;\r\n            margin: 5px 0 2px;\n}\n.demo-i-circle-custom span[data-v-6431e69a]{\r\n            display: block;\r\n            padding-top: 15px;\r\n            color: #657180;\r\n            font-size: 10px;\n}\n.demo-i-circle-custom span[data-v-6431e69a] :before{\r\n                content: '';\r\n                display: block;\r\n                width: 50px;\r\n                height: 1px;\r\n                margin: 0 auto;\r\n                background: #e0e3e6;\r\n                position: relative;\r\n                top: -20px;\n}\n.demo-i-circle-custom span i[data-v-6431e69a]{\r\n            font-style: normal;\r\n            color: #3f414d;\n}\r\n/*wz-btn wz-btn-primary wz-btn-small wz-btn-loading*/\n.ivu-btn.ivu-btn-primary.ivu-btn-small[data-v-6431e69a]:not(.ivu-btn-loading ){\r\n          padding :2px 10px!important;\n}\ntd.ivu-table-expanded-cell[data-v-6431e69a]{\r\n        background-color: white!important;\n}\r\n"],sourceRoot:""}])},624:function(t,e,o){var i=o(601);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(468)("325f45e2",i,!0)},655:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animated fadeIn"},[o("Row",[o("Col",{attrs:{md:24}},[o("div",[o("div",{staticStyle:{"margin-bottom":"10px"},attrs:{id:"container"}},[o("Button",{staticStyle:{"padding-bottom":"5px"},attrs:{type:"primary",size:"large",icon:"ios-cloud-upload-outline",id:"pickfiles"},on:{click:t.qiniu_upload}},[t._v("上传文件")]),t._v(" "),t.progresshow?o("Progress",{staticStyle:{"vertical-align":"middle"},attrs:{percent:t.progresscount,status:t.progresstatus}},[100==t.progresscount?o("Icon",{attrs:{type:"checkmark-circled"}}):t._e(),t._v(" "),100===t.progresscount?o("span",[t._v("上传成功")]):t._e(),t._v(" "),"wrong"===t.progresstatus?o("Icon",{attrs:{type:"close-circled"}}):t._e(),t._v(" "),"wrong"===t.progresstatus?o("span",[t._v("上传失败")]):t._e(),t._v(" "),0!==t.progresscount&&100!=t.progresscount?o("span",{staticStyle:{position:"absolute",left:"50%",top:"-5px"}},[t._v(t._s(t.progressspeed))]):t._e()],1):t._e()],1),t._v(" "),o("div",{staticStyle:{position:"relative"}},[o("Table",{ref:"table",attrs:{columns:t.columns7,data:t.page_video_list}}),t._v(" "),t.list_loadding?o("div",{staticStyle:{position:"absolute",top:"0px",width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",background:"rgba(210, 216, 222, 0.5)"}},[o("Spin",{attrs:{size:"large"}}),t._v(" "),o("h6",{staticStyle:{color:"#2d8cf0","margin-top":"10px"}},[t._v("正在获取数据...")])],1):t._e()],1),t._v(" "),o("Page",{staticStyle:{"text-align":"right","margin-top":"50px"},attrs:{total:this.video_list.length,"show-total":""},on:{"on-change":t.setInitPage}}),t._v(" "),o("Button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.exportData(1)}}},[o("Icon",{attrs:{type:"ios-download-outline"}}),t._v(" 导出原始数据")],1),t._v(" "),o("Button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.exportData(2)}}},[o("Icon",{attrs:{type:"ios-download-outline"}}),t._v(" 导出排序和过滤后的数据")],1)],1),t._v(" "),o("div",{staticClass:"doc-content"},[o("h5",[t._v("表格综合实例")]),t._v(" "),o("p",[t._v("轻松完成业务需求，再也不用被产品催了")])])]),t._v(" "),o("Col",{attrs:{md:12}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.db2a203126433788bb8c.js.map