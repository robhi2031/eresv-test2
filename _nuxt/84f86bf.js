(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1001:function(e,t,o){"use strict";o.r(t);var n=o(26),r=(o(79),o(54),{layout:"auth",middleware:"guest",created:function(){this.cekSession()},methods:{cekSession:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$auth,n="",e.$auth.$storage.setLocalStorage("app.default_name","E-RESERVATION"),e.$route.query.sessions_key?(n=e.$route.query.sessions_key,e.$router.replace("/")):e.$cookies.get("sessions_key")?"false"==(n=e.$cookies.get("sessions_key"))&&(window.location.href="https://sbo2.imip.co.id:3001/e-portal/login?service=https://sbo2.imip.co.id:3001/eresv-test2"):window.location.href="https://sbo2.imip.co.id:3001/e-portal/login?service=https://sbo2.imip.co.id:3001/eresv-test2",t.next=6,e.$axios.get("https://sbo2.imip.co.id:3001/e-portalapi/api/auth/session",{params:{sessions_key:n}});case 6:if(!(r=t.sent).data.session){t.next=17;break}return t.next=10,e.$axios.get("https://sbo2.imip.co.id:3001/e-portalapi/api/auth/me",{headers:{Authorization:"Bearer "+r.data.session.bearer_token}});case 10:return c=t.sent,t.next=13,o.loginWith("local",{data:{username:c.data.user.username,sessions_key:n,language:"en",app_name:"E-RESERVATION"}});case 13:(l=t.sent).data.auth.token||e.$swal({type:"error",title:l.data.auth.MessageTitle,text:l.data.auth.Message}),t.next=18;break;case 17:window.location.href="https://sbo2.imip.co.id:3001/e-portal/login?service=https://sbo2.imip.co.id:3001/eresv-test2";case 18:case"end":return t.stop()}}),t)})))()}}}),c=(o(821),o(62)),l=o(70),d=o.n(l),h=o(474),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("h5",{staticClass:"v-heading font-weight-medium text-center text-h5 text-sm-h6 my-5"},[e._v("\n    Redirecting...\n  ")])])}),[],!1,null,"22831ffc",null);t.default=component.exports;d()(component,{VContainer:h.a})},736:function(e,t,o){var content=o(822);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("07d8e510",content,!0,{sourceMap:!1})},821:function(e,t,o){"use strict";o(736)},822:function(e,t,o){var n=o(16)(!1);n.push([e.i,".logo[data-v-22831ffc]{max-width:180px;margin:0 auto;text-align:center}",""]),e.exports=n}}]);