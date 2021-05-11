self["webpackHotUpdate_N_E"]("pages/[lang]",{

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_flags_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flags-select */ "./node_modules/react-flags-select/build/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\admin\\Desktop\\New folder\\prescription-web\\src\\components\\header\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Header = function Header(_ref) {
  _s();

  var language = _ref.language;

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getCountryCodeByLocale(language)),
      selected = _useState[0],
      setSelected = _useState[1];

  function getCountryCodeByLocale(locale) {
    switch (locale) {
      case 'en':
        return 'US';

      case 'vi':
        return 'VN';

      default:
        return 'US';
    }
  }

  function getLocaleByCountryCode(countryCode) {
    switch (countryCode) {
      case 'US':
        return 'en';

      case 'VN':
        return 'vi';

      default:
        return 'en';
    }
  }

  function onSelectLanguage(countryCode) {
    setSelected(countryCode);
    var locale = getLocaleByCountryCode(countryCode);
    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(next_router__WEBPACK_IMPORTED_MODULE_4___default().pathname.replace("[lang]", locale));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "header",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {
      expand: "lg",
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {
        href: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/icons/Logo.png",
          alt: "logo",
          className: "logo-img"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "navbar-title",
          children: i18next__WEBPACK_IMPORTED_MODULE_5__.default.t('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Toggle, {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Collapse, {
        id: "basic-navbar-nav",
        className: "justify-content-end",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {
            href: "/".concat(language, "/privacy-policy"),
            children: i18next__WEBPACK_IMPORTED_MODULE_5__.default.t('menu.privacyPolicy')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {
            href: "/".concat(language, "/terms-of-use"),
            children: i18next__WEBPACK_IMPORTED_MODULE_5__.default.t('menu.termsOfUse')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_flags_select__WEBPACK_IMPORTED_MODULE_3__.default, {
            className: "language-dropdown",
            countries: ['US', 'VN'],
            showSelectedLabel: false,
            showOptionLabel: false,
            selected: selected,
            onSelect: function onSelect(language) {
              return onSelectLanguage(language);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, _this);
};

_s(Header, "jKzQGO5Bg8ibSJPaursASbKmR0c=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJsYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsInVzZVN0YXRlIiwiZ2V0Q291bnRyeUNvZGVCeUxvY2FsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJsb2NhbGUiLCJnZXRMb2NhbGVCeUNvdW50cnlDb2RlIiwiY291bnRyeUNvZGUiLCJvblNlbGVjdExhbmd1YWdlIiwicm91dGVyIiwiaTE4bmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsd0JBQ3pCQyxzRUFBYyxFQURXO0FBQUEsTUFDL0JDLENBRCtCLG1CQUMvQkEsQ0FEK0I7O0FBQUEsa0JBRVBDLCtDQUFRLENBQUNDLHNCQUFzQixDQUFDSixRQUFELENBQXZCLENBRkQ7QUFBQSxNQUVoQ0ssUUFGZ0M7QUFBQSxNQUV0QkMsV0FGc0I7O0FBSXZDLFdBQVNGLHNCQUFULENBQWdDRyxNQUFoQyxFQUF3QztBQUN2QyxZQUFRQSxNQUFSO0FBQ0MsV0FBSyxJQUFMO0FBQ0MsZUFBTyxJQUFQOztBQUNELFdBQUssSUFBTDtBQUNDLGVBQU8sSUFBUDs7QUFDRDtBQUNDLGVBQU8sSUFBUDtBQU5GO0FBUUE7O0FBRUQsV0FBU0Msc0JBQVQsQ0FBZ0NDLFdBQWhDLEVBQTZDO0FBQzVDLFlBQVFBLFdBQVI7QUFDQyxXQUFLLElBQUw7QUFDQyxlQUFPLElBQVA7O0FBQ0QsV0FBSyxJQUFMO0FBQ0MsZUFBTyxJQUFQOztBQUNEO0FBQ0MsZUFBTyxJQUFQO0FBTkY7QUFRQTs7QUFFRCxXQUFTQyxnQkFBVCxDQUEwQkQsV0FBMUIsRUFBdUM7QUFDdENILGVBQVcsQ0FBQ0csV0FBRCxDQUFYO0FBQ0EsUUFBTUYsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsV0FBRCxDQUFyQztBQUNBRSwyREFBQSxDQUFZQSxtRUFBQSxDQUF3QixRQUF4QixFQUFrQ0osTUFBbEMsQ0FBWjtBQUNBOztBQUVELHNCQUNDO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBQSwyQkFDQyw4REFBQyxtREFBRDtBQUFRLFlBQU0sRUFBQyxJQUFmO0FBQW9CLGVBQVMsRUFBQyxXQUE5QjtBQUFBLDhCQUNDLDhEQUFDLHlEQUFEO0FBQWMsWUFBSSxFQUFFLEVBQXBCO0FBQUEsZ0NBQ0M7QUFBSyxhQUFHLEVBQUMsaUJBQVQ7QUFBMkIsYUFBRyxFQUFDLE1BQS9CO0FBQXNDLG1CQUFTLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBLG9CQUFnQ0ssOENBQUEsQ0FBVSxPQUFWO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFLQyw4REFBQywwREFBRDtBQUFlLHlCQUFjO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRCxlQU1DLDhEQUFDLDREQUFEO0FBQWlCLFVBQUUsRUFBQyxrQkFBcEI7QUFBdUMsaUJBQVMsRUFBQyxxQkFBakQ7QUFBQSwrQkFDQyw4REFBQyxnREFBRDtBQUFBLGtDQUNDLDhEQUFDLHFEQUFEO0FBQVUsZ0JBQUksYUFBTVosUUFBTixvQkFBZDtBQUFBLHNCQUNFWSw4Q0FBQSxDQUFVLG9CQUFWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUlDLDhEQUFDLHFEQUFEO0FBQVUsZ0JBQUksYUFBTVosUUFBTixrQkFBZDtBQUFBLHNCQUNFWSw4Q0FBQSxDQUFVLGlCQUFWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRCxlQU9DLDhEQUFDLHVEQUFEO0FBQ0MscUJBQVMsRUFBQyxtQkFEWDtBQUVDLHFCQUFTLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZaO0FBR0MsNkJBQWlCLEVBQUUsS0FIcEI7QUFJQywyQkFBZSxFQUFFLEtBSmxCO0FBS0Msb0JBQVEsRUFBRVAsUUFMWDtBQU1DLG9CQUFRLEVBQUUsa0JBQUNMLFFBQUQ7QUFBQSxxQkFBY1UsZ0JBQWdCLENBQUNWLFFBQUQsQ0FBOUI7QUFBQTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTZCQSxDQTdETTs7R0FBTUQsTTtVQUNFRSxrRTs7O0tBREZGLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xhbmddLjY0ZDU5NjQyZDQ0MTZhYjg5OTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXYgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgUmVhY3RGbGFnc1NlbGVjdCBmcm9tICdyZWFjdC1mbGFncy1zZWxlY3QnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHsgbGFuZ3VhZ2UgfSkgPT4ge1xyXG5cdGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHRjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGdldENvdW50cnlDb2RlQnlMb2NhbGUobGFuZ3VhZ2UpKTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0Q291bnRyeUNvZGVCeUxvY2FsZShsb2NhbGUpIHtcclxuXHRcdHN3aXRjaCAobG9jYWxlKSB7XHJcblx0XHRcdGNhc2UgJ2VuJzpcclxuXHRcdFx0XHRyZXR1cm4gJ1VTJztcclxuXHRcdFx0Y2FzZSAndmknOlxyXG5cdFx0XHRcdHJldHVybiAnVk4nO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiAnVVMnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0TG9jYWxlQnlDb3VudHJ5Q29kZShjb3VudHJ5Q29kZSkge1xyXG5cdFx0c3dpdGNoIChjb3VudHJ5Q29kZSkge1xyXG5cdFx0XHRjYXNlICdVUyc6XHJcblx0XHRcdFx0cmV0dXJuICdlbic7XHJcblx0XHRcdGNhc2UgJ1ZOJzpcclxuXHRcdFx0XHRyZXR1cm4gJ3ZpJztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gJ2VuJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uU2VsZWN0TGFuZ3VhZ2UoY291bnRyeUNvZGUpIHtcclxuXHRcdHNldFNlbGVjdGVkKGNvdW50cnlDb2RlKTtcclxuXHRcdGNvbnN0IGxvY2FsZSA9IGdldExvY2FsZUJ5Q291bnRyeUNvZGUoY291bnRyeUNvZGUpO1xyXG5cdFx0cm91dGVyLnB1c2gocm91dGVyLnBhdGhuYW1lLnJlcGxhY2UoXCJbbGFuZ11cIiwgbG9jYWxlKSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBpZD1cImhlYWRlclwiPlxyXG5cdFx0XHQ8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PE5hdmJhci5CcmFuZCBocmVmPXtcIlwifT5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ljb25zL0xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgLz5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10aXRsZVwiPntpMThuZXh0LnQoJ3RpdGxlJyl9PC9zcGFuPlxyXG5cdFx0XHRcdDwvTmF2YmFyLkJyYW5kPlxyXG5cdFx0XHRcdDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuXHRcdFx0XHQ8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cclxuXHRcdFx0XHRcdDxOYXY+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPXtgLyR7bGFuZ3VhZ2V9L3ByaXZhY3ktcG9saWN5YH0+XHJcblx0XHRcdFx0XHRcdFx0e2kxOG5leHQudCgnbWVudS5wcml2YWN5UG9saWN5Jyl9XHJcblx0XHRcdFx0XHRcdDwvTmF2Lkxpbms+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPXtgLyR7bGFuZ3VhZ2V9L3Rlcm1zLW9mLXVzZWB9PlxyXG5cdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ21lbnUudGVybXNPZlVzZScpfVxyXG5cdFx0XHRcdFx0XHQ8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8UmVhY3RGbGFnc1NlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImxhbmd1YWdlLWRyb3Bkb3duXCJcclxuXHRcdFx0XHRcdFx0XHRjb3VudHJpZXM9e1snVVMnLCAnVk4nXX1cclxuXHRcdFx0XHRcdFx0XHRzaG93U2VsZWN0ZWRMYWJlbD17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0c2hvd09wdGlvbkxhYmVsPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17c2VsZWN0ZWR9XHJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyhsYW5ndWFnZSkgPT4gb25TZWxlY3RMYW5ndWFnZShsYW5ndWFnZSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHQ8L05hdmJhci5Db2xsYXBzZT5cclxuXHRcdFx0PC9OYXZiYXI+XHJcblx0XHQ8L2RpdiA+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==