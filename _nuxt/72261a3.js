(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{250:function(n,l,t){"use strict";t.r(l);var e={name:"LangSwitcher",data:function(){return{langShow:!1}},methods:{selLang:function(n,l){this.langShow=!1,this.$i18n.locale!==l&&(this.$i18n.locale=l)},formatedLang:function(n,l){return n!=l&&("de"==n?"Deutsch":"en"==n?"English":"ru"==n?"Русский":void 0)}}},o=t(62),component=Object(o.a)(e,(function(){var n=this,l=n.$createElement,t=n._self._c||l;return t("div",{staticClass:"lang__box"},[t("div",{staticClass:"lang",class:n.langShow?"open":"",on:{click:function(l){n.langShow=!n.langShow}}},[t("p",[n._v(n._s(n.formatedLang(n.$i18n.locale,!n.$i18n.locale)))]),n._v(" "),t("svg",{attrs:{width:"11",height:"6",viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.5 -3.93402e-07L5.25 3.75L9 -6.55671e-08L10.5 0.75L5.25 6L-3.27835e-08 0.75L1.5 -3.93402e-07Z",fill:"white"}})])]),n._v(" "),n.langShow?t("ul",{staticClass:"lang__list",attrs:{name:"lang"}},n._l(n.$i18n.availableLocales,(function(l){return n.formatedLang(l,n.$i18n.locale)?t("li",{key:"locale-"+l,staticClass:"lang__item",on:{click:function(t){return n.selLang(t,l)}}},[n._v("\n      "+n._s(n.formatedLang(l,n.$i18n.locale))+"\n    ")]):n._e()})),0):n._e()])}),[],!1,null,null,null);l.default=component.exports}}]);