(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3367:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))};var o,r=(o=n(7294))&&o.__esModule?o:{default:o},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,i=e.hasQuery,a=void 0!==i&&i;return n||r&&a}},4287:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},7947:function(e,t,n){"use strict";var o=n(1682);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(i=n(617))&&i.__esModule?i:{default:i},s=n(3367),u=n(4287),l=n(7845);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function g(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var i=!0,a=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){a=!0;var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var h=r.props[l],d=o[l]||new Set;"name"===l&&a||!d.has(h)?(d.add(h),o[l]=d):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}function m(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),o=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:g,headManager:o,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},617:function(e,t,n){"use strict";var o=n(3115),r=n(2553),i=n(2012),a=(n(450),n(9807)),c=n(7690),s=n(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),h=function(e){a(n,e);var t=u(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(o(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=h},6966:function(e,t,n){"use strict";n.d(t,{M:function(){return o},X:function(){return r}});var o=["en","vi"],r="en"},3416:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var o=n(6265),r=n(5893);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var a=n(7902),c=n(6610),s=n(5991),u=[],l=u.forEach,h=u.slice;function d(e){return l.call(h.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}var p=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,f=function(e,t,n){var o=n||{};o.path=o.path||"/";var r=e+"="+encodeURIComponent(t);if(o.maxAge>0){var i=o.maxAge-0;if(isNaN(i))throw new Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(i)}if(o.domain){if(!p.test(o.domain))throw new TypeError("option domain is invalid");r+="; Domain="+o.domain}if(o.path){if(!p.test(o.path))throw new TypeError("option path is invalid");r+="; Path="+o.path}if(o.expires){if("function"!==typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");r+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(r+="; HttpOnly"),o.secure&&(r+="; Secure"),o.sameSite)switch("string"===typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},g=function(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*n*1e3)),o&&(r.domain=o),document.cookie=f(e,encodeURIComponent(t),r)},m=function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},b={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!==typeof document){var n=m(e.lookupCookie);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!==typeof document&&g(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},v={name:"querystring",lookup:function(e){var t;if("undefined"!==typeof window)for(var n=window.location.search.substring(1).split("&"),o=0;o<n.length;o++){var r=n[o].indexOf("=");if(r>0)n[o].substring(0,r)===e.lookupQuerystring&&(t=n[o].substring(r+1))}return t}},y=null,k=function(){if(null!==y)return y;try{y="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(t){y=!1}return y},w={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&k()){var n=window.localStorage.getItem(e.lookupLocalStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&k()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},S=null,x=function(){if(null!==S)return S;try{S="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(t){S=!1}return S},O={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&x()){var n=window.sessionStorage.getItem(e.lookupSessionStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&x()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},P={name:"navigator",lookup:function(e){var t=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},j={name:"htmlTag",lookup:function(e){var t,n=e.htmlTag||("undefined"!==typeof document?document.documentElement:null);return n&&"function"===typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},T={name:"path",lookup:function(e){var t;if("undefined"!==typeof window){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof n[e.lookupFromPathIndex])return;t=n[e.lookupFromPathIndex].replace("/","")}else t=n[0].replace("/","")}return t}},M={name:"subdomain",lookup:function(e){var t;if("undefined"!==typeof window){var n=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);n instanceof Array&&(t="number"===typeof e.lookupFromSubdomainIndex?n[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):n[0].replace("http://","").replace("https://","").replace(".",""))}return t}};var C=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,c.Z)(this,e),this.type="languageDetector",this.detectors={},this.init(t,n)}return(0,s.Z)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=d(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(b),this.addDetector(v),this.addDetector(w),this.addDetector(O),this.addDetector(P),this.addDetector(j),this.addDetector(T),this.addDetector(M)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var n=[];return e.forEach((function(e){if(t.detectors[e]){var o=t.detectors[e].lookup(t.options);o&&"string"===typeof o&&(o=[o]),o&&(n=n.concat(o))}})),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var n=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((function(t){n.detectors[t]&&n.detectors[t].cacheUserLanguage(e,n.options)})))}}]),e}();C.type="languageDetector";var _=C,E=n(6966),D=Object.assign.apply(Object,[{}].concat(function(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(Object.keys(E.M).map((function(e){return(0,o.Z)({},E.M[e],{translations:n(3852)("./"+E.M[e]+"/translation.json")})})))));a.Z.use(_).init({detection:{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],lookupCookie:"lng",lookupLocalStorage:"lng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieOptions:{path:"/",sameSite:"strict"}},fallbackLng:E.X,resources:D,ns:["translations"],defaultNS:"translations",returnObjects:!0,debug:!1,interpolation:{escapeValue:!1},react:{wait:!0}});var H=n(9008);n(1582),n(31),n(9540);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.Component,n=e.pageProps;return a.Z.changeLanguage(n.language),(0,r.jsxs)("div",{children:[(0,r.jsxs)(H.default,{children:[(0,r.jsx)("title",{children:a.Z.t("appTitle")}),(0,r.jsx)("meta",{name:"description",content:"Preminder - Medication Reminder & Prescription Tracking"}),(0,r.jsx)("meta",{name:"google",content:"notranslate"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"".concat("","/icons/Logo.png")})]}),(0,r.jsx)(t,N({},n))]})}},8333:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3416)}])},1582:function(){},31:function(){},9540:function(){},9008:function(e,t,n){e.exports=n(7947)},8164:function(e,t,n){var o=n(4360);e.exports=function(e){if(Array.isArray(e))return o(e)}},450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9828:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:function(e,t,n){var o=n(1914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7690:function(e,t,n){var o=n(7917),r=n(450);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},3115:function(e,t,n){var o=n(8164),r=n(7381),i=n(3585),a=n(5725);e.exports=function(e){return o(e)||r(e)||i(e)||a()}},8814:function(e){"use strict";e.exports=JSON.parse('{"lang":"en","appTitle":"Preminder - Medication Reminder & Prescription Tracking","title":"Preminder","browsehappy":"You are using an <strong>outdated</strong> browser. Please <a href=\\"http://browsehappy.com/?locale=en\\">upgrade your browser</a> to improve your experience.","menu":{"home":"Home","privacyPolicy":"Privacy Policy","termsOfUse":"Terms of Use","language":"Language"},"footer":{"date":"Mon - Fri: 9:00 - 18:00","addr":"L17-11 floor 17, Vincom Center, 72 Le Thanh Ton, District 1, Ho Chi Minh city.","addr2":"293 Dien Bien Phu, Binh Thanh Disstrict, Ho Chi Minh city.","desc":"Subscribe to get update and information. Don\'t worry, we don\'t send spam.","followus":"Follow us","map":"Map"},"form":{"name":{"label":"Name","placeholder":"Your name"},"email":{"label":"Email","placeholder":"Your email"},"feedback":{"label":"Feedback","placeholder":"Your feedback"}},"messages":{"feedback":{"success":"Your feedback sent!","error":"Your feedback did not send!"},"validate":{"name":{"required":"Your name is required.","minlength":"Your name is required to be at least 5 character.","maxlength":"Your name cannot be longer than 50 characters.","pattern":"Your name is invalid."},"email":{"required":"Your email is required.","invalid":"Your email is invalid.","minlength":"Your email is required to be at least 5 characters.","maxlength":"Your email cannot be longer than 50 characters."},"feedback":{"required":"Your feedback is required.","invalid":"Your feedback is invalid.","minlength":"Your feedback is required to be at least 5 characters.","maxlength":"Your feedback cannot be longer than 50 characters."}}},"home":{"title":"Preminder","subtitle":"Application","maintitle1":"Medication Reminder","maintitle2":"& Prescription Tracking","features":{"title":"Highlight Features","desc":{"feature1":{"title":"Reminder","desc1":"Do you know \u201ctaking the medicine on time \u200bwill get the best result\u201d? Have you ever forgotten to take your medication? Have you ever forgotten to plan a day off to take re-examination?","desc2":"Let\u2019s <b>Preminder</b> reminds you, and now you can take a rest and enjoy the other important things in your life."},"feature2":{"title":"Medication history tracking","desc1":"You\'d like to keep all medication history, how do you do it? Keep all Medical report books, keep all Medical cards, keep all accounts of records online?","desc2":"Let\'s <b>Preminder</b> helps you with the simplest solution."},"feature3":{"title":"Search for medicine information","desc1":"It\'s a good habit to find out medicine information before taking, which you can know the ingredients, side effects or any information related to the medicine you will take.","desc2":"Let\'s <b>Preminder</b> makes it easier."}}},"whyPreminder":{"title":"Why <span style=\'color: #1C9B83;\'>Preminder?</span>","desc":{"reason1":{"title":"Simple design","desc":"With criteria suitable for many users, <b>Preminder</b> is designed to be simple, user-friendly and arranged in the most optimal."},"reason2":{"title":"Variety features","desc":"<b>Preminder</b> has all the essential features for medication tracking, medication reminders and follow-up examination. Easy for personal and family health tracking."},"reason3":{"title":"Constantly updated","desc":"We do try our best to give you the best experience by providing continuous updates based on feedback and comments from Users."}}},"logged":{"message":"You are logged in as user \\"{{username}}\\"."},"question":"If you have any question on JHipster:","link":{"homepage":"JHipster homepage","stackoverflow":"JHipster on Stack Overflow","bugtracker":"JHipster bug tracker","chat":"JHipster public chat room","follow":"follow @jhipster on Twitter"},"images":{"demo-img":"/icons/img1-en.svg","feature-img-1":"/icons/img2-en.svg","feature-img-2":"/icons/img3-en.svg","feature-img-3":"/icons/img4-en.svg"},"like":"If you like JHipster, don\'t forget to give us a star on","github":"GitHub","download":"DOWNLOAD NOW","send":"SEND","inputName":"Your name *:","inputEmail":"Your email *:","inputFeedback":"Your feedback *:","contactUs":{"title":"Contact Us","desc":"We would be more than happy to receive your comments and questions. Please contact us via the form below."}}}')},689:function(e){"use strict";e.exports=JSON.parse('{"lang":"vi","appTitle":"Preminder - Nh\u1eafc Nh\u1edf U\u1ed1ng Thu\u1ed1c & Qu\u1ea3n L\xfd Toa Thu\u1ed1c","title":"Preminder","menu":{"home":"Trang ch\u1ee7","privacyPolicy":"Ch\xednh S\xe1ch B\u1ea3o M\u1eadt","termsOfUse":"\u0110i\u1ec1u Kho\u1ea3n S\u1eed D\u1ee5ng","language":"Ng\xf4n ng\u1eef"},"footer":{"date":"Th\u1ee9 hai - Th\u1ee9 s\xe1u: 9:00 - 18:00","addr":"L17-11 l\u1ea7u 17, Vincom Center, 72 L\xea Th\xe1nh T\xf4n, Q.1, TP.H\u1ed3 Ch\xed Minh.","addr2":"293 \u0110i\u1ec7n Bi\xean Ph\u1ee7, Ph\u01b0\u1eddng 15, Q.B\xecnh Th\u1ea1nh, TP.H\u1ed3 Ch\xed Minh.","desc":"\u0110\u0103ng k\xfd \u0111\u1ec3 nh\u1eadn \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt v\xe0 th\xf4ng tin. \u0110\u1eebng lo l\u1eafng v\u1ec1 vi\u1ec7c ch\xfang t\xf4i s\u1ebd kh\xf4ng g\u1eedi th\u01b0 r\xe1c cho b\u1ea1n!","followus":"V\u1ec1 ch\xfang t\xf4i","map":"B\u1ea3n \u0111\u1ed3"},"form":{"name":{"label":"T\xean c\u1ee7a b\u1ea1n","placeholder":"Nh\u1eadp t\xean c\u1ee7a b\u1ea1n"},"email":{"label":"Email","placeholder":"Nh\u1eadp email c\u1ee7a b\u1ea1n"},"feedback":{"label":"Ph\u1ea3n h\u1ed3i","placeholder":"Nh\u1eadp ph\u1ea3n h\u1ed3i c\u1ee7a b\u1ea1n"}},"messages":{"feedback":{"success":"Ph\u1ea3n h\u1ed3i c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi!","error":"Ph\u1ea3n h\u1ed3i c\u1ee7a b\u1ea1n b\u1ecb g\u1eedi th\u1ea5t b\u1ea1i!"},"validate":{"name":{"required":"B\u1ea1n ph\u1ea3i nh\u1eadp ph\u1ea3n h\u1ed3i.","minlength":"Ph\u1ea3n h\u1ed3i ph\u1ea3i c\xf3 \xedt nh\u1ea5t 5 k\xfd t\u1ef1.","maxlength":"Ph\u1ea3n h\u1ed3i kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 50 k\xfd t\u1ef1."},"email":{"required":"B\u1ea1n ph\u1ea3i nh\u1eadp email.","invalid":"Email b\u1ea1n nh\u1eadp kh\xf4ng h\u1ee3p l\u1ec7.","minlength":"Email ph\u1ea3i c\xf3 \xedt nh\u1ea5t 5 k\xfd t\u1ef1.","maxlength":"Email kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 50 k\xfd t\u1ef1."},"feedback":{"required":"B\u1ea1n ph\u1ea3i nh\u1eadp ph\u1ea3n h\u1ed3i.","minlength":"Ph\u1ea3n h\u1ed3i ph\u1ea3i c\xf3 \xedt nh\u1ea5t 5 k\xfd t\u1ef1.","maxlength":"Ph\u1ea3n h\u1ed3i kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 50 k\xfd t\u1ef1."}}},"home":{"title":"Preminder","subtitle":"\u1ee8ng D\u1ee5ng","maintitle1":"Nh\u1eafc Nh\u1edf U\u1ed1ng Thu\u1ed1c","maintitle2":"& Qu\u1ea3n L\xfd Toa Thu\u1ed1c","features":{"title":"T\xednh N\u0103ng N\u1ed5i B\u1eadt","desc":{"feature1":{"title":"Nh\u1eafc nh\u1edf","desc1":"B\u1ea1n c\xf3 bi\u1ebft \u201cU\u1ed1ng thu\u1ed1c \u0111\xfang l\xfac s\u1ebd c\xf3 t\xe1c d\u1ee5ng t\u1ed1t nh\u1ea5t\u201c? B\u1ea1n t\u1eebng qu\xean u\u1ed1ng thu\u1ed1c theo l\u1eddi d\u1eb7n c\u1ee7a b\xe1c s\u0129? B\u1ea1n t\u1eebng qu\xean l\xean l\u1ecbch ngh\u1ec9 ph\xe9p \u0111\u1ec3 t\xe1i kh\xe1m \u0111\xfang h\u1eb9n?","desc2":"H\xe3y \u0111\u1ec3 <b>Preminder</b> nh\u1eafc b\u1ea1n nh\xe9, v\xe0 b\u1ea1n ch\u1ec9 c\u1ea7n t\u1eadp trung ngh\u1ec9 ng\u01a1i v\xe0 t\u1eadn h\u01b0\u1edfng nh\u1eefng \u0111i\u1ec1u quan tr\u1ecdng kh\xe1c trong cu\u1ed9c s\u1ed1ng."},"feature2":{"title":"L\u01b0u l\u1ea1i l\u1ecbch s\u1eed kh\xe1m b\u1ec7nh","desc1":"N\u1ebfu b\u1ea1n mu\u1ed1n l\u01b0u l\u1ea1i t\u1ea5t c\u1ea3 c\xe1c toa thu\u1ed1c \u0111\xe3 u\u1ed1ng th\xec b\u1ea1n l\xe0m b\u1eb1ng c\xe1ch n\xe0o? Gi\u1eef t\u1ea5t c\u1ea3 c\xe1c s\u1ed5 kh\xe1m b\u1ec7nh, t\u1ea5t c\u1ea3 c\xe1c th\u1ebb kh\xe1m b\u1ec7nh ho\u1eb7c t\xe0i kho\u1ea3n c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c h\u1ed3 s\u01a1 kh\xe1m b\u1ec7nh online c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c b\u1ec7nh vi\u1ec7n \u0111\xe3 t\u1eebng \u0111i?","desc2":"H\xe3y \u0111\u1ec3 <b>Preminder</b> gi\xfap b\u1ea1n theo m\u1ed9t c\xe1ch \u0111\u01a1n gi\u1ea3n nh\u1ea5t."},"feature3":{"title":"T\xecm ki\u1ebfm th\xf4ng tin thu\u1ed1c","desc1":"T\xecm ki\u1ebfm th\xf4ng tin thu\u1ed1c tr\u01b0\u1edbc khi s\u1eed d\u1ee5ng l\xe0 m\u1ed9t th\xf3i quen t\u1ed1t, qua \u0111\xf3 b\u1ea1n c\xf3 th\u1ec3 bi\u1ebft v\u1ec1 th\xe0nh ph\u1ea7n, t\xe1c d\u1ee5ng ph\u1ee5 ho\u1eb7c b\u1ea5t k\u1ef3 th\xf4ng tin n\xe0o li\xean quan \u0111\u1ebfn thu\u1ed1c m\xecnh s\u1ebd u\u1ed1ng.","desc2":"H\xe3y \u0111\u1ec3 <b>Preminder</b> gi\xfap b\u1ea1n l\xe0m vi\u1ec7c n\xe0y d\u1ec5 h\u01a1n."}}},"whyPreminder":{"title":"T\u1ea1i sao b\u1ea1n n\xean l\u1ef1a ch\u1ecdn <span style=\'color: #1C9B83;\'>Preminder?</span>","desc":{"reason1":{"title":"Giao di\u1ec7n \u0111\u01a1n gi\u1ea3n","desc":"V\u1edbi ti\xeau ch\xed ph\xf9 h\u1ee3p v\u1edbi nhi\u1ec1u \u0111\u1ed1i t\u01b0\u1ee3ng ng\u01b0\u1eddi d\xf9ng, giao di\u1ec7n c\u1ee7a <b>Preminder</b> \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf \u0111\u01a1n gi\u1ea3n, th\xe2n thi\u1ec7n v\xe0 \u0111\u01b0\u1ee3c s\u1eafp x\u1ebfp m\u1ed9t c\xe1ch t\u1ed1i \u01b0u."},"reason2":{"title":"T\xednh n\u0103ng \u0111a d\u1ea1ng","desc":"<b>Preminder</b> c\xf3 \u0111\u1ee7 c\xe1c t\xednh n\u0103ng thi\u1ebft y\u1ebfu \u0111\u1ec3 qu\u1ea3n l\xfd toa thu\u1ed1c, nh\u1eafc nh\u1edf d\xf9ng thu\u1ed1c v\xe0 t\xe1i kh\xe1m theo toa thu\u1ed1c c\u1ee7a b\u1ea1n. \u0110\u1ea3m b\u1ea3o cho vi\u1ec7c theo d\xf5i s\u1ee9c kh\u1ecfe c\xe1 nh\xe2n v\xe0 gia \u0111\xecnh b\u1ea1n."},"reason3":{"title":"C\u1eadp nh\u1eadt li\xean t\u1ee5c","desc":"Ch\xfang t\xf4i lu\xf4n c\u1ed1 g\u1eafng \u0111em \u0111\u1ebfn cho b\u1ea1n nh\u1eefng tr\u1ea3i nghi\u1ec7m t\u1ed1t nh\u1ea5t b\u1eb1ng c\xe1ch cung c\u1ea5p c\xe1c b\u1ea3n c\u1eadp nh\u1eadt li\xean t\u1ee5c d\u1ef1a tr\xean c\xe1c ph\u1ea3n h\u1ed3i, \u0111\xf3ng g\xf3p \xfd ki\u1ebfn t\u1eeb ng\u01b0\u1eddi d\xf9ng."}}},"logged":{"message":"B\u1ea1n \u0111ang \u0111\u0103ng nh\u1eadp b\u1eb1ng t\xe0i kho\u1ea3n \\"{{username}}\\"."},"question":"N\u1ebfu b\u1ea1n c\xf3 b\u1ea5t k\u1ef3 c\xe2u h\u1ecfi n\xe0o v\u1ec1 JHipster vui l\xf2ng truy c\u1eadp:","link":{"homepage":"Trang ch\u1ee7 JHipster","stackoverflow":"JHipster tr\xean Stack Overflow","bugtracker":"Theo d\xf5i c\xe1c l\u1ed7i JHipster","chat":"Ph\xf2ng chat c\xf4ng c\u1ed9ng JHipster","follow":"Theo d\xf5i @jhipster tr\xean Twitter"},"images":{"demo-img":"/icons/img1-vi.svg","feature-img-1":"/icons/img2-vi.svg","feature-img-2":"/icons/img3-vi.svg","feature-img-3":"/icons/img4-vi.svg"},"like":"N\u1ebfu b\u1ea1n th\xedch JHipster, \u0111\u1eebng qu\xean cho ch\xfang t\xf4i th\xeam m\u1ed9t ng\xf4i sao tr\xean","github":"GitHub","download":"T\u1ea2I MI\u1ec4N PH\xcd","send":"G\u1eecI TH\xd4NG TIN","inputName":"T\xean c\u1ee7a b\u1ea1n *:","inputEmail":"Email c\u1ee7a b\u1ea1n *:","inputFeedback":"G\xf3p \xfd - Ph\u1ea3n h\u1ed3i *:","contactUs":{"title":"Li\xean h\u1ec7 v\u1edbi ch\xfang t\xf4i","desc":"Ch\xfang t\xf4i r\u1ea5t vui n\u1ebfu nh\u01b0 nh\u1eadn \u0111\u01b0\u1ee3c nh\u1eefng g\xf3p \xfd v\xe0 th\u1eafc m\u1eafc c\u1ee7a b\u1ea1n. H\xe3y li\xean h\u1ec7 v\u1edbi ch\xfang t\xf4i qua m\u1eabu form d\u01b0\u1edbi \u0111\xe2y."}}}')},3852:function(e,t,n){var o={"./en/translation.json":8814,"./vi/translation.json":689};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=3852}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,566,351,418],(function(){return t(8333),t(2441)}));var n=e.O();_N_E=n}]);