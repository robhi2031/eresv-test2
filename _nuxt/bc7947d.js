(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{793:function(t,e,n){"use strict";n.r(e);n(21);var o=n(578),r=(n(581),{name:"DialogPermission",components:{HotTable:o.a},data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:"",settings:{licenseKey:"non-commercial-and-evaluation",startRows:0},detailsRoot:"detailsRoot"}},mounted:function(){},methods:{addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1)},openDialogPermission:function(t,title){this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.canAddData=!0,this.getPermissionUser(t),this.type="user"},getPermissionUser:function(t){var e=this;this.userRole=null,this.$axios.get("/api/master/enviro-sub-role",{params:{form:t}}).then((function(t){e.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},updateTableSettings:function(){this.$refs.details.hotInstance.updateSettings({colHeaders:["Sub Role"],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:0,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,persistentState:!0,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[1]},columns:[{data:"name",width:50},{data:"id",width:50}]})},setDataToDetails:function(data){this.updateTableSettings();var t=this;setTimeout((function(){t.$refs.details.hotInstance.loadData(data)}),300)},saveData:function(){var t=this;this.loadingPermission=!0;var details=this.$refs.details.hotInstance.getSourceData();this.$axios.post("/api/master/enviro-sub-role",{details:details,form:this.form}).then((function(e){t.$swal({icon:"success",title:"Success",text:e.data.message}),t.getPermissionUser(t.form)})).catch((function(e){t.$swal({icon:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.loadingPermission=!1}))}}}),l=n(62),d=n(70),c=n.n(d),m=n(87),h=n(102),f=n(43),v=n(225),w=n(104),P=n(224),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dialogPermission,callback:function(e){t.dialogPermission=e},expression:"dialogPermission"}},[n("v-card",{attrs:{loading:t.loadingPermission}},[n("v-card-title",[n("span",{staticClass:"font-weight-medium"},[t._v("\n          "+t._s(t.dialogTitle)+"\n        ")])]),t._v(" "),n("v-card-text",[n("div",{staticClass:"scroll-container"},[n("HotTable",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)]),t._v(" "),n("v-card-actions",[t.canAddData?n("v-btn",{staticClass:"white--text",attrs:{"x-small":"",color:"orange darken-1"},on:{click:function(e){return t.addLine()}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("\n          mdi-plus\n        ")])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:t.closeDialogPermission}},[t._v("\n        close\n      ")]),t._v(" "),t.canAddData?n("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(e){return t.saveData()}}},[t._v("\n        Save\n      ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:h.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VDialog:v.a,VIcon:w.a,VSpacer:P.a})}}]);