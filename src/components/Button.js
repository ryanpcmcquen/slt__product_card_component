import React from "react";
import "../styles/slt-button.css";

const Button = props => {
	let { classes, href, text } = props;
	return href ? (
		<div>
			<a href={href} className={`btn slt-button ${classes}`} {...props}>
				{text}
			</a>
		</div>
	) : (
		<div>
			<a className={`btn slt-button ${classes}`} {...props}>
				{text}
			</a>
		</div>
	);
};

export default Button;
