(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61d313dc"],{"0b81":function(t,e,c){"use strict";c.d(e,"a",(function(){return l})),c.d(e,"b",(function(){return s})),c.d(e,"c",(function(){return d})),c.d(e,"d",(function(){return b}));var n=c("7a23");
/**
 * Vue 3 Carousel 0.1.19
 * (c) 2021
 * @license MIT
 */function o(){return new Proxy({value:0,read:0},{get(t,e){return e in t?"read"===e?t[e]:t[e]++:0},set(t,e,c){return t[e]=Math.max(c,0),!0}})}function a(t,e){let c;return function(...n){c&&clearTimeout(c),c=setTimeout(()=>{t(...n),c=null},e)}}function r(t,e){let c;return function(...n){const o=this;c||(t.apply(o,n),c=!0,setTimeout(()=>c=!1,e))}}var l=Object(n["i"])({name:"Carousel",props:{itemsToShow:{default:1,type:Number},currentSlide:{default:0,type:Number},wrapAround:{default:!1,type:Boolean},snapAlign:{default:"center",validator(t){return["start","end","center"].includes(t)}},transition:{default:300,type:Number},settings:{default(){return{}},type:Object},breakpoints:{default:null,type:Object},autoplay:{default:0,type:Number}},setup(t,{slots:e}){const c=Object(n["w"])(null),l=Object(n["w"])([]),u=Object(n["w"])([]),i=Object(n["w"])(0),s=Object(n["w"])(1),b=o(),d=Object.assign(Object.assign({},t),t.settings),j=Object(n["w"])(Object.assign({},d.breakpoints));delete d.settings,delete d.breakpoints;const O=Object(n["v"])(Object.assign({},d)),p=Object(n["w"])(O.currentSlide),m=Object(n["w"])(0),h=Object(n["w"])(0);function v(){const t=Object.keys(j.value).map(t=>Number(t)).sort((t,e)=>+e-+t);let e=Object.assign({},d);t.some(t=>{const c=window.matchMedia(`(min-width: ${t}px)`).matches;return!!c&&(e=Object.assign(Object.assign({},e),j.value[t]),!0)}),Object.keys(e).forEach(t=>O[t]=e[t])}Object(n["t"])("config",O),Object(n["t"])("slidesBuffer",u),Object(n["t"])("slidesCount",s),Object(n["t"])("currentSlide",p),Object(n["t"])("slidesCounter",b);const f=a(()=>{j.value&&v(),_()},16);function g(){setInterval(()=>{P()},O.autoplay)}function _(){if(!c.value)return;const t=c.value.getBoundingClientRect();i.value=t.width/O.itemsToShow}function w(){s.value=l.value.length,h.value=Math.ceil((s.value-1)/2),p.value=Math.min(s.value-1,p.value)}function y(){const t=[...Array(s.value).keys()];if(O.wrapAround){const e=p.value+h.value+1;for(let c=0;c<e;c++)t.push(Number(t.shift()))}u.value=t}Object(n["p"])(()=>{j.value&&v(),_(),O.autoplay>0&&g(),window.addEventListener("resize",f,{passive:!0})});let k=!1;const F={x:0,y:0},z={x:0,y:0},x=Object(n["v"])({x:0,y:0}),M=Object(n["w"])(!1),S=r(t=>{k||t.preventDefault(),z.x=k?t.touches[0].clientX:t.clientX,z.y=k?t.touches[0].clientY:t.clientY;const e=z.x-F.x,c=z.y-F.y;x.y=c,x.x=e},16);function C(t){t.preventDefault(),k="touchstart"===t.type,!k&&0!==t.button||A.value||(M.value=!0,F.x=k?t.touches[0].clientX:t.clientX,F.y=k?t.touches[0].clientY:t.clientY,document.addEventListener(k?"touchmove":"mousemove",S),document.addEventListener(k?"touchend":"mouseup",$))}function $(){M.value=!1;const t=.4*Math.sign(x.x),e=Math.round(x.x/i.value+t);let c=p.value-e;O.wrapAround||(c=Math.max(Math.min(c,s.value-1),0)),L(c),x.x=0,x.y=0,document.removeEventListener(k?"touchmove":"mousemove",S),document.removeEventListener(k?"touchend":"mouseup",$)}const A=Object(n["w"])(!1);function L(t){if(p.value===t||A.value)return;const e=s.value-1;return t>e?L(t-s.value):t<0?L(t+s.value):(A.value=!0,m.value=p.value,p.value=t,void setTimeout(()=>{O.wrapAround&&y(),A.value=!1},O.transition))}function P(){const t=p.value>=s.value-1;t?O.wrapAround&&L(0):L(p.value+1)}function T(){const t=p.value<=0;t?O.wrapAround&&L(s.value-1):L(p.value-1)}const N={slideTo:L,next:P,prev:T};Object(n["t"])("nav",N);const q=Object(n["b"])(()=>{let t=u.value.indexOf(p.value);if("center"===O.snapAlign&&(t-=(O.itemsToShow-1)/2),"end"===O.snapAlign&&(t-=O.itemsToShow-1),!O.wrapAround){const e=s.value-O.itemsToShow,c=0;t=Math.max(Math.min(t,e),c)}return t}),B=Object(n["b"])(()=>{const t=x.x-q.value*i.value;return{transform:`translateX(${t}px)`,transition:(A.value?O.transition:0)+"ms"}}),D=Object(n["v"])({slideWidth:i,slidesCount:s,currentSlide:p}),E=e.default||e.slides,G=e.addons;return Object(n["E"])(()=>{var t;const e=(null===E||void 0===E?void 0:E(D))||[];l.value=(null===(t=e[0])||void 0===t?void 0:t.children)||[];const c=s.value!==l.value.length;c&&(w(),y()),b.read&&(b.value=l.value.length-1)}),y(),()=>{const t=(null===E||void 0===E?void 0:E(D))||[],e=(null===G||void 0===G?void 0:G(D))||[],o=Object(n["k"])("ol",{class:"carousel__track",style:B.value,onMousedown:C,onTouchstart:C},t),a=Object(n["k"])("div",{class:"carousel__viewport"},o);return Object(n["k"])("section",{ref:c,class:"carousel","aria-label":"Gallery"},[a,e])}}});const u={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},i=t=>{const e=t.name;if(!e||"string"!==typeof e)return;const c=u[e],o=Object(n["k"])("path",{d:c});t.title;const a=Object(n["k"])("title",null,e);return Object(n["k"])("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img"},[a,o])};i.props={name:String,title:String};const s=(t,{slots:e,attrs:c})=>{const{next:o,prev:a}=e,r=Object(n["l"])("nav",{}),l=Object(n["k"])("button",{class:["carousel__prev",null===c||void 0===c?void 0:c.class],onClick:r.prev},(null===a||void 0===a?void 0:a())||Object(n["k"])(i,{name:"arrowLeft"})),u=Object(n["k"])("button",{class:["carousel__next",null===c||void 0===c?void 0:c.class],onClick:r.next},(null===o||void 0===o?void 0:o())||Object(n["k"])(i,{name:"arrowRight"}));return[l,u]};var b=Object(n["i"])({name:"CarouselSlide",props:{order:{type:Number,default:1}},setup(t,{slots:e}){const c=Object(n["l"])("config",Object(n["v"])({})),o=Object(n["l"])("slidesBuffer",Object(n["w"])([])),a=Object(n["l"])("slidesCounter"),r=a.value,l=Object(n["w"])(r);function u(){l.value=o.value.indexOf(r)}c.wrapAround&&(u(),Object(n["E"])(u));const i=Object(n["b"])(()=>{const t=c.itemsToShow,e=1/t*100+"%";return{width:e,order:l.value.toString()}});return()=>{var t;return Object(n["k"])("li",{style:i.value,class:"carousel__slide"},null===(t=e.default)||void 0===t?void 0:t.call(e))}}});const d=()=>{const t=Object(n["l"])("slidesCount",Object(n["w"])(1)),e=Object(n["l"])("currentSlide",Object(n["w"])(1)),c=Object(n["l"])("nav",{});function o(t){c.slideTo(t)}const a=[];for(let r=0;r<t.value;r++){const t=Object(n["k"])("button",{class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":e.value===r},onClick:()=>o(r)}),c=Object(n["k"])("li",{class:"carousel__pagination-item",key:r},t);a.push(c)}return Object(n["k"])("ol",{class:"carousel__pagination"},a)}},"156c":function(t,e,c){"use strict";var n=c("7a23"),o=c("0862"),a=c.n(o),r={class:"modal-full"},l={class:"modal-button"},u={class:"modal-full-content"},i={class:"modal-product__block"},s={class:"modal-product__left"},b={class:"modal-product__right"},d={class:"modal-product__name"},j=Object(n["g"])("111"),O={class:"modal-product__description"},p=Object(n["h"])("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, odit iste facilis aliquid corporis quibusdam impedit distinctio veritatis maxime obcaecati architecto libero, temporibus eius soluta reiciendis magnam optio aut aperiam?",-1),m=Object(n["h"])("p",null,"Possimus, ullam voluptatem? Temporibus, sit provident! Delectus, placeat itaque? Odio asperiores et, in vel vitae cupiditate exercitationem eveniet ratione inventore non accusamus nobis minus dignissimos quos id fuga? Esse, illum.",-1),h={class:"modal-product__price"},v=Object(n["h"])("span",null,"Цена: ",-1),f=Object(n["g"])("от "),g=Object(n["g"])("100 000"),_=Object(n["g"])(" руб."),w={class:"modal-product__button"},y=Object(n["h"])("span",{class:"button__text"},"Рассчитать дизайн-проект",-1),k=Object(n["h"])("img",{src:a.a,class:"button__icon"},null,-1),F=Object(n["g"])("Рассчет кухни "),z=Object(n["h"])("br",null,null,-1),x=Object(n["g"])(" по эскизам");function M(t,e,c,o,a,M){var S=Object(n["z"])("modal-button");return t.show?(Object(n["r"])(),Object(n["d"])("div",{key:0,class:"modal-pr",onClick:e[3]||(e[3]=Object(n["G"])((function(){return M.closeModal&&M.closeModal.apply(M,arguments)}),["self"]))},[Object(n["h"])("div",r,[Object(n["h"])("div",l,[Object(n["h"])("div",{class:"modal-close",onClick:e[1]||(e[1]=function(){return M.closeModal&&M.closeModal.apply(M,arguments)})},"✖")]),Object(n["h"])("div",u,[Object(n["h"])("div",i,[Object(n["h"])("div",s,[Object(n["y"])(t.$slots,"image")]),Object(n["h"])("div",b,[Object(n["h"])("h3",d,[Object(n["y"])(t.$slots,"name",{},(function(){return[j]}))]),Object(n["h"])("div",O,[Object(n["y"])(t.$slots,"description",{},(function(){return[p,m]}))]),Object(n["h"])("div",h,[v,Object(n["h"])("span",null,[f,Object(n["y"])(t.$slots,"price",{},(function(){return[g]})),_])]),Object(n["h"])("div",w,[Object(n["h"])("a",{onClick:e[2]||(e[2]=function(){return M.showModal&&M.showModal.apply(M,arguments)}),onclick:"ym(41430234,'reachGoal','design-project_click'); return true;",href:"#eskiz-popup",class:"button hero_button show-modal-button"},[y,k]),Object(n["h"])(S,{ref:"modalbutton"},{title:Object(n["F"])((function(){return[F,z,x]})),_:1},512)])])])])])])):Object(n["e"])("",!0)}var S=c("ab8c"),C={name:"ModalProduct",components:{ModalButton:S["a"]},data:function(){return{show:!1}},methods:{closeModal:function(){this.show=!1},showModal:function(){this.$refs.modalbutton.show=!0}}};c("ed74");C.render=M;e["a"]=C},4001:function(t,e,c){},"5b8b":function(t,e,c){},7762:function(t,e,c){},"7d30":function(t,e,c){"use strict";c("5b8b")},8515:function(t,e,c){},"8a05":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o=c("0862"),a=c.n(o),r={class:"main"},l={class:"hero-full"},u={class:"wrap hero-full__wrap"},i={class:"hero-full__col"},s=Object(n["h"])("div",{class:"hero-full__col_cover",style:{"background-image":"url('images/hero/spalnya-aleksandriya__hero.jpg')"}},[Object(n["h"])("div",{class:"cover"})],-1),b={class:"hero-full__info"},d=Object(n["h"])("h1",null,[Object(n["g"])("Спальни по индивидуальному проекту "),Object(n["h"])("span",null,"напрямую от фабрики производителя")],-1),j=Object(n["h"])("p",null,"Покрытие итальянской эмалью Sayerlack с соблюдением технологического процесса, что обеспечивает максимальную износостойкость лакокрасочного покрытия, и как следствие практичность и долговечность изделий.",-1),O={class:"hero__button"},p=Object(n["h"])("span",{class:"button__text"},"Рассчитать дизайн-проект",-1),m=Object(n["h"])("img",{src:a.a,class:"button__icon"},null,-1),h=Object(n["g"])("Рассчитаем спальню "),v=Object(n["h"])("br",null,null,-1),f=Object(n["g"])(" по эскизам"),g=Object(n["h"])("div",{class:"hero-full__col"},[Object(n["h"])("div",{class:"hero-full__cover",style:{"background-image":"url('images/hero/spalnya-aleksandriya__hero.jpg')"}})],-1),_=Object(n["g"])("Нравится модель спальни, но хочется иначе?"),w=Object(n["g"])("Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство в вашей спальне правильно!");function y(t,e,c,o,a,y){var k=Object(n["z"])("Header"),F=Object(n["z"])("modal-button"),z=Object(n["z"])("Benefits"),x=Object(n["z"])("ProductS"),M=Object(n["z"])("Calculate"),S=Object(n["z"])("Designer"),C=Object(n["z"])("FreeService"),$=Object(n["z"])("Warranty"),A=Object(n["z"])("Director"),L=Object(n["z"])("Footer");return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["h"])(k),Object(n["h"])("main",r,[Object(n["h"])("section",l,[Object(n["h"])("div",u,[Object(n["h"])("div",i,[s,Object(n["h"])("div",b,[d,j,Object(n["h"])("div",O,[Object(n["h"])("a",{onClick:e[1]||(e[1]=function(){return y.showModal&&y.showModal.apply(y,arguments)}),onclick:"ym(41430234,'reachGoal','design-project_click'); return true;",href:"#eskiz-popup",class:"button hero_button show-modal-button"},[p,m])]),Object(n["h"])(F,{ref:"modalbutton"},{title:Object(n["F"])((function(){return[h,v,f]})),_:1},512)])]),g])]),Object(n["h"])(z),Object(n["h"])(x),Object(n["h"])(M),Object(n["h"])(S,null,{title:Object(n["F"])((function(){return[_]})),text:Object(n["F"])((function(){return[w]})),_:1}),Object(n["h"])(C),Object(n["h"])($),Object(n["h"])(A),Object(n["h"])(L)])])}var k=c("0418"),F=c("3fd7"),z=c("1a34"),x={class:"product"},M={class:"product-name"},S=Object(n["g"])("Коллекция спален"),C={class:"wrap"},$={class:"product-items"},A={class:"product-item"},L=Object(n["g"])("Спальня Верона"),P=Object(n["g"])("86 300"),T=Object(n["g"])("Спальня Верона"),N=Object(n["h"])("img",{src:"images/product/spalni/verona/verona-1.jpg",alt:"Спальня Верона",class:"modal-product__img"},null,-1),q=Object(n["g"])("86 300"),B=Object(n["h"])("p",null,"Как наполнить дом атмосферой легкости и свободы, ощутить ласковое итальянской солнце, почувствовать дуновение морского бриза?",-1),D=Object(n["h"])("p",null,"С коллекцией «Верона» мечты становятся реальностью!",-1),E=Object(n["h"])("p",null,"Созданная специально для ценителей классики, мебель имеет изысканное цветовое решение и широкий выбор модулей. Это поможет оформить вашу спальню в лучших традициях итальянского стиля.",-1),G={class:"product-item"},I=Object(n["g"])("Спальня Александрия"),X=Object(n["g"])("120 665"),Y=Object(n["g"])("Спальня Александрия"),H=Object(n["h"])("img",{src:"images/product/spalni/aleksandriya/aleksandriya-1.jpg",alt:"Спальня Александрия",class:"modal-product__img"},null,-1),R=Object(n["g"])("120 665"),V=Object(n["h"])("p",null,"Мебель из коллекции «Александрия» сочетает в себе простоту и строгость античной классики и призвана подчеркнуть Ваш статус и чувство стиля.",-1),W=Object(n["h"])("p",null,"Бескомпромиссный подход к выбору материалов и фурнитуры сделал линейку настоящим флагманом среди всей нашей мебели.",-1),J={class:"product-item"},U=Object(n["g"])("Спальня Палермо"),K=Object(n["g"])("63 280"),Q=Object(n["g"])("Спальня Палермо"),Z=Object(n["h"])("img",{src:"images/product/spalni/palermo/palermo-1.jpg",alt:"Спальня Палермо",class:"modal-product__img"},null,-1),tt=Object(n["g"])("63 280"),et=Object(n["h"])("p",null,"Как создать в доме атмосфету созвучную нашим чувствам, передать то, что трудно выразить словами? Обустроить уголок, где два сердца бьются в унисон? Может новая спальня «Палермо» вдохновит вас на самые нежные чувства.",-1),ct=Object(n["h"])("p",null,"Классический дизайн которой, в сочетании с проверенной надежностью, подарит вам ощущение простора и безмятежности.",-1),nt={class:"product-item"},ot=Object(n["g"])("Спальня Стелла"),at=Object(n["g"])("75 200"),rt=Object(n["g"])("Спальня Стелла"),lt=Object(n["h"])("img",{src:"images/product/spalni/stella/stella-1.jpg",alt:"Спальня Стелла",class:"modal-product__img"},null,-1),ut=Object(n["g"])("75 200"),it=Object(n["h"])("p",null,'Если вам по душе минималистичное оформление, спальни коллекции "Стелла" – решение специально для вас.',-1),st=Object(n["h"])("p",null,"Благородная палитра цветов под дерево, простота форм, отсутствие украшений – то, что сделает ваше жилье стильным и создаст ощущение простора и легкости.",-1),bt=Object(n["h"])("p",null,"Мебель гармонично «встроится» в любой дизайн, в особенности хорошо сочетаясь с элементами экостиля и хай-тека.",-1);function dt(t,e,c,o,a,r){var l=Object(n["z"])("Verona"),u=Object(n["z"])("Info"),i=Object(n["z"])("modal-product"),s=Object(n["z"])("Aleksandriya"),b=Object(n["z"])("Palermo"),d=Object(n["z"])("Stella");return Object(n["r"])(),Object(n["d"])("section",x,[Object(n["h"])("h2",M,[Object(n["y"])(t.$slots,"title",{},(function(){return[S]}))]),Object(n["h"])("div",C,[Object(n["h"])("ul",$,[Object(n["h"])("li",A,[Object(n["h"])(l),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[L]})),price:Object(n["F"])((function(){return[P]})),_:1}),Object(n["h"])("a",{onClick:e[1]||(e[1]=function(){return r.veronapopup&&r.veronapopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(i,{ref:"modalproduct1"},{name:Object(n["F"])((function(){return[T]})),image:Object(n["F"])((function(){return[N]})),price:Object(n["F"])((function(){return[q]})),description:Object(n["F"])((function(){return[B,D,E]})),_:1},512)]),Object(n["h"])("li",G,[Object(n["h"])(s),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[I]})),price:Object(n["F"])((function(){return[X]})),_:1}),Object(n["h"])("a",{onClick:e[2]||(e[2]=function(){return r.aleksandriyapopup&&r.aleksandriyapopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(i,{ref:"modalproduct2"},{name:Object(n["F"])((function(){return[Y]})),image:Object(n["F"])((function(){return[H]})),price:Object(n["F"])((function(){return[R]})),description:Object(n["F"])((function(){return[V,W]})),_:1},512)]),Object(n["h"])("li",J,[Object(n["h"])(b),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[U]})),price:Object(n["F"])((function(){return[K]})),_:1}),Object(n["h"])("a",{onClick:e[3]||(e[3]=function(){return r.palermopopup&&r.palermopopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(i,{ref:"modalproduct3"},{name:Object(n["F"])((function(){return[Q]})),image:Object(n["F"])((function(){return[Z]})),price:Object(n["F"])((function(){return[tt]})),description:Object(n["F"])((function(){return[et,ct]})),_:1},512)]),Object(n["h"])("li",nt,[Object(n["h"])(d),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[ot]})),price:Object(n["F"])((function(){return[at]})),_:1}),Object(n["h"])("a",{onClick:e[4]||(e[4]=function(){return r.stellapopup&&r.stellapopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(i,{ref:"modalproduct4"},{name:Object(n["F"])((function(){return[rt]})),image:Object(n["F"])((function(){return[lt]})),price:Object(n["F"])((function(){return[ut]})),description:Object(n["F"])((function(){return[it,st,bt]})),_:1},512)])])])])}var jt={class:"carousel__item"};function Ot(t,e,c,o,a,r){var l=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),i=Object(n["z"])("pagination"),s=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(s,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(i)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(a.slides,(function(t){return Object(n["r"])(),Object(n["d"])(l,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",jt,[Object(n["h"])("img",{src:"images/product/spalni/verona/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}c("4001");var pt=c("0b81"),mt={name:"Verona",components:{Carousel:pt["a"],Slide:pt["d"],Pagination:pt["c"],Navigation:pt["b"]},data:function(){return{slides:[{img:"verona-1.jpg"},{img:"verona-2.jpg"}]}}};mt.render=Ot;var ht=mt,vt={class:"carousel__item"};function ft(t,e,c,o,a,r){var l=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),i=Object(n["z"])("pagination"),s=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(s,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(i)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(a.slides,(function(t){return Object(n["r"])(),Object(n["d"])(l,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",vt,[Object(n["h"])("img",{src:"images/product/spalni/aleksandriya/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}var gt={name:"Aleksandriya",components:{Carousel:pt["a"],Slide:pt["d"],Pagination:pt["c"],Navigation:pt["b"]},data:function(){return{slides:[{img:"aleksandriya-1.jpg"},{img:"aleksandriya-2.jpg"}]}}};gt.render=ft;var _t=gt,wt={class:"carousel__item"};function yt(t,e,c,o,a,r){var l=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),i=Object(n["z"])("pagination"),s=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(s,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(i)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(a.slides,(function(t){return Object(n["r"])(),Object(n["d"])(l,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",wt,[Object(n["h"])("img",{src:"images/product/spalni/palermo/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}var kt={name:"Palermo",components:{Carousel:pt["a"],Slide:pt["d"],Pagination:pt["c"],Navigation:pt["b"]},data:function(){return{slides:[{img:"palermo-1.jpg"},{img:"palermo-2.jpg"},{img:"palermo-3.jpg"}]}}};kt.render=yt;var Ft=kt,zt={class:"carousel__item"};function xt(t,e,c,o,a,r){var l=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),i=Object(n["z"])("pagination"),s=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(s,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(i)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(a.slides,(function(t){return Object(n["r"])(),Object(n["d"])(l,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",zt,[Object(n["h"])("img",{src:"images/product/spalni/stella/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}var Mt={name:"Stella",components:{Carousel:pt["a"],Slide:pt["d"],Pagination:pt["c"],Navigation:pt["b"]},data:function(){return{slides:[{img:"stella-1.jpg"},{img:"stella-2.jpg"}]}}};Mt.render=xt;var St=Mt,Ct=c("d2b7"),$t=c("156c"),At={name:"ProductS",components:{Verona:ht,Aleksandriya:_t,Palermo:Ft,Stella:St,Info:Ct["a"],ModalProduct:$t["a"]},methods:{veronapopup:function(){this.$refs.modalproduct1.show=!0},aleksandriyapopup:function(){this.$refs.modalproduct2.show=!0},palermopopup:function(){this.$refs.modalproduct3.show=!0},stellapopup:function(){this.$refs.modalproduct4.show=!0}}};c("7d30");At.render=dt;var Lt=At,Pt=c("b18d"),Tt=c("b261"),Nt=c("0f2d"),qt=c("fd2d"),Bt=c("ab8c"),Dt={components:{Header:k["a"],Benefits:F["a"],Calculate:z["a"],Designer:Pt["a"],Warranty:Tt["a"],Director:Nt["a"],Footer:qt["a"],ModalButton:Bt["a"],ProductS:Lt},methods:{showModal:function(){this.$refs.modalbutton.show=!0}}};Dt.render=y;e["default"]=Dt},b18d:function(t,e,c){"use strict";var n=c("7a23"),o=c("e495"),a=c.n(o),r=c("ecd0"),l=c.n(r),u=c("0862"),i=c.n(u),s=Object(n["H"])("data-v-59d71a15");Object(n["u"])("data-v-59d71a15");var b={class:"designer"},d={class:"wrap designer__wrap"},j={class:"designer__header"},O=Object(n["h"])("div",{class:"designer__photo"},[Object(n["h"])("img",{src:a.a,alt:"Дизайнер мебельной фабрики Рось"})],-1),p={class:"designer__title"},m=Object(n["g"])("Нравится модель, но хочется немного иначе?"),h=Object(n["h"])("p",{class:"designer__description"},[Object(n["g"])("К вашим услугам "),Object(n["h"])("span",null,"профессиональный дизайнер мебели со стажем 8 лет"),Object(n["g"])(" и более 800 реализованными проектами!")],-1),v={class:"designer__bottom"},f={class:"quote designer__quote"},g=Object(n["h"])("img",{src:l.a,alt:"",class:"quote__icon"},null,-1),_={class:"quote__text"},w=Object(n["g"])("Порой хочется всего и сразу. И чтобы к цвету любимого платья подходило, уж я то знаю)) Но это довольно сложно, особенно в небольшом помещении. Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство правильно!"),y=Object(n["h"])("p",{class:"quote__name"},"Татьяна, служба заботы о клиентах",-1),k=Object(n["h"])("div",{class:"designer__button"},[Object(n["h"])("a",{onclick:"ym(41430234,'reachGoal','click--designer-button'); return true;",href:"#designer-popup",class:"button button__designer open-popup-link"},[Object(n["h"])("span",{class:"button__text"},"Помощь дизайнера"),Object(n["h"])("img",{src:i.a,class:"button__icon"})])],-1);Object(n["s"])();var F=s((function(t,e,c,o,a,r){return Object(n["r"])(),Object(n["d"])("section",b,[Object(n["h"])("div",d,[Object(n["h"])("div",j,[O,Object(n["h"])("div",null,[Object(n["h"])("h3",p,[Object(n["y"])(t.$slots,"title",{},(function(){return[m]}),{},!0)]),h])]),Object(n["h"])("div",v,[Object(n["h"])("div",f,[g,Object(n["h"])("p",_,[Object(n["y"])(t.$slots,"text",{},(function(){return[w]}),{},!0)]),y]),k])])])})),z={name:"Designer"};c("b485");z.render=F,z.__scopeId="data-v-59d71a15";e["a"]=z},b485:function(t,e,c){"use strict";c("7762")},d2b7:function(t,e,c){"use strict";var n=c("7a23"),o={class:"product-info"},a={class:"product-name"},r=Object(n["g"])("Итальянка"),l={class:"product-price"},u=Object(n["g"])("от "),i=Object(n["g"])("120 000"),s=Object(n["g"])(" руб.");function b(t,e,c,b,d,j){return Object(n["r"])(),Object(n["d"])("div",o,[Object(n["h"])("h3",a,[Object(n["y"])(t.$slots,"name",{},(function(){return[r]}))]),Object(n["h"])("span",l,[u,Object(n["y"])(t.$slots,"price",{},(function(){return[i]})),s])])}var d={name:"Info",components:{}};d.render=b;e["a"]=d},e495:function(t,e,c){t.exports=c.p+"img/designer__photo.adb96199.png"},ecd0:function(t,e,c){t.exports=c.p+"img/designer-quote__icon.04df6c12.svg"},ed74:function(t,e,c){"use strict";c("8515")}}]);
//# sourceMappingURL=chunk-61d313dc.cdb0ceba.js.map