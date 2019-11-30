(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-modules/dashboard/dasboard.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-modules/dashboard/dasboard.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dasboard works! : {{jsonData}}</p>");

/***/ }),

/***/ "./src/app/core/services/module-services/dashboard.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/services/module-services/dashboard.service.ts ***!
  \********************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_api_services_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-api-services/base-api-service */ "./src/app/core/services/base-api-services/base-api-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/url.constants */ "./src/app/core/common/url.constants.ts");




let DashboardService = class DashboardService {
    constructor(baseApiService) {
        this.baseApiService = baseApiService;
    }
    getData(request) {
        return this.baseApiService.get(_common_url_constants__WEBPACK_IMPORTED_MODULE_3__["UrlConstants"].API_GET_DASHBOARD + request);
    }
};
DashboardService.ctorParameters = () => [
    { type: _base_api_services_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/modules/main-modules/dashboard/dasboard.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/modules/main-modules/dashboard/dasboard.component.sass ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi1tb2R1bGVzL2Rhc2hib2FyZC9kYXNib2FyZC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main-modules/dashboard/dasboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/main-modules/dashboard/dasboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DasboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DasboardComponent", function() { return DasboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_module_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/module-services/dashboard.service */ "./src/app/core/services/module-services/dashboard.service.ts");



let DasboardComponent = class DasboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        this._loadData();
    }
    _loadData() {
        this.dashboardService.getData('page=2').subscribe(response => {
            this.jsonData = JSON.stringify(response.data);
            //  alert(response.data);        
        }, err => {
            console.log(err);
        });
    }
};
DasboardComponent.ctorParameters = () => [
    { type: _core_services_module_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
];
DasboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dasboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dasboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-modules/dashboard/dasboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dasboard.component.sass */ "./src/app/modules/main-modules/dashboard/dasboard.component.sass")).default]
    })
], DasboardComponent);



/***/ }),

/***/ "./src/app/modules/main-modules/dashboard/dashboard-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/main-modules/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dasboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dasboard.component */ "./src/app/modules/main-modules/dashboard/dasboard.component.ts");




const routes = [
    {
        path: '',
        component: _dasboard_component__WEBPACK_IMPORTED_MODULE_3__["DasboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/modules/main-modules/dashboard/dashboard.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/main-modules/dashboard/dashboard.module.ts ***!
  \********************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/main-modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dasboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dasboard.component */ "./src/app/modules/main-modules/dashboard/dasboard.component.ts");





let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dasboard_component__WEBPACK_IMPORTED_MODULE_4__["DasboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map