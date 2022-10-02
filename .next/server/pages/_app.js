(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Header/styles.js

const Wrapper = external_styled_components_default().header.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-18t46gd-0"
})(["background-color:rgb(47 68 88);left:0;right:0;top:0;height:42px;position:sticky;z-index:1;width:100%;display:flex;align-items:center;padding-left:20px;padding-right:20px;"]);
const BurgerButton = external_styled_components_default().button.withConfig({
  displayName: "styles__BurgerButton",
  componentId: "sc-18t46gd-1"
})(["cursor:pointer;background-color:transparent;outline:none;border:none;display:flex;aling-items:center;justify-content:center;"]);
const Logo = external_styled_components_default().div.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-18t46gd-2"
})(["margin-right:13px;display:flex;align-items:center;justify-content:center;"]);
;// CONCATENATED MODULE: ./public/images/menu-fill.svg
/* harmony default export */ const menu_fill = ({"src":"/_next/static/media/menu-fill.c132a726.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/images/vCloudAi-symbol-logo.svg
/* harmony default export */ const vCloudAi_symbol_logo = ({"src":"/_next/static/media/vCloudAi-symbol-logo.dd0046db.svg","height":46,"width":71});
;// CONCATENATED MODULE: ./components/Header/parts/DropDownMenu/styles.js

const styles_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-xh6hfh-0"
})(["position:absolute;top:40px;left:60px;z-index:999;"]);
const Pointer = external_styled_components_default().div.withConfig({
  displayName: "styles__Pointer",
  componentId: "sc-xh6hfh-1"
})(["position:absolute;top:-12px;left:10px;width:5px;height:5px;border-style:solid;border-width:17px 12px 0px;border-color:rgb(16,27,38) transparent transparent;transform:rotate(180deg) scale(0.5);z-index:999;"]);
const List = external_styled_components_default().ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-xh6hfh-2"
})(["background-color:rgb(16,27,38);z-index:999;max-height:500px;width:251px;border-radius:2px;box-shadow:rgb(0 0 0) 0px 1px 2px;overflow-y:auto;margin:0;padding:0;"]);
const LinkItem = external_styled_components_default().li.withConfig({
  displayName: "styles__LinkItem",
  componentId: "sc-xh6hfh-3"
})(["font-size:14px;font-family:\"Montserrat\";font-weight:400;color:white;width:100%;height:42px;display:flex;align-items:center;margin:0;padding:0 0 0 30px;list-style:none;&:hover,&:focus{background-color:rgb(13,22,31);}"]);
const Link = external_styled_components_default().a.withConfig({
  displayName: "styles__Link",
  componentId: "sc-xh6hfh-4"
})(["display:block;width:100%;height:100%;display:flex;align-items:center;justify-contect:center;cursor:pointer;"]);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "@mui/base"
var base_ = __webpack_require__(3013);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Header/parts/DropDownMenu/index.js






const links = [{
  name: "Search all cameras",
  href: "/"
}, {
  name: "Add single camera",
  href: "/device"
}, {
  name: "Show added devices",
  href: "/added_devices"
}];

const DropDownMenu = ({
  closeMenu
}) => {
  const router = (0,router_namespaceObject.useRouter)();

  const onLinkCLick = (e, href) => {
    e.preventDefault();
    router.push(href);
    closeMenu();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(base_.ClickAwayListener, {
    onClickAway: closeMenu,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Pointer, {}), /*#__PURE__*/jsx_runtime_.jsx(List, {
        children: links.map((link, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
              onClick: e => onLinkCLick(e, link.href),
              children: link.name
            })
          }, i);
        })
      })]
    })
  });
};

/* harmony default export */ const parts_DropDownMenu = (DropDownMenu);
;// CONCATENATED MODULE: ./components/Header/index.js









const Header = () => {
  const {
    0: isMenuOpen,
    1: setIsMenuOpen
  } = (0,external_react_.useState)(false);

  const onClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: vCloudAi_symbol_logo,
        width: 32,
        height: 25,
        alt: ""
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(BurgerButton, {
      onClick: onClick,
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: menu_fill,
        width: 24,
        height: 24,
        alt: ""
      })
    }), isMenuOpen && /*#__PURE__*/jsx_runtime_.jsx(parts_DropDownMenu, {
      closeMenu: () => setIsMenuOpen(false)
    })]
  });
};

/* harmony default export */ const components_Header = (Header);

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5032);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
        rel: "icon",
        href: "/images/favicon.ico"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("title", {
        children: "vCloud Finder"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
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

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 3013:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();