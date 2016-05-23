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

	var _reactDom = __webpack_require__(39);

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

	var _Dashboard = __webpack_require__(504);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import GlobalNav from './GlobalNav'


	//import Head from './Head'

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

			_this.state = {
				data: []

			};
			_this.loadajax = _this.loadajax.bind(_this);
			return _this;
		}

		_createClass(App, [{
			key: 'loadajax',
			value: function loadajax(urlstr, mark) {

				var request = new XMLHttpRequest();
				request.open('GET', urlstr, true);

				request.onload = function () {

					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);

						if (mark) {
							this.setState({ mark: data });
						} else {

							this.setState({ data: data });
						}
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate() {}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//		http://104.131.121.133/fortunetellers
				this.loadajax('http://104.131.121.133/fortunetellers', false);
			}
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
					this.props.children || _react2.default.createElement(_Dashboard2.default, { data: this.state.data })
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	module.exports = App;

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(169);

	var _reactBootstrap = __webpack_require__(231);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import Firebase from 'firebase'
	//import StarRating from 'react-star-rating'

	//const dark = 'hsl(200, 20%, 20%)'
	//const styles = {}
	//
	//styles.wrapper = {
	//	padding: '10px 20px',
	//	overflow: 'hidden',
	//	background: dark
	//}

	//var baseRef = new Firebase('https://cv-mazurov.firebaseio.com');

	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard(props) {
			_classCallCheck(this, Dashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));

			_this.state = {
				data: []

			};

			return _this;
		}

		_createClass(Dashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				this.state.data = this.props;

				//		console.log(this.props)

				//		let oldId = prevProps.params.stitle
				//		let newId = this.props.params.stitle
				//
				//		   if (newId !== oldId) {
				//			  
				//			   if (Object.keys(this.props.params).length === 1) {
				//				  
				//				 this.loadajax('/www/'+site+'/blog/'+stopic+'/'+stopic+'.json',true)
				//				 this.loadajax('http://'+site+':8001/api/blog/'+stopic,false)
				//				
				//				  
				//				}
				//		   }
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'render',
			value: function render() {

				var htmlListGroup = [];
				var htmlListItems = [];
				var key = "";

				if (this.props.data.length > 0) {

					this.props.data.map(function (item) {
						console.log(item.Id);
						var key = item.Id;
						var tolink = "/" + item.Id;
						var imglink = "/images/fortuneteller" + key + ".jpg";
						htmlListItems.push(_react2.default.createElement(
							_reactRouter.Link,
							{ key: key, to: tolink },
							_react2.default.createElement(
								_reactBootstrap.Row,
								null,
								_react2.default.createElement(
									_reactBootstrap.Col,
									{ xs: 6, md: 4 },
									_react2.default.createElement(_reactBootstrap.Image, { src: imglink, responsive: true, rounded: true }),
									' '
								),
								_react2.default.createElement(
									_reactBootstrap.Col,
									{ xs: 6, md: 8 },
									item.Name,
									_react2.default.createElement('br', null),
									item.Phone,
									_react2.default.createElement('br', null),
									item.Location
								)
							)
						));
					});

					htmlListGroup.push(_react2.default.createElement(
						_reactBootstrap.Grid,
						{ key: key },
						htmlListItems
					));
				} else {
					return null;
				}

				//		this.state.items.map(function(vvdata) {
				//
				//			var item_obj =vvdata.val()			
				//			var htmlListItems =[]			
				//			item_obj.items.map(function(data){
				//
				//				key =data.id+data.item
				//				htmlListItems.push(<ListGroupItem key={key}>{data.item} <StarRating name="airbnb-rating" totalStars={5} rating={data.rating} size={18}/></ListGroupItem>)
				//				
				//			})	
				//			
				//			let imglink = '/img/'+item_obj.img
				//			let link ='/'+item_obj.link+".html"
				//
				//			let key2 = key+link
				//			let key3 = key2+key
				//
				//			htmlitem.push(<h2 key={key2}>{item_obj.title}</h2>)			
				//			htmlitem.push(<Row key={key3}><Col xs={6} md={2}><Image src={imglink} responsive/></Col><Col xs={6} md={8}><ListGroup>{htmlListItems}</ListGroup></Col><Col xs={6} md={2}><Link to={link}><Image src='/img/orange-arrow-right.png' responsive/></Link></Col></Row>)
				//				
				//		})

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactBootstrap.Well,
						null,
						htmlListGroup
					)
				);
			}
		}]);

		return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ }

});