import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">🛍️</span>
                            <span className="brand-name">EGCOM</span>
                        </div>
                        <p className="footer-tagline">
                            Redefining your shopping experience with premium quality and
                            unbeatable style. Your journey to excellence starts here.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-icon">Instagram</a>
                            <a href="#" className="social-icon">Twitter</a>
                            <a href="#" className="social-icon">Facebook</a>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h4>Shop</h4>
                            <ul>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Best Sellers</a></li>
                                <li><a href="#">Seasonal Hits</a></li>
                                <li><a href="#">Deals</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Stay and Updated</h4>
                        <p>Subscribe to get special offers and once-in-a-lifetime deals.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 EGCOM. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
