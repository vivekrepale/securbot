!function(e){function t(t){for(var n,o,l=t[0],c=t[1],s=t[2],_=0,d=[];_<l.length;_++)o=l[_],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(m&&m(t);d.length;)d.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var m=c;i.push([60,1]),a()}({52:function(e,t,a){var n=a(53),r=a(54);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},54:function(e,t,a){var n=a(55),r=a(56),i=a(57),o=a(58),l=a(59);(t=n(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap);"]);var c=r(i),s=r(o),m=r(l);t.push([e.i,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%;padding:1.5rem}@media only screen and (max-width: 46.25em){html{padding:0}}body{box-sizing:border-box}@font-face{font-family:"securbotFont";src:url('+c+')}@font-face{font-family:"seFont";src:url('+s+')}body{font-family:"Lato"}.normalText--black{color:black}.normalText--white{color:white}.heading-3,.heading-4{text-align:center}.heading-1{font-size:5rem;font-weight:400}.heading-1--black{color:#000}.heading-1--white{color:#fff}.heading-2{font-size:4rem;font-weight:400}.heading-2--black{color:#000}.heading-2--white{color:#fff}.heading-3{font-size:3rem;font-weight:400}.heading-3--black{color:#000}.heading-3--white{color:#fff}.heading-4{font-size:2rem;font-weight:400}.heading-4--black{color:#000}.heading-4--white{color:#fff}.heading-1,.heading-2,.text-1,.text-2,.text-3,.text-4{text-align:center}.text-1{font-size:5rem;font-weight:400}.text-1--black{color:#000}.text-1--white{color:#fff}.text-2{font-size:4rem;font-weight:400}.text-2--black{color:#000}.text-2--white{color:#fff}.text-3{font-size:3rem;font-weight:400}.text-3--black{color:#000}.text-3--white{color:#fff}.text-4{font-size:2rem;font-weight:400}.text-4--black{color:#000}.text-4--white{color:#fff}.btn{width:max-content;height:max-content;padding:1rem;border:none;border-radius:0;cursor:pointer}.layout{display:grid;grid-template-rows:80vh min-content min-content min-content min-content;grid-template-columns:[full-start] 1fr [center-start] repeat(8, [col-start] minmax(min-content, 12rem) [col-end]) [center-end] 1fr [full-end]}.layout__header-main{grid-row:1 / 2;grid-column:full-start / full-end}.layout__content{grid-row:3 / 4;grid-column:full-start / full-end}.layout__footer{grid-row:4 / 5;grid-column:full-start / full-end;background-color:#fff}.header{display:grid;grid-template-rows:1fr minmax(max-content, 2fr) 1fr;height:100%;background-image:linear-gradient(to bottom right, rgba(255,0,0,0.7), rgba(0,0,255,0.7)),url('+m+');background-size:cover;z-index:0}.header__title{grid-row:2/3;display:grid;grid-template-columns:max-content;align-content:center;justify-content:center;padding:0 4rem}@media only screen and (max-width: 20.625em){.header__title{padding:0 1.5rem}}.header__title__main-1,.header__title__main-2{color:#fff;font-family:"seFont",san-serif;display:inline-block;-webkit-box-shadow:0px 10px 6px -6px rgba(255,255,255,0.1);font-size:6rem}@media only screen and (max-width: 46.25em){.header__title__main-1,.header__title__main-2{font-size:4rem}}@media only screen and (max-width: 28.75em){.header__title__main-1,.header__title__main-2{font-size:3.2rem}}@media only screen and (max-width: 20.625em){.header__title__main-1,.header__title__main-2{font-size:2.5rem}}.header__title__main-1:first-letter,.header__title__main-2:first-letter{color:red}.header__title__sub{font-family:"Lato" san-serif;color:#fff;display:grid;justify-self:end}@media only screen and (max-width: 46.25em){.header__title__sub{font-size:1rem}}@media only screen and (max-width: 28.75em){.header__title__sub{font-size:0.8rem}}.header__contact-links{grid-row:3/4;display:grid;grid-template-columns:repeat(auto-fit, minmax(25rem, max-content));grid-gap:4rem;justify-content:center;justify-items:center}.header__contact-links__call-mail{display:grid;grid-auto-flow:column;align-items:center;grid-column-gap:1.5rem;grid-row-gap:1rem;font-size:2rem}@media only screen and (max-width: 28.75em){.header__contact-links__call-mail{font-size:1.5rem;grid-column-gap:1rem}}.header__contact-links__call-mail__icon{width:4rem;height:4rem}@media only screen and (max-width: 28.75em){.header__contact-links__call-mail__icon{width:3rem;height:3rem}}.header__contact-links__call-mail__link:link,.header__contact-links__call-mail__link:visited{text-decoration:none;color:#fff}.header__contact-links__call-mail__link:hover,.header__contact-links__call-mail__link:active{color:#fff}.header-logo{width:7rem;height:7rem;z-index:1;position:absolute;margin:1.5rem;background-image:linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));display:grid;justify-content:center;align-content:start}@media only screen and (max-width: 46.25em){.header-logo{width:6rem;height:6rem}}@media only screen and (max-width: 20.625em){.header-logo{width:5rem;height:5rem}}.header-logo__img{max-width:5rem;max-height:5rem;margin:auto}@media only screen and (max-width: 46.25em){.header-logo__img{max-width:4rem;max-height:4rem}}@media only screen and (max-width: 20.625em){.header-logo__img{max-width:3.5rem;max-height:3.5rem}}.header-logo__text__text-1,.header-logo__text__text-2{color:#fff;font-family:"securbotFont",san-serif;font-size:1.2rem;display:inline-block}.header-logo__text__text-1:first-letter,.header-logo__text__text-2:first-letter{color:red}@media only screen and (max-width: 46.25em){.header-logo__text__text-1,.header-logo__text__text-2{font-size:0.9rem}}@media only screen and (max-width: 28.75em){.header-logo__text__text-1,.header-logo__text__text-2{font-size:0.9rem}}.navigation__background{position:fixed;top:6rem;right:6rem;height:4rem;width:4rem;border-radius:50%;background-image:radial-gradient(rgba(179,0,0,0.8), #0000b3);z-index:2000}@media only screen and (max-width: 46.25em){.navigation__background{top:3.5rem;right:3.5rem;height:4rem;width:4rem}}@media only screen and (max-width: 28.75em){.navigation__background{top:2rem;right:2rem}}@media only screen and (max-width: 20.625em){.navigation__background{top:1rem;right:1rem;height:3rem;width:3rem}}.navigation__btn{position:fixed;top:5.5rem;right:5.5rem;height:6rem;width:6rem;background-color:#fff;z-index:4000;border-radius:50%;cursor:pointer;display:grid}@media only screen and (max-width: 46.25em){.navigation__btn{top:3rem;right:3rem;height:5rem;width:5rem}}@media only screen and (max-width: 20.625em){.navigation__btn{height:4rem;width:4rem}}.navigation__btn span{background-image:linear-gradient(to bottom right, rgba(255,0,0,0.7), rgba(0,0,255,0.7));height:2px;width:2.5rem;align-self:center;justify-self:center}@media only screen and (max-width: 20.625em){.navigation__btn span{width:1.8rem}}.navigation__btn span::before,.navigation__btn span::after{display:inline-block;position:absolute;background-image:linear-gradient(to bottom right, rgba(255,0,0,0.7), rgba(0,0,255,0.7));height:2px;width:2.5rem;transition:transform 0.3s}@media only screen and (max-width: 20.625em){.navigation__btn span::before,.navigation__btn span::after{width:1.8rem}}.navigation__btn span::before{content:"";transform:translateY(0.7rem)}@media only screen and (max-width: 20.625em){.navigation__btn span::before{transform:translateY(0.5rem)}}.navigation__btn span::after{content:"";transform:translateY(-0.7rem)}@media only screen and (max-width: 20.625em){.navigation__btn span::after{transform:translateY(-0.5rem)}}.navigation__btn:hover span::before{transform:translateY(0.9rem)}@media only screen and (max-width: 20.625em){.navigation__btn:hover span::before{transform:translateY(0.7rem)}}.navigation__btn:hover span::after{transform:translateY(-0.9rem)}@media only screen and (max-width: 20.625em){.navigation__btn:hover span::after{transform:translateY(-0.7rem)}}.footer__offices{display:grid}.footer__offices__office{display:grid;grid-template-columns:repeat(auto-fit, minmax(35rem, 1fr))}.footer__offices__office__googleMap__map{width:100%;height:70vh}.footer__offices__office__info{display:grid;grid-template-rows:min-content min-content min-content;grid-template-columns:1fr 1fr;grid-gap:3rem;padding:4rem;background-image:linear-gradient(to bottom, rgba(0,0,0,0.3), #000)}.footer__phone-call-link__icon{width:20rem;height:10rem;visibility:hidden}.container{display:grid;grid-template-columns:repeat(auto-fit, minmax(10rem, 1fr));grid-template-rows:20rem;grid-auto-rows:20rem}.container__item1{background-color:orange}.container__item2{background-color:red}.container__item3{background-color:black}.container__item4{background-color:blue}.container__item5{background-color:green}.container__item6{background-color:pink}.home__button{display:grid;grid-template-columns:max-content;grid-template-rows:20vh;justify-content:center;align-items:center}.home__button__btn{padding:1rem 4rem;background-color:#fff;color:#000;-webkit-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.2);font-size:2rem}.home__button__btn:hover,.home__button__btn:active{background-color:red;color:#fff}.container{display:grid;grid-template-rows:max-content;padding:6rem 0}.container__form{display:grid;grid-template-columns:min-content;grid-gap:3rem 0;justify-items:center}.container__form__input{min-width:130%;height:3.5rem;font-size:1.5rem;border-radius:8px;text-indent:1.5rem;border-width:none;-webkit-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.5)}.container__form__input--requirement{height:7rem}.container__form__submit-button{width:20rem;height:3.5rem;background-color:#fff;font-size:1.5rem;border-width:0;cursor:pointer}.container__form__submit-button:hover,.container__form__submit-button:active{background-color:#000;color:#fff}.sscontainer{width:100vw}.sscontainer__s{background-image:linear-gradient(to bottom right, rgba(255,0,0,0.9), rgba(255,255,255,0.9)),url('+m+");margin:3rem 8rem;max-width:100%;display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:1fr}.sscontainer__s__img{grid-column:1/4;grid-row:1/2;width:80%;margin:3rem}.sscontainer__s__text{grid-column:3/5;grid-row:1/2;color:black;background-image:linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.5)),url("+m+');clip-path:polygon(0 0, 100% 0, 100% 100%, 50% 100%)}.sscontainer__s__text h3{font-size:4rem;margin-left:10rem}.sscontainer__s__text p{font-size:2rem;margin:5rem 0 0 15rem}.navigation__background{background-image:radial-gradient(#0000b3, #b30000);z-index:2000;transform:scale(100)}.navigation__nav{position:fixed;height:100vh;width:100%;z-index:3500;display:grid;justify-content:center;align-content:center;text-align:center}.navigation__nav__list__item{list-style-type:none}.navigation__nav__list__item__link,.navigation__nav__list__item__link:link,.navigation__nav__list__item__link:visited{color:#fff;text-decoration:none;display:inline-block;padding:1rem;margin:1rem;background-color:transparent}.navigation__nav__list__item__link:hover,.navigation__nav__list__item__link:active{color:#000;background-color:#fff}.modal-container{background-image:linear-gradient(to bottom right, red, blue);z-index:4000;height:100vh;width:100vw;position:fixed;left:0;top:0;display:grid;justify-content:center;align-items:start;overflow:hidden}.modal-container__notice{color:#fff;font-size:1.8rem;padding:2rem 5rem;align-self:center}.modal-container__cancel-button{position:fixed;top:2rem;right:2rem;height:3rem;width:3rem;background-color:#fff;z-index:4000;border-radius:50%;cursor:pointer;display:grid;justify-items:center}.modal-container__cancel-button span{width:2.5rem;align-self:center;justify-self:center}.modal-container__cancel-button span::before,.modal-container__cancel-button span::after{display:inline-block;position:absolute;background-image:linear-gradient(to bottom right, rgba(255,0,0,0.7), rgba(0,0,255,0.7));height:3px;width:2.5rem;transition:transform 0.3s}.modal-container__cancel-button span::before{content:"";transform:rotate(-45deg)}.modal-container__cancel-button span::after{content:"";transform:rotate(45deg)}\n',""]),e.exports=t},57:function(e,t,a){"use strict";a.r(t),t.default=a.p+"19ab71aecfbca7c196690c12aaba831d.ttf"},58:function(e,t,a){"use strict";a.r(t),t.default=a.p+"3874b5bcd1f83390486bbb176a1841f0.ttf"},59:function(e,t,a){"use strict";a.r(t),t.default=a.p+"1d66fd0522140f01a2f5d9b3b42a51df.jpg"},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),o=a.n(i),l=a(2),c=a(1),s=a.p+"9169399788f69ea96591da3107e3185c.png";var m=()=>r.a.createElement("div",{className:"header-logo"},r.a.createElement("img",{src:s,alt:"securbotLogo",className:"header-logo__img"}),r.a.createElement("div",{className:"header-logo__text"}," ",r.a.createElement("h1",{className:"header-logo__text__text-1"},"Secur"),r.a.createElement("h1",{className:" header-logo__text__text-2"},"Bot")));a.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=function(e){return n.createElement("svg",_({viewBox:"0 0 512.006 512.006"},e),n.createElement("path",{fill:e.fill||"none",stroke:e.stroke||"#000",strokeWidth:2,strokeMiterlimit:10,d:"M502.05 407.127l-56.761-37.844-50.459-33.633c-9.738-6.479-22.825-4.355-30.014 4.873l-31.223 40.139c-6.707 8.71-18.772 11.213-28.39 5.888-21.186-11.785-46.239-22.881-101.517-78.23-55.278-55.349-66.445-80.331-78.23-101.517-5.325-9.618-2.822-21.683 5.888-28.389l40.139-31.223c9.227-7.188 11.352-20.275 4.873-30.014l-32.6-48.905-38.877-58.316C98.262.03 85.016-2.95 74.786 3.185L29.95 30.083A54.779 54.779 0 005.074 62.277C-7.187 106.98-9.659 205.593 148.381 363.633s256.644 155.56 301.347 143.298a54.771 54.771 0 0032.194-24.876l26.898-44.835c6.136-10.231 3.156-23.476-6.77-30.093zM291.309 79.447c82.842.092 149.977 67.226 150.069 150.069a8.828 8.828 0 0017.656 0c-.102-92.589-75.135-167.622-167.724-167.724a8.828 8.828 0 00-8.828 8.828 8.826 8.826 0 008.827 8.827z"}),n.createElement("path",{fill:e.fill||"none",stroke:e.stroke||"#000",strokeWidth:2,strokeMiterlimit:10,d:"M291.309 132.412c53.603.063 97.04 43.501 97.103 97.103a8.828 8.828 0 0017.656 0c-.073-63.349-51.409-114.686-114.759-114.759a8.828 8.828 0 000 17.656z"}),n.createElement("path",{fill:e.fill||"none",stroke:e.stroke||"#000",strokeWidth:2,strokeMiterlimit:10,d:"M291.309 185.378c24.365.029 44.109 19.773 44.138 44.138a8.828 8.828 0 0017.656 0c-.039-34.111-27.682-61.754-61.793-61.793a8.828 8.828 0 00-8.828 8.828 8.826 8.826 0 008.827 8.827z"}))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var g=function(e){return n.createElement("svg",f({viewBox:"0 0 512 512"},e),n.createElement("path",{fill:e.fill||"none",stroke:e.stroke||"#000",strokeWidth:2,strokeMiterlimit:10,d:"M467 61H45c-6.927 0-13.412 1.703-19.279 4.51L255 294.789l51.389-49.387.005-.007.005-.004L486.286 65.514C480.418 62.705 473.929 61 467 61zM507.496 86.728L338.213 256.002 507.49 425.279c2.807-5.867 4.51-12.352 4.51-19.279V106c0-6.923-1.699-13.407-4.504-19.272zM4.51 86.721C1.703 92.588 0 99.073 0 106v300c0 6.923 1.701 13.409 4.506 19.274L173.789 256 4.51 86.721z"}),n.createElement("path",{fill:e.fill||"none",stroke:e.stroke||"#000",strokeWidth:2,strokeMiterlimit:10,d:"M317.002 277.213l-51.396 49.393c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395L195 277.211 25.714 446.486C31.582 449.295 38.071 451 45 451h422c6.927 0 13.412-1.703 19.279-4.51L317.002 277.213z"}))};var u=()=>r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__title"},r.a.createElement("div",{className:"header__title__main"}," ",r.a.createElement("h1",{className:"header__title__main-1"},"Siddharth"),r.a.createElement("h1",{className:"header__title__main-2"},"Enterprises")),r.a.createElement("h2",{className:"header__title__sub"},"for all your security needs...")),r.a.createElement("div",{className:"header__contact-links"},r.a.createElement("div",{className:"header__contact-links__call-mail"},r.a.createElement(d,{className:"header__contact-links__call-mail__icon",fill:"white",stroke:"white"}),r.a.createElement("a",{href:"tel:+918080605001",className:"header__contact-links__call-mail__link "},"+918080605001")),r.a.createElement("div",{className:"header__contact-links__call-mail"},r.a.createElement(g,{className:"header__contact-links__call-mail__icon",fill:"white",stroke:"white"}),r.a.createElement("a",{href:"mailto:enquiry@securbot.in",className:"header__contact-links__call-mail__link "},"enquiry@securbot.in"))));var h=Object(c.f)(e=>r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"navigation__background"}," "),r.a.createElement("div",{className:"navigation__nav"},r.a.createElement("ul",{className:"navigation__nav__list"},r.a.createElement("li",{className:"navigation__nav__list__item"},r.a.createElement(l.b,{onClick:e.toggleDisplayNavList,to:"/",className:"navigation__nav__list__item__link text-4"},"Home")),r.a.createElement("li",{className:"navigation__nav__list__item"},r.a.createElement(l.b,{onClick:e.toggleDisplayNavList,to:"/about-us",className:"navigation__nav__list__item__link text-4"},"About us")),r.a.createElement("li",{className:"navigation__nav__list__item"},r.a.createElement(l.b,{onClick:e.toggleDisplayNavList,to:"/services-and-solutions",className:"navigation__nav__list__item__link text-4"},"Solutions and services")),r.a.createElement("li",{className:"navigation__nav__list__item"},r.a.createElement(l.b,{onClick:e.toggleDisplayNavList,to:"/products",className:"navigation__nav__list__item__link text-4"},"Products")),r.a.createElement("li",{className:"navigation__nav__list__item"},r.a.createElement(l.b,{onClick:e.toggleDisplayNavList,to:"/testimonials",className:"navigation__nav__list__item__link text-4"},"Testimonials")),r.a.createElement("li",{className:"navigation__nav__list__item"},r.a.createElement(l.b,{onClick:e.toggleDisplayNavList,to:"/contact-us",className:"navigation__nav__list__item__link text-4"},"Contact us"))))));var p=()=>{const[e,t]=Object(n.useState)(!1),a=()=>{t(!e)};return r.a.createElement("div",{className:"navigation"},r.a.createElement("label",{onClick:a,className:"navigation__btn"},r.a.createElement("span",null)),e?r.a.createElement(h,{toggleDisplayNavList:a}):"")};var b=Object(c.f)(()=>r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__offices"},r.a.createElement("div",{className:"footer__offices__office"},r.a.createElement("div",{className:"footer__offices__office__googleMap"},r.a.createElement("iframe",{className:"footer__offices__office__googleMap__map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7998357388406!2d73.01596951442907!3d19.072536287089903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16a8a799c07%3A0x4aea4241a7557ac4!2sSiddharth%20Enterprises!5e0!3m2!1sen!2sin!4v1594566494689!5m2!1sen!2sin",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})),r.a.createElement("div",{className:"footer__offices__office__info "},r.a.createElement("h4",{className:"footer__offices__office__info__location heading-4 heading-4--white "},"Mumbai (Head-office)"),r.a.createElement("p",{className:"footer__offices__office__info__address normalText--white"},"SHOP No. 01, PLOT No. 112, Opp. BOMBAY PAINTS, SECTOR - 23, JANTA MARKET, TURBHE STN RD, TURBHE, NAVI MUMBAI, MAHARASHTRA. 400705"),r.a.createElement("div",{className:"footer__offices__office__info__contact normalText--white"},r.a.createElement("p",null,"+91 8080605001"),r.a.createElement("p",null,"+91 9702327707"),r.a.createElement("p",null,"+91 8356038324")))),r.a.createElement("div",{className:"footer__offices__office"},r.a.createElement("div",{className:"footer__offices__office__info "},r.a.createElement("div",{className:"footer__phone-call-link"}),r.a.createElement("h4",{className:"footer__offices__office__info__location heading-4 heading-4--white "},"Punjab"),r.a.createElement("p",{className:"footer__offices__office__info__address normalText--white"},"1743/5, W. No.- 43, B-14, ISLAM GANJ, LUDHIANA. PUNJAB. 141008"),r.a.createElement("div",{className:"footer__offices__office__info__contact normalText--white"},r.a.createElement("p",null,"+91 8054963957")))))));Object(c.f)(()=>r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container__item1"},"1"),r.a.createElement("div",{className:"container__item2"},"2"),r.a.createElement("div",{className:"container__item3"},"3"),r.a.createElement("div",{className:"container__item4"},"4"),r.a.createElement("div",{className:"container__item5"},"5"),r.a.createElement("div",{className:"container__item6"},"6")));var v=a(25),x=a.n(v);var E=e=>{const[t,a]=Object(n.useState)(),[i,o]=Object(n.useState)(),[l,c]=Object(n.useState)(),[s,m]=Object(n.useState)(),[_,d]=Object(n.useState)();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:async a=>{a.preventDefault(),await x.a.post("https://securbot.netlify.app/.netlify/functions/sendEmail",{name:t,contact:i,email:l,pincode:s,requirement:_}).then(t=>{200==t.status?(e.toggleDisplayForm(),e.toggleDisplaySuccessMessage()):502==t.status&&(e.toggleDisplayErrorMessage(),e.toggleDisplayForm()),console.log(t)},t=>{e.toggleDisplayErrorMessage(),e.toggleDisplayForm()})},className:"container__form"},r.a.createElement("input",{onChange:e=>a(e.target.value),type:"text",placeholder:"Your name!",className:"container__form__input",required:!0}),r.a.createElement("input",{onChange:e=>o(e.target.value),type:"tel",placeholder:"Your 10-digit contact number!",className:"container__form__input",pattern:"[0-9]{10}",required:!0}),r.a.createElement("input",{onChange:e=>c(e.target.value),type:"email",placeholder:"Your contact email!",className:"container__form__input",required:!0}),r.a.createElement("input",{onChange:e=>m(e.target.value),type:"tel",placeholder:"Your 6-digit pincode!",className:"container__form__input",pattern:"[0-9]{6}",required:!0}),r.a.createElement("input",{onChange:e=>d(e.target.value),type:"text-box",placeholder:"Your requirement in short!",className:"container__form__input container__form__input--requirement",required:!0}),r.a.createElement("input",{type:"submit",value:"Submit",className:"container__form__submit-button"})))};var y=e=>{const[t,a]=Object(n.useState)(!1),[i,o]=Object(n.useState)(!1),[l,c]=Object(n.useState)(!0);return r.a.createElement("div",{className:"modal-container"},t?r.a.createElement("div",{className:"modal-container__notice"},r.a.createElement("p",null,"**Our quick response team will contact you within 3 hours.")):"",i?r.a.createElement("div",{className:"modal-container__notice"},r.a.createElement("p",null,"**There was an error while sending your response please try again!")):"",r.a.createElement("label",{onClick:e.toggleDisplayContactUsModal,className:"modal-container__cancel-button"},r.a.createElement("span",null)),l?r.a.createElement(E,{toggleDisplaySuccessMessage:()=>{a(!0)},toggleDisplayErrorMessage:()=>{o(!0)},toggleDisplayForm:()=>{c(!1)}}):"")};var w=Object(c.f)(()=>{const[e,t]=Object(n.useState)(!1),a=()=>{t(!e)};return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__button"},r.a.createElement("button",{onClick:a,className:"home__button__btn btn text-3"},"Get an estimate!")),e?r.a.createElement(y,{toggleDisplayContactUsModal:a}):"")});var k=Object(c.f)(()=>r.a.createElement("div",null,"About"));var N=Object(c.f)(()=>r.a.createElement("div",null,"ContactUs"));var O=Object(c.f)(()=>r.a.createElement("div",null,"Products"));var j=Object(c.f)(()=>r.a.createElement("div",null,"Testimonials")),z=a.p+"b5c46ad136f0b9cb75995caad98aa1cb.png",C=a.p+"1027541c0bccfec7daee6b9f92e26d3d.png",M=a.p+"e45cd08cf873773893a848368e5baa6c.png",S=a.p+"30436dc549f0cc7ebb6da87bd1371b85.png",A=a.p+"c2c8a5ebd1e802f4a78cce250ac1f07c.png";var T=Object(c.f)(()=>r.a.createElement("div",{className:"sscontainer"},r.a.createElement("div",{className:"sscontainer__s"},r.a.createElement("img",{src:z,alt:"ssCommercial",className:"sscontainer__s__img"}),r.a.createElement("div",{className:"sscontainer__s__text"},r.a.createElement("h3",null,"Our commercial CCTV solutions!"),r.a.createElement("p",null,"Keep an eye on your store or office with our commercial CCTV solutions."))),r.a.createElement("div",{className:"sscontainer__s"},r.a.createElement("img",{src:C,alt:"ssResidential",className:"sscontainer__s__img"}),r.a.createElement("div",{className:"sscontainer__s__text"},r.a.createElement("h3",null,"Our residential CCTV solutions!"),r.a.createElement("p",null,"Secure you home and valuable with our state of the art residential CCTV solutions."))),r.a.createElement("div",{className:"sscontainer__s"},r.a.createElement("img",{src:M,alt:"ssAccessControl",className:"sscontainer__s__img"}),r.a.createElement("div",{className:"sscontainer__s__text"},r.a.createElement("h3",null,"Our Access Control System!"),r.a.createElement("p",null,"Keep an eye on all ins and out using our access control system services."))),r.a.createElement("div",{className:"sscontainer__s"},r.a.createElement("img",{src:S,alt:"ssPublicAddress",className:"sscontainer__s__img"}),r.a.createElement("div",{className:"sscontainer__s__text"},r.a.createElement("h3",null,"Our Public Address System!"),r.a.createElement("p",null,"Our portable public address systems are designed to be powerful and meet your sound reinforcement needs on the go."))),r.a.createElement("div",{className:"sscontainer__s"},r.a.createElement("img",{src:A,alt:"ssAMC",className:"sscontainer__s__img"}),r.a.createElement("div",{className:"sscontainer__s__text"},r.a.createElement("h3",null,"Annual Maintenance Contract!"),r.a.createElement("p",null,"We undertake annual maintenance contract for CCTV systems. Under this contract our technicians visits the client as per selected AMC plan As well as our technicians do visit on call basis also.")))));var D=()=>r.a.createElement(l.a,null,r.a.createElement("div",{className:"layout__navbar"},r.a.createElement(p,null)),r.a.createElement("div",{className:"header-logo"},r.a.createElement(m,null)),r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"layout__header-main"},r.a.createElement(u,null)),r.a.createElement("div",{className:"layout__content"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0},r.a.createElement(w,null)),r.a.createElement(c.a,{path:"/about-us"},r.a.createElement(k,null)),r.a.createElement(c.a,{path:"/services-and-solutions"},r.a.createElement(T,null)),r.a.createElement(c.a,{path:"/products"},r.a.createElement(O,null)),r.a.createElement(c.a,{path:"/testimonials"},r.a.createElement(j,null)),r.a.createElement(c.a,{path:"/contact-us"},r.a.createElement(N,null)))),r.a.createElement("div",{className:"layout__footer"},r.a.createElement(b,null))));a(52);o.a.render(r.a.createElement(D,null),document.getElementById("app"))}});