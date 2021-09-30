(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/dlscoccia/Repositories/angular_crud_front/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0zBU":
    /*!***************************************************!*\
      !*** ./src/app/Components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function zBU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Services/movie.service */
      "qKKv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_34_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var movie_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.update(movie_r1.mov_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_34_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var movie_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4["delete"](movie_r1.mov_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var movie_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.mov_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.mov_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", movie_r1.mov_year, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.mov_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.mov_lang);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fixDate(movie_r1.mov_dt_rel));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.mov_rel_country);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(MovieService, router) {
          _classCallCheck(this, HomeComponent);

          this.MovieService = MovieService;
          this.router = router;
          this.title = '';
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listMovie();
          }
        }, {
          key: "searchMovies",
          value: function searchMovies() {
            var _this = this;

            console.log(this.title);
            this.MovieService.searchMovies(this.title).subscribe(function (res) {
              _this.ListMovie = res;
              console.log(res);
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "fixDate",
          value: function fixDate(date) {
            var newDate = date.split('-');
            return [newDate[2].split('T')[0], newDate[1], newDate[0]].join('-');
          }
        }, {
          key: "listMovie",
          value: function listMovie() {
            var _this2 = this;

            this.MovieService.getMovies().subscribe(function (res) {
              _this2.ListMovie = res;
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this3 = this;

            this.MovieService.deleteMovie(id).subscribe(function (res) {
              _this3.listMovie();
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "update",
          value: function update(id) {
            this.router.navigate(['/update/' + id]);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 38,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "text-center", "my-5", "neonText"], [1, "d-flex", "justify-content-center", "mb-5", "search", "row"], [1, "col-10", "col-md-4", "mb-3"], ["type", "text", "placeholder", "Buscar...", 1, "form-control", "me-2", "s-input", 3, "ngModel", "ngModelChange"], [1, "col-4", "col-md-1", "ms-md-3", "d-flex", "gap-2", "justify-content-center"], [1, "btn", "btn-info", "text-center", 3, "click"], [1, "fas", "fa-search"], [1, "btn", "btn-outline-info", "text-center", 3, "click"], [1, "fas", "fa-quidditch"], [1, "table-responsive-md", "px-5"], [1, "table", "table-hover", "table-bordered", "rounded", "align-middle", "text-center"], [1, "options"], ["class", "tr-data", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "my-5"], ["routerLink", "/add", "type", "button", 1, "btn", "btn-info", "btn-add"], [1, "tr-data"], [1, ""], [1, "text-start"], [1, "d-flex", "justify-content-center", "gap-3"], ["type", "button", 1, "btn", "btn-outline-info", "btn-fas", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-fas", 3, "click"], [1, "fas", "fa-trash-alt"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lista de Peliculas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() {
              return ctx.searchMovies();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() {
              return ctx.listMovie();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "TITULO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "A\xD1O");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "DURACI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "IDIOMA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "FECHA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PA\xCDS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "OPCIONES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_tr_34_Template, 21, 7, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Agregar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListMovie);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  -webkit-animation: pulsate 0.11s ease-in-out infinite alternate;\n          animation: pulsate 0.11s ease-in-out infinite alternate;    \n  font-family: 'Fredoka One', cursive;\n  color: #00296B;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.container[_ngcontent-%COMP%] {\nmargin-top: 20vh;\n}\n\n@-webkit-keyframes pulsate {\n  \n100% {\n\n    text-shadow:\n    0 0 0.5px #fff,\n    0 0 1.5px #fff,\n    0 0 2.5px #fff,\n    0 0 5px #00296B,\n    0 0 10px #00296B,\n    0 0 12px #00296B,\n    0 0 13px #00296B,\n    0 0 15px #00296B;\n\n}\n\n0% {\n\n  text-shadow:\n  0 0 0.5px #fff,\n  0 0 1.5px #fff,\n  0 0 2.5px #fff,\n  0 0 4.5px #00296B,\n  0 0 9px #00296B,\n  0 0 12px #00296B,\n  0 0 14px #00296B,\n  0 0 18px #00296B;\n\n}\n}\n\n@keyframes pulsate {\n  \n100% {\n\n    text-shadow:\n    0 0 0.5px #fff,\n    0 0 1.5px #fff,\n    0 0 2.5px #fff,\n    0 0 5px #00296B,\n    0 0 10px #00296B,\n    0 0 12px #00296B,\n    0 0 13px #00296B,\n    0 0 15px #00296B;\n\n}\n\n0% {\n\n  text-shadow:\n  0 0 0.5px #fff,\n  0 0 1.5px #fff,\n  0 0 2.5px #fff,\n  0 0 4.5px #00296B,\n  0 0 9px #00296B,\n  0 0 12px #00296B,\n  0 0 14px #00296B,\n  0 0 18px #00296B;\n\n}\n}\n\nth[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  color: #00296B;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #00296B20;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-color: #001f522e;\n}\n\n.btn.btn-add[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #f7fff7;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #00296B80;\n  opacity: 1;\n  -moz-transition: all 0.7s ease;\n  transition: all 0.7s ease;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #00296B80;\n  opacity: 1;\n  -ms-transition: all 0.7s ease;\n  transition: all 0.7s ease;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #00296B80;\n  opacity: 1;\n  transition: all 0.7s ease;\n}\n\ninput[_ngcontent-%COMP%]:focus::-moz-placeholder {\n  opacity: 0;\n  -moz-transition: all 0.7s ease;\n  transition: all 0.7s ease;\n}\n\ninput[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  opacity: 0;\n  -ms-transition: all 0.7s ease;\n  transition: all 0.7s ease;\n}\n\ninput[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 0;\n  transition: all 0.7s ease;\n}\n\n.btn-fas[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n@media screen and (max-width:768px) {\n  .btn-fas[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    text-align: center;\n  }\n}\n\n@media screen and (max-width:480px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    text-align: center;\n  }\n}\n\n.tr-data[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #ebebeb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwrREFBdUQ7VUFBdkQsdURBQXVEO0VBQ3ZELG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBOztBQUVBOztJQUVJOzs7Ozs7OztvQkFRZ0I7O0FBRXBCOztBQUVBOztFQUVFOzs7Ozs7OztrQkFRZ0I7O0FBRWxCO0FBQ0E7O0FBN0JBOztBQUVBOztJQUVJOzs7Ozs7OztvQkFRZ0I7O0FBRXBCOztBQUVBOztFQUVFOzs7Ozs7OztrQkFRZ0I7O0FBRWxCO0FBQ0E7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDhCQUF5QjtFQUF6Qix5QkFBeUI7QUFDM0I7O0FBSkE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDZCQUF5QjtFQUF6Qix5QkFBeUI7QUFDM0I7O0FBSkE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDViw4QkFBeUI7RUFBekIseUJBQXlCO0FBQzNCOztBQUhBO0VBQ0UsVUFBVTtFQUNWLDZCQUF5QjtFQUF6Qix5QkFBeUI7QUFDM0I7O0FBSEE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgYW5pbWF0aW9uOiBwdWxzYXRlIDAuMTFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTsgICAgXG4gIGZvbnQtZmFtaWx5OiAnRnJlZG9rYSBPbmUnLCBjdXJzaXZlO1xuICBjb2xvcjogIzAwMjk2Qjtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG5tYXJnaW4tdG9wOiAyMHZoO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICBcbjEwMCUge1xuXG4gICAgdGV4dC1zaGFkb3c6XG4gICAgMCAwIDAuNXB4ICNmZmYsXG4gICAgMCAwIDEuNXB4ICNmZmYsXG4gICAgMCAwIDIuNXB4ICNmZmYsXG4gICAgMCAwIDVweCAjMDAyOTZCLFxuICAgIDAgMCAxMHB4ICMwMDI5NkIsXG4gICAgMCAwIDEycHggIzAwMjk2QixcbiAgICAwIDAgMTNweCAjMDAyOTZCLFxuICAgIDAgMCAxNXB4ICMwMDI5NkI7XG5cbn1cblxuMCUge1xuXG4gIHRleHQtc2hhZG93OlxuICAwIDAgMC41cHggI2ZmZixcbiAgMCAwIDEuNXB4ICNmZmYsXG4gIDAgMCAyLjVweCAjZmZmLFxuICAwIDAgNC41cHggIzAwMjk2QixcbiAgMCAwIDlweCAjMDAyOTZCLFxuICAwIDAgMTJweCAjMDAyOTZCLFxuICAwIDAgMTRweCAjMDAyOTZCLFxuICAwIDAgMThweCAjMDAyOTZCO1xuXG59XG59XG5cbnRoLCB0ciwgdGQge1xuICBjb2xvcjogIzAwMjk2Qjtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTZCMjA7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAxZjUyMmU7XG59XG5cbi5idG4uYnRuLWFkZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmN2ZmZjc7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAyOTZCODA7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XG59XG5cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XG59XG5cbi5idG4tZmFzIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgLmJ0bi1mYXMge1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4udHItZGF0YTpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "CVoa":
    /*!*******************************************************!*\
      !*** ./src/app/Components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function CVoa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 28,
        vars: 0,
        consts: [[1, "container-fluid", "p-0"], [1, "text-center", "text-lg-start"], [1, "container-fluid", "d-flex", "justify-content-center", "py-3"], ["type", "button", 1, "btn", "btn-stack", "btn-floating", "mx-2"], ["href", "https://www.mysql.com/", "target", "_blank"], ["src", "https://img.icons8.com/ios-filled/40/000000/mysql-logo.png"], ["href", "https://expressjs.com/", "target", "_blank"], ["fill", "#FFF", "src", "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", "alt", "express", 1, "express"], ["href", "https://angular.io/", "target", "_blank"], [1, "fab", "fa-angular"], ["href", "https://nodejs.dev/", "target", "_blank"], [1, "fab", "fa-node-js"], [1, "banner", "d-flex", "justify-content-around"], [1, "text-center", "text-white", "p-3"], ["href", "#", 1, "text-white"], [1, "authors"], [1, "text-center", "text-white", "p-3", "d-flex", "flex-wrap", "justify-content-center"], ["href", "https://github.com/dlscoccia/movies_crud_angular_node", 1, "text-white", "mx-2"], ["href", "https://github.com/dlscoccia/movies_crud_angular_node", 1, "text-white"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \xA9 2021 Copyright: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Movie Crud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Authors:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edwin\xA0Bernal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Daniel\xA0Lorenzo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #00296b;\n}\n\n.banner[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.fab[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.express[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n}\n\n.btn-stack[_ngcontent-%COMP%] {\n  background-color: #F7FFF7;\n}\n\n.btn-stack[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjk2Yjtcbn1cblxuLmJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uZmFiIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZXhwcmVzcyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5idG4tc3RhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGRkY3O1xufVxuXG4uYnRuLXN0YWNrIGEge1xuICBjb2xvcjogIzAwMDtcblxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "JHpc":
    /*!*************************************************!*\
      !*** ./src/app/Components/add/add.component.ts ***!
      \*************************************************/

    /*! exports provided: AddComponent */

    /***/
    function JHpc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
        return AddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Services/movie.service */
      "qKKv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var AddComponent = /*#__PURE__*/function () {
        function AddComponent(MovieService, router) {
          _classCallCheck(this, AddComponent);

          this.MovieService = MovieService;
          this.router = router;
          this.movie = {
            mov_id: '',
            mov_title: '',
            mov_year: 0,
            mov_time: 0,
            mov_lang: '',
            mov_dt_rel: '',
            mov_rel_country: ''
          };
          this.date = new Date().getFullYear();
          this.checkCounter = [false, false, false, false, false, false];
        }

        _createClass(AddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkInputs",
          value: function checkInputs() {
            var title = document.getElementById('alert-title');
            var year = document.getElementById('alert-year');
            var time = document.getElementById('alert-time');
            var lang = document.getElementById('alert-lang');
            var date = document.getElementById('alert-date');
            var country = document.getElementById('alert-country');
            var numRegex = new RegExp('^[0-9]+$');
            var letterRegex = /^[a-zA-Zñ]+$/;
            var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

            if (this.movie.mov_title.length < 2) {
              this.checkCounter[0] = false;
              title.classList.add('show');
            } else {
              this.checkCounter[0] = true;
              title.classList.remove('show');
            }

            if (this.movie.mov_year.toString().length !== 4 || this.movie.mov_year < 1888 || this.movie.mov_year > this.date || !numRegex.test(this.movie.mov_year.toString())) {
              this.checkCounter[1] = false;
              year.classList.add('show');
            } else {
              this.checkCounter[1] = true;
              year.classList.remove('show');
            }

            if (!numRegex.test(this.movie.mov_time.toString())) {
              this.checkCounter[2] = false;
              time.classList.add('show');
            } else {
              this.checkCounter[2] = true;
              time.classList.remove('show');
            }

            if (this.movie.mov_lang.length < 2 || !letterRegex.test(this.movie.mov_lang)) {
              this.checkCounter[3] = false;
              lang.classList.add('show');
            } else {
              this.checkCounter[3] = true;
              lang.classList.remove('show');
            }

            if (!dateRegex.test(this.movie.mov_dt_rel)) {
              this.checkCounter[4] = false;
              date.classList.add('show');
            } else {
              this.checkCounter[4] = true;
              date.classList.remove('show');
            }

            if (this.movie.mov_lang.length < 2 || !letterRegex.test(this.movie.mov_lang)) {
              this.checkCounter[5] = false;
              country.classList.add('show');
            } else {
              this.checkCounter[5] = true;
              country.classList.remove('show');
            }

            console.log(this.checkCounter);
            var checked = this.checkCounter.filter(function (check) {
              return check === true;
            });

            if (checked.length === 6) {
              this.add();
            }
          }
        }, {
          key: "add",
          value: function add() {
            delete this.movie.mov_id;
            this.MovieService.addMovie(this.movie).subscribe();
            this.router.navigate(['/home']);
          }
        }]);

        return AddComponent;
      }();

      AddComponent.ɵfac = function AddComponent_Factory(t) {
        return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddComponent,
        selectors: [["app-add"]],
        decls: 55,
        vars: 19,
        consts: [[1, "container-fluid", "add"], [1, "text-center", "mt-5"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "my-2"], [1, "col"], [1, "form-label"], ["type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "alert-title", 1, "myAlert"], ["id", "alert-year", 1, "myAlert"], ["id", "alert-time", 1, "myAlert"], ["id", "alert-lang", 1, "myAlert"], ["type", "date", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "alert-date", 1, "myAlert"], ["id", "alert-country", 1, "myAlert"], [1, "d-flex", "justify-content-center", "align-items-center", "my-5", "gap-5"], ["routerLink", "/home", 1, "btn", "btn-outline-info"], ["type", "submit", 1, "btn", "btn-add", 3, "click"]],
        template: function AddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agregar Pelicula");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Titulo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.movie.mov_title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "El titulo debe contener minimo 2 letras.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A\xF1o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.movie.mov_year = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Duraci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.movie.mov_time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "La duraci\xF3n deben ser numeros.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Idioma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_32_listener($event) {
              return ctx.movie.mov_lang = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "El idioma debe contener minimo 2 letras.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.movie.mov_dt_rel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Debe ingresar la fecha en el formato AAAA-MM-DD.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pa\xEDs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.movie.mov_rel_country = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "El pa\xEDs debe contener minimo 2 letras.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Regresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_button_click_53_listener() {
              return ctx.checkInputs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Agregar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_year)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El a\xF1o debe tener 4 digitos, estar entre 1888 y ", ctx.date, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_time)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_lang)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_dt_rel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_rel_country)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".add[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  color: #00296b;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: 'Fredoka One', cursive;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.btn.btn-add[_ngcontent-%COMP%] {\n  color: #00296b;\n  border: thin solid #00296b;\n}\n\n.btn.btn-add[_ngcontent-%COMP%]:hover, .btn.btn-outline-info[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  color: #f7fff7;\n  background-color: #00296b;\n  border: thin solid #00a5cf;\n}\n\n.myAlert[_ngcontent-%COMP%] {\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  color: rgba(255, 0, 0, 0.924);\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin-top: 5px;\n  background-color: rgba(255, 0, 0, 0.235);\n  opacity: 0;\n}\n\n.myAlert.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@media screen and (max-width: 470px) {\n  .myAlert[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJhZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQge1xuICBtaW4taGVpZ2h0OiA2MHZoO1xuICBjb2xvcjogIzAwMjk2Yjtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgY3Vyc2l2ZTtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bi5idG4tYWRkIHtcbiAgY29sb3I6ICMwMDI5NmI7XG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAyOTZiO1xufVxuXG4uYnRuLmJ0bi1hZGQ6aG92ZXIsXG4uYnRuLmJ0bi1vdXRsaW5lLWluZm86aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiAjZjdmZmY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTZiO1xuICBib3JkZXI6IHRoaW4gc29saWQgIzAwYTVjZjtcbn1cblxuLm15QWxlcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45MjQpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIzNSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5teUFsZXJ0LnNob3cge1xuICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xuICAubXlBbGVydCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.css']
          }]
        }], function () {
          return [{
            type: _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PdAn":
    /*!*******************************************************!*\
      !*** ./src/app/Components/update/update.component.ts ***!
      \*******************************************************/

    /*! exports provided: UpdateComponent */

    /***/
    function PdAn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
        return UpdateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Services/movie.service */
      "qKKv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var UpdateComponent = /*#__PURE__*/function () {
        function UpdateComponent(MovieService, router, activeRoute) {
          _classCallCheck(this, UpdateComponent);

          this.MovieService = MovieService;
          this.router = router;
          this.activeRoute = activeRoute;
          this.movie = {
            mov_id: '',
            mov_title: '',
            mov_year: 0,
            mov_time: 0,
            mov_lang: '',
            mov_dt_rel: '',
            mov_rel_country: ''
          };
          this.date = new Date().getFullYear();
          this.checkCounter = [false, false, false, false, false, false];
        }

        _createClass(UpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var mov_id = this.activeRoute.snapshot.params.id;

            if (mov_id) {
              this.MovieService.getOneMovie(mov_id).subscribe(function (res) {
                _this4.movie = res[0];
                console.log(res[0]);
              }, function (err) {
                return console.log(err);
              });
            }
          }
        }, {
          key: "checkInputs",
          value: function checkInputs() {
            var title = document.getElementById('alert-title');
            var year = document.getElementById('alert-year');
            var time = document.getElementById('alert-time');
            var lang = document.getElementById('alert-lang');
            var date = document.getElementById('alert-date');
            var country = document.getElementById('alert-country');
            var numRegex = new RegExp('^[0-9]+$');
            var letterRegex = /^[a-zA-Zñ]+$/;
            var dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

            if (this.movie.mov_title.length < 2) {
              this.checkCounter[0] = false;
              title.classList.add('show');
            } else {
              this.checkCounter[0] = true;
              title.classList.remove('show');
            }

            if (this.movie.mov_year.toString().length !== 4 || this.movie.mov_year < 1888 || this.movie.mov_year > this.date || !numRegex.test(this.movie.mov_year.toString())) {
              this.checkCounter[1] = false;
              year.classList.add('show');
            } else {
              this.checkCounter[1] = true;
              year.classList.remove('show');
            }

            if (!numRegex.test(this.movie.mov_time.toString())) {
              this.checkCounter[2] = false;
              time.classList.add('show');
            } else {
              this.checkCounter[2] = true;
              time.classList.remove('show');
            }

            if (this.movie.mov_lang.length < 2 || !letterRegex.test(this.movie.mov_lang)) {
              this.checkCounter[3] = false;
              lang.classList.add('show');
            } else {
              this.checkCounter[3] = true;
              lang.classList.remove('show');
            }

            if (!dateRegex.test(this.movie.mov_dt_rel)) {
              this.checkCounter[4] = false;
              date.classList.add('show');
            } else {
              this.checkCounter[4] = true;
              date.classList.remove('show');
            }

            if (this.movie.mov_lang.length < 2 || !letterRegex.test(this.movie.mov_lang)) {
              this.checkCounter[5] = false;
              country.classList.add('show');
            } else {
              this.checkCounter[5] = true;
              country.classList.remove('show');
            }

            console.log(this.checkCounter);
            var checked = this.checkCounter.filter(function (check) {
              return check === true;
            });

            if (checked.length === 6) {
              this.update();
            }
          }
        }, {
          key: "update",
          value: function update() {
            this.MovieService.updateMovie(this.movie.mov_id, this.movie).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              return console.log(err);
            });
            this.router.navigate(['/home']);
          }
        }]);

        return UpdateComponent;
      }();

      UpdateComponent.ɵfac = function UpdateComponent_Factory(t) {
        return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateComponent,
        selectors: [["app-update"]],
        decls: 55,
        vars: 19,
        consts: [[1, "container-fluid", "add"], [1, "text-center", "mt-5"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "my-2"], [1, "col"], [1, "form-label"], ["type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "alert-title", 1, "myAlert"], ["id", "alert-year", 1, "myAlert"], ["id", "alert-time", 1, "myAlert"], ["value", "movie.mov_lang", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "alert-lang", 1, "myAlert"], ["value", "mov_dt_rel", "type", "date", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "alert-date", 1, "myAlert"], ["id", "alert-country", 1, "myAlert"], [1, "d-flex", "justify-content-center", "align-items-center", "my-5", "gap-5"], ["routerLink", "/home", 1, "btn", "btn-outline-info"], ["type", "submit", 1, "btn", "btn-add", 3, "click"]],
        template: function UpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Actualizar Pelicula");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Titulo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.movie.mov_title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "El titulo debe contener minimo 2 letras.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A\xF1o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.movie.mov_year = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Duraci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.movie.mov_time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "La duraci\xF3n deben ser numeros.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Idioma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_32_listener($event) {
              return ctx.movie.mov_lang = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "El idioma debe contener minimo 2 letras.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.movie.mov_dt_rel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Debe ingresar la fecha en el formato AAAA-MM-DD.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pa\xEDs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.movie.mov_rel_country = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "El pa\xEDs debe contener minimo 2 letras.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Regresar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateComponent_Template_button_click_53_listener() {
              return ctx.checkInputs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Actualizar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_year)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El a\xF1o debe tener 4 digitos, estar entre 1888 y ", ctx.date, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_time)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_lang)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_dt_rel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.mov_rel_country)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".add[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  color: #00296b;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: 'Fredoka One', cursive;\n}\n\n.btn.btn-add[_ngcontent-%COMP%] {\n  background-color: #00a5cf;\n  font-size: 20px;\n  color: #f7fff7;\n}\n\n.btn.btn-add[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.myAlert[_ngcontent-%COMP%] {\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  color: rgba(255, 0, 0, 0.924);\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin-top: 5px;\n  background-color: rgba(255, 0, 0, 0.235);\n  opacity: 0;\n}\n\n.myAlert.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@media screen and (max-width: 470px) {\n  .myAlert[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJ1cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQge1xuICBtaW4taGVpZ2h0OiA2MHZoO1xuICBjb2xvcjogIzAwMjk2Yjtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogJ0ZyZWRva2EgT25lJywgY3Vyc2l2ZTtcbn1cblxuLmJ0bi5idG4tYWRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTVjZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2Y3ZmZmNztcbn1cblxuLmJ0bi5idG4tYWRkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5cbi5teUFsZXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOTI0KTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yMzUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubXlBbGVydC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgLm15QWxlcnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update',
            templateUrl: './update.component.html',
            styleUrls: ['./update.component.css']
          }]
        }], function () {
          return [{
            type: _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Services/movie.service */
      "qKKv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Components/footer/footer.component */
      "CVoa");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(MovieService, router) {
          _classCallCheck(this, AppComponent);

          this.MovieService = MovieService;
          this.router = router;
        }

        _createClass(AppComponent, [{
          key: "getMovie",
          value: function getMovie(id) {
            var _this5 = this;

            this.MovieService.getOneMovie(id).subscribe(function (res) {
              console.log(res);
              _this5.ListMovie = res;
            }, function (err) {
              return console.log(err);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "p-4"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-video"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VideoCRUD ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: rgb(4, 11, 80);\n  font-size: 24px;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: 'Fredoka One', cursive;\n  font-size: 32px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  color:#f7fff7;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  background-color: #f7fff7;\n  outline: none;\n  border: none;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:active, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgMTEsIDgwKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdGcmVkb2thIE9uZScsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciB7XG4gIGNvbG9yOiNmN2ZmZjc7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2ZmZjc7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hdmJhci10b2dnbGVyOmFjdGl2ZSxcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _Components_add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Components/add/add.component */
      "JHpc");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Components/home/home.component */
      "0zBU");
      /* harmony import */


      var _Components_update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Components/update/update.component */
      "PdAn");
      /* harmony import */


      var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Components/footer/footer.component */
      "CVoa");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _Components_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _Components_update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _Components_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _Components_update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"], _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "qKKv":
    /*!*******************************************!*\
      !*** ./src/app/Services/movie.service.ts ***!
      \*******************************************/

    /*! exports provided: MovieService */

    /***/
    function qKKv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovieService", function () {
        return MovieService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MovieService = /*#__PURE__*/function () {
        function MovieService(http) {
          _classCallCheck(this, MovieService);

          this.http = http;
          this.url = '/api';
        } //get movies


        _createClass(MovieService, [{
          key: "getMovies",
          value: function getMovies() {
            return this.http.get(this.url);
          } //get a movie

        }, {
          key: "getOneMovie",
          value: function getOneMovie(id) {
            return this.http.get(this.url + '/movie/' + id);
          } //get a movie

        }, {
          key: "searchMovies",
          value: function searchMovies(name) {
            return this.http.get(this.url + '/' + name);
          } //add movie

        }, {
          key: "addMovie",
          value: function addMovie(movie) {
            return this.http.post(this.url, movie);
          } //delete

        }, {
          key: "deleteMovie",
          value: function deleteMovie(id) {
            return this.http["delete"](this.url + '/' + id);
          } //update movie

        }, {
          key: "updateMovie",
          value: function updateMovie(id, movie) {
            return this.http.put(this.url + '/' + id, movie);
          }
        }]);

        return MovieService;
      }();

      MovieService.ɵfac = function MovieService_Factory(t) {
        return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MovieService,
        factory: MovieService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Components_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Components/add/add.component */
      "JHpc");
      /* harmony import */


      var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Components/home/home.component */
      "0zBU");
      /* harmony import */


      var _Components_update_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Components/update/update.component */
      "PdAn");

      var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'add',
        component: _Components_add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]
      }, {
        path: 'update/:id',
        component: _Components_update_update_component__WEBPACK_IMPORTED_MODULE_4__["UpdateComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map