(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b81":function(t,e,c){"use strict";c.d(e,"a",(function(){return a})),c.d(e,"b",(function(){return l})),c.d(e,"c",(function(){return d})),c.d(e,"d",(function(){return b}));var n=c("7a23");
/**
 * Vue 3 Carousel 0.1.19
 * (c) 2021
 * @license MIT
 */function o(){return new Proxy({value:0,read:0},{get(t,e){return e in t?"read"===e?t[e]:t[e]++:0},set(t,e,c){return t[e]=Math.max(c,0),!0}})}function i(t,e){let c;return function(...n){c&&clearTimeout(c),c=setTimeout(()=>{t(...n),c=null},e)}}function r(t,e){let c;return function(...n){const o=this;c||(t.apply(o,n),c=!0,setTimeout(()=>c=!1,e))}}var a=Object(n["i"])({name:"Carousel",props:{itemsToShow:{default:1,type:Number},currentSlide:{default:0,type:Number},wrapAround:{default:!1,type:Boolean},snapAlign:{default:"center",validator(t){return["start","end","center"].includes(t)}},transition:{default:300,type:Number},settings:{default(){return{}},type:Object},breakpoints:{default:null,type:Object},autoplay:{default:0,type:Number}},setup(t,{slots:e}){const c=Object(n["w"])(null),a=Object(n["w"])([]),u=Object(n["w"])([]),s=Object(n["w"])(0),l=Object(n["w"])(1),b=o(),d=Object.assign(Object.assign({},t),t.settings),j=Object(n["w"])(Object.assign({},d.breakpoints));delete d.settings,delete d.breakpoints;const O=Object(n["v"])(Object.assign({},d)),p=Object(n["w"])(O.currentSlide),m=Object(n["w"])(0),g=Object(n["w"])(0);function h(){const t=Object.keys(j.value).map(t=>Number(t)).sort((t,e)=>+e-+t);let e=Object.assign({},d);t.some(t=>{const c=window.matchMedia(`(min-width: ${t}px)`).matches;return!!c&&(e=Object.assign(Object.assign({},e),j.value[t]),!0)}),Object.keys(e).forEach(t=>O[t]=e[t])}Object(n["t"])("config",O),Object(n["t"])("slidesBuffer",u),Object(n["t"])("slidesCount",l),Object(n["t"])("currentSlide",p),Object(n["t"])("slidesCounter",b);const v=i(()=>{j.value&&h(),_()},16);function f(){setInterval(()=>{T()},O.autoplay)}function _(){if(!c.value)return;const t=c.value.getBoundingClientRect();s.value=t.width/O.itemsToShow}function y(){l.value=a.value.length,g.value=Math.ceil((l.value-1)/2),p.value=Math.min(l.value-1,p.value)}function w(){const t=[...Array(l.value).keys()];if(O.wrapAround){const e=p.value+g.value+1;for(let c=0;c<e;c++)t.push(Number(t.shift()))}u.value=t}Object(n["p"])(()=>{j.value&&h(),_(),O.autoplay>0&&f(),window.addEventListener("resize",v,{passive:!0})});let F=!1;const k={x:0,y:0},z={x:0,y:0},x=Object(n["v"])({x:0,y:0}),C=Object(n["w"])(!1),S=r(t=>{F||t.preventDefault(),z.x=F?t.touches[0].clientX:t.clientX,z.y=F?t.touches[0].clientY:t.clientY;const e=z.x-k.x,c=z.y-k.y;x.y=c,x.x=e},16);function M(t){t.preventDefault(),F="touchstart"===t.type,!F&&0!==t.button||$.value||(C.value=!0,k.x=F?t.touches[0].clientX:t.clientX,k.y=F?t.touches[0].clientY:t.clientY,document.addEventListener(F?"touchmove":"mousemove",S),document.addEventListener(F?"touchend":"mouseup",L))}function L(){C.value=!1;const t=.4*Math.sign(x.x),e=Math.round(x.x/s.value+t);let c=p.value-e;O.wrapAround||(c=Math.max(Math.min(c,l.value-1),0)),A(c),x.x=0,x.y=0,document.removeEventListener(F?"touchmove":"mousemove",S),document.removeEventListener(F?"touchend":"mouseup",L)}const $=Object(n["w"])(!1);function A(t){if(p.value===t||$.value)return;const e=l.value-1;return t>e?A(t-l.value):t<0?A(t+l.value):($.value=!0,m.value=p.value,p.value=t,void setTimeout(()=>{O.wrapAround&&w(),$.value=!1},O.transition))}function T(){const t=p.value>=l.value-1;t?O.wrapAround&&A(0):A(p.value+1)}function N(){const t=p.value<=0;t?O.wrapAround&&A(l.value-1):A(p.value-1)}const P={slideTo:A,next:T,prev:N};Object(n["t"])("nav",P);const B=Object(n["b"])(()=>{let t=u.value.indexOf(p.value);if("center"===O.snapAlign&&(t-=(O.itemsToShow-1)/2),"end"===O.snapAlign&&(t-=O.itemsToShow-1),!O.wrapAround){const e=l.value-O.itemsToShow,c=0;t=Math.max(Math.min(t,e),c)}return t}),q=Object(n["b"])(()=>{const t=x.x-B.value*s.value;return{transform:`translateX(${t}px)`,transition:($.value?O.transition:0)+"ms"}}),D=Object(n["v"])({slideWidth:s,slidesCount:l,currentSlide:p}),E=e.default||e.slides,V=e.addons;return Object(n["E"])(()=>{var t;const e=(null===E||void 0===E?void 0:E(D))||[];a.value=(null===(t=e[0])||void 0===t?void 0:t.children)||[];const c=l.value!==a.value.length;c&&(y(),w()),b.read&&(b.value=a.value.length-1)}),w(),()=>{const t=(null===E||void 0===E?void 0:E(D))||[],e=(null===V||void 0===V?void 0:V(D))||[],o=Object(n["k"])("ol",{class:"carousel__track",style:q.value,onMousedown:M,onTouchstart:M},t),i=Object(n["k"])("div",{class:"carousel__viewport"},o);return Object(n["k"])("section",{ref:c,class:"carousel","aria-label":"Gallery"},[i,e])}}});const u={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},s=t=>{const e=t.name;if(!e||"string"!==typeof e)return;const c=u[e],o=Object(n["k"])("path",{d:c});t.title;const i=Object(n["k"])("title",null,e);return Object(n["k"])("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img"},[i,o])};s.props={name:String,title:String};const l=(t,{slots:e,attrs:c})=>{const{next:o,prev:i}=e,r=Object(n["l"])("nav",{}),a=Object(n["k"])("button",{class:["carousel__prev",null===c||void 0===c?void 0:c.class],onClick:r.prev},(null===i||void 0===i?void 0:i())||Object(n["k"])(s,{name:"arrowLeft"})),u=Object(n["k"])("button",{class:["carousel__next",null===c||void 0===c?void 0:c.class],onClick:r.next},(null===o||void 0===o?void 0:o())||Object(n["k"])(s,{name:"arrowRight"}));return[a,u]};var b=Object(n["i"])({name:"CarouselSlide",props:{order:{type:Number,default:1}},setup(t,{slots:e}){const c=Object(n["l"])("config",Object(n["v"])({})),o=Object(n["l"])("slidesBuffer",Object(n["w"])([])),i=Object(n["l"])("slidesCounter"),r=i.value,a=Object(n["w"])(r);function u(){a.value=o.value.indexOf(r)}c.wrapAround&&(u(),Object(n["E"])(u));const s=Object(n["b"])(()=>{const t=c.itemsToShow,e=1/t*100+"%";return{width:e,order:a.value.toString()}});return()=>{var t;return Object(n["k"])("li",{style:s.value,class:"carousel__slide"},null===(t=e.default)||void 0===t?void 0:t.call(e))}}});const d=()=>{const t=Object(n["l"])("slidesCount",Object(n["w"])(1)),e=Object(n["l"])("currentSlide",Object(n["w"])(1)),c=Object(n["l"])("nav",{});function o(t){c.slideTo(t)}const i=[];for(let r=0;r<t.value;r++){const t=Object(n["k"])("button",{class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":e.value===r},onClick:()=>o(r)}),c=Object(n["k"])("li",{class:"carousel__pagination-item",key:r},t);i.push(c)}return Object(n["k"])("ol",{class:"carousel__pagination"},i)}},"156c":function(t,e,c){"use strict";var n=c("7a23"),o={class:"modal-full"},i={class:"modal-button"},r={class:"modal-full-content"},a={class:"modal-product__block"},u={class:"modal-product__left"},s={class:"modal-product__right"},l={class:"modal-product__name"},b=Object(n["g"])("111"),d={class:"modal-product__description"},j=Object(n["h"])("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, odit iste facilis aliquid corporis quibusdam impedit distinctio veritatis maxime obcaecati architecto libero, temporibus eius soluta reiciendis magnam optio aut aperiam?",-1),O=Object(n["h"])("p",null,"Possimus, ullam voluptatem? Temporibus, sit provident! Delectus, placeat itaque? Odio asperiores et, in vel vitae cupiditate exercitationem eveniet ratione inventore non accusamus nobis minus dignissimos quos id fuga? Esse, illum.",-1),p={class:"modal-product__price"},m=Object(n["h"])("span",null,"Цена: ",-1),g=Object(n["g"])("от "),h=Object(n["g"])("100 000"),v=Object(n["g"])(" руб."),f={class:"modal-product__button"},_=Object(n["g"])("Рассчитать дизайн-проект");function y(t,e,c,y,w,F){var k=Object(n["z"])("Button");return t.show?(Object(n["r"])(),Object(n["d"])("div",{key:0,class:"modal-pr",onClick:e[2]||(e[2]=Object(n["G"])((function(){return F.closeModal&&F.closeModal.apply(F,arguments)}),["self"]))},[Object(n["h"])("div",o,[Object(n["h"])("div",i,[Object(n["h"])("div",{class:"modal-close",onClick:e[1]||(e[1]=function(){return F.closeModal&&F.closeModal.apply(F,arguments)})},"✖")]),Object(n["h"])("div",r,[Object(n["h"])("div",a,[Object(n["h"])("div",u,[Object(n["y"])(t.$slots,"image")]),Object(n["h"])("div",s,[Object(n["h"])("h3",l,[Object(n["y"])(t.$slots,"name",{},(function(){return[b]}))]),Object(n["h"])("div",d,[Object(n["y"])(t.$slots,"description",{},(function(){return[j,O]}))]),Object(n["h"])("div",p,[m,Object(n["h"])("span",null,[g,Object(n["y"])(t.$slots,"price",{},(function(){return[h]})),v])]),Object(n["h"])("div",f,[Object(n["h"])(k,null,{"button-name":Object(n["F"])((function(){return[_]})),_:1})])])])])])])):Object(n["e"])("",!0)}var w=c("fb08"),F={name:"ModalProduct",components:{Button:w["a"]},data:function(){return{show:!1}},methods:{closeModal:function(){this.show=!1},showModal:function(){this.$refs.modalbutton.show=!0}}};c("dd0e");F.render=y;e["a"]=F},"3c38":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o={class:"main"},i={class:"hero-full"},r={class:"wrap hero-full__wrap"},a={class:"hero-full__col"},u=Object(n["h"])("div",{class:"hero-full__col_cover",style:{"background-image":"url('images/hero/gostinaya-liberty__hero.jpg')"}},[Object(n["h"])("div",{class:"cover"})],-1),s={class:"hero-full__info"},l=Object(n["h"])("h1",null,[Object(n["g"])("Гостиные по индивидуальному проекту "),Object(n["h"])("span",null,"напрямую от фабрики производителя")],-1),b=Object(n["h"])("p",null,"Покрытие итальянской эмалью Sayerlack с соблюдением технологического процесса, что обеспечивает максимальную износостойкость лакокрасочного покрытия, и как следствие практичность и долговечность изделий.",-1),d={class:"hero__button"},j=Object(n["g"])("Рассчитаем гостиную "),O=Object(n["h"])("br",null,null,-1),p=Object(n["g"])(" по эскизам"),m=Object(n["h"])("div",{class:"hero-full__col"},[Object(n["h"])("div",{class:"hero-full__cover",style:{"background-image":"url('images/hero/gostinaya-liberty__hero.jpg')"}})],-1),g=Object(n["g"])("Нравится модель гостиной, но хочется иначе?"),h=Object(n["g"])("Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство в вашей гостиной правильно!");function v(t,e,c,v,f,_){var y=Object(n["z"])("Header"),w=Object(n["z"])("Button"),F=Object(n["z"])("Benefits"),k=Object(n["z"])("ProductG"),z=Object(n["z"])("Calculate"),x=Object(n["z"])("Designer"),C=Object(n["z"])("Warranty"),S=Object(n["z"])("Director"),M=Object(n["z"])("Footer");return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["h"])(y),Object(n["h"])("main",o,[Object(n["h"])("section",i,[Object(n["h"])("div",r,[Object(n["h"])("div",a,[u,Object(n["h"])("div",s,[l,b,Object(n["h"])("div",d,[Object(n["h"])(w,null,{"modal-title":Object(n["F"])((function(){return[j,O,p]})),_:1})])])]),m])]),Object(n["h"])(F),Object(n["h"])(k),Object(n["h"])(z),Object(n["h"])(x,null,{title:Object(n["F"])((function(){return[g]})),text:Object(n["F"])((function(){return[h]})),_:1}),Object(n["h"])(C),Object(n["h"])(S),Object(n["h"])(M)])])}var f=c("0418"),_=c("3fd7"),y=c("b18d"),w=c("1a34"),F=c("b261"),k=c("0f2d"),z=c("fd2d"),x=c("fb08"),C={class:"product"},S={class:"product-name"},M=Object(n["g"])("Коллекция гостиных"),L={class:"wrap"},$={class:"product-items"},A={class:"product-item"},T=Object(n["g"])("Гостиная Либерти"),N=Object(n["g"])("75 880"),P=Object(n["g"])("Гостиная Либерти"),B=Object(n["h"])("img",{src:"images/product/gostinye/liberti/liberti-8.jpg",alt:"Гостиная Либерти",class:"modal-product__img"},null,-1),q=Object(n["g"])("75 880"),D=Object(n["h"])("p",null,"У вашей гостиной множество ролей: сегодня это домашний кинотеатр, завтра столовая, библиотека или кабинет.",-1),E=Object(n["h"])("p",null,"Как организовать пространство с таким количеством функций, сохранив целостность и гармонию?",-1),V=Object(n["h"])("p",null,"Коллекция мебели «Либерти» поможет решить эту задачу.",-1),G=Object(n["h"])("p",null,"Всевозможные модули с ритмичным сочетанием высот и отдельно стоящие предметы органичны в новом прочтении классического стиля.",-1),I={class:"product-item"},R=Object(n["g"])("Гостиная Сканди"),X=Object(n["g"])("88 205"),Y=Object(n["g"])("Гостиная Сканди"),H=Object(n["h"])("img",{src:"images/product/gostinye/scandi/scandi-1.jpg",alt:"Гостиная Сканди",class:"modal-product__img"},null,-1),W=Object(n["g"])("88 205"),J=Object(n["h"])("p",null,"В основе серии «Сканди» лежит современный подход к организации жилого пространства, который позволяет сочетать лаконичность внешнего вида, функциональность и удобство хранения с ощущением домашнего тепла и уюта.",-1),U=Object(n["h"])("p",null,"Предложенный в рамках серии выбор модулей и фасадов позволяет с одной стороны - создавать уникальные цветовые решения, а с другой - оставаться в рамках запланированного бюджета.",-1),K={class:"product-item"},Q=Object(n["g"])("Гостиная Лаура"),Z=Object(n["g"])("99 300"),tt=Object(n["g"])("Гостиная Лаура"),et=Object(n["h"])("img",{src:"images/product/gostinye/laura/laura-1.jpg",alt:"",class:"modal-product__img"},null,-1),ct=Object(n["g"])("99 300"),nt=Object(n["h"])("p",null,"Классический интерьер гостиной «Лаура» – это сочетание стиля, изысканности, гармонии и роскоши.",-1),ot=Object(n["h"])("p",null,"Выбирая классический дизайн, вы подчеркиваете безупречный вкус и эстетичность, а также создаете уютную и комфортную атмосферу в гостиной.",-1),it=Object(n["h"])("p",null,"Все модули для гостиной «Лаура» привлекают к себе внимание благодаря безупречности форм и силуэтов, ведь каждая их линия элегантна и проста.",-1),rt={class:"product-item"},at=Object(n["g"])("Гостиная Рось"),ut=Object(n["g"])("88 205"),st=Object(n["g"])("Гостиная Рось"),lt=Object(n["h"])("img",{src:"images/product/gostinye/ros/ros-3.jpg",alt:"",class:"modal-product__img"},null,-1),bt=Object(n["g"])("88 205"),dt=Object(n["h"])("p",null,"Как добиться того, чтобы новая мебель гармонично вписалась в уже сложившийся интерьер, где тщательно подобраны предметы, все самое необходимое и ничего лишнего, а каждой вещице нашлось бы свое место?",-1),jt=Object(n["h"])("p",null,"Решение этой задачи можно найти в коллекции мебели для гостиной «Рось», модульная система которой поможет создать любую композицию, сделав ваш дом неповторимым.",-1),Ot=Object(n["h"])("p",null,"Всегда актуальный классический стиль и различные текстуры под натуральное дерево, позволят лаконично вписаться мебели в ваш интерьер.",-1),pt={class:"product-item"},mt=Object(n["g"])("Гостиная Валенсия"),gt=Object(n["g"])("65 000"),ht=Object(n["g"])("Гостиная Валенсия"),vt=Object(n["h"])("img",{src:"images/product/gostinye/valensiya/valensiya-1.jpg",alt:"",class:"modal-product__img"},null,-1),ft=Object(n["g"])("65 000"),_t=Object(n["h"])("p",null,"Как выбрать мебель, которая отвечала бы множеству ваших вопросов? Многофункциональность, лаконичность форм, многообразие цветовых решений, сдержанность в декоре и акцент на фурнитуру.",-1),yt=Object(n["h"])("p",null,"Все это – коллекция «Валенсия», созданная на основе хорошо знакомой нашим покупателям, модульной система «Рось». Функциональность и востребованность которой уже проверена временем.",-1);function wt(t,e,c,o,i,r){var a=Object(n["z"])("Liberti"),u=Object(n["z"])("Info"),s=Object(n["z"])("modal-product"),l=Object(n["z"])("Scandi"),b=Object(n["z"])("Laura"),d=Object(n["z"])("Ros"),j=Object(n["z"])("Valensiya");return Object(n["r"])(),Object(n["d"])("section",C,[Object(n["h"])("h2",S,[Object(n["y"])(t.$slots,"title",{},(function(){return[M]}))]),Object(n["h"])("div",L,[Object(n["h"])("ul",$,[Object(n["h"])("li",A,[Object(n["h"])(a),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[T]})),price:Object(n["F"])((function(){return[N]})),_:1}),Object(n["h"])("a",{onClick:e[1]||(e[1]=function(){return r.libertipopup&&r.libertipopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(s,{ref:"modalproduct1"},{name:Object(n["F"])((function(){return[P]})),image:Object(n["F"])((function(){return[B]})),price:Object(n["F"])((function(){return[q]})),description:Object(n["F"])((function(){return[D,E,V,G]})),_:1},512)]),Object(n["h"])("li",I,[Object(n["h"])(l),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[R]})),price:Object(n["F"])((function(){return[X]})),_:1}),Object(n["h"])("a",{onClick:e[2]||(e[2]=function(){return r.scandipopup&&r.scandipopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(s,{ref:"modalproduct2"},{name:Object(n["F"])((function(){return[Y]})),image:Object(n["F"])((function(){return[H]})),price:Object(n["F"])((function(){return[W]})),description:Object(n["F"])((function(){return[J,U]})),_:1},512)]),Object(n["h"])("li",K,[Object(n["h"])(b),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[Q]})),price:Object(n["F"])((function(){return[Z]})),_:1}),Object(n["h"])("a",{onClick:e[3]||(e[3]=function(){return r.laurapopup&&r.laurapopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(s,{ref:"modalproduct3"},{name:Object(n["F"])((function(){return[tt]})),image:Object(n["F"])((function(){return[et]})),price:Object(n["F"])((function(){return[ct]})),description:Object(n["F"])((function(){return[nt,ot,it]})),_:1},512)]),Object(n["h"])("li",rt,[Object(n["h"])(d),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[at]})),price:Object(n["F"])((function(){return[ut]})),_:1}),Object(n["h"])("a",{onClick:e[4]||(e[4]=function(){return r.rospopup&&r.rospopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(s,{ref:"modalproduct4"},{name:Object(n["F"])((function(){return[st]})),image:Object(n["F"])((function(){return[lt]})),price:Object(n["F"])((function(){return[bt]})),description:Object(n["F"])((function(){return[dt,jt,Ot]})),_:1},512)]),Object(n["h"])("li",pt,[Object(n["h"])(j),Object(n["h"])(u,null,{name:Object(n["F"])((function(){return[mt]})),price:Object(n["F"])((function(){return[gt]})),_:1}),Object(n["h"])("a",{onClick:e[5]||(e[5]=function(){return r.valensiyapopup&&r.valensiyapopup.apply(r,arguments)}),class:"product-description show-modal-product"},"Подробное описание"),Object(n["h"])(s,{ref:"modalproduct5"},{name:Object(n["F"])((function(){return[ht]})),image:Object(n["F"])((function(){return[vt]})),price:Object(n["F"])((function(){return[ft]})),description:Object(n["F"])((function(){return[_t,yt]})),_:1},512)])])])])}var Ft={class:"carousel__item"};function kt(t,e,c,o,i,r){var a=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),s=Object(n["z"])("pagination"),l=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(l,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(s)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(i.slides,(function(t){return Object(n["r"])(),Object(n["d"])(a,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",Ft,[Object(n["h"])("img",{src:"images/product/gostinye/liberti/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}c("4001");var zt=c("0b81"),xt={name:"Liberti",components:{Carousel:zt["a"],Slide:zt["d"],Pagination:zt["c"],Navigation:zt["b"]},data:function(){return{slides:[{img:"liberti-8.jpg"},{img:"liberti-1.jpg"},{img:"liberti-1-54.jpg"},{img:"liberti-5.jpg"},{img:"liberti-9.jpg"}]}}};xt.render=kt;var Ct=xt,St={class:"carousel__item"};function Mt(t,e,c,o,i,r){var a=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),s=Object(n["z"])("pagination"),l=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(l,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(s)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(i.slides,(function(t){return Object(n["r"])(),Object(n["d"])(a,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",St,[Object(n["h"])("img",{src:"images/product/gostinye/scandi/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}var Lt={name:"Scandi",components:{Carousel:zt["a"],Slide:zt["d"],Pagination:zt["c"],Navigation:zt["b"]},data:function(){return{slides:[{img:"scandi-1.jpg"},{img:"scandi-2.jpg"}]}}};Lt.render=Mt;var $t=Lt,At={class:"carousel__item"};function Tt(t,e,c,o,i,r){var a=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),s=Object(n["z"])("pagination"),l=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(l,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(s)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(i.slides,(function(t){return Object(n["r"])(),Object(n["d"])(a,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",At,[Object(n["h"])("img",{src:"images/product/gostinye/laura/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}var Nt={name:"Laura",components:{Carousel:zt["a"],Slide:zt["d"],Pagination:zt["c"],Navigation:zt["b"]},data:function(){return{slides:[{img:"laura-1.jpg"},{img:"laura-2.jpg"},{img:"laura-4.jpg"}]}}};Nt.render=Tt;var Pt=Nt,Bt={class:"carousel__item"};function qt(t,e,c,o,i,r){var a=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),s=Object(n["z"])("pagination"),l=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(l,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(s)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(i.slides,(function(t){return Object(n["r"])(),Object(n["d"])(a,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",Bt,[Object(n["h"])("img",{src:"images/product/gostinye/ros/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}var Dt={name:"Ros",components:{Carousel:zt["a"],Slide:zt["d"],Pagination:zt["c"],Navigation:zt["b"]},data:function(){return{slides:[{img:"ros-3.jpg"},{img:"ros-4.jpg"},{img:"ros-5.jpg"},{img:"ros-6.jpg"},{img:"ros-7.jpg"},{img:"ros-8.jpg"},{img:"ros-9.jpg"}]}}};Dt.render=qt;var Et=Dt,Vt={class:"carousel__item"};function Gt(t,e,c,o,i,r){var a=Object(n["z"])("slide"),u=Object(n["z"])("navigation"),s=Object(n["z"])("pagination"),l=Object(n["z"])("carousel");return Object(n["r"])(),Object(n["d"])(l,{"items-to-show":1,"wrap-around":!0},{addons:Object(n["F"])((function(){return[Object(n["h"])(u),Object(n["h"])(s)]})),default:Object(n["F"])((function(){return[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(i.slides,(function(t){return Object(n["r"])(),Object(n["d"])(a,{key:t},{default:Object(n["F"])((function(){return[Object(n["h"])("div",Vt,[Object(n["h"])("img",{src:"images/product/gostinye/valensiya/"+t.img,alt:"",class:"product-item__img"},null,8,["src"])])]})),_:2},1024)})),128))]})),_:1})}var It={name:"Valensiya",components:{Carousel:zt["a"],Slide:zt["d"],Pagination:zt["c"],Navigation:zt["b"]},data:function(){return{slides:[{img:"valensiya-1.jpg"},{img:"valensiya-2.jpg"},{img:"valensiya-3.jpg"},{img:"valensiya-4.jpg"},{img:"valensiya-5.jpg"}]}}};It.render=Gt;var Rt=It,Xt=c("d2b7"),Yt=c("156c"),Ht={name:"ProductG",components:{Liberti:Ct,Scandi:$t,Laura:Pt,Ros:Et,Valensiya:Rt,Info:Xt["a"],ModalProduct:Yt["a"]},methods:{libertipopup:function(){this.$refs.modalproduct1.show=!0},scandipopup:function(){this.$refs.modalproduct2.show=!0},laurapopup:function(){this.$refs.modalproduct3.show=!0},rospopup:function(){this.$refs.modalproduct4.show=!0},valensiyapopup:function(){this.$refs.modalproduct5.show=!0}}};c("e8c0");Ht.render=wt;var Wt=Ht,Jt={components:{Header:f["a"],Benefits:_["a"],Designer:y["a"],Calculate:w["a"],Warranty:F["a"],Director:k["a"],Footer:z["a"],Button:x["a"],ProductG:Wt},metaInfo:{title:"Vue App",meta:[{vmid:"description",property:"description",content:"Vue App"},{vmid:"og:title",property:"og:title",content:"Vue App"},{vmid:"og:description",property:"og:description",content:"Vue App"}]}};Jt.render=v;e["default"]=Jt},4001:function(t,e,c){},7762:function(t,e,c){},b18d:function(t,e,c){"use strict";var n=c("7a23"),o=c("e495"),i=c.n(o),r=c("ecd0"),a=c.n(r),u=c("0862"),s=c.n(u),l=Object(n["H"])("data-v-59d71a15");Object(n["u"])("data-v-59d71a15");var b={class:"designer"},d={class:"wrap designer__wrap"},j={class:"designer__header"},O=Object(n["h"])("div",{class:"designer__photo"},[Object(n["h"])("img",{src:i.a,alt:"Дизайнер мебельной фабрики Рось"})],-1),p={class:"designer__title"},m=Object(n["g"])("Нравится модель, но хочется немного иначе?"),g=Object(n["h"])("p",{class:"designer__description"},[Object(n["g"])("К вашим услугам "),Object(n["h"])("span",null,"профессиональный дизайнер мебели со стажем 8 лет"),Object(n["g"])(" и более 800 реализованными проектами!")],-1),h={class:"designer__bottom"},v={class:"quote designer__quote"},f=Object(n["h"])("img",{src:a.a,alt:"",class:"quote__icon"},null,-1),_={class:"quote__text"},y=Object(n["g"])("Порой хочется всего и сразу. И чтобы к цвету любимого платья подходило, уж я то знаю)) Но это довольно сложно, особенно в небольшом помещении. Помогу вам сделать правильный выбор и расскажу небольшие, но важные хитрости, которые помогут использовать пространство правильно!"),w=Object(n["h"])("p",{class:"quote__name"},"Татьяна, служба заботы о клиентах",-1),F=Object(n["h"])("div",{class:"designer__button"},[Object(n["h"])("a",{onclick:"ym(41430234,'reachGoal','click--designer-button'); return true;",href:"#designer-popup",class:"button button__designer open-popup-link"},[Object(n["h"])("span",{class:"button__text"},"Помощь дизайнера"),Object(n["h"])("img",{src:s.a,class:"button__icon"})])],-1);Object(n["s"])();var k=l((function(t,e,c,o,i,r){return Object(n["r"])(),Object(n["d"])("section",b,[Object(n["h"])("div",d,[Object(n["h"])("div",j,[O,Object(n["h"])("div",null,[Object(n["h"])("h3",p,[Object(n["y"])(t.$slots,"title",{},(function(){return[m]}),{},!0)]),g])]),Object(n["h"])("div",h,[Object(n["h"])("div",v,[f,Object(n["h"])("p",_,[Object(n["y"])(t.$slots,"text",{},(function(){return[y]}),{},!0)]),w]),F])])])})),z={name:"Designer"};c("b485");z.render=k,z.__scopeId="data-v-59d71a15";e["a"]=z},b485:function(t,e,c){"use strict";c("7762")},d2b7:function(t,e,c){"use strict";var n=c("7a23"),o={class:"product-info"},i={class:"product-name"},r=Object(n["g"])("Итальянка"),a={class:"product-price"},u=Object(n["g"])("от "),s=Object(n["g"])("120 000"),l=Object(n["g"])(" руб.");function b(t,e,c,b,d,j){return Object(n["r"])(),Object(n["d"])("div",o,[Object(n["h"])("h3",i,[Object(n["y"])(t.$slots,"name",{},(function(){return[r]}))]),Object(n["h"])("span",a,[u,Object(n["y"])(t.$slots,"price",{},(function(){return[s]})),l])])}var d={name:"Info",components:{}};d.render=b;e["a"]=d},d6c6:function(t,e,c){},dd0e:function(t,e,c){"use strict";c("d6c6")},e495:function(t,e,c){t.exports=c.p+"img/designer__photo.adb96199.png"},e8c0:function(t,e,c){"use strict";c("f461")},ecd0:function(t,e,c){t.exports=c.p+"img/designer-quote__icon.04df6c12.svg"},f461:function(t,e,c){}}]);
//# sourceMappingURL=about.3e58f30e.js.map