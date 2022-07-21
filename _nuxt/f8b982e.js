(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{618:function(t,e,r){"use strict";r.r(e);r(183),r(9),r(54),r(184);var o={name:"ListPaper",props:{paperType:{type:String,default:""},paperName:{type:String,default:""}},data:function(){return{totalData:0,allData:[],dataFilter:[],loading:!0,dialogFilter:!1,loading1:!0,loadingPrint:!1,dialogLoading:!1,options:{},itemSearch:[],documentStatus:[],search:"",searchItem:"",searchStatus:"All",loadNewBtn:!1,defaultForm:{}}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},search:function(){this.getDataFromApi()},$route:function(t,e){this.getDataFromApi()}},methods:{getHeader:function(){return[{text:"Date",value:"act_date"},{text:"Activity",value:"sub_role_name"},{text:"Problem",value:"problem_desc"},{text:"Problem Date",value:"problem_date"},{text:"Solution",value:"solution_desc"},{text:"Solution Date",value:"solution_date"},{text:"Actions",value:"actions"}]},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,r=this.$auth.user.username;this.$axios.get("/api/enviro-activity",{params:{options:e.options,search:e.search,searchItem:e.searchItem,type:e.paperType,user_id:r,status:e.searchStatus,clinic:"N"}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.itemSearch=e.data.data.filter,t.defaultForm=e.data.data.form})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},cancelDocument:function(t){this.$refs.formActivity.openDialog(this.paperName,"/api/enviro-activity/"+t.id,"put",this.paperType,"Non Karyawan")},sanitizeTitle:function(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="àáäâèéëêìíïîòóöôùúüûñç·/_,:;",i=0,r=e.length;i<r;i++)t=t.replace(new RegExp(e.charAt(i),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(i));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},editDocument:function(t){this.$refs.formActivity.openForm("/api/enviro-activity/"+t.id,"patch",t)},printItem:function(t){var e=this;"canceled"===t.status?this.$swal({title:"Error!",text:"Form sudah dicancel!",type:"error"}):(this.loadingPrint=!0,this.$axios.get("/api/enviro-activity/print",{params:{item:t,type:this.paperType},responseType:"arraybuffer"}).then((function(r){e.loadingPrint=!1;var o=new Blob([r.data],{type:"application/pdf"}),n=window.URL.createObjectURL(o),link=document.createElement("a");link.href=window.URL.createObjectURL(o),link.download=e.sanitizeTitle(t.paper_no)+"-"+e.sanitizeTitle(t.user_name)+".pdf",document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),window.URL.revokeObjectURL(n)}),100)})).catch((function(t){e.loadingPrint=!1,e.$swal({type:"error",title:"Error",text:t.response.data.message})})))},newData:function(){this.$refs.formActivity.openForm("/api/enviro-activity","post",this.defaultForm)}}},n=r(62),c=r(70),l=r.n(c),d=r(87),v=r(102),m=r(43),h=r(738),f=r(474),_=r(996),y=r(225),D=r(465),w=r(104),x=r(224),F=r(53),A=r(108),S=r(458),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[r("v-toolbar-title",[t._v("Activity ")]),t._v(" "),r("v-divider",{staticClass:"ml-2",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"d-md-none d-lg-none d-sm-flex d-xs-flex",attrs:{icon:"",color:"green",dark:""},on:{click:function(e){t.dialogFilter=!0}}},[r("v-icon",[t._v("mdi-filter-variant")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",loading:t.loadNewBtn,color:"green",dark:""},on:{click:t.newData}},[r("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),r("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[r("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),r("div",{staticClass:"mt-2"},[r("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.getHeader(),items:t.allData,"items-per-page":10,options:t.options,"server-items-length":t.totalData,loading:t.loading,dense:"","footer-props":{"items-per-page-options":[10,20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.actions",fn:function(e){var o=e.item;return[r("div",{staticClass:"d-flex"},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",c,!1),n),[r("v-icon",{staticClass:"mr-1",attrs:{color:"blue"},on:{click:function(e){return t.editDocument(o)}}},[t._v("\n                  mdi-square-edit-outline\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Edit Document")])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),n),[r("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.attachment.openAttachment(o.id,"enviro",1)}}},[t._v("\n                  mdi-attachment\n                ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Attachment")])])],1)]}},{key:"item.status",fn:function(e){var o=e.item;return[r("v-chip",{staticClass:"ma-1",attrs:{color:"canceled"===o.status?"red":"active"===o.status?"green":"orange",small:"","text-color":"white"}},[t._v("\n          "+t._s(o.status)+"\n        ")])]}}],null,!0)})],1),t._v(" "),r("LazyEnviroFormActivity",{ref:"formActivity",attrs:{"default-form":t.defaultForm},on:{reload:t.getDataFromApi}}),t._v(" "),r("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dialogFilter,callback:function(e){t.dialogFilter=e},expression:"dialogFilter"}},[r("v-card",[r("v-card-title",[t._v("Filter Form")]),t._v(" "),r("v-card-text",[r("LazyPaperTableFilter",{attrs:{"document-status":t.documentStatus,"item-search":t.itemSearch,"search-status":t.searchStatus,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogFilter=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1),t._v(" "),t.loadingPrint?r("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),r("LazyAttachment",{ref:"attachment"}),t._v(" "),r("LazyResvApprovalDetails",{ref:"approvalStages"})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VChip:h.a,VContainer:f.a,VDataTable:_.a,VDialog:y.a,VDivider:D.a,VIcon:w.a,VSpacer:x.a,VToolbar:F.a,VToolbarTitle:A.a,VTooltip:S.a})}}]);