"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ],
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  )

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

var Base = _styledComponents2.default.div(
  _templateObject,
  function(props) {
    return props.width
  },
  function(props) {
    return props.width
  },
  function(props) {
    return props.background
  }
)

var Up = Base.extend(
  _templateObject2,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)
var Down = Base.extend(
  _templateObject3,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)
var Left = Base.extend(
  _templateObject4,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)

var Right = Base.extend(
  _templateObject5,
  function(props) {
    return props.border
  },
  function(props) {
    return props.border
  }
)

var arrows = {
  left: Right,
  top: Down,
  right: Left,
  bottom: Up,
}

var Arrow = function Arrow(_ref) {
  var background = _ref.background,
    border = _ref.border,
    placement = _ref.placement,
    width = _ref.width

  var Component = arrows[placement] || arrows.top
  return (
    width > 0 &&
    _react2.default.createElement(Component, {
      background: background,
      border: border,
      width: width,
    })
  )
}

Arrow.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        background: _propTypes2.default.string.isRequired,
        border: _propTypes2.default.string.isRequired,
        placement: _propTypes2.default.string.isRequired,
        width: _propTypes2.default.number.isRequired,
      }
    : {}

exports.default = Arrow
module.exports = exports["default"]
