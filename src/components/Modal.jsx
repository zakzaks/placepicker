import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen, isClose }) {
	const dialog = useRef();

	useEffect(() => {
		if (!dialog.current) return;
		if (isOpen) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [isOpen]);

	return createPortal(
		<dialog className="modal" ref={dialog} onClose={isClose}>
			{children}
		</dialog>,
		document.getElementById("modal"),
	);
}
