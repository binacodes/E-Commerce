import React from "react";
import "./ProfilePage.css";

function ProfilePage({ user, orders, onLogout }) {
    if (!user) {
        return (
            <div className="profile-unauth">
                <h2>Please log in to view your profile</h2>
                <button onClick={() => window.location.reload()}>Back to Home</button>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-banner"></div>
                <div className="profile-info-card">
                    <img src={user.image} alt={user.firstName} className="profile-avatar" />
                    <div className="profile-details">
                        <h1>{user.firstName} {user.lastName}</h1>
                        <p className="profile-email">@{user.username} • {user.email}</p>
                        <div className="profile-badges">
                            <span className="badge">Premium Member</span>
                            <span className="badge">VIP Customer</span>
                        </div>
                    </div>
                    <button className="logout-btn" onClick={onLogout}>Sign Out</button>
                </div>
            </div>

            <div className="profile-content">
                <div className="orders-section">
                    <h2>Order History</h2>
                    {orders.length === 0 ? (
                        <div className="no-orders">
                            <p>You haven't made any purchases yet.</p>
                        </div>
                    ) : (
                        <div className="orders-list">
                            {orders.map(order => (
                                <div key={order.id} className="order-card">
                                    <div className="order-header">
                                        <div>
                                            <span className="order-id">Order #{order.id}</span>
                                            <span className="order-date">{order.date}</span>
                                        </div>
                                        <span className="order-status">Delivered</span>
                                    </div>
                                    <div className="order-items-scroll">
                                        {order.items.map(item => (
                                            <div key={item.id} className="order-item-mini">
                                                <img src={item.thumbnail} alt={item.title} />
                                                <div className="mini-info">
                                                    <span className="mini-title">{item.title}</span>
                                                    <span className="mini-qty">Qty: {item.quantity}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="order-footer">
                                        <span className="payment-used">Paid via {order.paymentMethod.toUpperCase()}</span>
                                        <span className="order-total">Total: ${order.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="profile-sidebar">
                    <div className="stats-card">
                        <h3>Shopping Stats</h3>
                        <div className="stat-row">
                            <span className="stat-label">Total Orders</span>
                            <span className="stat-val">{orders.length}</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label">Items Bought</span>
                            <span className="stat-val">
                                {orders.reduce((acc, order) => acc + order.items.reduce((a, i) => a + i.quantity, 0), 0)}
                            </span>
                        </div>
                    </div>

                    <div className="settings-card">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Edit Profile</a></li>
                            <li><a href="#">Shipping Address</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Help & Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
