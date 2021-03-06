"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
  [
    "\n  color: ",
    ";\n  background: ",
    ";\n  border-radius: ",
    ";\n  border: 1px solid ",
    ";\n  padding: ",
    ";\n  font-size: ",
    ";\n  font-family: ",
    ";\n",
  ],
  [
    "\n  color: ",
    ";\n  background: ",
    ";\n  border-radius: ",
    ";\n  border: 1px solid ",
    ";\n  padding: ",
    ";\n  font-size: ",
    ";\n  font-family: ",
    ";\n",
  ]
)

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

var Bubble = _styledComponents2.default.div(
  _templateObject,
  function(props) {
    return props.color ? props.color : "inherit"
  },
  function(props) {
    return props.background ? props.background : "inherit"
  },
  function(props) {
    return props.radius ? props.radius + "px" : 0
  },
  function(props) {
    return props.border
  },
  function(props) {
    return props.padding ? props.padding + "px" : 0
  },
  function(props) {
    return props.fontSize
  },
  function(props) {
    return props.fontFamily
  }
)

Bubble.propTypes = {
  color: _propTypes2.default.string,
  background: _propTypes2.default.string,
  padding: _propTypes2.default.number,
  radius: _propTypes2.default.number,
  fontSize: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
}

exports.default = Bubble
module.exports = exports["default"]
