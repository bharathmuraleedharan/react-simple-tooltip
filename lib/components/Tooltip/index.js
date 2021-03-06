"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
    ["\n  position: absolute;\n  ", ";\n"],
    ["\n  position: absolute;\n  ", ";\n"]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      "\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  ",
      ";\n",
    ],
    [
      "\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  ",
      ";\n",
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    ["\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  ", ";\n"],
    ["\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  ", ";\n"]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      "\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  ",
      ";\n",
    ],
    ["\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  ", ";\n"]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    ["\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  ", ";\n"],
    ["\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  ", ";\n"]
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

var Base = _styledComponents2.default.div(_templateObject, function(props) {
  return props.zIndex && "z-index: " + props.zIndex + ";"
})

var Top = Base.extend(_templateObject2, function(props) {
  return props.offset && "margin-bottom: " + props.offset + "px;"
})

var Bottom = Base.extend(_templateObject3, function(props) {
  return props.offset && "margin-top: " + props.offset + "px;"
})

var Left = Base.extend(_templateObject4, function(props) {
  return props.offset && "margin-right: " + props.offset + "px;"
})

var Right = Base.extend(_templateObject5, function(props) {
  return props.offset && "margin-left: " + props.offset + "px;"
})

var tooltips = {
  left: Left,
  top: Top,
  right: Right,
  bottom: Bottom,
}

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
    open = _ref.open,
    zIndex = _ref.zIndex,
    placement = _ref.placement,
    offset = _ref.offset

  var Component = tooltips[placement] || tooltips.top
  return (
    open &&
    _react2.default.createElement(
      Component,
      {open: open, zIndex: zIndex, offset: offset},
      children
    )
  )
}

Tooltip.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        children: _propTypes2.default.any.isRequired,
        open: _propTypes2.default.bool,
        zIndex: _propTypes2.default.number,
        placement: _propTypes2.default.string,
        offset: _propTypes2.default.number,
      }
    : {}

exports.default = Tooltip
module.exports = exports["default"]
