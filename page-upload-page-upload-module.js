(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-upload-page-upload-module"],{

/***/ "./node_modules/@ionic-native/camera/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
  \********************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Camera);
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUF1RDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsOEVBQThFO1lBQzlFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsMkVBQTJFO1lBQzNFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQUhsQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csTUFBTTtpQkFoTG5CO0VBZ0w0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSVxufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBKUEVHID0gMCxcbiAgUE5HXG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhVHlwZSB7XG4gIFBJQ1RVUkUgPSAwLFxuICBWSURFTyxcbiAgQUxMTUVESUFcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTVxufVxuXG5leHBvcnQgZW51bSBQb3BvdmVyQXJyb3dEaXJlY3Rpb24ge1xuICBBUlJPV19VUCA9IDEsXG4gIEFSUk9XX0RPV04sXG4gIEFSUk9XX0xFRlQsXG4gIEFSUk9XX1JJR0hULFxuICBBUlJPV19BTllcbn1cblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgQkFDSyA9IDAsXG4gIEZST05UXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRha2UgYSBwaG90byBvciBjYXB0dXJlIHZpZGVvLlxuICpcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNhbWVyYWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIENhbWVyYSBQbHVnaW4gRG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEpLlxuICpcbiAqIFtXYXJuaW5nXSBTaW5jZSBJT1MgMTAgdGhlIGNhbWVyYSByZXF1aXJlcyBwZXJtaXNzaW9ucyB0byBiZSBwbGFjZWQgaW4geW91ciBjb25maWcueG1sIGFkZFxuICogYGBgeG1sXG4gKiA8Y29uZmlnLWZpbGUgcGFyZW50PVwiTlNDYW1lcmFVc2FnZURlc2NyaXB0aW9uXCIgcGxhdGZvcm09XCJpb3NcIiB0YXJnZXQ9XCIqLUluZm8ucGxpc3RcIj5cbiAqICA8c3RyaW5nPllvdSBjYW4gdGFrZSBwaG90b3M8L3N0cmluZz5cbiAqIDwvY29uZmlnLWZpbGU+XG4gKiBgYGBcbiAqIGluc2lkZSBvZiB0aGUgPHBsYXRmb3JtIG5hbWU9J2lvcz4gc2VjdGlvblxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FtZXJhLCBDYW1lcmFPcHRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYW1lcmEvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3Qgb3B0aW9uczogQ2FtZXJhT3B0aW9ucyA9IHtcbiAqICAgcXVhbGl0eTogMTAwLFxuICogICBkZXN0aW5hdGlvblR5cGU6IHRoaXMuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSSxcbiAqICAgZW5jb2RpbmdUeXBlOiB0aGlzLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcbiAqICAgbWVkaWFUeXBlOiB0aGlzLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRVxuICogfVxuICpcbiAqIHRoaXMuY2FtZXJhLmdldFBpY3R1cmUob3B0aW9ucykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XG4gKiAgLy8gaW1hZ2VEYXRhIGlzIGVpdGhlciBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyBvciBhIGZpbGUgVVJJXG4gKiAgLy8gSWYgaXQncyBiYXNlNjQgKERBVEFfVVJMKTpcbiAqICBsZXQgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgaW1hZ2VEYXRhO1xuICogfSwgKGVycikgPT4ge1xuICogIC8vIEhhbmRsZSBlcnJvclxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYW1lcmFPcHRpb25zXG4gKiBDYW1lcmFQb3BvdmVyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbWVyYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jYW1lcmEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDFcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDJcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/page-upload/page-upload.module.ts":
/*!***************************************************!*\
  !*** ./src/app/page-upload/page-upload.module.ts ***!
  \***************************************************/
/*! exports provided: PageUploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUploadPageModule", function() { return PageUploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-upload.page */ "./src/app/page-upload/page-upload.page.ts");







// import {WebcamModule} from 'ngx-webcam';
var routes = [
    {
        path: '',
        component: _page_upload_page__WEBPACK_IMPORTED_MODULE_6__["PageUploadPage"]
    }
];
var PageUploadPageModule = /** @class */ (function () {
    function PageUploadPageModule() {
    }
    PageUploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // WebcamModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_page_upload_page__WEBPACK_IMPORTED_MODULE_6__["PageUploadPage"]]
        })
    ], PageUploadPageModule);
    return PageUploadPageModule;
}());



/***/ }),

/***/ "./src/app/page-upload/page-upload.page.html":
/*!***************************************************!*\
  !*** ./src/app/page-upload/page-upload.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\" translucent>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button></ion-back-button> -->\n      <ion-button routerLink=\"/home\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"warning\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title text-center style=\"margin-right:15px\">{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"position: relative;\">\n    <ion-card style=\"margin:0;box-shadow:none;-webkit-box-shadow:none;border: 1px solid #cecece;\">\n      <img style=\"width: auto;margin: auto auto;\" src=\"{{photoCamera}}\" *ngIf=\"photoCamera != ''\">\n      <img width=\"300\" height=\"230\" src=\"https://dummyimage.com/600x400/de97fd/fff.png&text=Please+capture+/+select+picture\"\n        *ngIf=\"photoCamera == ''\">\n    </ion-card>\n    <ion-fab edge=\"true\" vertical=\"bottom\" horizontal=\"start\" slot=\"\" (click)=\"openModalCamera()\">\n      <ion-fab-button color=\"danger\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <ion-fab edge=\"true\" vertical=\"bottom\" horizontal=\"end\" slot=\"\" (click)=\"openModalMedia()\">\n      <ion-fab-button color=\"secondary\">\n        <ion-icon name=\"images\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n\n  <div *ngIf=\"photoCamera != '' && photoType == 'DriverLicence'\" no-padding margin-top>\n    <ion-list-header text-center margin-top>\n      <ion-label style=\"margin: 0 auto;\">\n        <h3 text-center style=\"font-weight: bold;\">Information</h3>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-row>\n      <ion-item>\n        <ion-label position=\"fixed\">First Name</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.firstName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Last Name</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.lastName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Street Line</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.streetLine\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Suburb</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.suburb\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">State</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.state\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Postcode</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.postcode\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">License No.</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.licenseNumber\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Version</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.version\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">DOB</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.DOB\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">License Ex.</ion-label>\n        <ion-input [(ngModel)]=\"responseDriverLicence.licenseExpiry\"></ion-input>\n      </ion-item>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"fixed\">State</ion-label>\n          <ion-input [(ngModel)]=\"responseDriverLicence.state\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"fixed\">Postcode</ion-label>\n          <ion-input [(ngModel)]=\"responseDriverLicence.postcode\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"fixed\">License Number</ion-label>\n          <ion-input [(ngModel)]=\"responseDriverLicence.licenseNumber\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"fixed\">Version</ion-label>\n          <ion-input [(ngModel)]=\"responseDriverLicence.version\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"fixed\">DOB</ion-label>\n          <ion-input [(ngModel)]=\"responseDriverLicence.DOB\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"fixed\">License Expiry</ion-label>\n          <ion-input [(ngModel)]=\"responseDriverLicence.licenseExpiry\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n  </div>\n\n  <div *ngIf=\"photoCamera != '' && photoType == 'Rego'\">\n    <ion-list-header text-center margin-top>\n      <ion-label style=\"margin: 0 auto;\">\n        <h3 text-center style=\"font-weight: bold;\">Information</h3>\n      </ion-label>\n    </ion-list-header>\n\n    <ion-row>\n      <ion-item>\n        <ion-label position=\"fixed\">Rego</ion-label>\n        <ion-input [(ngModel)]=\"responseRego.rego\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Parse Content</ion-label>\n        <ion-input [(ngModel)]=\"responseRego.parsedContent\"></ion-input>\n      </ion-item>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"photoCamera != '' && photoType == 'VIN'\">\n    <ion-list-header text-center margin-top>\n      <ion-label style=\"margin: 0 auto;\">\n        <h3 text-center style=\"font-weight: bold;\">Information</h3>\n      </ion-label>\n    </ion-list-header>\n    <ion-row>\n      <ion-item>\n        <ion-label position=\"fixed\">Vin</ion-label>\n        <ion-input [(ngModel)]=\"responseVin.vin\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"fixed\">Parse Content</ion-label>\n        <ion-input [(ngModel)]=\"responseVin.parsedContent\"></ion-input>\n      </ion-item>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"photoCamera != '' && photoType == 'CarDetail'\">\n    <ion-list-header text-center margin-top>\n      <ion-label style=\"margin: 0 auto;\">\n        <h3 text-center style=\"font-weight: bold;\">Information</h3>\n      </ion-label>\n    </ion-list-header>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of responseCarDetails\">\n        <ion-row>\n          <ion-item>\n            <ion-label position=\"fixed\">Make</ion-label>\n            <ion-input [(ngModel)]=\"item.Make\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"fixed\">Model</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"fixed\">Variant</ion-label>\n            <ion-input [(ngModel)]=\"item.Variant\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"fixed\">Year</ion-label>\n            <ion-input [(ngModel)]=\"item.Year\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"fixed\">Desc</ion-label>\n            <ion-input [(ngModel)]=\"item.Desc\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"fixed\">Color</ion-label>\n            <img [ngStyle]=\"{'background-color': item.Color}\" style=\"height:20px; width:50px;\">\n          </ion-item>\n\n          <ion-row *ngFor=\"let child of item.Items\">\n            <h3>Series: {{child.Series}}</h3>\n            <ion-item>\n              <ion-label position=\"fixed\">Make</ion-label>\n              <ion-input [(ngModel)]=\"child.Make\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">Model</ion-label>\n              <ion-input></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">Variant</ion-label>\n              <ion-input [(ngModel)]=\"child.Variant\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">Year</ion-label>\n              <ion-input [(ngModel)]=\"child.Year\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">Series</ion-label>\n              <ion-input [(ngModel)]=\"child.Series\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">Transmission</ion-label>\n              <ion-input [(ngModel)]=\"child.Transmission\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">Body</ion-label>\n              <ion-input [(ngModel)]=\"child.BodyType\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">VIN</ion-label>\n              <ion-input [(ngModel)]=\"child.VinNumber\"></ion-input>\n            </ion-item>\n          </ion-row>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/page-upload/page-upload.page.scss":
/*!***************************************************!*\
  !*** ./src/app/page-upload/page-upload.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS11cGxvYWQvRTpcXHNpbGljb25zdGFja1xcbGVuc1xcc2lsaWNvbl9sZW5zX2lvbmljL3NyY1xcYXBwXFxwYWdlLXVwbG9hZFxccGFnZS11cGxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQThCO0VBQzlCLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS11cGxvYWQvcGFnZS11cGxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-upload/page-upload.page.ts":
/*!*************************************************!*\
  !*** ./src/app/page-upload/page-upload.page.ts ***!
  \*************************************************/
/*! exports provided: PageUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUploadPage", function() { return PageUploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _modal_camera_modal_camera_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-camera/modal-camera.page */ "./src/app/modal-camera/modal-camera.page.ts");
/* harmony import */ var _modal_media_modal_media_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-media/modal-media.page */ "./src/app/modal-media/modal-media.page.ts");









var PageUploadPage = /** @class */ (function () {
    function PageUploadPage(route, camera, modalCtrl, alertCtrl) {
        this.route = route;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.photoType = '';
        this.title = '';
        this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true
        };
        this.responseDriverLicence = {
            firstName: '',
            lastName: '',
            streetLine: '',
            suburb: '',
            state: '',
            postcode: '',
            licenseNumber: '',
            version: '',
            DOB: '',
            licenseExpiry: ''
        };
        this.responseRego = {
            rego: '',
            parsedContent: ''
        };
        this.responseVin = {
            vin: '',
            parsedContent: ''
        };
        // responseCarDetails = {
        //   make: '',
        //   model: '',
        //   variant: '',
        //   year: '',
        //   color: '',
        //   imageUrl: '',
        //   desc: ''
        // }
        this.responseCarDetails = [];
        this.isDisplayData = null;
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.photoCamera = '';
    }
    PageUploadPage.prototype.ngOnInit = function () {
        var _this = this;
        this.photoType = this.route.snapshot.paramMap.get('photoType');
        if (this.photoType === 'DriverLicence')
            this.title = 'SCAN DRIVER LICENCE';
        else if (this.photoType === 'CarDetail')
            this.title = 'CAR DETAILS';
        else if (this.photoType === 'Rego')
            this.title = 'REGO';
        else if (this.photoType === 'VIN')
            this.title = 'VIN';
        ngx_webcam__WEBPACK_IMPORTED_MODULE_5__["WebcamUtil"].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    };
    // options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }
    // openCamera() {
    //   this.camera.getPicture(this.options).then((imageData) => {
    //     // imageData is either a base64 encoded string or a file URI
    //     // If it's base64 (DATA_URL):
    //     let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     console.log(base64Image);
    //    }, (err) => {
    //     // Handle error
    //    });
    // }
    // Modal Camera
    PageUploadPage.prototype.openModalCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_camera_modal_camera_page__WEBPACK_IMPORTED_MODULE_7__["ModalCameraPage"],
                            componentProps: {
                                photoType: this.photoType,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) { return _this.handleModalCameraDismiss(d); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PageUploadPage.prototype.handleModalCameraDismiss = function (data) {
        // console.log(data);
        //this.webcamImage = data.photo;
        this.isDisplayData = false;
        if (data.data.photo != null && data.data.photo != '') {
            this.photoCamera = data.data.photo;
            var api_response = data.data.response;
            this.isDisplayData = true;
            if (this.photoType == 'DriverLicence') {
                this.responseDriverLicence.firstName = api_response.FirstName;
                this.responseDriverLicence.lastName = api_response.LastName;
                this.responseDriverLicence.DOB = api_response.Dob;
                this.responseDriverLicence.licenseExpiry = api_response.LicenseExpiry;
                this.responseDriverLicence.licenseNumber = api_response.LicenseNumber;
                this.responseDriverLicence.postcode = api_response.PostCode;
                this.responseDriverLicence.state = api_response.State;
                this.responseDriverLicence.streetLine = api_response.StreetLine;
                this.responseDriverLicence.suburb = api_response.Suburb;
                this.responseDriverLicence.version = api_response.Version;
                // console.log(this.responseDriverLicence);
            }
            else if (this.photoType == 'Rego') {
                this.responseRego.rego = api_response.Rego;
                this.responseRego.parsedContent = api_response.ParsedContent;
            }
            else if (this.photoType == 'VIN') {
                this.responseVin.vin = api_response.Vin;
                this.responseVin.parsedContent = api_response.ParsedContent;
            }
            else if (this.photoType == 'CarDetail') {
                this.responseCarDetails = api_response;
            }
        }
    };
    // Modal Media
    PageUploadPage.prototype.openModalMedia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_media_modal_media_page__WEBPACK_IMPORTED_MODULE_8__["ModalMediaPage"],
                            componentProps: {
                                photoType: this.photoType,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) { return _this.handleModalMediaDismiss(d); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PageUploadPage.prototype.handleModalMediaDismiss = function (data) {
        // console.log(data);
        //this.webcamImage = data.photo;
        this.isDisplayData = false;
        if (data.data.photo != null && data.data.photo != '') {
            this.photoCamera = data.data.photo;
            var api_response = data.data.response;
            this.isDisplayData = true;
            if (this.photoType == 'DriverLicence') {
                this.responseDriverLicence.firstName = api_response.FirstName;
                this.responseDriverLicence.lastName = api_response.LastName;
                this.responseDriverLicence.DOB = api_response.Dob;
                this.responseDriverLicence.licenseExpiry = api_response.LicenseExpiry;
                this.responseDriverLicence.licenseNumber = api_response.LicenseNumber;
                this.responseDriverLicence.postcode = api_response.PostCode;
                this.responseDriverLicence.state = api_response.State;
                this.responseDriverLicence.streetLine = api_response.StreetLine;
                this.responseDriverLicence.suburb = api_response.Suburb;
                this.responseDriverLicence.version = api_response.Version;
                // console.log(this.responseDriverLicence);
            }
            else if (this.photoType == 'Rego') {
                this.responseRego.rego = api_response.Rego;
                this.responseRego.parsedContent = api_response.ParsedContent;
            }
            else if (this.photoType == 'VIN') {
                this.responseVin.vin = api_response.Vin;
                this.responseRego.parsedContent = api_response.ParsedContent;
            }
            else if (this.photoType == 'CarDetail') {
                this.responseCarDetails = api_response;
            }
        }
    };
    PageUploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-upload',
            template: __webpack_require__(/*! ./page-upload.page.html */ "./src/app/page-upload/page-upload.page.html"),
            styles: [__webpack_require__(/*! ./page-upload.page.scss */ "./src/app/page-upload/page-upload.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], PageUploadPage);
    return PageUploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-upload-page-upload-module.js.map