"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
exports.default = void 0;

require("./index.css");

var _react = _interopRequireDefault(require("react"));

var _io = require("react-icons/io5");

/**
 * This is my modal plugin with a close icon, 'check icon' and a text to enter in props of a react project, clicking the close icon closes the modal.
 * @param {string} content
 * @returns { React.ReactElement } Modal
 */
function Modal(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement(_io.IoClose, {
    className: "modal-close-icon",
    onClick: function onClick() {
      return document.querySelector(".modal-container").style.display = "none";
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-text"
  }, content));
}

var _default = Modal;
exports.default = _default;