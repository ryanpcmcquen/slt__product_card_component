import React from "react";

export default class Button extends React.Component {
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
