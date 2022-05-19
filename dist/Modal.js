"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
exports.default = void 0;

require("./index.css");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _react = _interopRequireDefault(require("react"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

/**
 * This is my modal plugin with a close icon, 'check icon' and a text to enter in props of a react project, clicking the close icon closes the modal.
 * @param {string} content
 * @returns { React.ReactElement } Modal
 */
function Modal(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faXmark,
    className: "modal-close-icon",
    onClick: function onClick() {
      return document.querySelector(".modal-container").style.display = "none";
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-text"
  }, content, " ", /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCheck,
    className: "check"
  })));
}

var _default = Modal;
exports.default = _default;