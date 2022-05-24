import "./index.css";
import React from "react";
import { IoClose } from "react-icons/io5";
export { Modal };

/**
 * This is my modal plugin with a close icon, 'check icon' and a text to enter in props of a react project, clicking the close icon closes the modal.
 * @param {string} content
 * @returns { React.ReactElement } Modal
 */

function Modal({ content }) {
	return (
		<div className="modal-container">
			<IoClose
				className="modal-close-icon"
				onClick={() =>
					(document.querySelector(".modal-container").style.display = "none")
				}
			/>
			<p className="modal-text">
				{content}
			</p>
		</div>
	);
}


export default Modal;
