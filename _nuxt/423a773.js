(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{796:function(t,e,r){"use strict";r.r(e);r(20);var o={name:"Taskcard",props:{loading:{type:Boolean,default:!0},pending:{type:Number,default:0},onProcess:{type:Number,default:0},complete:{type:Number,default:0},workspaceTitle:{type:String,default:null},workspace:{type:Array,default:function(){return[]}}},data:function(){return{workspaceRow:this.workspace}},methods:{setWorkSpace:function(t){this.workspaceRow=t},nextPage:function(t){return this.$router.push({path:"/tasks",query:{board:t.id,department:t.department,userId:this.$auth.user.id,display:"List"}})}}},n=r(62),c=r(70),l=r.n(c),d=r(657),v=r(102),m=r(43),w=r(294),f=r(465),_=r(104),k=r(296),h=r(622),y=r(224),V=r(694),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{"no-gutters":""}},[t.workspaceTitle?r("v-col",{attrs:{cols:"12"}},[r("v-subheader",{staticClass:"font-weight-bold"},[t._v(t._s(t.workspaceTitle))])],1):t._e(),t._v(" "),t.workspaceTitle?r("v-col",{attrs:{cols:"12"}},[r("v-divider")],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-row",{attrs:{"no-gutters":""}},[t._l(6,(function(e){return r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],key:e,staticClass:"pt-3 pa-3",attrs:{cols:"12",sm:"3",md:"2"}},[r("v-skeleton-loader",{attrs:{type:"card"}})],1)})),t._v(" "),t._l(t.workspaceRow,(function(e){return r("v-col",{key:e.department,staticClass:"pt-3 pa-3",attrs:{cols:"12",sm:"3",md:"3"}},[t.loading?t._e():r("v-card",{staticClass:"mx-auto",staticStyle:{cursor:"pointer"},attrs:{elevation:"0",color:"green"},on:{click:function(r){return t.nextPage(e)}}},[r("v-card-text",{staticStyle:{height:"90px"}},[r("span",{staticClass:"subtitle-1 white--text",staticStyle:{"text-transform":"capitalize !important"}},[t._v(t._s(e.department))])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-badge",{attrs:{content:t.pending,value:t.pending,color:"green",overlap:""}},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-vuetify ")])],1),t._v(" "),r("v-badge",{attrs:{content:t.onProcess,value:t.onProcess,color:"green",overlap:""}},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-vuetify ")])],1),t._v(" "),r("v-badge",{attrs:{content:t.complete,value:t.complete,color:"green",overlap:""}},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-vuetify ")])],1)],1)],1)],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBadge:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCol:w.a,VDivider:f.a,VIcon:_.a,VRow:k.a,VSkeletonLoader:h.a,VSpacer:y.a,VSubheader:V.a})}}]);