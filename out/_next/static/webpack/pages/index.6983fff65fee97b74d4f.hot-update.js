webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ComingSoon/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/ComingSoon/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Blocks */ \"./src/components/Blocks/index.tsx\");\n/* harmony import */ var _CountDown_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CountDown/index */ \"./src/components/CountDown/index.tsx\");\n/* harmony import */ var _TwitterCommunity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TwitterCommunity */ \"./src/components/TwitterCommunity/index.tsx\");\n/* harmony import */ var _assets_ethereum_ultra_sound_bat_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/ethereum-ultra-sound-bat.svg */ \"./src/assets/ethereum-ultra-sound-bat.svg\");\n/* harmony import */ var _assets_ethereum_ultra_sound_bat_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_ethereum_ultra_sound_bat_svg__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Applications/CRYPTO/website_frontend/src/components/ComingSoon/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url, {\n    method: \"POST\",\n    body: JSON.stringify({\n      jsonrpc: \"2.0\",\n      method: \"eth_blockNumber\",\n      params: [],\n      id: 0\n    })\n  }).then(function (r) {\n    return r.json();\n  });\n};\n\nvar ComingSoon = function ComingSoon(_ref) {\n  _s();\n\n  var Data = _ref.Data;\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://eth-mainnet.alchemyapi.io/v2/H74MQLJkSLBJDyaDS2kyH7bXIBvjiTVe\", fetcher),\n      data = _useSWR.data;\n\n  var result = data && data.result;\n  var currentBlockNumber = parseInt(\"0x\" + Number(result), 16);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"wrapper bg-blue-midnightexpress coming-soon\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container m-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"block w-auto text-center pt-16\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"text-center\",\n            src: _assets_ethereum_ultra_sound_bat_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n            alt: Data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-white font-extralight text-5xl text-center\",\n            children: Data.main_title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full md:w-5/6 lg:w-3/6 md:m-auto pb-4 pt-16\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CountDown_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              targetDate: \"July 28, 2021\",\n              targetTime: \"00:00:00\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full md:w-5/6 lg:w-3/6 md:m-auto px-4 md:px-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Blocks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              Data: Data,\n              currentBlockNr: currentBlockNumber && currentBlockNumber\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex px-4 md:px-0 py-8 md:py-40\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full md:w-5/6 lg:w-2/3 md:m-auto\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TwitterCommunity__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              Data: Data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ComingSoon, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\n\nvar _c;\n\n$RefreshReg$(_c, \"ComingSoon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29taW5nU29vbi9pbmRleC50c3g/N2M5YiJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb25ycGMiLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJyIiwianNvbiIsIkNvbWluZ1Nvb24iLCJEYXRhIiwidXNlU1dSIiwiZGF0YSIsInJlc3VsdCIsImN1cnJlbnRCbG9ja051bWJlciIsInBhcnNlSW50IiwiTnVtYmVyIiwiRXRoTG9nbyIsInRpdGxlIiwibWFpbl90aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUNkQyxLQUFLLENBQUNELEdBQUQsRUFBTTtBQUNURSxVQUFNLEVBQUUsTUFEQztBQUVUQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxhQUFPLEVBQUUsS0FEVTtBQUVuQkosWUFBTSxFQUFFLGlCQUZXO0FBR25CSyxZQUFNLEVBQUUsRUFIVztBQUluQkMsUUFBRSxFQUFFO0FBSmUsS0FBZjtBQUZHLEdBQU4sQ0FBTCxDQVFHQyxJQVJILENBUVEsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsSUFBRixFQUFQO0FBQUEsR0FSUixDQURjO0FBQUEsQ0FBaEI7O0FBV0EsSUFBTUMsVUFBcUMsR0FBRyxTQUF4Q0EsVUFBd0MsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxnQkFDekNDLG1EQUFNLENBQ3JCLHVFQURxQixFQUVyQmYsT0FGcUIsQ0FEbUM7QUFBQSxNQUNsRGdCLElBRGtELFdBQ2xEQSxJQURrRDs7QUFLMUQsTUFBTUMsTUFBYyxHQUFHRCxJQUFJLElBQUlBLElBQUksQ0FBQ0MsTUFBcEM7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0MsUUFBUSxDQUFDLE9BQU9DLE1BQU0sQ0FBQ0gsTUFBRCxDQUFkLEVBQXdCLEVBQXhCLENBQW5DO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBQyxhQURaO0FBRUUsZUFBRyxFQUFFSSwyRUFGUDtBQUdFLGVBQUcsRUFBRVAsSUFBSSxDQUFDUTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFJLHFCQUFTLEVBQUMsaURBQWQ7QUFBQSxzQkFDR1IsSUFBSSxDQUFDUztBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0U7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsK0NBQWY7QUFBQSxtQ0FDRSxxRUFBQyx3REFBRDtBQUFXLHdCQUFVLEVBQUMsZUFBdEI7QUFBc0Msd0JBQVUsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFnQkU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsaURBQWY7QUFBQSxtQ0FDRSxxRUFBQywrQ0FBRDtBQUNFLGtCQUFJLEVBQUVULElBRFI7QUFFRSw0QkFBYyxFQUFFSSxrQkFBa0IsSUFBSUE7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQXdCRTtBQUFLLG1CQUFTLEVBQUMsaUNBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsb0NBQWY7QUFBQSxtQ0FDRSxxRUFBQyx5REFBRDtBQUFrQixrQkFBSSxFQUFFSjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9DRCxDQTNDRDs7R0FBTUQsVTtVQUNhRSwyQzs7O0tBRGJGLFU7QUE2Q1NBLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ29taW5nU29vbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEV0aEJsb2NrcyBmcm9tIFwiLi4vQmxvY2tzXCI7XG5pbXBvcnQgQ291bnREb3duIGZyb20gXCIuLi9Db3VudERvd24vaW5kZXhcIjtcbmltcG9ydCBUd2l0dGVyQ29tbXVuaXR5IGZyb20gXCIuLi9Ud2l0dGVyQ29tbXVuaXR5XCI7XG5pbXBvcnQgRXRoTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2V0aGVyZXVtLXVsdHJhLXNvdW5kLWJhdC5zdmdcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT5cbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBqc29ucnBjOiBcIjIuMFwiLFxuICAgICAgbWV0aG9kOiBcImV0aF9ibG9ja051bWJlclwiLFxuICAgICAgcGFyYW1zOiBbXSxcbiAgICAgIGlkOiAwLFxuICAgIH0pLFxuICB9KS50aGVuKChyKSA9PiByLmpzb24oKSk7XG5cbmNvbnN0IENvbWluZ1Nvb246IFJlYWN0LkZDPHsgRGF0YT86IERhdGEgfT4gPSAoeyBEYXRhIH0pID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL2V0aC1tYWlubmV0LmFsY2hlbXlhcGkuaW8vdjIvSDc0TVFMSmtTTEJKRHlhRFMya3lIN2JYSUJ2amlUVmVcIixcbiAgICBmZXRjaGVyXG4gICk7XG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyID0gZGF0YSAmJiBkYXRhLnJlc3VsdDtcbiAgY29uc3QgY3VycmVudEJsb2NrTnVtYmVyID0gcGFyc2VJbnQoXCIweFwiICsgTnVtYmVyKHJlc3VsdCksIDE2KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIGJnLWJsdWUtbWlkbmlnaHRleHByZXNzIGNvbWluZy1zb29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG0tYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1hdXRvIHRleHQtY2VudGVyIHB0LTE2XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3JjPXtFdGhMb2dvfVxuICAgICAgICAgICAgICBhbHQ9e0RhdGEudGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1leHRyYWxpZ2h0IHRleHQtNXhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtEYXRhLm1haW5fdGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy01LzYgbGc6dy0zLzYgbWQ6bS1hdXRvIHBiLTQgcHQtMTZcIj5cbiAgICAgICAgICAgICAgPENvdW50RG93biB0YXJnZXREYXRlPVwiSnVseSAyOCwgMjAyMVwiIHRhcmdldFRpbWU9XCIwMDowMDowMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctNS82IGxnOnctMy82IG1kOm0tYXV0byBweC00IG1kOnB4LTBcIj5cbiAgICAgICAgICAgICAgPEV0aEJsb2Nrc1xuICAgICAgICAgICAgICAgIERhdGE9e0RhdGF9XG4gICAgICAgICAgICAgICAgY3VycmVudEJsb2NrTnI9e2N1cnJlbnRCbG9ja051bWJlciAmJiBjdXJyZW50QmxvY2tOdW1iZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHgtNCBtZDpweC0wIHB5LTggbWQ6cHktNDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctNS82IGxnOnctMi8zIG1kOm0tYXV0b1wiPlxuICAgICAgICAgICAgICA8VHdpdHRlckNvbW11bml0eSBEYXRhPXtEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21pbmdTb29uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ComingSoon/index.tsx\n");

/***/ })

})