(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <nav class=\"navbar navbar-expand-lg text-white bg-primary navbar-dark\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand text-white\" routerLink=\"/\" style=\"font-weight:bolder;\">\n            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"25px\" height=\"25px\" viewBox=\"0 0 492.316 492.316\" style=\"enable-background:new 0 0 492.316 492.316;\"\n              xml:space=\"preserve\">\n            <g>\n              <path fill=\"white\" d=\"M326.999,467.52h-9.459v-54.943h2.627c3.119,0,5.648-2.531,5.648-5.65s-2.529-5.65-5.648-5.65h-2.627v-21.157h-42.594\n                c-2.77-0.487-4.101-1.991-4.968-5.347c-2.715-10.508-2.169-20.952,1.62-31.047c4.871-12.984,6.209-27.293,4.088-43.737\n                c-0.138-1.069-0.279-2.14-0.423-3.21c-1.244-9.333-2.419-18.148-0.474-26.633c4.623-20.137,9.384-43.668,7.32-68.125\n                c-0.517-6.117-0.871-12.4-1.216-18.475c-0.104-1.866-0.211-3.733-0.319-5.601c-0.07-1.184,0.008-1.801,0.069-2.082\n                c13.365-6.029,15.894-18.816,17.568-27.285c0.61-3.095,1.024-6.184,1.426-9.171c0.606-4.531,1.181-8.812,2.369-12.753\n                c3.013-9.968,3.644-25.313,1.937-37.074c-1.229-8.467-5.927-14.572-13.228-17.191c-3.562-1.276-28.597-8.119-26.56-17.482\n                c1.996-9.168,6.51-22.165,6.724-31.361c0.192-8.432-2.729-22.703-24.465-23.533L246.158,0l-0.259,0.011\n                c-21.73,0.83-24.651,15.102-24.459,23.532c0.209,9.189,5.386,22.183,7.385,31.359c2.038,9.366-23.664,16.209-27.228,17.487\n                c-7.298,2.617-11.994,8.723-13.224,17.189c-1.708,11.762-1.075,27.106,1.935,37.074c1.191,3.943,1.764,8.229,2.372,12.762\n                c0.399,2.984,0.813,6.069,1.424,9.163c1.673,8.452,4.196,21.206,17.569,27.288c0.061,0.282,0.14,0.902,0.069,2.082l-0.314,5.484\n                c-0.344,6.111-0.701,12.432-1.221,18.587c-2.064,24.458,2.696,47.99,7.319,68.125c1.946,8.484,0.771,17.301-0.472,26.635\n                c-0.143,1.07-0.285,2.14-0.423,3.207c-2.122,16.447-0.785,30.755,4.088,43.74c3.79,10.098,4.335,20.541,1.62,31.047\n                c-0.868,3.354-2.198,4.857-4.969,5.346h-42.594v21.232c-2.759,0.373-4.894,2.715-4.894,5.575c0,2.859,2.135,5.2,4.894,5.574v55.021\n                h-9.456c-6.849,0-12.399,5.551-12.399,12.396c0,6.848,5.551,12.401,12.399,12.401h161.679c6.844,0,12.396-5.555,12.396-12.401\n                C339.396,473.07,333.843,467.52,326.999,467.52z M301.815,446.926H190.502v-27.488h111.313V446.926z\"/>\n            </g>\n            </svg>\n        Film Awards Season</a>\n        <button class=\"navbar-toggler\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          \n          <ul class=\"navbar-nav pl-md-4 ml-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link text-white\" routerLink=\"/awards\" (click)=\"isMenuCollapsed = true\">Awards <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link text-white\" routerLink=\"/categories\" (click)=\"isMenuCollapsed = true\">Categories</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link text-white\" routerLink=\"/statistics\" (click)=\"isMenuCollapsed = true\">Statistics</a>\n            </li>\n          </ul>\n          <ng-template #rt let-r=\"result\" let-t=\"term\">\n            <ngb-highlight class=\"notranslate\" [result]=\"r\" [term]=\"t\" (click)=\"onSubmit(r)\"></ngb-highlight>\n          </ng-template>\n          <form (ngSubmit)=\"onSubmit()\" class=\"form-inline my-2 my-lg-0 ml-md-3\">\n              <input #inp [(ngModel)]=\"searchText\" class=\"form-control mr-sm-2 w-40\" type=\"search\" placeholder=\"Search movies or people\" aria-label=\"Search\" name=\"search\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\">\n              <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"><img src=\"../assets/img/search.png\"></button>\n            </form>\n        </div>\n    </div>\n  </nav>\n</header>\n<router-outlet></router-outlet>\n\n<footer class=\"text-white bg-primary mb-0 sticky-footer\" role=\"contentinfo\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 text-md-center text-left pt-2\">\n          <ng-template #popContent><b>matavic25@gmail.com</b></ng-template>\n          <ng-template #popTitle><span class=\"text-dark\">Contact me!</span></ng-template>\n        <p>\n          Copyright &copy;{{ fecha }} All rights reserved | <a style=\"cursor:pointer;\" placement=\"top\" [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\">MataSoft Inc.</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/award/award.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/award/award.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid bg-warning text-white\">\n    <div class=\"container\">\n        <h1 class=\"display-4 sombra\" style=\"font-weight:bolder;\">{{award}}</h1>\n        <hr class=\"my-2\">\n        <p class=\"lead\">{{awardDescription}} <span style=\"text-decoration: underline;\">Date</span>: {{awardDate}}</p>\n    </div>\n</div>\n<div class=\"container-fluid mb-5 pt-5\" [class.trans-back]=\"thereIsData > 0\" ngxUiLoaderBlurred>\n    <div class=\"card-columns\">\n        <div class=\"card text-center border-secondary\" *ngFor=\"let movie of movies$ | async; let ind = index\">\n            <div class=\"lazy-container\" ngxUiLoaderBlurred>\n                <img [src]=\"movie.winnerdata?.Poster || '../assets/img/no-image.png'\" class=\"card-img-top\" [alt]=\"movie.fwinner[0]\" (loaded)=\"imgLoaded(ind)\">\n                <ngx-ui-loader fgsColor=\"Goldenrod\" [loaderId]=\"ind\" fgsType=\"fading-circle\" [hasProgressBar]=\"false\"></ngx-ui-loader>\n            </div>\n            <div class=\"card-header h-10 bg-secondary\">\n                <h5 class=\"card-title\">{{movie.categorytit}}</h5>\n            </div>\n            <ul class=\"list-group list-group-flush\" >\n                <li class=\"list-group-item\" [class.bg-success]=\"movie.fwinner[0] === p\" *ngFor=\"let p of movie.fnominees; let i = index\">\n                    <div>\n                        <span *ngIf=\"movie.categorycod === 'foreign'\"><span class=\"flag-icon\" [ngClass]=\"movie.categorycod === 'foreign' ? flags.get(movie.pnominees[i]) : ''\"></span>&nbsp;&nbsp;</span>\n                        <br *ngIf=\"movie.categorycod === 'foreign'\">\n                        <a (click)=\"open(content, p)\" style=\"cursor:pointer;\" placement=\"top\" ngbTooltip=\"View Movie Info\">{{p}}</a>\n                    </div>\n                    <span *ngIf=\"movie.pnominees[i]\" class=\"badge badge-warning text_badge\">{{movie.pnominees[i]}}</span>\n                    <div>\n                        <a *ngIf=\"movie.winnerdata?.Youtube && movie.fwinner[0] === p\" (click)=\"openTrailerModal(movie.winnerdata?.Youtube)\" style=\"cursor: pointer;\"><img src=\"../assets/img/youtube.jpg\" width=\"24\" alt=\"Trailer\" title=\"View Trailer\"></a>\n                        <a *ngIf=\"movie.winnerdata?.Netflix && movie.fwinner[0] === p\" [href]=\"movie.winnerdata?.Netflix\" target=\"_blank\"style=\"cursor: pointer;\"><img src=\"../assets/img/netflix.png\" width=\"32\" alt=\"Netflix\" title=\"View on Netflix\"></a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div> \n    <div class=\"py-2\" *ngIf=\"thereIsData == 0\">\n        <h1 class=\"text-center\">TO BE ANNOUNCED ...</h1>\n    </div> \n    <!-- <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6\">\n        <div class=\"col mb-4\" *ngFor=\"let movie of movies$ | async\">\n            <div class=\"card text-center border-secondary\" >\n                    <img [src]=\"movie.winnerdata?.Poster || '../assets/img/nominee.png'\" class=\"card-img-top\" [alt]=\"movie.fwinner[0]\">\n                <div class=\"card-header h-10 bg-secondary\">\n                    <h5 class=\"card-title\">{{movie.categorytit}}</h5>\n                  </div>\n                <ul class=\"list-group list-group-flush\" >\n                    <li class=\"list-group-item\" [class.bg-success]=\"movie.fwinner[0] === p\" *ngFor=\"let p of movie.fnominees; let i = index\">\n                        <a (click)=\"open(content, $event.target.innerText)\" style=\"cursor:pointer;\" placement=\"top\" ngbTooltip=\"View Movie Info\">{{p}}</a><br>\n                        <span class=\"badge badge-warning\">{{movie.pnominees[i]}}</span>\n                    </li>\n                </ul>    \n            </div>\n        </div>\n    </div> -->\n</div>\n<ngx-ui-loader fgsColor=\"Goldenrod\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>\n<ng-template #content let-modal>\n    <div class=\"modal-header bg-secondary\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Movie Info</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <h2 class=\"text-center\">{{movie.Title}}</h2>\n        <h3 *ngIf=\"!movie.Title\" class=\"text-center\">Movie Info Not Available</h3>\n        <div class=\"text-center\">\n            <img [src]=\"movie.Poster || '../assets/img/nominee.png'\" style=\"width: 65%;\" class=\"img-fluid\" [alt]=\"movie.Title\">\n        </div>\n        <br>\n        <table class=\"table table-hover\" id=\"documentos\">\n            <tr >\n                <td class=\"celda-titulo\">\n                    Year: \n                </td>\n                <td >\n                    {{ movie.Year }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Released: \n                </td>\n                <td >\n                    {{ movie.Released }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Run Time: \n                </td>\n                <td >\n                    {{ movie.Runtime }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Country: \n                </td>\n                <td >\n                    {{ movie.Country }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Actors: \n                </td>\n                <td >\n                    {{ movie.Actors }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Director: \n                </td>\n                <td >\n                    {{ movie.Director }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Writer: \n                </td>\n                <td >\n                    {{ movie.Writer }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Production: \n                </td>\n                <td >\n                    {{ movie.Production }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Genre: \n                </td>\n                <td >\n                    {{ movie.Genre }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Plot: \n                </td>\n                <td >\n                    {{ movie.Plot }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Ratings: \n                </td>\n                <td >\n                    <ng-container *ngFor=\"let rating of movie.Ratings; let i = index\">\n                        <div>\n                            <img [src]=\"critics[i]\" style=\"width: 25px;\">&nbsp;<span>{{rating.Source}} </span>&nbsp;<span class=\"badge badge-danger\"> {{rating.Value}}</span>\n                        </div>\n                    </ng-container>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"celda-titulo\">\n                    Trailer: \n                </td>\n                <td>\n                    <a [href]=\"movie.Youtube\" style=\"cursor: pointer;\" target=\"_blank\"><img src=\"../assets/img/youtube.jpg\" alt=\"Trailer\" width=\"32\"></a>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <ngx-ui-loader fgsColor=\"Goldenrod\" loaderId=\"loader-movie\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid bg-warning text-white\">\n    <div class=\"container\">\n        <table>\n            <tr>\n                <td><img src=\"../assets/img/statue.png\" style=\"height: 100px;\" ></td>\n                \n                <td><h1 class=\"display-4 sombra\" style=\"font-weight:bolder;\">Awards</h1>\n                    <hr class=\"my-4\">\n                    <p class=\"lead\">All the film awards of the 2019-2020 Season.</p>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>\n\n<div class=\"container-fluid mb-5 pt-5 trans-back\">\n    <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5\" style=\"padding-bottom: 2rem;\">\n        <div class=\"col mb-4\" *ngFor=\"let award of awards; let i = index\">\n            <div class=\"card text-center h-100\" >\n                <div class=\"lazy-container\" ngxUiLoaderBlurred>\n                    <img [src]=\"award.image\" class=\"card-img-top\" [alt]=\"award.title\" (loaded)=\"imgLoaded(i)\">\n                    <ngx-ui-loader fgsColor=\"Goldenrod\" [loaderId]=\"i\" fgsType=\"fading-circle\" [hasProgressBar]=\"false\"></ngx-ui-loader>\n                </div>\n                <div class=\"card-body ion-text-justify\">\n                    <h5 class=\"card-title text-primary\">{{ award.title}}</h5>\n                    <p class=\"card-text\">{{ award.description }}</p>\n                </div>\n                <div class=\"card-footer\">\n                    <a [routerLink]=\"['/award', award.title]\" class=\"btn btn-primary\">View</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid bg-warning text-white\">\n    <div class=\"container\">\n        <table>\n            <tr>\n                <td><img src=\"../assets/img/envelope.png\" style=\"height: 100px;\" ></td>\n                \n                <td><h1 class=\"display-4 sombra\" style=\"font-weight:bolder;\">Categories</h1>\n                    <hr class=\"my-2\">\n                    <p class=\"lead\">The most common award categories of this season.</p>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>\n\n<div class=\"container-fluid mb-5 trans-back pt-5\">\n    <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5\" style=\"padding-bottom: 2rem;\">\n        <div class=\"col mb-4\" *ngFor=\"let category of categories\">\n            <div class=\"card text-center h-100 border-secondary\" >\n                <div class=\"text-center mt-2\">\n                    <img [src]=\"category.image\" class=\"card-img-top\" [alt]=\"category.title\" style=\"width:100px;\">\n                </div>    \n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-primary\">{{ category.title}}</h5>\n                    <p class=\"card-text\">{{ category.description }}</p>\n                </div>\n                <div class=\"card-footer\">\n                    <a [routerLink]=\"['/category', category.title]\" class=\"btn btn-primary\">View</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a>, <a href=\"https://www.flaticon.com/authors/eucalyp\" title=\"Eucalyp\">Eucalyp</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid bg-warning text-white\">\n    <div class=\"container\">\n        <h1 class=\"display-4 sombra\" style=\"font-weight:bolder;\">Best {{category}}</h1>\n        <hr class=\"my-2\">\n        <p class=\"lead\">{{categoryDescription}}</p>\n    </div>\n</div>\n<div class=\"container-fluid mb-5 pt-5 trans-back\" ngxUiLoaderBlurred>\n    <div class=\"card-columns\">\n        <div class=\"card text-center border-secondary\" *ngFor=\"let movie of movies$ | async; let ind = index\">\n            <div class=\"lazy-container\" ngxUiLoaderBlurred>\n                <img [src]=\"movie.winnerdata?.Poster || '../assets/img/no-image.png'\" class=\"card-img-top\" [alt]=\"movie.fwinner[0]\" (loaded)=\"imgLoaded(ind)\">\n                <ngx-ui-loader fgsColor=\"Goldenrod\" [loaderId]=\"ind\" fgsType=\"fading-circle\" [hasProgressBar]=\"false\"></ngx-ui-loader>\n            </div>\n            <div class=\"card-header h-10 bg-secondary\">\n                <h5 class=\"card-title\">{{movie.award}}</h5>\n                <span class=\"badge badge-primary\">{{movie.categorytit}}</span>\n                </div>\n            <ul class=\"list-group list-group-flush\" >\n                <li class=\"list-group-item\" [class.bg-success]=\"movie.fwinner[0] === p\" *ngFor=\"let p of movie.fnominees; let i = index\">\n                    <div>\n                        <span *ngIf=\"movie.categorycod === 'foreign'\"><span class=\"flag-icon\" [ngClass]=\"movie.categorycod === 'foreign' ? flags.get(movie.pnominees[i]) : ''\"></span>&nbsp;&nbsp;</span>\n                        <br *ngIf=\"movie.categorycod === 'foreign'\">\n                        <a (click)=\"open(content, p)\" style=\"cursor:pointer;\" placement=\"top\" ngbTooltip=\"View Movie Info\">{{p}}</a>\n                    </div>\n                    <span *ngIf=\"movie.pnominees[i]\" class=\"badge badge-warning text_badge\">{{movie.pnominees[i]}}</span>\n                    <div>\n                        <a *ngIf=\"movie.winnerdata?.Youtube && movie.fwinner[0] === p\" (click)=\"openTrailerModal(movie.winnerdata?.Youtube)\" style=\"cursor: pointer;\"><img src=\"../assets/img/youtube.jpg\" width=\"24\" alt=\"Trailer\" title=\"View Trailer\"></a>\n                        <a *ngIf=\"movie.winnerdata?.Netflix && movie.fwinner[0] === p\" [href]=\"movie.winnerdata?.Netflix\" target=\"_blank\"style=\"cursor: pointer;\"><img src=\"../assets/img/netflix.png\" width=\"32\" alt=\"Netflix\" title=\"View on Netflix\"></a>\n                    </div>\n                </li>\n            </ul>    \n        </div>  \n    </div>   \n<!-- <div class=\"container-fluid mb-5\" ngxUiLoaderBlurred>\n    <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6\">\n        <div class=\"col mb-4\" *ngFor=\"let movie of movies$ | async\">\n            <div class=\"card text-center border-secondary\" >\n                    <img [src]=\"movie.winnerdata?.Poster || '../assets/img/nominee.png'\" class=\"card-img-top\" [alt]=\"movie.fwinner[0]\">\n                <div class=\"card-header h-10 bg-secondary\">\n                    <h5 class=\"card-title\">{{movie.award}}</h5>\n                    <span class=\"badge badge-primary\">{{movie.categorytit}}</span>\n                    </div>\n                <ul class=\"list-group list-group-flush\" >\n                    <li class=\"list-group-item\" [class.bg-success]=\"movie.fwinner[0] === p\" *ngFor=\"let p of movie.fnominees; let i = index\">\n                        <a (click)=\"open(content, $event.target.innerText)\" style=\"cursor:pointer;\" placement=\"top\" ngbTooltip=\"View Movie Info\">{{p}}</a><br>\n                        <span class=\"badge badge-warning\">{{movie.pnominees[i]}}</span>\n                    </li>\n                </ul>    \n            </div>\n        </div>\n    </div> -->\n</div> \n<ngx-ui-loader fgsColor=\"Goldenrod\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>\n<ng-template #content let-modal>\n    <div class=\"modal-header bg-secondary\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Movie Info</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <h2 class=\"text-center\">{{movie.Title}}</h2>\n        <h3 *ngIf=\"!movie.Title\" class=\"text-center\">Movie Info Not Available</h3>\n        <div class=\"text-center\">\n            <img [src]=\"movie.Poster || '../assets/img/nominee.png'\" style=\"width: 65%;\" class=\"img-fluid\" [alt]=\"movie.Title\">\n        </div>\n        <br>\n        <table class=\"table table-hover\" id=\"documentos\">\n            <tr >\n                <td class=\"celda-titulo\">\n                    Year: \n                </td>\n                <td >\n                    {{ movie.Year }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Released: \n                </td>\n                <td >\n                    {{ movie.Released }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Run Time: \n                </td>\n                <td >\n                    {{ movie.Runtime }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Country: \n                </td>\n                <td >\n                    {{ movie.Country }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Actors: \n                </td>\n                <td >\n                    {{ movie.Actors }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Director: \n                </td>\n                <td >\n                    {{ movie.Director }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Writer: \n                </td>\n                <td >\n                    {{ movie.Writer }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Production: \n                </td>\n                <td >\n                    {{ movie.Production }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Genre: \n                </td>\n                <td >\n                    {{ movie.Genre }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Plot: \n                </td>\n                <td >\n                    {{ movie.Plot }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Ratings: \n                </td>\n                <td >\n                    <ng-container *ngFor=\"let rating of movie.Ratings; let i = index\">\n                        <div>\n                            <img [src]=\"critics[i]\" style=\"width: 25px;\">&nbsp;<span>{{rating.Source}} </span>&nbsp;<span class=\"badge badge-danger\"> {{rating.Value}}</span>\n                        </div>\n                    </ng-container>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"celda-titulo\">\n                    Trailer: \n                </td>\n                <td>\n                    <a [href]=\"movie.Youtube\" style=\"cursor: pointer;\" target=\"_blank\"><img src=\"../assets/img/youtube.jpg\" alt=\"Trailer\" width=\"32\"></a>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <ngx-ui-loader fgsColor=\"Goldenrod\" loaderId=\"loader-movie\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngb-carousel *ngIf=\"images\">\n    <ng-template ngbSlide>\n        <div>\n            <picture>\n                <source media=\"(max-width: 600px)\" [srcset]=\"images[4]\">\n                <source media=\"(min-width: 601px)\" [srcset]=\"images[0]\">\n                <img [src]=\"images[0]\" alt=\"Awards Ceremony\" (loaded)=\"imgLoaded1()\">\n            </picture>\n        </div>\n        <div class=\"carousel-caption\" >\n        <h1 class=\"sombra1\">Film Awards Season</h1>\n        <p class=\"font-weight-bold sombra1\">Film awards season is an annual time period between November and February every year, in the United States, where a majority of important film award events take place.</p>\n        </div>\n    </ng-template>\n    <ng-template ngbSlide>\n        <div>\n            <picture>\n                <source media=\"(max-width: 600px)\" [srcset]=\"images[5]\">\n                <source media=\"(min-width: 601px)\" [srcset]=\"images[1]\">\n                <img [src]=\"images[1]\" alt=\"Empty Movie Theater\" (loaded)=\"imgLoaded2()\">\n            </picture>\n        </div>\n        <div class=\"carousel-caption\" >\n            <h1 class=\"sombra2\">Film Awards Season</h1>\n            <p class=\"font-weight-bold sombra2\">In October ballots are sent out to voters, to collect nominations for the first award ceremonies, which are usually the Hollywood Awards or the independent Gotham Awards, to begin awards season in November.</p>\n        </div>\n    </ng-template>\n    <ng-template ngbSlide>\n        <div>\n            <picture>\n                <source media=\"(max-width: 600px)\" [srcset]=\"images[6]\">\n                <source media=\"(min-width: 601px)\" [srcset]=\"images[2]\">\n                <img [src]=\"images[2]\" alt=\"Oscar Statuette\" (loaded)=\"imgLoaded3()\">\n            </picture>\n        </div>\n        <div class=\"carousel-caption\" >\n        <h1 class=\"sombra3\">Film Awards Season</h1>\n        <p class=\"font-weight-bold sombra3\">The season usually culminates in the Academy Awards in late February or early March </p>\n        </div>\n    </ng-template>\n</ngb-carousel>\n<ngx-ui-loader fgsColor=\"SlateGray\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>\n<section class=\"mt-5\">\n    <div class=\"row featurette m-2\">\n        <div class=\"col-md-6 order-md-2 col-lg-4  text-center\">\n            <h2 class=\"featurette-heading\">The World of Movie Awards. <span class=\"text-muted\">2019-2020 Season.</span></h2>\n            <p class=\"lead\">Discover the movies, actors, directors, producers, and other professionals in the film industry who have been awarded top honors in the film industry, including Oscars, Golden Globes, BAFTAs winners, and more..</p>\n        </div>\n        <div class=\"col-md-6 order-md-1 col-lg-4 offset-lg-2 text-center align-middle\">\n            <img [src]=\"images[3]\" class=\"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto\">\n        </div>\n    </div>\n        <hr class=\"featurette-divider\">\n</section>\n<section style=\"margin-bottom: 4rem; padding-bottom: 2rem;\">\n    <div class=\"container marketing\">\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <img class=\"bd-placeholder-img rounded-circle\" src=\"../assets/img/award-ceremony.png\" width=\"150\" height=\"150\" preserveAspectRatio=\"xMidYMid slice\">\n                <h2>Awards</h2>\n                <p>Cinematic awards highlight the top movies of the year. Critics' awards, Industry awards - which are a mix of critics, academics, and film professionals - and Audience awards, all of them always celebrate the best of American and International Cinema.</p>\n                <p><a class=\"btn btn-warning\" routerLink=\"/awards\" role=\"button\">View &raquo;</a></p>\n            </div><!-- /.col-lg-4 -->\n            <div class=\"col-lg-4\">\n                <img class=\"bd-placeholder-img rounded-circle\" src=\"../assets/img/awards-nomination.png\" width=\"150\" height=\"150\" preserveAspectRatio=\"xMidYMid slice\">\n                <h2>Categories</h2>\n                <p>Awards have been divided into various artistical and technical categories: best picture, acting prizes, directing, screenplay, cinematography, production and costume design, editing, score, song, makeup, sound, visual effects, foreign, animated feature and documentary film.</p>\n                <p><a class=\"btn btn-warning\" routerLink=\"/categories\" role=\"button\">View &raquo;</a></p>\n            </div><!-- /.col-lg-4 -->\n            <div class=\"col-lg-4\">\n                <img class=\"bd-placeholder-img rounded-circle\" src=\"../assets/img/reel.jpg\" width=\"150\" height=\"150\" preserveAspectRatio=\"xMidYMid slice\">\n                <h2>Statistics</h2>\n                <p>Some movies have been honored or nominated more than others. In this section we'll see which movies stay ahead and take the lead as films more awarded or nominated. We’ve rounded up the films with up to date and reliable statistics took between all major prizes.</p>\n                <p><a class=\"btn btn-warning\" routerLink=\"/statistics\" role=\"button\">View &raquo;</a></p>\n            </div><!-- /.col-lg-4 -->\n            </div>\n    </div> \n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"notfound\">\n    <div class=\"notfound\">\n        <div class=\"notfound-404\">\n            <h1>Oops!</h1>\n        </div>\n        <h2>404 - Page not found</h2>\n        <p>The page you are looking for has not been found.</p>\n        <a routerLink=\"/\" class=\"btn btn-warning\" role=\"button\">Go To Home</a>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid bg-warning text-white\">\n    <div class=\"container\">\n        <h1 class=\"display-4 sombra\">Results for:  {{term}} <span *ngIf=\"ab || nb\">(<span *ngIf=\"ab\"> Awards: {{awardsForResult}}</span>&nbsp;<span *ngIf=\"nb\"> Nominations: {{nominationsForResult}}</span>)</span></h1>\n    </div>\n</div>\n<div class=\"container-fluid mb-5 pt-5\" [class.trans-back]=\"thereIsData > 0\" ngxUiLoaderBlurred>\n    <div class=\"card-columns\">\n        <div class=\"card text-center border-secondary\" *ngFor=\"let movie of movies$ | async; let ind = index\">\n            <div class=\"lazy-container\" ngxUiLoaderBlurred>\n                <img [src]=\"movie.winnerdata?.Poster || '../assets/img/no-image.png'\" class=\"card-img-top\" [alt]=\"movie.fwinner[0]\" (loaded)=\"imgLoaded(ind)\">\n                <ngx-ui-loader fgsColor=\"Goldenrod\" [loaderId]=\"ind\" fgsType=\"fading-circle\" [hasProgressBar]=\"false\"></ngx-ui-loader>\n            </div>    \n            <div class=\"card-header h-10 bg-secondary\">\n                <h5 class=\"card-title\">{{movie.award}}</h5>\n                <span class=\"badge badge-primary\">{{movie.categorytit}}</span>\n            </div>\n            <ul class=\"list-group list-group-flush\" >\n                <li class=\"list-group-item\" [class.bg-success]=\"movie.fwinner[0] === p\" *ngFor=\"let p of movie.fnominees; let i = index\">\n                    <div>\n                        <span *ngIf=\"movie.categorycod === 'foreign'\"><span class=\"flag-icon\" [ngClass]=\"movie.categorycod === 'foreign' ? flags.get(movie.pnominees[i]) : ''\"></span>&nbsp;&nbsp;</span>\n                        <br *ngIf=\"movie.categorycod === 'foreign'\">\n                        <a (click)=\"open(content, p)\" style=\"cursor:pointer;\" placement=\"top\" ngbTooltip=\"View Movie Info\">{{p}}</a>\n                    </div>\n                    <span *ngIf=\"movie.pnominees[i]\" class=\"badge text_badge\" [ngClass]=\"movie.pnominees[i].trim() === term.trim() ? 'badge-danger' : 'badge-warning'\">{{movie.pnominees[i]}}</span>\n                    <div>\n                        <a *ngIf=\"movie.winnerdata?.Youtube && movie.fwinner[0] === p\" (click)=\"openTrailerModal(movie.winnerdata?.Youtube)\" style=\"cursor: pointer;\"><img src=\"../assets/img/youtube.jpg\" width=\"24\" alt=\"Trailer\" title=\"View Trailer\"></a>\n                        <a *ngIf=\"movie.winnerdata?.Netflix && movie.fwinner[0] === p\" [href]=\"movie.winnerdata?.Netflix\" target=\"_blank\"style=\"cursor: pointer;\"><img src=\"../assets/img/netflix.png\" width=\"32\" alt=\"Netflix\" title=\"View on Netflix\"></a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div> \n    <div class=\"py-2\" *ngIf=\"thereIsData == 0\">\n        <h1 class=\"text-center\">NO RESULTS FOR THIS SEARCH</h1>\n    </div> \n</div>\n<ngx-ui-loader fgsColor=\"Goldenrod\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>\n<ng-template #content let-modal>\n    <div class=\"modal-header bg-secondary\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Movie Info</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <h2 class=\"text-center\">{{movie.Title}}</h2>\n        <h3 *ngIf=\"!movie.Title\" class=\"text-center\">Movie Info Not Available</h3>\n        <div class=\"text-center\">\n            <img [src]=\"movie.Poster || '../assets/img/nominee.png'\" style=\"width: 65%;\" class=\"img-fluid\" [alt]=\"movie.Title\">\n        </div>\n        <br>\n        <table class=\"table table-hover\" id=\"documentos\">\n            <tr >\n                <td class=\"celda-titulo\">\n                    Year: \n                </td>\n                <td >\n                    {{ movie.Year }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Released: \n                </td>\n                <td >\n                    {{ movie.Released }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Run Time: \n                </td>\n                <td >\n                    {{ movie.Runtime }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Country: \n                </td>\n                <td >\n                    {{ movie.Country }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Actors: \n                </td>\n                <td >\n                    {{ movie.Actors }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Director: \n                </td>\n                <td >\n                    {{ movie.Director }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Writer: \n                </td>\n                <td >\n                    {{ movie.Writer }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Production: \n                </td>\n                <td >\n                    {{ movie.Production }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Genre: \n                </td>\n                <td >\n                    {{ movie.Genre }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Plot: \n                </td>\n                <td >\n                    {{ movie.Plot }}\n                </td>\n            </tr>\n            <tr >\n                <td class=\"celda-titulo\">\n                    Ratings: \n                </td>\n                <td >\n                    <ng-container *ngFor=\"let rating of movie.Ratings; let i = index\">\n                        <div>\n                            <img [src]=\"critics[i]\" style=\"width: 25px;\">&nbsp;<span>{{rating.Source}} </span>&nbsp;<span class=\"badge badge-danger\"> {{rating.Value}}</span>\n                        </div>\n                    </ng-container>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"celda-titulo\">\n                    Trailer: \n                </td>\n                <td>\n                    <a [href]=\"movie.Youtube\" style=\"cursor: pointer;\" target=\"_blank\"><img src=\"../assets/img/youtube.jpg\" alt=\"Trailer\" width=\"32\"></a>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <ngx-ui-loader fgsColor=\"Goldenrod\" loaderId=\"loader-movie\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\n    </div>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/presentation-statistic/presentation-statistic.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/presentation-statistic/presentation-statistic.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid bg-warning text-white\">\n    <div class=\"container\">\n        <h2 class=\"display-4 sombra text-center\" style=\"font-weight:bolder;\">{{title}}</h2>\n    </div>\n</div>\n<div class=\"container mb-5\" ngxUiLoaderBlurred>\n    <div class=\"graphic-container\" *ngIf=\"graphicData && graphicData?.length > 0\">\n        <ngx-charts-pie-chart\n            [scheme]=\"colorScheme\"\n            [results]=\"graphicData\"\n            [gradient]=\"gradient\"\n            [legend]=\"showLegend\"\n            [legendPosition]=\"legendPosition\"\n            [labels]=\"showLabels\"\n            [doughnut]=\"isDoughnut\"\n            (select)=\"onSelect($event)\"\n            >\n        </ngx-charts-pie-chart>\n    </div>\n    <div class=\"tabular-container my-5\" *ngIf=\"tabularData && tabularData?.length > 0\">\n        <table class=\"table table-striped\" *ngIf=\"statisticType !== 'nominations'\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th class=\"notranslate\" scope=\"col\">#</th>\n                <th scope=\"col\">Film</th>\n                <th scope=\"col\" class=\"text-center\">Awards</th>\n                <th scope=\"col\" class=\"text-center\">Nominations</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let d of tabularData; let i = index\">\n                <th class=\"notranslate\" scope=\"row\">{{i + 1}}</th>\n                <td>\n                    <a [routerLink]=\"['/results', d._id]\" style=\"cursor:pointer; color: black;\">{{d._id}}</a>\n                </td>\n                <td class=\"notranslate text-center\">{{d.awards}}</td>\n                <td class=\"notranslate text-center\">{{d.nominations}}</td>\n              </tr>\n            </tbody>\n        </table>\n        <table class=\"table table-striped\" *ngIf=\"statisticType === 'nominations'\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th class=\"notranslate\" scope=\"col\">#</th>\n                <th scope=\"col\">Film</th>\n                <th scope=\"col\" class=\"text-center\">Nominations</th>\n                <th scope=\"col\" class=\"text-center\">Awards</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let d of tabularData; let i = index\">\n                <th class=\"notranslate\" scope=\"row\">{{i + 1}}</th>\n                <td>\n                    <a [routerLink]=\"['/results', d._id]\" style=\"cursor:pointer; color: black;\">{{d._id}}</a>\n                </td>\n                <td class=\"notranslate text-center\">{{d.nominations}}</td>\n                <td class=\"notranslate text-center\">{{d.awards}}</td>\n              </tr>\n            </tbody>\n        </table>    \n    </div>\n\n    <div class=\"py-2\" *ngIf=\"tabularData?.length == 0\">\n        <h1 class=\"text-center\">Sorry, Data Unavailable ...</h1>\n    </div> \n</div>\n<ngx-ui-loader fgsColor=\"Goldenrod\" fgsType=\"rectangle-bounce-pulse-out-rapid\"></ngx-ui-loader>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/selection-statistic/selection-statistic.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/selection-statistic/selection-statistic.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"trans-back\" style=\"padding-bottom: 4rem; padding-top: 3rem;\">\n<section >\n    <div class=\"container marketing\">\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"card h-100\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Statistics By Awards</h5>\n                      <!-- <form> -->\n                        <div class=\"form-group my-3\">\n                            <select class=\"custom-select\" (change)=\"changeSuit($event)\">\n                                <option selected disabled value=\"\">Select Film Awards...</option>\n                                <option *ngFor=\"let award of awards\" [value]=\"award.title\">{{award.title}}</option>\n                            </select>\n                        </div>\n                    <!-- </form> -->\n                      <button class=\"btn btn-warning\" (click)=\"goToStatistics('one')\" [disabled]=\"!buttonDisabled\">Go &raquo;</button>\n                    </div>\n                  </div>\n            </div><!-- /.col-lg-4 -->\n            <div class=\"col-lg-4\">\n                <div class=\"card h-80\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Global Statistics - Awards</h5>\n                      <p class=\"card-text\">Most Awarded Movies counting all Film Awards.</p>\n                      <a [routerLink]=\"['/statistics', 'awards']\" class=\"btn btn-warning\">Go &raquo;</a>\n                    </div>\n                  </div>\n            </div><!-- /.col-lg-4 -->\n            <div class=\"col-lg-4\">\n                <div class=\"card h-80\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Global Statistics - Nominations</h5>\n                      <p class=\"card-text\">Most Nominated Movies counting all Film Awards.</p>\n                      <a [routerLink]=\"['/statistics', 'nominations']\" class=\"btn btn-warning\">Go &raquo;</a>\n                    </div>\n                  </div>\n            </div><!-- /.col-lg-4 -->\n            </div>\n        </div> \n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trailer-modal/trailer-modal.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trailer-modal/trailer-modal.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"modal-header\">\n    <button type=\"button\" class=\"close btn-sm\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\" class=\"text-white\">&times;</span>\n    </button>\n</div> -->\n<div class=\"modal-body dark-modal\">\n    <div class=\"iframe-container\">\n        <iframe width=\"560\" height=\"315\" \n            [src]=\"sanitizeUrl()\"\n            frameborder=\"0\" \n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \n            allowfullscreen>\n        </iframe>\n    </div>\n</div>\n    <!-- <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
            /* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
            /* harmony import */ var _award_award_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./award/award.component */ "./src/app/award/award.component.ts");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
            /* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
            /* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
            /* harmony import */ var _statistics_selection_statistic_selection_statistic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistics/selection-statistic/selection-statistic.component */ "./src/app/statistics/selection-statistic/selection-statistic.component.ts");
            /* harmony import */ var _statistics_presentation_statistic_presentation_statistic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statistics/presentation-statistic/presentation-statistic.component */ "./src/app/statistics/presentation-statistic/presentation-statistic.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            var routes = [
                {
                    path: "award/:awardname", component: _award_award_component__WEBPACK_IMPORTED_MODULE_5__["AwardComponent"]
                },
                {
                    path: "category/:categoryname", component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"]
                },
                {
                    path: "results/:search", component: _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"]
                },
                {
                    path: "awards", component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__["AwardsComponent"]
                },
                {
                    path: "categories", component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"]
                },
                {
                    path: 'statistics', component: _statistics_selection_statistic_selection_statistic_component__WEBPACK_IMPORTED_MODULE_9__["SelectionStatisticComponent"]
                },
                {
                    path: 'statistics/:type', component: _statistics_presentation_statistic_presentation_statistic_component__WEBPACK_IMPORTED_MODULE_10__["PresentationStatisticComponent"]
                },
                {
                    path: "", component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
                },
                {
                    path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sticky-footer {\r\nposition: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  font-size: 13px!important;\r\n}\r\n\r\n:-moz-placeholder { /* Firefox 18- */\r\n     font-size: 13px!important;\r\n}\r\n\r\n::-moz-placeholder {  /* Firefox 19+ */\r\n     font-size: 13px!important;\r\n}\r\n\r\n.navbar-nav > li > a.router-link-active {\r\n  color: #555;\r\n  background-color: #e7e7e7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxlQUFlO0VBQ2IsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsb0JBQW9CLGdCQUFnQjtLQUMvQix5QkFBeUI7QUFDOUI7O0FBQ0Esc0JBQXNCLGdCQUFnQjtLQUNqQyx5QkFBeUI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LWZvb3RlciB7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIgeyAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiA+IGxpID4gYS5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _award_award_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./award/award.service */ "./src/app/award/award.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, awardService) {
                    var _this = this;
                    this.router = router;
                    this.awardService = awardService;
                    this.searching = false;
                    this.searchFailed = false;
                    this.title = 'filmawardsseason';
                    this.isMenuCollapsed = true;
                    this.fecha = new Date().getFullYear();
                    this.search = function (text$) { return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) { return value.trim().length >= 2; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.awardService.predictive(term.trim()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                        _this.searchFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
                    })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = false; })); };
                    var navEndEvents = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }));
                    navEndEvents.subscribe(function (event) {
                        gtag('config', 'UA-154618974-1', {
                            'page_path': event.urlAfterRedirects
                        });
                    });
                }
                AppComponent.prototype.onSubmit = function (t) {
                    if (t === void 0) { t = ''; }
                    if (t.trim()) {
                        this.router.navigate(['/results', t.trim()]);
                        this.searchText = "";
                        return;
                    }
                    if (this.searchText) {
                        this.router.navigate(['/results', this.searchText.trim()]);
                        this.searchText = "";
                    }
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _award_award_service__WEBPACK_IMPORTED_MODULE_4__["AwardService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            /* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
            /* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
            /* harmony import */ var _award_award_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./award/award.component */ "./src/app/award/award.component.ts");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
            /* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
            /* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
            /* harmony import */ var _trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trailer-modal/trailer-modal.component */ "./src/app/trailer-modal/trailer-modal.component.ts");
            /* harmony import */ var _statistics_selection_statistic_selection_statistic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./statistics/selection-statistic/selection-statistic.component */ "./src/app/statistics/selection-statistic/selection-statistic.component.ts");
            /* harmony import */ var _statistics_presentation_statistic_presentation_statistic_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./statistics/presentation-statistic/presentation-statistic.component */ "./src/app/statistics/presentation-statistic/presentation-statistic.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _loaded_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loaded.directive */ "./src/app/loaded.directive.ts");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _awards_awards_component__WEBPACK_IMPORTED_MODULE_11__["AwardsComponent"],
                        _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
                        _award_award_component__WEBPACK_IMPORTED_MODULE_13__["AwardComponent"],
                        _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                        _category_category_component__WEBPACK_IMPORTED_MODULE_15__["CategoryComponent"],
                        _results_results_component__WEBPACK_IMPORTED_MODULE_16__["ResultsComponent"],
                        _trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_17__["TrailerModalComponent"],
                        _statistics_selection_statistic_selection_statistic_component__WEBPACK_IMPORTED_MODULE_18__["SelectionStatisticComponent"],
                        _statistics_presentation_statistic_presentation_statistic_component__WEBPACK_IMPORTED_MODULE_19__["PresentationStatisticComponent"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
                        _loaded_directive__WEBPACK_IMPORTED_MODULE_21__["LoadedDirective"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCollapseModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPopoverModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltipModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderModule"],
                        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"],
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production }),
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                    entryComponents: [_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_17__["TrailerModalComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/award/award.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/award/award.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    padding-top: 10px; \r\n    padding-bottom: 5px; \r\n    margin-bottom: 0px; \r\n}\r\na:hover {\r\n    color: rgb(0, 0, 255);\r\n}\r\n#documentos {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n#documentos td{\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n.celda-titulo{background-color: #0091EA}\r\n#documentos tr:hover {background-color: #ddd;}\r\n#documentos th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #0091EA;\r\n    color: white;\r\n  }\r\n.square-rounded-corner {\r\n    border: 1px solid #e9e9e9;\r\n    padding: 20px 10px 0px 10px;\r\n    border-radius: 8px;\r\n  }\r\n.vcenter {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    float: none;\r\n  }\r\n.sombra {\r\n  /* color: black;\r\n  text-shadow: 0 0 3px #FF0000; */\r\n  text-shadow: 0 0 5px #000000;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\n@media screen and (min-width: 601px) {\r\n    h1 {\r\n      font-size: 3vw;\r\n    }\r\n  }\r\n/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */\r\n@media screen and (max-width: 600px) {\r\n    h1 {\r\n      font-size: 6vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 1201px) {\r\n    h1 {\r\n      font-size: 2vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 601px) {\r\n    p {\r\n      font-size: 2vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 601px) {\r\n    p {\r\n      font-size: 3vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 1201px) {\r\n    p {\r\n      font-size: 1vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 575.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 2;\r\n         -moz-column-count: 2;\r\n              column-count: 2;\r\n    }\r\n    }\r\n/* Small devices (landscape phones, less than 768px) */\r\n@media screen and (min-width: 767.98px) {\r\n    .card-columns {\r\n      -webkit-column-count: 3;\r\n         -moz-column-count: 3;\r\n              column-count: 3;\r\n    }\r\n    }\r\n/* Medium devices (tablets, less than 992px) */\r\n@media screen and (min-width: 991.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 4;\r\n         -moz-column-count: 4;\r\n              column-count: 4;\r\n    }\r\n  }\r\n/* Large devices (desktops, less than 1200px) */\r\n@media screen and (min-width: 1199.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 5;\r\n         -moz-column-count: 5;\r\n              column-count: 5;\r\n    }\r\n  }\r\n@media screen and (min-width: 1399.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 6;\r\n         -moz-column-count: 6;\r\n              column-count: 6;\r\n    }\r\n  }\r\n@media screen and (min-width: 1599.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 7;\r\n         -moz-column-count: 7;\r\n              column-count: 7;\r\n    }\r\n  }\r\n.text_badge{\r\n    display:inline-block;\r\n    width:auto;\r\n    max-width:91%;\r\n    text-overflow:ellipsis;\r\n    white-space:nowrap;\r\n    overflow:hidden;\r\n  }\r\n.custom-backdrop {\r\n    background-color: #3b454e;\r\n  }\r\n.dark-modal {\r\n    background-color: #000000;\r\n  }\r\n.dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n  }\r\n.trans-back {\r\n    background: url('oscars_back_transparent.jpg');\r\n    background-repeat: repeat;\r\n    /* background-size: cover; */\r\n    background-position: center;\r\n  }\r\n.lazy-container {\r\n    display: block;\r\n    position: relative;\r\n    height: 0;\r\n    padding-bottom: 148%;\r\n   }\r\n.lazy-container img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXdhcmQvYXdhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkO0FBRUEsY0FBYyx5QkFBeUI7QUFFdkMsc0JBQXNCLHNCQUFzQixDQUFDO0FBRTdDO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsV0FBVztFQUNiO0FBRUY7RUFDRTtpQ0FDK0I7RUFDL0IsNEJBQTRCO0FBQzlCO0FBRUU7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGO0FBRUEsaUZBQWlGO0FBQ2pGO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGO0FBRUE7SUFDRTtNQUNFLHVCQUFlO1NBQWYsb0JBQWU7Y0FBZixlQUFlO0lBQ2pCO0lBQ0E7QUFFRixzREFBc0Q7QUFDdEQ7SUFDRTtNQUNFLHVCQUFlO1NBQWYsb0JBQWU7Y0FBZixlQUFlO0lBQ2pCO0lBQ0E7QUFFRiw4Q0FBOEM7QUFDOUM7SUFDRTtNQUNFLHVCQUFlO1NBQWYsb0JBQWU7Y0FBZixlQUFlO0lBQ2pCO0VBQ0Y7QUFFQSwrQ0FBK0M7QUFDL0M7SUFDRTtNQUNFLHVCQUFlO1NBQWYsb0JBQWU7Y0FBZixlQUFlO0lBQ2pCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsdUJBQWU7U0FBZixvQkFBZTtjQUFmLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0U7TUFDRSx1QkFBZTtTQUFmLG9CQUFlO2NBQWYsZUFBZTtJQUNqQjtFQUNGO0FBRUE7SUFDRSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBRUE7SUFDRSw4Q0FBK0Q7SUFDL0QseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG9CQUFvQjtHQUNyQjtBQUVBO0lBQ0Msa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7R0FDYiIsImZpbGUiOiJzcmMvYXBwL2F3YXJkL2F3YXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcclxufVxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcclxufVxyXG5cclxuI2RvY3VtZW50b3Mge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNkb2N1bWVudG9zIHRke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNlbGRhLXRpdHVsb3tiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MUVBfVxyXG4gIFxyXG4gICNkb2N1bWVudG9zIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjZG9jdW1lbnRvcyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkxRUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcXVhcmUtcm91bmRlZC1jb3JuZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLnZjZW50ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuXHJcbi5zb21icmEge1xyXG4gIC8qIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjRkYwMDAwOyAqL1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwMDAwMDA7XHJcbn1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBJZiB0aGUgc2NyZWVuIHNpemUgaXMgNjAwcHggd2lkZSBvciBsZXNzLCBzZXQgdGhlIGZvbnQtc2l6ZSBvZiA8ZGl2PiB0byAzMHB4ICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzUuOThweCkgeyBcclxuICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gIC8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIGxlc3MgdGhhbiA3NjhweCkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgLyogTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweCkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTEuOThweCkgeyBcclxuICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgbGVzcyB0aGFuIDEyMDBweCkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHsgXHJcbiAgICAuY2FyZC1jb2x1bW5zIHtcclxuICAgICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM5OS45OHB4KSB7IFxyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogNjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1OTkuOThweCkgeyBcclxuICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICBjb2x1bW4tY291bnQ6IDc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dF9iYWRnZXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6YXV0bztcclxuICAgIG1heC13aWR0aDo5MSU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0NTRlO1xyXG4gIH1cclxuXHJcbiAgLmRhcmstbW9kYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJiMmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAudHJhbnMtYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvb3NjYXJzX2JhY2tfdHJhbnNwYXJlbnQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sYXp5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNDglO1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGF6eS1jb250YWluZXIgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/award/award.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/award/award.component.ts ***!
          \******************************************/
        /*! exports provided: AwardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardComponent", function () { return AwardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _award_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./award.service */ "./src/app/award/award.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _awards_awards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../awards/awards */ "./src/app/awards/awards.ts");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            /* harmony import */ var _map_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map-flags */ "./src/app/map-flags.ts");
            /* harmony import */ var _trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trailer-modal/trailer-modal.component */ "./src/app/trailer-modal/trailer-modal.component.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AwardComponent = /** @class */ (function () {
                function AwardComponent(route, awardService, modalService, ngxLoader) {
                    this.route = route;
                    this.awardService = awardService;
                    this.modalService = modalService;
                    this.ngxLoader = ngxLoader;
                    this.noImage = '';
                    this.movie = {};
                    this.flags = _map_flags__WEBPACK_IMPORTED_MODULE_7__["mapFlags"];
                    this.critics = [
                        '../assets/img/critics1.jpg',
                        '../assets/img/critics2.jpg',
                        '../assets/img/critics3.jpg'
                    ];
                }
                AwardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ngxLoader.start();
                    this.award = this.route.snapshot.paramMap.get('awardname');
                    this.awardDescription = _awards_awards__WEBPACK_IMPORTED_MODULE_5__["awards"].find(function (a) { return a.title === _this.award; }).description;
                    this.awardImage = _awards_awards__WEBPACK_IMPORTED_MODULE_5__["awards"].find(function (a) { return a.title === _this.award; }).image;
                    this.awardDate = _awards_awards__WEBPACK_IMPORTED_MODULE_5__["awards"].find(function (a) { return a.title === _this.award; }).date;
                    this.movies$ = this.awardService.getMovies(this.award)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (data) {
                        _this.thereIsData = data.length;
                        for (var i = 0; i < data.length; i++)
                            _this.ngxLoader.startLoader(String(i));
                    }));
                    this.ngxLoader.stop();
                };
                AwardComponent.prototype.open = function (content, movie) {
                    var _this = this;
                    this.ngxLoader.startLoader("loader-movie");
                    this.awardService.getMovie(movie).subscribe(function (data) {
                        _this.movie = data;
                        _this.modalService.open(content, { centered: true }).result.then(function (result) {
                        });
                        _this.ngxLoader.stopLoader("loader-movie");
                    });
                };
                AwardComponent.prototype.openTrailerModal = function (videoId) {
                    this.ngxLoader.startLoader("loader-movie");
                    var modalRef = this.modalService.open(_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_8__["TrailerModalComponent"], { backdropClass: 'custom-backdrop', centered: true, size: 'xl', windowClass: 'dark-modal' });
                    var url = "https://www.youtube.com/embed/" + videoId + "?controls=0&autoplay=1";
                    modalRef.componentInstance.videoId = url;
                    this.ngxLoader.stopLoader("loader-movie");
                };
                AwardComponent.prototype.imgLoaded = function (i) {
                    this.ngxLoader.stopLoader(i);
                };
                return AwardComponent;
            }());
            AwardComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _award_service__WEBPACK_IMPORTED_MODULE_3__["AwardService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
                { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] }
            ]; };
            AwardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-award',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./award.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/award/award.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./award.component.css */ "./src/app/award/award.component.css")).default]
                })
            ], AwardComponent);
            /***/ 
        }),
        /***/ "./src/app/award/award.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/award/award.service.ts ***!
          \****************************************/
        /*! exports provided: AwardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardService", function () { return AwardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AwardService = /** @class */ (function () {
                function AwardService(http) {
                    this.http = http;
                }
                AwardService.prototype.getMovies = function (award) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "awards?a=" + award);
                };
                AwardService.prototype.getMoviesByCategory = function (category) {
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "categories?c=" + category);
                };
                AwardService.prototype.getMovie = function (movie) {
                    var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('m', movie) };
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "movie", options);
                };
                AwardService.prototype.search = function (term) {
                    var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('t', term) };
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "search", options);
                };
                AwardService.prototype.getStatistics = function (type) {
                    var options = {};
                    switch (type) {
                        case 'awards':
                            options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('t', 'p') };
                            break;
                        case 'nominations':
                            options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('t', 'n') };
                            break;
                        default:
                            options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('t', 'a').set('award', type) };
                            break;
                    }
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "count", options);
                };
                AwardService.prototype.predictive = function (term) {
                    var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('search', term) };
                    if (term === '') {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                    }
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "typeahead", options);
                };
                return AwardService;
            }());
            AwardService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AwardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AwardService);
            /***/ 
        }),
        /***/ "./src/app/awards/awards.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/awards/awards.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    padding-top: 10px; \r\n    padding-bottom: 5px; \r\n    margin-bottom: 0px; \r\n}\r\n\r\n.sombra {\r\n    /* color: black;\r\n    text-shadow: 0 0 3px #FF0000; */\r\n    text-shadow: 0 0 3px #000000;\r\n  }\r\n\r\n.trans-back {\r\n    background: url('oscars_back_transparent.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n\r\n.lazy-container {\r\n    display: block;\r\n    position: relative;\r\n    height: 0;\r\n    padding-bottom: 60%;\r\n   }\r\n\r\n.lazy-container img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXdhcmRzL2F3YXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTttQ0FDK0I7SUFDL0IsNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0UsOENBQStEO0lBQy9ELHNCQUFzQjtJQUN0QiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7R0FDcEI7O0FBRUE7SUFDQyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvYXdhcmRzL2F3YXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDsgXHJcbn1cclxuXHJcbi5zb21icmEge1xyXG4gICAgLyogY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggI0ZGMDAwMDsgKi9cclxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICAudHJhbnMtYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvb3NjYXJzX2JhY2tfdHJhbnNwYXJlbnQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxhenktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwJTtcclxuICAgfVxyXG4gICBcclxuICAgLmxhenktY29udGFpbmVyIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/awards/awards.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/awards/awards.component.ts ***!
          \********************************************/
        /*! exports provided: AwardsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function () { return AwardsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _awards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awards */ "./src/app/awards/awards.ts");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            var AwardsComponent = /** @class */ (function () {
                function AwardsComponent(ngxLoader) {
                    this.ngxLoader = ngxLoader;
                }
                AwardsComponent.prototype.ngOnInit = function () {
                    this.awards = _awards__WEBPACK_IMPORTED_MODULE_2__["awards"];
                    for (var i = 0; i < 20; i++)
                        this.ngxLoader.startLoader(String(i));
                };
                AwardsComponent.prototype.imgLoaded = function (i) {
                    this.ngxLoader.stopLoader(i);
                };
                return AwardsComponent;
            }());
            AwardsComponent.ctorParameters = function () { return [
                { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
            ]; };
            AwardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-awards',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./awards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./awards.component.css */ "./src/app/awards/awards.component.css")).default]
                })
            ], AwardsComponent);
            /***/ 
        }),
        /***/ "./src/app/awards/awards.ts": 
        /*!**********************************!*\
          !*** ./src/app/awards/awards.ts ***!
          \**********************************/
        /*! exports provided: awards */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awards", function () { return awards; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var awards = [
                {
                    title: 'Hollywood Film Awards',
                    image: '../assets/img/Hollywoodfilmawards.jpg',
                    description: 'The Hollywood Film Awards, founded in 1997, were created to celebrate Hollywood and launch the awards season.',
                    date: 'November 3, 2019'
                },
                {
                    title: 'People\'s Choice Awards',
                    image: '../assets/img/people-s-choice-awards-se.jpeg',
                    description: 'It\'s an American awards show, recognizing people in entertainment, voted online by the general public and fans. The show has been held annually since 1975.',
                    date: 'November 10, 2019'
                },
                {
                    title: 'British Independent Film Awards',
                    image: '../assets/img/bifa.jpg',
                    description: 'Nominations for the annual awards ceremony are announced in early November, with the ceremony itself taking place in early December.',
                    date: 'December 1, 2019'
                },
                {
                    title: 'Gotham Awards',
                    image: '../assets/img/gotham.png',
                    description: 'Presented annually to the makers of independent films at a ceremony in New York City, the city first nicknamed "Gotham" by native son Washington Irving.',
                    date: 'December 2, 2019'
                },
                {
                    title: 'National Board of Review',
                    image: '../assets/img/nbr.png',
                    description: 'The National Board of Review of Motion Pictures is an organization in the United States dedicated to discussing and selecting what its members regard as the best film works of each year.',
                    date: 'December 3, 2019'
                },
                {
                    title: 'New York Film Critics Circle',
                    image: '../assets/img/NYFCC_logo.jpg',
                    description: 'It\'s an American film critic organization founded in 1935. Its membership includes over 30 film critics from New York-based daily and weekly newspapers, magazines.',
                    date: 'December 4, 2019'
                },
                {
                    title: 'AFI Awards',
                    image: '../assets/img/afi.jpg',
                    description: 'Each year the AFI Awards honor the ten outstanding films ("Movies of the Year"). The awards are a non-competitive acknowledgement of excellence.',
                    date: 'December 4, 2019'
                },
                {
                    title: 'European Film Awards',
                    image: '../assets/img/efa.png',
                    description: 'The European Film Awards have been presented annually since 1988 by the European Film Academy to recognize excellence in European cinematic achievements.',
                    date: 'December 7, 2019'
                },
                {
                    title: 'Los Angeles Film Critics Association',
                    image: '../assets/img/Los-Angeles-Film-Critics-Association-Logo.jpg',
                    description: 'It\'s an American film critic organization founded in 1975. Its membership comprises film critics from Los Angeles-based print and electronic media.',
                    date: 'December 8, 2019'
                },
                {
                    title: 'Chicago Film Critics Awards',
                    image: '../assets/img/chicago.jpg',
                    description: 'The CFCA is an association of professional film critics, who work in print, broadcast and online media, based in Chicago, Illinois, United States.',
                    date: 'December 14, 2019'
                },
                {
                    title: 'Golden Globe Awards',
                    image: '../assets/img/golden-globes.jpg',
                    description: 'Accolades bestowed by the 93 members of the Hollywood Foreign Press Association beginning in January 1944,recognizing excellence in film, both domestic and foreign.',
                    date: 'January 5, 2020'
                },
                {
                    title: 'Critics\' Choice Awards',
                    image: '../assets/img/critics.jpg',
                    description: 'Awards show presented annually by the American-Canadian Broadcast Film Critics Association (BFCA) to honor the finest in cinematic achievement.',
                    date: 'January 12, 2020'
                },
                {
                    title: 'Screen Actors Guild Awards',
                    image: '../assets/img/actors-guild.jpg',
                    description: 'SAG Awards are accolades given by the Screen Actors Guild‐American Federation Artists (SAG) to recognize outstanding performances in film.',
                    date: 'January 19, 2020'
                },
                {
                    title: 'Directors Guild of America Awards',
                    image: '../assets/img/directors-guild.jpg',
                    description: 'The Directors Guild of America Awards are issued annually by the Directors Guild of America.',
                    date: 'January 25, 2020'
                },
                {
                    title: 'Annie Awards',
                    image: '../assets/img/annie.jpg',
                    description: 'The Annie Awards are accolades presented annually by the Los Angeles branch of the International Animated Film Association, since 1972, to recognize excellence in animation in film.',
                    date: 'January 25, 2020'
                },
                {
                    title: 'Writers Guild of America Awards',
                    image: '../assets/img/writers-guild.jpg',
                    description: 'The Writers Guild of America Awards for outstanding achievements in film writing, including both fiction and non-fiction categories.',
                    date: 'February 1, 2020'
                },
                {
                    title: 'BAFTAs',
                    image: '../assets/img/bafta.png',
                    description: 'The BAFTA Film Awards are presented in an annual award show hosted by the British Academy of Film and Television Arts to honour the best British and international contributions to film.',
                    date: 'February 2, 2020'
                },
                {
                    title: 'Satellite Awards',
                    image: '../assets/img/satellite.jpg',
                    description: 'The Satellite Awards are annual awards given by the International Press Academy that are commonly noted in entertainment industry journals and blogs.',
                    date: 'February 7, 2020'
                },
                {
                    title: 'Independent Spirit Awards',
                    image: '../assets/img/spirit.jpg',
                    description: 'The Film Independent Spirit Awards, founded in 1984, are awards dedicated to independent filmmakers.',
                    date: 'February 8, 2020'
                },
                {
                    title: 'Academy Awards',
                    image: '../assets/img/oscars.jpg',
                    description: 'The Academy Awards, more popularly known as the Oscars, are awards for artistic and technical merit in the film industry. Given annually by the Academy of Motion Picture Arts and Sciences (AMPAS).',
                    date: 'February 9, 2020'
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/categories/categories.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/categories/categories.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    padding-top: 10px; \r\n    padding-bottom: 5px; \r\n    margin-bottom: 0px; \r\n}\r\n\r\n.sombra {\r\n    /* color: black;\r\n    text-shadow: 0 0 3px #FF0000; */\r\n    text-shadow: 0 0 3px #000000;\r\n  }\r\n\r\n.trans-back {\r\n    background: url('oscars_back_transparent.jpg');\r\n    background-repeat: repeat;\r\n    /* background-size: cover; */\r\n    background-position: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO21DQUMrQjtJQUMvQiw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRSw4Q0FBK0Q7SUFDL0QseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG59XHJcblxyXG4uc29tYnJhIHtcclxuICAgIC8qIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4ICNGRjAwMDA7ICovXHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgLnRyYW5zLWJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL29zY2Fyc19iYWNrX3RyYW5zcGFyZW50LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/categories/categories.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/categories/categories.component.ts ***!
          \****************************************************/
        /*! exports provided: CategoriesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () { return CategoriesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/app/categories/categories.ts");
            var CategoriesComponent = /** @class */ (function () {
                function CategoriesComponent() {
                }
                CategoriesComponent.prototype.ngOnInit = function () {
                    this.categories = _categories__WEBPACK_IMPORTED_MODULE_2__["categories"];
                };
                return CategoriesComponent;
            }());
            CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-categories',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")).default]
                })
            ], CategoriesComponent);
            /***/ 
        }),
        /***/ "./src/app/categories/categories.ts": 
        /*!******************************************!*\
          !*** ./src/app/categories/categories.ts ***!
          \******************************************/
        /*! exports provided: categories */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function () { return categories; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var categories = [
                {
                    title: 'Picture',
                    image: '../assets/img/categories.png',
                    description: 'Best Picture is the final award of the night and is considered the most prestigious honor of the ceremony.',
                },
                {
                    title: 'Actor',
                    image: '../assets/img/actor.png',
                    description: 'It is given in honor of an actor who has delivered an outstanding performance in a leading role while working within the film industry.',
                },
                {
                    title: 'Supporting Actor',
                    image: '../assets/img/supactor.png',
                    description: 'It is given in honor of an actor who has delivered an outstanding performance in a supporting role while working within the film industry.',
                },
                {
                    title: 'Actress',
                    image: '../assets/img/actress.png',
                    description: 'It is given in honor of an actress who has delivered an outstanding performance in a leading role while working within the film industry.',
                },
                {
                    title: 'Supporting Actress',
                    image: '../assets/img/celebrity.png',
                    description: 'It is given in honor of an actress who has delivered an outstanding performance in a supporting role while working within the film industry.',
                },
                {
                    title: 'Director',
                    image: '../assets/img/director.png',
                    description: 'It is given in honor of a film director who has exhibited outstanding directing while working in the film industry.',
                },
                {
                    title: 'Screenplay',
                    image: '../assets/img/writer.png',
                    description: 'These screenplays can be original works or adaptations from existing pieces of writing.',
                },
                {
                    title: 'Documentary',
                    image: '../assets/img/documentary.png',
                    description: 'It is an award for feature-length documentaries.',
                },
                {
                    title: 'Animated Picture',
                    image: '../assets/img/animation.png',
                    description: 'An animated feature is a film with a running time of more than 40 minutes in which characters\' performances are created using a frame-by-frame technique.',
                },
                {
                    title: 'Foreign Language Picture',
                    image: '../assets/img/foreign.png',
                    description: 'It is given to a feature-length motion picture produced outside the United States or outside the country in which the award is given, with a predominantly non-English dialogue track.',
                },
                {
                    title: 'Cinematography',
                    image: '../assets/img/cinematography.png',
                    description: 'It is an Award given each year to a cinematographer for work on one particular motion picture.',
                },
                {
                    title: 'Film Editing',
                    image: '../assets/img/film-editing.png',
                    description: 'Film editing is both a creative and a technical part of the post-production process of filmmaking.',
                },
                {
                    title: 'Production Design',
                    image: '../assets/img/productiondesign.png',
                    description: 'It is an award that recognizes achievement for art direction in film.',
                },
                {
                    title: 'Costume Design',
                    image: '../assets/img/costume.png',
                    description: 'It is an Award presented annually for achievement in film costume design.',
                },
                {
                    title: 'Makeup and Hairstyling',
                    image: '../assets/img/makeup.png',
                    description: 'It is an Award given to the best achievement in makeup and hairstyling for film.',
                },
                {
                    title: 'Visual Effects',
                    image: '../assets/img/visual-effects.png',
                    description: 'It is an award given for the best achievement in visual effects.',
                },
                {
                    title: 'Sound',
                    image: '../assets/img/sound.png',
                    description: 'It is an award that recognizes the finest or most euphonic sound mixing or recording and most aesthetic sound design or sound editing.',
                },
                {
                    title: 'Original Score',
                    image: '../assets/img/music.png',
                    description: 'It is an award presented annually to the best substantial body of music in the form of dramatic underscoring written specifically for the film by the submitting composer.',
                },
                {
                    title: 'Song',
                    image: '../assets/img/song.png',
                    description: 'It is presented to the songwriters who have composed the best original song written specifically for a film.',
                },
                {
                    title: 'Audience',
                    image: '../assets/img/audience.png',
                    description: 'It is an award selected by the audience.',
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/category/category.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/category/category.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    padding-top: 10px; \r\n    padding-bottom: 5px; \r\n    margin-bottom: 0px; \r\n}\r\n\r\na:hover {\r\n    color: rgb(0, 0, 255);\r\n}\r\n\r\n#documentos {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#documentos td{\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n.celda-titulo{background-color: #0091EA}\r\n\r\n#documentos tr:hover {background-color: #ddd;}\r\n\r\n#documentos th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #0091EA;\r\n    color: white;\r\n  }\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.sombra {\r\n    /* color: black;\r\n    text-shadow: 0 0 3px #FF0000; */\r\n    text-shadow: 0 0 5px #000000;\r\n  }\r\n\r\n@media screen and (min-width: 601px) {\r\n    h1 {\r\n      font-size: 3vw;\r\n    }\r\n  }\r\n\r\n/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */\r\n\r\n@media screen and (max-width: 600px) {\r\n    h1 {\r\n      font-size: 6vw;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 1201px) {\r\n    h1 {\r\n      font-size: 2vw;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 601px) {\r\n    p {\r\n      font-size: 2vw;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 601px) {\r\n    p {\r\n      font-size: 3vw;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 1201px) {\r\n    p {\r\n      font-size: 1vw;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 575.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 2;\r\n         -moz-column-count: 2;\r\n              column-count: 2;\r\n    }\r\n    }\r\n\r\n/* Small devices (landscape phones, less than 768px) */\r\n\r\n@media screen and (min-width: 767.98px) {\r\n    .card-columns {\r\n      -webkit-column-count: 3;\r\n         -moz-column-count: 3;\r\n              column-count: 3;\r\n    }\r\n    }\r\n\r\n/* Medium devices (tablets, less than 992px) */\r\n\r\n@media screen and (min-width: 991.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 4;\r\n         -moz-column-count: 4;\r\n              column-count: 4;\r\n    }\r\n  }\r\n\r\n/* Large devices (desktops, less than 1200px) */\r\n\r\n@media screen and (min-width: 1199.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 5;\r\n         -moz-column-count: 5;\r\n              column-count: 5;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 1399.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 6;\r\n         -moz-column-count: 6;\r\n              column-count: 6;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 1599.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 7;\r\n         -moz-column-count: 7;\r\n              column-count: 7;\r\n    }\r\n  }\r\n\r\n.text_badge{\r\n    display:inline-block;\r\n    width:auto;\r\n    max-width:91%;\r\n    text-overflow:ellipsis;\r\n    white-space:nowrap;\r\n    overflow:hidden;\r\n  }\r\n\r\n.custom-backdrop {\r\n    background-color: #3b454e;\r\n  }\r\n\r\n.dark-modal {\r\n    background-color: #000000;\r\n  }\r\n\r\n.dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n  }\r\n\r\n.trans-back {\r\n    background: url('oscars_back_transparent.jpg');\r\n    background-repeat: repeat;\r\n    /* background-size: cover; */\r\n    background-position: center;\r\n  }\r\n\r\n.lazy-container {\r\n    display: block;\r\n    position: relative;\r\n    height: 0;\r\n    padding-bottom: 148%;\r\n   }\r\n\r\n.lazy-container img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQXlEO0lBQ3pELHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztBQUVBLGNBQWMseUJBQXlCOztBQUV2QyxzQkFBc0Isc0JBQXNCLENBQUM7O0FBRTdDO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjtJQUNJO21DQUMrQjtJQUMvQiw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7QUFFQSxpRkFBaUY7O0FBQ2pGO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsdUJBQWU7U0FBZixvQkFBZTtjQUFmLGVBQWU7SUFDakI7SUFDQTs7QUFFRixzREFBc0Q7O0FBQ3REO0lBQ0U7TUFDRSx1QkFBZTtTQUFmLG9CQUFlO2NBQWYsZUFBZTtJQUNqQjtJQUNBOztBQUVGLDhDQUE4Qzs7QUFDOUM7SUFDRTtNQUNFLHVCQUFlO1NBQWYsb0JBQWU7Y0FBZixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUEsK0NBQStDOztBQUMvQztJQUNFO01BQ0UsdUJBQWU7U0FBZixvQkFBZTtjQUFmLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsdUJBQWU7U0FBZixvQkFBZTtjQUFmLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsdUJBQWU7U0FBZixvQkFBZTtjQUFmLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSw4Q0FBK0Q7SUFDL0QseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxvQkFBb0I7R0FDckI7O0FBRUE7SUFDQyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcclxufVxyXG5cclxuI2RvY3VtZW50b3Mge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNkb2N1bWVudG9zIHRke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNlbGRhLXRpdHVsb3tiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MUVBfVxyXG4gIFxyXG4gICNkb2N1bWVudG9zIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjZG9jdW1lbnRvcyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkxRUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4uc29tYnJhIHtcclxuICAgIC8qIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4ICNGRjAwMDA7ICovXHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDBweCB3aWRlIG9yIGxlc3MsIHNldCB0aGUgZm9udC1zaXplIG9mIDxkaXY+IHRvIDMwcHggKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDJ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDF2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogMjtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuY2FyZC1jb2x1bW5zIHtcclxuICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAvKiBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTkuOThweCkgeyBcclxuICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzk5Ljk4cHgpIHsgXHJcbiAgICAuY2FyZC1jb2x1bW5zIHtcclxuICAgICAgY29sdW1uLWNvdW50OiA2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTU5OS45OHB4KSB7IFxyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogNztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0X2JhZGdle1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgbWF4LXdpZHRoOjkxJTtcclxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjQ1NGU7XHJcbiAgfVxyXG5cclxuICAuZGFyay1tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmIyYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC50cmFucy1iYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9vc2NhcnNfYmFja190cmFuc3BhcmVudC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxhenktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0OCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sYXp5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/category/category.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/category/category.component.ts ***!
          \************************************************/
        /*! exports provided: CategoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () { return CategoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _award_award_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../award/award.service */ "./src/app/award/award.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _categories_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categories/categories */ "./src/app/categories/categories.ts");
            /* harmony import */ var _map_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-categories */ "./src/app/category/map-categories.ts");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            /* harmony import */ var _map_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map-flags */ "./src/app/map-flags.ts");
            /* harmony import */ var _trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../trailer-modal/trailer-modal.component */ "./src/app/trailer-modal/trailer-modal.component.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var CategoryComponent = /** @class */ (function () {
                function CategoryComponent(route, awardService, modalService, ngxLoader) {
                    this.route = route;
                    this.awardService = awardService;
                    this.modalService = modalService;
                    this.ngxLoader = ngxLoader;
                    this.movie = {};
                    this.flags = _map_flags__WEBPACK_IMPORTED_MODULE_8__["mapFlags"];
                    this.critics = [
                        '../assets/img/critics1.jpg',
                        '../assets/img/critics2.jpg',
                        '../assets/img/critics3.jpg'
                    ];
                }
                CategoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ngxLoader.start();
                    this.category = this.route.snapshot.paramMap.get('categoryname');
                    this.categoryDescription = _categories_categories__WEBPACK_IMPORTED_MODULE_5__["categories"].find(function (a) { return a.title === _this.category; }).description;
                    this.movies$ = this.awardService.getMoviesByCategory(_map_categories__WEBPACK_IMPORTED_MODULE_6__["mapCategories"].get(this.category))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (data) {
                        for (var i = 0; i < data.length; i++)
                            _this.ngxLoader.startLoader(String(i));
                    }));
                    this.ngxLoader.stop();
                };
                CategoryComponent.prototype.open = function (content, movie) {
                    var _this = this;
                    this.ngxLoader.startLoader("loader-movie");
                    this.awardService.getMovie(movie).subscribe(function (data) {
                        _this.movie = data;
                        _this.modalService.open(content, { centered: true }).result.then(function (result) {
                        });
                        _this.ngxLoader.stopLoader("loader-movie");
                    });
                };
                CategoryComponent.prototype.openTrailerModal = function (videoId) {
                    this.ngxLoader.startLoader("loader-movie");
                    var modalRef = this.modalService.open(_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_9__["TrailerModalComponent"], { backdropClass: 'custom-backdrop', centered: true, size: 'xl', windowClass: 'dark-modal' });
                    var url = "https://www.youtube.com/embed/" + videoId + "?controls=0&autoplay=1";
                    modalRef.componentInstance.videoId = url;
                    this.ngxLoader.stopLoader("loader-movie");
                };
                CategoryComponent.prototype.imgLoaded = function (i) {
                    this.ngxLoader.stopLoader(i);
                };
                return CategoryComponent;
            }());
            CategoryComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _award_award_service__WEBPACK_IMPORTED_MODULE_3__["AwardService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
                { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"] }
            ]; };
            CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-category',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")).default]
                })
            ], CategoryComponent);
            /***/ 
        }),
        /***/ "./src/app/category/map-categories.ts": 
        /*!********************************************!*\
          !*** ./src/app/category/map-categories.ts ***!
          \********************************************/
        /*! exports provided: mapCategories */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCategories", function () { return mapCategories; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var mapCategories = new Map([
                ["Picture", "film"],
                ["Actor", "actor"],
                ["Supporting Actor", "supportingactor"],
                ["Actress", "actress"],
                ["Supporting Actress", "supportingactress"],
                ["Director", "director"],
                ["Screenplay", "screenplay"],
                ["Documentary", "documentary"],
                ["Animated Picture", "animation"],
                ["Foreign Language Picture", "foreign"],
                ["Cinematography", "cinematography"],
                ["Costume Design", "costumedesign"],
                ["Film Editing", "editing"],
                ["Makeup and Hairstyling", "makeup"],
                ["Original Score", "composer"],
                ["Production Design", "productiondesign"],
                ["Visual Effects", "visualeffects"],
                ["Sound", "sound"],
                ["Song", "song"],
                ["Audience", "audience"]
            ]);
            /***/ 
        }),
        /***/ "./src/app/loaded.directive.ts": 
        /*!*************************************!*\
          !*** ./src/app/loaded.directive.ts ***!
          \*************************************/
        /*! exports provided: LoadedDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedDirective", function () { return LoadedDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoadedDirective = /** @class */ (function () {
                function LoadedDirective(elRef) {
                    this.elRef = elRef;
                    this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    if (this.elRef.nativeElement.complete) {
                        this.loaded.emit();
                    }
                }
                LoadedDirective.prototype.onLoad = function () {
                    this.loaded.emit();
                };
                return LoadedDirective;
            }());
            LoadedDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], LoadedDirective.prototype, "loaded", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('load')
            ], LoadedDirective.prototype, "onLoad", null);
            LoadedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'img[loaded]'
                })
            ], LoadedDirective);
            /***/ 
        }),
        /***/ "./src/app/main/main.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/main/main.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ngb-carousel img {\r\n    width: 100vw;\r\n    height:88vh;\r\n    max-width: 100%;\r\n    display: block;\r\n    margin: 0;\r\n}\r\n\r\n.carousel-caption {\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    bottom: initial;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.sombra1 {\r\n    text-shadow: 0 0 5px #9009c5;\r\n  }\r\n\r\n.sombra2 {\r\n    text-shadow: 0 0 5px #FF0000;\r\n  }\r\n\r\n.sombra3 {\r\n    text-shadow: 0 0 5px #ecca09e5;\r\n  }\r\n\r\n.featurette-divider {\r\n    margin: 3rem 0; /* Space out the Bootstrap <hr> more */\r\n  }\r\n\r\n/* Thin out the marketing headings */\r\n\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n  }\r\n\r\n.bd-placeholder-img {\r\n    font-size: 1.125rem;\r\n    text-anchor: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n    /* color: #D3A500; */\r\n  }\r\n\r\n.marketing h2 {\r\n    font-weight: 400;\r\n  }\r\n\r\n.marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n    .bd-placeholder-img-lg {\r\n      font-size: 3.5rem;\r\n    }\r\n\r\n    .align-middle {\r\n      padding-top: 5rem;\r\n    }\r\n\r\n    .featurette-heading {\r\n      font-size: 50px;\r\n    }\r\n\r\n  }\r\n\r\n@media (min-width: 900px) {\r\n\r\n    .align-middle {\r\n      padding-top: 1rem;\r\n    }\r\n\r\n  }\r\n\r\n@media (min-width: 990px) {\r\n\r\n    .align-middle {\r\n      padding-top: 5rem;\r\n    }\r\n\r\n  }\r\n\r\n@media (min-width: 1300px) {\r\n\r\n    .align-middle {\r\n      padding-top: 2rem;\r\n    }\r\n\r\n  }\r\n\r\n@media (min-width: 1430px) {\r\n\r\n    .align-middle {\r\n      padding-top: 0rem;\r\n    }\r\n\r\n  }\r\n\r\n@media (min-width: 1680px) {\r\n\r\n    .featurette-heading {\r\n      padding-top: 2rem;\r\n    }\r\n\r\n  }\r\n\r\n@media (max-width: 420px) {\r\n\r\n    .carousel-caption {\r\n\r\n      font-size: 1rem;\r\n  }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksUUFBUTtJQUNSLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtFQUM5Qjs7QUFFRjtJQUNJLDRCQUE0QjtFQUM5Qjs7QUFFRjtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLGNBQWMsRUFBRSxzQ0FBc0M7RUFDeEQ7O0FBRUEsb0NBQW9DOztBQUNwQztJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0FBR0E7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0VBRUY7O0FBRUE7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUY7O0FBRUE7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUY7O0FBRUE7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUY7O0FBRUE7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUY7O0FBRUE7O0lBRUU7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUY7O0FBRUE7O0lBRUU7O01BRUUsZUFBZTtFQUNuQjs7RUFFQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmdiLWNhcm91c2VsIGltZyB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6ODh2aDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvdHRvbTogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uc29tYnJhMSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjOTAwOWM1O1xyXG4gIH1cclxuXHJcbi5zb21icmEyIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNGRjAwMDA7XHJcbiAgfVxyXG5cclxuLnNvbWJyYTMge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2VjY2EwOWU1O1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmV0dGUtZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDNyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cclxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJkLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWFya2V0aW5nIC5jb2wtbGctNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBjb2xvcjogI0QzQTUwMDsgKi9cclxuICB9XHJcbiAgLm1hcmtldGluZyBoMiB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAubWFya2V0aW5nIC5jb2wtbGctNCBwIHtcclxuICAgIG1hcmdpbi1yaWdodDogLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xyXG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWxpZ24tbWlkZGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuXHJcbiAgICAuYWxpZ24tbWlkZGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XHJcblxyXG4gICAgLmFsaWduLW1pZGRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuXHJcbiAgICAuYWxpZ24tbWlkZGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0MzBweCkge1xyXG5cclxuICAgIC5hbGlnbi1taWRkbGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTY4MHB4KSB7XHJcblxyXG4gICAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG5cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/main/main.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/main/main.component.ts ***!
          \****************************************/
        /*! exports provided: MainComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function () { return MainComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            var MainComponent = /** @class */ (function () {
                function MainComponent(config, ngxLoader) {
                    this.ngxLoader = ngxLoader;
                    this.images = [
                        '../assets/img/ceremony1.jpg',
                        '../assets/img/ceremony2.jpg',
                        '../assets/img/ceremony3.jpg',
                        '../assets/img/red-carpet.png',
                        '../assets/img/ceremony1-750.jpg',
                        '../assets/img/ceremony2-750.jpg',
                        '../assets/img/ceremony3-750.jpg'
                    ];
                    // images = [
                    //   'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576001022/filmawardsseason/ceremony1_hitlpn.jpg',
                    //   'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576001023/filmawardsseason/ceremony2_pxmyb2.jpg',
                    //   'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576001024/filmawardsseason/ceremony3_w9wtai.jpg',
                    //   'https://res.cloudinary.com/dw5ahwj7g/image/upload/v1576174106/filmawardsseason/red-carpet_dxnybz.png'
                    // ];
                    this.hidImage1 = true;
                    this.hidImage2 = true;
                    this.hidImage3 = true;
                    config.showNavigationIndicators = false;
                    config.interval = 5000;
                }
                MainComponent.prototype.ngOnInit = function () {
                    this.ngxLoader.start();
                };
                MainComponent.prototype.imgLoaded1 = function () {
                    this.hidImage1 = false;
                    if (!this.hidImage2 && !this.hidImage3)
                        this.stopLoader();
                };
                MainComponent.prototype.imgLoaded2 = function () {
                    this.hidImage2 = false;
                    if (!this.hidImage1 && !this.hidImage3)
                        this.stopLoader();
                };
                MainComponent.prototype.imgLoaded3 = function () {
                    this.hidImage3 = false;
                    if (!this.hidImage1 && !this.hidImage2)
                        this.stopLoader();
                };
                MainComponent.prototype.stopLoader = function () {
                    this.ngxLoader.stop();
                };
                return MainComponent;
            }());
            MainComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] },
                { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
            ]; };
            MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
                    providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
                })
            ], MainComponent);
            /***/ 
        }),
        /***/ "./src/app/map-flags.ts": 
        /*!******************************!*\
          !*** ./src/app/map-flags.ts ***!
          \******************************/
        /*! exports provided: mapFlags */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFlags", function () { return mapFlags; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var mapFlags = new Map([
                ["China", "flag-icon-cn"],
                ["United States", "flag-icon-us"],
                ["Colombia", "flag-icon-co"],
                ["South Korea", "flag-icon-kr"],
                ["France", "flag-icon-fr"],
                ["Senegal", "flag-icon-sn"],
                ["Brazil", "flag-icon-br"],
                ["Spain", "flag-icon-es"],
                ["Germany", "flag-icon-de"],
                ["Peru", "flag-icon-pe"],
                ["Great Britain", "flag-icon-gb"],
                ["Russia", "flag-icon-ru"],
                ["Estonia", "flag-icon-ee"],
                ["Czech Republic", "flag-icon-cz"],
            ]);
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n#notfound {\r\nposition: relative;\r\nheight: 88vh;\r\n}\r\n  \r\n#notfound .notfound {\r\nposition: absolute;\r\nleft: 50%;\r\ntop: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n}\r\n  \r\n.notfound {\r\nmax-width: 410px;\r\nwidth: 100%;\r\ntext-align: center;\r\n}\r\n  \r\n.notfound .notfound-404 {\r\nheight: 280px;\r\nposition: relative;\r\nz-index: -1;\r\n}\r\n  \r\n.notfound .notfound-404 h1 {\r\nfont-family: 'Montserrat', sans-serif;\r\nfont-size: 230px;\r\nmargin: 0px;\r\nfont-weight: 900;\r\nposition: absolute;\r\nleft: 50%;\r\n-webkit-transform: translateX(-50%);\r\n        transform: translateX(-50%);\r\nbackground: url('oscars_back.jpg') no-repeat;\r\n-webkit-background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\nbackground-size: cover;\r\nbackground-position: center;\r\n}\r\n  \r\n.notfound h2 {\r\nfont-family: 'Montserrat', sans-serif;\r\ncolor: #000;\r\nfont-size: 24px;\r\nfont-weight: 700;\r\ntext-transform: uppercase;\r\nmargin-top: 0;\r\n}\r\n  \r\n.notfound p {\r\nfont-family: 'Montserrat', sans-serif;\r\ncolor: #000;\r\nfont-size: 14px;\r\nfont-weight: 400;\r\nmargin-bottom: 20px;\r\nmargin-top: 0px;\r\n}\r\n  \r\n.notfound a {\r\nfont-family: 'Montserrat', sans-serif;\r\nfont-size: 14px;\r\ntext-decoration: none;\r\ntext-transform: uppercase;\r\nbackground: #F39C12;\r\ndisplay: inline-block;\r\npadding: 15px 30px;\r\n/* border-radius: 40px; */\r\ncolor: #fff;\r\nfont-weight: 700;\r\nbox-shadow: 0px 4px 15px -5px #facd03;\r\n}\r\n  \r\n@media only screen and (max-width: 767px) {\r\n    .notfound .notfound-404 {\r\n    height: 142px;\r\n    }\r\n    .notfound .notfound-404 h1 {\r\n    font-size: 112px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVZLHNCQUFzQjtFQUNoQzs7QUFFRjtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNULFFBQVE7QUFDUix3Q0FBd0M7UUFFaEMsZ0NBQWdDO0FBQ3hDOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQyxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsU0FBUztBQUNULG1DQUFtQztRQUUzQiwyQkFBMkI7QUFDbkMsNENBQTZEO0FBQzdELDZCQUE2QjtBQUM3QixvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQjs7QUFHQTtBQUNBLHFDQUFxQztBQUNyQyxXQUFXO0FBQ1gsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsYUFBYTtBQUNiOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDLFdBQVc7QUFDWCxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckMsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxnQkFBZ0I7QUFFUixxQ0FBcUM7QUFDN0M7O0FBR0E7SUFDSTtJQUNBLGFBQWE7SUFDYjtJQUNBO0lBQ0EsZ0JBQWdCO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4jbm90Zm91bmQge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmhlaWdodDogODh2aDtcclxufVxyXG5cclxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogNTAlO1xyXG50b3A6IDUwJTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLm5vdGZvdW5kIHtcclxubWF4LXdpZHRoOiA0MTBweDtcclxud2lkdGg6IDEwMCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xyXG5oZWlnaHQ6IDI4MHB4O1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbmZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMjMwcHg7XHJcbm1hcmdpbjogMHB4O1xyXG5mb250LXdlaWdodDogOTAwO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDUwJTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL29zY2Fyc19iYWNrLmpwZycpIG5vLXJlcGVhdDtcclxuLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbi13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm5vdGZvdW5kIGgyIHtcclxuZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuY29sb3I6ICMwMDA7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxubWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm5vdGZvdW5kIHAge1xyXG5mb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG5jb2xvcjogIzAwMDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5tYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCBhIHtcclxuZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxNHB4O1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmJhY2tncm91bmQ6ICNGMzlDMTI7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxucGFkZGluZzogMTVweCAzMHB4O1xyXG4vKiBib3JkZXItcmFkaXVzOiA0MHB4OyAqL1xyXG5jb2xvcjogI2ZmZjtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDE1cHggLTVweCAjZmFjZDAzO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCAtNXB4ICNmYWNkMDM7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICBoZWlnaHQ6IDE0MnB4O1xyXG4gICAgfVxyXG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMTJweDtcclxuICAgIH1cclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/results/results.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/results/results.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    padding-top: 10px; \r\n    padding-bottom: 5px; \r\n    margin-bottom: 0px; \r\n}\r\na:hover {\r\n    color: rgb(0, 0, 255);\r\n}\r\n#documentos {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n#documentos td{\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n.celda-titulo{background-color: #0091EA}\r\n#documentos tr:hover {background-color: #ddd;}\r\n#documentos th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #0091EA;\r\n    color: white;\r\n  }\r\n.square-rounded-corner {\r\n    border: 1px solid #e9e9e9;\r\n    padding: 20px 10px 0px 10px;\r\n    border-radius: 8px;\r\n  }\r\n.vcenter {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    float: none;\r\n  }\r\n.sombra {\r\n  /* color: black;\r\n  text-shadow: 0 0 3px #FF0000; */\r\n  text-shadow: 0 0 5px #000000;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\n@media screen and (min-width: 601px) {\r\n    h1 {\r\n      font-size: 3vw;\r\n    }\r\n  }\r\n/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */\r\n@media screen and (max-width: 600px) {\r\n    h1 {\r\n      font-size: 6vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 1201px) {\r\n    h1 {\r\n      font-size: 2vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 601px) {\r\n    p {\r\n      font-size: 2vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 601px) {\r\n    p {\r\n      font-size: 3vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 1201px) {\r\n    p {\r\n      font-size: 1vw;\r\n    }\r\n  }\r\n@media screen and (min-width: 575.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 2;\r\n         -moz-column-count: 2;\r\n              column-count: 2;\r\n    }\r\n    }\r\n/* Small devices (landscape phones, less than 768px) */\r\n@media screen and (min-width: 767.98px) {\r\n    .card-columns {\r\n      -webkit-column-count: 3;\r\n         -moz-column-count: 3;\r\n              column-count: 3;\r\n    }\r\n    }\r\n/* Medium devices (tablets, less than 992px) */\r\n@media screen and (min-width: 991.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 4;\r\n         -moz-column-count: 4;\r\n              column-count: 4;\r\n    }\r\n  }\r\n/* Large devices (desktops, less than 1200px) */\r\n@media screen and (min-width: 1199.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 5;\r\n         -moz-column-count: 5;\r\n              column-count: 5;\r\n    }\r\n  }\r\n@media screen and (min-width: 1399.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 6;\r\n         -moz-column-count: 6;\r\n              column-count: 6;\r\n    }\r\n  }\r\n@media screen and (min-width: 1599.98px) { \r\n    .card-columns {\r\n      -webkit-column-count: 7;\r\n         -moz-column-count: 7;\r\n              column-count: 7;\r\n    }\r\n  }\r\n.text_badge{\r\n    display:inline-block;\r\n    width:auto;\r\n    max-width:91%;\r\n    text-overflow:ellipsis;\r\n    white-space:nowrap;\r\n    overflow:hidden;\r\n  }\r\n.custom-backdrop {\r\n    background-color: #3b454e;\r\n  }\r\n.dark-modal {\r\n    background-color: #000000;\r\n  }\r\n.dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n  }\r\n.trans-back {\r\n    background: url('oscars_back_transparent.jpg');\r\n    background-repeat: repeat;\r\n    /* background-size: cover; */\r\n    background-position: center;\r\n  }\r\n.lazy-container {\r\n    display: block;\r\n    position: relative;\r\n    height: 0;\r\n    padding-bottom: 148%;\r\n   }\r\n.lazy-container img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSx5REFBeUQ7SUFDekQseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtBQUVBLGNBQWMseUJBQXlCO0FBRXZDLHNCQUFzQixzQkFBc0IsQ0FBQztBQUU3QztJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtBQUVGO0VBQ0U7aUNBQytCO0VBQy9CLDRCQUE0QjtBQUM5QjtBQUVFO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUVBLGlGQUFpRjtBQUNqRjtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUVBO0lBQ0U7TUFDRSx1QkFBZTtTQUFmLG9CQUFlO2NBQWYsZUFBZTtJQUNqQjtJQUNBO0FBRUYsc0RBQXNEO0FBQ3REO0lBQ0U7TUFDRSx1QkFBZTtTQUFmLG9CQUFlO2NBQWYsZUFBZTtJQUNqQjtJQUNBO0FBRUYsOENBQThDO0FBQzlDO0lBQ0U7TUFDRSx1QkFBZTtTQUFmLG9CQUFlO2NBQWYsZUFBZTtJQUNqQjtFQUNGO0FBRUEsK0NBQStDO0FBQy9DO0lBQ0U7TUFDRSx1QkFBZTtTQUFmLG9CQUFlO2NBQWYsZUFBZTtJQUNqQjtFQUNGO0FBRUE7SUFDRTtNQUNFLHVCQUFlO1NBQWYsb0JBQWU7Y0FBZixlQUFlO0lBQ2pCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsdUJBQWU7U0FBZixvQkFBZTtjQUFmLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVBO0lBQ0UsOENBQStEO0lBQy9ELHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0VBQzdCO0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxvQkFBb0I7R0FDckI7QUFFQTtJQUNDLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG59XHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAyNTUpO1xyXG59XHJcblxyXG4jZG9jdW1lbnRvcyB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2RvY3VtZW50b3MgdGR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAuY2VsZGEtdGl0dWxve2JhY2tncm91bmQtY29sb3I6ICMwMDkxRUF9XHJcbiAgXHJcbiAgI2RvY3VtZW50b3MgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICNkb2N1bWVudG9zIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTFFQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNxdWFyZS1yb3VuZGVkLWNvcm5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAudmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuLnNvbWJyYSB7XHJcbiAgLyogY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4ICNGRjAwMDA7ICovXHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzAwMDAwMDtcclxufVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDBweCB3aWRlIG9yIGxlc3MsIHNldCB0aGUgZm9udC1zaXplIG9mIDxkaXY+IHRvIDMwcHggKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDJ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDF2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogMjtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuY2FyZC1jb2x1bW5zIHtcclxuICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAvKiBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTkuOThweCkgeyBcclxuICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzk5Ljk4cHgpIHsgXHJcbiAgICAuY2FyZC1jb2x1bW5zIHtcclxuICAgICAgY29sdW1uLWNvdW50OiA2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTU5OS45OHB4KSB7IFxyXG4gICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogNztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0X2JhZGdle1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgbWF4LXdpZHRoOjkxJTtcclxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjQ1NGU7XHJcbiAgfVxyXG5cclxuICAuZGFyay1tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmIyYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC50cmFucy1iYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9vc2NhcnNfYmFja190cmFuc3BhcmVudC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxhenktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0OCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sYXp5LWNvbnRhaW5lciBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/results/results.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/results/results.component.ts ***!
          \**********************************************/
        /*! exports provided: ResultsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () { return ResultsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _award_award_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../award/award.service */ "./src/app/award/award.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _map_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map-flags */ "./src/app/map-flags.ts");
            /* harmony import */ var _trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../trailer-modal/trailer-modal.component */ "./src/app/trailer-modal/trailer-modal.component.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ResultsComponent = /** @class */ (function () {
                function ResultsComponent(route, router, awardService, modalService, ngxLoader) {
                    this.route = route;
                    this.router = router;
                    this.awardService = awardService;
                    this.modalService = modalService;
                    this.ngxLoader = ngxLoader;
                    this.noImage = '';
                    this.movie = {};
                    this.flags = _map_flags__WEBPACK_IMPORTED_MODULE_6__["mapFlags"];
                    this.awardsForResult = 0;
                    this.ab = false;
                    this.nominationsForResult = 0;
                    this.nb = false;
                    this.critics = [
                        '../assets/img/critics1.jpg',
                        '../assets/img/critics2.jpg',
                        '../assets/img/critics3.jpg'
                    ];
                    this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                }
                ResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ngxLoader.start();
                    this.term = this.route.snapshot.paramMap.get('search');
                    this.movies$ = this.awardService.search(this.term)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (data) {
                        _this.thereIsData = data.length;
                        for (var i = 0; i < data.length; i++) {
                            _this.ngxLoader.startLoader(String(i));
                        }
                        for (var i = 0; i < data.length; i++) {
                            for (var j = 0; j < data[i].fwinner.length; j++) {
                                if (data[i].fwinner[j].trim().toLowerCase() === _this.term.trim().toLowerCase()) {
                                    _this.ab = true;
                                    _this.awardsForResult++;
                                }
                            }
                            for (var k = 0; k < data[i].fnominees.length; k++) {
                                if (data[i].fnominees[k].trim().toLowerCase() === _this.term.trim().toLowerCase()) {
                                    _this.nb = true;
                                    _this.nominationsForResult++;
                                }
                            }
                            for (var m = 0; m < data[i].pwinner.length; m++) {
                                if (data[i].pwinner[m].trim().toLowerCase() === _this.term.trim().toLowerCase()) {
                                    _this.ab = true;
                                    _this.awardsForResult++;
                                }
                            }
                            for (var n = 0; n < data[i].pnominees.length; n++) {
                                if (data[i].pnominees[n].trim().toLowerCase() === _this.term.trim().toLowerCase()) {
                                    _this.nb = true;
                                    _this.nominationsForResult++;
                                }
                            }
                        }
                    }));
                    this.ngxLoader.stop();
                };
                ResultsComponent.prototype.open = function (content, movie) {
                    var _this = this;
                    this.ngxLoader.startLoader("loader-movie");
                    this.awardService.getMovie(movie).subscribe(function (data) {
                        _this.movie = data;
                        _this.modalService.open(content, { centered: true }).result.then(function (result) {
                        });
                        _this.ngxLoader.stopLoader("loader-movie");
                    });
                };
                ResultsComponent.prototype.openTrailerModal = function (videoId) {
                    this.ngxLoader.startLoader("loader-movie");
                    var modalRef = this.modalService.open(_trailer_modal_trailer_modal_component__WEBPACK_IMPORTED_MODULE_7__["TrailerModalComponent"], { backdropClass: 'custom-backdrop', centered: true, size: 'xl', windowClass: 'dark-modal' });
                    var url = "https://www.youtube.com/embed/" + videoId + "?controls=0&autoplay=1";
                    modalRef.componentInstance.videoId = url;
                    this.ngxLoader.stopLoader("loader-movie");
                };
                ResultsComponent.prototype.imgLoaded = function (i) {
                    this.ngxLoader.stopLoader(i);
                };
                return ResultsComponent;
            }());
            ResultsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _award_award_service__WEBPACK_IMPORTED_MODULE_4__["AwardService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
                { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] }
            ]; };
            ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-results',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")).default]
                })
            ], ResultsComponent);
            /***/ 
        }),
        /***/ "./src/app/statistics/presentation-statistic/presentation-statistic.component.css": 
        /*!****************************************************************************************!*\
          !*** ./src/app/statistics/presentation-statistic/presentation-statistic.component.css ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\r\n    padding-top: 10px; \r\n    padding-bottom: 5px; \r\n}\r\n\r\n.sombra {\r\n    /* color: black;\r\n    text-shadow: 0 0 3px #FF0000; */\r\n    text-shadow: 0 0 3px #000000;\r\n  }\r\n\r\n.graphic-container {\r\n    width: 100%; \r\n    min-height: 500px;\r\n  }\r\n\r\n/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */\r\n\r\n@media screen and (max-width: 600px) {\r\n    h2 {\r\n      font-size: 6vw;\r\n    }\r\n\r\n    .graphic-container {\r\n      min-height: 250px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9wcmVzZW50YXRpb24tc3RhdGlzdGljL3ByZXNlbnRhdGlvbi1zdGF0aXN0aWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTttQ0FDK0I7SUFDL0IsNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7QUFFQyxpRkFBaUY7O0FBQ2pGO0lBQ0M7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWNzL3ByZXNlbnRhdGlvbi1zdGF0aXN0aWMvcHJlc2VudGF0aW9uLXN0YXRpc3RpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4OyBcclxufVxyXG5cclxuLnNvbWJyYSB7XHJcbiAgICAvKiBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjRkYwMDAwOyAqL1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggIzAwMDAwMDtcclxuICB9ICBcclxuXHJcbiAgLmdyYXBoaWMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgIC8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDBweCB3aWRlIG9yIGxlc3MsIHNldCB0aGUgZm9udC1zaXplIG9mIDxkaXY+IHRvIDMwcHggKi9cclxuICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyYXBoaWMtY29udGFpbmVyIHtcclxuICAgICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/statistics/presentation-statistic/presentation-statistic.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/statistics/presentation-statistic/presentation-statistic.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: PresentationStatisticComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationStatisticComponent", function () { return PresentationStatisticComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _award_award_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../award/award.service */ "./src/app/award/award.service.ts");
            /* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
            var PresentationStatisticComponent = /** @class */ (function () {
                function PresentationStatisticComponent(route, awardService, ngxLoader, router) {
                    this.route = route;
                    this.awardService = awardService;
                    this.ngxLoader = ngxLoader;
                    this.router = router;
                    // view: any[] = [700, 400];
                    // options
                    this.gradient = false;
                    this.showLegend = true;
                    this.showLabels = true;
                    this.isDoughnut = false;
                    this.legendPosition = 'above';
                    this.colorScheme = {
                        domain: ['#92A9C0', '#CBB091', '#D89F59', '#F4E5B8', '#B7DFD1', '#BFE53B', '#8396A1', '#33C681', '#FFD453', '#A27EA8']
                    };
                }
                PresentationStatisticComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ngxLoader.start();
                    this.statisticType = this.route.snapshot.paramMap.get('type');
                    switch (this.statisticType) {
                        case 'awards':
                            this.title = 'Most Awarded Films - Season 2019-2020';
                            break;
                        case 'nominations':
                            this.title = 'Most Nominated Films - Season 2019-2020';
                            break;
                        default:
                            this.title = this.statisticType + " - This Year's Statistics";
                            break;
                    }
                    this.awardService.getStatistics(this.statisticType).subscribe(function (data) {
                        switch (_this.statisticType) {
                            case 'awards':
                                _this.tabularData = data;
                                _this.graphicData = data.map(function (item) {
                                    return {
                                        name: item._id,
                                        value: item.awards
                                    };
                                }).slice(0, 10);
                                break;
                            case 'nominations':
                                _this.tabularData = data;
                                _this.graphicData = data.map(function (item) {
                                    return {
                                        name: item._id,
                                        value: item.nominations
                                    };
                                }).slice(0, 10);
                                break;
                            default:
                                _this.tabularData = data;
                                _this.graphicData = data.filter(function (item) {
                                    if (item.awards)
                                        return {
                                            name: item._id,
                                            value: item.awards
                                        };
                                }).map(function (item) {
                                    return {
                                        name: item._id,
                                        value: item.awards
                                    };
                                }).slice(0, 10);
                                break;
                        }
                        _this.ngxLoader.stop();
                    });
                };
                PresentationStatisticComponent.prototype.onSelect = function (data) {
                    this.router.navigate(['/results', data.name]);
                };
                return PresentationStatisticComponent;
            }());
            PresentationStatisticComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _award_award_service__WEBPACK_IMPORTED_MODULE_3__["AwardService"] },
                { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            PresentationStatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-presentation-statistic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./presentation-statistic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/presentation-statistic/presentation-statistic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./presentation-statistic.component.css */ "./src/app/statistics/presentation-statistic/presentation-statistic.component.css")).default]
                })
            ], PresentationStatisticComponent);
            /***/ 
        }),
        /***/ "./src/app/statistics/selection-statistic/selection-statistic.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/statistics/selection-statistic/selection-statistic.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n    /* color: #D3A500; */\r\n  }\r\n  .marketing h2 {\r\n    font-weight: 400;\r\n  }\r\n  .marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n  }\r\n  .trans-back {\r\n    background: url('oscars_back_transparent.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 88vh;\r\n  }\r\n  @media (min-width: 992px) {\r\n\r\n    section {\r\n      padding-top: 250px;\r\n    }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9zZWxlY3Rpb24tc3RhdGlzdGljL3NlbGVjdGlvbi1zdGF0aXN0aWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7RUFFQTtJQUNFLHdEQUE0RTtJQUM1RSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDtFQUVBOztJQUVFO01BQ0Usa0JBQWtCO0lBQ3BCOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljcy9zZWxlY3Rpb24tc3RhdGlzdGljL3NlbGVjdGlvbi1zdGF0aXN0aWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGNvbG9yOiAjRDNBNTAwOyAqL1xyXG4gIH1cclxuICAubWFya2V0aW5nIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5tYXJrZXRpbmcgLmNvbC1sZy00IHAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRyYW5zLWJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL29zY2Fyc19iYWNrX3RyYW5zcGFyZW50LmpwZycpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDg4dmg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgcGFkZGluZy10b3A6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/statistics/selection-statistic/selection-statistic.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/statistics/selection-statistic/selection-statistic.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: SelectionStatisticComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionStatisticComponent", function () { return SelectionStatisticComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _awards_awards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../awards/awards */ "./src/app/awards/awards.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SelectionStatisticComponent = /** @class */ (function () {
                function SelectionStatisticComponent(router) {
                    this.router = router;
                    this.selectedAward = "";
                }
                SelectionStatisticComponent.prototype.ngOnInit = function () {
                    this.awards = _awards_awards__WEBPACK_IMPORTED_MODULE_2__["awards"];
                };
                SelectionStatisticComponent.prototype.goToStatistics = function (par) {
                    if (par) {
                        this.router.navigate(['statistics', this.selectedAward]);
                    }
                };
                SelectionStatisticComponent.prototype.changeSuit = function (event) {
                    this.selectedAward = event.target.value;
                    this.buttonDisabled = true;
                };
                return SelectionStatisticComponent;
            }());
            SelectionStatisticComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SelectionStatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-selection-statistic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selection-statistic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/selection-statistic/selection-statistic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selection-statistic.component.css */ "./src/app/statistics/selection-statistic/selection-statistic.component.css")).default]
                })
            ], SelectionStatisticComponent);
            /***/ 
        }),
        /***/ "./src/app/trailer-modal/trailer-modal.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/trailer-modal/trailer-modal.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dark-modal {\r\n    background-color: #000000;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.modal-header{\r\n    background-color: #000000;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.iframe-container {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 56.25%;\r\n    height: 0;\r\n}\r\n\r\n.iframe-container iframe {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaWxlci1tb2RhbC90cmFpbGVyLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90cmFpbGVyLW1vZGFsL3RyYWlsZXItbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrLW1vZGFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pZnJhbWUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/trailer-modal/trailer-modal.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/trailer-modal/trailer-modal.component.ts ***!
          \**********************************************************/
        /*! exports provided: TrailerModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerModalComponent", function () { return TrailerModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var TrailerModalComponent = /** @class */ (function () {
                function TrailerModalComponent(activeModal, sanitizer) {
                    this.activeModal = activeModal;
                    this.sanitizer = sanitizer;
                }
                TrailerModalComponent.prototype.ngOnInit = function () {
                };
                TrailerModalComponent.prototype.sanitizeUrl = function () {
                    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoId);
                };
                return TrailerModalComponent;
            }());
            TrailerModalComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrailerModalComponent.prototype, "videoId", void 0);
            TrailerModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trailer-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trailer-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trailer-modal/trailer-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trailer-modal.component.css */ "./src/app/trailer-modal/trailer-modal.component.css")).default]
                })
            ], TrailerModalComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: 'https://inspiring-heyrovsky-87af2a.netlify.com/.netlify/functions/'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\proyectos\filmawardsseason\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map