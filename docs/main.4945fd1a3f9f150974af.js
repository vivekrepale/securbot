!function(e){function a(a){for(var n,i,s=a[0],o=a[1],c=a[2],m=0,u=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&u.push(l[i][0]),l[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(_&&_(a);u.length;)u.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,s=1;s<t.length;s++){var o=t[s];0!==l[o]&&(n=!1)}n&&(r.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},l={0:0},r=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var _=o;r.push([33,1]),t()}({25:function(e,a,t){var n=t(26),l=t(27);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1};n(l,r);e.exports=l.locals||{}},27:function(e,a,t){var n=t(28),l=t(29),r=t(30),i=t(31),s=t(32);(a=n(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;1,300&display=swap);"]);var o=l(r),c=l(i),_=l(s);a.push([e.i,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%}body{box-sizing:border-box}@font-face{font-family:"securbotFont";src:url('+o+')}@font-face{font-family:"seFont";src:url('+c+')}.body{font-family:"Lato", sans-serif;font-size:2rem;font-weight:400}.layout{display:grid;grid-template-rows:50vh min-content min-content min-content min-content;grid-template-columns:[full-start] 1fr [center-start] repeat(8, [col-start] minmax(min-content, 12rem) [col-end]) [center-end] 1fr [full-end]}.layout__header-main{grid-row:1 / 2;grid-column:full-start / full-end}.layout__navbar{grid-row:2 / 3;grid-column:full-start / full-end}.layout__content{grid-row:3 / 4;grid-column:full-start / full-end}.layout__footer{grid-row:4 / 5;grid-column:full-start / full-end;background-color:#313052}.header{height:100%;background-image:linear-gradient(to right, rgba(255,246,227,0.8), rgba(255,246,227,0.8), rgba(49,48,82,0.5), rgba(49,48,82,0.87)),url('+_+');background-size:cover;position:relative}.header__title{position:absolute;top:40%;left:50%;transform:translate(-120%, -50%)}.header__title__main{color:black;font-family:"securbotFont",san-serif;font-size:5rem;display:block}.header__title__main__capital{color:red}.header__title__sub{color:black;font-family:"seFont",san-serif;font-size:4.1rem}.header__title__sub__capital{color:red}.header__sub-title{font-family:"Lato" san-serif}.nav__nav-list{display:flex;list-style:none}.nav__nav-list__nav-item{flex-grow:1;background-color:#313052;padding:1.5rem}.nav__nav-list__nav-item:hover{background-color:#fff6e3}.nav__nav-list__nav-item:hover .nav__nav-list__nav-item__nav-link{color:#313052}.nav__nav-list__nav-item__nav-link:link,.nav__nav-list__nav-item__nav-link:visited{font-size:2.2rem;text-decoration:none;color:#fff6e3;font-weight:300;background-size:100%;list-style-type:none}\n',""]),e.exports=a},30:function(e,a,t){"use strict";t.r(a),a.default=t.p+"19ab71aecfbca7c196690c12aaba831d.ttf"},31:function(e,a,t){"use strict";t.r(a),a.default=t.p+"3874b5bcd1f83390486bbb176a1841f0.ttf"},32:function(e,a,t){"use strict";t.r(a),a.default=t.p+"758fce277fc3c81a04ffc971d2a10047.jpg"},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),i=t.n(r),s=t(3),o=t(1);var c=()=>l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__title"},l.a.createElement("h1",null,l.a.createElement("span",{className:"header__title__main"},l.a.createElement("span",{className:"header__title__sub__capital"},"S"),"ecur",l.a.createElement("span",{className:"header__title__sub__capital"},"B"),"ot"),l.a.createElement("span",{className:"header__title__sub"},l.a.createElement("span",{className:"header__title__sub__capital"},"S"),"iddharth"," ",l.a.createElement("span",{className:"header__title__sub__capital"},"E"),"nterprises")),l.a.createElement("h2",{className:"header__sub-title"},"for all your security needs...")));var _=Object(o.f)(()=>l.a.createElement("footer",{className:"footer"},l.a.createElement("h5",null,"Developed by: Vivek Repale")));var m=()=>l.a.createElement("div",{className:"nav"},l.a.createElement("ul",{className:"nav__nav-list"},l.a.createElement("li",{className:"nav__nav-list__nav-item"},l.a.createElement(s.b,{to:"/",className:"nav__nav-list__nav-item__nav-link"},"Home")),l.a.createElement("li",{className:"nav__nav-list__nav-item"},l.a.createElement(s.b,{to:"/about-us",className:"nav__nav-list__nav-item__nav-link"},"About us")),l.a.createElement("li",{className:"nav__nav-list__nav-item"},l.a.createElement(s.b,{to:"/services-and-solutions",className:"nav__nav-list__nav-item__nav-link"},"Solutions and services")),l.a.createElement("li",{className:"nav__nav-list__nav-item"},l.a.createElement(s.b,{to:"/products",className:"nav__nav-list__nav-item__nav-link"},"Products")),l.a.createElement("li",{className:"nav__nav-list__nav-item"},l.a.createElement(s.b,{to:"/testimonials",className:"nav__nav-list__nav-item__nav-link"},"Testimonials")),l.a.createElement("li",{className:"nav__nav-list__nav-item"},l.a.createElement(s.b,{to:"/contact-us",className:"nav__nav-list__nav-item__nav-link"},"Contact us"))));var u=Object(o.f)(()=>l.a.createElement("div",null,"Home"));var v=Object(o.f)(()=>l.a.createElement("div",null,"About"));var f=Object(o.f)(()=>l.a.createElement("div",null,"ContactUs"));var d=Object(o.f)(()=>l.a.createElement("div",null,"Products"));var p=Object(o.f)(()=>l.a.createElement("div",null,"Testimonials"));var b=Object(o.f)(()=>l.a.createElement("div",null,"S_and_S"));var h=()=>l.a.createElement(s.a,null,l.a.createElement("div",{className:"layout"},l.a.createElement("div",{className:"layout__navbar"},l.a.createElement(m,null)),l.a.createElement("div",{className:"layout__header-main"},l.a.createElement(c,null)),l.a.createElement("div",{className:"layout__content"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0},l.a.createElement(u,null)),l.a.createElement(o.a,{path:"/about-us"},l.a.createElement(v,null)),l.a.createElement(o.a,{path:"/services-and-solutions"},l.a.createElement(b,null)),l.a.createElement(o.a,{path:"/products"},l.a.createElement(d,null)),l.a.createElement(o.a,{path:"/testimonials"},l.a.createElement(p,null)),l.a.createElement(o.a,{path:"/contact-us"},l.a.createElement(f,null)))),l.a.createElement("div",{className:"layout__footer"},l.a.createElement(_,null))));t(25);i.a.render(l.a.createElement(h,null),document.getElementById("app"))}});