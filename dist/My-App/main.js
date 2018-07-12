(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <h2>Sample application: </h2>\n   <nav class=\"nav navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\"><img width=\"50\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    \n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/customers\" routerLinkActive=\"active\">Customers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">Products</a>\n      </li>      \n\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n      -->\n      <form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </ul>\n    <!--\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n    </div>\n    -->\n    \n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Account\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n          <a class=\"dropdown-item\" routerLink=\"/logout\" routerLinkActive=\"active\">Logout</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\n          <a class=\"dropdown-item\" routerLink=\"/changePassword\" routerLinkActive=\"active\">Change password</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n   </nav> \n   <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _customer_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer/customers/customers.component */ "./src/app/customer/customers/customers.component.ts");
/* harmony import */ var _customer_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer/view-customer/view-customer.component */ "./src/app/customer/view-customer/view-customer.component.ts");
/* harmony import */ var _customer_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer/edit-customer/edit-customer.component */ "./src/app/customer/edit-customer/edit-customer.component.ts");
/* harmony import */ var _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer/new-customer/new-customer.component */ "./src/app/customer/new-customer/new-customer.component.ts");
/* harmony import */ var _product_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/products/products.component */ "./src/app/product/products/products.component.ts");
/* harmony import */ var _product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/view-product/view-product.component */ "./src/app/product/view-product/view-product.component.ts");
/* harmony import */ var _product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product/new-product/new-product.component */ "./src/app/product/new-product/new-product.component.ts");
/* harmony import */ var _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product/edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_edit_contact_edit_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/edit-contact/edit-contact.component */ "./src/app/contact/edit-contact/edit-contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _customer_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__["CustomersComponent"],
                _customer_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_11__["ViewCustomerComponent"],
                _customer_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_12__["EditCustomerComponent"],
                _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_13__["NewCustomerComponent"],
                _product_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
                _product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_15__["ViewProductComponent"],
                _product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_16__["NewProductComponent"],
                _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["EditProductComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
                _base_component__WEBPACK_IMPORTED_MODULE_19__["BaseComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                _contact_edit_contact_edit_contact_component__WEBPACK_IMPORTED_MODULE_21__["EditContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], { dataEncapsulation: false }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _customer_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customers/customers.component */ "./src/app/customer/customers/customers.component.ts");
/* harmony import */ var _customer_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/view-customer/view-customer.component */ "./src/app/customer/view-customer/view-customer.component.ts");
/* harmony import */ var _customer_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/edit-customer/edit-customer.component */ "./src/app/customer/edit-customer/edit-customer.component.ts");
/* harmony import */ var _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/new-customer/new-customer.component */ "./src/app/customer/new-customer/new-customer.component.ts");
/* harmony import */ var _product_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/products/products.component */ "./src/app/product/products/products.component.ts");
/* harmony import */ var _product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/view-product/view-product.component */ "./src/app/product/view-product/view-product.component.ts");
/* harmony import */ var _product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/new-product/new-product.component */ "./src/app/product/new-product/new-product.component.ts");
/* harmony import */ var _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'customers', component: _customer_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"] },
    { path: 'customers/new', component: _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_7__["NewCustomerComponent"] },
    { path: 'customers/view/:customerNo', component: _customer_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_5__["ViewCustomerComponent"] },
    { path: 'customers/edit/:customerNo', component: _customer_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_6__["EditCustomerComponent"] },
    { path: 'products', component: _product_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
    { path: 'products/view/:productNo', component: _product_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_9__["ViewProductComponent"] },
    { path: 'products/edit/:productNo', component: _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_11__["EditProductComponent"] },
    { path: 'products/new', component: _product_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_10__["NewProductComponent"] },
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/base.component.css":
/*!************************************!*\
  !*** ./src/app/base.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base.component.html":
/*!*************************************!*\
  !*** ./src/app/base.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.httpRequestProcessing = false;
        this.httpRequestMessage = '';
        this.errorMsg = '';
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent.prototype.beginHttpRequest = function (msg) {
        this.httpRequestMessage = msg;
        this.httpRequestProcessing = true;
    };
    BaseComponent.prototype.endHttpRequest = function () {
        this.httpRequestMessage = '';
        this.httpRequestProcessing = false;
    };
    BaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/base.component.html"),
            styles: [__webpack_require__(/*! ./base.component.css */ "./src/app/base.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-1\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h5>{{contact.contactName}}</h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label for=\"customerNo\">\n            <strong>Customer number </strong>\n          </label>\n          <label class=\"float-right\">\n            <strong>:</strong>\n          </label>\n        </div>\n        <div class=\"col-md-9\">\n          <label>{{contact.customerNo}}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label for=\"contactName\">\n            <strong>Contact name </strong>\n          </label>\n          <label class=\"float-right\">\n            <strong>:</strong>\n          </label>\n        </div>\n        <div class=\"col-md-9\">\n          <label>{{contact.contactName}}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label for=\"phone\">\n            <strong>Phone </strong>\n          </label>\n          <label class=\"float-right\">\n            <strong>:</strong>\n          </label>\n        </div>\n        <div class=\"col-md-9\">\n          <label>{{contact.phone}}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label for=\"mobile\">\n            <strong>Mobile </strong>\n          </label>\n          <label class=\"float-right\">\n            <strong>:</strong>\n          </label>\n        </div>\n        <div class=\"col-md-9\">\n          <label>{{contact.mobile}}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label for=\"email\">\n            <strong>Email </strong>\n          </label>\n          <label class=\"float-right\">\n            <strong>:</strong>\n          </label>\n        </div>\n        <div class=\"col-md-9\">\n          <label>{{contact.email}}</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/edit-contact/edit-contact.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contact/edit-contact/edit-contact.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/edit-contact/edit-contact.component.html":
/*!******************************************************************!*\
  !*** ./src/app/contact/edit-contact/edit-contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5>Edit contact details: {{contact.contactName}}</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <form #editCustomerForm=\"ngForm\">\n            <fieldset [disabled]=\"httpRequestMessage.length > 0\">\n              <div class=\"form-group\" [class.has-error]=\"customerNo.invalid && customerNo.touched\" [class.has-success]=\"customerNo.valid\">\n                <label class=\"form-control-label\" for=\"customerNo\">Customer no. *</label>\n                <input type=\"text\" class=\"form-control\" name=\"customerNo\" [(ngModel)]=\"contact.customerNo\" #customerNo=\"ngModel\" required\n                  readonly>\n                <span class=\"help-block alert-danger\" *ngIf=\"customerNo.errors?.required && customerNo.touched\">\n                  customer number is required.\n                </span>\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"contactName.invalid && contactName.touched\" [class.has-success]=\"contactName.valid\">\n                <label class=\"form-control-label\" for=\"contactName\">Contact name *</label>\n                <input type=\"text\" class=\"form-control\" name=\"contactName\" [(ngModel)]=\"contact.contactName\" #contactName=\"ngModel\" required>\n                <span class=\"help-block alert-danger\" *ngIf=\"contactName.errors?.required && contactName.touched\">\n                  contact name is required.\n                </span>\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"phone.invalid && phone.touched\" [class.has-success]=\"phone.valid\">\n                <label class=\"form-control-label\" for=\"phone\">Phone</label>\n                <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"contact.phone\" #phone=\"ngModel\">\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"mobile.invalid && mobile.touched\" [class.has-success]=\"mobile.valid\">\n                <label class=\"form-control-label\" for=\"mobile\">Mobile</label>\n                <input type=\"text\" class=\"form-control\" name=\"mobile\" [(ngModel)]=\"contact.mobile\" #mobile=\"ngModel\">\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"email.invalid && email.touched\" [class.has-success]=\"email.valid\">\n                <label class=\"form-control-label\" for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"contact.email\" #email=\"ngModel\">\n              </div>\n            </fieldset>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/edit-contact/edit-contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/edit-contact/edit-contact.component.ts ***!
  \****************************************************************/
/*! exports provided: EditContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactComponent", function() { return EditContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditContactComponent = /** @class */ (function () {
    function EditContactComponent() {
    }
    EditContactComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditContactComponent.prototype, "contact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditContactComponent.prototype, "httpRequestMessage", void 0);
    EditContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-contact',
            template: __webpack_require__(/*! ./edit-contact.component.html */ "./src/app/contact/edit-contact/edit-contact.component.html"),
            styles: [__webpack_require__(/*! ./edit-contact.component.css */ "./src/app/contact/edit-contact/edit-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditContactComponent);
    return EditContactComponent;
}());



/***/ }),

/***/ "./src/app/customer/customers/customers.component.css":
/*!************************************************************!*\
  !*** ./src/app/customer/customers/customers.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customers/customers.component.html":
/*!*************************************************************!*\
  !*** ./src/app/customer/customers/customers.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"httpRequestProcessing == true\">\n    <div class=\"col-12\">\n      {{httpRequestMessage}}\n    </div>\n  </div>\n  <div *ngIf=\"httpRequestProcessing == false\">\n    <div class=\"row\">\n      <div class=\"col-6 col-md-6\">\n        <p>Total customers: {{customers.length}}</p>\n      </div>\n      <div class=\"col-6 col-md-6\">\n        <a routerLink=\"/customers/new\" class=\"float-right\">Add</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngFor=\"let customer of customers\">\n      <div class=\"col-12\">\n        <div class=\"card  mb-3\">\n          <div class=\"card-header\">\n            <div class=\"row\">\n              <div class=\"col-8\">\n                <a routerLink=\"/customers/view/{{customer.customerNo}}\">\n                  <strong>{{customer.customerNo}}</strong>\n                </a>\n              </div>\n              <div class=\"col-4 float-right\">\n                </div>\n            </div>\n          </div>\n\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"row\">\n                  <div class=\"col-4 col-md-4\">\n                    <strong>Customer name :</strong>\n                  </div>\n                  <div class=\"col-8 col-md-8\">\n                    {{customer.name}}\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"row\">\n                  <div class=\"col-4 col-md-4\">\n                    <strong>Address :</strong>\n                  </div>\n                  <div class=\"col-8 col-md-8\">\n                    <span>{{customer.address}},</span>\n                    <span>{{customer.city}},</span>\n                    <span>{{customer.postalCode}},</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6 col-md-6\">\n                <div class=\"row\">\n                  <div class=\"col-4 col-md-4\">\n                    <strong>Phone :</strong>\n                  </div>\n                  <div class=\"col-8 col-md-8\">\n                    {{customer.phone}}\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-6 col-md-6\">\n                <div class=\"row\">\n                  <div class=\"col-4 col-md-4\">\n                  </div>\n                  <div class=\"col-8 col-md-8\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer/customers/customers.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/customer/customers/customers.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(customerService) {
        this.customerService = customerService;
        this.customers = [];
        this.httpRequestProcessing = false;
        this.httpRequestMessage = '';
        this.errorMsg = '';
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.loadCustomers();
    };
    CustomersComponent.prototype.beginHttpRequest = function (msg) {
        this.httpRequestMessage = msg;
        this.httpRequestProcessing = true;
    };
    CustomersComponent.prototype.endHttpRequest = function () {
        this.httpRequestMessage = '';
        this.httpRequestProcessing = false;
    };
    CustomersComponent.prototype.loadCustomers = function () {
        var _this = this;
        this.beginHttpRequest('Loading customers...');
        this.customerService.getCustomers().subscribe(function (x) {
            setTimeout(function () {
                _this.customers = x;
                _this.endHttpRequest();
            }, 1000);
        });
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customer/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customer/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/customer/edit-customer/edit-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/edit-customer/edit-customer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/edit-customer/edit-customer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/edit-customer/edit-customer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\" *ngIf=\"httpRequestMessage.length > 0\">\n    <div class=\"col-12\">\n      {{httpRequestMessage}}\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"errorMsg.length > 0\">\n    <div class=\"col-12\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        {{errorMsg}}\n      </div>\n    </div>\n  </div>\n  <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n  <ngb-alert *ngIf=\"failMessage\" type=\"danger\" (close)=\"failMessage = null\">{{ failMessage }}</ngb-alert>\n\n  <div *ngIf=\"customer && customer.id\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h5>Edit customer details: {{customer.customerNo}}</h5>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"float-right\">\n              <a routerLink=\"/customers/view/{{customer.customerNo}}\">back</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <form (ngSubmit)=\"onSaveCustomer()\" #editCustomerForm=\"ngForm\">\n              <fieldset [disabled]=\"httpRequestMessage.length > 0\">\n                <div class=\"form-group\" [class.has-error]=\"customerName.invalid && customerName.touched\" [class.has-success]=\"customerName.valid\">\n                  <label class=\"form-control-label\" for=\"customerNo\">Customer no. *</label>\n                  <input type=\"text\" class=\"form-control\" name=\"customerNo\" [(ngModel)]=\"customer.customerNo\" #customerNo=\"ngModel\" required>\n                  <span class=\"help-block alert-danger\" *ngIf=\"customerNo.errors?.required && customerNo.touched\">\n                    customer number is required.\n                  </span>\n                </div>\n                <div class=\"form-group\" [class.has-error]=\"customerName.invalid && customerName.touched\" [class.has-success]=\"customerName.valid\">\n                  <label class=\"form-control-label\" for=\"customerName\">Customer name *</label>\n                  <input type=\"text\" class=\"form-control\" name=\"customerName\" [(ngModel)]=\"customer.name\" #customerName=\"ngModel\" required>\n                  <span class=\"help-block alert-danger\" *ngIf=\"customerName.errors?.required && customerName.touched\">\n                    customer name is required.\n                  </span>\n                </div>\n                <div class=\"form-group\" [class.has-error]=\"address.invalid && address.touched\" [class.has-success]=\"address.valid\">\n                  <label class=\"form-control-label\" for=\"address\">Address</label>\n                  <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\">\n                </div>\n                <div class=\"form-group\" [class.has-error]=\"city.invalid && city.touched\" [class.has-success]=\"city.valid\">\n                  <label class=\"form-control-label\" for=\"city\">City</label>\n                  <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\">\n                </div>\n                <div class=\"form-group\" [class.has-error]=\"postCode.invalid && postCode.touched\" [class.has-success]=\"postCode.valid\">\n                  <label class=\"form-control-label\" for=\"postCode\">Post code</label>\n                  <input type=\"text\" class=\"form-control\" name=\"postCode\" [(ngModel)]=\"customer.postCode\" #postCode=\"ngModel\">\n                </div>\n                <div class=\"form-group\" [class.has-error]=\"phoneNo.invalid && phoneNo.touched\" [class.has-success]=\"phoneNo.valid\">\n                  <label class=\"form-control-label\" for=\"phoneNo\">Phone no.</label>\n                  <input type=\"text\" class=\"form-control\" name=\"phoneNo\" [(ngModel)]=\"customer.phoneNo\" #phoneNo=\"ngModel\">\n                </div>\n                <div *ngFor=\"let contact of contacts\">\n                    <app-edit-contact [contact]= contact [httpRequestMessage]= httpRequestMessage></app-edit-contact>\n                </div>  \n                <div *ngFor=\"let contact of contacts\">\n                  {{contact.contactName}}\n              </div>  \n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editCustomerForm.form.valid\">Update</button>\n              </fieldset>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer/edit-customer/edit-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/edit-customer/edit-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base.component */ "./src/app/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCustomerComponent = /** @class */ (function (_super) {
    __extends(EditCustomerComponent, _super);
    function EditCustomerComponent(customerService, route, router) {
        var _this = _super.call(this) || this;
        _this.customerService = customerService;
        _this.route = route;
        _this.router = router;
        _this.customerNo = '';
        _this.successMessage = null;
        _this.failMessage = null;
        _this.contacts = [];
        return _this;
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        this.customerNo = this.route.snapshot.paramMap.get('customerNo');
        this.loadCustomer();
    };
    EditCustomerComponent.prototype.loadCustomer = function () {
        var _this = this;
        this.failMessage = null;
        this.beginHttpRequest('Loading customer...');
        this.customerService.getCustomer(this.customerNo).subscribe(function (x) {
            console.log(x);
            setTimeout(function () {
                if (x != null) {
                    _this.customer = x[0];
                    _this.endHttpRequest();
                    _this.loadContacts();
                }
                _this.endHttpRequest();
            }, 1000);
        }, function (error) { _this.endHttpRequest(); _this.failMessage = error; });
    };
    EditCustomerComponent.prototype.onSaveCustomer = function () {
        var _this = this;
        this.successMessage = null;
        this.failMessage = null;
        this.beginHttpRequest('Updating customer details...');
        this.customerService.updateCustomer(this.customer).subscribe(function (x) {
            console.log('save' + x);
            setTimeout(function () {
                _this.endHttpRequest();
                _this.successMessage = 'Customer successfully updated.';
                _this.saveContacts();
            }, 1000);
        }, function (error) { _this.endHttpRequest(); _this.failMessage = error; });
    };
    EditCustomerComponent.prototype.loadContacts = function () {
        var _this = this;
        this.beginHttpRequest('Load contacts...');
        this.customerService.getContacts(this.customerNo).subscribe(function (x) {
            console.log(x);
            setTimeout(function () {
                _this.contacts = x;
                _this.endHttpRequest();
            }, 1000);
        });
    };
    EditCustomerComponent.prototype.saveContact = function (contact) {
        var _this = this;
        this.customerService.updateContact(contact).subscribe(function (x) {
            console.log('save' + x);
            setTimeout(function () {
                _this.endHttpRequest();
                _this.successMessage = 'Contact successfully updated.';
            }, 1000);
        }, function (error) { _this.endHttpRequest(); _this.failMessage = error; });
    };
    EditCustomerComponent.prototype.saveContacts = function () {
        var _this = this;
        this.contacts.forEach(function (value) {
            _this.saveContact(value);
        });
    };
    EditCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-customer',
            template: __webpack_require__(/*! ./edit-customer.component.html */ "./src/app/customer/edit-customer/edit-customer.component.html"),
            styles: [__webpack_require__(/*! ./edit-customer.component.css */ "./src/app/customer/edit-customer/edit-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/customer/new-customer/new-customer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/customer/new-customer/new-customer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/new-customer/new-customer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/customer/new-customer/new-customer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n    <div class=\"row\" *ngIf=\"httpRequestMessage.length > 0\">\n        <div class=\"col-12\">\n          {{httpRequestMessage}}\n        </div>\n      </div>\n  <ngb-alert *ngIf=\"failMessage\" type=\"danger\" (close)=\"failMessage = null\">{{ failMessage }}</ngb-alert>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5>Add customer</h5>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"float-right\">\n            <a routerLink=\"/customers\">back</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <form (ngSubmit)=\"onSaveCustomer()\" #newCustomerForm=\"ngForm\" >\n            <fieldset [disabled]=\"httpRequestMessage.length > 0\">\n                <div class=\"form-group\" [class.has-error]=\"customerName.invalid && customerName.touched\" [class.has-success]=\"customerName.valid\">\n                    <label class=\"form-control-label\" for=\"customerNo\">Customer no. *</label>\n                    <input type=\"text\" class=\"form-control\" name=\"customerNo\" [(ngModel)]=\"customer.customerNo\" #customerNo=\"ngModel\" required>\n                    <span class=\"help-block alert-danger\" *ngIf=\"customerNo.errors?.required && customerNo.touched\">\n                      customer number is required.\n                    </span>\n                  </div>\n                  <div class=\"form-group\" [class.has-error]=\"customerName.invalid && customerName.touched\" [class.has-success]=\"customerName.valid\">\n                    <label class=\"form-control-label\" for=\"customerName\">Customer name *</label>\n                    <input type=\"text\" class=\"form-control\" name=\"customerName\" [(ngModel)]=\"customer.name\" #customerName=\"ngModel\" required>\n                    <span class=\"help-block alert-danger\" *ngIf=\"customerName.errors?.required && customerName.touched\">\n                      customer name is required.\n                    </span>\n                  </div>\n                  <div class=\"form-group\" [class.has-error]=\"address.invalid && address.touched\" [class.has-success]=\"address.valid\">\n                    <label class=\"form-control-label\" for=\"address\">Address</label>\n                    <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\">\n                  </div>\n                  <div class=\"form-group\" [class.has-error]=\"city.invalid && city.touched\" [class.has-success]=\"city.valid\">\n                    <label class=\"form-control-label\" for=\"city\">City</label>\n                    <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\">\n                  </div>\n                  <div class=\"form-group\" [class.has-error]=\"postCode.invalid && postCode.touched\" [class.has-success]=\"postCode.valid\">\n                    <label class=\"form-control-label\" for=\"postCode\">Post code</label>\n                    <input type=\"text\" class=\"form-control\" name=\"postCode\" [(ngModel)]=\"customer.postCode\" #postCode=\"ngModel\">\n                  </div>\n                  <div class=\"form-group\" [class.has-error]=\"phoneNo.invalid && phoneNo.touched\" [class.has-success]=\"phoneNo.valid\">\n                    <label class=\"form-control-label\" for=\"phoneNo\">Phone no.</label>\n                    <input type=\"text\" class=\"form-control\" name=\"phoneNo\" [(ngModel)]=\"customer.phoneNo\" #phoneNo=\"ngModel\">\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!newCustomerForm.form.valid\">Save</button>\n                </fieldset>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer/new-customer/new-customer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/new-customer/new-customer.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCustomerComponent", function() { return NewCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewCustomerComponent = /** @class */ (function (_super) {
    __extends(NewCustomerComponent, _super);
    function NewCustomerComponent(customerService, activatedRoute, router) {
        var _this = _super.call(this) || this;
        _this.customerService = customerService;
        _this.activatedRoute = activatedRoute;
        _this.router = router;
        _this.customer = { customerNo: '' };
        _this.failMessage = null;
        return _this;
    }
    NewCustomerComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    NewCustomerComponent.prototype.initializeForm = function () {
    };
    NewCustomerComponent.prototype.onSaveCustomer = function () {
        var _this = this;
        this.failMessage = null;
        this.beginHttpRequest('Saving customer details...');
        this.customerService.addCustomer(this.customer).subscribe(function (x) {
            console.log('add' + x);
            setTimeout(function () {
                _this.endHttpRequest();
                _this.router.navigate(["/customers/view/" + _this.customer.customerNo]);
            }, 1000);
        }, function (error) { _this.endHttpRequest(); _this.failMessage = error; });
    };
    NewCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-customer',
            template: __webpack_require__(/*! ./new-customer.component.html */ "./src/app/customer/new-customer/new-customer.component.html"),
            styles: [__webpack_require__(/*! ./new-customer.component.css */ "./src/app/customer/new-customer/new-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewCustomerComponent);
    return NewCustomerComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/customer/view-customer/view-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/view-customer/view-customer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/view-customer/view-customer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/view-customer/view-customer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row\" *ngIf=\"httpRequestProcessing == true\">\n    <div class=\"col-12\">\n      {{httpRequestMessage}}\n    </div>\n  </div>\n  <div *ngIf=\"httpRequestProcessing == false\">\n    <div class=\"row\" *ngIf=\"errorMsg.length > 0\">\n      <div class=\"col-12\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          {{errorMsg}}\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <h5>Customer details: {{customerNo}}</h5>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"float-right\">\n                    <a routerLink=\"/customers/edit/{{customerNo}}\">Edit</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <label for=\"customerNo\">\n                        <strong>Customer no. </strong>\n                      </label>\n                      <label class=\"float-right\">\n                        <strong>:</strong>\n                      </label>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <label>{{customer.customerNo}}</label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <label for=\"customerName\">\n                        <strong>Customer name </strong>\n                      </label>\n                      <label class=\"float-right\">\n                        <strong>:</strong>\n                      </label>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <label>{{customer.name}}</label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <label for=\"address\">\n                        <strong>Address</strong>\n                      </label>\n                      <label class=\"float-right\">\n                        <strong>:</strong>\n                      </label>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <label>\n                        <span>{{customer.address}},</span>\n                        <span>{{customer.city}},</span>\n                        <span>{{customer.postalCode}},</span>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <label for=\"phone\">\n                        <strong>Phone</strong>\n                      </label>\n                      <label class=\"float-right\">\n                        <strong>:</strong>\n                      </label>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <label>{{customer.phone}}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div *ngFor=\"let contact of contacts\">\n                  <app-contact [contact]= contact></app-contact>\n              </div>  \n              <!--\n              <div *ngFor=\"let contact of contacts\">\n                {{contact.contactName}}\n                \n              </div>  \n              -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer/view-customer/view-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/view-customer/view-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomerComponent", function() { return ViewCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewCustomerComponent = /** @class */ (function () {
    function ViewCustomerComponent(customerService, route) {
        this.customerService = customerService;
        this.route = route;
        this.httpRequestProcessing = false;
        this.httpRequestMessage = '';
        this.errorMsg = '';
        this.customerNo = '';
        this.customer = {};
        this.contacts = [];
    }
    ViewCustomerComponent.prototype.ngOnInit = function () {
        this.customerNo = this.route.snapshot.paramMap.get('customerNo');
        this.loadCustomer();
    };
    ViewCustomerComponent.prototype.beginHttpRequest = function (msg) {
        this.httpRequestMessage = msg;
        this.httpRequestProcessing = true;
    };
    ViewCustomerComponent.prototype.endHttpRequest = function () {
        this.httpRequestMessage = '';
        this.httpRequestProcessing = false;
    };
    ViewCustomerComponent.prototype.loadCustomer = function () {
        var _this = this;
        this.beginHttpRequest('Load customer details...');
        this.customerService.getCustomer(this.customerNo).subscribe(function (x) {
            console.log(x);
            setTimeout(function () {
                _this.customer = x[0];
                _this.endHttpRequest();
                _this.loadContacts();
            }, 1000);
        });
    };
    ViewCustomerComponent.prototype.loadContacts = function () {
        var _this = this;
        this.beginHttpRequest('Load contacts...');
        this.customerService.getContacts(this.customerNo).subscribe(function (x) {
            console.log(x);
            setTimeout(function () {
                _this.contacts = x;
                _this.endHttpRequest();
            }, 1000);
        });
    };
    ViewCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-customer',
            template: __webpack_require__(/*! ./view-customer.component.html */ "./src/app/customer/view-customer/view-customer.component.html"),
            styles: [__webpack_require__(/*! ./view-customer.component.css */ "./src/app/customer/view-customer/view-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewCustomerComponent);
    return ViewCustomerComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var customers = [
            { id: 1, customerNo: '110011', name: 'customer 1', address: '', city: '', postCode: '', phone: '' },
            { id: 2, customerNo: '110012', name: 'customer 2', address: '', city: '', postCode: '', phone: '' }
        ];
        var contacts = [
            { id: 1, customerNo: '110011', contactName: 'contact name 1', phone: '', mobile: '', email: '' },
            { id: 2, customerNo: '110011', contactName: 'contact name 2', phone: '', mobile: '', email: '' }
        ];
        return { customers: customers, contacts: contacts };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Page not found\n</h1>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-product works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProductComponent = /** @class */ (function () {
    function EditProductComponent() {
    }
    EditProductComponent.prototype.ngOnInit = function () {
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/product/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/product/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/product/new-product/new-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product/new-product/new-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/new-product/new-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product/new-product/new-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-product works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/new-product/new-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/new-product/new-product.component.ts ***!
  \**************************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewProductComponent = /** @class */ (function () {
    function NewProductComponent() {
    }
    NewProductComponent.prototype.ngOnInit = function () {
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/product/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/product/new-product/new-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/product/products/products.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product/products/products.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/products/products.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/products/products.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/product/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/product/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/product/view-product/view-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/view-product/view-product.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/view-product/view-product.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/view-product/view-product.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  view-product works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/view-product/view-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/view-product/view-product.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent() {
    }
    ViewProductComponent.prototype.ngOnInit = function () {
    };
    ViewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-product',
            template: __webpack_require__(/*! ./view-product.component.html */ "./src/app/product/view-product/view-product.component.html"),
            styles: [__webpack_require__(/*! ./view-product.component.css */ "./src/app/product/view-product/view-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewProductComponent);
    return ViewProductComponent;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = /** @class */ (function () {
    function CustomerService(httpClient) {
        this.httpClient = httpClient;
        this.customersUrl = 'api/customers';
        this.contactsUrl = 'api/contacts';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    CustomerService.prototype.getCustomers = function () {
        return this.httpClient.get(this.customersUrl, this.httpOptions);
    };
    CustomerService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("error : " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Backend returned code " + error.status + ", " +
            ("error : " + error.error));
    };
    /*
      handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          // TODO: better job of transforming error for user consumption
              // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    */
    CustomerService.prototype.getCustomer = function (_customerNo) {
        var reqUrl = this.customersUrl + "/?customerNo=" + _customerNo;
        return this.httpClient.get(reqUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CustomerService.prototype.updateCustomer = function (customer) {
        var reqUrl = this.customersUrl + "/?customerNo=" + customer.customerNo;
        return this.httpClient.put(reqUrl, customer, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CustomerService.prototype.addCustomer = function (customer) {
        var reqUrl = "" + this.customersUrl;
        return this.httpClient.post(reqUrl, customer, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CustomerService.prototype.getContacts = function (customerNo) {
        var reqUrl = "api/contacts/?customerNo=" + customerNo;
        return this.httpClient.get(reqUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CustomerService.prototype.updateContact = function (contact) {
        var reqUrl = this.contactsUrl + "/?id=" + contact.id;
        return this.httpClient.put(reqUrl, contact, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\Vinod\AngularProjects\Sample\Angular-MyApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map