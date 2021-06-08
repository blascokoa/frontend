webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CountDown/index.tsx":
/*!********************************************!*\
  !*** ./src/components/CountDown/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Applications_CRYPTO_website_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _jsxFileName = \"/Applications/CRYPTO/website_frontend/src/components/CountDown/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Countdown = function Countdown(_ref) {\n  _s();\n\n  var targetDate = _ref.targetDate,\n      targetTime = _ref.targetTime;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"]({\n    days: 0,\n    hours: 0,\n    minutes: 0,\n    seconds: 0\n  }),\n      _React$useState2 = Object(_Applications_CRYPTO_website_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      state = _React$useState2[0],\n      setState = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](false),\n      _React$useState4 = Object(_Applications_CRYPTO_website_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isExpired = _React$useState4[0],\n      setIsExpired = _React$useState4[1];\n\n  var timer;\n  var distance;\n\n  var setDate = function setDate() {\n    var now = new Date().getTime();\n    var countDownDate = new Date(targetDate + \" \" + targetTime).getTime();\n    distance = countDownDate - now;\n\n    if (distance < 0) {\n      clearInterval(timer);\n      setIsExpired(true);\n    } else {\n      setState({\n        days: Math.floor(distance / (1000 * 60 * 60 * 24)),\n        hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),\n        minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),\n        seconds: Math.floor(distance % (1000 * 60) / 1000)\n      });\n      setIsExpired(false);\n    }\n  };\n\n  var counter = function counter() {\n    timer = setInterval(function () {\n      setDate();\n    }, 1000);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    setDate();\n    counter(); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: !isExpired && targetDate && targetTime ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"inline-flex justify-center w-full z-20 px-4 md:px-0\",\n      children: Object.entries(state).map(function (el, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"entry flex-1 md:py-4 mx-1 md:mx-2 bg-blue-midnightexpress first:ml-0 last:mr-0\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"entry-value text-5xl sm:text-6xl md:text-7xl\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"count top curr flipTop\",\n              children: el[1] + 1\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"count top next\",\n              children: el[1]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"count bottom next flipBottom\",\n              children: el[1]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"count bottom curr\",\n              children: el[1] + 1\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 17\n            }, _this)]\n          }, el[1], true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"entry-title text-sm my-2\",\n            children: el[0].toUpperCase()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"inline-flex justify-center w-full bg-transparent py-24\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Yey!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Countdown, \"DH0nLZP8SjgOzAqsu2XGuXnfBkw=\");\n\n_c = Countdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnREb3duL2luZGV4LnRzeD8yZjgxIl0sIm5hbWVzIjpbIkNvdW50ZG93biIsInRhcmdldERhdGUiLCJ0YXJnZXRUaW1lIiwiUmVhY3QiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0YXRlIiwic2V0U3RhdGUiLCJpc0V4cGlyZWQiLCJzZXRJc0V4cGlyZWQiLCJ0aW1lciIsImRpc3RhbmNlIiwic2V0RGF0ZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY291bnREb3duRGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJjb3VudGVyIiwic2V0SW50ZXJ2YWwiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZWwiLCJpIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBS0EsSUFBTUEsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsT0FBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsVUFBNkIsUUFBN0JBLFVBQTZCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSx3QkFDaERDLDhDQUFBLENBQWU7QUFDdkNDLFFBQUksRUFBRSxDQURpQztBQUV2Q0MsU0FBSyxFQUFFLENBRmdDO0FBR3ZDQyxXQUFPLEVBQUUsQ0FIOEI7QUFJdkNDLFdBQU8sRUFBRTtBQUo4QixHQUFmLENBRGdEO0FBQUE7QUFBQSxNQUNuRUMsS0FEbUU7QUFBQSxNQUM1REMsUUFENEQ7O0FBQUEseUJBT3hDTiw4Q0FBQSxDQUFlLEtBQWYsQ0FQd0M7QUFBQTtBQUFBLE1BT25FTyxTQVBtRTtBQUFBLE1BT3hEQyxZQVB3RDs7QUFRMUUsTUFBSUMsS0FBSjtBQUNBLE1BQUlDLFFBQUo7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixRQUFNQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVo7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QUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkosbUJBREY7QUErQkQsQ0ExRUQ7O0dBQU01QixTOztLQUFBQSxTO0FBMkVTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdW50RG93bi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnR5cGUgQ291bnREb3duUHJvcHMgPSB7XG4gIHRhcmdldERhdGU6IHN0cmluZztcbiAgdGFyZ2V0VGltZTogc3RyaW5nO1xufTtcbmNvbnN0IENvdW50ZG93bjogUmVhY3QuRkM8Q291bnREb3duUHJvcHM+ID0gKHsgdGFyZ2V0RGF0ZSwgdGFyZ2V0VGltZSB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGRheXM6IDAsXG4gICAgaG91cnM6IDAsXG4gICAgbWludXRlczogMCxcbiAgICBzZWNvbmRzOiAwLFxuICB9KTtcbiAgY29uc3QgW2lzRXhwaXJlZCwgc2V0SXNFeHBpcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IHRpbWVyOiBhbnk7XG4gIGxldCBkaXN0YW5jZTtcblxuICBjb25zdCBzZXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSh0YXJnZXREYXRlICsgXCIgXCIgKyB0YXJnZXRUaW1lKS5nZXRUaW1lKCk7XG4gICAgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xuICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgc2V0SXNFeHBpcmVkKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGRheXM6IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgICBob3VyczogTWF0aC5mbG9vcihcbiAgICAgICAgICAoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICApLFxuICAgICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxuICAgICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApLFxuICAgICAgfSk7XG4gICAgICBzZXRJc0V4cGlyZWQoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb3VudGVyID0gKCkgPT4ge1xuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0RGF0ZSgpO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGF0ZSgpO1xuICAgIGNvdW50ZXIoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWlzRXhwaXJlZCAmJiB0YXJnZXREYXRlICYmIHRhcmdldFRpbWUgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHotMjAgcHgtNCBtZDpweC0wXCI+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKHN0YXRlKS5tYXAoKGVsLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW50cnkgZmxleC0xIG1kOnB5LTQgbXgtMSBtZDpteC0yIGJnLWJsdWUtbWlkbmlnaHRleHByZXNzIGZpcnN0Om1sLTAgbGFzdDptci0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17ZWxbMV19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW50cnktdmFsdWUgdGV4dC01eGwgc206dGV4dC02eGwgbWQ6dGV4dC03eGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnQgdG9wIGN1cnIgZmxpcFRvcFwiPntlbFsxXSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50IHRvcCBuZXh0XCI+e2VsWzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudCBib3R0b20gbmV4dCBmbGlwQm90dG9tXCI+e2VsWzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudCBib3R0b20gY3VyclwiPntlbFsxXSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS10aXRsZSB0ZXh0LXNtIG15LTJcIj5cbiAgICAgICAgICAgICAgICB7ZWxbMF0udG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBiZy10cmFuc3BhcmVudCBweS0yNFwiPlxuICAgICAgICAgIDxoMT5ZZXkhPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CountDown/index.tsx\n");

/***/ })

})