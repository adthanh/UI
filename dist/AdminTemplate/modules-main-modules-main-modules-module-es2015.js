(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-modules-main-modules-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n    <div class=\"col-md-12\">\n        @copyrisssssssssssssssssssss\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/navigation-bar/navigation-bar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/navigation-bar/navigation-bar.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">SB Admin Angular8 BS4 </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n        <span class=\"navbar-toggler-icon\"></span>\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n    <ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex\">\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\" id=\"bd-versions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              v4.0\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"bd-versions\">\n                <a class=\"dropdown-item\" href=\"/docs/4.1/\">Latest (v4.1.x)</a>\n                <a class=\"dropdown-item active\" href=\"/docs/4.0/\">v4.0.0</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"https://v4-alpha.getbootstrap.com/\">v4 Alpha 6</a>\n                <a class=\"dropdown-item\" href=\"https://getbootstrap.com/docs/3.3/\">v3.3.7</a>\n                <a class=\"dropdown-item\" href=\"https://getbootstrap.com/2.3.2/\">v2.3.2</a>\n            </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a href=\"javascript:void(0)\" class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" id=\"bd-profile\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"bd-profile\">\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                    <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                </a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                    <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                </a>\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                    <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                </a>\n                <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                    <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                </a>\n            </div>\n        </li>\n    </ul>\n    <!-- <div class=\"collapse navbar-collapse\">\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\">\n        </form>\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item d-none d-xl-block\">\n                <a href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-7/archive/master.zip\" class=\"nav-link btn mt-1\" role=\"button\" style=\"padding: .375rem 1rem !important;border-color: #999;\">\n                    {{ 'Download Now' | translate }}\n                </a>\n            </li> &nbsp;\n            <li class=\"nav-item\">\n                <a href=\"javascript:void(0)\" class=\"nav-link mt-1\" style=\"padding: 0.375rem 1rem !important; border-color: #999;\" (click)=\"rltAndLtr()\">\n                    RTL/LTR\n                </a>\n            </li> &nbsp;\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\">\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\">\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img class=\"d-flex align-self-center mr-3\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\" />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n                    <li class=\"dropdown-divider\"></li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        {{ 'View All' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                        {{ 'English' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                        {{ 'French' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                        {{ 'Urdu' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                        {{ 'Spanish' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                        {{ 'Italian' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                        {{ 'Farsi' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                        {{ 'German' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('zh-CHS')\">\n                        {{ 'Simplified Chinese' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div> -->\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/side-bar/side-bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/side-bar/side-bar.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\n            <span>{{ 'Dashboard' | translate }}</span>\n        </a>\n        <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\n            <span>{{ 'Charts' | translate }}</span>\n        </a>\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;\n            <span>{{ 'Tables' | translate }}</span>\n        </a>\n        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\n            <span>{{ 'Forms' | translate }}</span>\n        </a>\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\n            <span>{{ 'Bootstrap Element' | translate }}</span>\n        </a>\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\n            <span>{{ 'Bootstrap Grid' | translate }}</span>\n        </a>\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i>&nbsp;\n            <span>{{ 'Component' | translate }}</span>\n        </a>\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\n                <i class=\"fa fa-{{showMenu !== 'pages' ? 'plus' : 'minus'}}\"></i>&nbsp;\n                <span>{{ 'Menu' | translate }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>&nbsp;\n            <span>{{ 'Blank Page' | translate }}</span>\n        </a>\n        <div class=\"header-fields\">\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\n            </a>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n                                {{ 'English' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\n                                {{ 'French' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\n                                {{ 'Urdu' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\n                                {{ 'Spanish' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\n                                {{ 'Italian' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\n                                {{ 'Farsi' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\n                                {{ 'German' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\n                    <span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n    <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\n        <i class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></i>&nbsp;\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-modules/main-modules.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-modules/main-modules.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation-bar></app-navigation-bar>\n<app-side-bar></app-side-bar>\n<section class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>");

/***/ }),

/***/ "./src/app/core/layout/footer/footer.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/core/layout/footer/footer.component.sass ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/core/layout/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/layout/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.sass */ "./src/app/core/layout/footer/footer.component.sass")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/core/layout/navigation-bar/navigation-bar.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/core/layout/navigation-bar/navigation-bar.component.sass ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .navbar {\n  background-color: #563d7c;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #999;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvbmF2aWdhdGlvbi1iYXIvRDpcXFR1bmdcXFRo4buxYyBU4bqtcCAyXFxhbmd1bGFyXFx6aXBVSS9zcmNcXGFwcFxcY29yZVxcbGF5b3V0XFxuYXZpZ2F0aW9uLWJhclxcbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvcmUvbGF5b3V0L25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0kseUJBSGtCO0VBSWxCLGdGQUFBO0FDRFI7QURFUTtFQUNJLFdBQUE7QUNBWjtBREVRO0VBQ0ksV0FBQTtBQ0FaO0FEQ1k7RUFDSSxXQUFBO0FDQ2hCO0FER0k7RUFDSSxZQUFBO0FDRFI7QURFUTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRENZO0VBQ0ksbUJBQUE7QUNDaEI7QURHWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0RoQjtBREdZO0VBQ0ksU0FBQTtBQ0RoQjtBREdZO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dC9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzU2M2Q3Y1xuOmhvc3QgXG4gICAgLm5hdmJhciBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwuMDUpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4xKVxuICAgICAgICAubmF2YmFyLWJyYW5kIFxuICAgICAgICAgICAgY29sb3I6ICNmZmZcbiAgICAgICAgXG4gICAgICAgIC5uYXYtaXRlbSA+IGEgXG4gICAgICAgICAgICBjb2xvcjogIzk5OVxuICAgICAgICAgICAgJjpob3ZlciBcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgIFxuICAgIC5tZXNzYWdlcyBcbiAgICAgICAgd2lkdGg6IDMwMHB4XG4gICAgICAgIC5tZWRpYSBcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmVcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLm1lZGlhLWJvZHkgXG4gICAgICAgICAgICBoNSBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHhcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zbWFsbCBcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmxhc3QgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgXG5cbiIsIjpob3N0IC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzZDdjO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbjpob3N0IC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLm5hdmJhciAubmF2LWl0ZW0gPiBhIHtcbiAgY29sb3I6ICM5OTk7XG59XG46aG9zdCAubmF2YmFyIC5uYXYtaXRlbSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IC5tZXNzYWdlcyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IGg1IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IC5zbWFsbCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWEtYm9keSAubGFzdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/layout/navigation-bar/navigation-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/layout/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let NavigationBarComponent = class NavigationBarComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.pushRightClass = 'push-right';
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
};
NavigationBarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/navigation-bar/navigation-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation-bar.component.sass */ "./src/app/core/layout/navigation-bar/navigation-bar.component.sass")).default]
    })
], NavigationBarComponent);



/***/ }),

/***/ "./src/app/core/layout/side-bar/side-bar.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/core/layout/side-bar/side-bar.component.sass ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222d32;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar .list-group a.list-group-item {\n  background: #222d32;\n  border: 0;\n  border-radius: 0;\n  color: #999;\n  text-decoration: none;\n}\n.sidebar .list-group a.list-group-item .fa {\n  margin-right: 10px;\n}\n.sidebar .list-group a:hover {\n  background: #181f23;\n  color: #fff;\n}\n.sidebar .list-group a.router-link-active {\n  background: #181f23;\n  color: #fff;\n}\n.sidebar .list-group .header-fields {\n  padding-top: 10px;\n}\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sidebar .sidebar-dropdown *:focus {\n  border-radius: none;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-title {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n.sidebar .sidebar-dropdown .panel-title a {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #222d32;\n}\n.sidebar .sidebar-dropdown .panel-title a span {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n.sidebar .sidebar-dropdown .panel-title a:hover,\n.sidebar .sidebar-dropdown .panel-title a:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n.sidebar .sidebar-dropdown .panel-title:hover {\n  background: #181f23;\n}\n.sidebar .sidebar-dropdown .panel-collapse {\n  border-radious: 0;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n  border-radius: 0;\n  background-color: #222d32;\n  border: 0 solid transparent;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n  color: #999;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n  color: #fff;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n  background: #181f23;\n}\n.nested-menu .list-group-item {\n  cursor: pointer;\n}\n.nested-menu .nested {\n  list-style-type: none;\n  -webkit-animation: slide-down 0.5s ease-out;\n  -moz-animation: slide-down 0.5s ease-out;\n}\n.nested-menu ul.submenu {\n  display: none;\n  height: 0;\n}\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  -webkit-animation: slide-down 0.5s ease-out;\n  -moz-animation: slide-down 0.5s ease-out;\n}\n.nested-menu .expand ul.submenu li a {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(-20%);\n  }\n}\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px;\n  }\n}\n@media print {\n  .sidebar {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields {\n    display: none;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white;\n}\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  border-top--webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button i {\n  font-size: 23px;\n}\n.toggle-button:hover {\n  background: #181f23;\n  color: #fff;\n}\n.collapsed {\n  width: 60px;\n}\n.collapsed span {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvc2lkZS1iYXIvRDpcXFR1bmdcXFRo4buxYyBU4bqtcCAyXFxhbmd1bGFyXFx6aXBVSS9zcmNcXGFwcFxcY29yZVxcbGF5b3V0XFxzaWRlLWJhclxcc2lkZS1iYXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvcmUvbGF5b3V0L3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQWRzQjtFQWV0QixTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBS0EsZ0NBQUE7QUNESjtBREtRO0VBQ0ksbUJBNUJjO0VBNkJkLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0haO0FES1k7RUFDSSxrQkFBQTtBQ0hoQjtBREtRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSFo7QURLUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0haO0FES1E7RUFDSSxpQkFBQTtBQ0haO0FES1k7RUFDSSw4Q0FBQTtBQ0hoQjtBRE1RO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDSlo7QURNUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKWjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFqRVU7QUM2RDFCO0FETWdCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0pwQjtBRE1ZOztFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNKaEI7QURNUTtFQUNJLG1CQUFBO0FDSlo7QURNUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0paO0FET2dCO0VBQ0ksZ0JBQUE7RUFDQSx5QkF6Rk07RUEwRk4sMkJBQUE7QUNMcEI7QURPb0I7RUFDSSxXQUFBO0FDTHhCO0FET29CO0VBQ0ksV0FBQTtBQ0x4QjtBRE9nQjtFQUNJLG1CQUFBO0FDTHBCO0FEUUk7RUFDSSxlQUFBO0FDTFI7QURPSTtFQUNJLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3Q0FBQTtBQ0xSO0FET0k7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ0xSO0FEUVE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSx3Q0FBQTtBQ05aO0FEU2dCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDUHBCO0FEU0E7RUFDRTtJQUNrQixVQUFBO0lBQ0EsbUNBQUE7RUNObEI7RURRQTtJQUNrQixVQUFBO0lBQ0EsZ0NBQUE7RUNObEI7QUFDRjtBRGdCQTtFQUNFO0lBQ2tCLFVBQUE7SUFDQSxnQ0FBQTtFQ0psQjtFRE1BO0lBQ2tCLFVBQUE7SUFDQSxtQ0FBQTtFQ0psQjtBQUNGO0FEZUE7RUFDSTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VDSE47QUFDRjtBRElBO0VBQ0k7SUFDSSx3QkFBQTtFQ0ZOO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0ROO0FBQ0Y7QURFQTtFQUNJLFVBQUE7QUNBSjtBREVBO0VBQ0ksdUNBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0FDRUo7QURBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBU0EsMEJBQUE7RUFDSSxtREFBQTtFQUlKLGdDQUFBO0FDTEo7QURQSTtFQUNJLGVBQUE7QUNTUjtBRFBJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDU1I7QURBQTtFQUNJLFdBQUE7QUNHSjtBRERJO0VBQ0ksYUFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sYXlvdXQvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjJkMzJcblxuLnNpZGViYXJcbiAgICBib3JkZXItcmFkaXVzICAgICA6IDBcbiAgICBwb3NpdGlvbiAgICAgICAgICA6IGZpeGVkXG4gICAgei1pbmRleCAgICAgICAgICAgOiAxMDAwXG4gICAgdG9wICAgICAgICAgICAgICAgOiA1NnB4XG4gICAgbGVmdCAgICAgICAgICAgICAgOiAyMzVweFxuICAgIHdpZHRoICAgICAgICAgICAgIDogMjM1cHhcbiAgICBtYXJnaW4tbGVmdCAgICAgICA6IC0yMzVweFxuICAgIG1hcmdpbi1ib3R0b20gICAgIDogNDhweFxuICAgIGJvcmRlciAgICAgICAgICAgIDogbm9uZVxuICAgIGJvcmRlci1yYWRpdXMgICAgIDogMFxuICAgIG92ZXJmbG93LXkgICAgICAgIDogYXV0b1xuICAgIGJhY2tncm91bmQtY29sb3IgIDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yXG4gICAgYm90dG9tICAgICAgICAgICAgOiAwXG4gICAgb3ZlcmZsb3cteCAgICAgICAgOiBoaWRkZW5cbiAgICBwYWRkaW5nLWJvdHRvbSAgICA6IDQwcHhcbiAgICB3aGl0ZS1zcGFjZSAgICAgICA6IG5vd3JhcFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcbiAgICAtbW96LXRyYW5zaXRpb24gICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0XG4gICAgLW1zLXRyYW5zaXRpb24gICAgOiBhbGwgMC4ycyBlYXNlLWluLW91dFxuICAgIC1vLXRyYW5zaXRpb24gICAgIDogYWxsIDAuMnMgZWFzZS1pbi1vdXRcbiAgICB0cmFuc2l0aW9uICAgICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0XG5cbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpXG4gICAgLmxpc3QtZ3JvdXBcbiAgICAgICAgYS5saXN0LWdyb3VwLWl0ZW1cbiAgICAgICAgICAgIGJhY2tncm91bmQgICAgIDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yXG4gICAgICAgICAgICBib3JkZXIgICAgICAgICA6IDBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgIDogMFxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiAjOTk5XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcblxuICAgICAgICAgICAgLmZhXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG5cbiAgICAgICAgYTpob3ZlclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpXG4gICAgICAgICAgICBjb2xvciAgICAgOiAjZmZmXG5cbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmVcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKVxuICAgICAgICAgICAgY29sb3IgICAgIDogI2ZmZlxuXG4gICAgICAgIC5oZWFkZXItZmllbGRzXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweFxuXG4gICAgICAgICAgICA+Lmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcblxuICAgIC5zaWRlYmFyLWRyb3Bkb3duXG4gICAgICAgICo6Zm9jdXNcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmVcbiAgICAgICAgICAgIGJvcmRlciAgICAgICA6IG5vbmVcblxuICAgICAgICAucGFuZWwtdGl0bGVcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgICA6IDFyZW1cbiAgICAgICAgICAgIGhlaWdodCAgICAgICA6IDUwcHhcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcblxuICAgICAgICAgICAgYVxuICAgICAgICAgICAgICAgIGNvbG9yICAgICAgICAgIDogIzk5OVxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0ICAgIDogNDAwXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3JcblxuICAgICAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gICA6IHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgICAgOiBibG9ja1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICAgIDogMC43NXJlbSAxLjVyZW1cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW1cblxuICAgICAgICAgICAgYTpob3ZlcixcbiAgICAgICAgICAgIGE6Zm9jdXNcbiAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgIDogI2ZmZlxuICAgICAgICAgICAgICAgIG91dGxpbmUgICAgICAgOiBub25lXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHhcblxuICAgICAgICAucGFuZWwtdGl0bGU6aG92ZXJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKVxuXG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZVxuICAgICAgICAgICAgYm9yZGVyLXJhZGlvdXM6IDBcbiAgICAgICAgICAgIGJvcmRlciAgICAgICAgOiBub25lXG5cbiAgICAgICAgICAgIC5wYW5lbC1ib2R5XG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbVxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzICAgOiAwXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgICAgICAgICAgOiAwIHNvbGlkIHRyYW5zcGFyZW50XG5cbiAgICAgICAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTlcblxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZlxuXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSlcblxuLm5lc3RlZC1tZW51XG4gICAgLmxpc3QtZ3JvdXAtaXRlbVxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgIC5uZXN0ZWRcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1kb3duIC41cyBlYXNlLW91dFxuICAgICAgICAtbW96LWFuaW1hdGlvbjogc2xpZGUtZG93biAuNXMgZWFzZS1vdXRcblxuICAgIHVsLnN1Ym1lbnVcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICBoZWlnaHQgOiAwXG5cbiAgICAmIC5leHBhbmRcbiAgICAgICAgdWwuc3VibWVudVxuICAgICAgICAgICAgZGlzcGxheSAgICAgICAgOiBibG9ja1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lXG4gICAgICAgICAgICBoZWlnaHQgICAgICAgICA6IGF1dG9cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1kb3duIC41cyBlYXNlLW91dFxuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IHNsaWRlLWRvd24gLjVzIGVhc2Utb3V0XG5cbiAgICAgICAgICAgIGxpXG4gICAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgOiAjZmZmXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbi8vYW5pbWF0aW9uIG1lbnUgZG93biB1cFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWRvd25cbiAgMCVcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKVxuXG4gIDEwMCVcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxuXG5ALW1vei1rZXlmcmFtZXMgc2xpZGUtZG93blxuICAwJVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpXG5cbiAgMTAwJVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS11cFxuICAwJVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG5cbiAgMTAwJVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpXG5cbkAtbW96LWtleWZyYW1lcyBzbGlkZS11cFxuICAwJVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG5cbiAgMTAwJVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpXG5cbi8vIGVuZFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIFxuICAgIC5zaWRlYmFyXG4gICAgICAgIHRvcCA6IDU0cHhcbiAgICAgICAgbGVmdDogMHB4XG5cbkBtZWRpYSBwcmludCBcbiAgICAuc2lkZWJhclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBcbiAgICAuaGVhZGVyLWZpZWxkc1xuICAgICAgICBkaXNwbGF5OiBub25lXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXJcbiAgICB3aWR0aDogOHB4XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKVxuICAgIGJvcmRlci1yYWRpdXMgICAgIDogM3B4XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcbiAgICBib3JkZXItcmFkaXVzICAgICA6IDNweFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXG5cbi50b2dnbGUtYnV0dG9uXG4gICAgcG9zaXRpb24gIDogZml4ZWRcbiAgICB3aWR0aCAgICAgOiAyMzZweFxuICAgIGN1cnNvciAgICA6IHBvaW50ZXJcbiAgICBwYWRkaW5nICAgOiAxMnB4XG4gICAgYm90dG9tICAgIDogMFxuICAgIGNvbG9yICAgICA6ICM5OTlcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5XG5cbiAgICBpXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweFxuXG4gICAgJjpob3ZlclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSlcbiAgICAgICAgY29sb3IgICAgIDogI2ZmZlxuXG4gICAgYm9yZGVyLXRvcCAgICAgICAgOiAxcHggc29saWQgIzk5OVxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XG4gICAgLW1vei10cmFuc2l0aW9uICAgOiBhbGwgMC4ycyBlYXNlLWluLW91dFxuICAgIC1tcy10cmFuc2l0aW9uICAgIDogYWxsIDAuMnMgZWFzZS1pbi1vdXRcbiAgICAtby10cmFuc2l0aW9uICAgICA6IGFsbCAwLjJzIGVhc2UtaW4tb3V0XG4gICAgdHJhbnNpdGlvbiAgICAgICAgOiBhbGwgMC4ycyBlYXNlLWluLW91dFxuXG4uY29sbGFwc2VkXG4gICAgd2lkdGg6IDYwcHhcblxuICAgIHNwYW5cbiAgICAgICAgZGlzcGxheTogbm9uZVxuIiwiLnNpZGViYXIge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMjM1cHg7XG4gIHdpZHRoOiAyMzVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZDMyO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgYS5saXN0LWdyb3VwLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjMjIyZDMyO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjOTk5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbSAuZmEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE4MWYyMztcbiAgY29sb3I6ICNmZmY7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCBhLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxODFmMjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgLmhlYWRlci1maWVsZHMge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIC5oZWFkZXItZmllbGRzID4gLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAqOmZvY3VzIHtcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGUgYSB7XG4gIGNvbG9yOiAjOTk5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQ6ICMyMjJkMzI7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGUgYSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLXRpdGxlIGE6aG92ZXIsXG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGUgYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxODFmMjM7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtY29sbGFwc2Uge1xuICBib3JkZXItcmFkaW91czogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IC5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyZDMyO1xuICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtY29sbGFwc2UgLnBhbmVsLWJvZHkgLmxpc3QtZ3JvdXAtaXRlbSBhIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtY29sbGFwc2UgLnBhbmVsLWJvZHkgLmxpc3QtZ3JvdXAtaXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtY29sbGFwc2UgLnBhbmVsLWJvZHkgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxODFmMjM7XG59XG5cbi5uZXN0ZWQtbWVudSAubGlzdC1ncm91cC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5lc3RlZC1tZW51IC5uZXN0ZWQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1kb3duIDAuNXMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBzbGlkZS1kb3duIDAuNXMgZWFzZS1vdXQ7XG59XG4ubmVzdGVkLW1lbnUgdWwuc3VibWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cbi5uZXN0ZWQtbWVudSAuZXhwYW5kIHVsLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBoZWlnaHQ6IGF1dG87XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1kb3duIDAuNXMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBzbGlkZS1kb3duIDAuNXMgZWFzZS1vdXQ7XG59XG4ubmVzdGVkLW1lbnUgLmV4cGFuZCB1bC5zdWJtZW51IGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2lkZWJhciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItZmllbGRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggd2hpdGU7XG59XG5cbi50b2dnbGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjM2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZDogIzIxMjUyOTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlci10b3AtLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udG9nZ2xlLWJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuLnRvZ2dsZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTgxZjIzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIHdpZHRoOiA2MHB4O1xufVxuLmNvbGxhcHNlZCBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/layout/side-bar/side-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/layout/side-bar/side-bar.component.ts ***!
  \************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SideBarComponent = class SideBarComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    changeLang(language) {
        this.translate.use(language);
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
};
SideBarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SideBarComponent.prototype, "collapsedEvent", void 0);
SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/side-bar/side-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-bar.component.sass */ "./src/app/core/layout/side-bar/side-bar.component.sass")).default]
    })
], SideBarComponent);



/***/ }),

/***/ "./src/app/modules/main-modules/main-modules-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/main-modules/main-modules-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MainModulesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModulesRoutingModule", function() { return MainModulesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_modules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-modules.component */ "./src/app/modules/main-modules/main-modules.component.ts");




const routes = [
    {
        path: '',
        component: _main_modules_component__WEBPACK_IMPORTED_MODULE_3__["MainModulesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'prefix'
            },
            {
                path: 'dashboard',
                //loadChildren: './dashboard/dashboard.module#DashboardModule',
                loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/modules/main-modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
                canActivate: []
            },
            {
                path: 'tables',
                loadChildren: () => Promise.all(/*! import() | loaddata-loaddata-module */[__webpack_require__.e("common"), __webpack_require__.e("loaddata-loaddata-module")]).then(__webpack_require__.bind(null, /*! ./loaddata/loaddata.module */ "./src/app/modules/main-modules/loaddata/loaddata.module.ts")).then(m => m.LoadDataModule),
                canActivate: []
            },
        ]
    }
];
let MainModulesRoutingModule = class MainModulesRoutingModule {
};
MainModulesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainModulesRoutingModule);



/***/ }),

/***/ "./src/app/modules/main-modules/main-modules.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/modules/main-modules/main-modules.component.sass ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n.collapsed {\n  margin-left: 60px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluLW1vZHVsZXMvRDpcXFR1bmdcXFRo4buxYyBU4bqtcCAyXFxhbmd1bGFyXFx6aXBVSS9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpbi1tb2R1bGVzXFxtYWluLW1vZHVsZXMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi1tb2R1bGVzL21haW4tbW9kdWxlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLHdDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSTtJQUNJLDJCQUFBO0VDSU47QUFDRjs7QURGQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSwyQkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4tbW9kdWxlcy9tYWluLW1vZHVsZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dFxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dFxuICAgIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0XG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dFxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXRcblxuLm1haW4tY29udGFpbmVyIFxuICAgIG1hcmdpbi10b3A6IDU2cHhcbiAgICBtYXJnaW4tbGVmdDogMjM1cHhcbiAgICBwYWRkaW5nOiAxNXB4XG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlblxuICAgIG92ZXJmbG93LXg6IGhpZGRlblxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIG92ZXJmbG93OiBoaWRkZW5cblxuLmNvbGxhcHNlZCBcbiAgICBtYXJnaW4tbGVmdDogNjBweFxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkgXG4gICAgLm1haW4tY29udGFpbmVyIFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnRcbiAgICBcblxuQG1lZGlhIHByaW50IFxuICAgIC5tYWluLWNvbnRhaW5lciBcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnRcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50XG4gICAgXG5cbiIsIioge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main-modules/main-modules.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/main-modules/main-modules.component.ts ***!
  \****************************************************************/
/*! exports provided: MainModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModulesComponent", function() { return MainModulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainModulesComponent = class MainModulesComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainModulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-modules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-modules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-modules/main-modules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-modules.component.sass */ "./src/app/modules/main-modules/main-modules.component.sass")).default]
    })
], MainModulesComponent);



/***/ }),

/***/ "./src/app/modules/main-modules/main-modules.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/main-modules/main-modules.module.ts ***!
  \*************************************************************/
/*! exports provided: MainModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModulesModule", function() { return MainModulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _main_modules_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-modules-routing.module */ "./src/app/modules/main-modules/main-modules-routing.module.ts");
/* harmony import */ var _main_modules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-modules.component */ "./src/app/modules/main-modules/main-modules.component.ts");
/* harmony import */ var _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/layout/footer/footer.component */ "./src/app/core/layout/footer/footer.component.ts");
/* harmony import */ var _core_layout_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/layout/side-bar/side-bar.component */ "./src/app/core/layout/side-bar/side-bar.component.ts");
/* harmony import */ var _core_layout_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/layout/navigation-bar/navigation-bar.component */ "./src/app/core/layout/navigation-bar/navigation-bar.component.ts");









let MainModulesModule = class MainModulesModule {
};
MainModulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _main_modules_component__WEBPACK_IMPORTED_MODULE_5__["MainModulesComponent"],
            _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _core_layout_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__["SideBarComponent"],
            _core_layout_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationBarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _main_modules_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainModulesRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
        ]
    })
], MainModulesModule);



/***/ })

}]);
//# sourceMappingURL=modules-main-modules-main-modules-module-es2015.js.map