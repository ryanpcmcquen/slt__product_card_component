import React from "react";
import "../styles/slt-button.css";

class Button extends React.Component {
	render() {
		let { classes, href, text } = this.props;

		return href ? (
			<div>
				<a
					href={href}
					className={`btn slt-button ${classes}`}
					{...this.props}
				>
					{text}
				</a>
			</div>
		) : (
			<div>
				<a className={`btn slt-button ${classes}`} {...this.props}>
					{text}
				</a>
			</div>
		);
	}
}

export default Button;
