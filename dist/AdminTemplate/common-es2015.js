(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/common/url.constants.ts":
/*!**********************************************!*\
  !*** ./src/app/core/common/url.constants.ts ***!
  \**********************************************/
/*! exports provided: UrlConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConstants", function() { return UrlConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UrlConstants {
}
UrlConstants.API_GET_DASHBOARD = 'api/users?';
UrlConstants.API_GET_LOADDATA = 'api/users?';


/***/ }),

/***/ "./src/app/core/services/base-api-services/base-api-service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/services/base-api-services/base-api-service.ts ***!
  \*********************************************************************/
/*! exports provided: BaseApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiService", function() { return BaseApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let BaseApiService = class BaseApiService {
    constructor(http) {
        this.http = http;
    }
    get(uri, data) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + uri, { params: data });
    }
    post(uri, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + uri, data);
    }
    put(uri, data) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + uri, data);
    }
    delete(uri, key, id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + uri + "/?" + key + "=" + id);
    }
    postFile(uri, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + uri, data);
    }
};
BaseApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BaseApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaseApiService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map