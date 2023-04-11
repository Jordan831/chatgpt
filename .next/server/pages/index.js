/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n\n\nfunction Layout({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\chatgpt\\\\components\\\\Layout.js\",\n        lineNumber: 4,\n        columnNumber: 1\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBQzFCLFNBQVNBLE9BQU8sRUFBRUMsU0FBUSxFQUFFLEVBQUU7SUFDN0MscUJBQ0EsOERBQUNDO1FBQUlDLFdBQVU7a0JBQWFGOzs7Ozs7QUFFNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRncHQvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG5yZXR1cm4gKFxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj5cclxuKVxyXG59Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_3__]);\n([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst Home = ()=>{\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto col-10 col-md-8 col-lg-6\",\n                children: [\n                    error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"alert alert-danger mt-4\",\n                        children: [\n                            error,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit(async (data)=>{\n                            axios__WEBPACK_IMPORTED_MODULE_5__.post(\"/api/login\", {\n                                email: data.email,\n                                password: data.password\n                            }).then(function(response) {\n                                console.log(response);\n                                if (response.data.success) {\n                                    js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"token\", response.data.token);\n                                    router.push(\"/upload\");\n                                } else {\n                                    setError(response.data.error);\n                                }\n                            }).catch(function(error) {\n                                console.log(error);\n                            });\n                        }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3 mt-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        className: \"form-label\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        className: \"form-control\",\n                                        id: \"email\",\n                                        ...register(\"email\", {\n                                            required: true\n                                        }),\n                                        placeholder: \"Enter email\",\n                                        name: \"email\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"pwd\",\n                                        className: \"form-label\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 1\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        className: \"form-control\",\n                                        ...register(\"password\", {\n                                            required: true\n                                        }),\n                                        id: \"pwd\",\n                                        placeholder: \"Enter password\",\n                                        name: \"password\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 1\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"btn btn-primary mb-4\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 1\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\chatgpt\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 8\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDQTtBQUNWO0FBQ0M7QUFDUDtBQUNjO0FBQ3hDLE1BQU1NLE9BQU8sSUFBSTtJQUNqQixNQUFNLENBQUNDLE9BQU1DLFNBQVMsR0FBQ0wsK0NBQVFBO0lBQy9CLE1BQU1NLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLFNBQVEsRUFBQ0MsYUFBWSxFQUFDQyxXQUFXLEVBQUVDLE9BQU0sRUFBRSxHQUFFLEdBQUdaLHdEQUFPQTtJQUMvRCxxQkFBTyw4REFBQ0QsMERBQU1BO2tCQUNkLDRFQUFDYztZQUFJQyxXQUFVO3NCQUNmLDRFQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ2RSLHNCQUFTLDhEQUFDTzt3QkFBSUMsV0FBVTs7NEJBQTJCUjs0QkFBTTs7Ozs7O29DQUFTLEVBQUU7a0NBQ3JFLDhEQUFDUzt3QkFBS0MsVUFBVU4sYUFBYSxPQUFNTyxPQUFTOzRCQUM1Q2QsdUNBQVUsQ0FBQyxjQUFjO2dDQUN6QmdCLE9BQU9GLEtBQUtFLEtBQUs7Z0NBQ2pCQyxVQUFVSCxLQUFLRyxRQUFROzRCQUN2QixHQUNDQyxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dDQUMxQkMsUUFBUUMsR0FBRyxDQUFDRjtnQ0FDWixJQUFHQSxTQUFTTCxJQUFJLENBQUNRLE9BQU8sRUFDeEI7b0NBQ0F4QixxREFBVyxDQUFDLFNBQVFxQixTQUFTTCxJQUFJLENBQUNVLEtBQUs7b0NBQ3ZDbkIsT0FBT29CLElBQUksQ0FBQztnQ0FDWixPQUVBO29DQUNBckIsU0FBU2UsU0FBU0wsSUFBSSxDQUFDWCxLQUFLO2dDQUM1QixDQUFDOzRCQUNELEdBQ0N1QixLQUFLLENBQUMsU0FBVXZCLEtBQUssRUFBRTtnQ0FDeEJpQixRQUFRQyxHQUFHLENBQUNsQjs0QkFDWjt3QkFFQTs7MENBQ0EsOERBQUNPO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ2dCO3dDQUFNQyxTQUFRO3dDQUFRakIsV0FBVTtrREFBYTs7Ozs7O2tEQUM5Qyw4REFBQ2tCO3dDQUFNQyxNQUFLO3dDQUFRbkIsV0FBVTt3Q0FBZW9CLElBQUc7d0NBQVUsR0FBR3pCLFNBQVMsU0FBUzs0Q0FBRTBCLFVBQVUsSUFBSTt3Q0FBQyxFQUFFO3dDQUFDQyxhQUFZO3dDQUFjQyxNQUFLOzs7Ozs7Ozs7Ozs7MENBRWxJLDhEQUFDeEI7Z0NBQUlDLFdBQVU7O2tEQUNmLDhEQUFDZ0I7d0NBQU1DLFNBQVE7d0NBQU1qQixXQUFVO2tEQUFhOzs7Ozs7a0RBQzVDLDhEQUFDa0I7d0NBQU1DLE1BQUs7d0NBQVduQixXQUFVO3dDQUFnQixHQUFHTCxTQUFTLFlBQVk7NENBQUUwQixVQUFVLElBQUk7d0NBQUMsRUFBRTt3Q0FBRUQsSUFBRzt3Q0FDakdFLGFBQVk7d0NBQWlCQyxNQUFLOzs7Ozs7Ozs7Ozs7MENBRWxDLDhEQUFDQztnQ0FBT0wsTUFBSztnQ0FBU25CLFdBQVU7MENBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZEO0FBQ0EsaUVBQWVULElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Z3B0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBIb21lID0gKCk9PntcclxuY29uc3QgW2Vycm9yLHNldEVycm9yXT11c2VTdGF0ZSgpO1xyXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuY29uc3QgeyByZWdpc3RlcixoYW5kbGVTdWJtaXQsZm9ybVN0YXRlOiB7IGVycm9ycyB9LH0gPSB1c2VGb3JtKCk7XHJcbnJldHVybig8TGF5b3V0PlxyXG48ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG48ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gY29sLTEwIGNvbC1tZC04IGNvbC1sZy02XCI+XHJcbntlcnJvciA/ICg8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBtdC00XCI+e2Vycm9yfSA8L2Rpdj4pOlwiXCIgfVxyXG48Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFzeW5jKGRhdGEpID0+IHtcclxuYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIHtcclxuZW1haWw6IGRhdGEuZW1haWwsXHJcbnBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkXHJcbn0pXHJcbi50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbmlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcylcclxue1xyXG5Db29raWVzLnNldCgndG9rZW4nLHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG5yb3V0ZXIucHVzaChcIi91cGxvYWRcIilcclxufVxyXG5lbHNlXHJcbntcclxuc2V0RXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvcilcclxufVxyXG59KVxyXG4uY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbmNvbnNvbGUubG9nKGVycm9yKTtcclxufSk7XHJcblxyXG59KX0+XHJcbjxkaXYgY2xhc3NOYW1lPVwibWItMyBtdC0zXCI+XHJcbjxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RW1haWw8L2xhYmVsPlxyXG48aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1wbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG48bGFiZWwgaHRtbEZvcj1cInB3ZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XHJcbjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogdHJ1ZSB9KX0gaWQ9XCJwd2RcIlxyXG5wbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuPC9kaXY+XHJcbjxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi00XCI+TG9naW48L2J1dHRvbj5cclxuPC9mb3JtPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjwvTGF5b3V0PilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsInVzZUZvcm0iLCJDb29raWVzIiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkhvbWUiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJkYXRhIiwicG9zdCIsImVtYWlsIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsInNldCIsInRva2VuIiwicHVzaCIsImNhdGNoIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwibmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();