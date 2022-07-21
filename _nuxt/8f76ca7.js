(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1027:function(t,e,r){"use strict";r.r(e);r(27),r(183),r(9);var n={name:"MasterUser",data:function(){return{totalData:0,editedIndex:-1,submitLoad:!1,dialogFilter:!1,statusProcessing:"insert",show:!1,dialog:!1,message:!1,loading:!0,searchItem:"",search:"",allData:[],itemSearch:[],searchStatus:"Pending",documentStatus:[],options:{},form:{U_DocEntry:null,U_UserID:null,U_Supporting:null,U_Remarks:null,U_UoM:null,U_Description:null,U_CreatedBy:null,U_Status:null,U_ItemType:null},defaultItem:{U_DocEntry:null,U_UserID:null,U_Supporting:null,U_Remarks:null,U_UoM:null,U_Description:null,U_CreatedBy:null,U_Status:null,U_ItemType:null},ItemType:["Inventory","Asset","Service"],headers:[{text:"Request No",value:"U_DocEntry"},{text:"Item Code",value:"ItemCode"},{text:"Item Name",value:"ItemName"},{text:"Item Type",value:"U_ItemType"},{text:"Specification",value:"U_Description"},{text:"UoM",value:"U_UoM"},{text:"Status",value:"U_DocStatus"},{text:"Descriptions",value:"U_Remarks"},{text:"Supporting Data",value:"U_Supporting"},{text:"Created By",value:"U_CreatedBy"},{text:"Created At",value:"U_CreatedAt"},{text:"Action",value:"ACTION",align:"left"}]}},head:function(){return{title:"Item Request"}},computed:{formTitle:function(){return-1===this.editedIndex?"New Data":"Edit Data"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{itemRowBackground:function(t){switch(t.U_Status){case"Pending":return"bg-orange";case"Cancel":return"bg-red";default:return"bg-green"}},checkRoleContains:function(t){for(var e=this.$auth.user.roles,r="",i=0;i<this.$auth.user.roles.length;i++)r=e[i].name===t;return r},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/reservation/req-item",{params:{options:e.options,searchItem:e.searchItem,search:e.search,searchStatus:e.searchStatus}}).then((function(e){t.loading=!1,t.allData=e.data.rows,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.documentStatus=e.data.documentStatus})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){var t=this;this.dialog=!0,setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300),this.statusProcessing="insert"},editItem:function(t){this.statusProcessing="update",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.dialog=!0,this.insert=!1},close:function(){var t=this;this.statusProcessing="insert",this.dialog=!1,setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},updateData:function(t,e){this.form=Object.assign({},t),this.form.U_Status="Cancel",this.statusProcessing="update",this.save()},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,form=this.form,r=this.statusProcessing,data={form:form,status:r};"insert"===r?(this.store("post","/api/reservation/req-item",data,"insert",t),e.submitLoad=!1):"update"===r&&(this.store("put","/api/reservation/req-item/"+this.form.U_DocEntry,data,"update",t),e.submitLoad=!1)},store:function(t,e,data,r){var n=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.dialog=!1,n.message=t.data.message,setTimeout((function(){return n.message=!1}),8e3),n.getDataFromApi()})).catch((function(t){n.$swal({type:"error",title:"Error",text:t.response.data.message}),o.submitLoad=!1}))}}},o=n,l=r(62),c=r(70),d=r.n(c),h=r(657),v=r(87),f=r(102),m=r(43),_=r(996),x=r(225),y=r(465),w=r(507),O=r(511),S=r(104),U=r(505),D=r(530),C=r(224),k=r(154),I=r(53),j=r(108),B=r(458),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{sm12:""}},[r("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[r("v-toolbar-title",[t._v("Request Item")]),t._v(" "),r("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dialogFilter,callback:function(e){t.dialogFilter=e},expression:"dialogFilter"}},[r("v-card",[r("v-card-title",[t._v("Filter Form")]),t._v(" "),r("v-card-text",[r("LazyTableFilter",{staticClass:"hidden-sm-and-up",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogFilter=!1}}},[t._v("\n              Close\n            ")])],1)],1)],1),t._v(" "),r("LazyTableFilter",{staticClass:"hidden-sm-and-down",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}}),t._v(" "),r("v-btn",{staticClass:"d-md-none d-lg-none d-sm-flex d-xs-flex",attrs:{icon:"",color:"green",dark:""},on:{click:function(e){t.dialogFilter=!0}}},[r("v-icon",[t._v("mdi-filter-variant")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:t.newData}},[r("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),r("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[r("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),r("div",{staticClass:"mt-2"},[r("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-class":t.itemRowBackground,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.ACTION",fn:function(e){var n=e.item;return[r("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[r("v-badge",{attrs:{content:n.count_attachment,color:"green",value:n.count_attachment}},[r("v-btn",t._g(t._b({attrs:{icon:"",color:"orange"},on:{click:function(e){return t.$refs.attachment.openAttachment(n.U_DocEntry,"item",1)}}},"v-btn",l,!1),o),[r("v-icon",{attrs:{small:""}},[t._v("mdi-attachment\n                  ")])],1)],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Upload Attachment")])]),t._v(" "),n.U_CreatedBy===t.$auth.user.name?r("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{icon:"",color:"orange"},on:{click:function(e){return t.editItem(n)}}},"v-btn",l,!1),o),[r("v-icon",{attrs:{small:""}},[t._v("mdi-pencil-circle")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Edit Item")])]):t._e(),t._v(" "),t.checkRoleContains("Warehouse")?r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",l,!1),o),[r("v-icon",{staticClass:"mr-1",attrs:{color:"red"},on:{click:function(e){return t.updateData(n,"N")}}},[t._v("\n                  mdi-backup-restore\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Cancel Document")])]):t._e()]}}],null,!0)})],1)],1),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),r("v-card-text",[r("v-form",[r("v-layout",{attrs:{wrap:""}},[t.message?r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"red darken-2 text-xs-center"},[r("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e(),t._v(" "),r("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[r("v-select",{attrs:{items:t.ItemType,placeholder:"Item Type",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.U_ItemType,callback:function(e){t.$set(t.form,"U_ItemType",e)},expression:"form.U_ItemType"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Specification",height:"25",placeholder:"Specification",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.U_Description,callback:function(e){t.$set(t.form,"U_Description",e)},expression:"form.U_Description"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"UoM",height:"25",placeholder:"User Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.U_UoM,callback:function(e){t.$set(t.form,"U_UoM",e)},expression:"form.U_UoM"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Descriptions",height:"25",placeholder:"Descriptions",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.U_Remarks,callback:function(e){t.$set(t.form,"U_Remarks",e)},expression:"form.U_Remarks"}})],1),t._v(" "),r("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Supporting data",height:"25",placeholder:"Supporting Data",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.U_Supporting,callback:function(e){t.$set(t.form,"U_Supporting",e)},expression:"form.U_Supporting"}})],1)],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){return t.close()}}},[t._v("\n          Close\n        ")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1),t._v(" "),r("LazyAttachment",{ref:"attachment"})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBadge:h.a,VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDataTable:_.a,VDialog:x.a,VDivider:y.a,VFlex:w.a,VForm:O.a,VIcon:S.a,VLayout:U.a,VSelect:D.a,VSpacer:C.a,VTextField:k.a,VToolbar:I.a,VToolbarTitle:j.a,VTooltip:B.a})},505:function(t,e,r){"use strict";r(226);var n=r(227);e.a=Object(n.a)("layout")},507:function(t,e,r){"use strict";r(226);var n=r(227);e.a=Object(n.a)("flex")},511:function(t,e,r){"use strict";var n=r(3),o=(r(49),r(32),r(229),r(9),r(76),r(10),r(8),r(13),r(14),r(6)),l=r(89),c=r(109);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},572:function(t,e,r){var content=r(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("5276b867",content,!0,{sourceMap:!1})},573:function(t,e,r){var n=r(16)(!1);n.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=n},657:function(t,e,r){"use strict";r(10),r(8),r(9),r(13),r(14);var n=r(78),o=r(3),l=(r(20),r(572),r(104)),c=r(22),d=r(19),h=r(64),v=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(90),m=r(6),_=r(0),x=["aria-atomic","aria-label","aria-live","role","title"];function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(m.a)(c.a,Object(f.b)(["left","bottom"]),d.a,h.a,v).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(_.i)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(_.u)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(l.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[Object(_.u)(this)],o=this.$attrs,l=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(n.a)(o,x));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},r)}})}}]);