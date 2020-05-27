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

module.exports = {"header":{"title":"Jerry Chong","subtitle":"Full Stack Engineer","background_color":"#663AB7","background_image":"newcastle.jpg","background_images":[{"width":2560,"filename":"newcastle-xlarge.jpg"},{"width":1920,"filename":"newcastle.jpg"},{"width":1600,"filename":"newcastle-large.jpg"},{"width":1280,"filename":"newcastle-medium.jpg"},{"width":960,"filename":"newcastle-small.jpg"},{"width":480,"filename":"newcastle-xsmall.jpg"}]},"profile":{"title":"Profile","background_color":"#FFF","about":{"title":"About me","description":"Building web cum mobile apps, and IoT apps integration since 2015. During free time, I volunteer as Wikipedia Editor, Google Map Editor and Facebook Map Editor for helping our communities."},"bio":{"title":"Bio","list":[{"label":"Name","value":"Jerry Chong"},{"label":"City","value":"Kuala Lumpur"},{"label":"Country","value":"Malaysia"}]}},"experience":{"title":"Experience","background_color":"#41564E","list":[{"title":"Education","list":[{"location":"Universiti Tunku Abdul Rahman (UTAR)","time":{"from":"2012","to":"2016"},"title":"Bachelor of Engineering (Hons) Mechatronics Engineering","description":"Accredited by Malaysian Qualification Agency (MQA) and Board of Engineers Malaysia (BEM)"}]},{"title":"Career","list":[{"location":"Wirecard","time":{"from":"Dec 2016","to":"Jan 2019"},"title":"Software Engineer, R&D Customer Implementation","description":"Design and development of front end EDC terminal applications."},{"location":"Explosoft","time":{"from":"Feb 2016","to":"Aug 2019"},"title":"Full Stack Engineer","description":"Design and development of Android & iOS mobile apps, and Node.js web apps."},{"location":"Accenture","time":{"from":"Aug 2019","to":"Present"},"title":"Digital Business Integration Analyst","description":"Design and development of React and Node.js web apps."}]}]},"skills":{"title":"Skills","background_color":"#FFF","list":[{"label":"Node.js","value":4},{"label":"Android (Java & Kotlin)","value":4},{"label":"C","value":4},{"label":"iOS (Swift)","value":3},{"label":"SQL","value":3},{"label":"DevOps","value":3},{"label":"Google Cloud Platform (GCP)","value":3},{"label":"Amazon Web Services (AWS)","value":3},{"label":"Typescript","value":2},{"label":"C#","value":2},{"label":"Apigee","value":2},{"label":"Mulesoft","value":2},{"label":"React","value":2},{"label":"Angular","value":2}]},"contact":{"title":"Contact","background_color":"#5DC6DD","list":[{"label":"jerrychong25@gmail.com","link":"mailto:jerrychong25@gmail.com","icon_class":"envelope"},{"label":"LinkedIn","link":"https://my.linkedin.com/in/chonghf","icon_class":"linkedin-square"},{"label":"GitHub","link":"https://github.com/jerrychong25","icon_class":"github"},{"label":"Stack Overflow","link":"https://stackoverflow.com/users/5918539/jerry-chong","icon_class":"stack-overflow"}]}}

/***/ }),

/***/ "4eXR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "29df0c2e4167bc6a3d7eeee377ae6d80.jpg";

/***/ }),

/***/ "ELET":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0a1eebbadca1c382a3f48537a01ae62f.jpg";

/***/ }),

/***/ "JBMF":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./newcastle-large.jpg": "TH7f",
	"./newcastle-medium.jpg": "mo1Q",
	"./newcastle-small.jpg": "ELET",
	"./newcastle-xlarge.jpg": "YmqD",
	"./newcastle-xsmall.jpg": "4eXR",
	"./newcastle.jpg": "UCVP",
	"./old/newcastle-large.jpg": "fdbz",
	"./old/newcastle-medium.jpg": "Vto3",
	"./old/newcastle-small.jpg": "kV4R",
	"./old/newcastle-xlarge.jpg": "YLLn",
	"./old/newcastle-xsmall.jpg": "j1aW",
	"./old/newcastle.jpg": "MdFs"
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
						{ 'class': 'title' },
						props.title
					),
					Object(preact_min["h"])(
						'h2',
						{ 'class': 'subtitle' },
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
			{ itemscope: true, itemtype: 'https://schema.org/Person' },
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
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "MdFs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfb572d7700e8995aefaf25a49cbb7d9.jpg";

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

module.exports = __webpack_require__.p + "c2813806e15f851f7e11e8e269237231.jpg";

/***/ }),

/***/ "UCVP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e8b3baeca91f55c92ca75156104fc53.jpg";

/***/ }),

/***/ "Vto3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dde14227fd6e8257f5a31eb7deb2ea3a.jpg";

/***/ }),

/***/ "YLLn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa1386098b541e95769539f4bdb64bf8.jpg";

/***/ }),

/***/ "YmqD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8771f495af2422a7a28459b5944989c9.jpg";

/***/ }),

/***/ "fdbz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e4e1d8d6f4efb1f85bcc338de57704f.jpg";

/***/ }),

/***/ "j1aW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "234e30fcb8d8f3074faf94677f88c158.jpg";

/***/ }),

/***/ "kV4R":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f07de9feb4b96a94cca030577f550cd5.jpg";

/***/ }),

/***/ "mo1Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d65b5cf4cb13684207828a4c638c8ee3.jpg";

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map