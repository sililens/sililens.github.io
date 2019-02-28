(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n        Welcome Silicon Lens\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <!-- <ion-img [src]=\"'assets/car_bg.png'\" style=\"max-width:382px;\"></ion-img> -->\n    <ion-list-header margin-top>\n      <ion-label>\n        <h3 text-left>Please choose scan type</h3>\n      </ion-label>\n    </ion-list-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"bg-1\" style=\"min-height:105px !important;\" (click)=\"goPageUpload('DriverLicence')\">\n            <ion-card-header>\n              <ion-card-title>\n                <img src=\"assets/1.svg\" style=\"width: 50px; margin: 0 auto;\"/>\n                <h5 text-center>Driver Licence</h5>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>    \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"bg-2\" style=\"min-height:105px !important;\" (click)=\"goPageUpload('CarDetail')\">\n            <ion-card-header>\n              <ion-card-title>\n                <img src=\"assets/2.png\" style=\"width: 50px; margin: 0 auto;\"/>\n                <h5 text-center>Car</h5>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>    \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"bg-3\" style=\"min-height:105px !important;\" (click)=\"goPageUpload('Rego')\">\n            <ion-card-header>\n              <ion-card-title>\n                <img src=\"assets/1.svg\" style=\"width: 50px; margin: 0 auto;\"/>\n                <h5 text-center>REGO</h5>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>    \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"bg-4\" style=\"min-height:105px !important;\" (click)=\"goPageUpload('VIN')\">\n            <ion-card-header>\n              <ion-card-title>\n                <img src=\"assets/vin.png\" style=\"width: 33px; margin: 0 auto;\"/>\n                <h5 text-center>VIN</h5>\n              </ion-card-title>\n            </ion-card-header>\n          </ion-card>    \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n.bg-1 {\n  background: #e297fe;\n  background: linear-gradient(90deg, #e297fe 0%, #b675fa 100%); }\n\n.bg-1 h5 {\n    color: #000;\n    font-weight: normal;\n    font-size: 14px; }\n\n.bg-2 {\n  background: #fbb594;\n  background: linear-gradient(90deg, #fbb594 0%, #fa869d 100%); }\n\n.bg-2 h5 {\n    color: #000;\n    font-weight: normal;\n    font-size: 14px; }\n\n.bg-3 {\n  background: #54c0fe;\n  background: linear-gradient(90deg, #54c0fe 0%, #729bfd 100%); }\n\n.bg-3 h5 {\n    color: #000;\n    font-weight: normal;\n    font-size: 14px; }\n\n.bg-4 {\n  background: #8ce3da;\n  background: linear-gradient(90deg, #8ce3da 0%, #37ddc5 100%); }\n\n.bg-4 h5 {\n    color: #000;\n    font-weight: normal;\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcc2lsaWNvbnN0YWNrXFxsZW5zXFxzaWxpY29uX2xlbnNfaW9uaWMvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG1CQUE0QjtFQUM1Qiw0REFBb0YsRUFBQTs7QUFGeEY7SUFJUSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxtQkFBNEI7RUFDNUIsNERBQW9GLEVBQUE7O0FBRnhGO0lBSVEsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQTJCO0VBQzNCLDREQUFtRixFQUFBOztBQUZ2RjtJQUlRLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZSxFQUFBOztBQUd2QjtFQUNJLG1CQUE0QjtFQUM1Qiw0REFBbUYsRUFBQTs7QUFGdkY7SUFJUSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmJnLTEge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjYsMTUxLDI1NCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyNiwxNTEsMjU0LDEpIDAlLCByZ2JhKDE4MiwxMTcsMjUwLDEpIDEwMCUpO1xuICAgIGg1IHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4uYmctMiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1MSwxODEsMTQ4KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjUxLDE4MSwxNDgsMSkgMCUsIHJnYmEoMjUwLDEzNCwxNTcsMSkgMTAwJSk7XG4gICAgaDUge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbi5iZy0zIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODQsMTkyLDI1NCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDg0LDE5MiwyNTQsMSkgMCUsIHJnYmEoMTE0LDE1NSwyNTMsMSkgMTAwJSk7XG4gICAgaDUge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbi5iZy00IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTQwLDIyNywyMTgpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNDAsMjI3LDIxOCwxKSAwJSwgcmdiYSg1NSwyMjEsMTk3LDEpIDEwMCUpO1xuICAgIGg1IHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(routes) {
        this.routes = routes;
    }
    HomePage.prototype.goPageUpload = function (photoType) {
        this.routes.navigate(["/page-upload", { "photoType": photoType }]);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map