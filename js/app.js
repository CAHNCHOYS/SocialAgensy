/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/actions.js":
/*!***************************!*\
  !*** ./src/js/actions.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n//код js для сайта\r\nwindow.onload = () => {\r\n  //Код бургера-----------------------------------------------\r\n  const headerBurgerIcon = document.querySelector(\".header__burger\");\r\n  const burgerMenu = document.querySelector(\".header__main-menu\");\r\n  if (headerBurgerIcon) {\r\n    headerBurgerIcon.addEventListener(\"click\", function () {\r\n      headerBurgerIcon.classList.toggle(\"_active\");\r\n      document.body.classList.toggle(\"_isLocked\");\r\n      burgerMenu.classList.toggle(\"_active\");\r\n    });\r\n  }\r\n  //--------------------------------------------------------\r\n\r\n  if (document.body.classList.contains(\"_mobile\")) {\r\n    const headerArrows = document.querySelectorAll(\".header__arrow\");\r\n    for (const headerArrow of headerArrows) {\r\n      headerArrow.addEventListener(\"click\", function () {\r\n        headerArrow\r\n          .closest(\"li\")\r\n          .querySelector(\"ul\")\r\n          .classList.toggle(\"_active\");\r\n        this.classList.toggle(\"_active\");\r\n      });\r\n    }\r\n  }\r\n\r\n  const header = document.querySelector(\".header\");\r\n  if (header) {\r\n    window.addEventListener(\"scroll\", (e) => {\r\n      if (scrollY > 20) {\r\n        header.classList.add(\"_scroll\");\r\n      } else header.classList.remove(\"_scroll\");\r\n    });\r\n  }\r\n\r\n\r\n\r\n  window.scrollBy(0, 5);\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n};\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/actions.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile.js */ \"./src/js/modules/mobile.js\");\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_spollers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/spollers.js */ \"./src/js/modules/spollers.js\");\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.js */ \"./src/js/actions.js\");\n//Проверка на устройство----------------------------\r\n\r\nif (_modules_mobile_js__WEBPACK_IMPORTED_MODULE_0__.isMobile.any()) {\r\n  document.body.classList.add(\"_mobile\");\r\n} else {\r\n  document.body.classList.add(\"_pc\");\r\n}\r\n//---------------------------------------------------\r\n//---------------------------------------------------\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_1__.testWebP)(function (support) {\r\n  if (support == true) {\r\n    document.querySelector(\"body\").classList.add(\"webp\");\r\n  } else {\r\n    document.querySelector(\"body\").classList.add(\"no-webp\");\r\n  }\r\n});\r\n\r\n//---------------------------------------------------\r\n\r\n\r\n//Подключение файлов\r\n\r\n/*------------------------------------------------------------------------------Спойлеры js ----------------------------------------------------------------------*/   \r\n \r\n/*------------------------------------------------------------------------------------------------------------------------------------------------------*/\r\n\r\n/*------------------------------------------------------------------------------Табы.js ----------------------------------------------------------------------*/   \r\n//import './modules/tabs.js'; \r\n/*------------------------------------------------------------------------------------------------------------------------------------------------------*/\r\n\r\n/*------------------------------------------------------------------------------ popus.js ----------------------------------------------------------------------*/   \r\n//import './modules/popups.js'; \r\n/*------------------------------------------------------------------------------------------------------------------------------------------------------*/\r\n\r\n// import './modules/animItems.js';\r\n\r\n\r\n// Динамический адаптив\r\n//import './dynamic-adapt.js' \r\n\r\n//\r\n\r\n\r\n\r\n //js код на сайте\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/mobile.js":
/*!**********************************!*\
  !*** ./src/js/modules/mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile)\n/* harmony export */ });\nconst  isMobile = {\r\n    Android: function () {\r\n      return navigator.userAgent.match(/Android/i);\r\n    },\r\n    BlackBerry: function () {\r\n      return navigator.userAgent.match(/BlackBerry/i);\r\n    },\r\n    iOS: function () {\r\n      return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n    },\r\n    Opera: function () {\r\n      return navigator.userAgent.match(/Opera Mini/i);\r\n    },\r\n    Windows: function () {\r\n      return navigator.userAgent.match(/IEMobile/i);\r\n    },\r\n    any: function () {\r\n      return (\r\n        isMobile.Android() ||\r\n        isMobile.BlackBerry() ||\r\n        isMobile.iOS() ||\r\n        isMobile.Opera() ||\r\n        isMobile.Windows()\r\n      );\r\n    },\r\n  };\n\n//# sourceURL=webpack://gulp-template/./src/js/modules/mobile.js?");

/***/ }),

/***/ "./src/js/modules/slideDown.js":
/*!*************************************!*\
  !*** ./src/js/modules/slideDown.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_slideDown\": () => (/* binding */ _slideDown),\n/* harmony export */   \"_slideToggle\": () => (/* binding */ _slideToggle),\n/* harmony export */   \"_slideUp\": () => (/* binding */ _slideUp)\n/* harmony export */ });\nlet _slideUp = (target, duration) => {\r\n   if (!target.classList.contains(\"_slide\")) {\r\n     target.classList.add(\"_slide\");\r\n     target.style.transitionProperty = \"height, margin, padding\"; /* [1.1] */\r\n     target.style.transitionDuration = duration + \"ms\"; /* [1.2] */\r\n \r\n     target.style.height = target.offsetHeight + \"px\"; /* [3] */\r\n     target.offsetHeight;\r\n     target.style.overflow = \"hidden\"; /* [7] */\r\n     target.style.height = 0; /* [4] */\r\n     target.style.paddingTop = 0; /* [5.1] */\r\n     target.style.paddingBottom = 0; /* [5.2] */\r\n     target.style.marginTop = 0; /* [6.1] */\r\n     target.style.marginBottom = 0; /* [7.2] */\r\n \r\n     window.setTimeout(() => {\r\n       target.style.display = \"none\"; /* [8] */\r\n       target.style.removeProperty(\"height\"); /* [9] */\r\n       target.style.removeProperty(\"padding-top\"); /* [10.1] */\r\n       target.style.removeProperty(\"padding-bottom\"); /* [10.2] */\r\n       target.style.removeProperty(\"margin-top\"); /* [11.1] */\r\n       target.style.removeProperty(\"margin-bottom\"); /* [11.2] */\r\n       target.style.removeProperty(\"overflow\"); /* [12] */\r\n       target.style.removeProperty(\"transition-duration\"); /* [13.1] */\r\n       target.style.removeProperty(\"transition-property\"); /* [13.2] */\r\n       target.classList.remove(\"_slide\");\r\n     }, duration);\r\n   }\r\n };\r\n \r\n let _slideDown = (target, duration) => {\r\n   if (!target.classList.contains(\"_slide\")) {\r\n     target.classList.add(\"_slide\");\r\n     target.style.removeProperty(\"display\"); /* [1] */\r\n     let display = window.getComputedStyle(target).display;\r\n     if (display === \"none\") {\r\n       /* [2] */\r\n       display = \"block\";\r\n     }\r\n     target.style.display = display;\r\n     let height = target.offsetHeight; /* [3] */\r\n     target.style.overflow = \"hidden\"; /* [7] */\r\n     target.style.height = 0; /* [4] */\r\n     target.style.paddingTop = 0; /* [5.1] */\r\n     target.style.paddingBottom = 0; /* [5.2] */\r\n     target.style.marginTop = 0; /* [6.1] */\r\n     target.style.marginBottom = 0; /* [6.2] */\r\n     target.offsetHeight;\r\n \r\n     target.style.transitionProperty = \"height, margin, padding\"; /* [9.1] */\r\n     target.style.transitionDuration = duration + \"ms\"; /* [9.2] */\r\n     target.style.height = height + \"px\"; /* [10] */\r\n     target.style.removeProperty(\"padding-top\"); /* [11.1] */\r\n     target.style.removeProperty(\"padding-bottom\"); /* [11.2] */\r\n     target.style.removeProperty(\"margin-top\"); /* [12.1] */\r\n     target.style.removeProperty(\"margin-bottom\"); /* [12.2] */\r\n     window.setTimeout(() => {\r\n       target.style.removeProperty(\"height\"); /* [13] */\r\n       target.style.removeProperty(\"overflow\"); /* [14] */\r\n       target.style.removeProperty(\"transition-duration\"); /* [15.1] */\r\n       target.style.removeProperty(\"transition-property\"); /* [15.2] */\r\n       target.classList.remove(\"_slide\");\r\n     }, duration);\r\n   }\r\n };\r\n \r\n let _slideToggle = (target, duration = 500) => {\r\n   if (window.getComputedStyle(target).display === \"none\") {\r\n     return _slideDown(target, duration);\r\n   } else {\r\n     return _slideUp(target, duration);\r\n   }\r\n };\n\n//# sourceURL=webpack://gulp-template/./src/js/modules/slideDown.js?");

/***/ }),

/***/ "./src/js/modules/spollers.js":
/*!************************************!*\
  !*** ./src/js/modules/spollers.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slideDown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideDown.js */ \"./src/js/modules/slideDown.js\");\n//Работа со спойлерами\r\n//У родителей спойлеров добавляем атрибут data-spollers \r\n//Если хотим чтобы работал на экранах ниже или больше опр. значения то пишем в атрибуте число и ,min max соответсвтенно \r\n// data-spollers=\"800,max\" - работает на экранах меньше 800 px\r\n//Если должен работать всегда то оставляем пустым : data-spollers\r\n//Если должен открываться одновременно только один спойлер то добавляем атрибут data-one-spoller\r\n//Перед элементов который должен что-то открывать или закрвать добавляем элемент:\r\n//  <button tabindex=\"-1\" class=\"spollers__spoller\" data-spoller>Max spoller</button>\r\n// И после него само тело спойлера \r\n\r\n\r\n\r\n\r\n\r\nconst spollersArray = document.querySelectorAll(\"[data-spollers]\");\r\nif (spollersArray.length > 0) {\r\n  const regularSpollers = Array.from(spollersArray).filter((spoller) => {\r\n    return !spoller.dataset.spollers.split(\",\")[0];\r\n  });\r\n\r\n  if (regularSpollers.length > 0) {\r\n    initSpollers(regularSpollers);\r\n  }\r\n\r\n  const mediaSpollers = Array.from(spollersArray).filter((spoller) => {\r\n    return spoller.dataset.spollers.split(\",\")[0];\r\n  });\r\n\r\n  if (mediaSpollers.length > 0) {\r\n    const breakPoints = [];\r\n    mediaSpollers.forEach((spoller) => {\r\n      const params = spoller.dataset.spollers;\r\n    \r\n      const breakpoint = {};\r\n      const paramsArray = params.split(\",\");\r\n      breakpoint.value = paramsArray[0];\r\n      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : \"max\";\r\n      breakpoint.item = spoller;\r\n      breakPoints.push(breakpoint);\r\n    });\r\n\r\n    let mediaQueries = breakPoints.map(function (item) {\r\n      return (\r\n        \"(\" +\r\n        item.type +\r\n        \"-width: \" +\r\n        item.value +\r\n        \"px),\" +\r\n        item.value +\r\n        \",\" +\r\n        item.type\r\n      );\r\n    });\r\n\r\n    mediaQueries = mediaQueries.filter((item, index, self) => {\r\n      return self.indexOf(item) === index;\r\n    });\r\n\r\n    mediaQueries.forEach((breakpoint) => {\r\n      const paramsArray = breakpoint.split(\",\");\r\n      const mediaBreakpoint = paramsArray[1];\r\n      const mediaType = paramsArray[2];\r\n      const matchMedia = window.matchMedia(paramsArray[0]);\r\n\r\n      const spollersArray = breakPoints.filter((item) => {\r\n        if(item.value === mediaBreakpoint && item.type === mediaType)\r\n         return true;\r\n      });\r\n       \r\n      matchMedia.addListener(function () {\r\n        initSpollers(spollersArray, matchMedia);\r\n      });\r\n\r\n      initSpollers(spollersArray, matchMedia);\r\n    });\r\n\r\n  }\r\n\r\n  function initSpollers(spollersArray, matchMedia = false) {\r\n    spollersArray.forEach((spollersBlock) => {\r\n    \r\n      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;\r\n      if (matchMedia.matches || !matchMedia) {\r\n        spollersBlock.classList.add(\"_init\");\r\n        initSpollersBody(spollersBlock);\r\n        spollersBlock.addEventListener(\"click\", setSpollerAction);\r\n      } else {\r\n       \r\n        spollersBlock.classList.remove(\"_init\");\r\n        initSpollersBody(spollersBlock, false);\r\n        spollersBlock.removeEventListener(\"click\", setSpollerAction);\r\n      }\r\n    });\r\n  }\r\n\r\n  function initSpollersBody(spollersBlock, hideSpollerBody = true) {\r\n    const blockSpollers = spollersBlock.querySelectorAll(\"[data-spoller]\");\r\n    if (blockSpollers.length > 0) {\r\n      blockSpollers.forEach((spoller) => {\r\n        if (hideSpollerBody) {\r\n          spoller.removeAttribute(\"tabindex\");\r\n          if (!spoller.classList.contains(\"_active\")) {\r\n            spoller.nextElementSibling.hidden = true;\r\n          }\r\n        } else {\r\n          spoller.setAttribute(\"tabindex\", \"-1\");\r\n          spoller.nextElementSibling.hidden = false;\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  function setSpollerAction(e) {\r\n    const el = e.target;\r\n\r\n    if (el.hasAttribute(\"data-spoller\") || el.closest(\"[data-spoller]\")) {\r\n      const spollerTitle = el.hasAttribute(\"data-spoller\")\r\n        ? el\r\n        : el.closest(\"[data-spoller]\");\r\n      const spollersBlock = spollerTitle.closest(\"[data-spollers]\");\r\n      const oneSpoller = spollersBlock.hasAttribute(\"data-one-spoller\")\r\n        ? true\r\n        : false;\r\n\r\n      if (!spollersBlock.querySelectorAll(\"._slide\").length) {\r\n        if (oneSpoller && !spollerTitle.classList.contains(\"_active\")) {\r\n          hideSpollerBody(spollersBlock);\r\n\r\n        }\r\n        spollerTitle.classList.toggle('_active');\r\n        (0,_slideDown_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(spollerTitle.nextElementSibling,800);\r\n      }\r\n      e.preventDefault();\r\n    }\r\n  }\r\n\r\n  function hideSpollerBody(spollerBlock) {\r\n    const spollerActiveTitle = spollerBlock.querySelector('[data-spoller]._active');\r\n    if(spollerActiveTitle) {\r\n      spollerActiveTitle.classList.remove('_active');\r\n      (0,_slideDown_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(spollerActiveTitle.nextElementSibling,800);\r\n    }\r\n\r\n  }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/modules/spollers.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testWebP\": () => (/* binding */ testWebP)\n/* harmony export */ });\nfunction testWebP(callback) {\r\n    var webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n      callback(webP.height == 2);\r\n    };\r\n    webP.src =\r\n      \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n  }\r\n  \n\n//# sourceURL=webpack://gulp-template/./src/js/modules/webp.js?");

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n//заготавка под свайпер и объявление и адаптация слайдеров ==============\r\nlet sliders = document.querySelectorAll(\"._swiper\");\r\nif (sliders.length > 0) {\r\n  for (let index = 0; index < sliders.length; index++) {\r\n    let slider = sliders[index];\r\n    if (!slider.classList.contains(\"swiper-bild\")) {\r\n      let sliderItems = slider.children;\r\n\r\n      if (sliderItems.length > 0) {\r\n        for (const child of sliderItems) {\r\n          child.classList.add(\"swiper-slide\");\r\n        }\r\n      }\r\n\r\n      let slider_content = slider.innerHTML;\r\n      let SwiperWrapper = document.createElement(\"div\");\r\n      SwiperWrapper.classList.add(\"swiper-wrapper\");\r\n      SwiperWrapper.innerHTML = slider_content;\r\n      slider.innerHTML = \"\";\r\n      slider.appendChild(SwiperWrapper);\r\n      slider.classList.add(\"swiper-bild\");\r\n\r\n      let btnPrev = document.createElement(\"div\");\r\n      btnPrev.className = \"swiper-button-prev\";\r\n      slider.appendChild(btnPrev);\r\n      let btnNext = document.createElement(\"div\");\r\n      btnNext.className = \"swiper-button-next\";\r\n      slider.appendChild(btnNext);\r\n\r\n      if (slider.classList.contains(\"_swiper_scroll\")) {\r\n        let sliderScroll = document.createElement(\"div\");\r\n        sliderScroll.classList.add(\"swiper-scrollbar\");\r\n        slider.appendChild(sliderScroll);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction slide_Bind_content(params) {}\r\nif (document.querySelector(\".mainslider__slider\")) {\r\n  new Swiper(\".mainslider__slider\", {\r\n    //Отстутпы между слайдами\r\n    spaceBetween: 0,\r\n    //Слайды на пролисьывание (сколько будет листаться)\r\n    slidesPerGroup: 1,\r\n    //Сколько слайдов будет видно\r\n    slidesPerView: 1,\r\n\r\n    // centeredSlides:true\r\n    speed: 600,\r\n    //Возможные варианты:flip slide cube coverflow fade\r\n    effect: \"slide\",\r\n    loop: true,\r\n    navigation: {\r\n      nextEl: \".mainslider__btn.icon-arrow-right\",\r\n      prevEl: \".mainslider__btn.icon-arrow-left\",\r\n    },\r\n    //Точки буллиты\r\n    // pagination:{\r\n    //     el:'.class',\r\n    //     clickable:true,\r\n    //\r\n    // },\r\n    grabCursor: false,\r\n    keyboard: {\r\n      // Включаем управление клавиатурой\r\n      enabled: true,\r\n      //Только при поле зрения\r\n      onlyInViewport: true,\r\n      pageUpDown: true,\r\n    },\r\n    autoHeight: true,\r\n    breakpoints: {\r\n      320: {},\r\n      990: {},\r\n    },\r\n\r\n    observer: true,\r\n  });\r\n}\r\n\r\nif (document.querySelector(\".choose__slider\")) {\r\n  new Swiper(\".choose__slider\", {\r\n    //Отстутпы между слайдами\r\n    spaceBetween: 0,\r\n    //Слайды на пролисьывание (сколько будет листаться)\r\n    slidesPerGroup: 1,\r\n    //Сколько слайдов будет видно\r\n    slidesPerView: 1,\r\n\r\n    // centeredSlides:true\r\n    speed: 600,\r\n    //Возможные варианты:flip slide cube coverflow fade\r\n    effect: \"slide\",\r\n    loop: true,\r\n    navigation: {\r\n      nextEl: \".choose__control.icon-arrow-right\",\r\n      prevEl: \".choose__control.icon-arrow-left\",\r\n    },\r\n    //Точки буллиты\r\n    // pagination:{\r\n    //     el:'.class',\r\n    //     clickable:true,\r\n    //\r\n    // },\r\n    grabCursor: false,\r\n    keyboard: {\r\n      // Включаем управление клавиатурой\r\n      enabled: true,\r\n      //Только при поле зрения\r\n      onlyInViewport: true,\r\n      pageUpDown: true,\r\n    },\r\n    // autoHeight: true,\r\n    breakpoints: {\r\n      320: {},\r\n      990: {},\r\n    },\r\n\r\n    observer: true,\r\n  });\r\n}\r\n\r\nif (document.querySelector(\".replies__slider\")) {\r\n  new Swiper(\".replies__slider\", {\r\n    //Отстутпы между слайдами\r\n    spaceBetween: 0,\r\n    //Слайды на пролисьывание (сколько будет листаться)\r\n    slidesPerGroup: 1,\r\n    //Сколько слайдов будет видно\r\n    slidesPerView: 1,\r\n  \r\n    // centeredSlides:true\r\n    speed: 800,\r\n    //Возможные варианты:flip slide cube coverflow fade\r\n    effect: \"slide\",\r\n    loop: false,\r\n    navigation: {\r\n      nextEl: \".replies__btn.icon-arrow-right\",\r\n      prevEl: \".replies__btn.icon-arrow-left\",\r\n    },\r\n   \r\n    pagination:{\r\n        el:'.replies__slider-bullets',\r\n        clickable:true,\r\n    \r\n    },\r\n    grabCursor: false,\r\n    keyboard: {\r\n      // Включаем управление клавиатурой\r\n      enabled: true,\r\n      //Только при поле зрения\r\n      onlyInViewport: true,\r\n      pageUpDown: true,\r\n    },\r\n    autoHeight: true,\r\n    breakpoints: {\r\n      320: {},\r\n      990: {},\r\n    },\r\n\r\n    observer: true,\r\n  });\r\n}\r\n//=============================================================\r\n\n\n//# sourceURL=webpack://gulp-template/./src/js/sliders.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;