module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5hP":
/***/ (function(module, exports) {

module.exports = {"header":{"title":"Jerry Chong","subtitle":"Full Stack Engineer","background_color":"#663AB7","background_image":"newcastle.jpg","background_images":[{"width":2560,"filename":"newcastle-xlarge.jpg"},{"width":1920,"filename":"newcastle.jpg"},{"width":1600,"filename":"newcastle-large.jpg"},{"width":1280,"filename":"newcastle-medium.jpg"},{"width":960,"filename":"newcastle-small.jpg"},{"width":480,"filename":"newcastle-xsmall.jpg"}]},"profile":{"title":"Profile","background_color":"#FFF","about":{"title":"About me","description":"Software engineer specialized in building mobile and web apps since 2015."},"bio":{"title":"Bio","list":[{"label":"Name","value":"Jerry Chong"},{"label":"City","value":"Kuala Lumpur"},{"label":"Country","value":"Malaysia"}]}},"experience":{"title":"Experience","background_color":"#41564E","list":[{"title":"Education","list":[{"location":"Universiti Tunku Abdul Rahman (UTAR)","time":{"from":"2012","to":"2016"},"title":"Bachelor of Engineering (Hons) Mechatronics Engineering","description":"Accredited by Malaysian Qualification Agency (MQA) and Board of Engineers Malaysia (BEM)"}]},{"title":"Career","list":[{"location":"Wirecard","time":{"from":"Dec 2016","to":"Jan 2019"},"title":"Software Engineer, R&D Customer Implementation","description":"Design and development of front end EDC terminal applications."},{"location":"Explosoft","time":{"from":"Feb 2016","to":"Aug 2019"},"title":"Full Stack Engineer","description":"Design and development of Android & iOS mobile apps, and Node.js web apps."},{"location":"Accenture","time":{"from":"Aug 2019","to":"Present"},"title":"Digital Business Integration Analyst","description":"Design and development of React and Node.js web apps."}]}]},"skills":{"title":"Skills","background_color":"#FFF","list":[{"label":"Node.js","value":4},{"label":"Android (Java & Kotlin)","value":4},{"label":"C","value":4},{"label":"iOS (Swift)","value":3},{"label":"SQL","value":3},{"label":"DevOps","value":3},{"label":"Google Cloud Platform (GCP)","value":3},{"label":"Amazon Web Services (AWS)","value":3},{"label":"Typescript","value":2},{"label":"C#","value":2},{"label":"Apigee","value":2},{"label":"Mulesoft","value":2},{"label":"React","value":2},{"label":"Angular","value":2}]},"contact":{"title":"Contact","background_color":"#5DC6DD","list":[{"label":"jerrychong25@gmail.com","link":"mailto:jerrychong25@gmail.com","icon_class":"envelope"},{"label":"LinkedIn","link":"https://my.linkedin.com/in/chonghf","icon_class":"linkedin-square"},{"label":"GitHub","link":"https://github.com/jerrychong25","icon_class":"github"},{"label":"Stack Overflow","link":"https://stackoverflow.com/users/5918539/jerry-chong","icon_class":"stack-overflow"}]}}

/***/ }),

/***/ "4eXR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "234e30fcb8d8f3074faf94677f88c158.jpg";

/***/ }),

/***/ "ELET":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f07de9feb4b96a94cca030577f550cd5.jpg";

/***/ }),

/***/ "JBMF":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./newcastle-large.jpg": "TH7f",
	"./newcastle-medium.jpg": "mo1Q",
	"./newcastle-small.jpg": "ELET",
	"./newcastle-xlarge.jpg": "YmqD",
	"./newcastle-xsmall.jpg": "4eXR",
	"./newcastle.jpg": "UCVP"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "JBMF";

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.scss
var style = __webpack_require__("yY49");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/unfetch/dist/unfetch.es.js
var index = typeof fetch == 'function' ? fetch.bind() : function (url, options) {
	options = options || {};
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials == 'include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body || null);

		function response() {
			var _keys = [],
			    all = [],
			    headers = {},
			    header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				_keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? header + "," + value : value;
			});

			return {
				ok: (request.status / 100 | 0) == 2, // 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function text() {
					return Promise.resolve(request.responseText);
				},
				json: function json() {
					return Promise.resolve(request.responseText).then(JSON.parse);
				},
				blob: function blob() {
					return Promise.resolve(new Blob([request.response]));
				},
				headers: {
					keys: function keys() {
						return _keys;
					},
					entries: function entries() {
						return all;
					},
					get: function get(n) {
						return headers[n.toLowerCase()];
					},
					has: function has(n) {
						return n.toLowerCase() in headers;
					}
				}
			};
		}
	});
};

/* harmony default export */ var unfetch_es = (index);
//# sourceMappingURL=unfetch.es.js.map
// CONCATENATED MODULE: ./components/home/header.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var requireAll = function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
};

var viewSize = function viewSize() {
	var viewport = typeof window !== 'undefined' ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : 1920,
	    ratio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

	return { viewport: viewport, ratio: ratio };
};

var chooseBackgroundImages = function chooseBackgroundImages(backgroundImages, imageModules, _ref) {
	var _ref$viewport = _ref.viewport,
	    viewport = _ref$viewport === undefined ? 1920 : _ref$viewport,
	    _ref$ratio = _ref.ratio,
	    ratio = _ref$ratio === undefined ? 1 : _ref$ratio;

	var headerImage = void 0,
	    imagesSized = backgroundImages.reduce(function (arr, image, i) {
		if (viewport * ratio < image.width) {
			image.filename = imageModules[i];
			arr.push(image);
		}

		return arr;
	}, []);
	if (imagesSized.length) {
		var lastImage = imagesSized.pop();
		if (lastImage && lastImage.filename) {
			headerImage = lastImage.filename;
		}
	} else {
		headerImage = imageModules[0];
	}

	return headerImage;
};

var determineImage = function determineImage(backgroundImage, backgroundImages) {
	var headerImage = void 0;
	if (backgroundImages) {
		var imageModules = requireAll(__webpack_require__("NfrT"));
		headerImage = chooseBackgroundImages(backgroundImages, imageModules, _extends({}, viewSize()));
	} else {
		headerImage = __webpack_require__("JBMF")("./" + backgroundImage);
	}

	if (headerImage) {
		return 'url(' + headerImage + ')';
	}
};

var header_Header = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state.background_image = props.background_image || props.background_images ? determineImage(props.background_image, props.background_images) : null;
		return _this;
	}

	Header.prototype.render = function render(props, _ref2) {
		var background_image = _ref2.background_image;

		return Object(preact_min["h"])(
			'header',
			{ 'class': 'header', style: { backgroundColor: props.background_color || null, backgroundImage: background_image } },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'header-wrapper' },
				Object(preact_min["h"])(
					'div',
					{ 'class': 'header-wrapper-text' },
					Object(preact_min["h"])(
						'h1',
						{ 'class': 'title', itemprop: 'name' },
						props.title
					),
					Object(preact_min["h"])(
						'h2',
						{ 'class': 'subtitle', itemprop: 'jobTitle' },
						props.subtitle
					)
				)
			)
		);
	};

	return Header;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/home/profile.js


function profile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function profile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var profile__ref = Object(preact_min["h"])("div", { "class": "divider" });

var profile_Profile = function (_Component) {
	profile__inherits(Profile, _Component);

	function Profile() {
		profile__classCallCheck(this, Profile);

		return profile__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Profile.prototype.render = function render(props) {
		var bioList = [];
		if (props.bio && props.bio.list) {
			var bioLabels = props.bio.list.map(function (item) {
				return Object(preact_min["h"])(
					"li",
					{ key: item.label },
					Object(preact_min["h"])(
						"strong",
						null,
						item.label
					)
				);
			}),
			    bioValues = props.bio.list.map(function (item) {
				return Object(preact_min["h"])(
					"li",
					{ key: item.value },
					item.value
				);
			});

			bioList = bioLabels.reduce(function (list, item, i) {
				list.push(item, bioValues[i]);
				return list;
			}, []);
		}

		return Object(preact_min["h"])(
			"main",
			{ "class": "main profile", style: { backgroundColor: props.background_color || null } },
			Object(preact_min["h"])(
				"div",
				{ "class": "main-wrapper" },
				Object(preact_min["h"])(
					"div",
					{ "class": "main-wrapper-text" },
					Object(preact_min["h"])(
						"h3",
						null,
						props.title
					)
				),
				profile__ref,
				Object(preact_min["h"])(
					"div",
					{ "class": "summary" },
					props.about && Object(preact_min["h"])(
						"h5",
						null,
						props.about.title
					),
					props.about && Object(preact_min["h"])(
						"p",
						null,
						props.about.description
					)
				),
				bioList.length && Object(preact_min["h"])(
					"div",
					{ "class": "details" },
					Object(preact_min["h"])(
						"h5",
						null,
						props.bio.title
					),
					Object(preact_min["h"])(
						"ul",
						null,
						bioList
					)
				)
			)
		);
	};

	return Profile;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/home/experience.js
var experience__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function experience__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function experience__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function experience__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var formatTime = function formatTime(_ref) {
	var from = _ref.from,
	    to = _ref.to;
	return [from, to].filter(function (val) {
		return val;
	}).join(' - ');
};

var experience_ResumeItem = function (_Component) {
	experience__inherits(ResumeItem, _Component);

	function ResumeItem() {
		experience__classCallCheck(this, ResumeItem);

		return experience__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ResumeItem.prototype.render = function render(_ref2) {
		var location = _ref2.location,
		    time = _ref2.time,
		    title = _ref2.title,
		    description = _ref2.description;

		var timePeriod = formatTime(experience__extends({}, time));

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'resume-item' },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'qualification' },
				Object(preact_min["h"])(
					'strong',
					null,
					location
				),
				Object(preact_min["h"])(
					'p',
					{ 'class': 'time-period' },
					timePeriod
				)
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': 'summary' },
				Object(preact_min["h"])(
					'strong',
					null,
					title
				),
				Object(preact_min["h"])(
					'p',
					null,
					description
				)
			)
		);
	};

	return ResumeItem;
}(preact_min["Component"]);

var experience_ExperienceItem = function (_Component2) {
	experience__inherits(ExperienceItem, _Component2);

	function ExperienceItem() {
		experience__classCallCheck(this, ExperienceItem);

		return experience__possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	ExperienceItem.prototype.render = function render(_ref3) {
		var title = _ref3.title,
		    list = _ref3.list;

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'resume' },
			Object(preact_min["h"])(
				'h5',
				null,
				title
			),
			list && list.map(function (item) {
				return Object(preact_min["h"])(experience_ResumeItem, item);
			})
		);
	};

	return ExperienceItem;
}(preact_min["Component"]);

var _ref4 = Object(preact_min["h"])('div', { 'class': 'divider' });

var experience_Experience = function (_Component3) {
	experience__inherits(Experience, _Component3);

	function Experience() {
		experience__classCallCheck(this, Experience);

		return experience__possibleConstructorReturn(this, _Component3.apply(this, arguments));
	}

	Experience.prototype.render = function render(props) {
		return Object(preact_min["h"])(
			'section',
			{ 'class': 'experience section', style: { backgroundColor: props.background_color || null } },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'main-wrapper' },
				Object(preact_min["h"])(
					'div',
					{ 'class': 'main-wrapper-text' },
					Object(preact_min["h"])(
						'h3',
						null,
						props.title
					)
				),
				props.list && props.list.map(function (item) {
					return Object(preact_min["h"])(
						'div',
						{ 'class': 'experience-item' },
						_ref4,
						Object(preact_min["h"])(experience_ExperienceItem, item)
					);
				})
			)
		);
	};

	return Experience;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/icon.js

var icon_FaIcon = function FaIcon(_ref) {
	var icon = _ref.icon;
	return Object(preact_min["h"])("i", { "class": "fa fa-" + icon, "aria-hidden": "true" });
};

/* harmony default export */ var components_icon = (icon_FaIcon);
// CONCATENATED MODULE: ./components/home/skills.js


function skills__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function skills__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function skills__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var skills__ref2 = Object(preact_min["h"])(components_icon, { icon: 'star' });

var skills__ref3 = Object(preact_min["h"])(components_icon, { icon: 'star-o' });

var skills_SkillItem = function (_Component) {
	skills__inherits(SkillItem, _Component);

	function SkillItem() {
		skills__classCallCheck(this, SkillItem);

		return skills__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	SkillItem.prototype.render = function render(_ref) {
		var label = _ref.label,
		    value = _ref.value;

		var starsFull = Array(value).fill().map(function (val) {
			return skills__ref2;
		}),
		    starsEmpty = Array(5 - value).fill().map(function (val) {
			return skills__ref3;
		});

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'skillset-item' },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'skill-values' },
				Object(preact_min["h"])(
					'div',
					{ 'class': 'skill-name' },
					Object(preact_min["h"])(
						'p',
						null,
						label
					)
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': 'skill-score' },
					starsFull,
					starsEmpty
				)
			)
		);
	};

	return SkillItem;
}(preact_min["Component"]);

var skills__ref4 = Object(preact_min["h"])('div', { 'class': 'divider' });

var skills_Skills = function (_Component2) {
	skills__inherits(Skills, _Component2);

	function Skills() {
		skills__classCallCheck(this, Skills);

		return skills__possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	Skills.prototype.render = function render(props) {
		return Object(preact_min["h"])(
			'section',
			{ 'class': 'skills section', style: { backgroundColor: props.background_color || null } },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'main-wrapper' },
				Object(preact_min["h"])(
					'div',
					{ 'class': 'main-wrapper-text' },
					Object(preact_min["h"])(
						'h3',
						null,
						props.title
					)
				),
				skills__ref4,
				props.list && props.list.map(function (item) {
					return Object(preact_min["h"])(skills_SkillItem, item);
				})
			)
		);
	};

	return Skills;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/home/footer.js


function footer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function footer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function footer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var footer_FooterItem = function (_Component) {
	footer__inherits(FooterItem, _Component);

	function FooterItem() {
		footer__classCallCheck(this, FooterItem);

		return footer__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	FooterItem.prototype.render = function render(_ref) {
		var label = _ref.label,
		    link = _ref.link,
		    icon_class = _ref.icon_class;

		return Object(preact_min["h"])(
			'div',
			{ 'class': 'footer-link' },
			Object(preact_min["h"])(
				'a',
				{ href: link, target: '_blank', rel: 'noopener noreferrer' },
				Object(preact_min["h"])(components_icon, { icon: icon_class }),
				' ',
				label
			)
		);
	};

	return FooterItem;
}(preact_min["Component"]);

var footer__ref2 = Object(preact_min["h"])('div', { 'class': 'divider' });

var footer_Footer = function (_Component2) {
	footer__inherits(Footer, _Component2);

	function Footer() {
		footer__classCallCheck(this, Footer);

		return footer__possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	Footer.prototype.render = function render(props) {
		return Object(preact_min["h"])(
			'footer',
			{ 'class': 'footer', style: { backgroundColor: props.background_color || null } },
			Object(preact_min["h"])(
				'div',
				{ 'class': 'footer-wrapper' },
				Object(preact_min["h"])(
					'div',
					{ 'class': 'footer-wrapper-text' },
					Object(preact_min["h"])(
						'h3',
						null,
						props.title
					)
				),
				footer__ref2,
				props.list && props.list.map(function (item) {
					return Object(preact_min["h"])(footer_FooterItem, item);
				})
			)
		);
	};

	return Footer;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/home/index.js


function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var home_Home = function (_Component) {
	home__inherits(Home, _Component);

	function Home() {
		var _temp, _this, _ret;

		home__classCallCheck(this, Home);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = home__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			profile: __webpack_require__("+5hP")
		}, _temp), home__possibleConstructorReturn(_this, _ret);
	}

	Home.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		unfetch_es('/profile.json').then(function (response) {
			return response.json();
		}).then(function (profile) {
			return _this2.setState({ profile: profile });
		});
	};

	Home.prototype.render = function render(_ref, _ref2) {
		var profile = _ref2.profile;

		_objectDestructuringEmpty(_ref);

		return Object(preact_min["h"])(
			'div',
			{ itemscope: true, itemprop: 'Person', itemtype: 'https://schema.org/Person' },
			profile.header && Object(preact_min["h"])(header_Header, profile.header),
			profile.profile && Object(preact_min["h"])(profile_Profile, profile.profile),
			profile.experience && Object(preact_min["h"])(experience_Experience, profile.experience),
			profile.skills && Object(preact_min["h"])(skills_Skills, profile.skills),
			profile.contact && Object(preact_min["h"])(footer_Footer, profile.contact)
		);
	};

	return Home;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var app__ref = Object(preact_min["h"])(
	'div',
	{ id: 'app' },
	Object(preact_min["h"])(home_Home, null)
);

var App = function (_Component) {
	app__inherits(App, _Component);

	function App() {
		app__classCallCheck(this, App);

		return app__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	App.prototype.render = function render() {
		return app__ref;
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index_0 = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = M;for (i = arguments.length; i-- > 2;) {
      T.push(arguments[i]);
    }t && null != t.children && (T.length || T.push(t.children), delete t.children);while (T.length) {
      if ((o = T.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        T.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === M ? l = [o] : l.push(o), n = r;
    }var a = new S();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== L.vnode && L.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function o(e) {
    !e.__d && (e.__d = !0) && 1 == D.push(e) && (L.debounceRendering || P)(r);
  }function r() {
    var e,
        t = D;D = [];while (e = t.pop()) {
      e.__d && C(e);
    }
  }function i(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function l(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function a(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function p(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function s(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function u(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === W.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, c, l) : e.removeEventListener(t, c, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) {
        try {
          e[t] = null == o ? "" : o;
        } catch (e) {}null != o && !1 !== o || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function c(e) {
    return this.__l[e.type](L.event && L.event(e) || e);
  }function _() {
    var e;while (e = E.pop()) {
      L.afterMount && L.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    V++ || (A = null != r && void 0 !== r.ownerSVGElement, H = null != e && !("__preactattr_" in e));var l = f(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --V || (H = !1, i || _()), l;
  }function f(e, t, n, o, r) {
    var i = e,
        a = A;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0))), i.__preactattr_ = !0, i;var s = t.nodeName;if ("function" == typeof s) return x(e, t, n, o);if (A = "svg" === s || "foreignObject" !== s && A, s += "", (!e || !l(e, s)) && (i = p(s, A), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0);
    }var u = i.firstChild,
        c = i.__preactattr_,
        _ = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var d = i.attributes, f = d.length; f--;) {
        c[d[f].name] = d[f].value;
      }
    }return !H && _ && 1 === _.length && "string" == typeof _[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != _[0] && (u.nodeValue = _[0]) : (_ && _.length || null != u) && h(i, _, n, o, H || null != c.dangerouslySetInnerHTML), b(i, t.attributes, c), A = a, i;
  }function h(e, t, n, o, r) {
    var l,
        a,
        p,
        u,
        c,
        _ = e.childNodes,
        d = [],
        h = {},
        v = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (v++, h[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (d[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      u = t[C], c = null;var k = u.key;if (null != k) v && void 0 !== h[k] && (c = h[k], h[k] = void 0, v--);else if (b < g) for (l = b; l < g; l++) {
        if (void 0 !== d[l] && i(a = d[l], u, r)) {
          c = a, d[l] = void 0, l === g - 1 && g--, l === b && b++;break;
        }
      }c = f(c, u, n, o), p = _[C], c && c !== e && c !== p && (null == p ? e.appendChild(c) : c === p.nextSibling ? s(p) : e.insertBefore(c, p));
    }if (v) for (var C in h) {
      void 0 !== h[C] && m(h[C], !1);
    }while (b <= g) {
      void 0 !== (c = d[g--]) && m(c, !1);
    }
  }function m(e, t) {
    var n = e._component;n ? N(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || s(e), v(e));
  }function v(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;m(e, !0), e = t;
    }
  }function b(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || u(e, o, n[o], n[o] = void 0, A);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || u(e, o, n[o], n[o] = t[o], A);
    }
  }function y(e, t, n) {
    var o,
        r = B.length;e.prototype && e.prototype.render ? (o = new e(t, n), k.call(o, t, n)) : (o = new k(t, n), o.constructor = e, o.render = g);while (r--) {
      if (B[r].constructor === e) return o.__b = B[r].__b, B.splice(r, 1), o;
    }return o;
  }function g(e, t, n) {
    return this.constructor(e, n);
  }function w(e, t, n, r, i) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.__c || (e.__c = e.context), e.context = r), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === L.syncComponentUpdates && e.base ? o(e) : C(e, 1, i)), e.__r && e.__r(e));
  }function C(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          p,
          s = e.props,
          u = e.state,
          c = e.context,
          f = e.__p || s,
          h = e.__s || u,
          v = e.__c || c,
          b = e.base,
          g = e.__b,
          x = b || g,
          k = e._component,
          U = !1,
          S = v;if (e.constructor.getDerivedStateFromProps && (u = t(t({}, u), e.constructor.getDerivedStateFromProps(s, u)), e.state = u), b && (e.props = f, e.state = h, e.context = v, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, c) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, c), e.props = s, e.state = u, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(s, u, c), e.getChildContext && (c = t(t({}, c), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(f, h));var T,
            M,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = a(i);l = k, l && l.constructor === P && W.key == l.__k ? w(l, W, 1, c, !1) : (T = l, e._component = l = y(P, W, c), l.__b = l.__b || g, l.__u = e, w(l, W, 0, c, !1), C(l, 1, o, !0)), M = l.base;
        } else p = x, T = k, T && (p = e._component = null), (x || 1 === n) && (p && (p._component = null), M = d(p, i, c, o || !b, x && x.parentNode, !0));if (x && M !== x && l !== k) {
          var D = x.parentNode;D && M !== D && (D.replaceChild(M, x), T || (x._component = null, m(x, !1)));
        }if (T && N(T), e.base = M, M && !r) {
          var A = e,
              H = e;while (H = H.__u) {
            (A = H).base = M;
          }M._component = A, M._componentConstructor = A.constructor;
        }
      }!b || o ? E.unshift(e) : U || (e.componentDidUpdate && e.componentDidUpdate(f, h, S), L.afterUpdate && L.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }V || r || _();
    }
  }function x(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        p = r && e._componentConstructor === t.nodeName,
        s = p,
        u = a(t);while (r && !s && (r = r.__u)) {
      s = r.constructor === t.nodeName;
    }return r && s && (!o || r._component) ? (w(r, u, 3, n, o), e = r.base) : (i && !p && (N(i), e = l = null), r = y(t.nodeName, u, n), e && !r.__b && (r.__b = e, l = null), w(r, u, 1, n, o), e = r.base, l && e !== l && (l._component = null, m(l, !1))), e;
  }function N(e) {
    L.beforeUnmount && L.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? N(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, s(t), B.push(e), v(t)), e.__r && e.__r(null);
  }function k(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function U(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }var S = function S() {},
      L = {},
      T = [],
      M = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      D = [],
      E = [],
      V = 0,
      A = !1,
      H = !1,
      B = [];t(k.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), o(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), C(this, 2);
    }, render: function render() {} });var F = { h: e, createElement: e, cloneElement: n, Component: k, render: U, rerender: r, options: L }; true ? module.exports = F : self.preact = F;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "NfrT":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./newcastle-large.jpg": "TH7f",
	"./newcastle-medium.jpg": "mo1Q",
	"./newcastle-small.jpg": "ELET",
	"./newcastle-xlarge.jpg": "YmqD",
	"./newcastle-xsmall.jpg": "4eXR",
	"./newcastle.jpg": "UCVP"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "NfrT";

/***/ }),

/***/ "TH7f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e4e1d8d6f4efb1f85bcc338de57704f.jpg";

/***/ }),

/***/ "UCVP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfb572d7700e8995aefaf25a49cbb7d9.jpg";

/***/ }),

/***/ "YmqD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa1386098b541e95769539f4bdb64bf8.jpg";

/***/ }),

/***/ "mo1Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dde14227fd6e8257f5a31eb7deb2ea3a.jpg";

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map