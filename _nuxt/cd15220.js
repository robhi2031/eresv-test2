(window.webpackJsonp=window.webpackJsonp||[]).push([[79,20,77,78,81],{1055:function(e,t,o){"use strict";o.r(t);var l=o(797),r=o(589),n=o(798),d={name:"FormTask",components:{Board:l.default,List:r.default,Timeline:n.default},props:{defaultForm:{type:Object,default:function(){return{}}},title:{type:String,default:""},searchItem:{type:String,default:""},search:{type:String,default:""},filters:{type:String,default:""},searchStatus:{type:String,default:"Active"},documentStatus:{type:Array,default:function(){return[]}},itemSearch:{type:Array,default:function(){return[]}}},data:function(){return{form:this.formData,alias:null,selectComponent:null}},methods:{changeTab:function(e){var t=this;this.alias=e,this.selectComponent=e,setTimeout((function(){t.$refs.childComponent.getDataFromApi()}),300)},getDataFromApi:function(){this.$emit("getDataFromApi")},openEdititem:function(e){this.$emit("openEdititem",e)}}},c=o(62),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o(e.selectComponent,{ref:"childComponent",tag:"component",attrs:{alias:e.alias,"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search},on:{getDataFromApi:e.getDataFromApi,openEdititem:e.openEdititem}})],1)}),[],!1,null,null,null);t.default=component.exports},505:function(e,t,o){"use strict";o(226);var l=o(227);t.a=Object(l.a)("layout")},507:function(e,t,o){"use strict";o(226);var l=o(227);t.a=Object(l.a)("flex")},511:function(e,t,o){"use strict";var l=o(3),r=(o(49),o(32),o(229),o(9),o(76),o(10),o(8),o(13),o(14),o(6)),n=o(89),d=o(109);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(r.a)(n.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},o={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(l){l&&(e.errorBag.hasOwnProperty(input._uid)||(o.valid=t(input)))})):o.valid=t(input),o},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},521:function(e,t,o){"use strict";o.r(t);var l={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(62),n=o(70),d=o.n(n),c=o(87),v=o(102),_=o(43),h=o(474),m=o(225),k=o(465),f=o(104),x=o(224),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":e.maxWidth,transition:"dialog-top-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[e._v(e._s(e.dialogTitle))]),e._v(" "),o("v-spacer"),e._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(t){return e.closeDialog()}}},[o("v-icon",[e._v("mdi-close-circle")])],1)],1),e._v(" "),o("v-divider"),e._v(" "),o("v-card-text",{staticClass:"pl-0 pr-0"},[o("v-container",{attrs:{fluid:""}},[e._t("content")],2)],1),e._v(" "),o("v-divider"),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),e._t("addLine"),e._v(" "),e._t("saveData")],2)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:c.a,VCard:v.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VContainer:h.a,VDialog:m.a,VDivider:k.a,VIcon:f.a,VSpacer:x.a})},569:function(e,t,o){var content=o(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("5f757930",content,!0,{sourceMap:!1})},570:function(e,t,o){var l=o(16)(!1);l.push([e.i,'.theme--light.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0))}.theme--light.v-skeleton-loader .v-skeleton-loader__avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__button,.theme--light.v-skeleton-loader .v-skeleton-loader__chip,.theme--light.v-skeleton-loader .v-skeleton-loader__divider,.theme--light.v-skeleton-loader .v-skeleton-loader__heading,.theme--light.v-skeleton-loader .v-skeleton-loader__image,.theme--light.v-skeleton-loader .v-skeleton-loader__text{background:rgba(0,0,0,.12)}.theme--light.v-skeleton-loader .v-skeleton-loader__actions,.theme--light.v-skeleton-loader .v-skeleton-loader__article,.theme--light.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__card-text,.theme--light.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--light.v-skeleton-loader .v-skeleton-loader__table-thead{background:#fff}.theme--dark.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))}.theme--dark.v-skeleton-loader .v-skeleton-loader__avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__button,.theme--dark.v-skeleton-loader .v-skeleton-loader__chip,.theme--dark.v-skeleton-loader .v-skeleton-loader__divider,.theme--dark.v-skeleton-loader .v-skeleton-loader__heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__image,.theme--dark.v-skeleton-loader .v-skeleton-loader__text{background:hsla(0,0%,100%,.12)}.theme--dark.v-skeleton-loader .v-skeleton-loader__actions,.theme--dark.v-skeleton-loader .v-skeleton-loader__article,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead{background:#1e1e1e}.v-skeleton-loader{border-radius:4px;position:relative;vertical-align:top}.v-skeleton-loader__actions{padding:16px 16px 8px;text-align:right}.v-skeleton-loader__actions .v-skeleton-loader__button{display:inline-block}.v-application--is-ltr .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-right:12px}.v-application--is-rtl .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-left:12px}.v-skeleton-loader .v-skeleton-loader__list-item,.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader .v-skeleton-loader__list-item-text,.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-two-line{border-radius:4px}.v-skeleton-loader .v-skeleton-loader__actions:after,.v-skeleton-loader .v-skeleton-loader__article:after,.v-skeleton-loader .v-skeleton-loader__card-avatar:after,.v-skeleton-loader .v-skeleton-loader__card-heading:after,.v-skeleton-loader .v-skeleton-loader__card-text:after,.v-skeleton-loader .v-skeleton-loader__card:after,.v-skeleton-loader .v-skeleton-loader__date-picker-days:after,.v-skeleton-loader .v-skeleton-loader__date-picker-options:after,.v-skeleton-loader .v-skeleton-loader__date-picker:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar:after,.v-skeleton-loader .v-skeleton-loader__list-item-text:after,.v-skeleton-loader .v-skeleton-loader__list-item-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item:after,.v-skeleton-loader .v-skeleton-loader__paragraph:after,.v-skeleton-loader .v-skeleton-loader__sentences:after,.v-skeleton-loader .v-skeleton-loader__table-cell:after,.v-skeleton-loader .v-skeleton-loader__table-heading:after,.v-skeleton-loader .v-skeleton-loader__table-row-divider:after,.v-skeleton-loader .v-skeleton-loader__table-row:after,.v-skeleton-loader .v-skeleton-loader__table-tbody:after,.v-skeleton-loader .v-skeleton-loader__table-tfoot:after,.v-skeleton-loader .v-skeleton-loader__table-thead:after,.v-skeleton-loader .v-skeleton-loader__table:after{display:none}.v-application--is-ltr .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 0 16px 16px}.v-application--is-rtl .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 16px 0}.v-skeleton-loader__article .v-skeleton-loader__paragraph{padding:16px}.v-skeleton-loader__bone{border-radius:inherit;overflow:hidden;position:relative}.v-skeleton-loader__bone:after{-webkit-animation:loading 1.5s infinite;animation:loading 1.5s infinite;content:"";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.v-skeleton-loader__avatar{border-radius:50%;height:48px;width:48px}.v-skeleton-loader__button{border-radius:4px;height:36px;width:64px}.v-skeleton-loader__card .v-skeleton-loader__image{border-radius:0}.v-skeleton-loader__card-heading .v-skeleton-loader__heading{margin:16px}.v-skeleton-loader__card-text{padding:16px}.v-skeleton-loader__chip{border-radius:16px;height:32px;width:96px}.v-skeleton-loader__date-picker{border-radius:inherit}.v-skeleton-loader__date-picker .v-skeleton-loader__list-item:first-child .v-skeleton-loader__text{max-width:88px;width:20%}.v-skeleton-loader__date-picker .v-skeleton-loader__heading{max-width:256px;width:40%}.v-skeleton-loader__date-picker-days{display:flex;flex-wrap:wrap;padding:0 12px;margin:0 auto}.v-skeleton-loader__date-picker-days .v-skeleton-loader__avatar{border-radius:4px;flex:1 1 auto;margin:4px;height:40px;width:40px}.v-skeleton-loader__date-picker-options{align-items:center;display:flex;padding:16px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:auto}.v-application--is-ltr .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-right:8px}.v-application--is-rtl .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:8px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__text.v-skeleton-loader__bone:first-child{margin-bottom:0;max-width:50%;width:456px}.v-skeleton-loader__divider{border-radius:1px;height:2px}.v-skeleton-loader__heading{border-radius:12px;height:24px;width:45%}.v-skeleton-loader__image{height:200px;border-radius:0}.v-skeleton-loader__image~.v-skeleton-loader__card-heading{border-radius:0}.v-skeleton-loader__image::first-child,.v-skeleton-loader__image::last-child{border-radius:inherit}.v-skeleton-loader__list-item{height:48px}.v-skeleton-loader__list-item-three-line{flex-wrap:wrap}.v-skeleton-loader__list-item-three-line>*{flex:1 0 100%;width:100%}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__list-item-avatar{height:48px}.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-two-line{height:72px}.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-three-line{height:88px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar{align-self:flex-start}.v-skeleton-loader__list-item,.v-skeleton-loader__list-item-avatar,.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-three-line,.v-skeleton-loader__list-item-two-line{align-content:center;align-items:center;display:flex;flex-wrap:wrap;padding:0 16px}.v-application--is-ltr .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-right:16px}.v-application--is-rtl .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-left:16px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:only-child{margin-bottom:0}.v-skeleton-loader__paragraph,.v-skeleton-loader__sentences{flex:1 0 auto}.v-skeleton-loader__paragraph:not(:last-child){margin-bottom:6px}.v-skeleton-loader__paragraph .v-skeleton-loader__text:first-child{max-width:100%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){max-width:50%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3),.v-skeleton-loader__sentences .v-skeleton-loader__text:nth-child(2){max-width:70%}.v-skeleton-loader__sentences:not(:last-child){margin-bottom:6px}.v-skeleton-loader__table-heading{align-items:center;display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-heading .v-skeleton-loader__heading{max-width:15%}.v-skeleton-loader__table-heading .v-skeleton-loader__text{max-width:40%}.v-skeleton-loader__table-thead{display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-thead .v-skeleton-loader__heading{max-width:5%}.v-skeleton-loader__table-tbody{padding:16px 16px 0}.v-skeleton-loader__table-tfoot{align-items:center;display:flex;justify-content:flex-end;padding:16px}.v-application--is-ltr .v-skeleton-loader__table-tfoot>*{margin-left:8px}.v-application--is-rtl .v-skeleton-loader__table-tfoot>*{margin-right:8px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:first-child{max-width:128px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:nth-child(2){max-width:64px}.v-skeleton-loader__table-row{display:flex;justify-content:space-between}.v-skeleton-loader__table-cell{align-items:center;display:flex;height:48px;width:88px}.v-skeleton-loader__table-cell .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__text{border-radius:6px;flex:1 0 auto;height:12px;margin-bottom:6px}.v-skeleton-loader--boilerplate .v-skeleton-loader__bone:after{display:none}.v-skeleton-loader--is-loading{overflow:hidden}.v-skeleton-loader--tile,.v-skeleton-loader--tile .v-skeleton-loader__bone{border-radius:0}@-webkit-keyframes loading{to{transform:translateX(100%)}}@keyframes loading{to{transform:translateX(100%)}}',""]),e.exports=l},589:function(e,t,o){"use strict";o.r(t);o(183),o(9);var l={name:"FormTask",props:{title:{type:String,default:""},searchItem:{type:String,default:""},search:{type:String,default:""},filters:{type:String,default:""},searchStatus:{type:String,default:"Active"},documentStatus:{type:Array,default:function(){return[]}},itemSearch:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,allData:[],totalData:0,options:{},form:{},listType:"myTicket",headers:[{text:"Task Number",value:"task_number",cellClass:"disable-wrap"},{text:"Title",value:"title",cellClass:"disable-wrap"},{text:"Sub Category",value:"sub_category.category",cellClass:"disable-wrap"},{text:"Milestone",value:"section.title",cellClass:"disable-wrap"},{text:"Doc Date",value:"created_at",cellClass:"disable-wrap"},{text:"Due Date",value:"due_date",cellClass:"disable-wrap"},{text:"Assiged To",value:"assignees",cellClass:"disable-wrap"},{text:"Priority",value:"priority_name",cellClass:"disable-wrap"},{text:"Approval",value:"approve",cellClass:"disable-wrap"},{text:"Action",value:"id",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}},mounted:function(){this.getDataFromApi()},methods:{changeList:function(e){this.listType=e,this.getDataFromApi()},editItem:function(e){this.form=Object.assign({},e),this.statusProcessing="update",this.$emit("openEdititem",e)},itemRowBackground:function(e){return"Pending"===e.approval?"bg-orange":"bg-white"},getDataFromApi:function(){var e=this;this.loading=!0,this.$axios.get("/api/tasks/task",{params:{options:this.options,searchItem:this.searchItem,documentStatus:this.documentStatus,searchStatus:this.searchStatus,search:this.search,listType:this.listType}}).then((function(t){e.loading=!1,e.allData=t.data.data.rows,e.totalData=t.data.data.total,e.$emit("dataForToolbar",{itemSearch:t.data.filter}),e.form=Object.assign({},t.data.data.form),e.defaultItem=Object.assign({},t.data.data.form)})).catch((function(t){e.loading=!1,e.$swal({type:"error",title:"Error",text:t.response.data.message})}))}}},r=o(62),n=o(70),d=o.n(n),c=o(87),v=o(738),_=o(996),h=o(104),m=o(622),k=o(458),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{type:"table"}}),e._v(" "),o("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,"fixed-tabs":"","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[o("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:"Documents","show-batch-action":!0,"batch-actions":e.batchItems},on:{emitData:e.emitData,newData:e.newData,batchActions:e.batchActions}})]},proxy:!0},{key:"item.id",fn:function(t){var l=t.item;return["1"===l.approve||e.$route.query.department===e.$auth.user.department?o("v-btn",{staticClass:"mr-2",attrs:{small:"",text:"",color:"green"},on:{click:function(t){return e.editItem(l)}}},[e._v("\n        Edit\n      ")]):e._e()]}},{key:"item.assignees",fn:function(t){var l=t.item;return e._l(l.assignees,(function(t){return o("v-tooltip",{key:t.nik,attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,r=t.attrs;return[o("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),l),[o("v-icon",{attrs:{color:"green lighten-1"}},[e._v(" mdi-account-circle ")])],1)]}}],null,!0)},[e._v(" "),o("span",[e._v(e._s(t.name))])])}))}},{key:"item.section.title",fn:function(t){var l=t.item;return[o("v-chip",{attrs:{color:"green",label:"",small:"","text-color":"white"}},[o("v-icon",{attrs:{left:""}},[e._v(" mdi-label ")]),e._v("\n        "+e._s(l.section.title)+"\n      ")],1)]}},{key:"item.approve",fn:function(t){var l=t.item;return[o("v-chip",{attrs:{color:"0"===l.approve?"orange":"green",label:"",small:"","text-color":"white"}},["0"===l.approve?o("v-icon",{attrs:{left:""}},[e._v(" mdi-timer-sand ")]):o("v-icon",{attrs:{left:""}},[e._v(" mdi-check-decagram-outline ")]),e._v("\n        "+e._s(l.approval)+"\n      ")],1)]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:c.a,VChip:v.a,VDataTable:_.a,VIcon:h.a,VSkeletonLoader:m.a,VTooltip:k.a})},622:function(e,t,o){"use strict";o(10),o(9),o(13),o(14);var l=o(25),r=o(3),n=(o(71),o(63),o(8),o(45),o(39),o(21),o(37),o(54),o(569),o(155)),d=o(110),c=o(19),v=o(6),_=o(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(v.a)(n.a,d.a,c.a).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:m({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return m(m({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return m({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(text,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(text," v-skeleton-loader__bone")},e)},genBones:function(e){var t=this,o=e.split("@"),r=Object(l.a)(o,2),n=r[0],d=r[1];return Array.from({length:d}).map((function(){return t.genStructure(n)}))},genStructure:function(e){var t=[];e=e||this.type||"";var o=this.rootTypes[e]||"";if(e===o);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);o.indexOf(",")>-1?t=this.mapBones(o):o.indexOf("@")>-1?t=this.genBones(o):o&&t.push(this.genStructure(o))}return[this.genBone(e,t)]},genSkeleton:function(){var e=[];return this.isLoading?e.push(this.genStructure()):e.push(Object(_.u)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones:function(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave:function(e){e.style.setProperty("display","none","important")},resetStyles:function(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render:function(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},797:function(e,t,o){"use strict";o.r(t);var l={name:"FormBoard",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,boardnames:["one","two","three","four"],boarddesc:["new","progress","finalizing","complete"],colours:{card:"",cardButtons:"black--text transparent"},tasks:[{title:"a title",short_desc:"this is a short desc, see how i fly",long_desc:"the project involves writing a long sente",priority:3,stage:0,user:"admin",created:1279679227,assigned:["fred","simon","nancy"]},{title:"another thing wrong",short_desc:"fix the thing",long_desc:"not much happening in this description",priority:9,stage:1,user:"admin",created:1579279227,assigned:["admin"]},{title:"one more",short_desc:"this is a short desc, see how i fly",long_desc:"if i was good at writing i would have become a writer or at least something something",priority:1,stage:3,user:"james",created:1579679227,assigned:["joyce","carla","damien"]}],emptytask:{title:"",short_desc:"",long_desc:"",priority:1,stage:1,user:"",created:0,assigned:[],notes:[]},emptynote:{subject:"",message:""}}},methods:{getColor:function(e,t){return"priority"===t?e>8?"red":e>5?"orange":e>2?"blue":"green":"stage"===t?e>=3?"green lighten-3":e>=2?"red lighten-3":e>=1?"orange lighten-3":"blue lighten-3":void 0},save:function(){var form=this.form,e=this.statusProcessing,data={form:form,status:e};"insert"===e?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===e&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(e,t,data){var o=this,l=this;l.submitLoad=!0,this.$axios({method:e,url:t,data:data}).then((function(e){o.submitLoad=!1,o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(e){o.$swal({type:"error",title:"Error",text:e.response.data.message}),l.submitLoad=!1}))}}},r=o(62),n=o(70),d=o.n(n),c=o(102),v=o(43),_=o(294),h=o(474),m=o(296),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-container",[o("v-row",e._l(e.boardnames,(function(b,t){return o("v-col",{key:t},[o("v-card",{staticClass:"pa-2",attrs:{color:e.getColor(t,"stage"),"min-height":"400"}},[o("v-card-title",[e._v(e._s(b)+" "+e._s(t))]),e._v(" "),o("v-card-subtitle",[e._v("this board is for "+e._s(e.boarddesc[t]))]),e._v(" "),e._l(e.tasks,(function(i,l){return o("div",{key:l},[i.stage==t?o("v-card",{staticClass:"ma-3",attrs:{color:e.getColor(i.priority,"priority"),width:"250",elevation:"5"}},[o("v-card-title",[e._v(e._s(i.title))]),e._v(" "),o("span",[o("v-card-subtitle",[e._v("by "+e._s(i.user)+" on "+e._s(i.created))]),e._v(" "),o("v-card-text",{staticClass:"black--text"},[e._v(e._s(i.long_desc))])],1)],1):e._e()],1)}))],2)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCard:c.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VCol:_.a,VContainer:h.a,VRow:m.a})},798:function(e,t,o){"use strict";o.r(t);var l=o(234),r={name:"FormTask",components:{TiptapVuetify:l.p},props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,form:this.formData,statusProcessing:"insert",itemSubCategoy:[],extensions:[l.g,l.a,l.k,l.r,l.o,l.j,l.l,l.c,l.m,l.i,[l.f,{options:{levels:[1,2,3]}}],l.b,l.k,l.d,l.h,l.n,l.e]}},methods:{selectSubCategory:function(){var e=this,t=this.form.department;this.$axios.get("/api/master/department-sub-category/1",{params:{category:t}}).then((function(t){e.$auth.$storage.setState("subCategory",t.data.data),e.itemSubCategoy=e.$auth.$storage.getState("subCategory")}))},returnData:function(data){this.itemSubCategoy=data},newData:function(){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem)},editItem:function(e){this.form=Object.assign({},e),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},close:function(){var e=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){e.form=Object.assign({},e.defaultItem)}),300)},save:function(){var form=this.form,e=this.statusProcessing,data={form:form,status:e};"insert"===e?(this.store("post","/api/tasks/task",data),this.submitLoad=!1):"update"===e&&(this.store("put","/api/tasks/task/"+this.form.id,data),this.submitLoad=!1)},getDataFromApi:function(){},store:function(e,t,data){var o=this,l=this;l.submitLoad=!0,this.$axios({method:e,url:t,data:data}).then((function(e){o.submitLoad=!1,o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(e){o.$swal({type:"error",title:"Error",text:e.response.data.message}),l.submitLoad=!1}))}}},n=o(62),d=o(70),c=o.n(d),v=o(87),_=o(507),h=o(511),m=o(104),k=o(505),f=o(530),x=o(154),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"800px","dialog-title":e.formTitle,"button-title":"Save"},scopedSlots:e._u([{key:"content",fn:function(){return[o("v-form",{staticClass:"pt-2"},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[o("v-select",{attrs:{items:e.$auth.$storage.getLocalStorage("departments"),label:"Department",placeholder:"Department",outlined:"",dense:"","hide-details":"auto"},on:{change:function(t){return e.selectSubCategory()}},scopedSlots:e._u([{key:"append-outer",fn:function(){return[o("v-btn",{attrs:{small:"",icon:""}},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(t){return e.$refs.formMaster.openForm("/api/products/category","Department","")}}},[e._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[o("v-select",{attrs:{items:e.itemSubCategoy,label:"Sub category",placeholder:"Sub category",outlined:"",dense:"","hide-details":"auto"},scopedSlots:e._u([{key:"append-outer",fn:function(){return[o("v-btn",{attrs:{small:"",icon:""}},[o("v-icon",{attrs:{small:"",color:"orange"},on:{click:function(t){return e.$refs.formMaster.openForm("/api/master/department-sub-category","Sub category "+e.form.department,e.form.department)}}},[e._v("\n                        mdi-arrow-right-bold\n                      ")])],1)]},proxy:!0}]),model:{value:e.form.sub_category,callback:function(t){e.$set(e.form,"sub_category",t)},expression:"form.sub_category"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[o("v-text-field",{attrs:{label:"Title",placeholder:"Title",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),o("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[o("span",[e._v("Description")]),e._v(" "),o("client-only",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v(" Loading... ")]},proxy:!0}])},[o("tiptap-vuetify",{attrs:{extensions:e.extensions},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{attrs:{color:"blue darken-1",dark:"",small:"",loading:e.submitLoad},on:{click:function(t){return e.save()}}},[e._v("\n        "+e._s(e.buttonTitle)+"\n      ")])]},proxy:!0}])}),e._v(" "),o("LazyFormMaster",{ref:"formMaster",on:{returnData:e.returnData}})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{DialogForm:o(521).default}),c()(component,{VBtn:v.a,VFlex:_.a,VForm:h.a,VIcon:m.a,VLayout:k.a,VSelect:f.a,VTextField:x.a})}}]);