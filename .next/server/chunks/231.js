"use strict";
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 3231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ checkPartizanToken)
/* harmony export */ });
/* harmony import */ var services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_requests__WEBPACK_IMPORTED_MODULE_0__]);
services_requests__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const moment = __webpack_require__(2245);



const {
  getCloudAuthInfo,
  updateTokens,
  updateShortToken,
  getCloudCreds
} = __webpack_require__(3614);

async function checkPartizanToken() {
  try {
    const {
      longToken,
      longTokenValidTill,
      shortToken,
      shortTokenValidTill
    } = await getCloudAuthInfo();
    if (!longToken) return null;
    const now = Number(moment().format("x"));
    const shortTokenExpTime = +shortTokenValidTill;
    const longTokenExpTime = +longTokenValidTill;

    if (now >= longTokenExpTime) {
      const creds = await getCloudCreds();
      if (!creds.password) return null;
      const data = await (0,services_requests__WEBPACK_IMPORTED_MODULE_0__/* .logIntoCloud */ .ih)(creds);
      await updateTokens(data);
      return data.shortToken;
    }

    if (now >= shortTokenExpTime) {
      const data = await (0,services_requests__WEBPACK_IMPORTED_MODULE_0__/* .getPartizanShortToken */ .n)(longToken);
      await updateShortToken(data);
      return data.shortToken;
    }

    return shortToken;
  } catch (error) {
    return null;
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;