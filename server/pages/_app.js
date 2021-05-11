(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ languages; },
/* harmony export */   "X": function() { return /* binding */ defaultLanguage; }
/* harmony export */ });
const languages = ['en', 'vi'];
const defaultLanguage = 'en';

/***/ }),

/***/ 146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(528);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);
;// CONCATENATED MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_namespaceObject = require("i18next-browser-languagedetector");;
var external_i18next_browser_languagedetector_default = /*#__PURE__*/__webpack_require__.n(external_i18next_browser_languagedetector_namespaceObject);
// EXTERNAL MODULE: ./src/i18n/config.js
var config = __webpack_require__(966);
;// CONCATENATED MODULE: ./src/i18n/init.js



const locales = Object.assign({}, ...Object.keys(config/* languages */.M).map(index => {
  return {
    [config/* languages */.M[index]]: {
      translations: __webpack_require__(852)("./" + config/* languages */.M[index] + "/translation.json")
    }
  };
}));
const detection = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  // keys or params to lookup language from
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  // languages to not persist (cookie, localStorage)
  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: {
    path: '/',
    sameSite: 'strict'
  }
};
external_i18next_default().use((external_i18next_browser_languagedetector_default())).init({
  detection: detection,
  fallbackLng: config/* defaultLanguage */.X,
  resources: locales,
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false // not needed for react!!

  },
  react: {
    wait: true
  }
});
/* harmony default export */ var init = ((/* unused pure expression or super */ null && (i18next)));
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const App = function ({
  Component,
  pageProps
}) {
  external_i18next_default().changeLanguage(pageProps.language);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Preminder"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Description for Preminder"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "google",
        content: "notranslate"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/icons/Logo.png"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
};

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 814:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"title":"Preminder","browsehappy":"You are using an <strong>outdated</strong> browser. Please <a href=\\"http://browsehappy.com/?locale=en\\">upgrade your browser</a> to improve your experience.","menu":{"home":"Home","privacyPolicy":"Privacy Policy","termsOfUse":"Terms of Use","language":"Language"},"footer":{"date":"Mon - Fri: 9:00 - 18:00","addr":"L17-11 floor 17, Vincom Center, 72 Le Thanh Ton, District 1, Ho Chi Minh city.","addr2":"293 Dien Bien Phu, Binh Thanh Disstrict, Ho Chi Minh city.","desc":"Subscribe to get update and information. Don\'t worry, we don\'t send spam.","followus":"Follow us","map":"Map"},"form":{"name":{"label":"Name","placeholder":"Your name"},"email":{"label":"Email","placeholder":"Your email"},"feedback":{"label":"Feedback","placeholder":"Your feedback"}},"messages":{"feedback":{"success":"Your feedback sent!","error":"Your feedback did not send!"},"validate":{"name":{"required":"Your name is required.","minlength":"Your name is required to be at least 5 character.","maxlength":"Your name cannot be longer than 50 characters.","pattern":"Your name is invalid."},"email":{"required":"Your email is required.","invalid":"Your email is invalid.","minlength":"Your email is required to be at least 5 characters.","maxlength":"Your email cannot be longer than 50 characters."},"feedback":{"required":"Your feedback is required.","invalid":"Your feedback is invalid.","minlength":"Your feedback is required to be at least 5 characters.","maxlength":"Your feedback cannot be longer than 50 characters."}}},"home":{"title":"Preminder","subtitle":"Application","maintitle1":"Medication Reminder","maintitle2":"& Prescription Tracking","features":{"title":"Highlight Features","desc":{"feature1":{"title":"Reminder","desc1":"Do you know “taking the medicine on time ​will get the best result”? Have you ever forgotten to take your medication? Have you ever forgotten to plan a day off to take re-examination?","desc2":"Let’s <b>Preminder</b> reminds you, and now you can take a rest and enjoy the other important things in your life."},"feature2":{"title":"Medication history tracking","desc1":"You\'d like to keep all medication history, how do you do it? Keep all Medical report books, keep all Medical cards, keep all accounts of records online?","desc2":"Let\'s <b>Preminder</b> helps you with the simplest solution."},"feature3":{"title":"Search for medicine information","desc1":"It\'s a good habit to find out medicine information before taking, which you can know the ingredients, side effects or any information related to the medicine you will take.","desc2":"Let\'s <b>Preminder</b> makes it easier."}}},"whyPreminder":{"title":"Why <span style=\'color: #1C9B83;\'>Preminder?</span>","desc":{"reason1":{"title":"Simple design","desc":"With criteria suitable for many users, <b>Preminder</b> is designed to be simple, user-friendly and arranged in the most optimal."},"reason2":{"title":"Variety features","desc":"<b>Preminder</b> has all the essential features for medication tracking, medication reminders and follow-up examination. Easy for personal and family health tracking."},"reason3":{"title":"Constantly updated","desc":"We do try our best to give you the best experience by providing continuous updates based on feedback and comments from Users."}}},"logged":{"message":"You are logged in as user \\"{{username}}\\"."},"question":"If you have any question on JHipster:","link":{"homepage":"JHipster homepage","stackoverflow":"JHipster on Stack Overflow","bugtracker":"JHipster bug tracker","chat":"JHipster public chat room","follow":"follow @jhipster on Twitter"},"images":{"demo-img":"/icons/demo-img-en.png","feature-img-1":"/icons/feature-img-1-en.png","feature-img-2":"/icons/feature-img-2-en.png","feature-img-3":"/icons/feature-img-3-en.png"},"like":"If you like JHipster, don\'t forget to give us a star on","github":"GitHub","download":"DOWNLOAD NOW","send":"SEND","inputName":"Your name *:","inputEmail":"Your email *:","inputFeedback":"Your feedback *:","contactUs":{"title":"Contact Us","desc":"We would be more than happy to receive your comments and questions. Please contact us via the form below."}}}');

/***/ }),

/***/ 689:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"title":"Preminder","menu":{"home":"Trang chủ","privacyPolicy":"Chính Sách Bảo Mật","termsOfUse":"Điều Khoản Sử Dụng","language":"Ngôn ngữ"},"footer":{"date":"Thứ hai - Thứ sáu: 9:00 - 18:00","addr":"L17-11 lầu 17, Vincom Center, 72 Lê Thánh Tôn, Q.1, TP.Hồ Chí Minh.","addr2":"293 Điện Biên Phủ, Phường 15, Q.Bình Thạnh, TP.Hồ Chí Minh.","desc":"Đăng ký để nhận được cập nhật và thông tin. Đừng lo lắng về việc chúng tôi sẽ không gửi thư rác cho bạn!","followus":"Về chúng tôi","map":"Bản đồ"},"form":{"name":{"label":"Tên của bạn","placeholder":"Nhập tên của bạn"},"email":{"label":"Email","placeholder":"Nhập email của bạn"},"feedback":{"label":"Phản hồi","placeholder":"Nhập phản hồi của bạn"}},"messages":{"feedback":{"success":"Phản hồi của bạn đã được gửi!","error":"Phản hồi của bạn bị gửi thất bại!"},"validate":{"name":{"required":"Bạn phải nhập phản hồi.","minlength":"Phản hồi phải có ít nhất 5 ký tự.","maxlength":"Phản hồi không được vượt quá 50 ký tự."},"email":{"required":"Bạn phải nhập email.","invalid":"Email bạn nhập không hợp lệ.","minlength":"Email phải có ít nhất 5 ký tự.","maxlength":"Email không được vượt quá 50 ký tự."},"feedback":{"required":"Bạn phải nhập phản hồi.","minlength":"Phản hồi phải có ít nhất 5 ký tự.","maxlength":"Phản hồi không được vượt quá 50 ký tự."}}},"home":{"title":"Preminder","subtitle":"Ứng Dụng","maintitle1":"Nhắc Nhở Uống Thuốc","maintitle2":"& Quản Lý Toa Thuốc","features":{"title":"Tính Năng Nổi Bật","desc":{"feature1":{"title":"Nhắc nhở","desc1":"Bạn có biết “Uống thuốc đúng lúc sẽ có tác dụng tốt nhất“? Bạn từng quên uống thuốc theo lời dặn của bác sĩ? Bạn từng quên lên lịch nghỉ phép để tái khám đúng hẹn?","desc2":"Hãy để <b>Preminder</b> nhắc bạn nhé, và bạn chỉ cần tập trung nghỉ ngơi và tận hưởng những điều quan trọng khác trong cuộc sống."},"feature2":{"title":"Lưu lại lịch sử khám bệnh","desc1":"Nếu bạn muốn lưu lại tất cả các toa thuốc đã uống thì bạn làm bằng cách nào? Giữ tất cả các sổ khám bệnh, tất cả các thẻ khám bệnh hoặc tài khoản của tất cả các hồ sơ khám bệnh online của tất cả các bệnh viện đã từng đi?","desc2":"Hãy để <b>Preminder</b> giúp bạn theo một cách đơn giản nhất."},"feature3":{"title":"Tìm kiếm thông tin thuốc","desc1":"Tìm kiếm thông tin thuốc trước khi sử dụng là một thói quen tốt, qua đó bạn có thể biết về thành phần, tác dụng phụ hoặc bất kỳ thông tin nào liên quan đến thuốc mình sẽ uống.","desc2":"Hãy để <b>Preminder</b> giúp bạn làm việc này dễ hơn."}}},"whyPreminder":{"title":"Tại sao bạn nên lựa chọn <span style=\'color: #1C9B83;\'>Preminder?</span>","desc":{"reason1":{"title":"Giao diện đơn giản","desc":"Với tiêu chí phù hợp với nhiều đối tượng người dùng, giao diện của <b>Preminder</b> được thiết kế đơn giản, thân thiện và được sắp xếp một cách tối ưu."},"reason2":{"title":"Tính năng đa dạng","desc":"<b>Preminder</b> có đủ các tính năng thiết yếu để quản lý toa thuốc, nhắc nhở dùng thuốc và tái khám theo toa thuốc của bạn. Đảm bảo cho việc theo dõi sức khỏe cá nhân và gia đình bạn."},"reason3":{"title":"Cập nhật liên tục","desc":"Chúng tôi luôn cố gắng đem đến cho bạn những trải nghiệm tốt nhất bằng cách cung cấp các bản cập nhật liên tục dựa trên các phản hồi, đóng góp ý kiến từ người dùng."}}},"logged":{"message":"Bạn đang đăng nhập bằng tài khoản \\"{{username}}\\"."},"question":"Nếu bạn có bất kỳ câu hỏi nào về JHipster vui lòng truy cập:","link":{"homepage":"Trang chủ JHipster","stackoverflow":"JHipster trên Stack Overflow","bugtracker":"Theo dõi các lỗi JHipster","chat":"Phòng chat công cộng JHipster","follow":"Theo dõi @jhipster trên Twitter"},"images":{"demo-img":"/icons/demo-img-vn.png","feature-img-1":"/icons/feature-img-1-vn.png","feature-img-2":"/icons/feature-img-2-vn.png","feature-img-3":"/icons/feature-img-3-vn.png"},"like":"Nếu bạn thích JHipster, đừng quên cho chúng tôi thêm một ngôi sao trên","github":"GitHub","download":"TẢI MIỄN PHÍ","send":"GỬI THÔNG TIN","inputName":"Tên của bạn *:","inputEmail":"Email của bạn *:","inputFeedback":"Góp ý - Phản hồi *:","contactUs":{"title":"Liên hệ với chúng tôi","desc":"Chúng tôi rất vui nếu như nhận được những góp ý và thắc mắc của bạn. Hãy liên hệ với chúng tôi qua mẫu form dưới đây."}}}');

/***/ }),

/***/ 852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./en/translation.json": 814,
	"./vi/translation.json": 689
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 852;

/***/ }),

/***/ 528:
/***/ (function(module) {

"use strict";
module.exports = require("i18next");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(146));
module.exports = __webpack_exports__;

})();