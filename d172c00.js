(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{261:function(e,t,r){e.exports=r.p+"img/circle-form.43e5298.svg"},277:function(e,t,r){"use strict";r.r(t);r(79);var n={name:"SendDream",data:function(){return{sendDream:{name:"",goal:5e3},droped:!1}},methods:{dropHandler:function(e){var t=this;this.droped=!0;e.dataTransfer.file;var r=e.currentTarget,progress=document.querySelector("#progress-form");r.classList.remove("drop-over-handled"),r.classList.add("drop-handled");var n=setInterval((function(){t.droped?progress.value+=10:(progress.value=0,clearInterval(n))}),150);setTimeout((function(){t.droped=!1,r.classList.remove("drop-handled")}),1500)},dropLeaveHandler:function(e){e.currentTarget.classList.remove("drop-over-handled")},dropOverHandler:function(e){e.currentTarget.classList.add("drop-over-handled")}}},l=r(57),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"send-dream"},[n("div",{staticClass:"container"},[n("div",{staticClass:"send-dream__wrap"},[n("h2",{staticClass:"m-hide",domProps:{innerHTML:e._s(e.$t("sendDream.title"))}}),e._v(" "),n("h2",{staticClass:"m-show",domProps:{innerHTML:e._s(e.$t("sendDream.titleMobile"))}}),e._v(" "),n("div",{staticClass:"circle-box circle-box--form"},[n("img",{staticClass:"circle",attrs:{src:r(261),alt:""}}),e._v(" "),n("div",{staticClass:"circle__text-box circle__text-box--form"},[n("div",{staticClass:"circle__text circle__text--form"},[n("h3",[e._v("€ 10")]),e._v(" "),n("p",[e._v(e._s(e.$t("circle",["4"])))])]),e._v(" "),n("div",{staticClass:"circle__text circle__text--form"},[n("h3",[e._v("€ 40")]),e._v(" "),n("p",[e._v(e._s(e.$t("circle",["1"])))])]),e._v(" "),n("div",{staticClass:"circle__text circle__text--form"},[n("h3",[e._v("€ 30")]),e._v(" "),n("p",[e._v(e._s(e.$t("circle",["2"])))])]),e._v(" "),n("div",{staticClass:"circle__text circle__text--form"},[n("h3",[e._v("€ 20")]),e._v(" "),n("p",[e._v(e._s(e.$t("circle",["3"])))])])])]),e._v(" "),n("div",{staticClass:"row"},[n("form",{staticClass:"form"},[n("div",{staticClass:"form__img",on:{drop:function(t){return t.preventDefault(),e.dropHandler.apply(null,arguments)},dragleave:function(t){return t.preventDefault(),e.dropLeaveHandler.apply(null,arguments)},dragover:function(t){return t.preventDefault(),e.dropOverHandler.apply(null,arguments)}}},[n("div",{staticClass:"form__img-drop"},[n("svg",{attrs:{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M87.2217 0H12.7783C5.73223 0 0 5.73242 0 12.7785V87.2217C0 94.2676 5.73223 100 12.7783 100H87.2217C94.2678 100 100 94.2676 100 87.2215V12.7785C100 5.73242 94.2678 0 87.2217 0ZM94.1098 87.2217C94.1098 91.0199 91.0197 94.1098 87.2217 94.1098H12.7783C8.98008 94.1098 5.89004 91.0197 5.89004 87.2217V76.4781L25.2758 59.9838C25.9832 59.3818 27.0152 59.3762 27.7293 59.9691L39.8727 70.0527C41.0436 71.0248 42.7623 70.9451 43.8383 69.868L72.6916 40.9707C73.2131 40.4482 73.8211 40.3975 74.1385 40.4137C74.4549 40.4299 75.0555 40.5428 75.5209 41.116L94.11 64.0047V87.2217H94.1098ZM94.1098 54.6611L80.093 37.4021C78.7029 35.6904 76.6426 34.6439 74.4402 34.5309C72.2395 34.4195 70.0814 35.248 68.5234 36.8086L41.5687 63.8049L31.4926 55.4379C28.5709 53.0117 24.3514 53.0369 21.4588 55.498L5.89004 68.7445V12.7785C5.89004 8.98027 8.98008 5.89023 12.7783 5.89023H87.2217C91.0199 5.89023 94.1098 8.98027 94.1098 12.7785V54.6611Z",fill:"#AED2DF"}}),e._v(" "),n("path",{attrs:{d:"M31.2018 12C23.3707 12 17 18.3711 17 26.2018C17 34.0326 23.3709 40.4035 31.2018 40.4035C39.0326 40.4035 45.4035 34.0326 45.4035 26.2018C45.4035 18.3709 39.0328 12 31.2018 12ZM31.2018 34.5135C26.6186 34.5135 22.89 30.7848 22.89 26.2018C22.89 21.6186 26.6186 17.89 31.2018 17.89C35.785 17.89 39.5135 21.6187 39.5135 26.2018C39.5135 30.7848 35.785 34.5135 31.2018 34.5135Z",fill:"#AED2DF"}})]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.droped,expression:"!droped"}],staticClass:"form__img-text m-hide",domProps:{innerHTML:e._s(e.$t("sendDream.img"))}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.droped,expression:"droped"}],staticClass:"form__img-text m-hide"},[e._v("\n                "+e._s(e.$t("sendDream.imgLoad"))+"\n                "),n("progress",{staticClass:"send-dream__status-bar",attrs:{id:"progress-form",max:"100"}})]),e._v(" "),n("label",{staticClass:"form__file m-show text__center"},[e._v(e._s(e.$t("sendDream.imgMobile"))+" "),n("input",{attrs:{type:"file"}})])])]),e._v(" "),"ru"==e.$i18n.locale?n("input",{directives:[{name:"model",rawName:"v-model",value:e.sendDream.name,expression:"sendDream.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Название мечты"},domProps:{value:e.sendDream.name},on:{input:function(t){t.target.composing||e.$set(e.sendDream,"name",t.target.value)}}}):e._e(),e._v(" "),"ru"==e.$i18n.locale?n("textarea",{staticClass:"form-control",attrs:{placeholder:"Описание"}}):e._e(),e._v(" "),"de"==e.$i18n.locale?n("input",{directives:[{name:"model",rawName:"v-model",value:e.sendDream.name,expression:"sendDream.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Traumname"},domProps:{value:e.sendDream.name},on:{input:function(t){t.target.composing||e.$set(e.sendDream,"name",t.target.value)}}}):e._e(),e._v(" "),"de"==e.$i18n.locale?n("textarea",{staticClass:"form-control",attrs:{placeholder:"Beschreibung"}}):e._e(),e._v(" "),"en"==e.$i18n.locale?n("input",{directives:[{name:"model",rawName:"v-model",value:e.sendDream.name,expression:"sendDream.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Dream name"},domProps:{value:e.sendDream.name},on:{input:function(t){t.target.composing||e.$set(e.sendDream,"name",t.target.value)}}}):e._e(),e._v(" "),"en"==e.$i18n.locale?n("textarea",{staticClass:"form-control",attrs:{placeholder:"Description"}}):e._e(),e._v(" "),n("p",{staticClass:"label-text"},[e._v(e._s(e.$t("sendDream.goal")))]),e._v(" "),n("label",{staticClass:"label-currency"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sendDream.goal,expression:"sendDream.goal"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.sendDream.goal},on:{input:function(t){t.target.composing||e.$set(e.sendDream,"goal",t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn--semi"},[e._v(e._s(e.$t("sendDream.btn")))])]),e._v(" "),n("div",{staticClass:"send-dream__info"},[e.sendDream.name?n("p",{staticClass:"text-grey"},[e._v(e._s(e.sendDream.name))]):n("p",{staticClass:"text-grey"},[e._v(e._s(e.$t("sendDream.goalTitle")))]),e._v(" "),e.sendDream.goal?n("div",{staticClass:"send-dream__status-bar"}):e._e(),e._v(" "),e.sendDream.goal?n("div",{staticClass:"send-dream__collected"},[n("span",{domProps:{innerHTML:e._s(e.$t("sendDream.goalCollected"))}}),e._v(" "+e._s(e.sendDream.goal))]):e._e()])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);