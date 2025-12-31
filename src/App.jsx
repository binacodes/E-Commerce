import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import QuickViewModal from "./QuickViewModal";
import Footer from "./Footer";
import Login from "./Login";
import CartPage from "./CartPage";
import ProfilePage from "./ProfilePage";
import "./App.css";

function App() {
  // Initial state from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState("home");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Persistence
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  React.useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (activePage === 'home' && query.length > 0) {
      setActivePage('shop');
    }
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleCheckout = (paymentMethod) => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: [...cart],
      total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
      paymentMethod
    };
    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setActivePage('profile');
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderContent = () => {
    if (activePage === "home") {
      return (
        <>
          <Hero onShopClick={() => setActivePage('shop')} />
          <div className="app">
            <header className="page-header">
              <h1 className="page-title">Top Picks For You</h1>
              <p className="page-subtitle">Recommended items based on your style</p>
            </header>
            <Products
              searchQuery=""
              category="all"
              limit={4}
              onAddToCart={addToCart}
              onQuickView={setQuickViewProduct}
            />
          </div>
        </>
      );
    }

    if (activePage === "cart") {
      return (
        <div className="app">
          <CartPage
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            onCheckout={handleCheckout}
            user={user}
            onNavigateToLogin={() => setActivePage('login')}
          />
        </div>
      );
    }

    if (activePage === "login") {
      return (
        <div className="app">
          <Login onLoginSuccess={(userData) => {
            setUser(userData);
            setActivePage('home');
          }} />
        </div>
      );
    }

    if (activePage === "profile") {
      return (
        <div className="app">
          <ProfilePage
            user={user}
            orders={orders}
            onLogout={() => {
              setUser(null);
              setActivePage('home');
            }}
          />
        </div>
      );
    }

    return (
      <div className="app">
        <header className="page-header">
          <h1 className="page-title">
            {activePage === 'shop' ? 'Our Shop' : 'Special Offers'}
          </h1>
          <p className="page-subtitle">
            {searchQuery ? `Showing results for "${searchQuery}"` : "Find everything you need right here"}
          </p>
        </header>
        <Products
          searchQuery={searchQuery}
          category={activePage === 'deals' ? 'deals' : 'all'}
          onAddToCart={addToCart}
          onQuickView={setQuickViewProduct}
        />
      </div>
    );
  };
  return (
    <>
      <Navbar
        cartCount={cartCount}
        onSearch={handleSearch}
        activePage={activePage}
        onPageChange={setActivePage}
        onHomeClick={() => { setActivePage('home'); setSearchQuery(""); }}
        user={user}
      />
      {renderContent()}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
      />
      <Footer />
    </>
  );
}

export default App;
