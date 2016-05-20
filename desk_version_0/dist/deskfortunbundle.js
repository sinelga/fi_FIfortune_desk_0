webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactRouter = __webpack_require__(169);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'

	var rootRoute = {
	  component: 'div',
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(230),
	    childRoutes: [

	      //      require('./routes/Blog'),  
	      //      require('./routes/Cvpdf'),           
	      //      require('./routes/Jobs'),
	      //      require('./routes/Contacts'),
	      //      require('./routes/Details'),

	    ]
	  }]
	}; /*eslint-disable no-unused-vars */


	(0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: rootRoute }), document.getElementById('content'));

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(231);

	var _reactDocumentMeta = __webpack_require__(494);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import GlobalNav from './GlobalNav'
	//import Dashboard from './Dashboard'
	//import Head from './Head'

	var App = function (_React$Component) {
			_inherits(App, _React$Component);

			function App(props) {
					_classCallCheck(this, App);

					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

					_this.state = {
							data: []

					};

					return _this;
			}

			_createClass(App, [{
					key: 'componentWillUpdate',
					value: function componentWillUpdate() {}
			}, {
					key: 'componentDidMount',
					value: function componentDidMount() {}
			}, {
					key: 'componentWillReceiveProps',
					value: function componentWillReceiveProps() {}
			}, {
					key: 'render',
					value: function render() {

							var meta = {
									title: 'CV',
									description: 'CV curriculum vitae'
							};

							return _react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(_reactDocumentMeta2.default, meta),
									_react2.default.createElement(
											_reactBootstrap.Grid,
											null,
											this.props.children
									)
							);
					}
			}]);

			return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ }

});