"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/MouseGlow.tsx":
/*!**************************************!*\
  !*** ./src/components/MouseGlow.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MouseGlow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MouseGlow() {\n    _s();\n    const trailsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const prevPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const requestRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateTrails = ()=>{\n            trailsRef.current = trailsRef.current.map((trail)=>({\n                    ...trail,\n                    opacity: trail.opacity - 0.02 // 降低消失速度\n                })).filter((trail)=>trail.opacity > 0);\n            if (trailsRef.current.length > 0) {\n                requestRef.current = requestAnimationFrame(updateTrails);\n            }\n        };\n        const handleMouseMove = (e)=>{\n            // 计算当前点和上一个点之间的距离\n            const dx = e.clientX - prevPosition.current.x;\n            const dy = e.clientY - prevPosition.current.y;\n            const distance = Math.sqrt(dx * dx + dy * dy);\n            // 如果距离足够大，才添加新的点\n            if (distance > 5) {\n                // 在两点之间插入额外的点，使线条更平滑\n                const steps = Math.floor(distance / 5);\n                for(let i = 0; i <= steps; i++){\n                    const x = prevPosition.current.x + dx * i / steps;\n                    const y = prevPosition.current.y + dy * i / steps;\n                    trailsRef.current.push({\n                        x,\n                        y,\n                        opacity: 1\n                    });\n                }\n                prevPosition.current = {\n                    x: e.clientX,\n                    y: e.clientY\n                };\n            }\n            // 限制轨迹点数量\n            if (trailsRef.current.length > 50) {\n                trailsRef.current = trailsRef.current.slice(-50);\n            }\n            if (!requestRef.current) {\n                updateTrails();\n            }\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n            if (requestRef.current) {\n                cancelAnimationFrame(requestRef.current);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: trailsRef.current.map((trail, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"trail-effect\",\n                style: {\n                    transform: \"translate(\".concat(trail.x, \"px, \").concat(trail.y, \"px)\"),\n                    opacity: trail.opacity\n                }\n            }, index, false, {\n                fileName: \"/Users/wangqihu/Documents/personal-website/src/components/MouseGlow.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_s(MouseGlow, \"8org2P9fGPfCJbQjWIfYuYbiwzA=\");\n_c = MouseGlow;\nvar _c;\n$RefreshReg$(_c, \"MouseGlow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vdXNlR2xvdy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXlDO0FBRTFCLFNBQVNFOztJQUN0QixNQUFNQyxZQUFZRiw2Q0FBTUEsQ0FBOEMsRUFBRTtJQUN4RSxNQUFNRyxlQUFlSCw2Q0FBTUEsQ0FBQztRQUFFSSxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUN6QyxNQUFNQyxhQUFhTiw2Q0FBTUE7SUFFekJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsZUFBZTtZQUNuQkwsVUFBVU0sT0FBTyxHQUFHTixVQUFVTSxPQUFPLENBQ2xDQyxHQUFHLENBQUNDLENBQUFBLFFBQVU7b0JBQ2IsR0FBR0EsS0FBSztvQkFDUkMsU0FBU0QsTUFBTUMsT0FBTyxHQUFHLEtBQU0sU0FBUztnQkFDMUMsSUFDQ0MsTUFBTSxDQUFDRixDQUFBQSxRQUFTQSxNQUFNQyxPQUFPLEdBQUc7WUFFbkMsSUFBSVQsVUFBVU0sT0FBTyxDQUFDSyxNQUFNLEdBQUcsR0FBRztnQkFDaENQLFdBQVdFLE9BQU8sR0FBR00sc0JBQXNCUDtZQUM3QztRQUNGO1FBRUEsTUFBTVEsa0JBQWtCLENBQUNDO1lBQ3ZCLGtCQUFrQjtZQUNsQixNQUFNQyxLQUFLRCxFQUFFRSxPQUFPLEdBQUdmLGFBQWFLLE9BQU8sQ0FBQ0osQ0FBQztZQUM3QyxNQUFNZSxLQUFLSCxFQUFFSSxPQUFPLEdBQUdqQixhQUFhSyxPQUFPLENBQUNILENBQUM7WUFDN0MsTUFBTWdCLFdBQVdDLEtBQUtDLElBQUksQ0FBQ04sS0FBS0EsS0FBS0UsS0FBS0E7WUFFMUMsaUJBQWlCO1lBQ2pCLElBQUlFLFdBQVcsR0FBRztnQkFDaEIscUJBQXFCO2dCQUNyQixNQUFNRyxRQUFRRixLQUFLRyxLQUFLLENBQUNKLFdBQVc7Z0JBQ3BDLElBQUssSUFBSUssSUFBSSxHQUFHQSxLQUFLRixPQUFPRSxJQUFLO29CQUMvQixNQUFNdEIsSUFBSUQsYUFBYUssT0FBTyxDQUFDSixDQUFDLEdBQUcsS0FBTXNCLElBQUtGO29CQUM5QyxNQUFNbkIsSUFBSUYsYUFBYUssT0FBTyxDQUFDSCxDQUFDLEdBQUcsS0FBTXFCLElBQUtGO29CQUU5Q3RCLFVBQVVNLE9BQU8sQ0FBQ21CLElBQUksQ0FBQzt3QkFDckJ2Qjt3QkFDQUM7d0JBQ0FNLFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBRUFSLGFBQWFLLE9BQU8sR0FBRztvQkFBRUosR0FBR1ksRUFBRUUsT0FBTztvQkFBRWIsR0FBR1csRUFBRUksT0FBTztnQkFBQztZQUN0RDtZQUVBLFVBQVU7WUFDVixJQUFJbEIsVUFBVU0sT0FBTyxDQUFDSyxNQUFNLEdBQUcsSUFBSTtnQkFDakNYLFVBQVVNLE9BQU8sR0FBR04sVUFBVU0sT0FBTyxDQUFDb0IsS0FBSyxDQUFDLENBQUM7WUFDL0M7WUFFQSxJQUFJLENBQUN0QixXQUFXRSxPQUFPLEVBQUU7Z0JBQ3ZCRDtZQUNGO1FBQ0Y7UUFFQXNCLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFmO1FBQ3JDLE9BQU87WUFDTGMsT0FBT0UsbUJBQW1CLENBQUMsYUFBYWhCO1lBQ3hDLElBQUlULFdBQVdFLE9BQU8sRUFBRTtnQkFDdEJ3QixxQkFBcUIxQixXQUFXRSxPQUFPO1lBQ3pDO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR04sVUFBVU0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT3VCLHNCQUM3Qiw4REFBQ0M7Z0JBRUNDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xDLFdBQVcsYUFBMkIzQixPQUFkQSxNQUFNTixDQUFDLEVBQUMsUUFBYyxPQUFSTSxNQUFNTCxDQUFDLEVBQUM7b0JBQzlDTSxTQUFTRCxNQUFNQyxPQUFPO2dCQUN4QjtlQUxLc0I7Ozs7OztBQVVmO0dBNUV3QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdXNlR2xvdy50c3g/ZDE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW91c2VHbG93KCkge1xuICBjb25zdCB0cmFpbHNSZWYgPSB1c2VSZWY8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgb3BhY2l0eTogbnVtYmVyIH1bXT4oW10pXG4gIGNvbnN0IHByZXZQb3NpdGlvbiA9IHVzZVJlZih7IHg6IDAsIHk6IDAgfSlcbiAgY29uc3QgcmVxdWVzdFJlZiA9IHVzZVJlZjxudW1iZXI+KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVRyYWlscyA9ICgpID0+IHtcbiAgICAgIHRyYWlsc1JlZi5jdXJyZW50ID0gdHJhaWxzUmVmLmN1cnJlbnRcbiAgICAgICAgLm1hcCh0cmFpbCA9PiAoe1xuICAgICAgICAgIC4uLnRyYWlsLFxuICAgICAgICAgIG9wYWNpdHk6IHRyYWlsLm9wYWNpdHkgLSAwLjAyICAvLyDpmY3kvY7mtojlpLHpgJ/luqZcbiAgICAgICAgfSkpXG4gICAgICAgIC5maWx0ZXIodHJhaWwgPT4gdHJhaWwub3BhY2l0eSA+IDApXG5cbiAgICAgIGlmICh0cmFpbHNSZWYuY3VycmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlcXVlc3RSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVUcmFpbHMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIC8vIOiuoeeul+W9k+WJjeeCueWSjOS4iuS4gOS4queCueS5i+mXtOeahOi3neemu1xuICAgICAgY29uc3QgZHggPSBlLmNsaWVudFggLSBwcmV2UG9zaXRpb24uY3VycmVudC54XG4gICAgICBjb25zdCBkeSA9IGUuY2xpZW50WSAtIHByZXZQb3NpdGlvbi5jdXJyZW50LnlcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxuXG4gICAgICAvLyDlpoLmnpzot53nprvotrPlpJ/lpKfvvIzmiY3mt7vliqDmlrDnmoTngrlcbiAgICAgIGlmIChkaXN0YW5jZSA+IDUpIHtcbiAgICAgICAgLy8g5Zyo5Lik54K55LmL6Ze05o+S5YWl6aKd5aSW55qE54K577yM5L2/57q/5p2h5pu05bmz5ruRXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIDUpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gcHJldlBvc2l0aW9uLmN1cnJlbnQueCArIChkeCAqIGkpIC8gc3RlcHNcbiAgICAgICAgICBjb25zdCB5ID0gcHJldlBvc2l0aW9uLmN1cnJlbnQueSArIChkeSAqIGkpIC8gc3RlcHNcbiAgICAgICAgICBcbiAgICAgICAgICB0cmFpbHNSZWYuY3VycmVudC5wdXNoKHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2UG9zaXRpb24uY3VycmVudCA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfVxuICAgICAgfVxuXG4gICAgICAvLyDpmZDliLbovajov7nngrnmlbDph49cbiAgICAgIGlmICh0cmFpbHNSZWYuY3VycmVudC5sZW5ndGggPiA1MCkge1xuICAgICAgICB0cmFpbHNSZWYuY3VycmVudCA9IHRyYWlsc1JlZi5jdXJyZW50LnNsaWNlKC01MClcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXF1ZXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdXBkYXRlVHJhaWxzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgICAgaWYgKHJlcXVlc3RSZWYuY3VycmVudCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0UmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dHJhaWxzUmVmLmN1cnJlbnQubWFwKCh0cmFpbCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidHJhaWwtZWZmZWN0XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dHJhaWwueH1weCwgJHt0cmFpbC55fXB4KWAsXG4gICAgICAgICAgICBvcGFjaXR5OiB0cmFpbC5vcGFjaXR5XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59ICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJNb3VzZUdsb3ciLCJ0cmFpbHNSZWYiLCJwcmV2UG9zaXRpb24iLCJ4IiwieSIsInJlcXVlc3RSZWYiLCJ1cGRhdGVUcmFpbHMiLCJjdXJyZW50IiwibWFwIiwidHJhaWwiLCJvcGFjaXR5IiwiZmlsdGVyIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsImR4IiwiY2xpZW50WCIsImR5IiwiY2xpZW50WSIsImRpc3RhbmNlIiwiTWF0aCIsInNxcnQiLCJzdGVwcyIsImZsb29yIiwiaSIsInB1c2giLCJzbGljZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MouseGlow.tsx\n"));

/***/ })

});