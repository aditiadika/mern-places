import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ href, to, size, inverse, danger, exact, children, type, onClick, disabled }) {
	if (href) {
		return (
			<a
				className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger &&
					'button--danger'}`}
				href={href}
			/>
		);
	}
	if (to) {
		return (
			<Link
				to={to}
				exact={exact}
				className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger &&
					'button--danger'}`}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger &&
				'button--danger'}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
