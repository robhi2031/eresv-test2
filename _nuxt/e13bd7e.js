(window.webpackJsonp=window.webpackJsonp||[]).push([[100,37],{1018:function(t,e,n){"use strict";n.r(e);var r={name:"MasterRole",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,statusProcessing:"insert",dialog:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,loadingPermission:!0,allData:[],department:{},form:{id:null,name:null,description:null},defaultItem:{id:null,name:null,description:null},options:{},optionDivision:{},headers:[{text:"Role Name",value:"name"},{text:"Description",value:"description"},{text:"Guard",value:"guard_name"},{text:"Action",value:"ACTIONS",align:"center"}]}},head:function(){return{title:"Master Roles"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this;this.loading=!0;this.$axios.get("/api/master/roles",{params:{options:this.options}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){this.dialog=!0,this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem),this.message=!1},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.statusProcessing="update",this.dialog=!0,this.insert=!1},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,form=this.form,n=this.statusProcessing,data={form:form,status:n};"insert"===n?(this.store("post","/api/master/roles",data,"insert",t),e.submitLoad=!1):"update"===n&&(this.store("put","/api/master/roles/"+this.form.id,data,"update",t),e.submitLoad=!1)},store:function(t,e,data,n){var r=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){"Error"===t.data.status?(r.$swal({type:"error",title:"Error",text:t.data.message}),o.submitLoad=!1):(r.dialog=!1,r.message=t.data.message,setTimeout((function(){return r.message=!1}),8e3),r.getDataFromApi())})).catch((function(t){r.$swal({type:"error",title:"Error",text:t.response.data.message}),o.submitLoad=!1}))}}},o=r,l=n(62),c=n(70),d=n.n(c),m=n(87),f=n(102),h=n(43),v=n(997),_=n(226),x=n(466),D=n(508),P=n(511),w=n(104),y=n(506),$=n(225),O=n(154),V=n(53),k=n(108),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[n("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[n("v-toolbar-title",{staticClass:"hidden-xs-only"},[t._v("Master Roles")]),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:function(e){return t.newData()}}},[n("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),n("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[n("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.ACTIONS",fn:function(e){var r=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(r)}}},[t._v("\n            mdi-pencil-circle\n          ")]),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.dialogPermission.openRolePermissions(r,"Role Permissions","role")}}},[t._v("\n            mdi-gate\n          ")])]}}],null,!0)})],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-card-text",[n("v-form",[n("v-layout",{attrs:{wrap:""}},[t.message?n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"red darken-2 text-xs-center"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e(),t._v(" "),n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-2",attrs:{md12:""}},[n("v-text-field",{attrs:{label:"Role Name",placeholder:"Role Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md12:""}},[n("v-text-field",{attrs:{label:"Description",placeholder:"Description",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1),t._v(" "),n("MasterDialogPermission",{ref:"dialogPermission"})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{MasterDialogPermission:n(615).default}),d()(component,{VBtn:m.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDataTable:v.a,VDialog:_.a,VDivider:x.a,VFlex:D.a,VForm:P.a,VIcon:w.a,VLayout:y.a,VSpacer:$.a,VTextField:O.a,VToolbar:V.a,VToolbarTitle:k.a})},506:function(t,e,n){"use strict";n(227);var r=n(228);e.a=Object(r.a)("layout")},508:function(t,e,n){"use strict";n(227);var r=n(228);e.a=Object(r.a)("flex")},511:function(t,e,n){"use strict";var r=n(3),o=(n(49),n(32),n(230),n(9),n(76),n(10),n(8),n(13),n(14),n(6)),l=n(89),c=n(109);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},615:function(t,e,n){"use strict";n.r(e);n(21);var r={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var t=this;this.$axios.get("/api/master/permissions").then((function(e){t.$auth.$storage.setLocalStorage("permission_list",JSON.stringify(e.data.data.simple))}))},openDialogPermission:function(t,title){this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.canAddData=!0,this.getPermissionUser(t),this.type="user"},getPermissionUser:function(t){var e=this;this.userRole=null,this.$axios.get("/api/master/users/permission",{params:{form:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(t,title,e){var n=this;this.type=e,this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t);var r="";"user"===e?r="/api/master/users/roles":(this.canAddData=!0,r="/api/master/permission-role"),this.$axios.get(r,{params:{form:this.form}}).then((function(t){"user"===e?(n.userRole=t.data.data.rows,n.changeTab(n.userRole[0])):(n.$refs.childDetails.setDataToDetails(t.data.data.rows),n.loadingPermission=!1)}))},changeTab:function(t){var e=this;this.loadingPermission=!0,this.$axios.get("/api/master/permission-role",{params:{form:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},getRolePermissionUser:function(t){var e=this;this.$axios.get("/api/master/users/role-permission",{params:{item:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},getPermissionRole:function(t){var e=this;this.$axios.get("/api/master/permission-role",{params:{form:this.form}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},saveRolePermission:function(){var t=this;this.loadingPermission=!0;var details=this.$refs.childDetails.getAddData(),e="";e="user"===this.type?"/api/master/users/permission":"/api/master/permission-role",this.$axios.post(e,{details:details,form:this.form}).then((function(e){t.$swal({icon:"success",title:"Success",text:e.data.message}),"user"===t.type?t.getPermissionUser(t.form):t.getPermissionRole(t.form)})).catch((function(e){t.$swal({icon:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.loadingPermission=!1}))}}},o=n(62),l=n(70),c=n.n(l),d=n(87),m=n(102),f=n(43),h=n(226),v=n(104),_=n(225),x=n(460),D=n(461),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.dialogPermission,callback:function(e){t.dialogPermission=e},expression:"dialogPermission"}},[n("v-card",{attrs:{loading:t.loadingPermission}},[n("v-card-title",[n("span",{staticClass:"font-weight-medium"},[t._v("\n          "+t._s(t.dialogTitle)+"\n        ")])]),t._v(" "),n("v-card-text",[t.userRole?n("v-tabs",{attrs:{centered:"","slider-color":"green"},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}},t._l(t.userRole,(function(e,r){return n("v-tab",{key:r,attrs:{href:"#tab-"+r},on:{change:function(n){return t.changeTab(e)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),1):t._e(),t._v(" "),n("div",{staticClass:"scroll-container"},[n("LazyMasterPermissionList",{ref:"childDetails"})],1)],1),t._v(" "),n("v-card-actions",[t.canAddData?n("v-btn",{staticClass:"white--text",attrs:{"x-small":"",color:"orange darken-1"},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("\n          mdi-plus\n        ")])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:t.closeDialogPermission}},[t._v("\n        close\n      ")]),t._v(" "),t.canAddData?n("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(e){return t.saveRolePermission()}}},[t._v("\n        Save\n      ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VDialog:h.a,VIcon:v.a,VSpacer:_.a,VTab:x.a,VTabs:D.a})}}]);