(window.webpackJsonp=window.webpackJsonp||[]).push([[98,12],{1015:function(t,e,n){"use strict";n.r(e);n(183),n(9);var o={name:"MasterPaper",components:{Attachment:n(728).default},data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,loadingAddUser:!1,submitLoad:!1,singleSelect:!1,show:!1,dialog:!1,dialogExportUser:!1,message:!1,loading:!0,statusProcessing:"insert",searchItem:"",listDevices:[],privilege:[{id:0,name:"Ordinary User"},{id:14,name:"Administrator"}],search:"",allData:[],itemSearch:[],itemDeviceBrand:[],itemDeviceType:[],itemAccessType:[],itemCompany:[],selected:[],allDevice:[],options:{},dataItem:{},sub_id:{},itemYesNo:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],form:{id:null,name:null,alias:null,background:null,is_active:"Y"},defaultItem:{id:null,name:null,alias:null,background:null,is_active:"Y"},headers:[{text:"Name",value:"name"},{text:"alias",value:"alias"},{text:"Background",value:"background"},{text:"Is Active",value:"is_cative"},{text:"Action",value:"actions"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Data":"Edit Data"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.getInit()},methods:{getInit:function(){window.details=this},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/master/papers",{params:{options:e.options,searchItem:e.searchItem,search:e.search}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.data.filter,t.allDevice=e.data.data.all_device})).catch((function(e){t.loading=!1,t.$swal({title:"Error!",text:e.response.data.message,type:"error"})}))},newData:function(){var t=this;this.dialog=!0,setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300),this.statusProcessing="insert"},editItem:function(t){this.statusProcessing="update",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.dataItem=t,this.dialog=!0,this.insert=!1},deleteItem:function(t){var e=this,n=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete("/api/master/papers/".concat(t.id)).then((function(t){n.getDataFromApi()}))}))},openAttachment:function(t){this.$refs.attachment.openAttachment(t.id,"background",this.$store.state.auth.user.username)},close:function(){var t=this;this.statusProcessing="insert",this.dialog=!1,setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,n=this.statusProcessing,form=this.form,data={form:form,status:n};"insert"===n?(this.store("post","/api/master/papers",data,"insert",t),e.submitLoad=!1):"update"===n&&(this.store("put","/api/master/papers/"+this.form.id,data,"update",t),e.submitLoad=!1)},store:function(t,e,data,n){var o=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.$swal({title:"Success!",text:t.data.message,type:"success"}),r.submitLoad=!1,o.dialog=!1,o.getDataFromApi()})).catch((function(t){r.submitLoad=!1,o.$swal({title:"Error!",text:t.response.data.message,type:"error"})}))}}},r=o,l=n(62),c=n(70),d=n.n(c),m=n(87),h=n(102),v=n(43),f=n(474),_=n(996),x=n(225),y=n(465),w=n(507),k=n(511),A=n(104),C=n(505),V=n(530),O=n(224),D=n(154),$=n(53),I=n(108),T=n(458),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[n("v-toolbar-title",{staticClass:"hidden-xs-only"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-form",{attrs:{"d-flex":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getDataFromApi.apply(null,arguments)}}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{sm5:"",xs6:""}},[n("v-select",{staticClass:"mt-1",attrs:{items:t.itemSearch,label:"Search Type",outlined:"",dense:"","hide-details":"auto"},model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})],1),t._v(" "),n("v-flex",{attrs:{sm1:""}}),t._v(" "),n("v-flex",{staticStyle:{"margin-top":"4px"},attrs:{sm6:"",xs6:""}},[n("v-text-field",{attrs:{label:"search",outlined:"",dense:"","hide-details":"auto"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),n("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:t.newData}},[n("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),n("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[n("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"body",fn:function(e){var o=e.items;return[n("tbody",t._l(o,(function(e){return n("tr",{key:e.id,staticClass:"test-tr",style:{backgroundColor:e.Color}},[n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.alias))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.background))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.is_active))]),t._v(" "),n("td",{staticClass:"d-flex"},[n("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.editItem(e)}}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Edit")])]),t._v(" "),n("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.openAttachment(e)}}},[t._v("mdi-attachment")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Background")])]),t._v(" "),n("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.deleteItem(e)}}},[t._v("mdi-delete")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete")])])],1)])})),0)]}},{key:"footer",fn:function(){},proxy:!0}])})],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-card-text",[n("v-form",[n("v-layout",{attrs:{wrap:""}},[t.message?n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"red darken-2 text-xs-center"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e(),t._v(" "),n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-select",{attrs:{items:t.itemYesNo,label:"Is Active","item-text":"text","item-value":"value",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Alias",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.alias,callback:function(e){t.$set(t.form,"alias",e)},expression:"form.alias"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){return t.close()}}},[t._v("\n            Close\n          ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n            Save\n          ")])],1)],1)],1),t._v(" "),n("attachment",{ref:"attachment",on:{open:t.openAttachment}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Attachment:n(728).default}),d()(component,{VBtn:m.a,VCard:h.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VContainer:f.a,VDataTable:_.a,VDialog:x.a,VDivider:y.a,VFlex:w.a,VForm:k.a,VIcon:A.a,VLayout:C.a,VSelect:V.a,VSpacer:O.a,VTextField:D.a,VToolbar:$.a,VToolbarTitle:I.a,VTooltip:T.a})},505:function(t,e,n){"use strict";n(226);var o=n(227);e.a=Object(o.a)("layout")},507:function(t,e,n){"use strict";n(226);var o=n(227);e.a=Object(o.a)("flex")},511:function(t,e,n){"use strict";var o=n(3),r=(n(49),n(32),n(229),n(9),n(76),n(10),n(8),n(13),n(14),n(6)),l=n(89),c=n(109);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},728:function(t,e,n){"use strict";n.r(e);var o=n(679),r=n.n(o),l=(n(680),{name:"Attachment",components:{Dropzone:r.a},data:function(){return{dialogAttachment:!1,showLoadingAttachment:!1,dialogTitle:"Attachment",options:{url:"https://sbo2.imip.co.id:3001/backendcore2/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")}},headers:[{text:"Attachment",value:"file_name"},{text:"Action",value:"action"}],items:[],total:0,source_id:null,type:null,row:null}},methods:{openAttachment:function(t,e,n){var o=this;this.dialogAttachment=!0,this.source_id=t,this.type=e,this.row=n,setTimeout((function(){o.getAttachment()}),300)},sendingParams:function(t,e,n){n.append("source_id",this.source_id),n.append("type",this.type)},handleError:function(t,e,n){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var n=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row,type:this.type}),setTimeout((function(){n.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,n=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),n.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:e.type,source_id:e.source_id}}).then((function(n){e.items=n.data.data.rows,e.total=n.data.data.total,e.showLoadingAttachment=!1,t.$emit("eventCountAttachment",{total:n.data.data.total,row:t.row,type:t.type})})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}}),c=n(62),d=n(70),m=n.n(d),h=n(87),v=n(102),f=n(43),_=n(294),x=n(996),y=n(225),w=n(104),k=n(505),A=n(296),C=n(224),V=n(458),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.dialogAttachment,callback:function(e){t.dialogAttachment=e},expression:"dialogAttachment"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"font-weight-medium"},[t._v("\n          "+t._s(t.dialogTitle)+"\n        ")])]),t._v(" "),n("v-card-text",[n("v-layout",{attrs:{wrap:""}},[n("v-row",[n("v-col",{staticClass:"mt-0",attrs:{cols:"12",md:"4",sm:"12"}},[n("dropzone",{ref:"attachment",attrs:{id:"attachment",options:t.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(e,n,o){return t.sendingParams(e,n,o)},"vdropzone-success":function(e,n){return t.reloadAttachment(e,n)},"vdropzone-error":function(e,n,o){return t.handleError(e,n,o)}}})],1),t._v(" "),n("v-col",{staticClass:"mt-0",attrs:{cols:"12",md:"8",sm:"12"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:t.showLoadingAttachment,dense:""},scopedSlots:t._u([{key:"item.action",fn:function(e){var o=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.deleteFile(o)}}},[t._v("\n                        mdi-delete-circle\n                      ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete")])])]}},{key:"item.file_name",fn:function(e){var o=e.item;return[n("a",{attrs:{href:o.file_path,target:"_blank"},domProps:{textContent:t._s(o.file_name)}})]}}],null,!0)})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:function(e){t.dialogAttachment=!1}}},[t._v("\n        close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:h.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:_.a,VDataTable:x.a,VDialog:y.a,VIcon:w.a,VLayout:k.a,VRow:A.a,VSpacer:C.a,VTooltip:V.a})}}]);