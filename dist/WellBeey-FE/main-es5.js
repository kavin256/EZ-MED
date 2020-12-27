function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-header-div\">\r\n    <app-header></app-header>\r\n</div>\r\n<div class=\"app-body-div\">\r\n<!--    <app-common-body></app-common-body>-->\r\n    <router-outlet (activate)=\"onActivate($event)\" ></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-enter-time/booking-enter-time.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-enter-time/booking-enter-time.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBookingEnterTimeBookingEnterTimeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\" align=\"center\">\r\n    <ng-container *ngIf=\"!summaryShown && !showRedirectionMessage\">\r\n\r\n        <h4>Select Your Convenient Date and Time</h4>\r\n        <mat-form-field  style=\"width: 240px\" >\r\n            <mat-label>Date</mat-label>\r\n            <mat-select [(value)]=\"selectedDate\">\r\n                <ng-container *ngFor=\"let day of days\">\r\n                    <mat-option *ngIf=\"day.available\" value=\"{{day.date}}\">{{day.date}} - {{day.day}}</mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <ng-container *ngIf=\"selectedDate !== undefined && selectedDate !== null\">\r\n            <mat-form-field  style=\"width: 240px\" >\r\n                <mat-label>Time</mat-label>\r\n                <mat-select [(value)]=\"selectedAppointmentId\">\r\n                    <ng-container *ngFor=\"let timeSlot of getTimeSlots(selectedDate)\">\r\n                        <mat-option value=\"{{timeSlot.appointmentId}}\">{{timeSlot.displayAppointmentTime | date:'shortTime'}}</mat-option>\r\n                    </ng-container>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </ng-container>\r\n        <button [disabled]=\"!selectedDate || !selectedAppointmentId\" mat-raised-button color=\"primary\" style=\"width: 240px\" (click)=\"continueClicked(true)\">Continue</button>\r\n        <br>\r\n        <br>\r\n\r\n        <button mat-raised-button color=\"secondary\" style=\"width: 240px\"  (click)=\"goToSearchProfessionals()\">Back</button>\r\n\r\n        <br>\r\n        <br>\r\n<!--        <button *ngIf=\"!isScheduleVisible\" mat-raised-button color=\"secondary\" style=\"width: 220px\" (click)=\"scheduleVisibilityToggle(true)\" >Show Available Times</button>-->\r\n<!--        <button *ngIf=\"isScheduleVisible\" mat-raised-button color=\"secondary\" style=\"width: 220px\" (click)=\"scheduleVisibilityToggle(false)\" >Hide Available Times</button>-->\r\n<!--        <br>-->\r\n<!--        <br>-->\r\n<!--        <ng-container *ngIf=\"isScheduleVisible\" >-->\r\n<!--            <p>Available Times:</p>-->\r\n<!--            <mat-accordion>-->\r\n<!--                <div *ngFor=\"let schedule of doctorSchedule.schedule;\">-->\r\n<!--                    <mat-expansion-panel style=\"width: 320px\">-->\r\n<!--                        <mat-expansion-panel-header>-->\r\n<!--                            <mat-panel-title>{{schedule.title}}</mat-panel-title>-->\r\n<!--                        </mat-expansion-panel-header>-->\r\n<!--                        <p>Time Slot 1: <b>{{schedule.slot1}}</b></p>-->\r\n<!--                        <p>Time Slot 2: <b>{{schedule.slot2}}</b></p>-->\r\n<!--                        <p>Time Slot 3: <b>{{schedule.slot3}}</b></p>-->\r\n<!--                    </mat-expansion-panel>-->\r\n<!--                    <br>-->\r\n<!--                </div>-->\r\n<!--            </mat-accordion>-->\r\n<!--        </ng-container>-->\r\n\r\n    </ng-container>\r\n    <ng-container *ngIf=\"summaryShown && !showRedirectionMessage\">\r\n        <div style=\"width: 240px\">\r\n            <p>** You are about to book a consultation with <b>{{doctor.name}}</b> on <b>{{selectedDate}}</b>. Wait for the Skype call from him/her at around <b>{{getDisplaySelectedTime(selectedAppointmentId)}}</b><br><br>\r\n                Make sure your Skype call notifications are switched on.<br><br>\r\n            (Note that the time might change due to different reasons)</p>\r\n        </div>\r\n        <button (click)=\"navigateToPaymentOrLogIn()\" mat-raised-button color=\"primary\" style=\"width: 240px\">Continue</button>\r\n        <br>\r\n        <br>\r\n\r\n        <button mat-raised-button color=\"secondary\" style=\"width: 240px\"  (click)=\"continueClicked(false)\">Back</button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"showRedirectionMessage\">\r\n        <app-transition-page\r\n                [modalType]=\"transitionType\"\r\n                (clickEmitter)=\"clickFromTransitionPage($event)\"\r\n        ></app-transition-page>\r\n    </ng-container>\r\n    <br>\r\n    <br>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-enter/booking-enter.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-enter/booking-enter.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBookingEnterBookingEnterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <div *ngIf=\"doctor\">\r\n        <div style=\"width: 320px; height: auto;\">\r\n            <table>\r\n                <tr>\r\n                    <th style=\"width: 115px; height: 115px; align-content: center\">\r\n                        <img src=\"./assets/img/doctor2.jpg\" width=\"115px\" height=\"115px\">\r\n                    </th>\r\n                    <th>\r\n                    </th>\r\n                    <th>\r\n                        <table>\r\n                            <tr>\r\n                                <th style=\"font-size: medium; text-align: left\">\r\n                                    {{doctor.name | uppercase}}\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: x-small; text-align: left\">\r\n                                    {{doctor.bio}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <mat-divider style=\"left: inherit; width: 180px\"></mat-divider>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: small; text-align: left\">\r\n                                    Specializations:\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <div *ngFor=\"let speciality of doctor.specialities\">\r\n                                <tr>\r\n                                    <td style=\"font-size: x-small; text-align: left\">\r\n                                        {{speciality}}\r\n                                    </td>\r\n                                </tr>\r\n                            </div>\r\n                            <tr>\r\n                                <mat-divider style=\"left: inherit; width: 180px\"></mat-divider>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: small; text-align: left\">\r\n                                    Charge per consultation:\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: x-small; text-align: left\">\r\n                                    {{doctor.consultationPrice}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                        </table>\r\n                    </th>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <br>\r\n    </div>\r\n\r\n    <div>\r\n        <br>\r\n\r\n        <span>Total amount: </span><span>{{doctor.consultationPrice}}</span>\r\n        <br>\r\n        <br>\r\n<!--        <h5>{{doctor.consultationPrice}}</h5>-->\r\n    </div>\r\n    <button mat-raised-button color=\"primary\" style=\"width: 320px\">Continue to payment</button>\r\n    <br>\r\n    <br>\r\n    <button (click)=\"goBack()\" style=\"width: 320px\" mat-raised-button color=\"secondary\">Back</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-section/chat-section.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-section/chat-section.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatSectionChatSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let message of messageThread\">\r\n    <div *ngIf=\"message.sender === 'doctor'\" style=\"align: right\">\r\n        <p style=\"font-style: italic; font-size: small; text-align:right; color: cornflowerblue\" role=\"listitem\">You: {{message.message}}</p>\r\n    </div>\r\n    <div *ngIf=\"message.sender === 'patient'\" >\r\n        <p style=\"font-style: italic; font-size: small; text-align:left; color: slategray\" role=\"listitem\">{{patientName}}: {{message.message}}</p>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common-body/common-body.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common-body/common-body.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonBodyCommonBodyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n\r\n<!--    common-->\r\n    <div *ngIf=\"flow===1\">\r\n        <app-landing-page\r\n        >\r\n        </app-landing-page>\r\n    </div>\r\n    <div *ngIf=\"flow===2\">\r\n        <app-signup\r\n        ></app-signup>\r\n    </div>\r\n<!--    patient-->\r\n    <div  *ngIf=\"flow===3\">\r\n        <app-search-professionals-main></app-search-professionals-main>\r\n    </div>\r\n    <div *ngIf=\"flow===14\">\r\n        <app-booking-enter-time></app-booking-enter-time>\r\n    </div>\r\n    <div *ngIf=\"flow===13\">\r\n        <app-booking-enter></app-booking-enter>\r\n    </div>\r\n    <div *ngIf=\"flow===15\">\r\n        <app-payment-success></app-payment-success>\r\n    </div>\r\n    <div *ngIf=\"flow===17\">\r\n        <app-patient-profile></app-patient-profile>\r\n    </div>\r\n    <div *ngIf=\"flow===18\">\r\n        <app-patient-booking-list></app-patient-booking-list>\r\n    </div>\r\n\r\n\r\n<!--    doctor-->\r\n\r\n    <div *ngIf=\"flow===4\">\r\n        <app-doctor-profile></app-doctor-profile>\r\n    </div>\r\n    <div *ngIf=\"flow===6\">\r\n        <app-doctor-schedule\r\n        ></app-doctor-schedule>\r\n    </div>\r\n\r\n    <div  *ngIf=\"flow===7\">\r\n        <app-doctor-side-booking-list></app-doctor-side-booking-list>\r\n    </div>\r\n    <div *ngIf=\"flow===8\">\r\n        <app-doctor-side-booking></app-doctor-side-booking>\r\n    </div>\r\n    <div *ngIf=\"flow===12\">\r\n        <app-prescription></app-prescription>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div *ngIf=\"flow===10\">\r\n        <app-contact-page></app-contact-page>\r\n    </div>\r\n\r\n    <div *ngIf=\"flow===11\">\r\n        <app-faqs></app-faqs>\r\n    </div>\r\n    <div *ngIf=\"flow===9\">\r\n        <app-search-professionals></app-search-professionals>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-page/contact-page.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-page/contact-page.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <p style=\"font-size: medium\">Phone number: {{phoneNumber}}</p><br>\r\n    <p style=\"font-size: medium\">Email: {{email}}</p><br>\r\n    <p style=\"font-size: medium\">Facebook: {{facebook}}</p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-finance/doctor-finance.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-finance/doctor-finance.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoctorFinanceDoctorFinanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n\r\n    <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n        <mat-label>Price Per Consultation:</mat-label>\r\n        <input matInput placeholder=\"\" value=\"1500\">\r\n    </mat-form-field>\r\n\r\n    <br>\r\n    <br>\r\n    <button style=\"width: 320px\" mat-raised-button color=\"primary\">Save</button>\r\n    <br>\r\n    <br>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoctorProfileDoctorProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n\r\n    <ng-container *ngIf=\"editable\">\r\n        <mat-form-field style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Title</mat-label>\r\n            <mat-select required [(value)]=\"userData.title\">\r\n                <ng-container *ngFor=\"let title of titles\" >\r\n                    <mat-option value=\"{{title.value}}\">\r\n                        {{title.value}}\r\n                    </mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>First Name: {{userData.firstName}}</mat-label>\r\n            <input required matInput placeholder=\"\" [(ngModel)]=\"userData.firstName\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Last Name: {{userData.lastName}}</mat-label>\r\n            <input required matInput placeholder=\"\" [(ngModel)]=\"userData.lastName\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Professional Level</mat-label>\r\n            <mat-select required [(value)]=\"userData.professionalType\">\r\n                <ng-container *ngFor=\"let professionalType of doctorTypes\" >\r\n                    <mat-option value=\"{{professionalType.value}}\">\r\n                        {{professionalType.value}}\r\n                    </mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Registration Number (SLMC):</mat-label>\r\n            <input matInput placeholder=\"\"  [(ngModel)]=\"userData.regNo\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Qualifications / Description:</mat-label>\r\n            <textarea required matInput placeholder=\"\" [(ngModel)]=\"userData.qualifications\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field *ngIf=\"isConsultant(userData.professionalType)\" style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Specialization #1</mat-label>\r\n            <mat-select matNativeControl [(value)]=\"userData.specialityA\">\r\n                <ng-container *ngFor=\"let specialization of specializations\" >\r\n                    <mat-option value=\"{{specialization}}\">\r\n                        {{specialization}}\r\n                    </mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"isConsultant(userData.professionalType)\" style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Specialization #2 (Optional)</mat-label>\r\n            <mat-select matNativeControl [(value)]=\"userData.specialityB\">\r\n                <ng-container *ngFor=\"let specialization of specializations\" >\r\n                    <mat-option value=\"{{specialization.value}}\">\r\n                        {{specialization.value}}\r\n                    </mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field *ngIf=\"isConsultant(userData.professionalType)\" style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Specialization #3 (Optional)</mat-label>\r\n            <mat-select matNativeControl [(value)]=\"userData.specialityC\">\r\n                <ng-container *ngFor=\"let specialization of specializations\" >\r\n                    <mat-option value=\"{{specialization.value}}\">\r\n                        {{specialization.value}}\r\n                    </mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>WhatsApp Number:</mat-label>\r\n            <input required matInput placeholder=\"\" [(ngModel)]=\"userData.whatsAppNumber\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Contact Number:</mat-label>\r\n            <input required matInput placeholder=\"\" [(ngModel)]=\"userData.contactNumber\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Price per consultation ({{userData.priceCurrency}}):</mat-label>\r\n            <input required matInput placeholder=\"\" [(ngModel)]=\"userData.priceForAppointment\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-label style=\"font-size: small\">Upload Profile Picture:</mat-label>\r\n        <br>\r\n        <input #imageInput\r\n               type=\"file\"\r\n               accept=\"image/*\"\r\n               (change)=\"uploadImage(imageInput)\">\r\n        <br>\r\n        <br>\r\n        <button style=\"width: 240px\" mat-raised-button color=\"primary\" (click)=\"saveData()\">Save</button>\r\n        <br>\r\n        <br>\r\n        <button style=\"width: 240px\" mat-raised-button color=\"secondary\" (click)=\"toggleEditable(false)\">Back</button>\r\n        <br>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!editable\">\r\n        <ng-container *ngIf=\"!userData?.availableForAppointment\">\r\n            <p>\r\n                <ngb-alert [dismissible]=\"false\">\r\n                    <strong>Note!</strong> You have not completed your Profile and Schedule yet. You will not be listed under searches until you complete your Schedule and Profile.\r\n                </ngb-alert>\r\n            </p>\r\n        </ng-container>\r\n\r\n        <button [disabled]=\"!userData?.availableForAppointment\" (click)=\"goToMyAppointments()\" style=\"width: 320px\" mat-raised-button color=\"primary\">My Bookings</button>\r\n        <br>\r\n        <br>\r\n        <button [disabled]=\"!userData?.availableForAppointment && checkForMandatoryFieldsToActivateProfile(userData)\" [color]=\"userData?.availableForAppointment? null: 'warn'\" style=\"width: 320px\" mat-raised-button (click)=\"toggleEditable(true)\">Edit Profile</button>\r\n        <br>\r\n        <br>\r\n        <button [disabled]=\"!userData?.availableForAppointment && !checkForMandatoryFieldsToActivateProfile(userData)\" [color]=\"userData?.availableForAppointment? null:'warn'\" (click)=\"editSchedule()\" style=\"width: 320px\" mat-raised-button>Edit Schedule</button>\r\n        <br>\r\n        <br>\r\n        <button disabled style=\"width: 320px\" mat-stroked-button>My Finances</button>\r\n        <br>\r\n        <br>\r\n\r\n        <br>\r\n        <ng-container  *ngIf=\"userData?.availableForAppointment\">\r\n            <p>What the patients see:</p>\r\n            <app-professional-card\r\n            [professional]=\"userData\"\r\n            ></app-professional-card>\r\n        </ng-container>\r\n    </ng-container>\r\n</div>\r\n\r\n<!--<h1>file upload</h1>\r\n<input type=\"file\" multiple (change)=\"onFileSelected($event)\">\r\n<button type=\"buton\" (click)=\"onUpload()\">Upload</button>-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-schedule/doctor-schedule.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-schedule/doctor-schedule.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoctorScheduleDoctorScheduleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n        <mat-label>Average Time For Consultation (minutes):</mat-label>\r\n        <input required matInput #input7 [(ngModel)]='doctorScheduleData.averageTimeForAppointment'>\r\n    </mat-form-field>\r\n    <br>\r\n    <br>\r\n\r\n    <p>Weekly Schedule for consultations:</p>\r\n    <mat-accordion>\r\n        <div *ngFor=\"let schedule of doctorScheduleData.fixedDoctorDates;\">\r\n<!--            <mat-expansion-panel [disabled]=\"!(schedule.workingTimePeriods && schedule.workingTimePeriods.length > 0)\" style=\"width: 320px\">-->\r\n            <mat-expansion-panel style=\"width: 320px\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title style=\"font-family: 'Arial Black'\"><b>{{schedule.title}}</b></mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <mat-divider></mat-divider>\r\n                <br>\r\n                <ng-container *ngFor=\"let workingTimePeriod of schedule.workingTimePeriods; let i = index\">\r\n                    <p align=\"left\"><b>\r\n                        <mat-checkbox\r\n                                (change)=\"workingTimePeriod.isActive = !workingTimePeriod.isActive\"\r\n                                [checked]=\"workingTimePeriod && workingTimePeriod.isActive\"><span style=\"font-family: 'Arial Black'\">{{schedule.title}} Slot #{{i+1}}</span>\r\n                        </mat-checkbox>\r\n                    </b></p>\r\n                    <ng-container *ngIf=\"workingTimePeriod.isActive\">\r\n                        <mat-label>From:</mat-label>\r\n                        <ngb-timepicker [(ngModel)]=\"workingTimePeriod.startTimeSelected\" [meridian]=\"meridian\"></ngb-timepicker>\r\n                        <mat-label>To:</mat-label>\r\n                        <ngb-timepicker [(ngModel)]=\"workingTimePeriod.endTimeSelected\" [meridian]=\"meridian\"></ngb-timepicker>\r\n                        <ng-container *ngIf=\"schedule.workingTimePeriods.length > i+1\"><mat-divider></mat-divider></ng-container>\r\n                        <br>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </mat-expansion-panel>\r\n            <br>\r\n        </div>\r\n    </mat-accordion>\r\n\r\n    <br>\r\n    <ng-container *ngIf=\"!changeRequestSent\">\r\n        <p style=\"font-size: small; color: crimson\">** Once you send the change request, changes will be activated only after 7 days because already available bookings will be affected by these changes.<br><br>\r\n        ** You will not be able to send another change request till 7 days.</p>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"changeRequestSent\">\r\n        <p style=\"font-size: small; color: crimson\">** You can not save above details temporarily. You have made a change request already and it takes 7 days before you can send another change request.\r\n            Contact us for more clarifications.</p>\r\n    </ng-container>\r\n    <button *ngIf=\"!isConfirmationActive\" (click)=\"userConsent()\"  [disabled]=\"changeRequestSent\" style=\"width: 320px\" mat-raised-button color=\"primary\">Send Request to Change Details</button>\r\n    <br>\r\n    <br>\r\n    <button *ngIf=\"!isConfirmationActive\" (click)=\"goToProfessionalDashboard()\" style=\"width: 320px\" mat-raised-button color=\"secondary\">Back</button>\r\n    <p *ngIf=\"isConfirmationActive\" align=\"center\">Are you sure?</p>\r\n    <button *ngIf=\"isConfirmationActive\" (click)=\"save()\" style=\"width: 150px\" mat-raised-button color=\"primary\">Send Request</button>\r\n    <span>&nbsp;&nbsp;<button *ngIf=\"isConfirmationActive\" (click)=\"cancel()\" style=\"width: 150px\" mat-raised-button color=\"secondary\">Cancel</button></span>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoctorSideBookingListDoctorSideBookingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n\r\n\r\n    <ng-container *ngIf=\"bookingSlotListVisible\">\r\n        <p style=\"font-size: x-large\">List of Time Slots:</p>\r\n        <button (click)=\"selectSlot(bookingListSlot1)\" style=\"width: 320px\" mat-raised-button>{{bookingListSlot1.startTime}} - {{bookingListSlot1.endTime}}</button>\r\n        <br>\r\n        <br>\r\n        <button (click)=\"selectSlot(bookingListSlot2)\" style=\"width: 320px\" mat-raised-button>{{bookingListSlot2.startTime}} - {{bookingListSlot2.endTime}}</button>\r\n        <br>\r\n        <br>\r\n        <button (click)=\"selectSlot(bookingListSlot3)\" style=\"width: 320px\" mat-raised-button>{{bookingListSlot3.startTime}} - {{bookingListSlot3.endTime}} (4 New)</button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!bookingSlotListVisible && selectedSlot\">\r\n        <button\r\n                (click)=\"\r\n                bookingSlotListVisible = !bookingSlotListVisible;\r\n                PAGINATION_START = 0;\r\n                PAGINATION_END = this.RESULTS_PER_PAGE;\"\r\n                style=\"width: 300px\"\r\n                mat-raised-button\r\n                color=\"secondary\"\r\n        >Back</button>\r\n        <br>\r\n        <br>\r\n        <p style=\"font-size: x-large\">Appointments:</p>\r\n\r\n        <div *ngFor=\"let booking of selectedSlot?.bookings; let i=index\">\r\n            <ng-container *ngIf=\"i >= PAGINATION_START && i < PAGINATION_END\">\r\n                <mat-card [ngClass]=\"isOverTheAppointmentCard(booking?.bookingId) ? 'shadow' : ''\" (mouseenter)=\"onMouseEnter(booking?.bookingId)\" (mouseleave)=\"onMouseLeave()\"\r\n                        (click)=\"selectBooking(booking.id)\" style=\"width: 300px; height: 60px;\" [ngStyle]=\"{background: getColor(booking.bookingStatus)}\">\r\n                    <table>\r\n                        <tr>\r\n                            <td style=\"font-size: large\" [ngClass]=\"booking.bookingStatus === 'BOOKING_COMPLETED' ? 'strikethrough':'null'\">{{booking.patientName}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"font-size: x-small\">Booking ID: {{booking.bookingId}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </mat-card>\r\n                <br>\r\n            </ng-container>\r\n        </div>\r\n        <mat-paginator [length]=\"selectedSlot?.bookings.length\"\r\n                       [pageSize]=\"RESULTS_PER_PAGE\"\r\n                       (page)=\"goToPage($event)\"\r\n        >\r\n        </mat-paginator>\r\n\r\n    </ng-container>\r\n\r\n    <br>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-side-booking/doctor-side-booking.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-side-booking/doctor-side-booking.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoctorSideBookingDoctorSideBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <h1 style=\"font-size: x-large\"># {{booking.id}}</h1>\r\n<!--    <mat-panel-title style=\"font-family: 'Arial Black'; size: A3\"><b># {{booking.id}}</b></mat-panel-title>-->\r\n\r\n    <br>\r\n    <p style=\"font-size: small\">WhatApp: <b>{{patient.whatsAppNumber}}</b></p>\r\n\r\n    <p style=\"font-size: small\">Booking Status: {{booking.status}}</p>\r\n\r\n    <ng-container *ngIf=\"!isPatientDetailsShown\">\r\n        <button (click)=\"isPatientDetailsShown = !isPatientDetailsShown\" style=\"width: 180px\" color=\"primary\" mat-flat-button>Show Patient Details</button>    <br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"isPatientDetailsShown\">\r\n        <button (click)=\"isPatientDetailsShown = !isPatientDetailsShown\" style=\"width: 180px\" color=\"primary\" mat-flat-button>Hide Patient Details</button>    <br>\r\n    </ng-container>\r\n    <br>\r\n    <ng-container *ngIf=\"isPatientDetailsShown\">\r\n        <p style=\"font-size: small\">Booking Number: {{patient.patientName}}</p>\r\n        <p style=\"font-size: small\">Patient Ref. No: {{patient.patientId}}</p>\r\n        <p style=\"font-size: small\">Contact number: {{patient.contactNumber}}</p>\r\n        <p style=\"font-size: small\">Email: {{patient.email}}</p>\r\n        <p style=\"font-size: small\">Birthday: {{patient.birthday}}</p>\r\n        <p style=\"font-size: small\">Age: {{patient.age}}</p>\r\n        <p style=\"font-size: small\">Known Allergies: {{patient.knownAllergies}}</p>\r\n    </ng-container>\r\n    <mat-divider></mat-divider>\r\n    <br>\r\n\r\n    <ng-container  *ngIf=\"!inProgress\" >\r\n    <button [disabled]=\"booking.status === 'BOOKING_CANCELLED'\"  style=\"width: 320px\" color=\"primary\" (click)=\"inProgress = !inProgress\" mat-flat-button>Start Consultation</button>\r\n<!--    <button [disabled]=\"booking.status !== 'BOOKING_NOT_STARTED'\" style=\"width: 320px\" color=\"primary\" mat-flat-button>Start Consultation</button>    <br>-->\r\n    </ng-container>\r\n    <ng-container *ngIf=\"inProgress\">\r\n\r\n    <button [disabled]=\"booking.status === 'BOOKING_CANCELLED'\" (click)=\"inProgress = !inProgress\" color=\"warn\" style=\"width: 320px\" mat-stroked-button>\r\n        End Consultation</button>\r\n<!--    <button [disabled]=\"booking.status === 'BOOKING_NOT_STARTED' || booking.status === 'BOOKING_CANCELLED'\" style=\"width: 320px\" mat-stroked-button>End Consultation</button>-->\r\n    </ng-container>\r\n    <br>\r\n    <br>\r\n\r\n    <button style=\"width: 320px\" color=\"accent\" mat-flat-button>Prescriptions</button>\r\n    <br>\r\n    <br>\r\n\r\n    <br>\r\n    <p style=\"font-size: large;\">Conversation:</p>\r\n    <mat-divider></mat-divider>\r\n\r\n    <br>\r\n\r\n    <div *ngFor=\"let message of booking.messageThread\">\r\n        <div *ngIf=\"message.sender === 'doctor'\" style=\"align: right\">\r\n            <p style=\"font-style: italic; font-size: small; text-align:right; color: cornflowerblue\" role=\"listitem\">You: {{message.message}}</p>\r\n        </div>\r\n        <div *ngIf=\"message.sender === 'patient'\" >\r\n            <p style=\"font-style: italic; font-size: small; text-align:left; color: slategray\" role=\"listitem\">{{patient.patientName}}: {{message.message}}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <br>\r\n    <button *ngIf=\"!isConfirmationActive\" [disabled]=\"booking.status === 'BOOKING_CANCELLED'\" (click)=\"userConsent()\" style=\"width: 320px\" mat-flat-button color=\"warn\" >Cancel Booking</button>\r\n\r\n    <p *ngIf=\"isConfirmationActive\" align=\"center\">Are you sure?</p>\r\n    <button *ngIf=\"isConfirmationActive\" (click)=\"cancel()\" style=\"width: 150px\" mat-raised-button  color=\"warn\">Cancel Booking</button>\r\n    <span>&nbsp;&nbsp;<button *ngIf=\"isConfirmationActive\" (click)=\"dismiss()\" style=\"width: 150px\" mat-raised-button color=\"secondary\">Dismiss</button></span>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/faqs/faqs.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/faqs/faqs.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFaqsFaqsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n\r\n    <p style=\"font-size: x-large\">Frequently Asked Questions:</p>\r\n\r\n    <div *ngFor=\"let faq of faqs\">\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <p style=\"font-size: small\"><b>\r\n                        {{faq.q}}\r\n                </b></p>\r\n            </mat-expansion-panel-header>\r\n            <p style=\"font-size: small\">\r\n                Answer: {{faq.a}}\r\n            </p>\r\n        </mat-expansion-panel>\r\n        <br>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-footer\">\r\n    <div align=\"center\">\r\n        <span style=\"padding-right: 25px\">About Us</span>\r\n        <span>|</span>\r\n        <span style=\"padding-left: 25px; padding-right: 25px\">Terms & Conditions</span>\r\n        <span>|</span>\r\n        <span style=\"padding-left: 25px; padding-right: 25px\">FAQs</span>\r\n        <span>|</span>\r\n        <span style=\"padding-left: 25px;\">Contact Us</span>\r\n        <br>\r\n        <br>\r\n        <img src=\"./assets/img/payments low footer.png\" width=\"250px\">\r\n        <p style=\"font-size: small;\">Copyright © {{currentYear}} Ez Med. All Rights Reserved</p>\r\n        <br>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"mat-card-style\">\r\n    <table>\r\n        <tr>\r\n            <th style=\"width: 250px; padding-bottom: 20px\" align=\"left\">\r\n                <img src=\"./assets/img/ez_med_logo.png\" width=\"100\" (click)=\"goToHomePage()\">\r\n            </th>\r\n            <th style=\"width: 100px;\" >\r\n                <div *ngIf=\"!(loggedInUser && firstName)\" align=\"center\">\r\n                    <img (click)=\"logoClick()\" src=\"./assets/img/login.png\" width=\"70px\"/>\r\n                </div>\r\n                <div *ngIf=\"loggedInUser && firstName\" align=\"center\">\r\n                    <img (click)=\"logoClick()\" src=\"./assets/img/profile_blue1.png\" width=\"60px\"/>\r\n                    <p style=\"align-content: center; padding-top: 5px; font-size: small\">{{firstName}}</p>\r\n                </div>\r\n            </th>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<mat-divider></mat-divider>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div align=\"center\" class=\"mat-card-style\">\r\n    <p style=\"font-size: medium; line-height:1.6; padding-bottom: 60px;  padding-right: 30px;  padding-left: 30px;\">\r\n        Ez Med is the <b>FIRST</b> and the <b>ONLY</b>  platform in Sri Lanka that allows you to book an appointment with your doctor online and get your consultation done via video / audio call.\r\n    </p>\r\n    <img src=\"/assets/img/search-doctor.png\" width=\"100px\">\r\n    <p style=\"font-size: medium; padding-bottom: 40px;\">\r\n        1. Search for a Doctor\r\n    </p>\r\n    <img src=\"./assets/img/booking.png\" width=\"100px\">\r\n\r\n    <p style=\"font-size: medium; padding-bottom: 40px;\">\r\n        2. Schedule the appointment\r\n    </p>\r\n    <img src=\"./assets/img/video-chat.png\" width=\"100px\">\r\n\r\n    <p style=\"font-size: medium;\">\r\n        3. Wait for the doctor's call\r\n\r\n<!--        <a href=\"https://support.skype.com/en/faq/FA11098/how-do-i-get-started-with-skype\" style=\"color: dodgerblue\">Help me set up Skype</a>-->\r\n<!--        <br>-->\r\n<!--        <a href=\"https://www.businessinsider.com/what-is-my-skype-id\" style=\"color: dodgerblue\">What is my Skype ID?</a>-->\r\n<!--        <br>-->\r\n    </p>\r\n    <p style=\"font-size: small; padding-bottom: 40px; max-width: 300px\">\r\n        Once your booking is up, doctor (/professional) will contact you. After several attempts to contact you,\r\n        your booking will be automatically cancelled and you will be refunded (cancellation charges apply*).<br>\r\n    </p>\r\n\r\n    <button (click)=\"goToSearchPage()\" style=\"width: 250px; height: 60px\" mat-raised-button color=\"primary\"><b>Make an Appointment</b></button>\r\n    <br>\r\n\r\n<!--    <br>-->\r\n<!--    <button style=\"width: 180px\" mat-raised-button color=\"link\">I'm a Doctor</button>-->\r\n<!--    <br>-->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div align=\"center\">\r\n    <ng-container *ngIf=\"modalType === 'LOADING'\">\r\n        <mat-spinner></mat-spinner>\r\n        <br>\r\n        <h5>Loading...</h5>\r\n    </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-title/page-title.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-title/page-title.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageTitlePageTitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 align=\"center\" style=\"color: #b4b2b2\">{{title}}</h3><br>\r\n<mat-divider></mat-divider>\r\n<br>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-booking-list/patient-booking-list.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-booking-list/patient-booking-list.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPatientBookingListPatientBookingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <ng-container *ngIf=\"!selectedBookingId\">\r\n\r\n        <app-page-title [title]=\"title\"></app-page-title>\r\n\r\n<!--        <mat-radio-group aria-label=\"Select an option\">-->\r\n<!--            <mat-radio-button value=\"all\">All</mat-radio-button>-->\r\n<!--            <mat-radio-button value=\"new\">New</mat-radio-button>-->\r\n<!--        </mat-radio-group>-->\r\n<!--        <br>-->\r\n        <button (click)=\"goToUserDashboard()\" style=\"width: 300px\" mat-raised-button color=\"secondary\">Back</button>\r\n         <br>\r\n         <br>\r\n        <button style=\"width: 300px\" (click)=\"newBooking()\" mat-raised-button color=\"primary\">+ Add New Booking</button>\r\n        <br>\r\n        <br>\r\n        <p style=\"font-size: large;\">Bookings:</p>\r\n<!--        <mat-divider></mat-divider>-->\r\n        <div *ngFor=\"let booking of bookings; let i=index\">\r\n            <ng-container *ngIf=\"i >= PAGINATION_START && i < PAGINATION_END\">\r\n                <mat-card (click)=\"selectBooking(booking.bookingId)\" style=\"width: 300px; height: 90px;\" [ngStyle]=\"{background: getColor(booking.bookingStatus)}\">\r\n                    <table>\r\n                        <tr>\r\n                            <td style=\"font-size: large\" [ngClass]=\"booking.bookingStatus === 'BOOKING_COMPLETED' ? 'strikethrough':'null'\">{{booking.doctorName}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"font-size: small\">Date: {{booking.date}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"font-size: x-small\">Booking ID: {{booking.bookingId}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </mat-card>\r\n                <br>\r\n            </ng-container>\r\n        </div>\r\n        <mat-paginator [length]=\"bookings.length\"\r\n                       [pageSize]=\"RESULTS_PER_PAGE\"\r\n                       (page)=\"goToPage($event)\"\r\n        >\r\n        </mat-paginator>\r\n\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"selectedBookingId && !isPrescriptionsVisible\">\r\n        <app-page-title [title]=\"titleBooking\"></app-page-title>\r\n\r\n        <h1 style=\"font-size: x-large\">{{booking.doctorName}}</h1>\r\n\r\n        <p style=\"font-size: small\">Professional ID: {{booking.doctorId}}</p>\r\n        <p style=\"font-size: small\">Booking Number: {{booking.bookingId}}</p>\r\n\r\n        <p style=\"font-size: small\">Booking Status: {{booking.bookingStatus}}</p>\r\n        <mat-divider></mat-divider>\r\n\r\n<!--        <button (click)=\"showPrescriptions(booking.bookingId, true)\" style=\"width: 320px\" color=\"accent\" mat-flat-button>Prescriptions</button>-->\r\n\r\n        <br>\r\n        <p style=\"font-size: large;\">Conversation:</p>\r\n\r\n        <app-chat-section\r\n            [messageThread]=\"booking.messageThread\"\r\n            [patientName]=\"booking.patientName\"\r\n        >\r\n        </app-chat-section>\r\n\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <br>\r\n        <br>\r\n        <button *ngIf=\"!isConfirmationActive\" (click)=\"isConfirmationActive = !isConfirmationActive\"  [disabled]=\"changeRequestSent\" style=\"width: 320px\" mat-raised-button color=\"warn\">Cancel Booking</button>\r\n        <p *ngIf=\"isConfirmationActive\" align=\"center\">If you cancel this booking, you will not be able to reactivate this booking again. Are you sure?</p>\r\n        <button *ngIf=\"isConfirmationActive\" (click)=\"save()\" style=\"width: 150px\" mat-raised-button color=\"warn\">Yes</button>\r\n        <span>&nbsp;&nbsp;<button *ngIf=\"isConfirmationActive\" (click)=\"cancel()\" style=\"width: 150px\" mat-raised-button color=\"secondary\">No, Go back</button></span>\r\n        <br *ngIf=\"isConfirmationActive\" >\r\n        <br>\r\n        <button *ngIf=\"!isConfirmationActive\" (click)=\"selectedBookingId = null\" style=\"width: 320px\" mat-raised-button color=\"secondary\">Back</button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"isPrescriptionsVisible && !selectedPrescription\">\r\n        <div *ngFor=\"let prescription of prescriptionList; index as index\">\r\n            <ng-container>\r\n                <mat-card (click)=\"selectPrescription(prescription.prescription)\" style=\"width: 240px; height: 40px;\">\r\n                    <table>\r\n                        <tr>\r\n                            <td style=\"font-size: small\">{{index}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </mat-card>\r\n                <br>\r\n            </ng-container>\r\n        </div>\r\n        <br>\r\n        <button (click)=\"showPrescriptions(null, false)\" style=\"width: 240px\" color=\"primary\" mat-flat-button>Back</button>\r\n    </ng-container>\r\n    <ng-container  *ngIf=\"isPrescriptionsVisible && selectedPrescription\">\r\n        <p style=\"font-size: small\">Date: {{currentDate | date:'yyyy-MM-dd'}}</p>\r\n        <p style=\"font-size: small\">Name: <b>{{booking.patientName}}</b></p>\r\n        <p style=\"font-size: small\">Age: {{booking.patientAge}} yrs</p>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <div>\r\n            <p style=\"font-size: small; text-align: center\"><b><u>PRESCRIPTION</u></b></p>\r\n\r\n            <br>\r\n            <li  style=\"padding-bottom: 10px; font-size: small\" *ngFor=\"let item of items\">{{item}}</li>\r\n\r\n            <table>\r\n                <br>\r\n                <tr>\r\n                    <th style=\"font-size: medium; text-align: left\">\r\n                        {{doctor.name}}\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <td style=\"font-size: x-small; text-align: left\">\r\n                        {{doctor.bio}}\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <p style=\"font-size: x-small\">** No signature required. This is a electronically generated document that could only be edited by the prescriber **</p>\r\n\r\n            <mat-divider></mat-divider>\r\n            <mat-divider></mat-divider>\r\n            <br>\r\n            <button (click)=\"selectPrescription(null)\" style=\"width: 320px\" color=\"primary\" mat-flat-button>Back</button>\r\n\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPatientProfilePatientProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n\r\n    <app-page-title [title]=\"title\"></app-page-title>\r\n    <h5 *ngIf=\"!editable\">Name: {{patient.title}} {{patient.name}}</h5>\r\n    <h6 *ngIf=\"!editable\">Age: {{patient.age}}</h6>\r\n    <br>\r\n\r\n    <ng-container *ngIf=\"editable\">\r\n        <mat-form-field style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Title</mat-label>\r\n            <mat-select [(value)]=\"patient.title\">\r\n                <ng-container *ngFor=\"let title of titles\" >\r\n                    <mat-option value=\"{{title.value}}\">\r\n                        {{title.value}}\r\n                    </mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Name: {{patient.name}}</mat-label>\r\n            <input matInput placeholder=\"\" [value]=\"patient.name\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Birthday:</mat-label>\r\n            <input matInput placeholder=\"\"  value=\"{{patient.birthday}}\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Allergies:</mat-label>\r\n            <textarea matInput placeholder=\"\" value=\"{{patient.allergies}}\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field  style=\"width: 240px\" class=\"example-full-width\">\r\n            <mat-label>Medical History:</mat-label>\r\n            <textarea matInput placeholder=\"\" value=\"{{patient.medicalHistory}}\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <br>\r\n        <br>\r\n        <button style=\"width: 240px\" mat-raised-button color=\"primary\" (click)=\"toggleEditable(false)\">Save</button>\r\n        <br>\r\n        <br>\r\n        <button style=\"width: 240px\" mat-raised-button color=\"secondary\" (click)=\"toggleEditable(false)\">Back</button>\r\n        <br>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!editable\">\r\n\r\n        <button style=\"width: 320px\" (click)=\"goToMyAppointments()\" mat-raised-button color=\"primary\">My Bookings</button>\r\n        <br>\r\n        <br>\r\n        <button style=\"width: 320px\" mat-raised-button (click)=\"toggleEditable(true)\">Edit Profile</button>\r\n        <br>\r\n        <br>\r\n        <button style=\"width: 320px\" mat-flat-button color=\"warn\" (click)=\"logOut()\">Log Out</button>\r\n        <br>\r\n        <br>\r\n<!--        <button style=\"width: 320px\" mat-stroked-button>My Finances</button>-->\r\n<!--        <br>-->\r\n<!--        <br>-->\r\n\r\n    </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-success/payment-success.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-success/payment-success.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPaymentSuccessPaymentSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <br>\r\n    <div align=\"center\">\r\n        <img src=\"./assets/img/successfulPayment.png\" width=\"300px\"/>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n\r\n        <button mat-raised-button color=\"secondary\" style=\"width: 240px\" >Go to Profile</button>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prescription-list/prescription-list.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prescription-list/prescription-list.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPrescriptionListPrescriptionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\n    <p style=\"font-size: x-large\">List of Prescriptions:</p>\n    <ng-container *ngFor=\"let prescription of prescriptionList; let i = index\">\n        <button (click)=\"selectPrescription()\" style=\"width: 320px\" mat-raised-button>Prescription {{i+1}}</button>\n        <br>\n        <br>\n    </ng-container>\n    <br>\n    <br>\n    <button *ngIf=\"isDoctor\" (click)=\"selectPrescription()\" style=\"width: 320px; height: 50px\" color=\"accent\" mat-raised-button>Add New Prescription</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prescription/prescription.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prescription/prescription.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPrescriptionPrescriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <div class=\"container\" id=\"test\" #test>\r\n        <p style=\"font-size: small\">Date: {{currentDate | date:'yyyy-MM-dd'}}</p>\r\n\r\n        <p style=\"font-size: small\">Name: <b>{{booking.patientTitle}}. {{booking.patientName}}</b></p>\r\n        <p style=\"font-size: small\">Age: {{booking.patientAge}} yrs</p>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <div *ngIf=\"preview\">\r\n\r\n            <br>\r\n            <p style=\"font-size: small; text-align: center\"><b><u>PRESCRIPTION</u></b></p>\r\n\r\n            <br>\r\n            <li  style=\"padding-bottom: 10px; font-size: small\" *ngFor=\"let item of items\">{{item}}</li>\r\n\r\n            <br>\r\n\r\n            <p style=\"font-size: x-small\">** No signature required. This is a electronically generated document that was prepared by the following prescriber **</p>\r\n            <table>\r\n                <tr>\r\n                    <th style=\"font-size: medium; text-align: left\">\r\n                        {{doctor.name}}\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <td style=\"font-size: x-small; text-align: left\">\r\n                        {{doctor.bio}}\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n    <!--        <mat-divider></mat-divider>-->\r\n    <!--        <mat-divider></mat-divider>-->\r\n            <br>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!preview\">\r\n        <mat-form-field  style=\"width: 320px\" class=\"example-full-width\">\r\n            <mat-label>Add prescriptions:</mat-label>\r\n            <textarea rows=\"10\" cols=\"50\" matInput placeholder=\"Start typing..\"></textarea>\r\n        </mat-form-field>\r\n<!--        <p>Start adding items below</p>-->\r\n<!--        <div *ngFor=\"let item of prescriptionList\">-->\r\n<!--            <table align=\"center\">-->\r\n<!--                <tr>-->\r\n<!--                    <td>-->\r\n<!--                        <mat-form-field style=\"width: 300px\">-->\r\n<!--                            <input style=\"font-size: small\" matInput type=\"text\" placeholder=\"Type here..\" value=\"{{item}}\">-->\r\n<!--                        </mat-form-field>-->\r\n<!--                    </td>-->\r\n<!--                </tr>-->\r\n<!--            </table>-->\r\n<!--        </div>-->\r\n<!--        <div align=\"center\">-->\r\n<!--            <button style=\"width: 90px\" color=\"primary\" mat-flat-button>Add more</button>-->\r\n<!--        </div>-->\r\n<!--        <br>-->\r\n\r\n<!--        <mat-divider></mat-divider>-->\r\n<!--        <mat-divider></mat-divider>-->\r\n        <br>\r\n    </div>\r\n\r\n    <button (click)=\"previewToggle('')\" *ngIf=\"preview\" style=\"width: 320px\" color=\"primary\" mat-flat-button>Exit Preview</button>\r\n    <input *ngIf=\"preview\" type=\"button\" value=\"Download PDF\" class=\"btn btn-success\" (click)=\"SavePDF()\">\r\n    <button (click)=\"previewToggle('preview')\" *ngIf=\"!preview\" style=\"width: 320px\" color=\"secondary\" mat-raised-button>Preview Prescription</button>\r\n    <br>\r\n    <br>\r\n\r\n    <button *ngIf=\"!preview\" style=\"width: 320px\" color=\"primary\" mat-flat-button>Save</button>\r\n    <br>\r\n    <br>\r\n    <button  *ngIf=\"!preview\" mat-raised-button color=\"secondary\" style=\"width: 320px\" (click)=\"goToAppointmentList(false)\">Back</button>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional-card/professional-card.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional-card/professional-card.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfessionalCardProfessionalCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"isOverTheDoctorCard(professional.userName) ? 'shadow' : ''\" (mouseenter)=\"onMouseEnter(professional.userName)\" (mouseleave)=\"onMouseLeave()\">\r\n    <mat-card (click)=\"selectProfessional_(professional.userName)\" style=\"width: 320px; height: auto\">\r\n        <table>\r\n            <tr>\r\n                <th style=\"width: 120px; height: 100px; align-content: center\">\r\n                    <img src=\"./assets/img/doctor2.jpg\" width=\"100px\" height=\"100px\">\r\n                </th>\r\n                <th>\r\n                </th>\r\n                <th>\r\n                    <table>\r\n                        <tr>\r\n                            <th style=\"font-size: medium; text-align: left\">\r\n                                {{professional.title}} {{professional.firstName}} {{professional.lastName}}\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"font-size: x-small; color: #797D7F;  text-align: left\">\r\n                                {{professional?.qualifications}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <mat-divider style=\"left: inherit; width: 160px\"></mat-divider>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"font-size: small; color: #797D7F;  text-align: left\">\r\n                                Specializations:\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n<!--                        <div *ngFor=\"let speciality of specialities\">-->\r\n                            <tr>\r\n                                <td style=\" color: #797D7F; font-size: x-small; text-align: left\">\r\n                                    {{professional?.specialityA}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\" color: #797D7F; font-size: x-small; text-align: left\">\r\n                                    {{professional?.specialityB}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\" color: #797D7F; font-size: x-small; text-align: left\">\r\n                                    {{professional?.specialityC}}\r\n                                </td>\r\n                            </tr>\r\n<!--                        </div>-->\r\n                        <tr>\r\n                            <mat-divider style=\" color: #797D7F; left: inherit; width: 160px\"></mat-divider>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\" color: #797D7F; font-size: small; text-align: left\">\r\n                                Charge per consultation:\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\" color: #797D7F; font-size: x-small; text-align: left\">\r\n                                {{currency}} {{professional.priceForAppointment}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                    </table>\r\n                </th>\r\n            </tr>\r\n        </table>\r\n        <table>\r\n            <tr>\r\n                <th width=\"240px\">\r\n\r\n                </th>\r\n                <th>\r\n                    <ng-container *ngIf=\"false && professional.isSkypePreferred\">\r\n                        <img src=\"./assets/img/Icon-Skype.jpg\" width=\"12px\" height=\"12px\">\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"false && professional.isWhatsAppPreferred\">\r\n                        <span style=\"padding-left: 7px\"><img src=\"./assets/img/whatsapp.jpg\" width=\"15px\" height=\"15px\"></span>\r\n                    </ng-container>\r\n                </th>\r\n            </tr>\r\n        </table>\r\n    </mat-card>\r\n</div>\r\n<br>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-professionals-main/search-professionals-main.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-professionals-main/search-professionals-main.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchProfessionalsMainSearchProfessionalsMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n\r\n    <div align=\"center\">\r\n    <mat-form-field style=\"width: 250px\">\r\n        <input matInput type=\"text\" placeholder=\"Search by name (Optional)\" [(ngModel)]=\"searchString\">\r\n    </mat-form-field>\r\n\r\n    <br>\r\n    <mat-form-field  style=\"width: 240px\" >\r\n        <mat-label>Category</mat-label>\r\n        <mat-select [(value)]=\"selectedCategory\">\r\n            <ng-container *ngFor=\"let category of categories\">\r\n                <mat-option value=\"{{category.category}}\">{{category.category}}</mat-option>\r\n            </ng-container>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <ng-container *ngIf=\"selectedCategory !== undefined && selectedCategory !== null && selectedCategory !== 'General Practitioner'\">\r\n        <mat-form-field  style=\"width: 240px\" >\r\n            <mat-label>Specialization</mat-label>\r\n            <mat-select [(value)]=\"selectedSpecialization\">\r\n                <ng-container *ngFor=\"let subCategory of specializations\">\r\n                    <mat-option value=\"{{subCategory}}\">{{dataHandlerService.convertCamelCaseToSentence(subCategory)}}</mat-option>\r\n                </ng-container>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </ng-container>\r\n\r\n        <button (click)=\"search(searchString, selectedCategory, selectedSpecialization)\" style=\"width: 90px\" color=\"primary\" mat-flat-button>Search</button>\r\n    </div>\r\n    <br>\r\n    <mat-divider></mat-divider>\r\n    <br>\r\n    <p style=\"font-size: x-large\">Search Results:</p>\r\n    <ng-container *ngIf=\"professionalList.length === 0\">\r\n        <br>\r\n        <br>\r\n\r\n        <p style=\"color: crimson\"><b>------   Sorry, No results found   ------</b></p>\r\n        <br>\r\n\r\n    </ng-container>\r\n    <ng-container *ngFor=\"let doc of professionalList; let i=index\">\r\n        <ng-container *ngIf=\"i >= PAGINATION_START && i < PAGINATION_END\">\r\n            <app-professional-card\r\n            [professional]=\"doc\"\r\n            (selectProfessional)=\"selectProfessional($event)\"\r\n            ></app-professional-card>\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"professionalList.length > 0\">\r\n        <mat-paginator [length]=\"professionalList.length\"\r\n                       [pageSize]=\"RESULTS_PER_PAGE\"\r\n                       (page)=\"goToPage($event)\"\r\n        >\r\n        </mat-paginator>\r\n    </ng-container>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-professionals/search-professionals.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-professionals/search-professionals.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchProfessionalsSearchProfessionalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\">\r\n    <table align=\"center\">\r\n        <tr>\r\n            <td>\r\n                <mat-form-field style=\"width: 200px\">\r\n                    <input matInput type=\"text\" placeholder=\"Search by name\" value=\"{{searchString}}\">\r\n                </mat-form-field>\r\n            </td>\r\n            <td>\r\n                &nbsp;\r\n            </td>\r\n            <td>\r\n                <button (click)=\"search()\" style=\"width: 80px\" color=\"primary\" mat-flat-button>Search</button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br>\r\n\r\n    <div align=\"center\" *ngIf=\"professionalListType==='Consultant'\">\r\n        <mat-form-field style=\"width: 290px\">\r\n            <mat-label>Select specialization [optional]</mat-label>\r\n            <mat-select [(value)]=\"selectedProfessionalType\">\r\n                <mat-option>None</mat-option>\r\n                <mat-option value=\"option1\">Option 1</mat-option>\r\n                <mat-option value=\"option2\">Option 2</mat-option>\r\n                <mat-option value=\"option3\">Option 3</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n    <mat-divider></mat-divider>\r\n    <p style=\"font-size: x-large\">List of {{professionalListType}}s:</p>\r\n\r\n    <div *ngFor=\"let doc of professionalList\">\r\n        <mat-card (click)=\"selectDoc(doc.id)\" style=\"width: 320px; height: auto\">\r\n            <table>\r\n                <tr>\r\n                    <th style=\"width: 120px; height: 100px;\">\r\n                        <img src=\"./assets/img/doctor2.jpg\" width=\"100px\" height=\"100px\">\r\n                    </th>\r\n                    <th>\r\n                    </th>\r\n                    <th>\r\n                        <table>\r\n                            <tr>\r\n                                <th style=\"font-size: medium; text-align: left\">\r\n                                    {{doc.name}}\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: x-small; text-align: left\">\r\n                                    {{doc.bio}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <mat-divider style=\"left: inherit; width: 160px\"></mat-divider>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: small; text-align: left\">\r\n                                    Specializations:\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <div *ngFor=\"let speciality of doc.specialities\">\r\n                                <tr>\r\n                                    <td style=\"font-size: x-small; text-align: left\">\r\n                                        {{speciality}}\r\n                                    </td>\r\n                                </tr>\r\n                            </div>\r\n                            <tr>\r\n                                <mat-divider style=\"left: inherit; width: 160px\"></mat-divider>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: small; text-align: left\">\r\n                                    Charge per consultation:\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                            </tr>\r\n                            <tr>\r\n                                <td style=\"font-size: x-small; text-align: left\">\r\n                                    {{doc.consultationPrice}}\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                        </table>\r\n                    </th>\r\n                </tr>\r\n            </table>\r\n<!--            <table>-->\r\n<!--                <tr>-->\r\n<!--                    <th width=\"240px\">-->\r\n\r\n<!--                    </th>-->\r\n<!--                    <th>-->\r\n<!--                        <ng-container *ngIf=\"doc.isSkypePreferred\">-->\r\n<!--                            <img src=\"./assets/img/Icon-Skype.jpg\" width=\"12px\" height=\"12px\">-->\r\n<!--                        </ng-container>-->\r\n<!--                        <ng-container *ngIf=\"doc.isWhatsAppPreferred\">-->\r\n<!--                            <span style=\"padding-left: 7px\"><img src=\"./assets/img/whatsapp.jpg\" width=\"15px\" height=\"15px\"></span>-->\r\n<!--                        </ng-container>-->\r\n<!--                    </th>-->\r\n<!--                </tr>-->\r\n<!--            </table>-->\r\n        </mat-card>\r\n        <br>\r\n    </div>\r\n\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/sign-up.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/sign-up.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignupSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div align=\"center\">\r\n    <br>\r\n    <br>\r\n    <mat-tab-group style=\"width: 320px\" mat-align-tabs=\"center\">\r\n        <ng-container>\r\n        <mat-tab label=\"Existing User\">\r\n            <div class=\"mat-card-style\" align=\"center\">\r\n                <div class=\"example-container\">\r\n                    <mat-form-field style=\"width: 240px\" appearance=\"legacy\">\r\n                        <mat-label>Email</mat-label>\r\n                        <input [(ngModel)]=\"email\" matInput>\r\n                    </mat-form-field>\r\n                    <br>\r\n                    <mat-form-field style=\"width: 240px\" appearance=\"legacy\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput [(ngModel)]=\"pass\" [type]=\"hide ? 'password' : 'text'\">\r\n                    </mat-form-field>\r\n                    <br>\r\n                    <br>\r\n                    <button [disabled]=\"!(email && pass)\" (click)=\"logIn()\" style=\"width: 240px\" mat-flat-button color=\"primary\">Log In</button>\r\n                    <br>\r\n                    <br>\r\n                    <button disabled style=\"width: 180px\"  mat-stroked-button color=\"link\">Forgot My Password</button>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n        </mat-tab>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"isSignUp\">\r\n            <mat-tab label=\"New User\">\r\n                <div class=\"mat-card-style\" align=\"center\">\r\n                    <br>\r\n                    <p style=\"color: crimson\" *ngIf=\"isIncompleteErrorAvailable\">** You have some unfilled fields</p>\r\n                    <div align=\"left\" style=\"padding-left: 55px\">\r\n                        <mat-radio-group aria-label=\"Select an option\" (change)=\"setIsDoctor($event)\">\r\n                            <mat-radio-button [checked]='true' value=false>I'm a Patient</mat-radio-button>\r\n                            <mat-radio-button value=true>I'm a Medical Professional</mat-radio-button>\r\n                            <br>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                    <br>\r\n                    <div>\r\n                        <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                            <mat-label>Title</mat-label>\r\n                            <mat-select required [(value)]=\"title\">\r\n                                <ng-container *ngFor=\"let title of titles\" >\r\n                                    <mat-option value=\"{{title.value}}\">\r\n                                        {{title.value}}\r\n                                    </mat-option>\r\n                                </ng-container>\r\n                            </mat-select>\r\n<!--                            <input matInput required #input3 [(ngModel)]='title'>-->\r\n                        </mat-form-field>\r\n                        <br>\r\n                    </div>\r\n                    <div>\r\n                        <mat-form-field style=\"width: 240px\" appearance=\"legacy\">\r\n                            <mat-label>First Name</mat-label>\r\n                            <input required matInput #input1 [(ngModel)]='firstName'>\r\n                        </mat-form-field>\r\n                        <br>\r\n                        <mat-form-field style=\"width: 240px\" appearance=\"legacy\">\r\n                            <mat-label>Last Name</mat-label>\r\n                            <input required matInput #input_ln [(ngModel)]='lastName'>\r\n                        </mat-form-field>\r\n                        <br>\r\n                        <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                            <mat-label>Email</mat-label>\r\n                            <input required matInput #input2 [(ngModel)]='email'>\r\n                        </mat-form-field>\r\n                        <br>\r\n                        <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                            <mat-label>Gender *</mat-label>\r\n                            <mat-select (selectionChange)=\"setGender($event.value)\">\r\n                                <mat-option required *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n                                    {{gender.viewValue}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <br>\r\n                    </div>\r\n                    <div [hidden]=\"isDoctor\">\r\n                        <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                            <mat-label>Birthday</mat-label>\r\n                            <input matInput required [(ngModel)]='birthday'>\r\n                        </mat-form-field>\r\n                        <br>\r\n                    </div>\r\n                    <div>\r\n                        <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                            <mat-label>WhatsApp Number</mat-label>\r\n                            <input required matInput #input7 [(ngModel)]='whatsAppNumber'>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                        <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                            <mat-label>Other Contact Number (Optional)</mat-label>\r\n                            <input required matInput #input7 [(ngModel)]='contactNumber'>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <!--                <div>-->\r\n                    <!--                    <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">-->\r\n                    <!--                        <mat-label>Skype ID [optional]</mat-label>-->\r\n                    <!--                        <input matInput #input6 [(ngModel)]='skypeId'>-->\r\n                    <!--                    </mat-form-field>-->\r\n                    <!--                </div>-->\r\n                    <div [hidden]=\"isDoctor\">\r\n                        <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                            <mat-label>Known Allergies</mat-label>\r\n                            <textarea type=\"text\" matInput #input8 [(ngModel)]='knownAllergies'></textarea>\r\n                        </mat-form-field>\r\n                        <br>\r\n                    </div>\r\n                    <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                        <mat-label>Preferred Password</mat-label>\r\n                        <input matInput required [type]=\"hide ? 'password' : 'text'\"  #input8 [(ngModel)]='pass'>\r\n                    </mat-form-field>\r\n                    <br>\r\n                    <mat-form-field style=\"width: 240px\"  appearance=\"legacy\">\r\n                        <mat-label>Confirm Password</mat-label>\r\n                        <input matInput required [type]=\"hide ? 'password' : 'text'\" #input9 [(ngModel)]='conPass'>\r\n                    </mat-form-field>\r\n                    <br>\r\n                    <br>\r\n                    <button style=\"width: 240px\" mat-flat-button color=\"primary\" (click)=\"SignUp()\">Sign Up</button>\r\n                    <br>\r\n                    <br>\r\n                    <p style=\"color: crimson\" *ngIf=\"isIncompleteErrorAvailable\">** You have some unfilled fields</p>\r\n                </div>\r\n            </mat-tab>\r\n        </ng-container>\r\n\r\n    </mat-tab-group>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transition-page/transition-page.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transition-page/transition-page.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransitionPageTransitionPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-card-style\" align=\"center\">\n    <ng-container *ngIf=\"modalType === 'LOGIN_REDIRECT'\">\n        <h6 *ngIf=\"dismissible\" style=\"color: crimson\">Sorry, You have to log in to confirm the appointment!</h6>\n        <h6 *ngIf=\"!dismissible\" style=\"color: crimson\">Please Log In !</h6>\n        <br>\n        <button (click)=\"logIn()\" mat-raised-button color=\"primary\" style=\"width: 240px\">Log In</button>\n        <br>\n        <br>\n        <button *ngIf=\"dismissible\" mat-raised-button color=\"secondary\" style=\"width: 240px\" (click)=\"dismiss()\">Back</button>\n    </ng-container>\n    <br>\n    <br>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_signup_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/signup/sign-up.component */
    "./src/app/components/signup/sign-up.component.ts");
    /* harmony import */


    var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/landing-page/landing-page.component */
    "./src/app/components/landing-page/landing-page.component.ts");
    /* harmony import */


    var _components_search_professionals_main_search_professionals_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/search-professionals-main/search-professionals-main.component */
    "./src/app/components/search-professionals-main/search-professionals-main.component.ts");
    /* harmony import */


    var _components_booking_enter_time_booking_enter_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/booking-enter-time/booking-enter-time.component */
    "./src/app/components/booking-enter-time/booking-enter-time.component.ts");
    /* harmony import */


    var _components_booking_enter_booking_enter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/booking-enter/booking-enter.component */
    "./src/app/components/booking-enter/booking-enter.component.ts");
    /* harmony import */


    var _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/payment-success/payment-success.component */
    "./src/app/components/payment-success/payment-success.component.ts");
    /* harmony import */


    var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/patient-profile/patient-profile.component */
    "./src/app/components/patient-profile/patient-profile.component.ts");
    /* harmony import */


    var _components_patient_booking_list_patient_booking_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/patient-booking-list/patient-booking-list.component */
    "./src/app/components/patient-booking-list/patient-booking-list.component.ts");
    /* harmony import */


    var _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/doctor-profile/doctor-profile.component */
    "./src/app/components/doctor-profile/doctor-profile.component.ts");
    /* harmony import */


    var _components_doctor_schedule_doctor_schedule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/doctor-schedule/doctor-schedule.component */
    "./src/app/components/doctor-schedule/doctor-schedule.component.ts");
    /* harmony import */


    var _components_doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/doctor-side-booking-list/doctor-side-booking-list.component */
    "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.ts");
    /* harmony import */


    var _components_doctor_side_booking_doctor_side_booking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/doctor-side-booking/doctor-side-booking.component */
    "./src/app/components/doctor-side-booking/doctor-side-booking.component.ts");
    /* harmony import */


    var _components_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/prescription/prescription.component */
    "./src/app/components/prescription/prescription.component.ts");
    /* harmony import */


    var _components_prescription_list_prescription_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/prescription-list/prescription-list.component */
    "./src/app/components/prescription-list/prescription-list.component.ts");

    var routes = [{
      path: '',
      component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]
    }, {
      path: 'index',
      component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]
    }, {
      path: 'signup',
      component: _components_signup_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
    }, {
      path: 'searchProfessionals',
      component: _components_search_professionals_main_search_professionals_main_component__WEBPACK_IMPORTED_MODULE_5__["SearchProfessionalsMainComponent"]
    }, {
      path: 'appointmentTime',
      component: _components_booking_enter_time_booking_enter_time_component__WEBPACK_IMPORTED_MODULE_6__["BookingEnterTimeComponent"]
    }, {
      path: 'confirmation',
      component: _components_booking_enter_booking_enter_component__WEBPACK_IMPORTED_MODULE_7__["BookingEnterComponent"]
    }, {
      path: 'success',
      component: _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_8__["PaymentSuccessComponent"]
    }, {
      path: 'user/dashboard',
      component: _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_9__["PatientProfileComponent"]
    }, {
      path: 'user/appointments',
      component: _components_patient_booking_list_patient_booking_list_component__WEBPACK_IMPORTED_MODULE_10__["PatientBookingListComponent"]
    }, {
      path: 'doctor/dashboard',
      component: _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_11__["DoctorProfileComponent"]
    }, {
      path: 'doctor/schedule',
      component: _components_doctor_schedule_doctor_schedule_component__WEBPACK_IMPORTED_MODULE_12__["DoctorScheduleComponent"]
    }, {
      path: 'doctor/appointments',
      component: _components_doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_13__["DoctorSideBookingListComponent"]
    }, {
      path: 'appointment',
      component: _components_doctor_side_booking_doctor_side_booking_component__WEBPACK_IMPORTED_MODULE_14__["DoctorSideBookingComponent"]
    }, {
      path: 'appointment/prescriptionList',
      component: _components_prescription_list_prescription_list_component__WEBPACK_IMPORTED_MODULE_16__["PrescriptionListComponent"]
    }, {
      path: 'appointment/prescription',
      component: _components_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_15__["PrescriptionComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-header-div {\r\n    min-width: 320px;\r\n    height: available;\r\n    /*background-color: red; !* For browsers that do not support gradients *!*/\r\n    /*background-image: linear-gradient(#E0C3FC, #ffffff); !* Standard syntax (must be last) *!*/\r\n}\r\n\r\n.app-body-div {\r\n    min-width: 320px;\r\n    padding-bottom: 100px;\r\n    /*background-color: red; !* For browsers that do not support gradients *!*/\r\n    /*background-image: linear-gradient(#ffffff, #E0C3FC); !* Standard syntax (must be last) *!*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBFQUEwRTtJQUMxRSw0RkFBNEY7QUFDaEc7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDBFQUEwRTtJQUMxRSw0RkFBNEY7QUFDaEciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyLWRpdiB7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiBhdmFpbGFibGU7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHJlZDsgISogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICohKi9cclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNFMEMzRkMsICNmZmZmZmYpOyAhKiBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgKiEqL1xyXG59XHJcblxyXG4uYXBwLWJvZHktZGl2IHtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHJlZDsgISogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICohKi9cclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNFMEMzRkMpOyAhKiBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgKiEqL1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component.css */
    "./src/app/app.component.css");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'WellBeey-FE';
      }

      _createClass(AppComponent, [{
        key: "onActivate",
        value: function onActivate(event) {
          window.scroll(0, 0);
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: initialize, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialize", function () {
      return initialize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_signup_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/signup/sign-up.component */
    "./src/app/components/signup/sign-up.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_common_body_common_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/common-body/common-body.component */
    "./src/app/components/common-body/common-body.component.ts");
    /* harmony import */


    var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/landing-page/landing-page.component */
    "./src/app/components/landing-page/landing-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_doctor_schedule_doctor_schedule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/doctor-schedule/doctor-schedule.component */
    "./src/app/components/doctor-schedule/doctor-schedule.component.ts");
    /* harmony import */


    var _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/doctor-profile/doctor-profile.component */
    "./src/app/components/doctor-profile/doctor-profile.component.ts");
    /* harmony import */


    var _components_search_professionals_main_search_professionals_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/search-professionals-main/search-professionals-main.component */
    "./src/app/components/search-professionals-main/search-professionals-main.component.ts");
    /* harmony import */


    var _components_doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/doctor-side-booking-list/doctor-side-booking-list.component */
    "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.ts");
    /* harmony import */


    var _components_doctor_side_booking_doctor_side_booking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/doctor-side-booking/doctor-side-booking.component */
    "./src/app/components/doctor-side-booking/doctor-side-booking.component.ts");
    /* harmony import */


    var _components_search_professionals_search_professionals_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/search-professionals/search-professionals.component */
    "./src/app/components/search-professionals/search-professionals.component.ts");
    /* harmony import */


    var _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/contact-page/contact-page.component */
    "./src/app/components/contact-page/contact-page.component.ts");
    /* harmony import */


    var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/faqs/faqs.component */
    "./src/app/components/faqs/faqs.component.ts");
    /* harmony import */


    var _components_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/prescription/prescription.component */
    "./src/app/components/prescription/prescription.component.ts");
    /* harmony import */


    var _components_booking_enter_booking_enter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/booking-enter/booking-enter.component */
    "./src/app/components/booking-enter/booking-enter.component.ts");
    /* harmony import */


    var _components_booking_enter_time_booking_enter_time_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/booking-enter-time/booking-enter-time.component */
    "./src/app/components/booking-enter-time/booking-enter-time.component.ts");
    /* harmony import */


    var _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/payment-success/payment-success.component */
    "./src/app/components/payment-success/payment-success.component.ts");
    /* harmony import */


    var _components_doctor_finance_doctor_finance_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/doctor-finance/doctor-finance.component */
    "./src/app/components/doctor-finance/doctor-finance.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/patient-profile/patient-profile.component */
    "./src/app/components/patient-profile/patient-profile.component.ts");
    /* harmony import */


    var _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/page-title/page-title.component */
    "./src/app/components/page-title/page-title.component.ts");
    /* harmony import */


    var _components_patient_booking_list_patient_booking_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/patient-booking-list/patient-booking-list.component */
    "./src/app/components/patient-booking-list/patient-booking-list.component.ts");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/modal/modal.component */
    "./src/app/components/modal/modal.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_professional_card_professional_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/professional-card/professional-card.component */
    "./src/app/components/professional-card/professional-card.component.ts");
    /* harmony import */


    var _components_chat_section_chat_section_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/chat-section/chat-section.component */
    "./src/app/components/chat-section/chat-section.component.ts");
    /* harmony import */


    var _components_prescription_list_prescription_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/prescription-list/prescription-list.component */
    "./src/app/components/prescription-list/prescription-list.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_transition_page_transition_page_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/transition-page/transition-page.component */
    "./src/app/components/transition-page/transition-page.component.ts");

    function initialize(app) {
      var _this = this;

      return function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return app.loadModuleConfigurations();

                case 2:
                  _context.next = 4;
                  return app.loadPermissions();

                case 4:
                  _context.next = 6;
                  return app.userLogin();

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_signup_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_common_body_common_body_component__WEBPACK_IMPORTED_MODULE_10__["CommonBodyComponent"], _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"], _components_doctor_schedule_doctor_schedule_component__WEBPACK_IMPORTED_MODULE_13__["DoctorScheduleComponent"], _components_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_14__["DoctorProfileComponent"], _components_doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_16__["DoctorSideBookingListComponent"], _components_doctor_side_booking_doctor_side_booking_component__WEBPACK_IMPORTED_MODULE_17__["DoctorSideBookingComponent"], _components_search_professionals_search_professionals_component__WEBPACK_IMPORTED_MODULE_18__["SearchProfessionalsComponent"], _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_19__["ContactPageComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_20__["FaqsComponent"], _components_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_21__["PrescriptionComponent"], _components_booking_enter_booking_enter_component__WEBPACK_IMPORTED_MODULE_22__["BookingEnterComponent"], _components_booking_enter_time_booking_enter_time_component__WEBPACK_IMPORTED_MODULE_23__["BookingEnterTimeComponent"], _components_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_24__["PaymentSuccessComponent"], _components_doctor_finance_doctor_finance_component__WEBPACK_IMPORTED_MODULE_25__["DoctorFinanceComponent"], _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_27__["PatientProfileComponent"], _components_search_professionals_main_search_professionals_main_component__WEBPACK_IMPORTED_MODULE_15__["SearchProfessionalsMainComponent"], _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_28__["PageTitleComponent"], _components_patient_booking_list_patient_booking_list_component__WEBPACK_IMPORTED_MODULE_29__["PatientBookingListComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_30__["ModalComponent"], _components_professional_card_professional_card_component__WEBPACK_IMPORTED_MODULE_32__["ProfessionalCardComponent"], _components_chat_section_chat_section_component__WEBPACK_IMPORTED_MODULE_33__["ChatSectionComponent"], _components_prescription_list_prescription_list_component__WEBPACK_IMPORTED_MODULE_34__["PrescriptionListComponent"], _components_transition_page_transition_page_component__WEBPACK_IMPORTED_MODULE_37__["TransitionPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAlertModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_36__["DatePipe"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: initialize,
        deps: [_app_service__WEBPACK_IMPORTED_MODULE_35__["AppService"]],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_30__["ModalComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_data_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/data-loader.service */
    "./src/app/services/data-loader.service.ts");

    var AppService = /*#__PURE__*/function () {
      function AppService(dataStore, dataLoaderService) {
        _classCallCheck(this, AppService);

        this.dataStore = dataStore;
        this.dataLoaderService = dataLoaderService;
      }

      _createClass(AppService, [{
        key: "loadModuleConfigurations",
        value: function loadModuleConfigurations() {}
      }, {
        key: "loadPermissions",
        value: function loadPermissions() {}
      }, {
        key: "userLogin",
        value: function userLogin() {}
      }, {
        key: "loadUserDetails",
        value: function loadUserDetails() {
          this.dataStore.set(_services_data_store_service__WEBPACK_IMPORTED_MODULE_3__["DataKey"].loggedInUser, this.loadUserData(), true);
          sessionStorage.setItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_3__["SessionStorageKeys"].loggedInUser, JSON.stringify(this.loadUserData()));
        }
      }, {
        key: "loadUserDataFromMock",
        value: function loadUserDataFromMock() {
          var data = {
            doctor: true,
            patientData: null,
            doctorData: {
              userName: 'johndoe@gmail.com',
              title: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorTitles"].DR,
              firstName: 'John',
              lastName: 'Doe',
              contactNumber: '+94773092323',
              whatsAppNumber: '+94773092323',
              regNo: 'reg/34234235',
              priceForAppointment: '1650',
              priceCurrency: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["currencyCodes"].LKR,
              qualifications: 'MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India',
              professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON,
              specialityA: 'Pulmonologist',
              specialityB: 'Dermatologist',
              specialityC: '',
              availableForAppointment: 'true'
            }
          };
          return data;
        }
      }, {
        key: "loadUserData",
        value: function loadUserData() {
          var userData = null;
          var url = _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BASE_URL + _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].GET_USER_DATA + 'dfg';
          this.dataLoaderService.get(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"](), new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_3__["DataKey"].loggedInUser).then(function (data) {
            if (data && data.status && data.status.code === 1) {
              userData = data.data[0];
              return userData;
            } else if (data && data.status && data.status.code === -1) {
              return null;
              return {
                "patientData": null,
                "doctorData": {
                  "userName": "dfg",
                  "title": "Dr",
                  "firstName": "John",
                  "lastName": "Doe",
                  "professionalType": "CON",
                  "specialityA": "Pulmonologist",
                  "specialityB": "Dermatologist",
                  "specialityC": "",
                  "regNo": "reg/34234235",
                  "qualifications": "MBBS (India), MS, MCh, MChir, FLT-HPBS, FACS, Kozhikode, India",
                  "priceForAppointment": '',
                  "availableForAppointment": false
                },
                "doctor": true
              };
              return {
                "patientData": {
                  "userName": "kavin88@abc.com",
                  "title": "Mr",
                  "firstName": "Milinda",
                  "lastName": "Sandaruwan",
                  "birthday": "1994-12-31T00:00:00.000+0000",
                  "address": null,
                  "contactNumber": "0123456789",
                  "whatsAppNumber": "0123456789",
                  "userAllergies": "mata allergies nehe",
                  "male": false
                },
                "doctorData": null,
                "doctor": false
              };
            }
          });
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_3__["DataStoreService"]
      }, {
        type: _services_data_loader_service__WEBPACK_IMPORTED_MODULE_5__["DataLoaderService"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/components/booking-enter-time/booking-enter-time.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/booking-enter-time/booking-enter-time.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBookingEnterTimeBookingEnterTimeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nLWVudGVyLXRpbWUvYm9va2luZy1lbnRlci10aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nLWVudGVyLXRpbWUvYm9va2luZy1lbnRlci10aW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/booking-enter-time/booking-enter-time.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/booking-enter-time/booking-enter-time.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: BookingEnterTimeComponent */

  /***/
  function srcAppComponentsBookingEnterTimeBookingEnterTimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingEnterTimeComponent", function () {
      return BookingEnterTimeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_data_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/data-loader.service */
    "./src/app/services/data-loader.service.ts");

    var BookingEnterTimeComponent = /*#__PURE__*/function () {
      function BookingEnterTimeComponent(router, datePipe, dataStore, dataLoaderService) {
        _classCallCheck(this, BookingEnterTimeComponent);

        this.router = router;
        this.datePipe = datePipe;
        this.dataStore = dataStore;
        this.dataLoaderService = dataLoaderService;
        this.transitionType = null;
        this.doctor = {
          id: 1,
          name: 'Dr. Nuwan Chinthaka',
          professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].CON,
          bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
          specialities: ['Consultant Neurologist', 'Consultant Pediatrician'],
          consultationPrice: 'Rs. 2000.00'
        };
        this.availableAppointmentsForProfessional = [];
        this.isScheduleVisible = false;
        this.days = [{
          date: this.getDate(0).date,
          day: this.getDate(0).day,
          available: true
        }, {
          date: this.getDate(1).date,
          day: this.getDate(1).day,
          available: true
        }, {
          date: this.getDate(2).date,
          day: this.getDate(2).day,
          available: true
        }, {
          date: this.getDate(3).date,
          day: this.getDate(3).day,
          available: true
        }, {
          date: this.getDate(4).date,
          day: this.getDate(4).day,
          available: true
        }, {
          date: this.getDate(5).date,
          day: this.getDate(5).day,
          available: true
        }, {
          date: this.getDate(6).date,
          day: this.getDate(6).day,
          available: true
        }];
        this.selectedAppointmentId = '';
        this.consultationTime = '8.00 P.M.';
        this.summaryShown = false;
        this.loggedInUser = null;
        this.showRedirectionMessage = false;
      }

      _createClass(BookingEnterTimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedInUser = JSON.parse(sessionStorage.getItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageKeys"].loggedInUser));
          this.loadProfessional();
          this.loadAvailableAppointmentsForProfessional();
        }
      }, {
        key: "getDate",
        value: function getDate(apart) {
          var today = new Date();
          today.setDate(today.getDate() + apart);
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!

          var yyyy = today.getFullYear();
          var date = mm + '/' + dd + '/' + yyyy;
          var dayNum = today.getDay();
          var day;

          switch (dayNum) {
            case 0:
              day = 'Sunday';
              break;

            case 1:
              day = 'Monday';
              break;

            case 2:
              day = 'Tuesday';
              break;

            case 3:
              day = 'Wednesday';
              break;

            case 4:
              day = 'Thursday';
              break;

            case 5:
              day = 'Friday';
              break;

            case 6:
              day = 'Saturday';
              break;
          }

          return {
            date: date,
            day: day
          };
        }
      }, {
        key: "scheduleVisibilityToggle",
        value: function scheduleVisibilityToggle($event) {
          this.isScheduleVisible = $event;
        }
      }, {
        key: "navigateToPaymentOrLogIn",
        value: function navigateToPaymentOrLogIn() {
          if (!this.loggedInUser) {
            this.transitionType = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["TRANSITION_PAGE_TYPE"].LOGIN_REDIRECT;
            this.showRedirectionMessage = true;
          } else {
            this.router.navigate(['confirmation']).then(function (r) {});
          }
        }
      }, {
        key: "getTimeSlots",
        value: function getTimeSlots(selectedDate) {
          var selectedFullDate = new Date(selectedDate);
          var dummyAppointments = [];
          var found = this.availableAppointmentsForProfessional.find(function (appointmentTime) {
            var appointmentDate = new Date(appointmentTime.date);
            return appointmentDate.getFullYear() === selectedFullDate.getFullYear() && appointmentDate.getMonth() === selectedFullDate.getMonth() && appointmentDate.getDate() === selectedFullDate.getDate();
          });

          if (found && found.dummyAppointments) {
            dummyAppointments = found.dummyAppointments;
            dummyAppointments.forEach(function (app) {
              if (app && app.appointmentTime) {
                var dummyDate = new Date();
                var h = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[0], 10)));
                var m = JSON.parse(JSON.stringify(parseInt(app.appointmentTime.toString().split(':')[1], 10)));
                dummyDate.setHours(h);
                dummyDate.setMinutes(m);
                app.displayAppointmentTime = dummyDate;
              }
            });
          }

          return dummyAppointments;
        }
      }, {
        key: "continueClicked",
        value: function continueClicked($event) {
          this.summaryShown = $event;
        }
      }, {
        key: "loadAvailableAppointmentsForProfessional",
        value: function loadAvailableAppointmentsForProfessional() {
          this.availableAppointmentsForProfessional = [{
            date: '2020-12-26T20:30:00.000+0000',
            dummyAppointments: [{
              appointmentId: 16,
              appointmentTime: '08:00:00',
              timeSlotId: null
            }]
          }, {
            date: '2020-12-27T20:30:00.000+0000',
            dummyAppointments: [{
              appointmentId: 21,
              appointmentTime: '10:00:00',
              timeSlotId: null
            }]
          }, {
            date: '2020-12-25T20:30:00.000+0000',
            dummyAppointments: [{
              appointmentId: 12,
              appointmentTime: '10:00:00',
              timeSlotId: null
            }]
          }];

          if (this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].availableAppointmentsForProfessional).getValue()) {
            this.availableAppointmentsForProfessional = this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].availableAppointmentsForProfessional).getValue();
          }

          this.filterOutUnavailableDays(this.days);
        } // Todo: complete

      }, {
        key: "loadProfessional",
        value: function loadProfessional() {}
      }, {
        key: "filterOutUnavailableDays",
        value: function filterOutUnavailableDays(days) {
          var _this2 = this;

          days.forEach(function (day) {
            if (_this2.getTimeSlots(day.date) && _this2.getTimeSlots(day.date).length > 0) {
              day.available = true;
            } else {
              day.available = false;
            }
          });
        }
      }, {
        key: "getDisplaySelectedTime",
        value: function getDisplaySelectedTime(appointmentId) {
          var _this3 = this;

          var displaySelectedTime = '';

          if (appointmentId) {
            this.availableAppointmentsForProfessional.forEach(function (appointmentArray) {
              if (appointmentArray.dummyAppointments) {
                appointmentArray.dummyAppointments.forEach(function (appointment) {
                  if (appointment && appointment.appointmentId && appointment.appointmentId === parseInt(appointmentId, 10)) {
                    displaySelectedTime = _this3.datePipe.transform(appointment.displayAppointmentTime, 'shortTime');
                  }
                });
              }
            });
          }

          return displaySelectedTime;
        }
      }, {
        key: "goToSearchProfessionals",
        value: function goToSearchProfessionals() {
          this.router.navigate(['searchProfessionals']).then(function (r) {});
        }
      }, {
        key: "logIn",
        value: function logIn() {
          this.router.navigate(['signup']).then(function (r) {});
        }
      }, {
        key: "clickFromTransitionPage",
        value: function clickFromTransitionPage($event) {
          switch ($event) {
            case 'back':
              this.showRedirectionMessage = false;
              break;

            case 'logIn':
              this.logIn();
              this.showRedirectionMessage = false;
              break;
          }
        }
      }]);

      return BookingEnterTimeComponent;
    }();

    BookingEnterTimeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }, {
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataStoreService"]
      }, {
        type: _services_data_loader_service__WEBPACK_IMPORTED_MODULE_6__["DataLoaderService"]
      }];
    };

    BookingEnterTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking-enter-time',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-enter-time.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-enter-time/booking-enter-time.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-enter-time.component.css */
      "./src/app/components/booking-enter-time/booking-enter-time.component.css"))["default"]]
    })], BookingEnterTimeComponent);
    /***/
  },

  /***/
  "./src/app/components/booking-enter/booking-enter.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/booking-enter/booking-enter.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBookingEnterBookingEnterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nLWVudGVyL2Jvb2tpbmctZW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2tpbmctZW50ZXIvYm9va2luZy1lbnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLXN0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/booking-enter/booking-enter.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/booking-enter/booking-enter.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BookingEnterComponent */

  /***/
  function srcAppComponentsBookingEnterBookingEnterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingEnterComponent", function () {
      return BookingEnterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BookingEnterComponent = /*#__PURE__*/function () {
      function BookingEnterComponent(router) {
        _classCallCheck(this, BookingEnterComponent);

        this.router = router;
        this.doctor = {
          id: 1,
          name: 'Dr. Nuwan chinthaka',
          professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON,
          bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
          specialities: ['Consultant Neurologist', 'Consultant Pediatrician'],
          consultationPrice: 'Rs. 2000.00',
          isSkypePreferred: true,
          isWhatsAppPreferred: false
        };
        this.isScheduleVisible = false;
        this.isPatientSkypeAvailable = false;
        this.media = [{
          value: 'skype',
          viewValue: 'Skype'
        }, {
          value: 'whatsapp',
          viewValue: 'Whatsapp'
        }];
      }

      _createClass(BookingEnterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scheduleVisibilityToggle",
        value: function scheduleVisibilityToggle($event) {
          this.isScheduleVisible = $event;
        }
      }, {
        key: "saveSkype",
        value: function saveSkype(b) {//
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['appointmentTime']).then(function (r) {});
        }
      }]);

      return BookingEnterComponent;
    }();

    BookingEnterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BookingEnterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking-enter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-enter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-enter/booking-enter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-enter.component.css */
      "./src/app/components/booking-enter/booking-enter.component.css"))["default"]]
    })], BookingEnterComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-section/chat-section.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/chat-section/chat-section.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatSectionChatSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1zZWN0aW9uL2NoYXQtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/chat-section/chat-section.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/chat-section/chat-section.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChatSectionComponent */

  /***/
  function srcAppComponentsChatSectionChatSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSectionComponent", function () {
      return ChatSectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatSectionComponent = /*#__PURE__*/function () {
      function ChatSectionComponent() {
        _classCallCheck(this, ChatSectionComponent);
      }

      _createClass(ChatSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatSectionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatSectionComponent.prototype, "messageThread", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatSectionComponent.prototype, "patientName", void 0);
    ChatSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-section',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-section/chat-section.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-section.component.css */
      "./src/app/components/chat-section/chat-section.component.css"))["default"]]
    })], ChatSectionComponent);
    /***/
  },

  /***/
  "./src/app/components/common-body/common-body.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/common-body/common-body.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonBodyCommonBodyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-tab-group {\r\n    margin-bottom: 48px;\r\n}\r\n.mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24tYm9keS9jb21tb24tYm9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24tYm9keS9jb21tb24tYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG4ubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/common-body/common-body.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/common-body/common-body.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CommonBodyComponent */

  /***/
  function srcAppComponentsCommonBodyCommonBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonBodyComponent", function () {
      return CommonBodyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommonBodyComponent = /*#__PURE__*/function () {
      function CommonBodyComponent() {
        _classCallCheck(this, CommonBodyComponent);

        this.flow = 2;
      }

      _createClass(CommonBodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onFlowChange",
        value: function onFlowChange($event) {
          this.flow = $event;
        }
      }]);

      return CommonBodyComponent;
    }();

    CommonBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-common-body',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./common-body.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common-body/common-body.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./common-body.component.css */
      "./src/app/components/common-body/common-body.component.css"))["default"]]
    })], CommonBodyComponent);
    /***/
  },

  /***/
  "./src/app/components/contact-page/contact-page.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/contact-page/contact-page.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactPageContactPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/contact-page/contact-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/contact-page/contact-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppComponentsContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactPageComponent = /*#__PURE__*/function () {
      function ContactPageComponent() {
        _classCallCheck(this, ContactPageComponent);

        this.phoneNumber = '0773092511';
        this.email = 'kavin256@gmail.com';
        this.facebook = 'https://www.facebook.com';
      }

      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-page/contact-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-page.component.css */
      "./src/app/components/contact-page/contact-page.component.css"))["default"]]
    })], ContactPageComponent);
    /***/
  },

  /***/
  "./src/app/components/doctor-finance/doctor-finance.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/doctor-finance/doctor-finance.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDoctorFinanceDoctorFinanceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItZmluYW5jZS9kb2N0b3ItZmluYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvY3Rvci1maW5hbmNlL2RvY3Rvci1maW5hbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/doctor-finance/doctor-finance.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/doctor-finance/doctor-finance.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DoctorFinanceComponent */

  /***/
  function srcAppComponentsDoctorFinanceDoctorFinanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorFinanceComponent", function () {
      return DoctorFinanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DoctorFinanceComponent = /*#__PURE__*/function () {
      function DoctorFinanceComponent() {
        _classCallCheck(this, DoctorFinanceComponent);
      }

      _createClass(DoctorFinanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorFinanceComponent;
    }();

    DoctorFinanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-finance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doctor-finance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-finance/doctor-finance.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doctor-finance.component.css */
      "./src/app/components/doctor-finance/doctor-finance.component.css"))["default"]]
    })], DoctorFinanceComponent);
    /***/
  },

  /***/
  "./src/app/components/doctor-profile/doctor-profile.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/doctor-profile/doctor-profile.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDoctorProfileDoctorProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItcHJvZmlsZS9kb2N0b3ItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvY3Rvci1wcm9maWxlL2RvY3Rvci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/doctor-profile/doctor-profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/doctor-profile/doctor-profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DoctorProfileComponent */

  /***/
  function srcAppComponentsDoctorProfileDoctorProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfileComponent", function () {
      return DoctorProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data-loader.service */
    "./src/app/services/data-loader.service.ts");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_data_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/data-handler.service */
    "./src/app/services/data-handler.service.ts");

    var DoctorProfileComponent = /*#__PURE__*/function () {
      function DoctorProfileComponent(router, dataStore, dataHandlerService, dataLoaderService) {
        _classCallCheck(this, DoctorProfileComponent);

        this.router = router;
        this.dataStore = dataStore;
        this.dataHandlerService = dataHandlerService;
        this.dataLoaderService = dataLoaderService; // profileUsername = 'dfg';

        this.editable = false;
        this.loggedInUser = null;
        this.titles = [{
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorTitles"].DR
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorTitles"].MR
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorTitles"].MRS
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorTitles"].MS
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorTitles"].PROF
        }];
        this.doctorTypes = [{
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorType"].CON
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorType"].GEN
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorType"].OTH
        }]; // todo: find a better solution. this is just a duplication. So not good

        this.specializations = _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["specializations"];
      }

      _createClass(DoctorProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedInUser = JSON.parse(sessionStorage.getItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_5__["SessionStorageKeys"].loggedInUser)); // todo: resolve this commented
          // if (this.loggedInUser && this.loggedInUser.doctorData) {
          //   this.userData = this.loggedInUser.doctorData;
          // }

          if (this.loggedInUser && this.loggedInUser) {
            this.userData = this.loggedInUser;
          } // converting professionalType to a user friendly readable format


          if (this.userData && this.userData.professionalType) {
            this.userData.professionalType = this.dataHandlerService.convertProfessionalTypeFromDBFormat(JSON.parse(JSON.stringify(this.userData.professionalType)));
          }
        }
      }, {
        key: "getColor",
        value: function getColor(state) {
          return '#000000';
        }
      }, {
        key: "toggleEditable",
        value: function toggleEditable(editable) {
          this.editable = editable;
        }
      }, {
        key: "saveData",
        value: function saveData() {
          var _this4 = this;

          // converting professionalType to a database readable format
          if (this.userData && this.userData.professionalType) {
            this.userData.professionalType = this.dataHandlerService.convertProfessionalTypeToDBFormat(JSON.parse(JSON.stringify(this.userData.professionalType)));
          }

          var url = _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].BASE_URL + _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].UPDATE_PROFESSIONAL_SPECIFIC_DATA + this.userData.userName;
          this.dataLoaderService.put(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"](), new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_5__["DataKey"].uploadImage, this.userData).then(function (data) {
            if (data && data.status && data.status.code === 1) {
              // console.log('data');
              // console.log(data.data);
              _this4.toggleEditable(false);
            } else if (data && data.status && data.status.code === -1) {// console.log('data null');
              // console.log(data.data);
            }
          });
        }
      }, {
        key: "isConsultant",
        value: function isConsultant(type) {
          return type === _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["DoctorType"].CON;
        }
      }, {
        key: "goToMyAppointments",
        value: function goToMyAppointments() {
          this.router.navigate(['doctor/appointments']).then(function (r) {});
        }
      }, {
        key: "editSchedule",
        value: function editSchedule() {
          this.router.navigate(['doctor/schedule']).then(function (r) {});
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(event) {
          this.selectedImage = event.target.file;
          var formData = new FormData();
          formData.append('image', this.selectedImage);
          formData.append('username', this.userData.userName); // sent request

          var url = _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].BASE_URL + _utils_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].UPLOAD_USER_IMAGE;
          this.dataLoaderService.post(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"](), new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_5__["DataKey"].uploadImage, formData).then(function (data) {
            if (data && data.status && data.status.code === 1) {// console.log('data');
              // console.log(data.data);
            } else if (data && data.status && data.status.code === -1) {// console.log('data null');
              // console.log(data.data);
            }
          });
        }
      }, {
        key: "checkForMandatoryFieldsToActivateProfile",
        value: function checkForMandatoryFieldsToActivateProfile(userData) {
          // currently only the userData.priceForAppointment is checked as a requirement
          return userData && userData.priceForAppointment !== null && userData.priceForAppointment !== undefined && userData.priceForAppointment !== '' && parseInt(userData.priceForAppointment, 10) && parseInt(userData.priceForAppointment, 10) > 0;
        }
      }]);

      return DoctorProfileComponent;
    }();

    DoctorProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_5__["DataStoreService"]
      }, {
        type: _services_data_handler_service__WEBPACK_IMPORTED_MODULE_7__["DataHandlerService"]
      }, {
        type: _services_data_loader_service__WEBPACK_IMPORTED_MODULE_3__["DataLoaderService"]
      }];
    };

    DoctorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doctor-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-profile/doctor-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doctor-profile.component.css */
      "./src/app/components/doctor-profile/doctor-profile.component.css"))["default"]]
    })], DoctorProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/doctor-schedule/doctor-schedule.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/doctor-schedule/doctor-schedule.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDoctorScheduleDoctorScheduleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3Itc2NoZWR1bGUvZG9jdG9yLXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLXNjaGVkdWxlL2RvY3Rvci1zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLXN0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/doctor-schedule/doctor-schedule.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/doctor-schedule/doctor-schedule.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DoctorScheduleComponent */

  /***/
  function srcAppComponentsDoctorScheduleDoctorScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorScheduleComponent", function () {
      return DoctorScheduleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _services_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data-handler.service */
    "./src/app/services/data-handler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_data_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/data-loader.service */
    "./src/app/services/data-loader.service.ts");

    var DoctorScheduleComponent = /*#__PURE__*/function () {
      function DoctorScheduleComponent(router, dataStore, dataLoaderService, dataHandlerService) {
        _classCallCheck(this, DoctorScheduleComponent);

        this.router = router;
        this.dataStore = dataStore;
        this.dataLoaderService = dataLoaderService;
        this.dataHandlerService = dataHandlerService;
        this.profileUsername = 'dfg';
        this.availableForAppointment = true;
        this.DAY_TITLES = new Map([[1, 'Sunday'], [2, 'Monday'], [3, 'Tuesday'], [4, 'Wednesday'], [5, 'Thursday'], [6, 'Friday'], [7, 'Saturday']]);
        this.DEFAULT_AVERAGE_TIME_FOR_APPOINTMENT = 20;
        this.meridian = true;
        this.changeRequestSent = false;
        this.isConfirmationActive = false;
      }

      _createClass(DoctorScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.populateDoctorScheduleData();
          this.populateDoctorScheduleDataByMock();
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          this.updateSchedule();
          var url = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].BASE_URL + _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].UPDATE_PROFESSIONAL_WORK_DATA + this.profileUsername;

          if (this.availableForAppointment) {
            this.dataLoaderService.put(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"](), new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataKey"].uploadImage, this.doctorScheduleData).then(function (data) {
              if (data && data.status && data.status.code === 1) {
                // console.log('data');
                // console.log(data.data);
                _this5.isConfirmationActive = false;
                _this5.changeRequestSent = true;
              } else if (data && data.status && data.status.code === -1) {// console.log('data null');
                // console.log(data.data);
              }
            });
          } else {
            this.dataLoaderService.post(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"](), new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataKey"].uploadImage, this.doctorScheduleData).then(function (data) {
              if (data && data.status && data.status.code === 1) {
                // console.log('data');
                // console.log(data.data);
                _this5.isConfirmationActive = false;
                _this5.changeRequestSent = true;
              } else if (data && data.status && data.status.code === -1) {// console.log('data null');
                // console.log(data.data);
              }
            });
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.isConfirmationActive = false;
          this.changeRequestSent = false;
        }
      }, {
        key: "populateDoctorScheduleData",
        value: function populateDoctorScheduleData() {
          var _this6 = this;

          this.doctorScheduleData = this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataKey"].doctorScheduleData).getValue();

          if (this.doctorScheduleData) {
            this.doctorScheduleData.averageTimeForAppointment = this.doctorScheduleData.averageTimeForAppointment ? this.doctorScheduleData.averageTimeForAppointment : this.DEFAULT_AVERAGE_TIME_FOR_APPOINTMENT;
            this.doctorScheduleData.fixedDoctorDates.forEach(function (doctorDate) {
              doctorDate.title = _this6.DAY_TITLES.get(doctorDate.day);

              if (doctorDate.workingTimePeriods) {
                doctorDate.workingTimePeriods.forEach(function (workingTimePeriod) {
                  workingTimePeriod.endTimeSelected = _this6.dataHandlerService.convertTimeToHoursAndMinutes(workingTimePeriod.endTime);
                  workingTimePeriod.startTimeSelected = _this6.dataHandlerService.convertTimeToHoursAndMinutes(workingTimePeriod.startTime);
                });
              }
            });
          }
        }
      }, {
        key: "populateDoctorScheduleDataByMock",
        value: function populateDoctorScheduleDataByMock() {
          var _this7 = this;

          this.doctorScheduleData = {
            averageTimeForAppointment: 30,
            fixedDoctorDates: [{
              day: 1,
              workingTimePeriods: [{
                startTime: '08:00:00',
                endTime: '10:00:00',
                isActive: true
              }, {
                startTime: '14:00:00',
                endTime: '16:00:00',
                isActive: false
              }, {
                startTime: '17:00:00',
                endTime: '18:00:00',
                isActive: true
              }]
            }, {
              day: 2,
              workingTimePeriods: [{
                startTime: '10:00:00',
                endTime: '11:45:00',
                isActive: true
              }]
            }, {
              day: 3,
              workingTimePeriods: null
            }, {
              day: 4,
              workingTimePeriods: null
            }, {
              day: 5,
              workingTimePeriods: null
            }, {
              day: 6,
              workingTimePeriods: null
            }, {
              day: 7,
              workingTimePeriods: [{
                startTime: '10:00:00',
                endTime: '12:10:00',
                isActive: true
              }, {
                startTime: '13:00:00',
                endTime: '15:10:00',
                isActive: false
              }]
            }]
          };

          if (this.doctorScheduleData) {
            this.doctorScheduleData.averageTimeForAppointment = this.doctorScheduleData.averageTimeForAppointment ? this.doctorScheduleData.averageTimeForAppointment : this.DEFAULT_AVERAGE_TIME_FOR_APPOINTMENT;
            this.doctorScheduleData.fixedDoctorDates.forEach(function (doctorDate) {
              doctorDate.title = _this7.DAY_TITLES.get(doctorDate.day);

              if (doctorDate.workingTimePeriods) {
                doctorDate.workingTimePeriods.forEach(function (workingTimePeriod) {
                  workingTimePeriod.endTimeSelected = _this7.dataHandlerService.convertTimeToHoursAndMinutes(workingTimePeriod.endTime);
                  workingTimePeriod.startTimeSelected = _this7.dataHandlerService.convertTimeToHoursAndMinutes(workingTimePeriod.startTime);
                });
              }
            });
          }
        }
      }, {
        key: "updateSchedule",
        value: function updateSchedule() {
          var _this8 = this;

          // from hours and minutes to date
          if (this.doctorScheduleData) {
            this.doctorScheduleData.fixedDoctorDates.forEach(function (doctorDate) {
              if (doctorDate.workingTimePeriods) {
                doctorDate.workingTimePeriods.forEach(function (workingTimePeriod) {
                  workingTimePeriod.endTime = _this8.dataHandlerService.convertHoursAndMinutesToTime(workingTimePeriod.endTimeSelected);
                  workingTimePeriod.startTime = _this8.dataHandlerService.convertHoursAndMinutesToTime(workingTimePeriod.startTimeSelected);
                });
              }
            });
          }
        }
      }, {
        key: "userConsent",
        value: function userConsent() {
          this.isConfirmationActive = !this.isConfirmationActive;
        }
      }, {
        key: "goToProfessionalDashboard",
        value: function goToProfessionalDashboard() {
          this.router.navigate(['doctor/dashboard']).then(function (r) {});
        }
      }]);

      return DoctorScheduleComponent;
    }();

    DoctorScheduleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"]
      }, {
        type: _services_data_loader_service__WEBPACK_IMPORTED_MODULE_7__["DataLoaderService"]
      }, {
        type: _services_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["DataHandlerService"]
      }];
    };

    DoctorScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doctor-schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-schedule/doctor-schedule.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doctor-schedule.component.css */
      "./src/app/components/doctor-schedule/doctor-schedule.component.css"))["default"]]
    })], DoctorScheduleComponent);
    /***/
  },

  /***/
  "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDoctorSideBookingListDoctorSideBookingListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n.strikethrough {\r\n    text-decoration: line-through;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3Itc2lkZS1ib29raW5nLWxpc3QvZG9jdG9yLXNpZGUtYm9va2luZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvY3Rvci1zaWRlLWJvb2tpbmctbGlzdC9kb2N0b3Itc2lkZS1ib29raW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG4uc3RyaWtldGhyb3VnaCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: DoctorSideBookingListComponent, BookingStatus, Colors */

  /***/
  function srcAppComponentsDoctorSideBookingListDoctorSideBookingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorSideBookingListComponent", function () {
      return DoctorSideBookingListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingStatus", function () {
      return BookingStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Colors", function () {
      return Colors;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DoctorSideBookingListComponent = /*#__PURE__*/function () {
      function DoctorSideBookingListComponent() {
        _classCallCheck(this, DoctorSideBookingListComponent);

        this.RESULTS_PER_PAGE = 5;
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.bookingListSlot1 = {
          startTime: '07.00 A.M.',
          endTime: '12.00 P.M.',
          bookings: [{
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 1196,
            patientId: '65456',
            patientName: 'Sumanasiri',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }]
        };
        this.bookingListSlot2 = {
          startTime: '02.00 P.M.',
          endTime: '04.00 P.M.',
          bookings: [{
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 1196,
            patientId: '65456',
            patientName: 'Sumanasiri',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 1196,
            patientId: '65456',
            patientName: 'Sumanasiri',
            bookingStatus: BookingStatus.BOOKING_CANCELLED
          }, {
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }]
        };
        this.bookingListSlot3 = {
          startTime: '08.00 P.M.',
          endTime: '10.00 P.M.',
          bookings: [{
            bookingId: 2387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_COMPLETED
          }, {
            bookingId: 1196,
            patientId: '65456',
            patientName: 'Sumanasiri',
            bookingStatus: BookingStatus.BOOKING_CURRENT
          }, {
            bookingId: 2383,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_NOT_STARTED
          }, {
            bookingId: 2367,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_NOT_STARTED
          }, {
            bookingId: 1156,
            patientId: '65456',
            patientName: 'Sumanasiri',
            bookingStatus: BookingStatus.BOOKING_NOT_STARTED
          }, {
            bookingId: 4387,
            patientId: '76531',
            patientName: 'John Doe',
            bookingStatus: BookingStatus.BOOKING_NOT_STARTED
          }]
        };
        this.visible = false;
        this.bookingSlotListVisible = true;
        this.overTheAppointmentCard = null;
      }

      _createClass(DoctorSideBookingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedSlot = this.bookingListSlot2;
        }
      }, {
        key: "selectBooking",
        value: function selectBooking($event) {
          console.log($event);
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter($event) {
          this.overTheAppointmentCard = $event;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.overTheAppointmentCard = null;
        }
      }, {
        key: "isOverTheAppointmentCard",
        value: function isOverTheAppointmentCard($event) {
          return $event === this.overTheAppointmentCard;
        } // selectProfessional_($event: number) {
        //   this.selectProfessional.emit($event);
        // }

      }, {
        key: "getColor",
        value: function getColor($event) {
          switch ($event) {
            case BookingStatus.BOOKING_CANCELLED:
              return Colors.BOOKING_CANCELLED;

            case BookingStatus.BOOKING_NOT_STARTED:
              return Colors.BOOKING_NOT_STARTED;

            case BookingStatus.BOOKING_COMPLETED:
              return Colors.BOOKING_COMPLETED;

            case BookingStatus.BOOKING_CURRENT:
              return Colors.BOOKING_CURRENT;

            default:
              return Colors.BOOKING_NOT_STARTED;
          }
        }
      }, {
        key: "selectSlot",
        value: function selectSlot(slot) {
          this.selectedSlot = slot;
          this.bookingSlotListVisible = !this.bookingSlotListVisible;
        }
      }, {
        key: "goToPage",
        value: function goToPage($event) {
          this.PAGINATION_START = $event.pageIndex * $event.pageSize;
          this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
        }
      }]);

      return DoctorSideBookingListComponent;
    }();

    DoctorSideBookingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-side-booking-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doctor-side-booking-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doctor-side-booking-list.component.css */
      "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.css"))["default"]]
    })], DoctorSideBookingListComponent);
    var BookingStatus;

    (function (BookingStatus) {
      BookingStatus["BOOKING_CANCELLED"] = "BOOKING_CANCELLED";
      BookingStatus["BOOKING_COMPLETED"] = "BOOKING_COMPLETED";
      BookingStatus["BOOKING_CURRENT"] = "BOOKING_CURRENT";
      BookingStatus["BOOKING_NOT_STARTED"] = "BOOKING_NOT_STARTED";
    })(BookingStatus || (BookingStatus = {}));

    var Colors;

    (function (Colors) {
      Colors["BOOKING_CANCELLED"] = "#ff6666";
      Colors["BOOKING_COMPLETED"] = "#e6e6e6";
      Colors["BOOKING_CURRENT"] = "#99ccff";
      Colors["BOOKING_NOT_STARTED"] = "#d5ff80";
    })(Colors || (Colors = {}));
    /***/

  },

  /***/
  "./src/app/components/doctor-side-booking/doctor-side-booking.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/doctor-side-booking/doctor-side-booking.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDoctorSideBookingDoctorSideBookingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3Itc2lkZS1ib29raW5nL2RvY3Rvci1zaWRlLWJvb2tpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3Itc2lkZS1ib29raW5nL2RvY3Rvci1zaWRlLWJvb2tpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/doctor-side-booking/doctor-side-booking.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/doctor-side-booking/doctor-side-booking.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DoctorSideBookingComponent */

  /***/
  function srcAppComponentsDoctorSideBookingDoctorSideBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorSideBookingComponent", function () {
      return DoctorSideBookingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../doctor-side-booking-list/doctor-side-booking-list.component */
    "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.ts");

    var DoctorSideBookingComponent = /*#__PURE__*/function () {
      function DoctorSideBookingComponent() {
        _classCallCheck(this, DoctorSideBookingComponent);

        this.inProgress = false;
        this.isConfirmationActive = false;
        this.changeRequestSent = false;
        this.booking = {
          id: 2387,
          createdDateTime: new Date(2020, 4, 20, 10, 45),
          appointmentDateTime: new Date(2020, 4, 21, 10, 0),
          durationInMinutes: 15,
          status: _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_NOT_STARTED,
          price: 'Rs. 2000.00',
          doctorNotes: [],
          userNotes: [],
          cancellationRule: '',
          messageThread: [{
            sender: 'doctor',
            message: 'jhbsdkcsd'
          }, {
            sender: 'patient',
            message: 'jhbsdddfdfdkcsd'
          }, {
            sender: 'doctor',
            message: 'hgvbhashjd'
          }]
        };
        this.patient = {
          patientId: '76531',
          patientName: 'Mr. John Doe',
          contactNumber: '0773092511',
          whatsAppNumber: '0773092511',
          email: 'kavin256@gmail.com',
          birthday: new Date(1993, 4, 21).toLocaleDateString('en-US'),
          age: 33,
          knownAllergies: 'allergic to bad music, allergic to negative people'
        };
        this.doctor = {
          doctorId: '4352545235',
          doctorName: 'Dr. Tim Cook'
        };
        this.isPatientDetailsShown = true;
      }

      _createClass(DoctorSideBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "userConsent",
        value: function userConsent() {
          this.isConfirmationActive = !this.isConfirmationActive;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          // this.updateSchedule();
          this.isConfirmationActive = false;
          this.changeRequestSent = true;
          this.booking.status = _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_CANCELLED;
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.isConfirmationActive = false;
          this.changeRequestSent = false;
        }
      }]);

      return DoctorSideBookingComponent;
    }();

    DoctorSideBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-side-booking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./doctor-side-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-side-booking/doctor-side-booking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./doctor-side-booking.component.css */
      "./src/app/components/doctor-side-booking/doctor-side-booking.component.css"))["default"]]
    })], DoctorSideBookingComponent);
    /***/
  },

  /***/
  "./src/app/components/faqs/faqs.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/faqs/faqs.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFaqsFaqsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXFzL2ZhcXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXFzL2ZhcXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/faqs/faqs.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/faqs/faqs.component.ts ***!
    \***************************************************/

  /*! exports provided: FaqsComponent */

  /***/
  function srcAppComponentsFaqsFaqsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsComponent", function () {
      return FaqsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FaqsComponent = /*#__PURE__*/function () {
      function FaqsComponent() {
        _classCallCheck(this, FaqsComponent);

        this.faqs = [{
          q: 'How can I contact the doctor after placing a booking successfully?',
          a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
        }, {
          q: 'How can I contact the doctor after placing a booking successfully?',
          a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
        }, {
          q: 'How can I contact the doctor after placing a booking successfully?',
          a: 'Doctor will call you via Skype. When your booking number is near, make sure the doctor can reach you via Skype'
        }];
      }

      _createClass(FaqsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqsComponent;
    }();

    FaqsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faqs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faqs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/faqs/faqs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faqs.component.css */
      "./src/app/components/faqs/faqs.component.css"))["default"]]
    })], FaqsComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-footer {\r\n    min-height: 150px;\r\n    min-width: 320px;\r\n    width: 100%;\r\n    bottom: 0;\r\n    /*background: #d3d1d1;*/\r\n    /*background-color: #d3d1d1; !* For browsers that do not support gradients *!*/\r\n    background-image: linear-gradient(#ffffff, #b4b2b2); /* Standard syntax (must be last) */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLDhFQUE4RTtJQUM5RSxtREFBbUQsRUFBRSxtQ0FBbUM7QUFDNUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtZm9vdGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgLypiYWNrZ3JvdW5kOiAjZDNkMWQxOyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNkM2QxZDE7ICEqIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqISovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2I0YjJiMik7IC8qIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAqL1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentYear = new Date().getFullYear();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-logo {\r\n    padding-top: 60px;\r\n    padding-bottom: 50px;\r\n}\r\nbutton.link { background:none; border:none; }\r\n.mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0EsY0FBYyxlQUFlLEVBQUUsV0FBVyxFQUFFO0FBQzVDO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1sb2dvIHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuYnV0dG9uLmxpbmsgeyBiYWNrZ3JvdW5kOm5vbmU7IGJvcmRlcjpub25lOyB9XHJcbi5tYXQtY2FyZC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header.component.css */
    "./src/app/components/header/header.component.css");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _services_data_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/data-handler.service */
    "./src/app/services/data-handler.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(dataHandlerService, router, dataStore) {
        _classCallCheck(this, HeaderComponent);

        this.dataHandlerService = dataHandlerService;
        this.router = router;
        this.dataStore = dataStore;
        this.signUpResultObject = {
          isSignUp: undefined,
          userType: undefined
        };
        this.loggedInUser = null;
        this.user = null;
        this.isSignUp = true;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageKeys"].loggedInUser)) {
            this.loggedInUser = JSON.parse(sessionStorage.getItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageKeys"].loggedInUser));
          }

          this.firstName = null;

          if (this.loggedInUser) {
            this.firstName = this.setFirstName(this.loggedInUser);
          }

          if (this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].signUpResultObject).getValue()) {
            this.signUpResultObject = this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].signUpResultObject).getValue();
            this.userType = this.signUpResultObject.userType;
            this.isSignUp = this.signUpResultObject.isSignUp;
          }
        }
      }, {
        key: "logoClick",
        value: function logoClick() {
          if (this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].signUpResultObject).getValue()) {
            this.signUpResultObject = this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].signUpResultObject).getValue();
            this.userType = this.signUpResultObject.userType;
            this.isSignUp = this.signUpResultObject.isSignUp;
          }

          if (this.loggedInUser && this.loggedInUser.doctor !== null && this.loggedInUser.doctor) {
            this.router.navigate(['doctor/dashboard']).then(function (r) {});
          } else if (this.loggedInUser && this.loggedInUser.doctor !== null && !this.loggedInUser.doctor) {
            this.router.navigate(['user/dashboard']).then(function (r) {});
          } else {
            this.router.navigate(['signup']).then(function (r) {});
          }
        }
      }, {
        key: "goToHomePage",
        value: function goToHomePage() {
          this.router.navigate(['/']).then(function (r) {});
        }
      }, {
        key: "setFirstName",
        value: function setFirstName(loggedInUser) {
          var fName = null;

          if (loggedInUser && loggedInUser.doctor) {
            // todo: uncomment
            // fName = loggedInUser.doctorData.firstName;
            fName = loggedInUser.firstName;
          } else if (loggedInUser && !loggedInUser.doctor) {
            // todo: uncomment
            // fName = loggedInUser.patientData.firstName;
            fName = loggedInUser.firstName;
          }

          return fName;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_data_handler_service__WEBPACK_IMPORTED_MODULE_5__["DataHandlerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataStoreService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/landing-page/landing-page.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/landing-page/landing-page.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLandingPageLandingPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    max-width: 640px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/landing-page/landing-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/landing-page/landing-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppComponentsLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data-loader.service */
    "./src/app/services/data-loader.service.ts");
    /* harmony import */


    var _models_auth_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/auth-model */
    "./src/app/models/auth-model.ts");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _models_request_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/request-options */
    "./src/app/models/request-options.ts");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(router, dataLoader, dataStore) {
        _classCallCheck(this, LandingPageComponent);

        this.router = router;
        this.dataLoader = dataLoader;
        this.dataStore = dataStore;
        this.emitFlowChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.flow && changes.flow.currentValue) {
            this.flow = changes.flow.currentValue;
          }
        }
      }, {
        key: "goToSearchPage",
        value: function goToSearchPage() {
          this.router.navigate(['searchProfessionals']).then(function (r) {});
          var obj = new _models_auth_model__WEBPACK_IMPORTED_MODULE_4__["AuthModel"]();
          obj.username = 'foo12345';
          obj.password = 'foo';
          this.dataLoader.login(_utils_Constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].BASE_URL + '/authenticate', new _models_request_options__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"](), obj, _services_data_store_service__WEBPACK_IMPORTED_MODULE_5__["DataKey"].authKey);
          this.dataStore.get(_services_data_store_service__WEBPACK_IMPORTED_MODULE_5__["DataKey"].authKey, true).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_data_loader_service__WEBPACK_IMPORTED_MODULE_3__["DataLoaderService"]
      }, {
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_5__["DataStoreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LandingPageComponent.prototype, "flow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LandingPageComponent.prototype, "emitFlowChange", void 0);
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing-page.component.css */
      "./src/app/components/landing-page/landing-page.component.css"))["default"]]
    })], LandingPageComponent);
    /***/
  },

  /***/
  "./src/app/components/modal/modal.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/modal/modal.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/modal/modal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/modal/modal.component.ts ***!
    \*****************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(router, data) {
        _classCallCheck(this, ModalComponent);

        this.router = router;
        this.clickEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalType = data.modalType;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalComponent.prototype, "modalType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModalComponent.prototype, "clickEmitter", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.css */
      "./src/app/components/modal/modal.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ModalComponent);
    /***/
  },

  /***/
  "./src/app/components/page-title/page-title.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/page-title/page-title.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageTitlePageTitleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/page-title/page-title.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/page-title/page-title.component.ts ***!
    \***************************************************************/

  /*! exports provided: PageTitleComponent */

  /***/
  function srcAppComponentsPageTitlePageTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function () {
      return PageTitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageTitleComponent = /*#__PURE__*/function () {
      function PageTitleComponent() {
        _classCallCheck(this, PageTitleComponent);
      }

      _createClass(PageTitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageTitleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageTitleComponent.prototype, "title", void 0);
    PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-title',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-title.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-title/page-title.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-title.component.css */
      "./src/app/components/page-title/page-title.component.css"))["default"]]
    })], PageTitleComponent);
    /***/
  },

  /***/
  "./src/app/components/patient-booking-list/patient-booking-list.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/patient-booking-list/patient-booking-list.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPatientBookingListPatientBookingListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n.strikethrough {\r\n    text-decoration: line-through;\r\n}\r\n.mat-radio-button ~ .mat-radio-button {\r\n    margin-left: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50LWJvb2tpbmctbGlzdC9wYXRpZW50LWJvb2tpbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhdGllbnQtYm9va2luZy1saXN0L3BhdGllbnQtYm9va2luZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuLnN0cmlrZXRocm91Z2gge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/patient-booking-list/patient-booking-list.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/patient-booking-list/patient-booking-list.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PatientBookingListComponent */

  /***/
  function srcAppComponentsPatientBookingListPatientBookingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientBookingListComponent", function () {
      return PatientBookingListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../doctor-side-booking-list/doctor-side-booking-list.component */
    "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.ts");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PatientBookingListComponent = /*#__PURE__*/function () {
      function PatientBookingListComponent(router) {
        _classCallCheck(this, PatientBookingListComponent);

        this.router = router;
        this.currentDate = new Date();
        this.RESULTS_PER_PAGE = 5;
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.bookings = [{
          bookingId: 2387,
          doctorId: '76531',
          date: '03-04-2020',
          doctorName: 'Dr. John Doe',
          bookingStatus: _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_COMPLETED
        }, {
          bookingId: 1196,
          doctorId: '65456',
          date: '18-05-2020',
          doctorName: 'Dr. Sumanasiri',
          bookingStatus: _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_CANCELLED
        }, {
          bookingId: 5729,
          doctorId: '76537',
          date: '02-05-2020',
          doctorName: 'Dr. Tom Harrison',
          bookingStatus: _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_NOT_STARTED
        }];
        this.title = 'MY BOOKINGS';
        this.titleBooking = 'BOOKING';
        this.selectedBookingId = null;
        this.showBookings = 'all'; // 'new' or 'all'

        this.doctor = {
          id: 2,
          name: 'Dr. Punya Anupama',
          professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].GEN,
          bio: 'MBBS [COLOMBO](1998)',
          specialities: ['Consultant Pathologist'],
          consultationPrice: 'Rs. 1500.00'
        };
        this.booking = {
          bookingId: 2387,
          doctorId: '4352545235',
          patientId: '76531',
          doctorName: 'Dr. Tim Cook',
          patientName: 'John Doe',
          patientAge: 29,
          skypeID: 'kafkjnf34',
          phoneNumber: '0773092511',
          bookingStatus: _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_NOT_STARTED,
          messageThread: [{
            sender: 'patient',
            message: 'Hi doctor, I have a headache and a cough.'
          }, {
            sender: 'doctor',
            message: 'Hi John, do you have any allergies?'
          }, {
            sender: 'patient',
            message: 'I\'m allergic to panadol'
          }, {
            sender: 'doctor',
            message: 'Thanks.'
          }, {
            sender: 'patient',
            message: 'THANK YOU DOC!.'
          }, {
            sender: 'patient',
            message: 'Can you send me a prescription btw?'
          }, {
            sender: 'doctor',
            message: 'Sure. I will send you.'
          }, {
            sender: 'patient',
            message: 'Awesome. Thanks'
          }],
          bookingPrice: 'Rs. 2000.00',
          doctorCharge: 'Rs. 1800.00'
        };
        this.isConfirmationActive = false;
        this.changeRequestSent = false;
        this.items = ['Augmentine 625mg bd - 5 days', 'Omeprazole 20mg bd - 5 days', 'Fexofenadine 180mg 1 night - 5 days'];
        this.prescriptionList = [{
          prescription: ['Augmentine 625mg bd - 5 days', 'Omeprazole 20mg bd - 5 days', 'Fexofenadine 180mg 1 night - 5 days']
        }, {
          prescription: ['Augmentine 625mg bd - 5 days', 'Omeprazole 20mg bd - 5 days', 'Fexofenadine 180mg 1 night - 5 days']
        }];
        this.isPrescriptionsVisible = false;
        this.selectedPrescription = null;
      }

      _createClass(PatientBookingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectBooking",
        value: function selectBooking($event) {
          this.selectedBookingId = $event;
        }
      }, {
        key: "getColor",
        value: function getColor($event) {
          switch ($event) {
            case _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_CANCELLED:
              return _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["Colors"].BOOKING_CANCELLED;

            case _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_NOT_STARTED:
              return _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["Colors"].BOOKING_NOT_STARTED;

            case _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_COMPLETED:
              return _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["Colors"].BOOKING_COMPLETED;

            case _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_CURRENT:
              return _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["Colors"].BOOKING_CURRENT;

            default:
              return _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["Colors"].BOOKING_NOT_STARTED;
          }
        }
      }, {
        key: "save",
        value: function save() {
          this.isConfirmationActive = false;
          this.changeRequestSent = true;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.isConfirmationActive = false;
          this.changeRequestSent = false;
        }
      }, {
        key: "selectPrescription",
        value: function selectPrescription(prescription) {
          this.selectedPrescription = prescription;
        }
      }, {
        key: "showPrescriptions",
        value: function showPrescriptions(bookingId, action) {
          this.isPrescriptionsVisible = action;
        }
      }, {
        key: "goToUserDashboard",
        value: function goToUserDashboard() {
          this.PAGINATION_START = 0;
          this.PAGINATION_END = this.RESULTS_PER_PAGE;
          this.router.navigate(['user/dashboard']).then(function (r) {});
        }
      }, {
        key: "goToPage",
        value: function goToPage($event) {
          this.PAGINATION_START = $event.pageIndex * $event.pageSize;
          this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
        }
      }, {
        key: "newBooking",
        value: function newBooking() {
          this.router.navigate(['searchProfessionals']).then(function (r) {});
        }
      }]);

      return PatientBookingListComponent;
    }();

    PatientBookingListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    PatientBookingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-booking-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-booking-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-booking-list/patient-booking-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-booking-list.component.css */
      "./src/app/components/patient-booking-list/patient-booking-list.component.css"))["default"]]
    })], PatientBookingListComponent);
    /***/
  },

  /***/
  "./src/app/components/patient-profile/patient-profile.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/patient-profile/patient-profile.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPatientProfilePatientProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50LXByb2ZpbGUvcGF0aWVudC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1wcm9maWxlL3BhdGllbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLXN0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/patient-profile/patient-profile.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/patient-profile/patient-profile.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PatientProfileComponent */

  /***/
  function srcAppComponentsPatientProfilePatientProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function () {
      return PatientProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PatientProfileComponent = /*#__PURE__*/function () {
      function PatientProfileComponent(router) {
        _classCallCheck(this, PatientProfileComponent);

        this.router = router;
        this.patient = {
          id: 1,
          title: 'Mr.',
          birthday: '03-05-1994',
          age: 31,
          name: 'John Doe',
          medicalHistory: 'long term gastritis patient',
          allergies: 'allergic to hindi songs'
        };
        this.titles = [{
          value: 'Dr.'
        }, {
          value: 'Mr.'
        }, {
          value: 'Mrs.'
        }, {
          value: 'Ms.'
        }, {
          value: 'Prof.'
        }];
        this.title = 'MY PROFILE';
        this.editable = false;
      }

      _createClass(PatientProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToMyAppointments",
        value: function goToMyAppointments() {
          this.router.navigate(['user/appointments']).then(function (r) {});
        }
      }, {
        key: "toggleEditable",
        value: function toggleEditable(editable) {
          this.editable = editable;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.clear(); // location.reload();

          this.router.navigate(['signup']).then(function (r) {});
        }
      }]);

      return PatientProfileComponent;
    }();

    PatientProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PatientProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-profile.component.css */
      "./src/app/components/patient-profile/patient-profile.component.css"))["default"]]
    })], PatientProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/payment-success/payment-success.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/payment-success/payment-success.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPaymentSuccessPaymentSuccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50LXN1Y2Nlc3MvcGF5bWVudC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLXN0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/payment-success/payment-success.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/payment-success/payment-success.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PaymentSuccessComponent */

  /***/
  function srcAppComponentsPaymentSuccessPaymentSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function () {
      return PaymentSuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaymentSuccessComponent = /*#__PURE__*/function () {
      function PaymentSuccessComponent() {
        _classCallCheck(this, PaymentSuccessComponent);
      }

      _createClass(PaymentSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentSuccessComponent;
    }();

    PaymentSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment-success',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-success.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-success/payment-success.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment-success.component.css */
      "./src/app/components/payment-success/payment-success.component.css"))["default"]]
    })], PaymentSuccessComponent);
    /***/
  },

  /***/
  "./src/app/components/prescription-list/prescription-list.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/prescription-list/prescription-list.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPrescriptionListPrescriptionListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVzY3JpcHRpb24tbGlzdC9wcmVzY3JpcHRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZXNjcmlwdGlvbi1saXN0L3ByZXNjcmlwdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/prescription-list/prescription-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/prescription-list/prescription-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PrescriptionListComponent */

  /***/
  function srcAppComponentsPrescriptionListPrescriptionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrescriptionListComponent", function () {
      return PrescriptionListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PrescriptionListComponent = /*#__PURE__*/function () {
      function PrescriptionListComponent(router) {
        _classCallCheck(this, PrescriptionListComponent);

        this.router = router;
      }

      _createClass(PrescriptionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isDoctor = true; // this.isDoctor = false;

          this.prescriptionList = new Array();
          this.prescriptionList.push({
            appointmentNumber: 356,
            prescriptionTimeStamp: new Date(2020, 3, 2, 9, 45)
          });
          this.prescriptionList.push({
            appointmentNumber: 423,
            prescriptionTimeStamp: new Date(2020, 3, 2, 10, 30)
          });
          this.prescriptionList.push({
            appointmentNumber: 987,
            prescriptionTimeStamp: new Date(2020, 3, 2, 11, 20)
          });
        }
      }, {
        key: "selectPrescription",
        value: function selectPrescription() {
          this.router.navigate(['appointment/prescription']).then(function (r) {});
        }
      }]);

      return PrescriptionListComponent;
    }();

    PrescriptionListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PrescriptionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prescription-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prescription-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prescription-list/prescription-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prescription-list.component.css */
      "./src/app/components/prescription-list/prescription-list.component.css"))["default"]]
    })], PrescriptionListComponent);
    /***/
  },

  /***/
  "./src/app/components/prescription/prescription.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/prescription/prescription.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPrescriptionPrescriptionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVzY3JpcHRpb24vcHJlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVzY3JpcHRpb24vcHJlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/prescription/prescription.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/prescription/prescription.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PrescriptionComponent */

  /***/
  function srcAppComponentsPrescriptionPrescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrescriptionComponent", function () {
      return PrescriptionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../doctor-side-booking-list/doctor-side-booking-list.component */
    "./src/app/components/doctor-side-booking-list/doctor-side-booking-list.component.ts");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PrescriptionComponent = /*#__PURE__*/function () {
      function PrescriptionComponent(router) {
        _classCallCheck(this, PrescriptionComponent);

        this.router = router;
        this.currentDate = new Date();
        this.doctor = {
          id: 2,
          name: 'Dr. Punya Anupama',
          professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].GEN,
          bio: 'MBBS [COLOMBO](1998)',
          specialities: ['Consultant Pathologist'],
          consultationPrice: 'Rs. 1500.00'
        };
        this.booking = {
          bookingId: 2387,
          doctorId: '4352545235',
          patientId: '76531',
          doctorName: 'Dr. Tim Cook',
          patientTitle: 'Mr',
          patientAge: 29,
          patientName: 'John Doe',
          skypeID: 'kafkjnf34',
          phoneNumber: '0773092511',
          bookingStatus: _doctor_side_booking_list_doctor_side_booking_list_component__WEBPACK_IMPORTED_MODULE_2__["BookingStatus"].BOOKING_NOT_STARTED,
          messageThread: [{
            sender: 'patient',
            message: 'Hi doctor, I have a headache and a cough.'
          }, {
            sender: 'doctor',
            message: 'Hi John, do you have any allergies?'
          }, {
            sender: 'patient',
            message: 'I\'m allergic to panadol'
          }, {
            sender: 'doctor',
            message: 'Thanks.'
          }, {
            sender: 'patient',
            message: 'THANK YOU DOC!.'
          }, {
            sender: 'patient',
            message: 'Can you send me a prescription btw?'
          }, {
            sender: 'doctor',
            message: 'Sure. I will send you.'
          }, {
            sender: 'patient',
            message: 'Awesome. Thanks'
          }],
          bookingPrice: 'Rs. 2000.00',
          doctorCharge: 'Rs. 1800.00'
        };
        this.items = ['Augmentine 625mg bd - 5 days', 'Omeprazole 20mg bd - 5 days', 'Fexofenadine 180mg 1 night - 5 days'];
        this.preview = false;
        this.prescriptionList = ['', ''];
      }

      _createClass(PrescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "copyToClipBoard",
        value: function copyToClipBoard() {
          var copyText = document.getElementById('skypeId'); // @ts-ignore

          copyText.select();
          document.execCommand('copy'); // @ts-ignore

          alert('Copied the text: ' + copyText.value);
        }
      }, {
        key: "previewToggle",
        value: function previewToggle($event) {
          if ($event === 'preview') {
            this.preview = true;
          } else {
            this.preview = false;
          }
        }
      }, {
        key: "SavePDF",
        value: function SavePDF() {// var pdf = new jsPDF('p','pt','a4');
          // pdf.html2pdf(document.getElementById('pdfTable'), function() {
          //   pdf.save('pdfTable.pdf');
          // });
        }
      }, {
        key: "goToAppointmentList",
        value: function goToAppointmentList(b) {
          this.router.navigate(['appointment/prescriptionList']).then(function (r) {});
        }
      }]);

      return PrescriptionComponent;
    }();

    PrescriptionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('test', {
      "static": true
    })], PrescriptionComponent.prototype, "el", void 0);
    PrescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prescription',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prescription.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prescription/prescription.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prescription.component.css */
      "./src/app/components/prescription/prescription.component.css"))["default"]]
    })], PrescriptionComponent);
    /***/
  },

  /***/
  "./src/app/components/professional-card/professional-card.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/professional-card/professional-card.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfessionalCardProfessionalCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmVzc2lvbmFsLWNhcmQvcHJvZmVzc2lvbmFsLWNhcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/professional-card/professional-card.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/professional-card/professional-card.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProfessionalCardComponent */

  /***/
  function srcAppComponentsProfessionalCardProfessionalCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessionalCardComponent", function () {
      return ProfessionalCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");

    var ProfessionalCardComponent = /*#__PURE__*/function () {
      function ProfessionalCardComponent() {
        _classCallCheck(this, ProfessionalCardComponent);

        this.selectProfessional = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.overTheDoctorCard = null;
        this.currency = _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["currencyCodes"].LKR;
      }

      _createClass(ProfessionalCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter($event) {
          this.overTheDoctorCard = $event;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.overTheDoctorCard = null;
        }
      }, {
        key: "isOverTheDoctorCard",
        value: function isOverTheDoctorCard($event) {
          return $event === this.overTheDoctorCard;
        }
      }, {
        key: "selectProfessional_",
        value: function selectProfessional_($event) {
          this.selectProfessional.emit($event);
        }
      }]);

      return ProfessionalCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfessionalCardComponent.prototype, "professional", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProfessionalCardComponent.prototype, "selectProfessional", void 0);
    ProfessionalCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-professional-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./professional-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/professional-card/professional-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./professional-card.component.css */
      "./src/app/components/professional-card/professional-card.component.css"))["default"]]
    })], ProfessionalCardComponent);
    /***/
  },

  /***/
  "./src/app/components/search-professionals-main/search-professionals-main.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/search-professionals-main/search-professionals-main.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchProfessionalsMainSearchProfessionalsMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcHJvZmVzc2lvbmFscy1tYWluL3NlYXJjaC1wcm9mZXNzaW9uYWxzLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcHJvZmVzc2lvbmFscy1tYWluL3NlYXJjaC1wcm9mZXNzaW9uYWxzLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/search-professionals-main/search-professionals-main.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/search-professionals-main/search-professionals-main.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SearchProfessionalsMainComponent */

  /***/
  function srcAppComponentsSearchProfessionalsMainSearchProfessionalsMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProfessionalsMainComponent", function () {
      return SearchProfessionalsMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _services_data_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/data-handler.service */
    "./src/app/services/data-handler.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _services_data_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/data-loader.service */
    "./src/app/services/data-loader.service.ts");

    var SearchProfessionalsMainComponent = /*#__PURE__*/function () {
      function SearchProfessionalsMainComponent(router, dataStore, dataLoaderService, dataHandlerService) {
        _classCallCheck(this, SearchProfessionalsMainComponent);

        this.router = router;
        this.dataStore = dataStore;
        this.dataLoaderService = dataLoaderService;
        this.dataHandlerService = dataHandlerService;
        this.searchString = null;
        this.professionalList = null;
        this.RESULTS_PER_PAGE = 10;
        this.PAGINATION_START = 0;
        this.PAGINATION_END = this.RESULTS_PER_PAGE;
        this.selectedCategory = null;
        this.selectedSpecialization = null;
        this.categories = [{
          category: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].CON
        }, {
          category: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].GEN
        }, {
          category: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].COUN
        }, {
          category: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].OTH
        }];
        this.specializations = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["specializations"];
      }

      _createClass(SearchProfessionalsMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.InitialSearch();
        }
      }, {
        key: "search",
        value: function search(searchString, selectedCategory, selectedSpecialization) {
          var _this9 = this;

          this.PAGINATION_START = 0;
          this.PAGINATION_END = this.RESULTS_PER_PAGE;

          if (!this.searchString && !this.selectedCategory && !this.selectedSpecialization) {
            this.InitialSearch();
          } else {
            // General Practitioners don't have a specialization
            if (this.selectedCategory === _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].GEN) {
              this.selectedSpecialization = null;
            } // converting professionalType to a database readable format


            if (this.selectedCategory) {
              this.selectedCategory = this.dataHandlerService.convertProfessionalTypeToDBFormat(JSON.parse(JSON.stringify(this.selectedCategory)));
            } // making 'Any' option null


            if (this.selectedSpecialization === 'Any') {
              this.selectedSpecialization = null;
            } // create url and send request


            var url = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BASE_URL + _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].PROFESSIONAL_SEARCH;
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();

            if (this.searchString) {
              httpParams = httpParams.append('name', this.searchString);
            }

            if (this.selectedCategory) {
              httpParams = httpParams.append('professionalType', this.selectedCategory);
            }

            if (this.selectedSpecialization && this.selectedSpecialization !== 'Any') {
              httpParams = httpParams.append('specialization', this.selectedSpecialization);
            }

            this.dataLoaderService.get(url, httpParams, new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_6__["DataKey"].createdUser).then(function (data) {
              if (data && data.status && data.status.code === 1) {
                _this9.resetVariables();

                _this9.professionalList = data.data[0];
              } else if (data && data.status && data.status.code === -1) {
                _this9.resetVariables();
              }
            });
          }
        }
      }, {
        key: "resetVariables",
        value: function resetVariables() {
          this.professionalList = []; // this.searchString = null;

          this.selectedCategory = null;
          this.selectedSpecialization = null;
        }
      }, {
        key: "selectProfessional",
        value: function selectProfessional($event) {
          this.PAGINATION_START = 0;
          this.PAGINATION_END = this.RESULTS_PER_PAGE;
          this.loadProfessionalData($event);
          this.router.navigate(['appointmentTime']).then(function (r) {});
        }
      }, {
        key: "goToPage",
        value: function goToPage($event) {
          this.PAGINATION_START = $event.pageIndex * $event.pageSize;
          this.PAGINATION_END = this.PAGINATION_START + $event.pageSize;
        }
      }, {
        key: "loadProfessionalData",
        value: function loadProfessionalData($event) {
          var _this10 = this;

          // create url and send request
          var url = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BASE_URL + _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL + $event;
          this.dataLoaderService.get(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"](), new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_6__["DataKey"].createdUser).then(function (data) {
            if (data && data.status && data.status.code === 1) {
              _this10.dataStore.set(_services_data_store_service__WEBPACK_IMPORTED_MODULE_6__["DataKey"].availableAppointmentsForProfessional, data.data[0]);
            } else if (data && data.status && data.status.code === -1) {
              _this10.dataStore.set(_services_data_store_service__WEBPACK_IMPORTED_MODULE_6__["DataKey"].availableAppointmentsForProfessional, null);
            }
          });
        }
      }, {
        key: "InitialSearch",
        value: function InitialSearch() {
          // todo: uncomment
          // this.search(null, null, null);
          this.professionalList = [{
            id: 1,
            title: 'Dr.',
            firstName: 'Dummy',
            lastName: 'One',
            professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].CON,
            qualifications: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
            specialityA: 'Neurologist',
            specialityB: 'Pediatrician',
            specialityC: '',
            priceForAppointment: '2000',
            isSkypePreferred: true,
            isWhatsAppPreferred: true
          }, {
            id: 2,
            title: 'Dr.',
            firstName: 'Dummy',
            lastName: 'Two',
            professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].GEN,
            qualifications: 'MBBS [COLOMBO](1998)',
            specialityA: 'Pathologist',
            specialityB: '',
            specialityC: '',
            priceForAppointment: '1500',
            isSkypePreferred: false,
            isWhatsAppPreferred: true
          }, {
            id: 3,
            title: 'Dr.',
            firstName: 'Dummy',
            lastName: 'Three',
            professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["DoctorType"].OTH,
            qualifications: 'MBBS [RUHUNA](2000)',
            specialityA: 'Clinical Nutritionist',
            specialityB: '',
            specialityC: '',
            priceForAppointment: '2500',
            isSkypePreferred: true,
            isWhatsAppPreferred: false
          }];
        }
      }]);

      return SearchProfessionalsMainComponent;
    }();

    SearchProfessionalsMainComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_6__["DataStoreService"]
      }, {
        type: _services_data_loader_service__WEBPACK_IMPORTED_MODULE_7__["DataLoaderService"]
      }, {
        type: _services_data_handler_service__WEBPACK_IMPORTED_MODULE_4__["DataHandlerService"]
      }];
    };

    SearchProfessionalsMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-professionals-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-professionals-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-professionals-main/search-professionals-main.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-professionals-main.component.css */
      "./src/app/components/search-professionals-main/search-professionals-main.component.css"))["default"]]
    })], SearchProfessionalsMainComponent);
    /***/
  },

  /***/
  "./src/app/components/search-professionals/search-professionals.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/search-professionals/search-professionals.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchProfessionalsSearchProfessionalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcHJvZmVzc2lvbmFscy9zZWFyY2gtcHJvZmVzc2lvbmFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXByb2Zlc3Npb25hbHMvc2VhcmNoLXByb2Zlc3Npb25hbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/search-professionals/search-professionals.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/search-professionals/search-professionals.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SearchProfessionalsComponent */

  /***/
  function srcAppComponentsSearchProfessionalsSearchProfessionalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProfessionalsComponent", function () {
      return SearchProfessionalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");

    var SearchProfessionalsComponent = /*#__PURE__*/function () {
      function SearchProfessionalsComponent() {
        _classCallCheck(this, SearchProfessionalsComponent);

        this.professionalListType = _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON;
        this.selectedProfessionalType = 'option2';
        this.searchString = null;
        this.professionalList = [{
          id: 1,
          name: 'Dr. Nuwan Chinthaka',
          professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON,
          bio: 'MD [NIZHNY NOVGOROD STATE MED ACA] RUSSIA(2008)',
          specialities: ['Consultant Neurologist', 'Consultant Pediatrician'],
          consultationPrice: 'Rs. 2000.00',
          isSkypePreferred: true,
          isWhatsAppPreferred: true
        }, {
          id: 2,
          name: 'Dr. Punya Anupama',
          professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON,
          bio: 'MBBS [COLOMBO](1998)',
          specialities: ['Consultant Pathologist'],
          consultationPrice: 'Rs. 1500.00',
          isSkypePreferred: true,
          isWhatsAppPreferred: false
        }, {
          id: 3,
          name: 'Dr. Eric Deepal',
          professionalType: _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON,
          bio: 'MBBS [RUHUNA](2000)',
          specialities: ['Consultant Clinical Nutritionist'],
          consultationPrice: 'Rs. 2500.00',
          isSkypePreferred: false,
          isWhatsAppPreferred: true
        }];
        this.specializations = [];
      }

      _createClass(SearchProfessionalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectDoc",
        value: function selectDoc($event) {
          console.log($event);
        }
      }, {
        key: "search",
        value: function search() {
          console.log('jhbrch');
        }
      }]);

      return SearchProfessionalsComponent;
    }();

    SearchProfessionalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-professionals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-professionals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-professionals/search-professionals.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-professionals.component.css */
      "./src/app/components/search-professionals/search-professionals.component.css"))["default"]]
    })], SearchProfessionalsComponent);
    /***/
  },

  /***/
  "./src/app/components/signup/sign-up.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/components/signup/sign-up.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignupSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-tab-group {\r\n    margin-bottom: 48px;\r\n}\r\n.mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbi11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG4ubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/signup/sign-up.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/signup/sign-up.component.ts ***!
    \********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppComponentsSignupSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sign_up_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sign-up.component.css */
    "./src/app/components/signup/sign-up.component.css");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _models_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/user-data */
    "./src/app/models/user-data.ts");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _services_data_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/data-loader.service */
    "./src/app/services/data-loader.service.ts");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(dialog, router, dataLoaderService, dataStore) {
        _classCallCheck(this, SignUpComponent);

        this.dialog = dialog;
        this.router = router;
        this.dataLoaderService = dataLoaderService;
        this.dataStore = dataStore;
        this.emitFlowChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDoctor = false;
        this.encryptionKey = 'ezmed';
        this.hide = true; // logInType = 'doctor';

        this.logInType = 'patient';
        this.isSignUp = true;
        this.genders = [{
          value: 'male',
          viewValue: 'Male'
        }, {
          value: 'female',
          viewValue: 'Female'
        }];
        this.isMale = true;
        this.isIncompleteErrorAvailable = false;
        this.signUpResultObject = {
          isSignUp: undefined,
          userType: undefined
        };
        this.titles = [{
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["DoctorTitles"].DR
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["DoctorTitles"].MR
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["DoctorTitles"].MRS
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["DoctorTitles"].MS
        }, {
          value: _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["DoctorTitles"].PROF
        }];
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.resetFields();
          // if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
          //   this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
          //   this.logInType = this.signUpResultObject.userType;
          // }
          // console.log(this.encryptPassword('milinda'));
        }
      }, {
        key: "registerNewUser",
        value: function registerNewUser(user) {
          var _this11 = this;

          user.password = this.encryptPassword(user.password); // create url and send request

          var url = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].BASE_URL + _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].CREATE_NEW_USER;
          this.dataLoaderService.post(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"](), new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"](), _services_data_store_service__WEBPACK_IMPORTED_MODULE_7__["DataKey"].createdUser, user).then(function (data) {
            if (data && data.status && data.status.code === 1 && data.data && data.data.length > 0) {
              sessionStorage.setItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_7__["SessionStorageKeys"].loggedInUser, JSON.stringify(data.data[0]));

              if (data.data[0].doctor) {
                // location.reload();
                sessionStorage.setItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_7__["SessionStorageKeys"].userId, null); // todo: uncomment
                // sessionStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].doctorData.userName));

                sessionStorage.setItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_7__["SessionStorageKeys"].userName, JSON.stringify(data.data[0].userName));

                _this11.router.navigate(['doctor/dashboard']).then(function (r) {
                  location.reload();
                });
              } else if (!data.data[0].doctor) {
                // location.reload();
                sessionStorage.setItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_7__["SessionStorageKeys"].userId, null); // todo: uncomment
                // sessionStorage.setItem(SessionStorageKeys.userName, JSON.stringify(data.data[0].patientData.userName));

                sessionStorage.setItem(_services_data_store_service__WEBPACK_IMPORTED_MODULE_7__["SessionStorageKeys"].userName, JSON.stringify(data.data[0].userName));

                _this11.router.navigate(['user/dashboard']).then(function (r) {
                  location.reload();
                });
              }
            } else if (data && data.status && data.status.code === -1) {
              alert('Something went wrong. Please contact support !!');
            }
          });
        }
      }, {
        key: "encryptPassword",
        value: function encryptPassword(password) {
          password = crypto_js__WEBPACK_IMPORTED_MODULE_3__["AES"].encrypt(password, this.encryptionKey).toString(); // console.log(CryptoJS.AES.decrypt(password, this.encryptionKey).toString(CryptoJS.enc.Utf8));

          return password;
        }
      }, {
        key: "validateInput",
        value: function validateInput() {
          return false;
        }
      }, {
        key: "SignUp",
        value: function SignUp() {
          if (this.validateInput()) {
            this.isIncompleteErrorAvailable = true;
          } else {
            this.isIncompleteErrorAvailable = false;
            var userObj = new _models_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]();
            userObj.userName = this.email;
            userObj.password = this.pass;
            userObj.firstName = this.firstName;
            userObj.lastName = this.lastName;
            userObj.title = this.title;
            userObj.isMale = this.isMale;
            userObj.birthday = this.birthday;
            userObj.contactNumber = this.contactNumber;
            userObj.whatsAppNumber = this.whatsAppNumber;
            userObj.doctor = this.isDoctor;
            userObj.userAllergies = this.knownAllergies;
            this.registerNewUser(userObj);
          }
        }
      }, {
        key: "setGender",
        value: function setGender(value) {
          switch (value) {
            case 'female':
              {
                this.isMale = false;
                break;
              }

            case 'male':
              {
                this.isMale = true;
                break;
              }
          }
        }
      }, {
        key: "setIsDoctor",
        value: function setIsDoctor($event) {
          this.isDoctor = JSON.parse($event.value);
          this.resetFields();
        }
      }, {
        key: "resetFields",
        value: function resetFields() {
          this.birthday = null;
          this.pass = null;
          this.conPass = null;
          this.knownAllergies = '';
          this.isIncompleteErrorAvailable = false;
        }
      }, {
        key: "logIn",
        value: function logIn() {
          var _this12 = this;

          this.dataLoaderService.activateLoader(true, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MODAL_TYPES"].LOADING, false);
          setTimeout(function () {
            _this12.dataLoaderService.activateLoader(false, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["MODAL_TYPES"].LOADING);
          }, 1000); // todo: location.reload(); to update the header
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _services_data_loader_service__WEBPACK_IMPORTED_MODULE_6__["DataLoaderService"]
      }, {
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_7__["DataStoreService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SignUpComponent.prototype, "flow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SignUpComponent.prototype, "emitFlowChange", void 0);
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/sign-up.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/components/signup/sign-up.component.css"))["default"]]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/components/transition-page/transition-page.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/transition-page/transition-page.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransitionPageTransitionPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-style {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2l0aW9uLXBhZ2UvdHJhbnNpdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFuc2l0aW9uLXBhZ2UvdHJhbnNpdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtc3R5bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/transition-page/transition-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/transition-page/transition-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TransitionPageComponent */

  /***/
  function srcAppComponentsTransitionPageTransitionPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransitionPageComponent", function () {
      return TransitionPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TransitionPageComponent = /*#__PURE__*/function () {
      function TransitionPageComponent() {
        _classCallCheck(this, TransitionPageComponent);

        this.dismissible = true;
        this.clickEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TransitionPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logIn",
        value: function logIn() {
          // this.router.navigate(['signup']).then(r => {
          // });
          this.clickEmitter.emit('logIn');
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.clickEmitter.emit('back');
        }
      }]);

      return TransitionPageComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransitionPageComponent.prototype, "modalType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransitionPageComponent.prototype, "dismissible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TransitionPageComponent.prototype, "clickEmitter", void 0);
    TransitionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transition-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transition-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transition-page/transition-page.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transition-page.component.css */
      "./src/app/components/transition-page/transition-page.component.css"))["default"]]
    })], TransitionPageComponent);
    /***/
  },

  /***/
  "./src/app/models/auth-model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/auth-model.ts ***!
    \**************************************/

  /*! exports provided: AuthModel */

  /***/
  function srcAppModelsAuthModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModel", function () {
      return AuthModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AuthModel = function AuthModel() {
      _classCallCheck(this, AuthModel);
    };
    /***/

  },

  /***/
  "./src/app/models/request-options.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/request-options.ts ***!
    \*******************************************/

  /*! exports provided: RequestOptions */

  /***/
  function srcAppModelsRequestOptionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestOptions", function () {
      return RequestOptions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RequestOptions = function RequestOptions() {
      _classCallCheck(this, RequestOptions);
    };
    /***/

  },

  /***/
  "./src/app/models/user-data.ts":
  /*!*************************************!*\
    !*** ./src/app/models/user-data.ts ***!
    \*************************************/

  /*! exports provided: UserData, WorkingTimePeriod, FixedDoctorDate, DoctorScheduleData, DoctorSpecificData */

  /***/
  function srcAppModelsUserDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserData", function () {
      return UserData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkingTimePeriod", function () {
      return WorkingTimePeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedDoctorDate", function () {
      return FixedDoctorDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorScheduleData", function () {
      return DoctorScheduleData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorSpecificData", function () {
      return DoctorSpecificData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserData = function UserData() {
      _classCallCheck(this, UserData);
    };

    var WorkingTimePeriod = function WorkingTimePeriod() {
      _classCallCheck(this, WorkingTimePeriod);
    };

    var FixedDoctorDate = function FixedDoctorDate() {
      _classCallCheck(this, FixedDoctorDate);
    };

    var DoctorScheduleData = function DoctorScheduleData() {
      _classCallCheck(this, DoctorScheduleData);
    };

    var DoctorSpecificData = function DoctorSpecificData() {
      _classCallCheck(this, DoctorSpecificData);
    };
    /***/

  },

  /***/
  "./src/app/services/data-handler.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/data-handler.service.ts ***!
    \**************************************************/

  /*! exports provided: DataHandlerService */

  /***/
  function srcAppServicesDataHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataHandlerService", function () {
      return DataHandlerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

    var DataHandlerService = /*#__PURE__*/function () {
      function DataHandlerService() {
        _classCallCheck(this, DataHandlerService);
      }

      _createClass(DataHandlerService, [{
        key: "convertTimeToHoursAndMinutes",
        value: function convertTimeToHoursAndMinutes(time) {
          var timeObj = {
            hour: parseInt(time.split(':')[0], 10),
            minute: parseInt(time.split(':')[1], 10)
          };
          return timeObj;
        }
      }, {
        key: "convertHoursAndMinutesToTime",
        value: function convertHoursAndMinutesToTime(time) {
          var timeString = time.hour.toString().padStart(2, '0') + ':' + time.minute.toString().padStart(2, '0') + ':00';
          return timeString;
        }
      }, {
        key: "convertCamelCaseToSentence",
        value: function convertCamelCaseToSentence(str) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["startCase"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(str));
        }
      }, {
        key: "convertToCamelCase",
        value: function convertToCamelCase(str) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(str);
        }
      }, {
        key: "convertProfessionalTypeToDBFormat",
        value: function convertProfessionalTypeToDBFormat(professionalType) {
          switch (professionalType) {
            case _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON:
              professionalType = 'CON';
              break;

            case _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].COUN:
              professionalType = 'COUN';
              break;

            case _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].GEN:
              professionalType = 'GEN';
              break;

            case _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].OTH:
              professionalType = 'OTH';
              break;

            default:
              break;
          }

          return professionalType;
        }
      }, {
        key: "convertProfessionalTypeFromDBFormat",
        value: function convertProfessionalTypeFromDBFormat(professionalType) {
          switch (professionalType) {
            case 'CON':
              professionalType = _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].CON;
              break;

            case 'COUN':
              professionalType = _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].COUN;
              break;

            case 'GEN':
              professionalType = _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].GEN;
              break;

            case 'OTH':
              professionalType = _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["DoctorType"].OTH;
              break;

            default:
              break;
          }

          return professionalType;
        }
      }]);

      return DataHandlerService;
    }();

    DataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataHandlerService);
    /***/
  },

  /***/
  "./src/app/services/data-loader.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/data-loader.service.ts ***!
    \*************************************************/

  /*! exports provided: DataLoaderService */

  /***/
  function srcAppServicesDataLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataLoaderService", function () {
      return DataLoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_request_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/request-options */
    "./src/app/models/request-options.ts");
    /* harmony import */


    var _data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utils_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/modal/modal.component */
    "./src/app/components/modal/modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var DataLoaderService = /*#__PURE__*/function () {
      function DataLoaderService(dialog, http, dataStore) {
        _classCallCheck(this, DataLoaderService);

        this.dialog = dialog;
        this.http = http;
        this.dataStore = dataStore;
      } // make a GET request


      _createClass(DataLoaderService, [{
        key: "get",
        value: function get(url, param, headers, dataKey) {
          var _this13 = this;

          var options = this.makeOptions(param, headers);
          this.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].error, {});

          if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null));
          }

          return new Promise(function (resolve) {
            _this13.http.get(url, {
              headers: options.headers,
              params: options.params
            }).subscribe( // tslint:disable-next-line:no-shadowed-variable
            function (data) {
              resolve(data); // @ts-ignore
              // this.dataStore.set(dataKey, data.data, true);
            });
          });
        } // make a POST request

      }, {
        key: "post",
        value: function post(url, param, headers, dataKey, data) {
          var _this14 = this;

          var options = this.makeOptions(param, headers);
          this.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].error, {});

          if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null));
          }

          return new Promise(function (resolve) {
            _this14.http.post(url, data, {
              headers: options.headers,
              params: options.params
            }).subscribe( // tslint:disable-next-line:no-shadowed-variable
            function (data) {
              resolve(data); // @ts-ignore

              _this14.dataStore.set(dataKey, data.data, true);
            });
          });
        } // make a PUT request

      }, {
        key: "put",
        value: function put(url, param, headers, dataKey, data) {
          var _this15 = this;

          var options = this.makeOptions(param, headers);
          this.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].error, {});

          if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null));
          }

          return new Promise(function (resolve) {
            _this15.http.put(url, data, {
              headers: options.headers,
              params: options.params
            }).subscribe( // tslint:disable-next-line:no-shadowed-variable
            function (data) {
              resolve(data); // @ts-ignore

              _this15.dataStore.set(dataKey, data.data, true);
            });
          }); // this.http.put<T>(url, data, {
          //     headers: options.headers,
          //     params: options.params
          // }).subscribe(
          //     result => {
          //         this.dataStore.set(dataKey, result, true);
          //     },
          //     error => {
          //         this.dataStore.set(DataKey.error, error, true);
          //     }
          // );
        } // make a DELETE request

      }, {
        key: "delete",
        value: function _delete(url, param, headers, dataKey) {
          var _this16 = this;

          var options = this.makeOptions(param, headers);
          this.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].error, {});

          if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null));
          }

          this.http["delete"](url, {
            headers: options.headers,
            params: options.params
          }).subscribe(function (result) {
            _this16.dataStore.set(dataKey, result, true);
          }, function (error) {
            _this16.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].error, error, true);
          });
        } // make request params and headers for request

      }, {
        key: "makeOptions",
        value: function makeOptions(param, headers) {
          var options = new _models_request_options__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]();
          options.params = param;
          options.headers = headers;
          options.headers = options.headers.append('Content-Type', 'application/json'); // get auth key for authorization

          if (localStorage.getItem(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].EZMED_AUTH) != null) {
            var authKey = 'Bearer ';
            authKey = authKey + localStorage.getItem(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].EZMED_AUTH);
            options.headers = options.headers.append('Authorization', authKey);
          }

          return options;
        } // user login and get JWT token

      }, {
        key: "login",
        value: function login(url, options, data, dataKey) {
          var _this17 = this;

          this.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].error, {});

          if (this.dataStore.has(dataKey, true)) {
            this.dataStore.set(dataKey, new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null));
          }

          this.http.post(url, data, {
            headers: options.headers,
            params: options.params
          }).subscribe(function (result) {
            _this17.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].loggedUser, data, true); // @ts-ignore


            localStorage.setItem(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].EZMED_AUTH, result.jwt);
          }, function (error) {
            _this17.dataStore.set(_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataKey"].error, error, true);
          });
        } // logout from the app

      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem(_utils_Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].EZMED_AUTH);
        }
      }, {
        key: "activateLoader",
        value: function activateLoader(activate, MODAL_TYPE, disableClose) {
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
          dialogConfig.data = {
            modalType: MODAL_TYPE
          };
          dialogConfig.disableClose = disableClose;
          dialogConfig.width = '300px';
          var dialogRef;

          if (activate) {
            dialogRef = this.dialog.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], dialogConfig);
            dialogRef.afterClosed().subscribe(function (result) {// console.log('dialogRef.afterClosed().subscribe');
            });
          } else {
            dialogRef = this.dialog.closeAll();
          }
        }
      }]);

      return DataLoaderService;
    }();

    DataLoaderService.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataStoreService"]
      }];
    };

    DataLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataLoaderService);
    /***/
  },

  /***/
  "./src/app/services/data-store.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/data-store.service.ts ***!
    \************************************************/

  /*! exports provided: DataStoreService, DataKey, SessionStorageKeys */

  /***/
  function srcAppServicesDataStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStoreService", function () {
      return DataStoreService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataKey", function () {
      return DataKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionStorageKeys", function () {
      return SessionStorageKeys;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataStoreService = /*#__PURE__*/function () {
      function DataStoreService() {
        _classCallCheck(this, DataStoreService);

        this.data = new Map();
        this.asyncData = new Map();

        for (var key in DataKey) {
          if (parseInt(key, 10) >= 0) {
            if (!this.asyncData.has(DataKey[DataKey[key]])) {
              this.asyncData.set(DataKey[DataKey[key]], new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null));
            }
          }
        }
      }

      _createClass(DataStoreService, [{
        key: "get",
        value: function get(key) {
          var isAsync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (isAsync) {
            return this.asyncData.get(key);
          } else {
            return this.data.get(key);
          }
        }
      }, {
        key: "set",
        value: function set(key, data) {
          var isAsync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (isAsync) {
            if (!this.asyncData.has(key)) {
              this.asyncData.set(key, null);
            }

            this.asyncData.get(key).next(data);
          } else {
            this.data.set(key, data);
          }
        }
      }, {
        key: "has",
        value: function has(key) {
          var isAsync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (isAsync) {
            return this.asyncData.has(key);
          } else {
            return this.data.has(key);
          }
        }
      }]);

      return DataStoreService;
    }();

    DataStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataStoreService);
    var DataKey;

    (function (DataKey) {
      DataKey[DataKey["error"] = 0] = "error";
      DataKey[DataKey["authKey"] = 1] = "authKey";
      DataKey[DataKey["loggedUser"] = 2] = "loggedUser";
      DataKey[DataKey["loggedInUser"] = 3] = "loggedInUser";
      DataKey[DataKey["createdUser"] = 4] = "createdUser";
      DataKey[DataKey["uploadImage"] = 5] = "uploadImage";
      DataKey[DataKey["doctorScheduleData"] = 6] = "doctorScheduleData";
      DataKey[DataKey["signUpResultObject"] = 7] = "signUpResultObject";
      DataKey[DataKey["availableAppointmentsForProfessional"] = 8] = "availableAppointmentsForProfessional";
    })(DataKey || (DataKey = {}));

    var SessionStorageKeys;

    (function (SessionStorageKeys) {
      SessionStorageKeys["loggedInUser"] = "loggedInUser";
      SessionStorageKeys["userId"] = "userId";
      SessionStorageKeys["userName"] = "userName";
    })(SessionStorageKeys || (SessionStorageKeys = {}));
    /***/

  },

  /***/
  "./src/app/utils/Constants.ts":
  /*!************************************!*\
    !*** ./src/app/utils/Constants.ts ***!
    \************************************/

  /*! exports provided: Constants, DoctorTitles, MODAL_TYPES, TRANSITION_PAGE_TYPE, currencyCodes, DoctorType, specializations */

  /***/
  function srcAppUtilsConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorTitles", function () {
      return DoctorTitles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MODAL_TYPES", function () {
      return MODAL_TYPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TRANSITION_PAGE_TYPE", function () {
      return TRANSITION_PAGE_TYPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "currencyCodes", function () {
      return currencyCodes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorType", function () {
      return DoctorType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "specializations", function () {
      return specializations;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Constants;

    (function (Constants) {
      // endpoints
      Constants["BASE_URL"] = "http://localhost:8080";
      Constants["AUTHENTICATION"] = "test";
      Constants["CREATE_NEW_USER"] = "/user/register";
      Constants["UPLOAD_USER_IMAGE"] = "/user/upload/image";
      Constants["PROFESSIONAL_SEARCH"] = "/doctor/doctorSearch/advanced/";
      Constants["UPDATE_PROFESSIONAL_SPECIFIC_DATA"] = "/user/doctor/data/";
      Constants["UPDATE_PROFESSIONAL_WORK_DATA"] = "/user/doctor/work-data/";
      Constants["GET_USER_DATA"] = "/user/user-data/";
      Constants["AVAILABLE_APPOINTMENTS_FOR_A_PROFESSIONAL"] = "/doctor/available-appointments/"; // UPDATE_PROFESSIONAL_WORK_DATA = '/user/test?username=dfg',
      // modal types

      Constants["MODAL_TYPE_SIGN_UP"] = "SIGN_UP";
      Constants["MODAL_TYPE_PROFILE"] = "PROFILE";
      Constants["EZMED_AUTH"] = "EZMED_AUTH";
    })(Constants || (Constants = {}));

    var DoctorTitles;

    (function (DoctorTitles) {
      DoctorTitles["DR"] = "Dr";
      DoctorTitles["MR"] = "Mr";
      DoctorTitles["MRS"] = "Mrs";
      DoctorTitles["MS"] = "Ms";
      DoctorTitles["PROF"] = "Prof";
    })(DoctorTitles || (DoctorTitles = {}));

    var MODAL_TYPES;

    (function (MODAL_TYPES) {
      MODAL_TYPES["LOADING"] = "LOADING";
    })(MODAL_TYPES || (MODAL_TYPES = {}));

    var TRANSITION_PAGE_TYPE;

    (function (TRANSITION_PAGE_TYPE) {
      TRANSITION_PAGE_TYPE["LOGIN_REDIRECT"] = "LOGIN_REDIRECT";
    })(TRANSITION_PAGE_TYPE || (TRANSITION_PAGE_TYPE = {}));

    var currencyCodes;

    (function (currencyCodes) {
      currencyCodes["LKR"] = "LKR";
      currencyCodes["USD"] = "USD";
      currencyCodes["GBP"] = "GBP";
      currencyCodes["JPY"] = "JPY";
      currencyCodes["EUR"] = "EUR";
    })(currencyCodes || (currencyCodes = {}));

    var DoctorType;

    (function (DoctorType) {
      DoctorType["CON"] = "Consultant";
      DoctorType["COUN"] = "Counselor";
      DoctorType["GEN"] = "General Practitioner";
      DoctorType["OTH"] = "Other Medical Practitioner";
    })(DoctorType || (DoctorType = {}));

    var specializations = ['Any', 'Immunologist', 'Cardiologist', 'Pulmonologist', 'Radiologist', 'Dermatologist', 'ClinicalNutritionist', 'Endocrinologist'];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\EZ MED\EZMED-FE\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map