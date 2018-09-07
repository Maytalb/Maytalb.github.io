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

/***/ "./src/app/Dialogs/delete-dialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Dialogs/delete-dialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-dialog {\r\n  font-size: 30px;\r\n}\r\n\r\n.delete-dialog .buttons {\r\n  flex-direction: row-reverse;\r\n}"

/***/ }),

/***/ "./src/app/Dialogs/delete-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Dialogs/delete-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: DeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialog", function() { return DeleteDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteDialog = /** @class */ (function () {
    function DeleteDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteDialog.prototype.onNoClick = function () {
        this.dialogRef.close('Cancel');
    };
    DeleteDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-dialog',
            template: __webpack_require__(/*! ./delete.html */ "./src/app/Dialogs/delete.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/Dialogs/delete-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteDialog);
    return DeleteDialog;
}());



/***/ }),

/***/ "./src/app/Dialogs/delete.html":
/*!*************************************!*\
  !*** ./src/app/Dialogs/delete.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"delete-dialog\">\r\n  <h1 mat-dialog-title>Delete</h1>\r\n  <div mat-dialog-content class=\"form-field\">\r\n    <p>Are you sure?</p>\r\n  </div>\r\n  <div mat-dialog-actions class=\"buttons\">\r\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Ok</button>\r\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Filters/capitalize.filter.ts":
/*!**********************************************!*\
  !*** ./src/app/Filters/capitalize.filter.ts ***!
  \**********************************************/
/*! exports provided: Capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capitalize", function() { return Capitalize; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Capitalize = /** @class */ (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (value) {
        value = value.replace('  ', ' ');
        if (value) {
            var w_1 = '';
            if (value.split(' ').length > 0) {
                value.split(' ').forEach(function (word) {
                    word = word.replace(/[^0-9a-z]/gi, '');
                    w_1 += word.charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase() + ' ';
                });
            }
            else {
                w_1 = value.charAt(0).toUpperCase() + value.toString().substr(1, value.length).toLowerCase();
                w_1 = w_1.replace(/[^0-9a-z]/gi, '');
            }
            return w_1;
        }
        return value;
    };
    Capitalize = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], Capitalize);
    return Capitalize;
}());



/***/ }),

/***/ "./src/app/Models/Book.ts":
/*!********************************!*\
  !*** ./src/app/Models/Book.ts ***!
  \********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, autorName, bookTitle, publishDate) {
        this._id = id;
        this.AuthorName = autorName;
        this.BookTitle = bookTitle;
        this.PublishedDate = publishDate;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n  display: flex;\r\n}\r\n\r\n.fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.table-row:nth-child(2n + 1) {\r\n  background-color: rgba(0,0,0,.05);\r\n}\r\n\r\n.table-row button {\r\n  margin: 1px 5px;\r\n}\r\n\r\n.table-row button .fa {\r\n  height: 17.5px;\r\n}\r\n\r\n.flex-grid {\r\n  display: flex !important;\r\n}\r\n\r\n.col-1 {\r\n  width: 8.33333%;\r\n  vertical-align: middle;\r\n  line-height: 36px;\r\n}\r\n\r\n.col-2 {\r\n  width: 16.66666%;\r\n  vertical-align: middle;\r\n  line-height: 36px;\r\n}\r\n\r\n.col-3 {\r\n  width: 25%;\r\n  vertical-align: middle;\r\n  line-height: 36px;\r\n}\r\n\r\n.col-4 {\r\n  width: 33.33333%;\r\n  vertical-align: middle;\r\n  line-height: 36px;\r\n}\r\n\r\n.col-5 {\r\n  width: 41.66666%;\r\n  vertical-align: middle;\r\n  line-height: 36px;\r\n}\r\n\r\n.col-6 {\r\n  width: 50%;\r\n  vertical-align: middle;\r\n  line-height: 36px;\r\n}\r\n\r\n.mat-list-text {\r\n  text-align: center;\r\n}\r\n\r\n.table-row {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  flex-direction: row;\r\n  flex-grow: 0;\r\n  -webkit-flex-grow: 0;\r\n  flex-wrap: wrap;\r\n  -webkit-flex-wrap: wrap;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.text {\r\n  word-break: break-all;\r\n  width: 20%;\r\n}\r\n\r\nbody {\r\n  font-size: 20px;\r\n}\r\n\r\n.table-row.header {\r\n  background-color: #FFEEDB;\r\n  font-weight: bold;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-progress-bar *ngIf=\"loading\" color=\"warn\" mode=\"indeterminate\"></mat-progress-bar>\n  <mat-toolbar color=\"primary\">\n    <span>My Libray</span>\n    <span class=\"fill-remaining-space\"></span>\n    <button mat-raised-button (click)=\"openDialog()\"><i class=\"fa fa-plus\"></i> Add book</button>\n  </mat-toolbar>\n</div>\n\n<div class=\"container-fluid\" style=\"margin-top: 10px\">\n  <div class=\"table-row header\">\n    <div class=\"text\">Book ID</div>\n    <div class=\"text\">Book Title</div>\n    <div class=\"text\">Author</div>\n    <div class=\"text\">Published Date</div>\n    <div class=\"text\"></div>\n  </div>\n\n  <div class=\"table-row\" *ngFor=\"let book of books\">\n    <div class=\"text\">{{book._id}}</div>\n    <div class=\"text\">{{book.BookTitle | capitalize}}</div>\n    <div class=\"text\" title=\"vasan@example.com\">{{book.AuthorName}}</div>\n    <div class=\"text\">{{book.PublishedDate}}</div>\n    <div class=\"text\">\n      <button mat-flat-button (click)=\"openDialog(book)\"><i class=\"fa fa-pencil fa-fw\"></i> Edit</button>\n      <button mat-flat-button color=\"accent\" (click)=\"openDeleteDialog(book._id)\"><i class=\"fa fa-trash fa-fw\"></i> Delete</button>\n    </div>\n  </div>   \n</div>"

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
/* harmony import */ var _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-book/new-book.component */ "./src/app/new-book/new-book.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books.service */ "./src/app/books.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Models_Book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Models/Book */ "./src/app/Models/Book.ts");
/* harmony import */ var _Dialogs_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialogs/delete-dialog.component */ "./src/app/Dialogs/delete-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, snackBar, service) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.service = service;
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.books = new Array();
        this.service.getBooks().subscribe(function (data) {
            var allBooksData = data.items;
            allBooksData.forEach(function (book) {
                var newBook = new _Models_Book__WEBPACK_IMPORTED_MODULE_5__["Book"](book.id, book.volumeInfo.authors[0], book.volumeInfo.title, book.volumeInfo.publishedDate);
                _this.books.push(newBook);
            });
        }, function (error) { return console.log(error); }, function () { return _this.loading = false; });
    };
    AppComponent.prototype.remove = function (id) {
        this.loading = true;
        var idToRemove = this.books.findIndex(function (book) { return book._id == id; });
        this.books.splice(idToRemove, 1);
        this.loading = false;
        this.selectedId = '';
    };
    AppComponent.prototype.openDeleteDialog = function (id) {
        var _this = this;
        this.selectedId = id;
        var dialogRef = this.dialog.open(_Dialogs_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialog"], {
            width: '500px',
            data: id
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'Cancel') {
                _this.remove(_this.selectedId);
            }
            else {
                _this.selectedId = '';
            }
        });
    };
    AppComponent.prototype.openDialog = function (product) {
        var _this = this;
        if (typeof product === 'undefined') {
            product = new _Models_Book__WEBPACK_IMPORTED_MODULE_5__["Book"]('', '', '', '');
        }
        var dialogRef = this.dialog.open(_new_book_new_book_component__WEBPACK_IMPORTED_MODULE_1__["NewBookComponent"], {
            width: '500px',
            data: product
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'Cancel') {
                var errors = '';
                _this.loading = true;
                errors = _this.checkFields(result);
                if (errors == '') {
                    var res = _this.books.findIndex(function (x) {
                        return x.BookTitle.toLowerCase() == result.bookTitle.toLowerCase() && x._id !== result._id;
                    });
                    if (res >= 0) {
                        _this.openSnackBar('Error: book already exists');
                    }
                    else {
                        if (result._id == '') {
                            var newBook = new _Models_Book__WEBPACK_IMPORTED_MODULE_5__["Book"](Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), result.authorName, result.bookTitle, result.publishedDate);
                            _this.books.push(newBook);
                        }
                        else {
                            var idToUpdate = _this.books.findIndex(function (book) { return book._id == result._id; });
                            _this.books[idToUpdate].BookTitle = result.bookTitle;
                            _this.books[idToUpdate].AuthorName = result.authorName;
                            _this.books[idToUpdate].PublishedDate = result.publishedDate;
                        }
                    }
                }
                else {
                    _this.openSnackBar(errors);
                }
                _this.loading = false;
            }
        });
    };
    AppComponent.prototype.openSnackBar = function (message, action) {
        if (action === void 0) { action = 'OK'; }
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    };
    AppComponent.prototype.checkFields = function (result) {
        var errors = [];
        if (this.isEmpty(result.authorName)) {
            errors.push('Author name must not be empty');
        }
        if (this.isEmpty(result.bookTitle)) {
            errors.push('Book title must not be empty');
        }
        if (this.isEmpty(result.publishedDate)) {
            errors.push('Published date must not be empty');
        }
        return errors.join(', ');
    };
    AppComponent.prototype.isEmpty = function (value) {
        return value == '';
    };
    AppComponent.prototype.isDate = function (input) {
        var status = false;
        if (!input || input.length <= 0) {
            status = false;
        }
        else {
            try {
                var result = new Date(input);
                status = true;
            }
            catch (ex) {
                status = false;
            }
        }
        return status;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Filters_capitalize_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Filters/capitalize.filter */ "./src/app/Filters/capitalize.filter.ts");
/* harmony import */ var _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-book/new-book.component */ "./src/app/new-book/new-book.component.ts");
/* harmony import */ var _Dialogs_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dialogs/delete-dialog.component */ "./src/app/Dialogs/delete-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./books.service */ "./src/app/books.service.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _new_book_new_book_component__WEBPACK_IMPORTED_MODULE_6__["NewBookComponent"],
                _Filters_capitalize_filter__WEBPACK_IMPORTED_MODULE_5__["Capitalize"],
                _Dialogs_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"]
            ],
            entryComponents: [_new_book_new_book_component__WEBPACK_IMPORTED_MODULE_6__["NewBookComponent"], _Dialogs_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"]],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } }, _books_service__WEBPACK_IMPORTED_MODULE_9__["BooksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books.service.ts":
/*!**********************************!*\
  !*** ./src/app/books.service.ts ***!
  \**********************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "./src/app/config.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = /** @class */ (function () {
    function BooksService(http) {
        this.http = http;
    }
    BooksService.prototype.getBooks = function () {
        return this.http.get(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].urls.getAll);
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/config.js":
/*!***************************!*\
  !*** ./src/app/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    urls: {
        getAll: "https://www.googleapis.com/books/v1/volumes?q=harry&poter&filter=free-ebooks&startIndex=0&maxResults=10"
        }
});

/***/ }),

/***/ "./src/app/new-book/new-book.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-book/new-book.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-book-dialog {\r\n  font-size: 30px;\r\n}\r\n\r\n.new-book-dialog .form-field {\r\n  width: 450px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.new-book-dialog .buttons {\r\n  flex-direction: row-reverse;\r\n}"

/***/ }),

/***/ "./src/app/new-book/new-book.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-book/new-book.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-book-dialog\">\n  <mat-dialog-content [formGroup]=\"form\">\n    <mat-form-field class=\"form-field\">\n      <input type=\"text\" matInput required placeholder=\"Title\" formControlName=\"bookTitle\" />\n      <mat-error *ngIf=\"bookTitle.invalid && (bookTitle.dirty || bookTitle.touched)\">\n        Book title is required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"form-field\">\n      <input type=\"text\" matInput required placeholder=\"Author\" formControlName=\"authorName\">\n      <mat-error *ngIf=\"authorName.invalid && (authorName.dirty || authorName.touched)\" class=\"alert alert-danger\">\n        Author name is required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"form-field\">\n      <input type=\"date\" matInput required placeholder=\"Published Date\" formControlName=\"publishedDate\">\n      <mat-error *ngIf=\"publishedDate.invalid && (publishedDate.dirty || publishedDate.touched)\" class=\"alert alert-danger\">\n        Published date is required\n      </mat-error>\n    </mat-form-field>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"buttons\">\n    <button mat-button (click)=\"save()\" [disabled]=\"!form.valid\">Save</button>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/new-book/new-book.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-book/new-book.component.ts ***!
  \************************************************/
/*! exports provided: NewBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBookComponent", function() { return NewBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewBookComponent = /** @class */ (function () {
    function NewBookComponent(
    //private fb: FormBuilder,
    dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.book = data;
    }
    NewBookComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'authorName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.book.AuthorName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'bookTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.book.BookTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'publishedDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.book.PublishedDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            '_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.book._id, [])
        });
    };
    Object.defineProperty(NewBookComponent.prototype, "bookTitle", {
        get: function () {
            return this.form.get('bookTitle');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewBookComponent.prototype, "authorName", {
        get: function () {
            return this.form.get('authorName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewBookComponent.prototype, "publishedDate", {
        get: function () {
            return this.form.get('publishedDate');
        },
        enumerable: true,
        configurable: true
    });
    NewBookComponent.prototype.save = function () {
        this.dialogRef.close(this.form.value);
    };
    NewBookComponent.prototype.onNoClick = function () {
        this.dialogRef.close('Cancel');
    };
    NewBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-book.component.html */ "./src/app/new-book/new-book.component.html"),
            styles: [__webpack_require__(/*! ./new-book.component.css */ "./src/app/new-book/new-book.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewBookComponent);
    return NewBookComponent;
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
    .catch(function (error) { return console.error(error); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Meytal\Documents\GitHub\BooksProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map