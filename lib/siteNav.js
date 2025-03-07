"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.kebabcase"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrow = _interopRequireDefault(require("./arrow"));

var _memoized = require("./memoized");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultRootAlign = 'center';
var defaultColor = '#fff';
var defaultColumnWidth = 150;
var defaultRowHeight = 45;
var defaultBackground = '#323232';
var defaultBreakpoint = 768;
var defaultContentBackground = '#fff';
var defaultContentColor = '#323232';
var perspective = 850;
var moveSeconds = 0.25;

var setFromProps = function setFromProps(camelCaseKey) {
  return (0, _styledComponents.css)(["", ""], function (props) {
    return props[camelCaseKey] ? "".concat((0, _lodash.default)(camelCaseKey), ": ").concat(props[camelCaseKey]) : null;
  });
};

var GridContainer = _styledComponents.default.div.withConfig({
  displayName: "siteNav__GridContainer",
  componentId: "s1k3wq91-0"
})(["@media(max-width:", "px){position:absolute;opacity:0;z-index:-1;}@media(min-width:", "px){display:grid;", ";justify-items:stretch;grid-template-columns:repeat(", ",", "px);grid-template-rows:", "px;position:relative;", ";", ";", ";", "px;}"], function (_ref) {
  var breakpoint = _ref.breakpoint;
  return breakpoint - 1;
}, function (_ref2) {
  var breakpoint = _ref2.breakpoint;
  return breakpoint;
}, setFromProps('justifyContent'), function (_ref3) {
  var columns = _ref3.columns;
  return columns;
}, function (_ref4) {
  var columnWidth = _ref4.columnWidth;
  return columnWidth;
}, function (_ref5) {
  var rowHeight = _ref5.rowHeight;
  return rowHeight;
}, setFromProps('background'), setFromProps('color'), setFromProps('fontFamily'), setFromProps('fontSize'));

var ContentRow = _styledComponents.default.div.withConfig({
  displayName: "siteNav__ContentRow",
  componentId: "s1k3wq91-1"
})(["grid-column:1 / span ", ";grid-row:2 / span 1;position:relative;height:0;"], function (_ref6) {
  var columns = _ref6.columns;
  return columns;
});

var Move = function Move(fromData, toData) {
  return (0, _styledComponents.keyframes)(["from{left:", "px;width:", "px;height:", "px;}to{left:", "px;width:", "px;height:", "px;}"], fromData.left, fromData.width, fromData.height, toData.left, toData.width, toData.height);
};

var FadeIn = (0, _styledComponents.keyframes)(["from{opacity:0;transform:perspective(", "px) rotateX(-60deg);transform-origin:top center;}to{opacity:1;transform:perspective(", "px) rotateX(0deg);transform-origin:top center;}"], perspective, perspective);
var FadeOut = (0, _styledComponents.keyframes)(["from{opacity:1;transform:perspective(", "px) rotateX(0deg);transform-origin:top center;}to{opacity:0;transform:perspective(", "px) rotateX(-60deg);transform-origin:top center;z-index:-1;}"], perspective, perspective);

var MovingDiv = _styledComponents.default.div.withConfig({
  displayName: "siteNav__MovingDiv",
  componentId: "s1k3wq91-2"
})(["", ";", ";position:absolute;left:", "px;width:", "px;height:", "px;display:", ";border-radius:4px;box-shadow:0 8px 28px 1px rgba(138,126,138,0.67);animation:", " ", " forwards ease;"], setFromProps('color'), setFromProps('background'), function (_ref7) {
  var fromData = _ref7.fromData;
  return fromData ? fromData.left : 0;
}, function (_ref8) {
  var fromData = _ref8.fromData;
  return fromData ? fromData.width : 0;
}, function (_ref9) {
  var fromData = _ref9.fromData;
  return fromData ? fromData.height : 0;
}, function (_ref10) {
  var display = _ref10.display;
  return display;
}, function (_ref11) {
  var fadeOut = _ref11.fadeOut,
      display = _ref11.display,
      fromData = _ref11.fromData,
      toData = _ref11.toData;
  if (fadeOut) return FadeOut;

  if (display === 'block') {
    if (fromData.left === toData.left) return FadeIn;
    if (fromData) return Move(fromData, toData);
  }

  return ''; // display: none; don't animate
}, function (_ref12) {
  var fadeOut = _ref12.fadeOut,
      display = _ref12.display,
      fromData = _ref12.fromData,
      toData = _ref12.toData;
  if (fadeOut) return "".concat(_constants.FadeOutSeconds, "s");

  if (display === 'block') {
    if (fromData.left === toData.left) return "".concat(_constants.FadeInSeconds, "s"); // fade in

    if (fromData) return "".concat(moveSeconds, "s"); // move
  }

  return '0s'; // display: none; don't animate
});

var SiteNav =
/*#__PURE__*/
function (_Component) {
  _inherits(SiteNav, _Component);

  function SiteNav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SiteNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SiteNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      display: 'none',
      fadeOut: false,
      fromData: null,
      toData: null,
      leftOffset: 0,
      rightOffset: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      if (_this.props.debug) return;

      _this.setState(function (prevState) {
        return {
          fadeOut: true,
          fromData: prevState.toData
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function (target, menuDataIndex) {
      _this.setState(function (prevState) {
        var fadeOut = false;
        var display = 'block';
        var toDataOriginal = (0, _memoized.memoizeMenuData)(_this.props.columnWidth, _this.props.children)[menuDataIndex];

        var toData = _objectSpread({}, toDataOriginal);

        var leftOffset = 0;
        var rightOffset = 0;

        if (target) {
          // off screen detection
          // target is rootGridItem
          var _target$getBoundingCl = target.getBoundingClientRect(),
              left = _target$getBoundingCl.left,
              width = _target$getBoundingCl.width;

          var siteNavWidth = target.parentNode.clientWidth;
          leftOffset = toData.width / 2 - (left + width / 2);
          rightOffset = toData.width / 2 - (siteNavWidth - (left + width / 2));

          if (leftOffset > 0) {
            // if off screen, toData.left needs to be moved to be on-screen!
            toData.left += leftOffset + _constants.OffScreenPadding;
          } else {
            leftOffset = 0;
          }

          if (rightOffset > 0) {
            toData.left -= rightOffset - _constants.OffScreenPadding;
          } else {
            rightOffset = 0;
          }

          var fromData;

          if (prevState.fadeOut || !prevState.toData) {
            // on cold start, pop up right from the current item
            fromData = toData;
          } else {
            // on warm start, start animation from the previous item
            fromData = prevState.toData;
          }

          return {
            display: display,
            fadeOut: fadeOut,
            fromData: fromData,
            toData: toData,
            leftOffset: leftOffset,
            rightOffset: rightOffset
          };
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      return _this.close();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickMovingDiv", function () {
      return _this.close();
    });

    return _this;
  }

  _createClass(SiteNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columnWidth = _this$props.columnWidth,
          rowHeight = _this$props.rowHeight,
          background = _this$props.background,
          contentBackground = _this$props.contentBackground,
          contentColor = _this$props.contentColor,
          children = _this$props.children,
          align = _this$props.align,
          fontSize = _this$props.fontSize,
          fontFamily = _this$props.fontFamily,
          color = _this$props.color,
          breakpoint = _this$props.breakpoint;
      var _this$state = this.state,
          fromData = _this$state.fromData,
          toData = _this$state.toData,
          display = _this$state.display,
          fadeOut = _this$state.fadeOut,
          leftOffset = _this$state.leftOffset,
          rightOffset = _this$state.rightOffset;
      var columns = (0, _memoized.memoizeColumns)(children);
      var rootGridItems = (0, _memoized.memoizeGridItems)(children, this.onMouseEnter);
      var content = (0, _memoized.memoizeContent)(children, fromData, toData);
      var justifyContent = (0, _memoized.memoizeAlign)(align);
      return _react.default.createElement("nav", null, _react.default.createElement(GridContainer, {
        background: background,
        columnWidth: columnWidth,
        rowHeight: rowHeight,
        justifyContent: justifyContent,
        fontSize: fontSize,
        fontFamily: fontFamily,
        color: color,
        breakpoint: breakpoint
        /* Below are not configurable */
        ,
        onMouseLeave: this.onMouseLeave,
        columns: columns
      }, rootGridItems, _react.default.createElement(ContentRow, {
        columns: columns
      }, _react.default.createElement(_arrow.default, {
        display: display,
        fadeOut: fadeOut,
        fromData: fromData,
        toData: toData,
        onClick: this.onClickMovingDiv,
        background: contentBackground,
        leftOffset: leftOffset,
        rightOffset: rightOffset
      }), _react.default.createElement(MovingDiv, {
        display: display,
        fadeOut: fadeOut,
        fromData: fromData,
        toData: toData,
        color: contentColor,
        onClick: this.onClickMovingDiv,
        background: contentBackground
      }, content))));
    }
  }]);

  return SiteNav;
}(_react.Component);

exports.default = SiteNav;

_defineProperty(SiteNav, "defaultProps", {
  align: defaultRootAlign,
  columnWidth: defaultColumnWidth,
  rowHeight: defaultRowHeight,
  background: defaultBackground,
  contentBackground: defaultContentBackground,
  contentColor: defaultContentColor,
  breakpoint: defaultBreakpoint,
  color: defaultColor,
  fontSize: null,
  fontFamily: null,
  debug: false
});

_defineProperty(SiteNav, "propTypes", {
  align: _propTypes.default.oneOf(['left', 'center', 'right']),
  columnWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  rowHeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  background: _propTypes.default.string,
  contentBackground: _propTypes.default.string,
  contentColor: _propTypes.default.string,
  breakpoint: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  color: _propTypes.default.string,
  fontSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  fontFamily: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  debug: _propTypes.default.bool,
  children: _propTypes.default.any.isRequired
});