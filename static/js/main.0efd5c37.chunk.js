(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(36)},,,,,,,,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),m=t(10),c=t.n(m),i=t(3),r=t(5);t(19),t(21);var s=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],m=a[1],c=Object(n.useState)(!0),s=Object(i.a)(c,2),o=(s[0],s[1]),g=function(){return m(!1)},p=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(n.useEffect)(function(){p()},[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(r.b,{to:"/",className:"navbar-logo",onClick:g},"0xprey1 ",l.a.createElement("i",{class:"fa-solid fa-frog"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return m(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"na-item"},l.a.createElement(r.b,{to:"/",classname:"nav-links",onClick:g},"Home")),l.a.createElement("li",{className:"na-item"},l.a.createElement(r.b,{to:"/AboutMe",classname:"nav-links",onClick:g},"About Me")),l.a.createElement("li",{className:"na-item"},l.a.createElement(r.b,{to:"/WSPGallery",classname:"nav-links",onClick:g},"WSPGallery"))))))};t(8);var o=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(r.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"meme",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};t(24);var g=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Categoriez "),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(o,{img:!0,src:"./public/images/img-9-1.jpg",text:"Doge",label:"Memes",path:"WSPGallery"}),l.a.createElement(o,{src:"/images/wonder.jpg",text:"Wonderland",label:"Memes",path:"/Wonderland"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(o,{src:"/images/bean-logo.jpeg",text:"Beanstalk",label:"Memes",path:"/Beanstalk"}),l.a.createElement(o,{src:"/images/zip.jpeg",text:"Zip Swap",label:"Memes",path:"/services"}),l.a.createElement(o,{src:"/images/drops.jpeg",text:"Drops DAO",label:"Memes",path:"/services"}),l.a.createElement(o,{src:"/images/pepe.jpeg",text:"Misc",label:"Memes",path:"/services"})))))};t(26);var p=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"PORTFOLIO"),l.a.createElement("p",null,"A collection of my Memes, Writing and Art and mike"))},u=(t(28),t(7)),d=t(6),E=function(e){var a=e.galleryImages,t=Object(n.useState)(0),m=Object(i.a)(t,2),c=m[0],r=m[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),g=o[0],p=o[1];return l.a.createElement("div",null,g&&l.a.createElement("div",{className:"sliderWrap"},l.a.createElement(u.a,{icon:d.c,className:"btnClose",onClick:function(){p(!1)}}),l.a.createElement(u.a,{icon:d.a,className:"btnPrev",onClick:function(){r(0===c?a.length-1:c-1)}}),l.a.createElement(u.a,{icon:d.b,className:"btnNext",onClick:function(){c+1===a.length?r(0):r(c+1)}}),l.a.createElement("div",{className:"fullScreenImage"},l.a.createElement("img",{src:a[c].img,alt:""}))),l.a.createElement("div",{className:"galleryWrap"},a&&a.map(function(e,a){return l.a.createElement("div",{className:"single",key:a,onClick:function(){return function(e){r(e),p(!0)}(a)}},l.a.createElement("img",{src:e.img,alt:""}))})))};var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement(E,null))},f=t(0);function j(){return l.a.createElement("h1",{className:"services"},"Services ")}function v(){return l.a.createElement("h1",{className:"sign-up"},"SIGN UP ")}function N(){return l.a.createElement("h1",{className:"products"},"PRODUCTS ")}t(32);var _=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"}),l.a.createElement("div",{class:"footer-link-items"}))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(r.b,{to:"/AboutMe",className:"social-logo"},"Opti ",l.a.createElement("i",{class:"fa-solid fa-user"}))),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{className:"social-icon-link telegram",href:"https://t.me/Oxprey",target:"_blank","aria-label":"Mirror"},l.a.createElement("i",{className:"fab fa-telegram"})),l.a.createElement("a",{className:"social-icon-link twitter",href:"https://twitter.com/0xprey_",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{className:"social-icon-link youtube",href:"https://github.com/Tommy-Pickles",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fa-brands fa-github"})),l.a.createElement("a",{className:"social-icon-link discord",href:"https://discord.com/users/391094115439214604",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fa-brands fa-discord"}))))))};t(34);function h(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"AboutMe"},"About Me "),l.a.createElement("div",{className:"body-container"},l.a.createElement("div",{className:"body-wrapper"},l.a.createElement("h2",{className:"aboutMe-body"},"Whats up?"),l.a.createElement("p",{className:"body-text"},"lorem fcn dcin 3piodj xpo3jd cpi3jd xpiojd xpoij 3dpcoj 3pxoj pojwdc p"))))}var k=function(e){var a=e.galleryImagesW,t=Object(n.useState)(0),m=Object(i.a)(t,2),c=m[0],r=m[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),g=o[0],p=o[1];return l.a.createElement("div",null,g&&l.a.createElement("div",{className:"sliderWrap"},l.a.createElement(u.a,{icon:d.c,className:"btnClose",onClick:function(){p(!1)}}),l.a.createElement(u.a,{icon:d.a,className:"btnPrev",onClick:function(){r(0===c?a.length-1:c-1)}}),l.a.createElement(u.a,{icon:d.b,className:"btnNext",onClick:function(){c+1===a.length?r(0):r(c+1)}}),l.a.createElement("div",{className:"fullScreenImage"},l.a.createElement("img",{src:a[c].img,alt:""}))),l.a.createElement("div",{className:"galleryWrap"},a&&a.map(function(e,a){return l.a.createElement("div",{className:"single",key:a,onClick:function(){return function(e){r(e),p(!0)}(a)}},l.a.createElement("img",{src:e.img,alt:""}))})))},x=function(e){var a=e.galleryImagesB,t=Object(n.useState)(0),m=Object(i.a)(t,2),c=m[0],r=m[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),g=o[0],p=o[1];return l.a.createElement("div",null,g&&l.a.createElement("div",{className:"sliderWrap"},l.a.createElement(u.a,{icon:d.c,className:"btnClose",onClick:function(){p(!1)}}),l.a.createElement(u.a,{icon:d.a,className:"btnPrev",onClick:function(){r(0===c?a.length-1:c-1)}}),l.a.createElement(u.a,{icon:d.b,className:"btnNext",onClick:function(){c+1===a.length?r(0):r(c+1)}}),l.a.createElement("div",{className:"fullScreenImage"},l.a.createElement("img",{src:a[c].img,alt:""}))),l.a.createElement("div",{className:"galleryWrap"},a&&a.map(function(e,a){return l.a.createElement("div",{className:"single",key:a,onClick:function(){return function(e){r(e),p(!0)}(a)}},l.a.createElement("img",{src:e.img,alt:""}))})))};var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement(s,null),l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",element:l.a.createElement(b,null)}),l.a.createElement(f.a,{path:"/services",element:l.a.createElement(j,null)}),l.a.createElement(f.a,{path:"/AboutMe",element:l.a.createElement(h,null)}),l.a.createElement(f.a,{path:"/products",element:l.a.createElement(N,null)}),l.a.createElement(f.a,{path:"/sign-up",element:l.a.createElement(v,null)}),l.a.createElement(f.a,{path:"/Footer",element:l.a.createElement(_,null)}),l.a.createElement(f.a,{path:"/WSPGallery",element:l.a.createElement(E,{galleryImages:[{img:"/images/doge-biden-mintspixel.jpg"},{img:"/images/Meme_DOGE go brrr.jpg"},{img:"/images/doge-pepe-farmer-pixels.jpg"},{img:"/images/doge-unbothered-text.jpg"},{img:"/images/man_holding_DOGE_sign.jpg"},{img:"/images/Doge_drake.jpg"},{img:"/images/doe-pokemon-memes-3.jpg"},{img:"/images/doge-biden-mintspixel.jpg"},{img:"/images/Meme_DOGE go brrr.jpg"},{img:"/images/doge-pepe-farmer-pixels.jpg"},{img:"/images/doge-unbothered-text.jpg"},{img:"/images/man_holding_DOGE_sign.jpg"},{img:"/images/Doge_drake.jpg"},{img:"/images/doe-pokemon-memes-3.jpg"}]})}),l.a.createElement(f.a,{path:"/Wonderland",element:l.a.createElement(k,{galleryImagesW:[{img:"/images/doge-biden-mintspixel.jpg"},{img:"/images/Meme_DOGE go brrr.jpg"},{img:"/images/doge-pepe-farmer-pixels.jpg"},{img:"/images/doge-unbothered-text.jpg"},{img:"/images/man_holding_DOGE_sign.jpg"},{img:"/images/Doge_drake.jpg"},{img:"/images/doe-pokemon-memes-3.jpg"},{img:"/images/doge-biden-mintspixel.jpg"},{img:"/images/Meme_DOGE go brrr.jpg"},{img:"/images/doge-pepe-farmer-pixels.jpg"},{img:"/images/doge-unbothered-text.jpg"},{img:"/images/man_holding_DOGE_sign.jpg"},{img:"/images/Doge_drake.jpg"},{img:"/images/doe-pokemon-memes-3.jpg"}]})}),l.a.createElement(f.a,{path:"/Beanstalk",element:l.a.createElement(x,{galleryImagesB:[{img:"/images/doge-biden-mintspixel.jpg"},{img:"/images/Meme_DOGE go brrr.jpg"},{img:"/images/doge-pepe-farmer-pixels.jpg"},{img:"/images/doge-unbothered-text.jpg"},{img:"/images/man_holding_DOGE_sign.jpg"},{img:"/images/Doge_drake.jpg"},{img:"/images/doe-pokemon-memes-3.jpg"},{img:"/images/doge-biden-mintspixel.jpg"},{img:"/images/Meme_DOGE go brrr.jpg"},{img:"/images/doge-pepe-farmer-pixels.jpg"},{img:"/images/doge-unbothered-text.jpg"},{img:"/images/man_holding_DOGE_sign.jpg"},{img:"/images/Doge_drake.jpg"},{img:"/images/doe-pokemon-memes-3.jpg"}]})})),l.a.createElement(_,null)))};c.a.render(l.a.createElement(O,null),document.getElementById("root"))}],[[11,2,1]]]);
//# sourceMappingURL=main.0efd5c37.chunk.js.map