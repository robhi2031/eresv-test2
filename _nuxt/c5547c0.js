(window.webpackJsonp=window.webpackJsonp||[]).push([[25,20],{1039:function(t,e,n){"use strict";n.r(e);var o={name:"FormDocument",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}},itemCustomer:{type:Array,default:function(){return[]}}},data:function(){return{buttonKey:1,dialog:!1,submitLoad:!1,form:this.formData,selectedItem:[],documentType:[],itemSubType:[],itemCategory:[],itemBank:[],itemTax:[],items:[],menu:"",statusProcessing:"insert",currentFile:void 0,options:{url:"https://sbo2.imip.co.id:3001/backendcore2/api/attachment",timeout:9e9,thumbnailWidth:50,thumbnailHeight:50,addRemoveLinks:!0,acceptedFiles:"application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")},parallelUploads:1,maxFilesize:1e3,autoProcessQueue:!1,autoQueue:!1,file:""}}},mounted:function(){},methods:{newData:function(t,e){this.$refs.dialogForm.openDialog(),this.documentType=t,this.statusProcessing="insert",this.form=Object.assign({},e),this.changeDocumentType(),this.buttonKey++},changeDocumentType:function(){var t=this;this.$axios.get("/api/document/sub-type/"+this.form.type).then((function(e){t.itemSubType=e.data.data}))},changeIdentify:function(){"NPWP"===this.form.identity_type?(this.form.identity_number="03.310.985.1-014.000",this.form.identity_name="PT INDONESIA MOROWALI INDUSTRIAL PARK"):(this.form.identity_number="-",this.form.identity_name="-")},selectFile:function(t){this.currentFile=t},editItem:function(t,e){this.documentType=e,this.form=Object.assign({},t),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.changeDocumentType(),this.buttonKey++},returnData:function(data){"Banks"===data.type?this.itemBank=data.item:"Item Unit"===data.type&&(this.itemUnit=data.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem)}),300)},save:function(){var t=this,e=this.statusProcessing,data=this.form;if("insert"===e){var n=this;n.submitLoad=!0;for(var o=new FormData,i=0;i<this.$refs.file.files.length;i++){var r=this.$refs.file.files[i];o.append("files["+i+"]",r)}o.append("data",JSON.stringify(this.form)),this.$axios.post(this.url,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.$refs.dialogForm.closeDialog(),t.$emit("getDataFromApi")})).catch((function(e){t.buttonKey++,t.$swal({type:"error",title:"Error",text:e.response.data.message}),n.submitLoad=!1})),n.submitLoad=!1}else"update"===e&&(this.store("put",this.url+"/"+this.form.id,data),this.submitLoad=!1)},store:function(t,e,data){var n=this,o=this;o.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.$refs.dialogForm.closeDialog(),n.$emit("getDataFromApi")})).catch((function(t){n.buttonKey++,n.$swal({type:"error",title:"Error",text:t.response.data.message}),o.submitLoad=!1}))},sendingParams:function(t,e,n){n.append("source_id",this.form.temp_id),n.append("type","peruri")},handleError:function(t,e,n){this.$swal({type:"error",title:"Oops...",text:e.message})},reloadAttachment:function(t,e){var n=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout((function(){n.getAttachment()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},deleteFile:function(t){var e=this,n=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete("/api/attachment",{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),n.getAttachment()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getAttachment:function(){var t=this;this.showLoadingAttachment=!0;var e=this;this.$axios.get("/api/attachment",{params:{type:"peruri",source_id:e.form.temp_id}}).then((function(t){e.items=t.data.data.rows,e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:e.response.message})}))}}},r=n(62),l=n(70),c=n.n(l),d=n(539),h=n(87),m=n(294),f=n(474),v=n(995),y=n(511),x=n(466),_=n(210),I=n(206),S=n(296),D=n(530),w=n(154),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("DialogForm",{ref:"dialogForm",attrs:{"max-width":"500px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-form",{staticClass:"pt-0"},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},[n("v-col",{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[n("v-select",{attrs:{items:["PT IMIP","PT SMI"],label:"Company",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("v-autocomplete",{attrs:{items:t.itemCustomer,"item-text":"CardName","item-value":"CardName",label:"Customer",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.customer_name,callback:function(e){t.$set(t.form,"customer_name",e)},expression:"form.customer_name"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.documentType,"item-text":"nama","item-value":"nama",label:"Document Type",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},on:{change:t.changeDocumentType},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("v-autocomplete",{attrs:{items:t.itemSubType,"item-text":"name","item-value":"id",label:"Sub Type",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.document_sub_type_id,callback:function(e){t.$set(t.form,"document_sub_type_id",e)},expression:"form.document_sub_type_id"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("v-select",{attrs:{label:"Identify Type",items:["NPWP","NIK"],outlined:"",dense:"","hide-details":"auto"},on:{change:t.changeIdentify},model:{value:t.form.identity_type,callback:function(e){t.$set(t.form,"identity_type",e)},expression:"form.identity_type"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Identify Number",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.identity_number,callback:function(e){t.$set(t.form,"identity_number",e)},expression:"form.identity_number"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Identify Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.identity_name,callback:function(e){t.$set(t.form,"identity_name",e)},expression:"form.identity_name"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Document Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.document_date,callback:function(e){t.$set(t.form,"document_date",e)},expression:"form.document_date"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.document_date,callback:function(e){t.$set(t.form,"document_date",e)},expression:"form.document_date"}})],1)],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Location",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}})],1),t._v(" "),n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Remark",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),t._v(" "),"insert"===t.statusProcessing?n("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[n("input",{ref:"file",staticClass:"form-control",staticStyle:{display:"block !important"},attrs:{type:"file",accept:"application/pdf",multiple:""},on:{change:t.selectFile}})]):t._e()],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[n("v-btn",{key:t.buttonKey,attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{"~click":function(e){return t.save()}}},[t._v("\n        "+t._s(t.buttonTitle)+"\n      ")])]},proxy:!0}])}),t._v(" "),n("v-overlay",{attrs:{value:t.submitLoad}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DialogForm:n(521).default}),c()(component,{VAutocomplete:d.a,VBtn:h.a,VCol:m.a,VContainer:f.a,VDatePicker:v.a,VForm:y.a,VMenu:x.a,VOverlay:_.a,VProgressCircular:I.a,VRow:S.a,VSelect:D.a,VTextField:w.a})},511:function(t,e,n){"use strict";var o=n(3),r=(n(49),n(32),n(229),n(9),n(76),n(10),n(8),n(13),n(14),n(6)),l=n(89),c=n(109);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},514:function(t,e,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("50788f08",content,!0,{sourceMap:!1})},515:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=o},521:function(t,e,n){"use strict";n.r(e);var o={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=n(62),l=n(70),c=n.n(l),d=n(87),h=n(102),m=n(43),f=n(474),v=n(225),y=n(465),x=n(104),_=n(224),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[n("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pl-0 pr-0"},[n("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VContainer:f.a,VDialog:v.a,VDivider:y.a,VIcon:x.a,VSpacer:_.a})},539:function(t,e,n){"use strict";n(10),n(8),n(13),n(14);var o=n(3),r=(n(63),n(9),n(76),n(153),n(49),n(32),n(514),n(530)),l=n(154),c=n(55),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.t)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var o=e[this.$refs.menu.listIndex];o?this.setMenuIndex(t.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.r)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})}}]);