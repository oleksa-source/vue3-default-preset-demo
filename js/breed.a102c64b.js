(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["breed"],{"017f":function(e,t,r){},"03be":function(e,t,r){},"04d1":function(e,t,r){var n=r("342f"),a=n.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"0f40":function(e,t,r){e.exports=r.p+"img/fav-icon-active.ffb29170.svg"},2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("5a34"),c=r("1d80"),i=r("577e"),o=r("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~i(c(this)).indexOf(i(a(e)),arguments.length>1?arguments[1]:void 0)}})},2649:function(e,t,r){"use strict";r("017f")},2909:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("6b75");function a(e){if(Array.isArray(e))return Object(n["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var i=r("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return a(e)||c(e)||Object(i["a"])(e)||o()}},"44e7":function(e,t,r){var n=r("861d"),a=r("c6b6"),c=r("b622"),i=c("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"4e82":function(e,t,r){"use strict";var n=r("23e7"),a=r("1c0b"),c=r("7b0b"),i=r("50c4"),o=r("577e"),u=r("d039"),s=r("addb"),d=r("a640"),l=r("04d1"),b=r("d998"),f=r("2d00"),v=r("512c"),p=[],g=p.sort,j=u((function(){p.sort(void 0)})),O=u((function(){p.sort(null)})),h=d("sort"),m=!u((function(){if(f)return f<70;if(!(l&&l>3)){if(b)return!0;if(v)return v<603;var e,t,r,n,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)p.push({k:t+n,v:r})}for(p.sort((function(e,t){return t.v-e.v})),n=0;n<p.length;n++)t=p[n].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),w=j||!O||!h||!m,y=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:o(t)>o(r)?1:-1}};n({target:"Array",proto:!0,forced:w},{sort:function(e){void 0!==e&&a(e);var t=c(this);if(m)return void 0===e?g.call(t):g.call(t,e);var r,n,o=[],u=i(t.length);for(n=0;n<u;n++)n in t&&o.push(t[n]);o=s(o,y(e)),r=o.length,n=0;while(n<r)t[n]=o[n++];while(n<u)delete t[n++];return t}})},"505d":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={key:0},c={class:"grid"},i={key:1},o={key:2};function u(e,t,r,u,s,d){var l=Object(n["D"])("BreedFilter"),b=Object(n["D"])("ImageCard");return Object(n["w"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(l),u.isInitialLoading?(Object(n["w"])(),Object(n["f"])("div",a," Loading dogs... ")):Object(n["e"])("",!0),Object(n["g"])("div",c,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["C"])(u.chunkedDogImages,(function(e){return Object(n["w"])(),Object(n["d"])(b,{class:"grid-card",key:e.url,url:e.url,label:e.displayName,isFavourite:u.isFavourite(e),onToggleFavourites:function(t){return u.toggleFavourites(e)}},null,8,["url","label","isFavourite","onToggleFavourites"])})),128))]),u.isLoading?(Object(n["w"])(),Object(n["f"])("div",i," Loading more dogs ")):Object(n["e"])("",!0),u.hasFetchedAll?(Object(n["w"])(),Object(n["f"])("div",o," This is the end ")):Object(n["e"])("",!0)],64)}var s=r("2909"),d=r("1da1"),l=(r("fb6a"),r("99af"),r("caad"),r("2532"),r("96cf"),r("5502")),b=r("9863"),f=r("5618"),v=r("6c02"),p={name:"breed",components:{ImageCard:f["a"],BreedFilter:b["a"]},beforeRouteEnter:function(e,t,r){r(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("dogs/fetchAllBreeds");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setup:function(){var e=Object(l["b"])(),t=Object(v["d"])(),r=Object(n["B"])([]),a=Object(n["B"])(!0),c=Object(n["B"])(!0),i=Object(n["B"])(0),o=Object(n["B"])(),u=20,b=Object(n["b"])((function(){return i.value===o.value&&!c.value})),f=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(window.innerHeight+window.scrollY>=document.body.offsetHeight)){t.next=8;break}if(!b.value&&!c.value){t.next=3;break}return t.abrupt("return");case 3:c.value=!0,n=i.value*u,a=e.state.dogs.breedAllImages.slice(n,n+u),r.value=[].concat(Object(s["a"])(r.value),Object(s["a"])(a)),c.value=!1;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n["u"])((function(){window.addEventListener("scroll",f)})),Object(n["s"])((function(){window.removeEventListener("scroll",f)}));var p=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.assert(t.params.breedId,"route param breedId must be present"),n.next=3,e.dispatch("dogs/fetchAllBreedImages",{breedId:t.params.breedId});case 3:o.value=e.state.dogs.breedAllImages.length,r.value=e.state.dogs.breedAllImages.slice(0,u),a.value=!1,c.value=!1;case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=Object(n["I"])((function(){return t.params.breedId}),(function(){i.value=0,e.commit("dogs/breedAllImages",[]),p()}));return Object(v["c"])((function(){g()})),Object(n["r"])((function(){i.value++,e.commit("dogs/breedAllImages",[]),p()})),{chunkedDogImages:r,toggleFavourites:function(t){return e.dispatch("dogsFavourites/toggleFavourites",{dog:t})},isFavourite:function(t){return e.state.dogsFavourites.favourites.includes(t)},isInitialLoading:a,isLoading:c,hasFetchedAll:b,fetchBreedImages:p}}};r("7303");p.render=u;t["default"]=p},"512c":function(e,t,r){var n=r("342f"),a=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},5618:function(e,t,r){"use strict";var n=r("7a23");Object(n["z"])("data-v-0f968f6d");var a=["src"],c={key:0,class:"image-card-label"},i=Object(n["g"])("div",{class:"foreground-gradient"},null,-1);function o(e,t,r,o,u,s){return Object(n["w"])(),Object(n["f"])("div",{class:"image-card",style:Object(n["p"])(s.backgroundStyles(r.url))},[Object(n["g"])("img",{class:"add-favourite",src:s.favouritesImage(r.isFavourite),onClick:t[0]||(t[0]=function(t){return e.$emit("toggleFavourites",r.url)}),alt:"add to favourite"},null,8,a),r.label?(Object(n["w"])(),Object(n["f"])("div",c,Object(n["F"])(r.label),1)):Object(n["e"])("",!0),i],4)}Object(n["x"])();var u={name:"ImageCard",props:["url","isFavourite","label"],methods:{backgroundStyles:function(e){return{"background-image":"url(".concat(e,")"),"background-repeat":"no-repeat","background-size":"cover","background-position":"center"}},favouritesImage:function(e){return r(e?"0f40":"98f1")}}};r("663f");u.render=o,u.__scopeId="data-v-0f968f6d";t["a"]=u},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"663f":function(e,t,r){"use strict";r("ca37")},7303:function(e,t,r){"use strict";r("03be")},"7db0":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").find,c=r("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c(i)},9863:function(e,t,r){"use strict";r("b64b");var n=r("7a23"),a={class:"breed-filter"},c={class:"breed-filter-top"},i={class:"breed-filter-top__body"},o={key:0,class:"breed-filter-selected-badge"},u=Object(n["g"])("label",{for:"sortByAlphabet",class:"sort-by-alphabet"},"Sort by alphabet",-1),s={key:0},d={class:"char"},l=["onClick"],b=["onClick"];function f(e,t,r,f,v,p){return Object(n["w"])(),Object(n["f"])("div",a,[Object(n["g"])("div",c,[Object(n["g"])("div",i,[Object(n["g"])("span",{onClick:t[0]||(t[0]=function(){return f.toggleExpand&&f.toggleExpand.apply(f,arguments)}),class:Object(n["o"])(["breed-filter-expand-button",{"breed-filter-expand-button--expanded":f.isExpanded}])}," Breeds ",2),f.selectedBreedId?(Object(n["w"])(),Object(n["f"])("span",o,Object(n["F"])(f.normalizedSelectedBreedId(f.selectedBreedId)),1)):Object(n["e"])("",!0)]),Object(n["g"])("div",null,[u,Object(n["K"])(Object(n["g"])("input",{type:"checkbox",name:"sortByAlphabet",id:"sortByAlphabet","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.isAlphabetSort=e})},null,512),[[n["H"],f.isAlphabetSort]])])]),Object(n["g"])("div",{class:Object(n["o"])(["breed-filter-breeds",{"breed-filter-breeds--expanded":f.isExpanded}])},[f.isAlphabetSort?(Object(n["w"])(),Object(n["f"])("div",s,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["C"])(Object.keys(f.groupedAlphabetBreeds),(function(e){return Object(n["w"])(),Object(n["f"])(n["a"],{key:e},[Object(n["g"])("span",d,Object(n["F"])(e),1),(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["C"])(f.groupedAlphabetBreeds[e],(function(e){return Object(n["w"])(),Object(n["f"])("span",{class:"breed-filter-badge",onClick:function(t){return f.selectBreedId(e.id)},key:e.id},Object(n["F"])(e.displayName),9,l)})),128))],64)})),128))])):(Object(n["w"])(!0),Object(n["f"])(n["a"],{key:1},Object(n["C"])(f.breeds,(function(e){return Object(n["w"])(),Object(n["f"])("span",{class:"breed-filter-badge",onClick:function(t){return f.selectBreedId(e.id)},key:e.id},Object(n["F"])(e.displayName),9,b)})),128))],2)])}var v=r("1da1"),p=(r("4e82"),r("fb6a"),r("7db0"),r("96cf"),r("5502")),g=r("6c02"),j={name:"BreedFilter",beforeRouteEnter:function(e,t,r){r(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("dogs/fetchAllBreeds");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setup:function(){var e=Object(p["b"])(),t=Object(g["e"])(),r=Object(g["d"])(),a=Object(n["B"])(!1),c=Object(n["B"])(!1);return{isAlphabetSort:c,groupedAlphabetBreeds:Object(n["b"])((function(){var t=e.state.dogs.breeds.slice().sort((function(e,t){return e.displayName.localeCompare(t.displayName)}));return t.reduce((function(e,t){var r=t.displayName.charAt(0).toUpperCase();return e[r]=e[r]||[],e[r].push(t),e}),Object.create(null))})),selectedBreedId:Object(n["b"])((function(){return r.params.breedId})),breeds:Object(n["b"])((function(){return e.state.dogs.breeds})),selectBreedId:function(e){a.value=!a.value,t.push({name:"breed",params:{breedId:e}})},isExpanded:a,toggleExpand:function(){a.value=!a.value},normalizedSelectedBreedId:function(t){var r,n;return null!==(r=null===(n=e.state.dogs.breeds.find((function(e){return e.id===t})))||void 0===n?void 0:n.displayName)&&void 0!==r?r:t}}}};r("2649");j.render=f;t["a"]=j},"98f1":function(e,t,r){e.exports=r.p+"img/fav-icon.9241f016.svg"},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},ab13:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},addb:function(e,t){var r=Math.floor,n=function(e,t){var i=e.length,o=r(i/2);return i<8?a(e,t):c(n(e.slice(0,o),t),n(e.slice(o),t),t)},a=function(e,t){var r,n,a=e.length,c=1;while(c<a){n=c,r=e[c];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==c++&&(e[n]=r)}return e},c=function(e,t,r){var n=e.length,a=t.length,c=0,i=0,o=[];while(c<n||i<a)c<n&&i<a?o.push(r(e[c],t[i])<=0?e[c++]:t[i++]):o.push(c<n?e[c++]:t[i++]);return o};e.exports=n},ca37:function(e,t,r){},caad:function(e,t,r){"use strict";var n=r("23e7"),a=r("4d64").includes,c=r("44d2");n({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d998:function(e,t,r){var n=r("342f");e.exports=/MSIE|Trident/.test(n)}}]);
//# sourceMappingURL=breed.a102c64b.js.map