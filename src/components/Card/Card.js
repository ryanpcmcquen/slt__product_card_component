import React from "react";
import "./Badge.css";

const Card = props => {
    let {
        alt,
        badge,
        image,
        imageClasses,
        imageStyles,
        link,
        linkClasses,
        sku,
        wrapperClasses
    } = props;
    if (!image && sku) {
        image = `https://makelin.us/425/425`;
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
                            style={imageStyles}
                            alt={alt}
                            src={image}
                        />
                    </a>
                </div>
            ) : (
                <div>
                    {badge && <span className="slt-badge">{badge}</span>}
                    <img
                        className={imageClasses}
                        style={imageStyles}
                        alt={alt}
                        src={image}
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
