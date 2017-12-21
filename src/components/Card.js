import React from "react";
import "../styles/slt-badge.css";

class Card extends React.Component {
	render() {
		let {
			alt,
			badge,
			image,
			imageClasses,
			link,
			linkClasses,
			sku,
			wrapperClasses
		} = this.props;

		if (!image && sku) {
			image = `https://www.surlatable.com/images/customers/c1079/PRO-${sku}/PRO-${sku}_pdp/main_variation_Default_view_1_425x425.`;
		}
		if (!link && sku) {
			link = `https://www.surlatable.com/product/PRO-${sku}/`;
		}

		return (
			<div className={wrapperClasses} style={{ position: "relative" }}>
				{link ? (
					<div>
						{badge && <span className="slt-badge">{badge}</span>}
						<a className={linkClasses} href={link}>
							<img
								className={imageClasses}
								alt={alt}
								src={image}
							/>
						</a>
					</div>
				) : (
					<div>
						{badge && <span className="slt-badge">{badge}</span>}
						<img className={imageClasses} alt={alt} src={image} />
					</div>
				)}
			</div>
		);
	}
}

export default Card;
