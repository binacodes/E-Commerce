import React, { useState } from "react";
import "./CartPage.css";

function CartPage({ cart, removeFromCart, updateQuantity, onCheckout, user, onNavigateToLogin }) {
    const [paymentMethod, setPaymentMethod] = useState("visa");
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <div className="empty-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <button className="back-to-shop" onClick={() => window.location.reload()}>Go Shopping</button>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Shopping Cart</h1>
                <p>You have {cart.length} items in your cart</p>
            </div>

            <div className="cart-layout">
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.thumbnail} alt={item.title} className="item-img" />
                            <div className="item-info">
                                <h3>{item.title}</h3>
                                <p className="item-category">{item.category}</p>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                            <div className="item-quantity">
                                <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <div className="item-price">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <div className="payment-methods">
                        <h4>Payment Method</h4>
                        <div className={`payment-option ${paymentMethod === 'visa' ? 'active' : ''}`} onClick={() => setPaymentMethod('visa')}>
                            <span className="method-icon">💳</span> Visa / MasterCard
                        </div>
                        <div className={`payment-option ${paymentMethod === 'paypal' ? 'active' : ''}`} onClick={() => setPaymentMethod('paypal')}>
                            <span className="method-icon">🅿️</span> PayPal
                        </div>
                        <div className={`payment-option ${paymentMethod === 'apple' ? 'active' : ''}`} onClick={() => setPaymentMethod('apple')}>
                            <span className="method-icon">🍎</span> Apple Pay
                        </div>
                    </div>

                    {user ? (
                        <button className="checkout-btn" onClick={() => onCheckout(paymentMethod)}>
                            Complete Purchase
                        </button>
                    ) : (
                        <div className="auth-prompt">
                            <p>Please log in to complete your purchase</p>
                            <button className="login-prompt-btn" onClick={onNavigateToLogin}>Login to Checkout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartPage;
