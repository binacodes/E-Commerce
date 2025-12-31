import React from "react";
import "./QuickViewModal.css";

function QuickViewModal({ product, onClose, onAddToCart }) {
    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="modal-body">
                    <div className="modal-image-section">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>

                    <div className="modal-info-section">
                        <span className="modal-category">{product.category}</span>
                        <h2 className="modal-title">{product.title}</h2>

                        <div className="modal-rating">
                            <span className="stars">{"★".repeat(Math.round(product.rating))}</span>
                            <span className="rating-text">({product.rating} Rating)</span>
                        </div>

                        <div className="modal-price-row">
                            <span className="modal-price">${product.price}</span>
                            {product.discountPercentage > 0 && (
                                <span className="modal-discount">-{product.discountPercentage}% OFF</span>
                            )}
                        </div>

                        <p className="modal-description">{product.description}</p>

                        <ul className="modal-features">
                            <li>✓ Premium Quality Guarantee</li>
                            <li>✓ Secure Payment Processing</li>
                            <li>✓ 30-Day Easy Returns</li>
                        </ul>

                        <div className="modal-actions">
                            <button
                                className="modal-add-btn"
                                onClick={() => {
                                    onAddToCart(product);
                                    onClose();
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickViewModal;
