"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 1815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ startScanNetwork),
/* harmony export */   "A": () => (/* binding */ getNetworkRangeByIp)
/* harmony export */ });
/* harmony import */ var ip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6077);
/* harmony import */ var ip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scanLocalNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1285);
/* harmony import */ var _scanLocalNetwork__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scanLocalNetwork__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scanSpecialNetworkRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5599);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_scanSpecialNetworkRange__WEBPACK_IMPORTED_MODULE_2__]);
_scanSpecialNetworkRange__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getNetworkRangeByIp = () => {
  const arr = ip__WEBPACK_IMPORTED_MODULE_0___default().address().split(".");
  arr.pop();
  const start = `${arr.join(".")}.0`;
  const end = `${arr.join(".")}.255`;
  return {
    start,
    end
  };
};

const cutIp = ip => ip.split(".").slice(0, 3).join(".");

const startScanNetwork = async ips => {
  const networkRange = getNetworkRangeByIp();
  const networkRangeStart = cutIp(networkRange.start);
  const networkRangeEnd = cutIp(networkRange.end);
  const propsStart = cutIp(ips.start);
  const propsEnd = cutIp(ips.end);
  if (networkRangeStart === propsStart && networkRangeEnd === propsEnd) return _scanLocalNetwork__WEBPACK_IMPORTED_MODULE_1___default()();
  return (0,_scanSpecialNetworkRange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ips);
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1285:
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.scanLocalNetwork = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dgram = __webpack_require__(1891);

const mCrypto = __webpack_require__(6113);

const mXml2Js = __webpack_require__(855);

const {
  exec
} = __webpack_require__(2081);

const MULTICAST_ADDRESS = "239.255.255.250";
const PORT = 3702;
const DISCOVERY_INTERVAL = 150; // ms

const DISCOVERY_RETRY_MAX = 3;
const DISCOVERY_WAIT = 3000; // ms

const defaultPorts = {
  http: 80,
  https: 443
};
let _udp = null;
let devices = [];
let discoveryIntervalTimer = null;
let discoveryWaitTimer = null;
const soapGetNetworkProtocols = (/* unused pure expression or super */ null && (`
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:tt="http://www.onvif.org/ver10/schema">
 <soap12:Body>
 <GetNetworkProtocols xmlns="http://www.onvif.org/ver10/device/wsdl" />
 </soap12:Body>
</soap12:Envelope> `));
const soapProbe = `
<?xml version="1.0" encoding="UTF-8"?>
<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://schemas.xmlsoap.org/ws/2004/08/addressing">
<s:Header>
<a:Action s:mustUnderstand="1">http://schemas.xmlsoap.org/ws/2005/04/discovery/Probe</a:Action>
<a:MessageID>uuid:__uuid__</a:MessageID>
<a:ReplyTo>
<a:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</a:Address>
</a:ReplyTo>
<a:To s:mustUnderstand="1">urn:schemas-xmlsoap-org:ws:2005:04:discovery</a:To>
</s:Header>
<s:Body>
<Probe xmlns="http://schemas.xmlsoap.org/ws/2005/04/discovery">
<d:Types xmlns:d="http://schemas.xmlsoap.org/ws/2005/04/discovery" xmlns:dp0="http://www.onvif.org/ver10/network/wsdl">dp0:__type__</d:Types>
</Probe>
</s:Body>
</s:Envelope>
`;

class DeviceClass {
  constructor(props) {
    this.ip = props.ip;
    this.urn = "";
    this.xaddrs = [];
    this.scopes = [];
    this.types = "";
    this.login = "";
    this.port = null;
    this.type = "";
    this.probeMatchesComplete = false;
    this.ping = "-";
  }

  getData() {
    const keys = ["ip", "port", "xaddrs", "type", "ping"];
    return keys.reduce((result, key) => _objectSpread(_objectSpread({}, result), {}, {
      [key]: this[key]
    }), {});
  }

  setDeviceData(data = {}) {
    Object.keys(data).forEach(key => this[key] = data[key]);
  }

  setDevicePing() {
    const promise = new Promise(res => {
      const ping = exec(`ping -c 1 ${this.ip}`);
      ping.stdout.on("data", data => {
        const item = data.split(" ").find(el => RegExp("^time=").test(el));
        if (!item) return "0 ms";
        res(`${Number(item.replace("time=", "")).toFixed(1)} ms`);
      });
    });
    promise.then(data => {
      this.ping = data;
    }).catch(() => {// Do nothing
    });
  }

}

const parse = soap => new Promise((resolve, reject) => {
  const opts = {
    explicitRoot: false,
    explicitArray: false,
    ignoreAttrs: false,
    // Never change to `true`
    tagNameProcessors: [name => {
      const m = name.match(/^([^\:]+)\:([^\:]+)$/);
      return m ? m[2] : name;
    }]
  };
  mXml2Js.parseString(soap, opts, (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

const isValidCallback = callback => callback && typeof callback === "function";

const createUuidV4 = () => {
  const clist = mCrypto.randomBytes(16).toString("hex").toLowerCase().split("");
  clist[12] = "4";
  clist[16] = (parseInt(clist[16], 16) & 3 | 8).toString(16);
  const m = clist.join("").match(/^(.{8})(.{4})(.{4})(.{4})(.{12})/);
  return [m[1], m[2], m[3], m[4], m[5]].join("-"); // const _uuid = uuid;
  // return uuid;
};

const sendProbe = () => {
  const soapSet = [];
  ["NetworkVideoTransmitter", "Device", "NetworkVideoDisplay"].forEach(type => {
    let s = soapProbe;
    s = s.replace("__type__", type);
    s = s.replace("__uuid__", createUuidV4());
    soapSet.push(s);
  });
  const soapList = [];

  for (let i = 0; i < DISCOVERY_RETRY_MAX; i++) {
    soapSet.forEach(s => {
      soapList.push(s);
    });
  }

  return new Promise((resolve, reject) => {
    if (!_udp) {
      reject(new Error("No UDP connection is available. The init() method might not be called yet."));
    }

    const send = () => {
      const soap = soapList.shift();

      if (soap) {
        const buf = Buffer.from(soap, "utf8");

        _udp.send(buf, 0, buf.length, PORT, MULTICAST_ADDRESS, () => {
          discoveryIntervalTimer = setTimeout(() => send(), DISCOVERY_INTERVAL);
        });
      } else {
        resolve();
      }
    };

    send();
  });
};

const stopProbe = callback => {
  if (discoveryIntervalTimer) {
    clearTimeout(discoveryIntervalTimer);
    discoveryIntervalTimer = null;
  }

  if (discoveryWaitTimer) {
    clearTimeout(discoveryWaitTimer);
    discoveryWaitTimer = null;
  }

  const promise = new Promise(resolve => {
    if (_udp) {
      _udp.close(() => {
        _udp.unref();

        _udp = null;
        resolve();
      });
    } else {
      resolve();
    }
  });

  if (isValidCallback(callback)) {
    promise.then(() => {
      callback(null);
    }).catch(error => {
      callback(error);
    });
  } else {
    return promise;
  }
};

const scanLocalNetwork = callback => {
  const promise = new Promise((resolve, reject) => {
    devices = [];
    _udp = dgram.createSocket("udp4");

    _udp.once("error", error => reject(error));

    _udp.on("message", (buf, deviceInfo) => {
      parse(buf.toString()).then(result => {
        // const networkProtocolsResponse = result['Body']['GetNetworkProtocolsResponse'];
        const probeMatches = result["Body"]["ProbeMatches"]; // const usersResponse = result['Body']['GetUsersResponse'];

        let device = devices.find(el => el.ip === deviceInfo.address);

        if (!device) {
          device = new DeviceClass({
            ip: deviceInfo.address
          });
          devices.push(device);
        }

        if (probeMatches) {
          let urn = "";
          let xaddrs = [];
          let scopes = [];
          let types = "";
          let name = "";
          let hardware = "";
          let location = "";
          let port = null;
          const probeMatch = probeMatches["ProbeMatch"];
          urn = probeMatch["EndpointReference"]["Address"];
          xaddrs = probeMatch["XAddrs"].split(/\s+/);

          if (typeof probeMatch["Scopes"] === "string") {
            scopes = probeMatch["Scopes"].split(/\s+/);
          } else if (typeof probeMatch["Scopes"] === "object" && typeof probeMatch["Scopes"]["_"] === "string") {
            scopes = probeMatch["Scopes"]["_"].split(/\s+/);
          } // modified to support Pelco cameras


          if (typeof probeMatch["Types"] === "string") {
            types = probeMatch["Types"].split(/\s+/);
          } else if (typeof probeMatch["Types"] === "object" && typeof probeMatch["Types"]["_"] === "string") {
            types = probeMatch["Types"]["_"].split(/\s+/);
          }

          scopes.forEach(s => {
            if (s.indexOf("onvif://www.onvif.org/hardware/") === 0) {
              hardware = s.split("/").pop();
            } else if (s.indexOf("onvif://www.onvif.org/location/") === 0) {
              location = s.split("/").pop();
            } else if (s.indexOf("onvif://www.onvif.org/name/") === 0) {
              name = s.split("/").pop();
              name = name.replace(/_/g, " ");
            }
          });
          const xaddr = xaddrs[0];
          const regex = /^(.*:)\/\/([A-Za-z0-9\-\.]+):/i;
          const protocol = xaddr.split(":")[0];
          port = xaddr.replace(regex, "").split("/")[0];
          if (!port || isNaN(port)) port = defaultPorts[protocol];
          device.setDeviceData({
            urn,
            name,
            hardware,
            location,
            types,
            xaddrs,
            type: "ONVIF",
            port,
            scopes,
            probeMatchesComplete: true
          });
          device.setDevicePing();
        }

        if (!probeMatches) {
          device.setDeviceData({
            type: "RTSP",
            port: 554,
            probeMatchesComplete: true
          });
        }
      }).catch(error => {
        console.log(error);
      });
    });

    _udp.bind(() => {
      _udp.removeAllListeners("error");

      sendProbe().then(() => {// Do nothing.
      }).catch(error => reject(error));
      discoveryWaitTimer = setTimeout(() => {
        stopProbe().then(() => {
          const deviceList = devices.map(device => device.getData());
          resolve(deviceList);
        }).catch(error => reject(error));
      }, DISCOVERY_WAIT);
    });
  }); // promise.then((deviceList) => {
  //   console.log({ deviceList });
  // }).catch((error) => {
  //   console.log({ error });
  // });

  if (isValidCallback(callback)) {
    promise.then(deviceList => {
      callback(null, deviceList);
    }).catch(error => {
      callback(error);
    });
  } else {
    return promise;
  }
};

exports.scanLocalNetwork = scanLocalNetwork;
module.exports = scanLocalNetwork;

/***/ }),

/***/ 5599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var node_onvif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2976);
/* harmony import */ var node_onvif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_onvif__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2081);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_port_reachable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4436);
/* harmony import */ var get_ip_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9821);
/* harmony import */ var get_ip_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(get_ip_range__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([is_port_reachable__WEBPACK_IMPORTED_MODULE_2__]);
is_port_reachable__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const IP_RANGE = {
  start: "192.168.0.0",
  end: "192.168.0.255"
};
let result = [];

const setDevicePing = ip => new Promise(res => {
  const ping = (0,child_process__WEBPACK_IMPORTED_MODULE_1__.exec)(`ping -c 1 ${ip}`);
  ping.stdout.on("data", data => {
    const item = data.split(" ").find(el => RegExp("^time=").test(el));

    if (!item) {
      res("-");
    } else {
      res(`${Number(item.replace("time=", "")).toFixed(1)} ms`);
    }
  });
});

const completeDeviceData = async props => {
  const ping = await setDevicePing(props.ip);
  result.push(_objectSpread(_objectSpread({}, props), {}, {
    ping
  }));
};

const getCamera = async ip => {
  try {
    const camera = new node_onvif__WEBPACK_IMPORTED_MODULE_0__.OnvifDevice({
      xaddr: `http://${ip}:80/onvif/device_service`,
      user: "",
      pass: ""
    });
    await camera.init();
  } catch (err) {
    if (err.message.includes("401")) {
      completeDeviceData({
        ip,
        type: "ONVIF",
        port: 80
      });
    } else if (err.message.includes("GetCapabilities")) {
      completeDeviceData({
        ip,
        type: "RTSP",
        port: 554
      });
    }
  }
};

const scanSpecialNetworkRange = async (ipRange = IP_RANGE) => {
  result = [];
  const rangeIPv4 = (0,get_ip_range__WEBPACK_IMPORTED_MODULE_3__.getIPRange)(ipRange.start, ipRange.end);
  rangeIPv4.push(ipRange.end);

  for await (const ip of rangeIPv4) {
    const status = await (0,is_port_reachable__WEBPACK_IMPORTED_MODULE_2__["default"])(80, {
      host: ip
    });

    if (status) {
      await getCamera(ip);
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scanSpecialNetworkRange);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;