(function() {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$_": function() { return /* reexport */ Footer; },
  "h4": function() { return /* reexport */ Header; },
  "or": function() { return /* reexport */ Main; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-bootstrap"
var external_react_bootstrap_namespaceObject = require("react-bootstrap");;
;// CONCATENATED MODULE: external "next-translate/useTranslation"
var useTranslation_namespaceObject = require("next-translate/useTranslation");;
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_namespaceObject);
;// CONCATENATED MODULE: external "react-flags-select"
var external_react_flags_select_namespaceObject = require("react-flags-select");;
var external_react_flags_select_default = /*#__PURE__*/__webpack_require__.n(external_react_flags_select_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(528);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);
;// CONCATENATED MODULE: ./src/components/header/index.tsx








const Header = ({
  language
}) => {
  const {
    t
  } = useTranslation_default()();
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(getCountryCodeByLocale(language));

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
    const locale = getLocaleByCountryCode(countryCode);
    router_default().push(router_default().pathname.replace("[lang]", locale));
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "header",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Navbar, {
      expand: "lg",
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Navbar.Brand, {
        href: `/${language}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/icons/Logo.png",
          alt: "logo",
          className: "logo-img"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "navbar-title",
          children: external_i18next_default().t('title')
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Navbar.Toggle, {
        "aria-controls": "basic-navbar-nav"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Navbar.Collapse, {
        id: "basic-navbar-nav",
        className: "justify-content-end",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Nav, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Nav.Link, {
            href: `/${language}/privacy-policy`,
            children: external_i18next_default().t('menu.privacyPolicy')
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Nav.Link, {
            href: `/${language}/terms-of-use`,
            children: external_i18next_default().t('menu.termsOfUse')
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_flags_select_default()), {
            className: "language-dropdown",
            countries: ['US', 'VN'],
            showSelectedLabel: false,
            showOptionLabel: false,
            selected: selected,
            onSelect: language => onSelectLanguage(language)
          })]
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: external "react-hook-form"
var external_react_hook_form_namespaceObject = require("react-hook-form");;
;// CONCATENATED MODULE: ./node_modules/@hookform/resolvers/dist/resolvers.mjs
var resolvers_a=function(a,e){var f={};for(var t in a){var n=(0,external_react_hook_form_namespaceObject.get)(e,t);(0,external_react_hook_form_namespaceObject.set)(f,t,Object.assign(a[t],{ref:n&&n.ref}))}return f};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs
var r=function(r,o,n){return void 0===o&&(o={abortEarly:!1}),void 0===n&&(n={}),function(s,a,c){try{return Promise.resolve(function(e,t){try{var c=(o.context&&"development"==="production"&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(r["sync"===n.mode?"validateSync":"validate"](s,Object.assign({},o,{context:a}))).then(function(e){return{values:e,errors:{}}}))}catch(e){return t(e)}return c&&c.then?c.then(void 0,t):c}(0,function(r){return{values:{},errors:resolvers_a((o=r,n="all"===c.criteriaMode,o.inner.reduce(function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),n){var o=e[r.path].types,s=o&&o[r.type];e[r.path]=(0,external_react_hook_form_namespaceObject.appendErrors)(r.path,n,e,r.type,s?[].concat(s,r.message):r.message)}return e},{})),c.fields)};var o,n}))}catch(e){return Promise.reject(e)}}};
//# sourceMappingURL=yup.module.js.map

;// CONCATENATED MODULE: external "yup"
var external_yup_namespaceObject = require("yup");;
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/components/main/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Main = () => {
  var _errors$name, _errors$email, _errors$feedback;

  const {
    t
  } = useTranslation_default()();
  const {
    0: isSuccess,
    1: setIsSuccess
  } = (0,external_react_.useState)(false);
  const {
    0: isError,
    1: setIsError
  } = (0,external_react_.useState)(false); // form validation rules

  const validationSchema = external_yup_namespaceObject.object().shape({
    name: external_yup_namespaceObject.string().required(external_i18next_default().t('messages.validate.name.required')).min(5, external_i18next_default().t('messages.validate.name.minlength')).max(50, external_i18next_default().t('messages.validate.name.maxlength')),
    email: external_yup_namespaceObject.string().required(external_i18next_default().t('messages.validate.email.required')).min(5, external_i18next_default().t('messages.validate.email.minlength')).max(50, external_i18next_default().t('messages.validate.email.maxlength')).email(external_i18next_default().t('messages.validate.email.invalid')),
    feedback: external_yup_namespaceObject.string().required(external_i18next_default().t('messages.validate.feedback.required')).min(5, external_i18next_default().t('messages.validate.feedback.minlength'))
  });
  const formOptions = {
    resolver: r(validationSchema)
  }; // get functions to build form with useForm() hook

  const {
    register,
    handleSubmit,
    reset,
    formState
  } = (0,external_react_hook_form_namespaceObject.useForm)(formOptions);
  const {
    errors
  } = formState;
  (0,external_react_.useEffect)(() => {
    router_default().events.on("routeChangeStart", url => {
      // Reset form when the router changed
      reset();
    });
  });

  function onSubmit(data) {
    external_axios_default().post(`/api/customer/sendFeedback`, data).then(() => {
      setIsSuccess(true);
      reset();
    }).catch(ex => {
      console.error(ex);
      setIsError(true);
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "main",
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "d-flex align-items-center banner",
      style: {
        minHeight: '800px',
        background: '#c0e8e2'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center my-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "mb-3",
              style: {
                color: '#636363',
                fontSize: '24px',
                lineHeight: '32px'
              },
              children: external_i18next_default().t('home.subtitle')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              style: {
                fontWeight: 'bold',
                color: 'black',
                lineHeight: '60px'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: external_i18next_default().t('home.maintitle1')
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hightlight-txt",
                children: external_i18next_default().t('home.maintitle2')
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/icons/get-it-on-google-play-vector.png",
                alt: "Google Play logo",
                height: "70"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-7 col-sm-12 justify-content-center my-3",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: external_i18next_default().t('home.images.demo-img'),
              alt: "Demo Image",
              width: "100%"
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "container text-center my-5",
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: external_i18next_default().t('home.features.title')
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("article", {
          className: "col-12 my-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "order",
                  children: "01."
                }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "hightlight-txt",
                  children: external_i18next_default().t('home.features.desc.feature1.title')
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "col-12",
                    children: external_i18next_default().t('home.features.desc.feature1.desc1')
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "col-12",
                    dangerouslySetInnerHTML: {
                      __html: external_i18next_default().t('home.features.desc.feature1.desc2')
                    }
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-6 col-sm-12",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: external_i18next_default().t('home.images.feature-img-1'),
                alt: "Feature Image 1",
                width: "100%"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("article", {
          className: "col-12 my-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-6 col-sm-12",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: external_i18next_default().t('home.images.feature-img-2'),
                alt: "Feature Image 2",
                width: "100%"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "order",
                  children: "02."
                }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "hightlight-txt",
                  children: external_i18next_default().t('home.features.desc.feature2.title')
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "col-12",
                    children: external_i18next_default().t('home.features.desc.feature2.desc1')
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "col-12",
                    dangerouslySetInnerHTML: {
                      __html: external_i18next_default().t('home.features.desc.feature2.desc2')
                    }
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("article", {
          className: "col-12 my-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "order",
                  children: "03."
                }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "hightlight-txt",
                  children: external_i18next_default().t('home.features.desc.feature3.title')
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "col-12",
                    children: external_i18next_default().t('home.features.desc.feature3.desc1')
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "col-12",
                    dangerouslySetInnerHTML: {
                      __html: external_i18next_default().t('home.features.desc.feature3.desc2')
                    }
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-6 col-sm-12",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: external_i18next_default().t('home.images.feature-img-3'),
                alt: "Feature Image 3",
                width: "100%"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "container text-center my-5",
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "col-12",
        dangerouslySetInnerHTML: {
          __html: external_i18next_default().t('home.whyPreminder.title')
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: "col-lg-4 col-sm-12 my-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "p-3",
            style: {
              marginBottom: '55px'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/reason-img-1.png",
              alt: "Reason Image 1",
              width: "80%"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "my-3",
            children: external_i18next_default().t('home.whyPreminder.desc.reason1.title')
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            dangerouslySetInnerHTML: {
              __html: external_i18next_default().t('home.whyPreminder.desc.reason1.desc')
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: "col-lg-4 col-sm-12 my-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "p-3",
            style: {
              marginBottom: '37px'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/reason-img-2.png",
              alt: "Reason Image 2",
              width: "80%"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "my-3",
            children: external_i18next_default().t('home.whyPreminder.desc.reason2.title')
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            dangerouslySetInnerHTML: {
              __html: external_i18next_default().t('home.whyPreminder.desc.reason2.desc')
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: "col-lg-4 col-sm-12 my-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "p-3",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/reason-img-3.png",
              alt: "Reason Image 3",
              width: "80%"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "my-3",
            children: external_i18next_default().t('home.whyPreminder.desc.reason3.title')
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: external_i18next_default().t('home.whyPreminder.desc.reason3.desc')
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "container my-5 text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        className: "btn btn-preminder",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            lineHeight: '32px',
            fontSize: '24px',
            fontWeight: 'bold',
            fontStyle: 'normal'
          },
          children: external_i18next_default().t('home.download')
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      style: {
        background: '#F0F0F0'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 col-sm-12 d-flex justify-content-center my-5",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/contact-img.png",
              alt: "contact",
              width: "80%",
              style: {
                borderRadius: '20px'
              }
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 col-sm-12 d-flex justify-content-center my-5",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: external_i18next_default().t('home.contactUs.title')
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: external_i18next_default().t('home.contactUs.desc')
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-12 text-center mt-2",
                children: [isSuccess && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "alert alert-success",
                  children: external_i18next_default().t('messages.feedback.success')
                }), isError && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "alert alert-danger",
                  children: external_i18next_default().t('messages.feedback.error')
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12 mt-3",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                  onSubmit: handleSubmit(onSubmit),
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({
                      name: "name",
                      type: "text"
                    }, register('name')), {}, {
                      placeholder: external_i18next_default().t('form.name.placeholder'),
                      className: `form-control input-control ${errors.name ? 'is-invalid' : ''}`
                    })), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({
                      name: "email",
                      type: "text"
                    }, register('email')), {}, {
                      placeholder: external_i18next_default().t('form.email.placeholder'),
                      className: `form-control input-control ${errors.email ? 'is-invalid' : ''}`
                    })), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("textarea", _objectSpread(_objectSpread({
                      name: "feedback"
                    }, register('feedback')), {}, {
                      placeholder: external_i18next_default().t('form.feedback.placeholder'),
                      className: `form-control text-area-control ${errors.feedback ? 'is-invalid' : ''}`
                    })), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: (_errors$feedback = errors.feedback) === null || _errors$feedback === void 0 ? void 0 : _errors$feedback.message
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "text-center mt-3",
                    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                      type: "submit",
                      className: "btn btn-preminder",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        style: {
                          lineHeight: '32px',
                          fontSize: '24px',
                          fontWeight: 'bold',
                          fontStyle: 'normal'
                        },
                        children: external_i18next_default().t('home.send')
                      })
                    })
                  })]
                })
              })]
            })
          })]
        })
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/footer/index.tsx





const Footer = () => {
  const {
    t
  } = useTranslation_default()();
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mx-5",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row py-3",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-4 col-sm-12",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "LEAP"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-globe"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://leap.vn/",
                target: "_blank",
                children: "leap.vn"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-envelope"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:info@preminder.me",
                children: "info@preminder.me"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-phone"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "+84 966 1368 98"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-calendar"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: external_i18next_default().t('footer.date')
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-address-card"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:info@preminder.me",
                children: external_i18next_default().t('footer.addr2')
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-2 col-sm-12",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: external_i18next_default().t('footer.followus')
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            href: "https://www.facebook.com/www.leap.vn",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa icon fa-facebook-square"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            href: "https://www.linkedin.com/company/leap-vn",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa icon fa-linkedin-square ml-2"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-6 col-sm-12",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: external_i18next_default().t('footer.map')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "map",
            children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1323506697327!2d106.7062592152488!3d10.801173885066383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fcbb1eaf4fb%3A0xc2419dddf4ffb76!2sLEAP%20Company%20Limited%20-%20Business%20line%201!5e0!3m2!1svi!2s!4v1617888495095!5m2!1svi!2s",
              width: "100%",
              height: "100%",
              style: {
                border: '0'
              }
            })
          })]
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/index.ts




/***/ }),

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

/***/ 567:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vR": function() { return /* binding */ getAllLanguageSlugs; },
/* harmony export */   "G3": function() { return /* binding */ getLanguage; }
/* harmony export */ });
/* unused harmony export getSortedLangsData */
/* harmony import */ var _i18n_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(966);

function getSortedLangsData() {
  return languages;
}
function getAllLanguageSlugs() {
  return _i18n_config__WEBPACK_IMPORTED_MODULE_0__/* .languages.map */ .M.map(lang => {
    return {
      params: {
        lang: lang
      }
    };
  });
}
function getLanguage(lang) {
  return _i18n_config__WEBPACK_IMPORTED_MODULE_0__/* .languages.includes */ .M.includes(lang) ? lang : _i18n_config__WEBPACK_IMPORTED_MODULE_0__/* .defaultLanguage */ .X;
}

/***/ }),

/***/ 600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(357);
/* harmony import */ var _lib_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);







const Home = ({
  language,
  termsOfUse
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "d-flex flex-column min-vh-100",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container my-3",
      dangerouslySetInnerHTML: {
        __html: termsOfUse
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {})]
  });
};

async function getStaticPaths() {
  const paths = (0,_lib_lang__WEBPACK_IMPORTED_MODULE_3__/* .getAllLanguageSlugs */ .vR)();
  return {
    paths,
    fallback: false
  };
}
const getStaticProps = async ({
  params
}) => {
  const language = (0,_lib_lang__WEBPACK_IMPORTED_MODULE_3__/* .getLanguage */ .G3)(params.lang);
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .SERVER */ .c}/api/public/terms-of-use`, {
    headers: {
      "Accept-Language": language
    }
  });
  const termsOfUse = await res.data;
  return {
    props: {
      language,
      termsOfUse
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ SERVER; }
/* harmony export */ });
const SERVER =  false ? 0 : "https://preminder.me"; //export const SERVER = "http://192.168.1.104:8080";

/***/ }),

/***/ 376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(600));
module.exports = __webpack_exports__;

})();