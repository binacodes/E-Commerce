import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart, onQuickView }) {
  const discount = Math.round(product.discountPercentage);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <div className="product-image-container">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-overlay">
          <button className="quick-view-btn" onClick={onQuickView}>Quick View</button>
        </div>
        {discount > 0 && (
          <div className="discount-badge-container">
            <span className="discount-badge">-{discount}%</span>
          </div>
        )}
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <div className="product-rating">
            <span className="stars">★</span>
            <span className="rating-value">{product.rating}</span>
          </div>
        </div>

        <h3 className="product-title" title={product.title}>{product.title}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="price-container">
            <span className="product-price">${product.price}</span>
            {discount > 0 && (
              <span className="original-price">
                ${Math.round(product.price * (1 + discount / 100))}
              </span>
            )}
          </div>
          <button className="add-to-cart-btn" onClick={onAddToCart}>
            <span className="btn-text">Add to Cart</span>
            <span className="btn-shimmer"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
