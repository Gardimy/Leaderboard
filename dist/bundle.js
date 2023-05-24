(()=>{"use strict";var n={272:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),c=e.n(a)()(o());c.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\n.header1 {\r\n  padding: 15px;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 40px;\r\n  padding: 15px;\r\n}\r\n\r\n.title1 {\r\n  margin-left: 160px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.title {\r\n  font-size: 50px;\r\n  font-weight: 700;\r\n  margin-left: 250px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  width: 100%;\r\n  gap: 95px;\r\n}\r\n\r\n.work {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.recent {\r\n  padding: 6px 0;\r\n  font-size: 35px;\r\n}\r\n\r\n.refresh,\r\n.submit {\r\n  background-color: transparent;\r\n  border: 2px solid black;\r\n  padding: 3px 13px;\r\n  font-weight: 600;\r\n  transition: all 100ms;\r\n}\r\n\r\n.refresh:hover {\r\n  background-color: skyblue;\r\n}\r\n\r\n.table_container {\r\n  width: 100%;\r\n  border: 2px solid black;\r\n  border-radius: 2px;\r\n}\r\n\r\n.table_container tr:nth-child(even) {\r\n  background-color: grey;\r\n}\r\n\r\n.table_container tr:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.point {\r\n  font-weight: 800;\r\n  margin-left: 10px;\r\n}\r\n\r\n.Formx {\r\n  margin-top: 27px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  margin-top: 25px;\r\n  gap: 20px;\r\n}\r\n\r\ninput {\r\n  padding: 5px 10px;\r\n  border: 2px solid black;\r\n  border-radius: 2px;\r\n}\r\n\r\ninput::placeholder {\r\n  color: black;\r\n  font-weight: 600;\r\n}\r\n\r\n.submit {\r\n  align-self: flex-end;\r\n}\r\n\r\n.submit:hover {\r\n  background-color: skyblue;\r\n}\r\n",""]);const i=c},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],l=t.base?s[0]+t.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=i,r.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);r[i].references--}for(var s=t(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),c=e.n(a),i=e(565),s=e.n(i),l=e(216),d=e.n(l),u=e(589),p=e.n(u),f=e(272),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h="https://us-central1-js-capstone-backend.cloudfunctions.net/api/",g=document.querySelector(".refresh"),v=document.querySelector(".form"),y=document.querySelector("#Inputname"),x=document.querySelector("#Inputscore"),b=document.querySelector(".table_container");let w=null;const k=async()=>{try{const n=await fetch(`${h}/games/${w}/scores/`);if(n.ok){const r=await n.json();S(r)}else console.log("Failed to fetch scores")}catch(n){console.log("Error:",n)}},S=n=>{b.innerHTML="",n.forEach((n=>{const r=document.createElement("tr"),e=document.createElement("td");e.textContent=`${n.name}: ${n.score}`,r.appendChild(e),b.appendChild(r)}))};g.addEventListener("click",k),v.addEventListener("submit",(async n=>{n.preventDefault();const r=y.value,e=parseInt(x.value);if(r&&e)try{(await fetch(`${h}/games/${w}/scores/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,score:e})})).ok?(console.log("Score submitted"),y.value="",x.value="",k()):console.log("Failed to submit score")}catch(n){console.log("Error:",n)}else console.log("Please enter a name and score")})),(async()=>{try{const n=await fetch(`${h}/games/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Your Game Name"})});if(n.ok){const r=await n.json();w=r.id,console.log("Game created. ID:",w)}else console.log("Failed to create game")}catch(n){console.log("Error:",n)}})()})()})();