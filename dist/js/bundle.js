/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/active-menu.js":
/*!*******************************!*\
  !*** ./src/js/active-menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//при нажатии на сообщение
const buttonMessage = document.querySelector('.contact__link_display-message');
const activeMenu = document.querySelector('.container-active-message');
const buttonCloseMessage = document.querySelector('.nav-active-message__button');
const blurAreaMessage = document.querySelector('.blurriness-message');
buttonMessage.addEventListener('click', function () {
  blurAreaMessage.classList.add('blurriness-messagejs');
  activeMenu.classList.add('container-active-messagejs');
});
buttonCloseMessage.addEventListener('click', function () {
  activeMenu.classList.remove('container-active-messagejs');
  blurAreaMessage.classList.remove('blurriness-messagejs');
});
document.addEventListener('click', function (event) {
  if (!activeMenu.contains(event.target) && !buttonMessage.contains(event.target)) {
    activeMenu.classList.remove('container-active-messagejs');
    blurAreaMessage.classList.remove('blurriness-messagejs');
  }
}); // при нажатии на трубку

const buttonTelephone = document.querySelector('.contact__link_display-telephone');
const activeMenuTelephone = document.querySelector('.container-active-telephone');
const buttonCloseTelephone = document.querySelector('.nav-active-telephone__button');
const blurAreaTelephone = document.querySelector('.blurriness-telephone');
buttonTelephone.addEventListener('click', function () {
  activeMenuTelephone.classList.add('container-active-telephonejs');
  blurAreaTelephone.classList.add('blurriness-telephonejs');
});
buttonCloseTelephone.addEventListener('click', function () {
  activeMenuTelephone.classList.remove('container-active-telephonejs');
  blurAreaTelephone.classList.remove('blurriness-telephonejs');
});
document.addEventListener('click', function (event) {
  if (!activeMenuTelephone.contains(event.target) && !buttonTelephone.contains(event.target)) {
    activeMenuTelephone.classList.remove('container-active-telephonejs');
    blurAreaTelephone.classList.remove('blurriness-telephonejs');
  }
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _active_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active-menu.js */ "./src/js/active-menu.js");
/* harmony import */ var _active_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_active_menu_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _side_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-menu.js */ "./src/js/side-menu.js");
/* harmony import */ var _side_menu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_side_menu_js__WEBPACK_IMPORTED_MODULE_3__);



 // для menu-brends

const button = document.querySelector('.additional-menu__button');
const brand = document.querySelector('.swiper-wrapper');
button.addEventListener('click', function () {
  button.classList.toggle('additional-menu__button_click');
  brand.classList.toggle('swiper-wrapperjs');

  if (brand.classList.contains('swiper-wrapperjs')) {
    button.textContent = 'Скрыть';
  } else {
    button.textContent = 'Показать Все';
  }
}); //для menu-technique

const buttonMenuTechnique = document.querySelector('.additional-menu-menu-technique__button');
const brandMenuTechnique = document.querySelector('.swiper-wrapper-menu-technique');
buttonMenuTechnique.addEventListener('click', function () {
  buttonMenuTechnique.classList.toggle('additional-menu-menu-technique__button_click');
  brandMenuTechnique.classList.toggle('swiper-wrapper-menu-techniquejs');

  if (brandMenuTechnique.classList.contains('swiper-wrapper-menu-techniquejs')) {
    buttonMenuTechnique.textContent = 'Скрыть';
  } else {
    buttonMenuTechnique.textContent = 'Показать Все';
  }
}); //для header

const arrowOpen = document.querySelector('.description__dop-menu');
const contentHidden = document.querySelector('.description__text_display');
console.log(contentHidden);
arrowOpen.addEventListener('click', function () {
  contentHidden.classList.toggle('description__text_display');
  arrowOpen.classList.toggle('description__dop-menujs');

  if (arrowOpen.classList.contains('description__dop-menujs')) {
    arrowOpen.textContent = 'Скрыть';
  } else {
    arrowOpen.textContent = 'Читать дальше';
  }
});

/***/ }),

/***/ "./src/js/side-menu.js":
/*!*****************************!*\
  !*** ./src/js/side-menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const buttonBurger = document.querySelector('.nav__list_display-burger');
const addSideMenu = document.querySelector('.container');
buttonBurger.addEventListener('click', function () {
  addSideMenu.classList.add('containerjs');
});
const buttonCloseSideMenu = document.querySelector('.nav-side-menu__button_burger-display');
console.log(buttonCloseSideMenu);
buttonCloseSideMenu.addEventListener('click', function () {
  addSideMenu.classList.remove('containerjs');
});
document.addEventListener('click', function (event) {
  if (!addSideMenu.contains(event.target) && !buttonBurger.contains(event.target)) {
    addSideMenu.classList.remove('containerjs');
  }
});
const buttonMessage = document.querySelector('.contact__link_display-message');
const buttonTelephone = document.querySelector('.contact__link_display-telephone');

if (buttonMessage) {
  buttonMessage.addEventListener('click', function () {
    addSideMenu.classList.remove('containerjs');
  });
}

if (buttonTelephone) {
  buttonTelephone.addEventListener('click', function () {
    addSideMenu.classList.remove('containerjs');
  });
} //для переключения между списком


document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.catalog__link');
  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      menuItems.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  const activeItem = document.querySelector('.catalog__link.active');

  if (!activeItem && menuItems.length > 0) {
    menuItems[0].classList.add('active');
  }
});

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

let swiperInstances = [];

function manageSwipers() {
  const screenWidth = window.innerWidth;
  const sliders = document.querySelectorAll('.swiper');

  if (screenWidth <= 767) {
    sliders.forEach((slider, index) => {
      if (!swiperInstances[index]) {
        swiperInstances[index] = new Swiper(slider, {
          slidesPerView: 1.2,
          spaceBetween: 16,
          loop: true,
          pagination: {
            el: slider.querySelector('.swiper-pagination'),
            clickable: true
          }
        });
      }
    });
  } else {
    swiperInstances.forEach((instance, index) => {
      if (instance) {
        instance.destroy(true, true);
        swiperInstances[index] = null;
      }
    });
  }
}

manageSwipers();
window.addEventListener('resize', manageSwipers);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map