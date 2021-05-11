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
            href: "https://preminder.page.link/download",
            download: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9pbmRleC50c3giXSwibmFtZXMiOlsiTWFpbiIsInVzZVRyYW5zbGF0aW9uIiwidCIsInVzZVN0YXRlIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJuYW1lIiwicmVxdWlyZWQiLCJpMThuZXh0IiwibWluIiwibWF4IiwiZW1haWwiLCJmZWVkYmFjayIsImZvcm1PcHRpb25zIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXJsIiwib25TdWJtaXQiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwiZXgiLCJjb25zb2xlIiwiZXJyb3IiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiX19odG1sIiwibWFyZ2luQm90dG9tIiwiZm9udFN0eWxlIiwiYm9yZGVyUmFkaXVzIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBOztBQUFBLHdCQUNyQkMsc0VBQWMsRUFETztBQUFBLE1BQzNCQyxDQUQyQixtQkFDM0JBLENBRDJCOztBQUFBLGtCQUVEQywrQ0FBUSxDQUFDLEtBQUQsQ0FGUDtBQUFBLE1BRTVCQyxTQUY0QjtBQUFBLE1BRWpCQyxZQUZpQjs7QUFBQSxtQkFHTEYsK0NBQVEsQ0FBQyxLQUFELENBSEg7QUFBQSxNQUc1QkcsT0FI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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF2QkQsZUFpQ0M7QUFBSyw2QkFBUyxFQUFDLGtCQUFmO0FBQUEsMkNBQ0M7QUFBUSwwQkFBSSxFQUFDLFFBQWI7QUFBc0IsK0JBQVMsRUFBQyxtQkFBaEM7QUFBQSw2Q0FDQztBQUNDLDZCQUFLLEVBQUU7QUFDTk4sb0NBQVUsRUFBRSxNQUROO0FBRU5ELGtDQUFRLEVBQUUsTUFGSjtBQUdORSxvQ0FBVSxFQUFFLE1BSE47QUFJTkcsbUNBQVMsRUFBRTtBQUpMLHlCQURSO0FBQUEsa0NBUUVoQyw4Q0FBQSxDQUFVLFdBQVY7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBakNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsTUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF5UkEsQ0F0VU07O0dBQU1iLEk7VUFDRUMsa0UsRUFxQnVDb0Isb0Q7OztLQXRCekNyQixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsYW5nXS42NDBlMDZkYjk3MTk2N2Q4OTgxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cdGNvbnN0IFtpc1N1Y2Nlc3MsIHNldElzU3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHQvLyBmb3JtIHZhbGlkYXRpb24gcnVsZXNcclxuXHRjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuXHRcdG5hbWU6IFl1cC5zdHJpbmcoKVxyXG5cdFx0XHQucmVxdWlyZWQoaTE4bmV4dC50KCdtZXNzYWdlcy52YWxpZGF0ZS5uYW1lLnJlcXVpcmVkJykpXHJcblx0XHRcdC5taW4oNSwgaTE4bmV4dC50KCdtZXNzYWdlcy52YWxpZGF0ZS5uYW1lLm1pbmxlbmd0aCcpKVxyXG5cdFx0XHQubWF4KDUwLCBpMThuZXh0LnQoJ21lc3NhZ2VzLnZhbGlkYXRlLm5hbWUubWF4bGVuZ3RoJykpLFxyXG5cdFx0ZW1haWw6IFl1cC5zdHJpbmcoKVxyXG5cdFx0XHQucmVxdWlyZWQoaTE4bmV4dC50KCdtZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5yZXF1aXJlZCcpKVxyXG5cdFx0XHQubWluKDUsIGkxOG5leHQudCgnbWVzc2FnZXMudmFsaWRhdGUuZW1haWwubWlubGVuZ3RoJykpXHJcblx0XHRcdC5tYXgoNTAsIGkxOG5leHQudCgnbWVzc2FnZXMudmFsaWRhdGUuZW1haWwubWF4bGVuZ3RoJykpXHJcblx0XHRcdC5lbWFpbChpMThuZXh0LnQoJ21lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLmludmFsaWQnKSksXHJcblx0XHRmZWVkYmFjazogWXVwLnN0cmluZygpXHJcblx0XHRcdC5yZXF1aXJlZChpMThuZXh0LnQoJ21lc3NhZ2VzLnZhbGlkYXRlLmZlZWRiYWNrLnJlcXVpcmVkJykpXHJcblx0XHRcdC5taW4oNSwgaTE4bmV4dC50KCdtZXNzYWdlcy52YWxpZGF0ZS5mZWVkYmFjay5taW5sZW5ndGgnKSksXHJcblx0fSk7XHJcblx0Y29uc3QgZm9ybU9wdGlvbnMgPSB7IHJlc29sdmVyOiB5dXBSZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKSB9O1xyXG5cdC8vIGdldCBmdW5jdGlvbnMgdG8gYnVpbGQgZm9ybSB3aXRoIHVzZUZvcm0oKSBob29rXHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKGZvcm1PcHRpb25zKTtcclxuXHRjb25zdCB7IGVycm9ycyB9ID0gZm9ybVN0YXRlO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgdXJsID0+IHtcclxuXHRcdFx0Ly8gUmVzZXQgZm9ybSB3aGVuIHRoZSByb3V0ZXIgY2hhbmdlZFxyXG5cdFx0XHRyZXNldCgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIG9uU3VibWl0KGRhdGEpIHtcclxuXHRcdGF4aW9zXHJcblx0XHRcdC5wb3N0KGAvYXBpL2N1c3RvbWVyL3NlbmRGZWVkYmFja2AsIGRhdGEpXHJcblx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzZXRJc1N1Y2Nlc3ModHJ1ZSk7XHJcblx0XHRcdFx0cmVzZXQoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChleCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXgpO1xyXG5cdFx0XHRcdHNldElzRXJyb3IodHJ1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgaWQ9XCJtYWluXCI+XHJcblx0XHRcdDxzZWN0aW9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiYW5uZXJcIlxyXG5cdFx0XHRcdHN0eWxlPXt7IG1pbkhlaWdodDogJzgwMHB4JywgYmFja2dyb3VuZDogJyNjMGU4ZTInIH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtc20tMTIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktM1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1iLTNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcyNHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzMycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7aTE4bmV4dC50KCdob21lLnN1YnRpdGxlJyl9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGgxXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnYmxhY2snLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnNjBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+e2kxOG5leHQudCgnaG9tZS5tYWludGl0bGUxJyl9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpZ2h0bGlnaHQtdHh0XCI+e2kxOG5leHQudCgnaG9tZS5tYWludGl0bGUyJyl9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPXZuLmxlYXAucHJlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9pY29ucy9nZXQtaXQtb24tZ29vZ2xlLXBsYXktdmVjdG9yLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkdvb2dsZSBQbGF5IGxvZ29cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCI3MFwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLXNtLTEyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktM1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpMThuZXh0LnQoJ2hvbWUuaW1hZ2VzLmRlbW8taW1nJyl9IGFsdD1cIkRlbW8gSW1hZ2VcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBteS01XCI+XHJcblx0XHRcdFx0PGgyPntpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMudGl0bGUnKX08L2gyPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb2wtMTIgbXktM1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLXNtLTEyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlclwiPjAxLjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiaGlnaHRsaWdodC10eHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aTE4bmV4dC50KCdob21lLmZlYXR1cmVzLmRlc2MuZmVhdHVyZTEudGl0bGUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMS5kZXNjMScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9faHRtbDogaTE4bmV4dC50KCdob21lLmZlYXR1cmVzLmRlc2MuZmVhdHVyZTEuZGVzYzInKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2kxOG5leHQudCgnaG9tZS5pbWFnZXMuZmVhdHVyZS1pbWctMScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJGZWF0dXJlIEltYWdlIDFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2FydGljbGU+XHJcblx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb2wtMTIgbXktM1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aTE4bmV4dC50KCdob21lLmltYWdlcy5mZWF0dXJlLWltZy0yJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkZlYXR1cmUgSW1hZ2UgMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLXNtLTEyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlclwiPjAyLjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiaGlnaHRsaWdodC10eHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aTE4bmV4dC50KCdob21lLmZlYXR1cmVzLmRlc2MuZmVhdHVyZTIudGl0bGUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMi5kZXNjMScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9faHRtbDogaTE4bmV4dC50KCdob21lLmZlYXR1cmVzLmRlc2MuZmVhdHVyZTIuZGVzYzInKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2FydGljbGU+XHJcblx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb2wtMTIgbXktM1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLXNtLTEyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcmRlclwiPjAzLjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiaGlnaHRsaWdodC10eHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aTE4bmV4dC50KCdob21lLmZlYXR1cmVzLmRlc2MuZmVhdHVyZTMudGl0bGUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ2hvbWUuZmVhdHVyZXMuZGVzYy5mZWF0dXJlMy5kZXNjMScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9faHRtbDogaTE4bmV4dC50KCdob21lLmZlYXR1cmVzLmRlc2MuZmVhdHVyZTMuZGVzYzInKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2kxOG5leHQudCgnaG9tZS5pbWFnZXMuZmVhdHVyZS1pbWctMycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJGZWF0dXJlIEltYWdlIDNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2FydGljbGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIG15LTVcIj5cclxuXHRcdFx0XHQ8aDJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMlwiXHJcblx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0XHRfX2h0bWw6IGkxOG5leHQudCgnaG9tZS53aHlQcmVtaW5kZXIudGl0bGUnKSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTEyIG15LTNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc1NXB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pY29ucy9yZWFzb24taW1nLTEucG5nXCIgYWx0PVwiUmVhc29uIEltYWdlIDFcIiB3aWR0aD1cIjgwJVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibXktM1wiPntpMThuZXh0LnQoJ2hvbWUud2h5UHJlbWluZGVyLmRlc2MucmVhc29uMS50aXRsZScpfTwvaDM+XHJcblx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdFx0XHRcdF9faHRtbDogaTE4bmV4dC50KCdob21lLndoeVByZW1pbmRlci5kZXNjLnJlYXNvbjEuZGVzYycpLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2FydGljbGU+XHJcblx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tMTIgbXktM1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtM1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzM3cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ljb25zL3JlYXNvbi1pbWctMi5wbmdcIiBhbHQ9XCJSZWFzb24gSW1hZ2UgMlwiIHdpZHRoPVwiODAlXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJteS0zXCI+e2kxOG5leHQudCgnaG9tZS53aHlQcmVtaW5kZXIuZGVzYy5yZWFzb24yLnRpdGxlJyl9PC9oMz5cclxuXHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0X19odG1sOiBpMThuZXh0LnQoJ2hvbWUud2h5UHJlbWluZGVyLmRlc2MucmVhc29uMi5kZXNjJyksXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS0xMiBteS0zXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaWNvbnMvcmVhc29uLWltZy0zLnBuZ1wiIGFsdD1cIlJlYXNvbiBJbWFnZSAzXCIgd2lkdGg9XCI4MCVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm15LTNcIj57aTE4bmV4dC50KCdob21lLndoeVByZW1pbmRlci5kZXNjLnJlYXNvbjMudGl0bGUnKX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8cD57aTE4bmV4dC50KCdob21lLndoeVByZW1pbmRlci5kZXNjLnJlYXNvbjMuZGVzYycpfTwvcD5cclxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXktNSB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJlbWluZGVyXCI+XHJcblx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzI0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9wcmVtaW5kZXIucGFnZS5saW5rL2Rvd25sb2FkXCIgZG93bmxvYWQ+e2kxOG5leHQudCgnaG9tZS5kb3dubG9hZCcpfTwvYT5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI0YwRjBGMCcgfX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvaWNvbnMvY29udGFjdC1pbWcucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cImNvbnRhY3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCI4MCVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnMjBweCcgfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktNVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+e2kxOG5leHQudCgnaG9tZS5jb250YWN0VXMudGl0bGUnKX08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57aTE4bmV4dC50KCdob21lLmNvbnRhY3RVcy5kZXNjJyl9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlciBtdC0yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpc1N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2kxOG5leHQudCgnbWVzc2FnZXMuZmVlZGJhY2suc3VjY2VzcycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7aXNFcnJvciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpMThuZXh0LnQoJ21lc3NhZ2VzLmZlZWRiYWNrLmVycm9yJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG10LTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ25hbWUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2kxOG5leHQudCgnZm9ybS5uYW1lLnBsYWNlaG9sZGVyJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnB1dC1jb250cm9sICR7ZXJyb3JzLm5hbWUgPyAnaXMtaW52YWxpZCcgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMubmFtZT8ubWVzc2FnZX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2kxOG5leHQudCgnZm9ybS5lbWFpbC5wbGFjZWhvbGRlcicpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5wdXQtY29udHJvbCAke2Vycm9ycy5lbWFpbCA/ICdpcy1pbnZhbGlkJyA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5lbWFpbD8ubWVzc2FnZX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZmVlZGJhY2tcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ2ZlZWRiYWNrJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtpMThuZXh0LnQoJ2Zvcm0uZmVlZGJhY2sucGxhY2Vob2xkZXInKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIHRleHQtYXJlYS1jb250cm9sICR7ZXJyb3JzLmZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5mZWVkYmFjaz8ubWVzc2FnZX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJlbWluZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMjRweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aTE4bmV4dC50KCdob21lLnNlbmQnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9