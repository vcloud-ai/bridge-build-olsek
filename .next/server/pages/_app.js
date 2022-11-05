(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(971);
/* harmony import */ var public_images_menu_fill_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6487);
/* harmony import */ var public_images_vCloudAi_symbol_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1888);
/* harmony import */ var _parts_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8089);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_parts_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__]);
_parts_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Header = ({
  isLoggedIn
}) => {
  const {
    0: isMenuOpen,
    1: setIsMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Logo */ .TR, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: public_images_vCloudAi_symbol_logo_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        width: 32,
        height: 25,
        alt: ""
      })
    }), isLoggedIn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .BurgerButton */ .ej, {
      onClick: onClick,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: public_images_menu_fill_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        width: 24,
        height: 24,
        alt: ""
      })
    }), isMenuOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_parts_DropDownMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      closeMenu: () => setIsMenuOpen(false)
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5111);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3013);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6825);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_requests__WEBPACK_IMPORTED_MODULE_4__]);
services_requests__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const links = [{
  name: "Search all cameras",
  href: "/"
}, {
  name: "Add single camera",
  href: "/device"
}, {
  name: "Show added devices",
  href: "/addedDevices"
}, {
  name: "Settings",
  href: "/settings"
}, {
  name: "Log out",
  href: "/login"
}];

const DropDownMenu = ({
  closeMenu
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const onLinkCLick = (e, href) => {
    e.preventDefault();
    if (href === "/login") (0,services_requests__WEBPACK_IMPORTED_MODULE_4__/* .unsetToken */ .Ll)();
    router.push(href);
    closeMenu();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_mui_base__WEBPACK_IMPORTED_MODULE_3__.ClickAwayListener, {
    onClickAway: closeMenu,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .im, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Pointer */ .gb, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .List */ .aV, {
        children: links.map((link, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .LinkItem */ .nf, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
              onClick: e => onLinkCLick(e, link.href),
              children: link.name
            })
          }, i);
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDownMenu);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aV": () => (/* binding */ List),
/* harmony export */   "gb": () => (/* binding */ Pointer),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "nf": () => (/* binding */ LinkItem),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-xh6hfh-0"
})(["position:absolute;top:40px;left:60px;z-index:999;"]);
const Pointer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Pointer",
  componentId: "sc-xh6hfh-1"
})(["position:absolute;top:-12px;left:10px;width:5px;height:5px;border-style:solid;border-width:17px 12px 0px;border-color:rgb(16,27,38) transparent transparent;transform:rotate(180deg) scale(0.5);z-index:999;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-xh6hfh-2"
})(["background-color:rgb(16,27,38);z-index:999;max-height:500px;width:251px;border-radius:2px;box-shadow:rgb(0 0 0) 0px 1px 2px;overflow-y:auto;margin:0;padding:0;"]);
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "styles__LinkItem",
  componentId: "sc-xh6hfh-3"
})(["font-size:14px;font-family:\"Montserrat\";font-weight:400;color:white;width:100%;height:42px;display:flex;align-items:center;margin:0;padding:0 0 0 30px;list-style:none;&:hover,&:focus{background-color:rgb(13,22,31);}"]);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__Link",
  componentId: "sc-xh6hfh-4"
})(["display:block;width:100%;height:100%;display:flex;align-items:center;justify-contect:center;cursor:pointer;"]);

/***/ }),

/***/ 971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TR": () => (/* binding */ Logo),
/* harmony export */   "ej": () => (/* binding */ BurgerButton),
/* harmony export */   "im": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-18t46gd-0"
})(["background-color:rgb(47 68 88);left:0;right:0;top:0;height:42px;position:fixed;z-index:1;width:100%;display:flex;align-items:center;padding-left:20px;padding-right:20px;"]);
const BurgerButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__BurgerButton",
  componentId: "sc-18t46gd-1"
})(["cursor:pointer;background-color:transparent;outline:none;border:none;display:flex;aling-items:center;justify-content:center;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-18t46gd-2"
})(["margin-right:13px;display:flex;align-items:center;justify-content:center;"]);

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(473);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var public_images_favicon_ico__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3647);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_common_AppLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4767);
/* harmony import */ var services_requests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6825);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Header__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, services_requests__WEBPACK_IMPORTED_MODULE_8__]);
([components_Header__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, services_requests__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    0: isLoadingApp,
    1: setIsLoadingApp
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: isLoggedIn,
    1: setIsLoggedIn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const token = localStorage.getItem("authToken");
    (axios__WEBPACK_IMPORTED_MODULE_9___default().defaults.headers.common.Authorization) = token;
    setIsLoadingApp(true);

    if (!token) {
      router.push("/login");
      setIsLoadingApp(false);
      return;
    }

    (0,services_requests__WEBPACK_IMPORTED_MODULE_8__/* .auth */ .I8)(token).then(isValid => {
      if (isValid) {
        router.push("/");
        setIsLoggedIn(true);
      } else {
        localStorage.clear();
        router.push("/login");
      }
    }).finally(() => {
      setIsLoadingApp(false);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (router.pathname === "/login") {
      setIsLoggedIn(false);
      return;
    }

    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login");
      setIsLoggedIn(false);
    }
  }, [router.asPath]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("link", {
        rel: "shortcut icon",
        href: public_images_favicon_ico__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src,
        type: "image/x-icon"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("title", {
        children: "vCloud Finder"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      isLoggedIn: isLoggedIn
    }), isLoadingApp ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "loader",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_common_AppLoader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      setIsLoggedIn: setIsLoggedIn,
      isLoadingApp: isLoadingApp
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      newestOnTop: true,
      draggable: false,
      pauseOnVisibilityChange: true,
      closeOnClick: true,
      pauseOnHover: true
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/favicon.e958c542.ico","height":48,"width":48});

/***/ }),

/***/ 6487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/menu-fill.c132a726.svg","height":24,"width":24});

/***/ }),

/***/ 1888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/vCloudAi-symbol-logo.dd0046db.svg","height":46,"width":71});

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 3013:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1223:
/***/ ((module) => {

"use strict";
module.exports = require("react-loader-spinner");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,857], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();