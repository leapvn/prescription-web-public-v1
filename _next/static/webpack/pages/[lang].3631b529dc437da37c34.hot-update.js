self["webpackHotUpdate_N_E"]("pages/[lang]",{

/***/ "./src/components/main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/main/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var C_Users_admin_Desktop_New_folder_prescription_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\admin\\Desktop\\New folder\\prescription-web\\src\\components\\main\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_admin_Desktop_New_folder_prescription_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Main = function Main() {
  _s();

  var _errors$name, _errors$email, _errors$feedback;

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default)(),
      t = _useTranslation.t;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isSuccess = _useState[0],
      setIsSuccess = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isError = _useState2[0],
      setIsError = _useState2[1]; // form validation rules


  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required(i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.name.required')).min(5, i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.name.minlength')).max(50, i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.name.maxlength')),
    email: yup__WEBPACK_IMPORTED_MODULE_6__.string().required(i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.email.required')).min(5, i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.email.minlength')).max(50, i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.email.maxlength')).email(i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.email.invalid')),
    feedback: yup__WEBPACK_IMPORTED_MODULE_6__.string().required(i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.feedback.required')).min(5, i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.validate.feedback.minlength'))
  });
  var formOptions = {
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(validationSchema)
  }; // get functions to build form with useForm() hook

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(formOptions),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      reset = _useForm.reset,
      formState = _useForm.formState;

  var errors = formState.errors;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on("routeChangeStart", function (url) {
      // Reset form when the router changed
      reset();
    });
  });

  function onSubmit(data) {
    axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/customer/sendFeedback", data).then(function () {
      setIsSuccess(true);
      reset();
    })["catch"](function (ex) {
      console.error(ex);
      setIsError(true);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    id: "main",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "d-flex align-items-center banner",
      style: {
        minHeight: '800px',
        background: '#c0e8e2'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center my-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "mb-3",
              style: {
                color: '#636363',
                fontSize: '24px',
                lineHeight: '32px'
              },
              children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.subtitle')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              style: {
                fontWeight: 'bold',
                color: 'black',
                lineHeight: '60px'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.maintitle1')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "hightlight-txt",
                children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.maintitle2')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "https://play.google.com/store/apps/details?id=vn.leap.prescription",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: "/icons/get-it-on-google-play-vector.png",
                alt: "Google Play logo",
                height: "70"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-lg-7 col-sm-12 justify-content-center my-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.images.demo-img'),
              alt: "Demo Image",
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "container text-center my-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.title')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
          className: "col-12 my-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "order",
                  children: "01."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  className: "hightlight-txt",
                  children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature1.title')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "col-12",
                    children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature1.desc1')
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "col-12",
                    dangerouslySetInnerHTML: {
                      __html: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature1.desc2')
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "col-lg-6 col-sm-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.images.feature-img-1'),
                alt: "Feature Image 1",
                width: "100%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
          className: "col-12 my-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "col-lg-6 col-sm-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.images.feature-img-2'),
                alt: "Feature Image 2",
                width: "100%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "order",
                  children: "02."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  className: "hightlight-txt",
                  children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature2.title')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "col-12",
                    children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature2.desc1')
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "col-12",
                    dangerouslySetInnerHTML: {
                      __html: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature2.desc2')
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
          className: "col-12 my-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "order",
                  children: "03."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  className: "hightlight-txt",
                  children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature3.title')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "col-12",
                    children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature3.desc1')
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "col-12",
                    dangerouslySetInnerHTML: {
                      __html: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.features.desc.feature3.desc2')
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "col-lg-6 col-sm-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.images.feature-img-3'),
                alt: "Feature Image 3",
                width: "100%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "container text-center my-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "col-12",
        dangerouslySetInnerHTML: {
          __html: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.whyPreminder.title')
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
          className: "col-lg-4 col-sm-12 my-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "p-3",
            style: {
              marginBottom: '55px'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/icons/reason-img-1.png",
              alt: "Reason Image 1",
              width: "80%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: "my-3",
            children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.whyPreminder.desc.reason1.title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.whyPreminder.desc.reason1.desc')
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
          className: "col-lg-4 col-sm-12 my-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "p-3",
            style: {
              marginBottom: '37px'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/icons/reason-img-2.png",
              alt: "Reason Image 2",
              width: "80%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: "my-3",
            children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.whyPreminder.desc.reason2.title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.whyPreminder.desc.reason2.desc')
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
          className: "col-lg-4 col-sm-12 my-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "p-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/icons/reason-img-3.png",
              alt: "Reason Image 3",
              width: "80%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: "my-3",
            children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.whyPreminder.desc.reason3.title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.whyPreminder.desc.reason3.desc')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "container my-5 text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "button",
        className: "btn btn-preminder",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          style: {
            lineHeight: '32px',
            fontSize: '24px',
            fontWeight: 'bold',
            fontStyle: 'normal'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            className: "button",
            href: "https://preminder.page.link/download",
            children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.download')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      style: {
        background: '#F0F0F0'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-lg-6 col-sm-12 d-flex justify-content-center my-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/icons/contact-img.png",
              alt: "contact",
              width: "80%",
              style: {
                borderRadius: '20px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-lg-6 col-sm-12 d-flex justify-content-center my-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "col-12",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.contactUs.title')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 10
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.contactUs.desc')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "col-12 text-center mt-2",
                children: [isSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "alert alert-success",
                  children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.feedback.success')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 270,
                  columnNumber: 11
                }, _this), isError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "alert alert-danger",
                  children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('messages.feedback.error')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "col-12 mt-3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                  onSubmit: handleSubmit(onSubmit),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
                      name: "name",
                      type: "text"
                    }, register('name')), {}, {
                      placeholder: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('form.name.placeholder'),
                      className: "form-control input-control ".concat(errors.name ? 'is-invalid' : '')
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "invalid-feedback",
                      children: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({
                      name: "email",
                      type: "text"
                    }, register('email')), {}, {
                      placeholder: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('form.email.placeholder'),
                      className: "form-control input-control ".concat(errors.email ? 'is-invalid' : '')
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "invalid-feedback",
                      children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 293,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", _objectSpread(_objectSpread({
                      name: "feedback"
                    }, register('feedback')), {}, {
                      placeholder: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('form.feedback.placeholder'),
                      className: "form-control text-area-control ".concat(errors.feedback ? 'is-invalid' : '')
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 305,
                      columnNumber: 12
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "invalid-feedback",
                      children: (_errors$feedback = errors.feedback) === null || _errors$feedback === void 0 ? void 0 : _errors$feedback.message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "text-center mt-3",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      type: "submit",
                      className: "btn btn-preminder",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        style: {
                          lineHeight: '32px',
                          fontSize: '24px',
                          fontWeight: 'bold',
                          fontStyle: 'normal'
                        },
                        children: i18next__WEBPACK_IMPORTED_MODULE_8__.default.t('home.send')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 316,
                        columnNumber: 13
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 315,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, _this);
};

_s(Main, "W5hKOUCBc3J9WdgLBWaRNtzzMh8=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];
});

_c = Main;

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiTWFpbiIsInVzZVRyYW5zbGF0aW9uIiwidCIsInVzZVN0YXRlIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJuYW1lIiwicmVxdWlyZWQiLCJpMThuZXh0IiwibWluIiwibWF4IiwiZW1haWwiLCJmZWVkYmFjayIsImZvcm1PcHRpb25zIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXJsIiwib25TdWJtaXQiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwiZXgiLCJjb25zb2xlIiwiZXJyb3IiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiX19odG1sIiwibWFyZ2luQm90dG9tIiwiZm9udFN0eWxlIiwiYm9yZGVyUmFkaXVzIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBOztBQUFBLHdCQUNyQkMsc0VBQWMsRUFETztBQUFBLE1BQzNCQyxDQUQyQixtQkFDM0JBLENBRDJCOztBQUFBLGtCQUVEQywrQ0FBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRTVCQyxTQUY0QjtBQUFBLE1BRWpCQyxZQUZpQjs7QUFBQSxtQkFHTEYsK0NBQVEsQ0FBQyxLQUFELENBSEg7QUFBQSxNQUc1QkcsT0FI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NkJBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXZCRCxlQWlDQztBQUFLLDZCQUFTLEVBQUMsa0JBQWY7QUFBQSwyQ0FDQztBQUFRLDBCQUFJLEVBQUMsUUFBYjtBQUFzQiwrQkFBUyxFQUFDLG1CQUFoQztBQUFBLDZDQUNDO0FBQ0MsNkJBQUssRUFBRTtBQUNOTixvQ0FBVSxFQUFFLE1BRE47QUFFTkQsa0NBQVEsRUFBRSxNQUZKO0FBR05FLG9DQUFVLEVBQUUsTUFITjtBQUlORyxtQ0FBUyxFQUFFO0FBSkwseUJBRFI7QUFBQSxrQ0FRRWhDLDhDQUFBLENBQVUsV0FBVjtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFqQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxNRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXlSQSxDQXRVTTs7R0FBTWIsSTtVQUNFQyxrRSxFQXFCdUNvQixvRDs7O0tBdEJ6Q3JCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2xhbmddLjM2MzFiNTI5ZGM0MzdkYTM3YzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblx0Y29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdC8vIGZvcm0gdmFsaWRhdGlvbiBydWxlc1xyXG5cdGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG5cdFx0bmFtZTogWXVwLnN0cmluZygpXHJcblx0XHRcdC5yZXF1aXJlZChpMThuZXh0LnQoJ21lc3NhZ2VzLnZhbGlkYXRlLm5hbWUucmVxdWlyZWQnKSlcclxuXHRcdFx0Lm1pbig1LCBpMThuZXh0LnQoJ21lc3NhZ2VzLnZhbGlkYXRlLm5hbWUubWlubGVuZ3RoJykpXHJcblx0XHRcdC5tYXgoNTAsIGkxOG5leHQudCgnbWVzc2FnZXMudmFsaWRhdGUubmFtZS5tYXhsZW5ndGgnKSksXHJcblx0XHRlbWFpbDogWXVwLnN0cmluZygpXHJcblx0XHRcdC5yZXF1aXJlZChpMThuZXh0LnQoJ21lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLnJlcXVpcmVkJykpXHJcblx0XHRcdC5taW4oNSwgaTE4bmV4dC50KCdtZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5taW5sZW5ndGgnKSlcclxuXHRcdFx0Lm1heCg1MCwgaTE4bmV4dC50KCdtZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5tYXhsZW5ndGgnKSlcclxuXHRcdFx0LmVtYWlsKGkxOG5leHQudCgnbWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZCcpKSxcclxuXHRcdGZlZWRiYWNrOiBZdXAuc3RyaW5nKClcclxuXHRcdFx0LnJlcXVpcmVkKGkxOG5leHQudCgnbWVzc2FnZXMudmFsaWRhdGUuZmVlZGJhY2sucmVxdWlyZWQnKSlcclxuXHRcdFx0Lm1pbig1LCBpMThuZXh0LnQoJ21lc3NhZ2VzLnZhbGlkYXRlLmZlZWRiYWNrLm1pbmxlbmd0aCcpKSxcclxuXHR9KTtcclxuXHRjb25zdCBmb3JtT3B0aW9ucyA9IHsgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpIH07XHJcblx0Ly8gZ2V0IGZ1bmN0aW9ucyB0byBidWlsZCBmb3JtIHdpdGggdXNlRm9ybSgpIGhvb2tcclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oZm9ybU9wdGlvbnMpO1xyXG5cdGNvbnN0IHsgZXJyb3JzIH0gPSBmb3JtU3RhdGU7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRyb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCB1cmwgPT4ge1xyXG5cdFx0XHQvLyBSZXNldCBmb3JtIHdoZW4gdGhlIHJvdXRlciBjaGFuZ2VkXHJcblx0XHRcdHJlc2V0KCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gb25TdWJtaXQoZGF0YSkge1xyXG5cdFx0YXhpb3NcclxuXHRcdFx0LnBvc3QoYC9hcGkvY3VzdG9tZXIvc2VuZEZlZWRiYWNrYCwgZGF0YSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNldElzU3VjY2Vzcyh0cnVlKTtcclxuXHRcdFx0XHRyZXNldCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGV4KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihleCk7XHJcblx0XHRcdFx0c2V0SXNFcnJvcih0cnVlKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBpZD1cIm1haW5cIj5cclxuXHRcdFx0PHNlY3Rpb25cclxuXHRcdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJhbm5lclwiXHJcblx0XHRcdFx0c3R5bGU9e3sgbWluSGVpZ2h0OiAnODAwcHgnLCBiYWNrZ3JvdW5kOiAnI2MwZThlMicgfX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1zbS0xMiBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBteS0zXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWItM1wiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzI0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuc3VidGl0bGUnKX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDFcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdibGFjaycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj57aTE4bmV4dC50KCdob21lLm1haW50aXRsZTEnKX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlnaHRsaWdodC10eHRcIj57aTE4bmV4dC50KCdob21lLm1haW50aXRsZTInKX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9dm4ubGVhcC5wcmVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiL2ljb25zL2dldC1pdC1vbi1nb29nbGUtcGxheS12ZWN0b3IucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiR29vZ2xlIFBsYXkgbG9nb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjcwXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtc20tMTIganVzdGlmeS1jb250ZW50LWNlbnRlciBteS0zXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2kxOG5leHQudCgnaG9tZS5pbWFnZXMuZGVtby1pbWcnKX0gYWx0PVwiRGVtbyBJbWFnZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIG15LTVcIj5cclxuXHRcdFx0XHQ8aDI+e2kxOG5leHQudCgnaG9tZS5mZWF0dXJlcy50aXRsZScpfTwvaDI+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbC0xMiBteS0zXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtc20tMTIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyXCI+MDEuPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJoaWdodGxpZ2h0LXR4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMS50aXRsZScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2kxOG5leHQudCgnaG9tZS5mZWF0dXJlcy5kZXNjLmZlYXR1cmUxLmRlc2MxJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X19odG1sOiBpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMS5kZXNjMicpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aTE4bmV4dC50KCdob21lLmltYWdlcy5mZWF0dXJlLWltZy0xJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkZlYXR1cmUgSW1hZ2UgMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbC0xMiBteS0zXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpMThuZXh0LnQoJ2hvbWUuaW1hZ2VzLmZlYXR1cmUtaW1nLTInKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiRmVhdHVyZSBJbWFnZSAyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtc20tMTIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyXCI+MDIuPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJoaWdodGxpZ2h0LXR4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMi50aXRsZScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2kxOG5leHQudCgnaG9tZS5mZWF0dXJlcy5kZXNjLmZlYXR1cmUyLmRlc2MxJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X19odG1sOiBpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMi5kZXNjMicpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbC0xMiBteS0zXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtc20tMTIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyXCI+MDMuPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJoaWdodGxpZ2h0LXR4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMy50aXRsZScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2kxOG5leHQudCgnaG9tZS5mZWF0dXJlcy5kZXNjLmZlYXR1cmUzLmRlc2MxJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X19odG1sOiBpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMy5kZXNjMicpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aTE4bmV4dC50KCdob21lLmltYWdlcy5mZWF0dXJlLWltZy0zJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkZlYXR1cmUgSW1hZ2UgM1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgbXktNVwiPlxyXG5cdFx0XHRcdDxoMlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyXCJcclxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRcdF9faHRtbDogaTE4bmV4dC50KCdob21lLndoeVByZW1pbmRlci50aXRsZScpLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tMTIgbXktM1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtM1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzU1cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ljb25zL3JlYXNvbi1pbWctMS5wbmdcIiBhbHQ9XCJSZWFzb24gSW1hZ2UgMVwiIHdpZHRoPVwiODAlXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJteS0zXCI+e2kxOG5leHQudCgnaG9tZS53aHlQcmVtaW5kZXIuZGVzYy5yZWFzb24xLnRpdGxlJyl9PC9oMz5cclxuXHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0X19odG1sOiBpMThuZXh0LnQoJ2hvbWUud2h5UHJlbWluZGVyLmRlc2MucmVhc29uMS5kZXNjJyksXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS0xMiBteS0zXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0zXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzdweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaWNvbnMvcmVhc29uLWltZy0yLnBuZ1wiIGFsdD1cIlJlYXNvbiBJbWFnZSAyXCIgd2lkdGg9XCI4MCVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm15LTNcIj57aTE4bmV4dC50KCdob21lLndoeVByZW1pbmRlci5kZXNjLnJlYXNvbjIudGl0bGUnKX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRfX2h0bWw6IGkxOG5leHQudCgnaG9tZS53aHlQcmVtaW5kZXIuZGVzYy5yZWFzb24yLmRlc2MnKSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxyXG5cdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTEyIG15LTNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pY29ucy9yZWFzb24taW1nLTMucG5nXCIgYWx0PVwiUmVhc29uIEltYWdlIDNcIiB3aWR0aD1cIjgwJVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibXktM1wiPntpMThuZXh0LnQoJ2hvbWUud2h5UHJlbWluZGVyLmRlc2MucmVhc29uMy50aXRsZScpfTwvaDM+XHJcblx0XHRcdFx0XHRcdDxwPntpMThuZXh0LnQoJ2hvbWUud2h5UHJlbWluZGVyLmRlc2MucmVhc29uMy5kZXNjJyl9PC9wPlxyXG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmVtaW5kZXJcIj5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzMycHgnLFxyXG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMjRweCcsXHJcblx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9XCJodHRwczovL3ByZW1pbmRlci5wYWdlLmxpbmsvZG93bmxvYWRcIj57aTE4bmV4dC50KCdob21lLmRvd25sb2FkJyl9PC9hPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjRjBGMEYwJyB9fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktNVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9pY29ucy9jb250YWN0LWltZy5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiY29udGFjdFwiXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjgwJVwiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcyMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBteS01XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMz57aTE4bmV4dC50KCdob21lLmNvbnRhY3RVcy50aXRsZScpfTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPntpMThuZXh0LnQoJ2hvbWUuY29udGFjdFVzLmRlc2MnKX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIG10LTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2lzU3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aTE4bmV4dC50KCdtZXNzYWdlcy5mZWVkYmFjay5zdWNjZXNzJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpc0Vycm9yICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2kxOG5leHQudCgnbWVzc2FnZXMuZmVlZGJhY2suZXJyb3InKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignbmFtZScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aTE4bmV4dC50KCdmb3JtLm5hbWUucGxhY2Vob2xkZXInKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucHV0LWNvbnRyb2wgJHtlcnJvcnMubmFtZSA/ICdpcy1pbnZhbGlkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5uYW1lPy5tZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdlbWFpbCcpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17aTE4bmV4dC50KCdmb3JtLmVtYWlsLnBsYWNlaG9sZGVyJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnB1dC1jb250cm9sICR7ZXJyb3JzLmVtYWlsID8gJ2lzLWludmFsaWQnIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLmVtYWlsPy5tZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJmZWVkYmFja1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZmVlZGJhY2snKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2kxOG5leHQudCgnZm9ybS5mZWVkYmFjay5wbGFjZWhvbGRlcicpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgdGV4dC1hcmVhLWNvbnRyb2wgJHtlcnJvcnMuZmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLmZlZWRiYWNrPy5tZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmVtaW5kZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzMycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcyNHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuc2VuZCcpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=