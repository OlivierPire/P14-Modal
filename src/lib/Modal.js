import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
export { Modal };

/**
 * This is my modal plugin with a close icon, 'check icon' and a text to enter in props of a react project, clicking the close icon closes the modal.
 * @param {string} content
 * @returns { React.ReactElement } Modal
 */

function Modal({ content }) {
	return (
		<div className="modal-container">
			<FontAwesomeIcon
				icon={faXmark}
				className="modal-close-icon"
				onClick={() =>
					(document.querySelector(".modal-container").style.display = "none")
				}
			/>
			<p className="modal-text">
				{content} <FontAwesomeIcon icon={faCheck} className="check" />
			</p>
		</div>
	);
}


export default Modal;
