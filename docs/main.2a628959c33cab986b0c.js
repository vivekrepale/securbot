!function(e){function a(a){for(var n,r,l=a[0],_=a[1],c=a[2],m=0,f=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in _)Object.prototype.hasOwnProperty.call(_,n)&&(e[n]=_[n]);for(s&&s(a);f.length;)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,l=1;l<t.length;l++){var _=t[l];0!==i[_]&&(n=!1)}n&&(o.splice(a--,1),e=r(r.s=t[0]))}return e}var n={},i={0:0},o=[];function r(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)r.d(t,n,function(a){return e[a]}.bind(null,n));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="";var l=window.webpackJsonp=window.webpackJsonp||[],_=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var s=_;o.push([33,1]),t()}({25:function(e,a,t){var n=t(26),i=t(27);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},27:function(e,a,t){var n=t(28),i=t(29),o=t(30),r=t(31),l=t(32);(a=n(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;1,300&display=swap);"]);var _=i(o),c=i(r),s=i(l);a.push([e.i,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%}body{box-sizing:border-box}@font-face{font-family:"securbotFont";src:url('+_+')}@font-face{font-family:"seFont";src:url('+c+')}.body{font-family:"Lato", sans-serif;font-size:2rem;font-weight:400}.layout{display:grid;grid-template-rows:30vh min-content min-content min-content min-content;grid-template-columns:[full-start] 1fr [center-start] repeat(8, [col-start] minmax(min-content, 12rem) [col-end]) [center-end] 1fr [full-end]}.layout__header-main{grid-row:1 / 2;grid-column:full-start / full-end}.layout__navbar{grid-row:2 / 3;grid-column:full-start / full-end}.layout__content{grid-row:3 / 4;grid-column:full-start / full-end}.layout__footer{grid-row:4 / 5;grid-column:full-start / full-end;background-color:#313052}.header{display:grid;grid-template-columns:max-content minmax(max-content, 1fr);height:100%;background-image:linear-gradient(to right, rgba(49,48,82,0.9), rgba(49,48,82,0.9), rgba(49,48,82,0.9), rgba(49,48,82,0.9)),url('+s+');background-size:cover}.header__logo{display:grid;padding:1rem;margin:auto}.header__logo__img{max-width:6rem;max-height:6rem;margin:auto}.header__logo__text-1,.header__logo__text-2{color:#fff6e3;font-family:"securbotFont",san-serif;font-size:1.5rem;display:inline-block}.header__logo__text-1:first-letter,.header__logo__text-2:first-letter{color:red}.header__title{display:grid;margin:auto;justify-items:center}.header__title__main-1,.header__title__main-2{color:#fff6e3;font-family:"seFont",san-serif;display:inline-block;font-size:6rem}.header__title__main-1:first-letter,.header__title__main-2:first-letter{color:red}.header__title__sub{font-family:"Lato" san-serif;color:#fff6e3}.nav__nav-list{display:flex;justify-content:space-around;list-style:none}.nav__nav-list__nav-item{flex-grow:1;background-color:#313052;padding:1.5rem;text-align:center}.nav__nav-list__nav-item:hover{background-color:#fff6e3}.nav__nav-list__nav-item:hover .nav__nav-list__nav-item__nav-link{color:#313052}.nav__nav-list__nav-item__nav-link:link,.nav__nav-list__nav-item__nav-link:visited{font-size:2rem;text-decoration:none;color:#fff6e3;font-weight:200;background-size:100%;list-style-type:none}.navigation__background{position:fixed;top:6rem;right:6rem;height:5rem;width:5rem;border-radius:50%;background-image:radial-gradient(#313052, #313052, #fff6e3);z-index:2000}.navigation__btn{position:fixed;top:5.5rem;right:5.5rem;height:6rem;width:6rem;background-color:#fff6e3;z-index:4000;border-radius:50%;cursor:pointer;display:grid}.navigation__btn span{background-color:#313052;height:2px;width:2.5rem;align-self:center;justify-self:center}.navigation__btn span::before,.navigation__btn span::after{display:inline-block;position:absolute;background-color:#313052;height:2px;width:2.5rem;transition:all 0.3s}.navigation__btn span::before{content:"";transform:translateY(0.7rem)}.navigation__btn span::after{content:"";transform:translateY(-0.7rem)}.navigation__btn:hover span::before{transform:translateY(0.9rem)}.navigation__btn:hover span::after{transform:translateY(-0.9rem)}.navigation__checkbox{display:none}.navigation__nav{position:fixed;height:100vh;z-index:3500;opacity:0;width:0;display:grid;justify-content:center;align-content:center;text-align:center}.navigation__nav__list__item{list-style-type:none}.navigation__nav__list__item__link,.navigation__nav__list__item__link:link,.navigation__nav__list__item__link:visited{color:white;text-decoration:none;display:inline-block;padding:1rem;margin:1rem;background-color:transparent}.navigation__nav__list__item__link:hover,.navigation__nav__list__item__link:active{color:black;background-color:white}.navigation__checkbox:checked ~ .navigation__nav{opacity:1;width:100%}.navigation__checkbox:checked ~ .navigation__background{transform:scale(80)}.heading-3{font-size:2.6rem}.footer{display:grid;grid-template-rows:min-content min-content 1fr}.footer__gov-logos{grid-row:1 / 2;display:grid;grid-template-columns:1fr 1fr 1fr}.footer__gov-logos img{max-width:100%;min-height:100%}.footer__office{grid-row:2 / 3;display:grid;grid-template-rows:min-content min-content;grid-template-columns:1fr 1fr;color:white}.footer__office__heading{grid-row:1 / 2}.footer__office__office1{grid-row:2 / 3;grid-column:1 / 2}.footer__office__office2{grid-row:2 / 3;grid-column:2 / 3}\n',""]),e.exports=a},30:function(e,a,t){"use strict";t.r(a),a.default=t.p+"19ab71aecfbca7c196690c12aaba831d.ttf"},31:function(e,a,t){"use strict";t.r(a),a.default=t.p+"3874b5bcd1f83390486bbb176a1841f0.ttf"},32:function(e,a,t){"use strict";t.r(a),a.default=t.p+"3d19d77c1451f305cb9d56be5a03d055.jpg"},33:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(14),r=t.n(o),l=t(3),_=t(1),c=t.p+"9169399788f69ea96591da3107e3185c.png";var s=()=>i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header__logo"},i.a.createElement("img",{src:c,alt:"securbotLogo",className:"header__logo__img"}),i.a.createElement("div",{className:"header__logo__text"}," ",i.a.createElement("h1",{className:"header__logo__text-1"},"Secur"),i.a.createElement("h1",{className:" header__logo__text-2"},"Bot"))),i.a.createElement("div",{className:"header__title"},i.a.createElement("div",{className:"header__title__main"}," ",i.a.createElement("h1",{className:"header__title__main-1"},"Siddharth"),i.a.createElement("h1",{className:"header__title__main-2"},"Enterprises")),i.a.createElement("h2",{className:"header__title__sub"},"for all your security needs..."))),m=t.p+"34b3b62f41013083e7e7fd43daa7ee15.png",f=t.p+"0f0dc9627046c60ddadb5112cdf3a938.jpg",d=t.p+"4b20cdd1b385045d4fea8b2b6c4ce05c.jpg";var g=Object(_.f)(()=>i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"footer__gov-logos"},i.a.createElement("img",{src:m,alt:"indiaMartLogo",className:"footer__gov-logos__logo1"}),i.a.createElement("img",{src:f,alt:"atmaNirbharBharatLogo",className:"footer__gov-logos__logo2"}),i.a.createElement("img",{src:d,alt:"digitalIndiaLogo",className:"footer__gov-logos__logo3"})),i.a.createElement("div",{className:"footer__office"},i.a.createElement("div",{className:"footer__office__heading"},i.a.createElement("h3",null,"Offices:")),i.a.createElement("div",{className:"footer__office__office1"},i.a.createElement("h4",{className:"footer__office__office1__location"},"Mumbai (Head-office)"),i.a.createElement("p",{className:"footer__office__office1__address"},"SHOP No. 01, PLOT No. 112, Opp. BOMBAY PAINTS, SECTOR - 23, JANTA MARKET, TURBHE STN RD, TURBHE, NAVI MUMBAI, MAHARASHTRA. 400705"),i.a.createElement("p",{className:"footer__office__office1_contact"},"+91 8080605001 | +91 9702327707 | +91 8356038324")),i.a.createElement("div",{className:"footer__office__office2"},i.a.createElement("h4",{className:"footer__office__office2__location"},"Punjab"),i.a.createElement("p",{className:"footer__office__office2__address"},"1743/5, W. No.- 43, B-14, ISLAM GANJ, LUDHIANA. PUNJAB. 141008"),i.a.createElement("p",{className:"footer__office__office2_contact"},"+918054963957"))),i.a.createElement("div",{className:"footer__developers-info"},i.a.createElement("h5",null,"Developed by: Vivek Repale"))));var u=()=>i.a.createElement("div",{className:"navigation"},i.a.createElement("input",{className:"navigation__checkbox",type:"checkbox",id:"nav-toggle"}),i.a.createElement("label",{className:"navigation__btn",htmlFor:"nav-toggle"},i.a.createElement("span",null)),i.a.createElement("div",{className:"navigation__background"}," "),i.a.createElement("div",{className:"navigation__nav"},i.a.createElement("ul",{className:"navigation__nav__list"},i.a.createElement("li",{className:"navigation__nav__list__item"},i.a.createElement(l.b,{to:"/",className:"navigation__nav__list__item__link heading-3"},"Home")),i.a.createElement("li",{className:"navigation__nav__list__item"},i.a.createElement(l.b,{to:"/about-us",className:"navigation__nav__list__item__link heading-3"},"About us")),i.a.createElement("li",{className:"navigation__nav__list__item"},i.a.createElement(l.b,{to:"/services-and-solutions",className:"navigation__nav__list__item__link heading-3"},"Solutions and services")),i.a.createElement("li",{className:"navigation__nav__list__item"},i.a.createElement(l.b,{to:"/products",className:"navigation__nav__list__item__link heading-3"},"Products")),i.a.createElement("li",{className:"navigation__nav__list__item"},i.a.createElement(l.b,{to:"/testimonials",className:"navigation__nav__list__item__link heading-3"},"Testimonials")),i.a.createElement("li",{className:"navigation__nav__list__item"},i.a.createElement(l.b,{to:"/contact-us",className:"navigation__nav__list__item__link heading-3"},"Contact us")))));var v=Object(_.f)(()=>i.a.createElement("div",null,"Home"));var p=Object(_.f)(()=>i.a.createElement("div",null,"About"));var h=Object(_.f)(()=>i.a.createElement("div",null,"ContactUs"));var b=Object(_.f)(()=>i.a.createElement("div",null,"Products"));var E=Object(_.f)(()=>i.a.createElement("div",null,"Testimonials"));var y=Object(_.f)(()=>i.a.createElement("div",null,"S_and_S"));var N=()=>i.a.createElement(l.a,null,i.a.createElement("div",{className:"layout__navbar"},i.a.createElement(u,null)),i.a.createElement("div",{className:"layout"},i.a.createElement("div",{className:"layout__header-main"},i.a.createElement(s,null)),i.a.createElement("div",{className:"layout__content"},i.a.createElement(_.c,null,i.a.createElement(_.a,{path:"/",exact:!0},i.a.createElement(v,null)),i.a.createElement(_.a,{path:"/about-us"},i.a.createElement(p,null)),i.a.createElement(_.a,{path:"/services-and-solutions"},i.a.createElement(y,null)),i.a.createElement(_.a,{path:"/products"},i.a.createElement(b,null)),i.a.createElement(_.a,{path:"/testimonials"},i.a.createElement(E,null)),i.a.createElement(_.a,{path:"/contact-us"},i.a.createElement(h,null)))),i.a.createElement("div",{className:"layout__footer"},i.a.createElement(g,null))));t(25);r.a.render(i.a.createElement(N,null),document.getElementById("app"))}});