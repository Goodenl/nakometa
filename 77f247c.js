(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4,5,6,7,8,9,10,11,12,13],{249:function(t,e,n){"use strict";n.r(e);var r={name:"LangSwitcher",data:function(){return{langShow:!1}},methods:{selLang:function(t){this.langShow=!1,console.log(this.$i18n.locale),this.$i18n.locale!==t&&(this.$i18n.locale=t)},formatedLang:function(t,e){return t!=e&&("de"==t?"Deutsch":"en"==t?"English":"ru"==t?"Русский":void 0)}}},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lang__box"},[n("div",{staticClass:"lang",class:t.langShow?"open":"",on:{click:function(e){t.langShow=!t.langShow}}},[n("p",[t._v(t._s(t.formatedLang(t.$i18n.locale,!t.$i18n.locale)))]),t._v(" "),n("svg",{attrs:{width:"11",height:"6",viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1.5 -3.93402e-07L5.25 3.75L9 -6.55671e-08L10.5 0.75L5.25 6L-3.27835e-08 0.75L1.5 -3.93402e-07Z",fill:"white"}})])]),t._v(" "),t.langShow?n("ul",{staticClass:"lang__list",attrs:{name:"lang"}},t._l(t.$i18n.availableLocales,(function(e){return t.formatedLang(e,t.$i18n.locale)?n("li",{key:"locale-"+e,staticClass:"lang__item",on:{click:function(n){return t.selLang(e)}}},[t._v("\n      "+t._s(t.formatedLang(e,t.$i18n.locale))+"\n    ")]):t._e()})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){t.exports=n.p+"img/logo.51afc50.png"},251:function(t,e,n){t.exports=n.p+"img/card-header.2e41ed5.jpg"},252:function(t,e,n){t.exports=n.p+"img/circle-mob.2129def.png"},253:function(t,e,n){t.exports=n.p+"img/circle.cfeaf89.svg"},254:function(t,e,n){t.exports=n.p+"img/people-circle.e04dc5c.png"},255:function(t,e,n){t.exports=n.p+"img/author.9233f3c.png"},256:function(t,e,n){t.exports=n.p+"img/video-preview.12078a0.png"},257:function(t,e,n){t.exports=n.p+"img/free.7ef662a.svg"},258:function(t,e,n){t.exports=n.p+"img/options.7be003e.svg"},259:function(t,e,n){t.exports=n.p+"img/save-money.f3ab6e7.svg"},260:function(t,e,n){t.exports=n.p+"img/antivirus.3352ddd.svg"},261:function(t,e,n){t.exports=n.p+"img/circle-form.43e5298.svg"},262:function(t,e,n){t.exports=n.p+"img/instagram.537ce97.svg"},263:function(t,e,n){t.exports=n.p+"img/linkedin.38d049a.svg"},264:function(t,e,n){t.exports=n.p+"img/wathsup.f65efa2.svg"},265:function(t,e,n){t.exports=n.p+"img/facebook.07933a1.svg"},266:function(t,e,n){t.exports=n.p+"img/twitter.a02ccd3.svg"},267:function(t,e,n){t.exports=n.p+"img/telegram.906a57f.svg"},268:function(t,e,n){t.exports=n.p+"img/youtube.b259509.svg"},269:function(t,e,n){"use strict";n.r(e);var r={name:"VHeader",methods:{openMenu:function(t){t.currentTarget.classList.toggle("open"),document.querySelector(".menu").classList.toggle("show"),"hidden"!=document.body.style.overflow?document.body.style.overflow="hidden":document.body.style.overflow="auto"}}},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"header__wrap"},[r("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[r("img",{attrs:{src:n(250),alt:"Логотип"}})]),t._v(" "),r("nav",{staticClass:"nav"},[r("ul",{staticClass:"nav__list"},[r("li",{staticClass:"nav__item"},[r("a",{attrs:{href:"#about"}},[t._v(t._s(t.$t("menu.about")))])]),t._v(" "),r("li",{staticClass:"nav__item"},[r("a",{attrs:{href:"#how-work"}},[t._v(t._s(t.$t("menu.howWork")))])]),t._v(" "),r("li",{staticClass:"nav__item"},[r("a",{attrs:{href:"#completed-dream"}},[t._v(t._s(t.$t("menu.history")))])]),t._v(" "),r("li",{staticClass:"nav__item"},[r("a",{attrs:{href:"#possibilities"}},[t._v(t._s(t.$t("menu.possibilities")))])]),t._v(" "),t._m(0),t._v(" "),r("li",{staticClass:"nav__item"},[r("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("menu.news")))])])])]),t._v(" "),r("lang-switcher"),t._v(" "),r("div",{staticClass:"user-icon"},[r("svg",{attrs:{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),r("button",{staticClass:"burger",on:{click:t.openMenu}},[r("span")])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav__item"},[n("a",{attrs:{href:"#faq"}},[t._v("FAQ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LangSwitcher:n(249).default})},270:function(t,e,n){"use strict";n.r(e);var r={name:"VMenu",methods:{closeOutsideMenu:function(){event.target.closest(".menu__list")||event.target.closest(".lang__list")||this.closeMenu()},closeMenu:function(){document.querySelector(".burger").classList.remove("open"),document.querySelector(".menu").classList.remove("show"),document.body.style.overflow="auto"}}},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("menu",{staticClass:"menu",on:{click:t.closeOutsideMenu}},[n("ul",{staticClass:"menu__list"},[n("li",{staticClass:"menu__item",on:{click:t.closeMenu}},[n("a",{attrs:{href:"#about"}},[t._v(t._s(t.$t("menu.about")))])]),t._v(" "),n("li",{staticClass:"menu__item",on:{click:t.closeMenu}},[n("a",{attrs:{href:"#how-work"}},[t._v(t._s(t.$t("menu.howWork")))])]),t._v(" "),n("li",{staticClass:"menu__item",on:{click:t.closeMenu}},[n("a",{attrs:{href:"#completed-dream"}},[t._v(t._s(t.$t("menu.history")))])]),t._v(" "),n("li",{staticClass:"menu__item",on:{click:t.closeMenu}},[n("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("menu.news")))])]),t._v(" "),n("li",{staticClass:"menu__item",on:{click:t.closeMenu}},[n("a",{attrs:{href:"#faq"}},[t._v("FAQ")])]),t._v(" "),n("li",{staticClass:"menu__item",on:{click:t.closeMenu}},[n("a",{attrs:{href:"#contacts"}},[t._v(t._s(t.$t("menu.contacts")))])]),t._v(" "),n("lang-switcher",{staticClass:"lang__box--menu"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LangSwitcher:n(249).default})},271:function(t,e,n){"use strict";n.r(e);var r={name:"Preview",data:function(){return{}}},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"preview",staticStyle:{"background-image":"url('/nakometa/preview-bg.png')"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"preview__wrap"},[n("h1",[t._v("€355  320  000")]),t._v(" "),n("h3",{domProps:{innerHTML:t._s(t.$t("preview.text"))}}),t._v(" "),n("div",{staticClass:"btn-box btn-box--w355"},[n("button",{staticClass:"btn btn--blue"},[t._v(t._s(t.$t("preview.btns.fund")))]),t._v(" "),n("button",{staticClass:"btn btn--small btn--outline btn--white m-hide"},[t._v(t._s(t.$t("preview.btns.watchVideo")))])])])])])}),[],!1,null,"16b9a6f0",null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var r={name:"Dreamer"},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"dreamer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"dreamer__wrap"},[r("div",{staticClass:"row"},[r("h2",[t._v(t._s(t.$t("dreamer.title")))]),t._v(" "),r("button",{staticClass:"btn btn--wauto btn--blue btn--outline m-hide"},[t._v(t._s(t.$t("dreamer.btn")))])]),t._v(" "),r("ul",{staticClass:"card__list"},t._l(Array(3),(function(e,l){return r("li",{key:l,staticClass:"card__item"},[r("img",{staticClass:"card__header",attrs:{src:n(251),alt:""}}),t._v(" "),r("div",{staticClass:"card__info"},[r("p",{staticClass:"text__bold"},[t._v(t._s(t.$t("dreamer.card.title")))]),t._v(" "),r("p",[t._v(t._s(t.$t("dreamer.card.text")))]),t._v(" "),r("p",{staticClass:"text__grey"},[t._v(t._s(t.$t("dreamer.card.lastTrans")))]),t._v(" "),r("div",{staticClass:"card__status-bar"}),t._v(" "),r("div",{staticClass:"card__collected",domProps:{innerHTML:t._s(t.$t("dreamer.card.collected"))}})])])})),0),t._v(" "),r("button",{staticClass:"btn btn--wauto btn--blue btn--outline m-show"},[t._v(t._s(t.$t("dreamer.btn")))]),t._v(" "),r("div",{staticClass:"dreamer__alert",attrs:{id:"about"}},[r("h3",[t._v(t._s(t.$t("dreamer.alert")))])])])])])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",[r("source",{attrs:{srcset:n(252),media:"(max-width: 580px)"}}),t._v(" "),r("img",{staticClass:"circle",attrs:{src:n(253),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle__people"},[e("img",{attrs:{src:n(254),alt:""}})])}],l={name:"Support"},o=n(57),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"support"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"text__center"},[t._v(t._s(t.$t("support.title"))+" ")]),t._v(" "),n("div",{staticClass:"row support__circle"},[n("div",{staticClass:"circle-box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"circle__text-box"},[n("div",{staticClass:"circle__text"},[n("h3",[t._v("€ 40")]),t._v(" "),n("p",[t._v(t._s(t.$t("circle",["1"])))])]),t._v(" "),n("div",{staticClass:"circle__text"},[n("p",{staticClass:"text__bold text__manrope",domProps:{innerHTML:t._s(t.$t("circleExtra"))}})]),t._v(" "),n("div",{staticClass:"circle__text"},[n("h3",[t._v("€ 30")]),t._v(" "),n("p",[t._v(t._s(t.$t("circle",["2"])))])]),t._v(" "),n("div",{staticClass:"circle__text"},[n("h3",[t._v("€ 20")]),t._v(" "),n("p",[t._v(t._s(t.$t("circle",["3"])))])]),t._v(" "),n("div",{staticClass:"circle__text"},[n("h3",[t._v("€ 10")]),t._v(" "),n("p",[t._v(t._s(t.$t("circle",["4"])))])])])]),t._v(" "),n("div",{staticClass:"support__info"},[n("div",{staticClass:"support__need",domProps:{innerHTML:t._s(t.$t("support.need"))}}),t._v(" "),n("div",{staticClass:"support__how-work",domProps:{innerHTML:t._s(t.$t("support.text"))}})])])])])}),r,!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var r={name:"Need"},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"need m-show"},[n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.$t("need.title")))]),t._v(" "),n("ul",{staticClass:"need__list"},[n("li",{staticClass:"need__item"},[n("h3",{staticClass:"need__number"},[t._v("\n          1\n        ")]),t._v(" "),n("p",{staticClass:"text__semi"},[t._v(t._s(t.$t("need.do")))]),t._v(" "),n("p",[t._v(t._s(t.$t("need.willDo")))])]),t._v(" "),n("li",{staticClass:"need__item"},[n("h3",{staticClass:"need__number"},[t._v("\n          2\n        ")]),t._v(" "),n("p",{staticClass:"text__semi"},[t._v(t._s(t.$t("need.do")))]),t._v(" "),n("p",[t._v(t._s(t.$t("need.willDo")))])]),t._v(" "),n("li",{staticClass:"need__item"},[n("h3",{staticClass:"need__number"},[t._v("\n          3\n        ")]),t._v(" "),n("p",{staticClass:"text__semi"},[t._v(t._s(t.$t("need.do")))]),t._v(" "),n("p",[t._v(t._s(t.$t("need.willDo")))])])]),t._v(" "),n("button",{staticClass:"btn btn--blue"},[t._v(t._s(t.$t("need.btn")))])])])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var r={name:"CompletedDream",data:function(){return{swiperOption:{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},loop:!0,breakpoints:{640:{slidesPerView:3,spaceBetween:40}}},swiperOptionVideo:{slidesPerView:1.8,spaceBetween:20,breakpoints:{1200:{slidesPerView:4.2},640:{slidesPerView:2.4}}}}}},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"completed-dream"},[r("div",{staticClass:"container"},[r("div",{staticClass:"completed-dream__wrap"},[r("h2",[t._v(t._s(t.$t("completedDream.title")))]),t._v(" "),r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(Array(6),(function(e,l){return r("swiper-slide",{key:l},[r("div",{staticClass:"swiper__card"},[r("h3",{staticClass:"swiper__title"},[t._v("Great community!")]),t._v(" "),r("p",[t._v("\n              I want to express my admiration of a brilliant project and a great community. Thanks to nacometa.com I went to study in the UK, which I could have only dreamed of before. With your help I succeeded, and let me say a big thank you to everyone!\n            ")]),t._v(" "),r("div",{staticClass:"swiper__author"},[r("img",{attrs:{src:n(255),alt:"author"}}),t._v(" "),r("p",[t._v("Max from the UK")])])])])})),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),t._v(" "),r("swiper",{staticClass:"swiper swiper--video",attrs:{options:t.swiperOptionVideo}},t._l(Array(6),(function(e,l){return r("swiper-slide",{key:l},[r("div",{staticClass:"swiper__video"},[r("img",{staticClass:"swiper__preview",attrs:{src:n(256),alt:""}}),t._v(" "),r("div",{staticClass:"play-btn"},[r("svg",{attrs:{width:"26",height:"30",viewBox:"0 0 26 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M25 13.5535C26.3333 14.3233 26.3333 16.2478 25 17.0176L3.5717 29.3892C2.23837 30.159 0.571696 29.1968 0.571696 27.6572L0.571697 2.9139C0.571697 1.3743 2.23836 0.412047 3.5717 1.18185L25 13.5535Z",fill:"white"}})])]),t._v(" "),r("h3",[t._v("Jennifer from London, UK")])])])})),1)],1)])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var r={name:"Possibilities"},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"possibilities"},[r("div",{staticClass:"container"},[r("h2",[t._v(t._s(t.$t("possibilities.title")))]),t._v(" "),r("h3",{staticClass:"text__regular"},[t._v(t._s(t.$t("possibilities.subtitle")))]),t._v(" "),r("ul",{staticClass:"possibilities__list"},[r("li",{staticClass:"possibilities__item"},[r("img",{staticClass:"possibilities__icon",attrs:{src:n(257),alt:""}}),t._v(" "),r("div",{staticClass:"possibilities__info"},[r("p",{staticClass:"text__bold"},[t._v(t._s(t.$t("possibilities.card.title[0]")))]),t._v(" "),r("p",[t._v(t._s(t.$t("possibilities.card.text[0]")))])])]),t._v(" "),r("li",{staticClass:"possibilities__item"},[r("img",{staticClass:"possibilities__icon",attrs:{src:n(258),alt:""}}),t._v(" "),r("div",{staticClass:"possibilities__info"},[r("p",{staticClass:"text__bold"},[t._v(t._s(t.$t("possibilities.card.title[1]")))]),t._v(" "),r("p",[t._v(t._s(t.$t("possibilities.card.text[1]")))])])]),t._v(" "),r("li",{staticClass:"possibilities__item"},[r("img",{staticClass:"possibilities__icon",attrs:{src:n(259),alt:""}}),t._v(" "),r("div",{staticClass:"possibilities__info"},[r("p",{staticClass:"text__bold"},[t._v(t._s(t.$t("possibilities.card.title[2]")))]),t._v(" "),r("p",[t._v(t._s(t.$t("possibilities.card.text[2]")))])])]),t._v(" "),r("li",{staticClass:"possibilities__item"},[r("img",{staticClass:"possibilities__icon",attrs:{src:n(260),alt:""}}),t._v(" "),r("div",{staticClass:"possibilities__info"},[r("p",{staticClass:"text__bold"},[t._v(t._s(t.$t("possibilities.card.title[3]")))]),t._v(" "),r("p",[t._v(t._s(t.$t("possibilities.card.text[3]")))])])])])])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);n(79);var r={name:"SendDream",data:function(){return{sendDream:{name:"",goal:5e3},droped:!1}},methods:{dropHandler:function(t){var e=this;this.droped=!0;t.dataTransfer.file;var n=t.currentTarget,progress=document.querySelector("#progress-form");n.classList.remove("drop-over-handled"),n.classList.add("drop-handled");var r=setInterval((function(){e.droped?progress.value+=10:(progress.value=0,clearInterval(r))}),150);setTimeout((function(){e.droped=!1,n.classList.remove("drop-handled")}),1500)},dropLeaveHandler:function(t){t.currentTarget.classList.remove("drop-over-handled")},dropOverHandler:function(t){t.currentTarget.classList.add("drop-over-handled")}}},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"send-dream"},[r("div",{staticClass:"container"},[r("div",{staticClass:"send-dream__wrap"},[r("h2",{staticClass:"m-hide",domProps:{innerHTML:t._s(t.$t("sendDream.title"))}}),t._v(" "),r("h2",{staticClass:"m-show",domProps:{innerHTML:t._s(t.$t("sendDream.titleMobile"))}}),t._v(" "),r("div",{staticClass:"circle-box circle-box--form"},[r("img",{staticClass:"circle",attrs:{src:n(261),alt:""}}),t._v(" "),r("div",{staticClass:"circle__text-box circle__text-box--form"},[r("div",{staticClass:"circle__text circle__text--form"},[r("h3",[t._v("€ 10")]),t._v(" "),r("p",[t._v(t._s(t.$t("circle",["4"])))])]),t._v(" "),r("div",{staticClass:"circle__text circle__text--form"},[r("h3",[t._v("€ 40")]),t._v(" "),r("p",[t._v(t._s(t.$t("circle",["1"])))])]),t._v(" "),r("div",{staticClass:"circle__text circle__text--form"},[r("h3",[t._v("€ 30")]),t._v(" "),r("p",[t._v(t._s(t.$t("circle",["2"])))])]),t._v(" "),r("div",{staticClass:"circle__text circle__text--form"},[r("h3",[t._v("€ 20")]),t._v(" "),r("p",[t._v(t._s(t.$t("circle",["3"])))])])])]),t._v(" "),r("div",{staticClass:"row"},[r("form",{staticClass:"form"},[r("div",{staticClass:"form__img",on:{drop:function(e){return e.preventDefault(),t.dropHandler.apply(null,arguments)},dragleave:function(e){return e.preventDefault(),t.dropLeaveHandler.apply(null,arguments)},dragover:function(e){return e.preventDefault(),t.dropOverHandler.apply(null,arguments)}}},[r("div",{staticClass:"form__img-drop"},[r("svg",{attrs:{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M87.2217 0H12.7783C5.73223 0 0 5.73242 0 12.7785V87.2217C0 94.2676 5.73223 100 12.7783 100H87.2217C94.2678 100 100 94.2676 100 87.2215V12.7785C100 5.73242 94.2678 0 87.2217 0ZM94.1098 87.2217C94.1098 91.0199 91.0197 94.1098 87.2217 94.1098H12.7783C8.98008 94.1098 5.89004 91.0197 5.89004 87.2217V76.4781L25.2758 59.9838C25.9832 59.3818 27.0152 59.3762 27.7293 59.9691L39.8727 70.0527C41.0436 71.0248 42.7623 70.9451 43.8383 69.868L72.6916 40.9707C73.2131 40.4482 73.8211 40.3975 74.1385 40.4137C74.4549 40.4299 75.0555 40.5428 75.5209 41.116L94.11 64.0047V87.2217H94.1098ZM94.1098 54.6611L80.093 37.4021C78.7029 35.6904 76.6426 34.6439 74.4402 34.5309C72.2395 34.4195 70.0814 35.248 68.5234 36.8086L41.5687 63.8049L31.4926 55.4379C28.5709 53.0117 24.3514 53.0369 21.4588 55.498L5.89004 68.7445V12.7785C5.89004 8.98027 8.98008 5.89023 12.7783 5.89023H87.2217C91.0199 5.89023 94.1098 8.98027 94.1098 12.7785V54.6611Z",fill:"#AED2DF"}}),t._v(" "),r("path",{attrs:{d:"M31.2018 12C23.3707 12 17 18.3711 17 26.2018C17 34.0326 23.3709 40.4035 31.2018 40.4035C39.0326 40.4035 45.4035 34.0326 45.4035 26.2018C45.4035 18.3709 39.0328 12 31.2018 12ZM31.2018 34.5135C26.6186 34.5135 22.89 30.7848 22.89 26.2018C22.89 21.6186 26.6186 17.89 31.2018 17.89C35.785 17.89 39.5135 21.6187 39.5135 26.2018C39.5135 30.7848 35.785 34.5135 31.2018 34.5135Z",fill:"#AED2DF"}})]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:!t.droped,expression:"!droped"}],staticClass:"form__img-text m-hide",domProps:{innerHTML:t._s(t.$t("sendDream.img"))}}),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.droped,expression:"droped"}],staticClass:"form__img-text m-hide"},[t._v("\n                "+t._s(t.$t("sendDream.imgLoad"))+"\n                "),r("progress",{staticClass:"send-dream__status-bar",attrs:{id:"progress-form",max:"100"}})]),t._v(" "),r("label",{staticClass:"form__file m-show text__center"},[t._v(t._s(t.$t("sendDream.imgMobile"))+" "),r("input",{attrs:{type:"file"}})])])]),t._v(" "),"ru"==t.$i18n.locale?r("input",{directives:[{name:"model",rawName:"v-model",value:t.sendDream.name,expression:"sendDream.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Название мечты"},domProps:{value:t.sendDream.name},on:{input:function(e){e.target.composing||t.$set(t.sendDream,"name",e.target.value)}}}):t._e(),t._v(" "),"ru"==t.$i18n.locale?r("textarea",{staticClass:"form-control",attrs:{placeholder:"Описание"}}):t._e(),t._v(" "),"de"==t.$i18n.locale?r("input",{directives:[{name:"model",rawName:"v-model",value:t.sendDream.name,expression:"sendDream.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Traumname"},domProps:{value:t.sendDream.name},on:{input:function(e){e.target.composing||t.$set(t.sendDream,"name",e.target.value)}}}):t._e(),t._v(" "),"de"==t.$i18n.locale?r("textarea",{staticClass:"form-control",attrs:{placeholder:"Beschreibung"}}):t._e(),t._v(" "),"en"==t.$i18n.locale?r("input",{directives:[{name:"model",rawName:"v-model",value:t.sendDream.name,expression:"sendDream.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Dream name"},domProps:{value:t.sendDream.name},on:{input:function(e){e.target.composing||t.$set(t.sendDream,"name",e.target.value)}}}):t._e(),t._v(" "),"en"==t.$i18n.locale?r("textarea",{staticClass:"form-control",attrs:{placeholder:"Description"}}):t._e(),t._v(" "),r("p",{staticClass:"label-text"},[t._v(t._s(t.$t("sendDream.goal")))]),t._v(" "),r("label",{staticClass:"label-currency"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.sendDream.goal,expression:"sendDream.goal"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.sendDream.goal},on:{input:function(e){e.target.composing||t.$set(t.sendDream,"goal",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn--semi"},[t._v(t._s(t.$t("sendDream.btn")))])]),t._v(" "),r("div",{staticClass:"send-dream__info"},[t.sendDream.name?r("p",{staticClass:"text-grey"},[t._v(t._s(t.sendDream.name))]):r("p",{staticClass:"text-grey"},[t._v(t._s(t.$t("sendDream.goalTitle")))]),t._v(" "),t.sendDream.goal?r("div",{staticClass:"send-dream__status-bar"}):t._e(),t._v(" "),t.sendDream.goal?r("div",{staticClass:"send-dream__collected"},[r("span",{domProps:{innerHTML:t._s(t.$t("sendDream.goalCollected"))}}),t._v(" "+t._s(t.sendDream.goal))]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);var r={name:"Fundraising",data:function(){return{questions:{one:!1,two:!1,three:!1,four:!1,five:!1}}}},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"fundraising"},[n("div",{staticClass:"container"},[n("div",{staticClass:"fundraising__wrap"},[n("h2",[t._v(t._s(t.$t("fundraising.title")))]),t._v(" "),n("div",{staticClass:"fundraising__block"},[n("div",{staticClass:"row fundraising__quest",on:{click:function(e){t.questions.one=!t.questions.one}}},[n("h3",{staticClass:"text__regular"},[t._v(t._s(t.$t("fundraising.quests[0]")))]),t._v(" "),n("svg",{class:t.questions.one?"open":"",attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17 33.5C26.1127 33.5 33.5 26.1127 33.5 17C33.5 7.8873 26.1127 0.5 17 0.5C7.88729 0.5 0.5 7.8873 0.5 17C0.5 26.1127 7.88729 33.5 17 33.5Z",fill:"#6BCBEF","fill-opacity":"0.2",stroke:"white"}}),t._v(" "),n("path",{attrs:{d:"M11.168 14L16.5147 19.3467L21.8613 14L24 15.0693L16.5147 22.5547L9.02933 15.0693L11.168 14Z",fill:"#03BAFE"}})])]),t._v(" "),n("transition",{attrs:{name:"answer"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.questions.one,expression:"questions.one"}],staticClass:"fundraising__answer",domProps:{innerHTML:t._s(t.$t("fundraising.mainText"))}})])],1),t._v(" "),n("div",{staticClass:"fundraising__block"},[n("div",{staticClass:"row fundraising__quest",on:{click:function(e){t.questions.two=!t.questions.two}}},[n("h3",{staticClass:"text__regular"},[t._v(t._s(t.$t("fundraising.quests[1]")))]),t._v(" "),n("svg",{class:t.questions.two?"open":"",attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17 33.5C26.1127 33.5 33.5 26.1127 33.5 17C33.5 7.8873 26.1127 0.5 17 0.5C7.88729 0.5 0.5 7.8873 0.5 17C0.5 26.1127 7.88729 33.5 17 33.5Z",fill:"#6BCBEF","fill-opacity":"0.2",stroke:"white"}}),t._v(" "),n("path",{attrs:{d:"M11.168 14L16.5147 19.3467L21.8613 14L24 15.0693L16.5147 22.5547L9.02933 15.0693L11.168 14Z",fill:"#03BAFE"}})])]),t._v(" "),n("transition",{attrs:{name:"answer"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.questions.two,expression:"questions.two"}],staticClass:"fundraising__answer",domProps:{innerHTML:t._s(t.$t("fundraising.mainText"))}})])],1),t._v(" "),n("div",{staticClass:"fundraising__block"},[n("div",{staticClass:"row fundraising__quest",on:{click:function(e){t.questions.three=!t.questions.three}}},[n("h3",{staticClass:"text__regular"},[t._v(t._s(t.$t("fundraising.quests[2]")))]),t._v(" "),n("svg",{class:t.questions.three?"open":"",attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17 33.5C26.1127 33.5 33.5 26.1127 33.5 17C33.5 7.8873 26.1127 0.5 17 0.5C7.88729 0.5 0.5 7.8873 0.5 17C0.5 26.1127 7.88729 33.5 17 33.5Z",fill:"#6BCBEF","fill-opacity":"0.2",stroke:"white"}}),t._v(" "),n("path",{attrs:{d:"M11.168 14L16.5147 19.3467L21.8613 14L24 15.0693L16.5147 22.5547L9.02933 15.0693L11.168 14Z",fill:"#03BAFE"}})])]),t._v(" "),n("transition",{attrs:{name:"answer"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.questions.three,expression:"questions.three"}],staticClass:"fundraising__answer",domProps:{innerHTML:t._s(t.$t("fundraising.mainText"))}})])],1),t._v(" "),n("div",{staticClass:"fundraising__block"},[n("div",{staticClass:"row fundraising__quest",on:{click:function(e){t.questions.four=!t.questions.four}}},[n("h3",{staticClass:"text__regular"},[t._v(t._s(t.$t("fundraising.quests[3]")))]),t._v(" "),n("svg",{class:t.questions.four?"open":"",attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17 33.5C26.1127 33.5 33.5 26.1127 33.5 17C33.5 7.8873 26.1127 0.5 17 0.5C7.88729 0.5 0.5 7.8873 0.5 17C0.5 26.1127 7.88729 33.5 17 33.5Z",fill:"#6BCBEF","fill-opacity":"0.2",stroke:"white"}}),t._v(" "),n("path",{attrs:{d:"M11.168 14L16.5147 19.3467L21.8613 14L24 15.0693L16.5147 22.5547L9.02933 15.0693L11.168 14Z",fill:"#03BAFE"}})])]),t._v(" "),n("transition",{attrs:{name:"answer"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.questions.four,expression:"questions.four"}],staticClass:"fundraising__answer",domProps:{innerHTML:t._s(t.$t("fundraising.mainText"))}})])],1),t._v(" "),n("div",{staticClass:"fundraising__block"},[n("div",{staticClass:"row fundraising__quest",on:{click:function(e){t.questions.five=!t.questions.five}}},[n("h3",{staticClass:"text__regular"},[t._v(t._s(t.$t("fundraising.quests[4]")))]),t._v(" "),n("svg",{class:t.questions.five?"open":"",attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17 33.5C26.1127 33.5 33.5 26.1127 33.5 17C33.5 7.8873 26.1127 0.5 17 0.5C7.88729 0.5 0.5 7.8873 0.5 17C0.5 26.1127 7.88729 33.5 17 33.5Z",fill:"#6BCBEF","fill-opacity":"0.2",stroke:"white"}}),t._v(" "),n("path",{attrs:{d:"M11.168 14L16.5147 19.3467L21.8613 14L24 15.0693L16.5147 22.5547L9.02933 15.0693L11.168 14Z",fill:"#03BAFE"}})])]),t._v(" "),n("transition",{attrs:{name:"answer"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.questions.five,expression:"questions.five"}],staticClass:"fundraising__answer",domProps:{innerHTML:t._s(t.$t("fundraising.mainText"))}})])],1)])])])}),[],!1,null,"1a92a9c5",null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row footer__support"},[n("a",{staticClass:"link",attrs:{href:"mailto:info@nacometa.com"}},[t._v("info@nacometa.com")]),t._v(" "),n("a",{staticClass:"link",attrs:{href:"meilto:support@nacometa.com"}},[t._v("support@nacometa.com")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("ul",{staticClass:"soc__list"},[r("li",{staticClass:"soc__item"},[r("img",{attrs:{src:n(262),alt:""}})]),t._v(" "),r("li",{staticClass:"soc__item"},[r("img",{attrs:{src:n(263),alt:""}})]),t._v(" "),r("li",{staticClass:"soc__item"},[r("img",{attrs:{src:n(264),alt:""}})]),t._v(" "),r("li",{staticClass:"soc__item"},[r("img",{attrs:{src:n(265),alt:""}})]),t._v(" "),r("li",{staticClass:"soc__item"},[r("img",{attrs:{src:n(266),alt:""}})]),t._v(" "),r("li",{staticClass:"soc__item"},[r("img",{attrs:{src:n(267),alt:""}})]),t._v(" "),r("li",{staticClass:"soc__item"},[r("img",{attrs:{src:n(268),alt:""}})])])])}],l={name:"VFooter"},o=n(57),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"footer__wrap"},[n("p",{staticClass:"text__bold"},[t._v("\n        "+t._s(t.$t("footer.support"))+"\n      ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"row footer__soc"},[n("div",{staticClass:"row"},[n("a",{staticClass:"link",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.terms")))]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v(t._s(t.$t("footer.policy")))])]),t._v(" "),t._m(1)]),t._v(" "),n("span",{staticClass:"text__small"},[t._v("\n        "+t._s(t.$t("footer.laws"))+"\n      ")])])])])}),r,!1,null,null,null);e.default=component.exports},281:function(t,e,n){"use strict";n.r(e);var r={},l=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-header"),t._v(" "),n("v-menu"),t._v(" "),n("main",[n("preview"),t._v(" "),n("dreamer"),t._v(" "),n("support",{attrs:{id:"how-work"}}),t._v(" "),n("need"),t._v(" "),n("completed-dream",{attrs:{id:"completed-dream"}}),t._v(" "),n("possibilities",{attrs:{id:"possibilities"}}),t._v(" "),n("send-dream"),t._v(" "),n("fundraising",{attrs:{id:"faq"}})],1),t._v(" "),n("v-footer",{attrs:{id:"contacts"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VHeader:n(269).default,VMenu:n(270).default,Preview:n(271).default,Dreamer:n(272).default,Support:n(273).default,Need:n(274).default,CompletedDream:n(275).default,Possibilities:n(276).default,SendDream:n(277).default,Fundraising:n(278).default,VFooter:n(279).default})}}]);