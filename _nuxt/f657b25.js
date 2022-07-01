(window.webpackJsonp=window.webpackJsonp||[]).push([[39,20],{1045:function(t,e,o){"use strict";o.r(e);o(21),o(37);var n={name:"FormDocument",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{buttonKey:1,dialog:!1,submitLoad:!1,form:this.formData,selectedItem:[],documentType:[],itemCategory:[],itemDivision:[],itemApps:[],itemRole:[],itemBank:[],itemTax:[],items:[],itemWhs:[],itemGroupCode:[],itemCompany:[],itemSapCompany:[],itemSubRole:[],entries:[],itemWorkLocation:[],menu:"",statusProcessing:"insert",currentFile:void 0,options:{url:"https://sbo2.imip.co.id:3001/backendcore2/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,acceptedFiles:"application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")},parallelUploads:1,maxFilesize:1e3,autoProcessQueue:!1,autoQueue:!1,file:""}}},mounted:function(){this.getItemGroupCode(),this.getApps(),this.getDataEmployee(),this.getWhs()},methods:{newData:function(t,e){this.$refs.dialogForm.openDialog(),this.documentType=t,this.statusProcessing="insert",this.form=Object.assign({},e),this.buttonKey++},getApps:function(){var t=this;this.$axios.get("/api/master/apps").then((function(e){t.itemApps=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})),this.$axios.get("/api/master/users/division").then((function(e){t.itemDivision=e.data.division})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},selectFile:function(t){this.currentFile=t},editItem:function(t,e){this.documentType=e,this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.buttonKey++},setRole:function(t){this.itemRole=t},setCompany:function(t){this.itemCompany=t},setSapCompany:function(t){this.itemSapCompany=t},setSubRole:function(t){this.itemSubRole=t},setWorkLocation:function(t){this.itemWorkLocation=t},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},getItemGroupCode:function(){var t=this;this.$axios.get("/api/master/item-group-code").then((function(e){t.itemGroupCode=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getWhs:function(){var t=this;this.$axios.get("/api/master/whs").then((function(e){t.itemWhs=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getDataEmployee:function(){var t=this;this.$axios.get("/api/master/employees",{params:{company:""}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},save:function(){var t=this.statusProcessing,data={form:this.form};if("insert"===t){this.submitLoad=!0,this.store("post",this.url,data),this.submitLoad=!1}else"update"===t&&(this.store("put",this.url+"/"+this.form.id,data),this.submitLoad=!1)},store:function(t,e,data){var o=this,n=this;n.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(t){o.buttonKey++,o.$swal({type:"error",title:"Error",text:t.response.data.message}),n.submitLoad=!1}))},sendingParams:function(t,e,o){o.append("source_id",this.form.temp_id),o.append("type","peruri")},handleError:function(t,e,o){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var o=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){o.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,o=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),o.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:"peruri",source_id:e.form.temp_id}}).then((function(t){e.items=t.data.data.rows,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}},l=o(62),r=o(70),c=o.n(r),m=o(540),d=o(87),h=o(995),f=o(508),v=o(511),x=o(506),_=o(38),y=o(743),w=o(744),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-combobox",{attrs:{items:t.entries,"item-text":"Name","item-value":"Nik","hide-no-data":"","hide-selected":"",label:"Username",placeholder:"Username",outlined:"",dense:"",clearable:"","hide-details":"auto"},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(n.Name)}}),t._v(" "),o("v-list-item-subtitle",{domProps:{textContent:t._s(n.Nik)}})],1)]}}]),model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemRole,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","item-value":"id","item-text":"name","hide-details":"auto"},model:{value:t.form.role,callback:function(e){t.$set(t.form,"role",e)},expression:"form.role"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemWorkLocation,chips:"","deletable-chips":"","small-chips":"","hide-no-data":"",label:"Work Location Access",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.work_location,callback:function(e){t.$set(t.form,"work_location",e)},expression:"form.work_location"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemApps,chips:"","deletable-chips":"","small-chips":"","hide-no-data":"",label:"Apps Access",multiple:"",outlined:"",dense:"","item-value":"id","item-text":"name","hide-details":"auto"},model:{value:t.form.apps,callback:function(e){t.$set(t.form,"apps",e)},expression:"form.apps"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemDivision,chips:"","deletable-chips":"","small-chips":"",label:"Division Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"name","item-text":"name"},model:{value:t.form.division,callback:function(e){t.$set(t.form,"division",e)},expression:"form.division"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemWhs,chips:"","deletable-chips":"","small-chips":"",label:"Whs Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"name","item-text":"name"},model:{value:t.form.whs,callback:function(e){t.$set(t.form,"whs",e)},expression:"form.whs"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemGroupCode,chips:"","deletable-chips":"","small-chips":"",label:"Item Group Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"item_group_code","item-text":"item_group_name"},model:{value:t.form.item_group,callback:function(e){t.$set(t.form,"item_group",e)},expression:"form.item_group"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[o("v-autocomplete",{attrs:{items:t.itemSapCompany,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"SAP DB","item-text":"db_code","item-value":"id",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.user_sap_company,callback:function(e){t.$set(t.form,"user_sap_company",e)},expression:"form.user_sap_company"}})],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Is Active"},model:{value:t.form.active,callback:function(e){t.$set(t.form,"active",e)},expression:"form.active"}},[o("v-radio",{attrs:{label:"Yes",value:"Y"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"N"}})],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"SAP User?"},model:{value:t.form.is_sap_user,callback:function(e){t.$set(t.form,"is_sap_user",e)},expression:"form.is_sap_user"}},[o("v-radio",{attrs:{label:"Yes",value:"Y"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"N"}})],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Admin SubWh"},model:{value:t.form.is_admin_subwh,callback:function(e){t.$set(t.form,"is_admin_subwh",e)},expression:"form.is_admin_subwh"}},[o("v-radio",{attrs:{label:"Yes",value:"Y"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"N"}})],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Superuser"},model:{value:t.form.is_superuser,callback:function(e){t.$set(t.form,"is_superuser",e)},expression:"form.is_superuser"}},[o("v-radio",{attrs:{label:"Yes",value:"Yes"}}),t._v(" "),o("v-radio",{attrs:{label:"No",value:"No"}})],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[o("v-btn",{key:t.buttonKey,attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{"~click":function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DialogForm:o(522).default}),c()(component,{VAutocomplete:m.a,VBtn:d.a,VCombobox:h.a,VFlex:f.a,VForm:v.a,VLayout:x.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRadio:y.a,VRadioGroup:w.a})},522:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},l=o(62),r=o(70),c=o.n(r),m=o(87),d=o(102),h=o(43),f=o(475),v=o(226),x=o(466),_=o(104),y=o(225),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[o("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"pl-0 pr-0"},[o("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VContainer:f.a,VDialog:v.a,VDivider:x.a,VIcon:_.a,VSpacer:y.a})}}]);