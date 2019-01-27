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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _simplesearch_simplesearch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simplesearch/simplesearch.component */ "./src/app/simplesearch/simplesearch.component.ts");
/* harmony import */ var _extendedsearch_extendedsearch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extendedsearch/extendedsearch.component */ "./src/app/extendedsearch/extendedsearch.component.ts");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credits/credits.component */ "./src/app/credits/credits.component.ts");






var routes = [
    { path: 'simple', component: _simplesearch_simplesearch_component__WEBPACK_IMPORTED_MODULE_3__["SimplesearchComponent"] },
    { path: 'extended', component: _extendedsearch_extendedsearch_component__WEBPACK_IMPORTED_MODULE_4__["ExtendedsearchComponent"] },
    { path: '', redirectTo: 'simple', pathMatch: 'full' },
    { path: 'credits', component: _credits_credits_component__WEBPACK_IMPORTED_MODULE_5__["CreditsComponent"] },
    { path: '*', redirectTo: 'simple' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <a class=\"navbar-brand\" href=\"#\">DeBroodjes</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"  routerLink=\"/simple\" >Simple Search</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/extended\" >Extended Search</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/credits\" >Credits</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _broodjesfilter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./broodjesfilter.pipe */ "./src/app/broodjesfilter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _broodje_broodje_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./broodje/broodje.component */ "./src/app/broodje/broodje.component.ts");
/* harmony import */ var _ingredient_ingredient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ingredient/ingredient.component */ "./src/app/ingredient/ingredient.component.ts");
/* harmony import */ var _simplesearch_simplesearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./simplesearch/simplesearch.component */ "./src/app/simplesearch/simplesearch.component.ts");
/* harmony import */ var _extendedsearch_extendedsearch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extendedsearch/extendedsearch.component */ "./src/app/extendedsearch/extendedsearch.component.ts");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./credits/credits.component */ "./src/app/credits/credits.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _broodjesfilter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
                _broodje_broodje_component__WEBPACK_IMPORTED_MODULE_7__["BroodjeComponent"],
                _ingredient_ingredient_component__WEBPACK_IMPORTED_MODULE_8__["IngredientComponent"],
                _simplesearch_simplesearch_component__WEBPACK_IMPORTED_MODULE_9__["SimplesearchComponent"],
                _extendedsearch_extendedsearch_component__WEBPACK_IMPORTED_MODULE_10__["ExtendedsearchComponent"],
                _credits_credits_component__WEBPACK_IMPORTED_MODULE_11__["CreditsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/broodje.ts":
/*!****************************!*\
  !*** ./src/app/broodje.ts ***!
  \****************************/
/*! exports provided: Broodje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Broodje", function() { return Broodje; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);

var Broodje = /** @class */ (function () {
    function Broodje(naam, ingredienten) {
        this.naam = naam;
        this.ingredienten = underscore__WEBPACK_IMPORTED_MODULE_0__["map"](ingredienten, function (value) { return value.toLowerCase(); }).sort(function (a, b) { return a.localeCompare(b); });
    }
    Broodje.prototype.hasIngredient = function (ingredient) {
        return this.ingredienten.findIndex(function (i) { return i.includes(ingredient); }) !== -1;
    };
    Broodje.prototype.ingredientString = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_0__["reduce"](this.ingredienten, function (first, second) { return first + ', ' + second; });
    };
    Broodje.prototype.hasAnyIngredient = function (wantedIngredient) {
        return underscore__WEBPACK_IMPORTED_MODULE_0__["intersection"](this.ingredienten, wantedIngredient).length > 0;
    };
    Broodje.prototype.hasNoneIngredient = function (excludedIngredient) {
        return underscore__WEBPACK_IMPORTED_MODULE_0__["intersection"](this.ingredienten, excludedIngredient).length === 0;
    };
    return Broodje;
}());



/***/ }),

/***/ "./src/app/broodje/broodje.component.css":
/*!***********************************************!*\
  !*** ./src/app/broodje/broodje.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJvb2RqZS9icm9vZGplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9icm9vZGplL2Jyb29kamUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/broodje/broodje.component.html":
/*!************************************************!*\
  !*** ./src/app/broodje/broodje.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let ingr of ingredients\" [ngClass]=\"{'bold': isSearchedIngredient(ingr)}\">\n  {{ingr}}&nbsp;\n</span>\n"

/***/ }),

/***/ "./src/app/broodje/broodje.component.ts":
/*!**********************************************!*\
  !*** ./src/app/broodje/broodje.component.ts ***!
  \**********************************************/
/*! exports provided: BroodjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroodjeComponent", function() { return BroodjeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BroodjeComponent = /** @class */ (function () {
    function BroodjeComponent() {
    }
    BroodjeComponent.prototype.ngOnInit = function () {
    };
    BroodjeComponent.prototype.isSearchedIngredient = function (ingr) {
        return this.selectedIngredients.filter(function (si) { return si === ingr; }).length !== 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BroodjeComponent.prototype, "ingredients", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BroodjeComponent.prototype, "selectedIngredients", void 0);
    BroodjeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-broodje',
            template: __webpack_require__(/*! ./broodje.component.html */ "./src/app/broodje/broodje.component.html"),
            styles: [__webpack_require__(/*! ./broodje.component.css */ "./src/app/broodje/broodje.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BroodjeComponent);
    return BroodjeComponent;
}());



/***/ }),

/***/ "./src/app/broodjes.service.ts":
/*!*************************************!*\
  !*** ./src/app/broodjes.service.ts ***!
  \*************************************/
/*! exports provided: BroodjesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroodjesService", function() { return BroodjesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _broodje__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./broodje */ "./src/app/broodje.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BroodjesService = /** @class */ (function () {
    function BroodjesService() {
        var _this = this;
        this.allingredients = [];
        this.broodjeslijst = [
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Abraham', ['Fricandon', 'ui', 'augurken', 'mayonaise', 'curryketchup']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Aerobic', ['Eiersalade', 'tomaat', 'cresson', 'wortels']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Ardennais', ['Ardeense ham', 'augurken', 'mosterd', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Argenteuil', ['Ham', 'asperges', 'augurk', 'ei', 'tomaat', 'sla', 'cocktail']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Barbaar', ['préparé', 'augurken', 'tartaar', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Bella Italia', ['Toscaanse préparé', 'parmezaan', 'krulsalade', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Big Snack', ['Kaas', 'ham', 'préparé', 'komkommer', 'ei', 'cocktail', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Boefer', ['Rosbief', 'eiersalade', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Boulet Deluxe', ['Boulet', 'tomatenketchup', 'gele bickysaus', 'gedroogde ui']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Bourgondier', ['Chevre', 'gandaham', 'sla', 'tomaat', 'komkommer', 'ei']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Braziliaan', ['Grijze garnaalsalade', 'tomaat', 'peterselie', 'verse ui', 'komkommer', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Buffalo', ['préparé', 'gele bickysaus', 'geroosterde ui', 'sla', 'augurken']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Bruggeling', ['Oude brugge', 'mesclun', 'tomaat', 'mosterd']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Carpaccio', ['Rosbief', 'parmezaanschilfers', 'rucola', 'olijfolie', 'dressing', 'peper']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Ché-Ché', ['Kaas', 'préparé', 'ei', 'mayonaise', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Chef', ['préparé', 'wortels', 'cresson', 'tomaat', 'ananas', 'cocktail']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Chévre', ['Geitenkaas', 'parmaham', 'krulsalade', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Chorika', ['Chorizo', 'kaas', 'ananas', 'cresson', 'pikante saus']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Coupy Lou', ['Kaas', 'augurk', 'seldersla', 'cocktail', 'cresson', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('D hoeve', ['Kaas', 'ham', 'wortels', 'maiskorrels', 'sla', 'cocktail']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('DJ', ['Salami', 'augurk', 'zilveruitjes', 'mayonaise', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Firenzé', ['Varkensgebraad', 'verse ui', 'mosterd', 'olijfolie', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Florida', ['Kip curry', 'sla', 'wortel', 'ananas', 'ei']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Genteneir', ['Gandaham', 'rode pesto', 'zongedroogde tomaten', 'parmezaan']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Griek', ['préparé', 'champion a la grécque', 'augurk', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Griekse smos', ['Kaas', 'ham', 'champion a la grécque', 'augurk', 'mayonaise', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Hawai', ['Kaas', 'ham', 'ei', 'ananas', 'cocktail', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('italiaan', ['Gandaham', 'zilveruitjes', 'mosterd', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Jardiniére', ['Westlite', 'verse ui', 'peterselie', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Joppie', ['préparé', 'ham', 'sla', 'tomaat', 'joppiesaus']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('K-twee', ['Kaas', 'kippenwit', 'sla', 'looksaus']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('La mer', ['Gerookte zalm', 'kruidenkaas']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Light', ['Krabsalade', 'wortels', 'ananas', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Maison', ['Ham', 'kruidenkaas', 'ei', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Malibu', ['Kalkoenham', 'wortels', 'ananas', 'cocktail', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Mambo', ['Tonijnsalade', 'perzik']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Maritiem', ['Noordzeesalade', 'ansjovis', 'cresson', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Martino anders', ['Martino', 'ansjovis', 'augurken', 'boontjes', 'verse ui', 'mosterd',
                'curryketchup', 'mayonaise', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Mexicaan', ['préparé', 'verse ui', 'pikante saus', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Mik-Mak', ['Kaas', 'ham', 'salami', 'ei', 'cocktail', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Mix', ['Kaas', 'ham', 'préparé', 'augurk', 'cocktail', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Mona Lisa', ['Seranoham', 'parmezaanschilfers', 'sla', 'tomaat', 'vinaigrette']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Nufus', ['Fetakaas', 'paprika', 'oreganokruiden', 'olijfolie', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Nutella', ['Nutella choco']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Oriental', ['Varkensgebraad', 'ananas', 'verse ui', 'pikante saus', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Panino', ['Eiersalade', 'verse ui', 'komkommer', 'cresson', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Parma meloen', ['Parmaham', 'sla', 'tomaat', 'meloen', 'dressing']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Philly', ['Philadelphia', 'komkommer', 'radijs', 'krulsulade']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Pic-nic', ['Varkensgebraad', 'augurk', 'cocktail', 'cresson', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Porky', ['Varkensgebraad', 'cocktail', 'ananas', 'perzik']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Poulet light', ['Gebakken kip', 'light mayonaise', 'wortel', 'sla', 'tomaat', 'ei', 'komkommer']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Portugees', ['Kip pikant', 'ei', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Pronto', ['Mozarella', 'basilicum', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Qattro', ['Ardeense ham', 'kaas', 'préparé', 'komkommer', 'ei', 'cocktail', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Riviera', ['Kaas', 'verse ui', 'wortels', 'ansjovis', 'mayonaise', 'cresson']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Roze ballet', ['Gerookte zalm', 'verse ui', 'peterselie', 'cresson', 'mayonaise']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Siciliaan', ['Rosbief', 'tartaar', 'peper & zout', 'ei', 'krulsia', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Snackfood', ['Kaas', 'ham', 'salami', 'verse ui', 'ei', 'mayonaise', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Spanjaard', ['Tonijn', 'augurk', 'ansjovis', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Superman', ['Eiersalade', 'kaas', 'hesp', 'sla', 'tomaat', 'augurken']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Talé', ['Garnaalsalade', 'verse ui', 'tabasco', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Texas', ['Américain', 'ajuin', 'augurken', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Tonijntino', ['Tonijn', 'ansjovis', 'ei', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Toscane', ['Parmaham', 'mozarella', 'sla', 'tomaat', 'pesto', 'zongedroogde tomaten']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Trampoline', ['préparé', 'zilveruitjes', 'tomatenketchup', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Tummy', ['Kippenwit', 'maiskorrels', 'cocktail', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Turk', ['Pittasalade', 'verse ui', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Variee', ['Ham', 'ansjovis', 'augurk', 'ei', 'cocktail', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Versace', ['Italiaanse ham', 'camembert', 'tomaat', 'sla']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Verwenbroodje', ['Langoustinesalade', 'mesclun', 'ei', 'perzik']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Visserken', ['Noordzeesalade', 'verse ui', 'ei', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Vuur en vlam', ['Tonijn pikant', 'pikante saus', 'sla', 'tomaat']),
            new _broodje__WEBPACK_IMPORTED_MODULE_2__["Broodje"]('Zoet geitje', ['Geitenkaas', 'dadels', 'noten', 'honing'])
        ];
        this.broodjesLijst$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.broodjeslijst);
        var listOfLists = this.broodjeslijst.map(function (broodje) { return broodje.ingredienten; });
        var allIngredients = [].concat.apply([], listOfLists);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(allIngredients)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (ingr) { return ingr.toLowerCase(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinct"])())
            .subscribe(function (e) { return _this.allingredients.push(e); });
    }
    BroodjesService.prototype.getAllIngredients = function () {
        return this.allingredients;
    };
    BroodjesService.prototype.getAllBroodjes = function () {
        return this.broodjeslijst;
    };
    BroodjesService.prototype.getBroodjes = function (ingredient) {
        return this.broodjeslijst
            .filter(function (broodje) { return broodje.ingredienten.find(function (e) {
            return e.toLowerCase().includes(ingredient.toLowerCase());
        }); });
    };
    BroodjesService.prototype.getBroodjesWithAnyIngredient = function (ingredients) {
        return this.broodjeslijst.filter(function (broodje) { return broodje.hasAnyIngredient(ingredients); });
    };
    BroodjesService.prototype.getMatchingIngredients = function (ingredientPart) {
        return this.getAllIngredients()
            .filter(function (uniqueIngredient) { return uniqueIngredient.toLowerCase().includes(ingredientPart); });
    };
    BroodjesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BroodjesService);
    return BroodjesService;
}());



/***/ }),

/***/ "./src/app/broodjesfilter.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/broodjesfilter.pipe.ts ***!
  \****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (broodjes, ingredient) {
        if (!broodjes) {
            return [];
        }
        if (!ingredient) {
            return broodjes;
        }
        ingredient = ingredient.toLowerCase();
        return broodjes.filter(function (broodje) { return broodje.ingredienten.find(function (e) { return e.toLowerCase().includes(ingredient); }); });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ingredient'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/credits/credits.component.css":
/*!***********************************************!*\
  !*** ./src/app/credits/credits.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWRpdHMvY3JlZGl0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/credits/credits.component.html":
/*!************************************************!*\
  !*** ./src/app/credits/credits.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "source: <a href=\"https://github.com/yannisdewolf/debroodjes\">GitHub</a> <br />\nBron: Slagerij Marc en Katelijne, Baarledorpstraat 23, Drongen\n\n"

/***/ }),

/***/ "./src/app/credits/credits.component.ts":
/*!**********************************************!*\
  !*** ./src/app/credits/credits.component.ts ***!
  \**********************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreditsComponent = /** @class */ (function () {
    function CreditsComponent() {
    }
    CreditsComponent.prototype.ngOnInit = function () {
    };
    CreditsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credits',
            template: __webpack_require__(/*! ./credits.component.html */ "./src/app/credits/credits.component.html"),
            styles: [__webpack_require__(/*! ./credits.component.css */ "./src/app/credits/credits.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreditsComponent);
    return CreditsComponent;
}());



/***/ }),

/***/ "./src/app/extendedsearch/extendedsearch.component.css":
/*!*************************************************************!*\
  !*** ./src/app/extendedsearch/extendedsearch.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row:nth-child(even){\n  background-color: #dcdcdc;\n}\n.row:nth-child(odd){\n  background-color: #aaaaaa;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0ZW5kZWRzZWFyY2gvZXh0ZW5kZWRzZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvZXh0ZW5kZWRzZWFyY2gvZXh0ZW5kZWRzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3c6bnRoLWNoaWxkKGV2ZW4pe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xufVxuLnJvdzpudGgtY2hpbGQob2RkKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/extendedsearch/extendedsearch.component.html":
/*!**************************************************************!*\
  !*** ./src/app/extendedsearch/extendedsearch.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- wanted ingredients -->\n\n<div *ngIf=\"!showSearchResults\">\n\n  <div class=\"sticky-top\">\n    <button class=\"btn btn-success\" (click)=\"doSearch()\">Search</button>\n  </div>\n\n  <div>\n    <div *ngFor=\"let ingr of allIngredients\">\n      <app-ingredient [name]=\"ingr\" (emitter)=\"handleEvent($event)\"></app-ingredient>\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"showSearchResults\">\n\n  <div class=\"sticky-top\">\n    <button class=\"btn btn-success\" (click)=\"newSearch()\">New Search</button>\n  </div>\n\n  <div>\n    <div *ngFor=\"let broodje of searchResults\" class=\"row rijtje\">\n        <div class=\"col-6\">{{broodje.naam}}</div>\n        <div class=\"col-6\">{{broodje.ingredientString()}}</div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/extendedsearch/extendedsearch.component.ts":
/*!************************************************************!*\
  !*** ./src/app/extendedsearch/extendedsearch.component.ts ***!
  \************************************************************/
/*! exports provided: ExtendedsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedsearchComponent", function() { return ExtendedsearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _broodjes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../broodjes.service */ "./src/app/broodjes.service.ts");



var ExtendedsearchComponent = /** @class */ (function () {
    function ExtendedsearchComponent(broodjesService) {
        this.broodjesService = broodjesService;
        this.showSearchResults = false;
        this.wantedIngredient = [];
        this.excludedIngredients = [];
    }
    ExtendedsearchComponent.prototype.ngOnInit = function () {
        this.allIngredients = this.broodjesService.getAllIngredients().sort();
    };
    ExtendedsearchComponent.prototype.getExcludableIngredients = function () {
        var _this = this;
        return this.allIngredients.filter(function (item) { return _this.wantedIngredient.indexOf(item) < 0; });
    };
    ExtendedsearchComponent.prototype.markAsExcluded = function (ingredient) {
        this.excludedIngredients = this.excludedIngredients.concat(ingredient);
    };
    ExtendedsearchComponent.prototype.clearExcluded = function () {
        this.excludedIngredients = [];
    };
    //  search
    ExtendedsearchComponent.prototype.doSearch = function () {
        this.showSearchResults = true;
    };
    ExtendedsearchComponent.prototype.newSearch = function () {
        this.showSearchResults = false;
        this.searchResults = [];
        this.wantedIngredient = [];
        this.excludedIngredients = [];
    };
    ExtendedsearchComponent.prototype.clearSearchResults = function () {
        this.searchResults = [];
    };
    ExtendedsearchComponent.prototype.handleEvent = function (event) {
        var _this = this;
        if (event.state === 'WANTED') {
            this.wantedIngredient.push(event.name);
        }
        if (event.state === 'EXCLUDED') {
            this.excludedIngredients.push(event.name);
        }
        if (event.state === 'RESET') {
            var foundInWanted = this.wantedIngredient.indexOf(event.name, 0);
            console.log('RESET ' + event.name);
            if (foundInWanted > -1) {
                this.wantedIngredient = this.wantedIngredient.filter(function (el) { return el !== event.name; });
                // this.wantedIngredient = this.wantedIngredient.splice(foundInWanted, 1);
                console.log('removed from wantedIngredient. Now it is', this.wantedIngredient);
            }
            var foundInExcluded = this.excludedIngredients.indexOf(event.name, 0);
            if (foundInExcluded > -1) {
                this.excludedIngredients = this.excludedIngredients.filter(function (el) { return el !== event.name; });
                // this.excludedIngredients = this.excludedIngredients.splice(foundInExcluded, 1);
            }
        }
        this.searchResults = this.broodjesService.getAllBroodjes()
            .filter(function (broodje) {
            var hasAnyIngredient = _this.wantedIngredient.length > 0 ?
                broodje.hasAnyIngredient(_this.wantedIngredient) : true;
            var hasNoneIngredient = _this.excludedIngredients.length > 0 ?
                broodje.hasNoneIngredient(_this.excludedIngredients) : true;
            return hasAnyIngredient && hasNoneIngredient;
        });
    };
    ExtendedsearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extendedsearch',
            template: __webpack_require__(/*! ./extendedsearch.component.html */ "./src/app/extendedsearch/extendedsearch.component.html"),
            styles: [__webpack_require__(/*! ./extendedsearch.component.css */ "./src/app/extendedsearch/extendedsearch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_broodjes_service__WEBPACK_IMPORTED_MODULE_2__["BroodjesService"]])
    ], ExtendedsearchComponent);
    return ExtendedsearchComponent;
}());



/***/ }),

/***/ "./src/app/ingredient/ingredient.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wanted {\n  background-color: forestgreen;\n}\n\n.not-wanted {\n  background-color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudC9pbmdyZWRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9pbmdyZWRpZW50L2luZ3JlZGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YW50ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbn1cblxuLm5vdC13YW50ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ingredient/ingredient.component.html":
/*!******************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\"\n     [class.wanted]=\"state === 'WANTED'\"\n     [class.not-wanted]=\"state === 'EXCLUDED'\"\n>\n  <div class=\"col-6\">\n{{name}}\n  </div>\n  <div class=\"col\">\n  <button class=\"btn btn-info\" [disabled]=\"state === 'EXCLUDED'\" (click)=\"toggleWanted()\">YES</button>\n  </div>\n\n  <div class=\"col\">\n  <button class=\"btn btn-danger\" [disabled]=\"state === 'WANTED'\" (click)=\"toggleExclude()\">NO</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/ingredient/ingredient.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ingredient/ingredient.component.ts ***!
  \****************************************************/
/*! exports provided: IngredientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientComponent", function() { return IngredientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IngredientComponent = /** @class */ (function () {
    function IngredientComponent() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.state = 'UNDEFINED';
    }
    IngredientComponent.prototype.ngOnInit = function () {
    };
    IngredientComponent.prototype.toggleWanted = function () {
        if (this.state === 'EXCLUDED' || this.state === 'UNDEFINED') {
            this.emitter.emit({
                name: this.name,
                state: 'WANTED'
            });
            this.state = 'WANTED';
        }
        else {
            this.emitter.emit({
                name: this.name,
                state: 'RESET'
            });
            this.state = 'UNDEFINED';
        }
    };
    IngredientComponent.prototype.toggleExclude = function () {
        if (this.state === 'WANTED' || this.state === 'UNDEFINED') {
            this.emitter.emit({
                name: this.name,
                state: 'EXCLUDED'
            });
            this.state = 'EXCLUDED';
        }
        else {
            this.emitter.emit({
                name: this.name,
                state: 'RESET'
            });
            this.state = 'UNDEFINED';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IngredientComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], IngredientComponent.prototype, "emitter", void 0);
    IngredientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingredient',
            template: __webpack_require__(/*! ./ingredient.component.html */ "./src/app/ingredient/ingredient.component.html"),
            styles: [__webpack_require__(/*! ./ingredient.component.css */ "./src/app/ingredient/ingredient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IngredientComponent);
    return IngredientComponent;
}());



/***/ }),

/***/ "./src/app/simplesearch/simplesearch.component.css":
/*!*********************************************************!*\
  !*** ./src/app/simplesearch/simplesearch.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXBsZXNlYXJjaC9zaW1wbGVzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/simplesearch/simplesearch.component.html":
/*!**********************************************************!*\
  !*** ./src/app/simplesearch/simplesearch.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input type=\"text\" [formControl]=\"observableIngredient\" placeholder=\"Ingredient\">\n</div>\n\n<table class=\"table table-sm\">\n  <tr>\n    <th scope=\"col\">Naam</th>\n    <th scope=\"col\">Ingredienten</th>\n  </tr>\n\n  <tr *ngFor=\"let broodje of filteredList\">\n    <td>\n      {{broodje.naam}}\n    </td>\n    <td>\n      <app-broodje [ingredients]=\"broodje.ingredienten\" [selectedIngredients]=\"matchedIngredients\"></app-broodje>\n\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/simplesearch/simplesearch.component.ts":
/*!********************************************************!*\
  !*** ./src/app/simplesearch/simplesearch.component.ts ***!
  \********************************************************/
/*! exports provided: SimplesearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplesearchComponent", function() { return SimplesearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _broodjes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../broodjes.service */ "./src/app/broodjes.service.ts");




var SimplesearchComponent = /** @class */ (function () {
    function SimplesearchComponent(broodjesService) {
        this.broodjesService = broodjesService;
        this.observableIngredient = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.filteredList = [];
        this.matchedIngredients = [];
        this.broodjeslijst = this.broodjesService.getAllBroodjes();
        this.filteredList = this.broodjeslijst;
    }
    SimplesearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observableIngredient.valueChanges.subscribe(function (val) { return _this.filterBroodjes(val); });
    };
    SimplesearchComponent.prototype.filterBroodjes = function (ingredient) {
        if (!ingredient || ingredient.length === 0) {
            this.filteredList = this.broodjesService.getAllBroodjes();
            this.matchedIngredients = [];
        }
        else {
            this.matchedIngredients = this.broodjesService.getMatchingIngredients(ingredient);
            this.filteredList = this.broodjesService.getBroodjesWithAnyIngredient(this.matchedIngredients);
        }
    };
    SimplesearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simplesearch',
            template: __webpack_require__(/*! ./simplesearch.component.html */ "./src/app/simplesearch/simplesearch.component.html"),
            styles: [__webpack_require__(/*! ./simplesearch.component.css */ "./src/app/simplesearch/simplesearch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_broodjes_service__WEBPACK_IMPORTED_MODULE_3__["BroodjesService"]])
    ], SimplesearchComponent);
    return SimplesearchComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/yannisdewolf/debroodjes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map