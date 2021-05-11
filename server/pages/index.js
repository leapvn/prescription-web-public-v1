(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_2__);



function Home({
  allLangsData
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      pathname
    } = router;

    if (pathname == '/') {
      router.push('/' + i18next__WEBPACK_IMPORTED_MODULE_2___default().language.substring(0, 2));
    }
  });
  return null;
}
/*
export async function getStaticProps() {
	const allLangsData = getSortedLangsData();
	return {
		props: {
			allLangsData,
		},
	};
}
*/

/***/ }),

/***/ 528:
/***/ (function(module) {

"use strict";
module.exports = require("i18next");;

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(313));
module.exports = __webpack_exports__;

})();