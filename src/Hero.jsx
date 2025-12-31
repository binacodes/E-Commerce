import React from "react";
import "./Hero.css";

function Hero({ onShopClick }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">New Seasonal Collection 2024</div>
                <h1 className="hero-title">
                    Elevate Your <span className="gradient-text">Lifestyle</span> with
                    Premium Style.
                </h1>
                <p className="hero-subtitle">
                    Experience the ultimate shopping journey with our curated selection of
                    world-class products. Quality meets elegance in every detail.
                </p>
                <div className="hero-actions">
                    <button className="primary-btn" onClick={onShopClick}>Shop Collection</button>
                    <button className="secondary-btn">Watch Video</button>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-value">50k+</span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">200+</span>
                        <span className="stat-label">Premium Brands</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">24h</span>
                        <span className="stat-label">Fast Delivery</span>
                    </div>
                </div>
            </div>
            <div className="hero-visual">
                <div className="abstract-shape shape-1"></div>
                <div className="abstract-shape shape-2"></div>
                <div className="floating-card card-1">
                    <div className="pulse"></div>
                    Premium Quality
                </div>
                <div className="floating-card card-2">
                    Fast Delivery
                </div>
            </div>
        </section>
    );
}

export default Hero;
