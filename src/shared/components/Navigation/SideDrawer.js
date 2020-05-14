import React from 'react';
import ReactDom from 'react-dom';
import './SideDrawer.css';
import { CSSTransition } from 'react-transition-group';

function SideDrawer({ children, show, onClick }) {
	const content = (
		<CSSTransition in={show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
			<aside className="side-drawer" onClick={onClick}>
				{children}
			</aside>
		</CSSTransition>
	);

	return ReactDom.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;
