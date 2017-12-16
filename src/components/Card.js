import React from "react";

export default class Card extends React.Component {
	render() {
		let { alt, badge, image, imageClasses, link, linkClasses, sku, wrapperClasses } = this.props;

		if (!image && sku) {
			image = `https://www.surlatable.com/images/customers/c1079/PRO-${sku}/PRO-${sku}_pdp/main_variation_Default_view_1_425x425.`;
		}
		if (!link && sku) {
			link = `https://www.surlatable.com/product/PRO-${sku}/`;
		}

		return (
			<div className={wrapperClasses}>
				{link ? (
					<div>
						{badge && (
							<div>
								<link rel="stylesheet" href="../slt-badge.css" />
								<span className="slt-badge">{badge}</span>
							</div>
						)}
						<a className={linkClasses} href={link}>
							<img className={imageClasses} alt={alt} src={image} />
						</a>
					</div>
				) : (
					<div>
						{badge && (
							<div>
								<link rel="stylesheet" href="../slt-badge.css" />
								<span className="slt-badge">{badge}</span>
							</div>
						)}
						<img className={imageClasses} alt={alt} src={image} />
					</div>
				)}
			</div>
		);
	}
}
