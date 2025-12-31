import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ cartCount, onSearch, activePage, onPageChange, onHomeClick, user }) {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        onSearch(e.target.value);
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="logo-icon">🛍️</span>
                    <span className="brand-name">EGCOM</span>
                </div>

                <ul className="navbar-links">
                    <li><a href="#" className={activePage === 'home' ? 'active' : ''} onClick={onHomeClick}>Home</a></li>
                    <li><a href="#" className={activePage === 'shop' ? 'active' : ''} onClick={() => onPageChange('shop')}>Shop</a></li>
                    <li><a href="#" className={activePage === 'deals' ? 'active' : ''} onClick={() => onPageChange('deals')}>Deals</a></li>
                </ul>

                <div className="navbar-actions">
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchValue}
                            onChange={handleSearch}
                            className="search-input"
                        />
                        <button className="icon-btn search-btn">🔍</button>
                    </div>
                    <div className="cart-container" onClick={() => onPageChange('cart')}>
                        <button className="icon-btn cart-btn">🛒</button>
                        <span className="cart-count">{cartCount}</span>
                    </div>
                    {user ? (
                        <div className="user-profile-nav" onClick={() => onPageChange('profile')}>
                            <img src={user.image} alt={user.firstName} className="nav-avatar" />
                            <span className="nav-username">{user.firstName}</span>
                        </div>
                    ) : (
                        <button className="user-btn" onClick={() => onPageChange('login')}>Sign In</button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
