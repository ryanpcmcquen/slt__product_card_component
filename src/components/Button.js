import React from "react";

class Button extends React.Component {
	render() {
		let { classes, href, text } = this.props;

		return href ? (
			<div>
				<a href={href} className={`btn ${classes}`} {...this.props}>
					{text}
				</a>
			</div>
		) : (
			<div>
				<a className={`btn ${classes}`} {...this.props}>
					{text}
				</a>
			</div>
		);
	}
}

export default Button;
