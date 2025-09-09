"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cartItemsData = [
  {
    id: 1,
    title: 'Fifa 19',
    platform: 'PS4',
    price: 44.0,
    quantity: 2,
    image: '/images/e-bike-blue.jpg',
  },
  {
    id: 2,
    title: 'Glacier White 500GB',
    platform: 'PS4',
    price: 249.99,
    quantity: 1,
    image: '/images/e-bike-red.jpg',
  },
  {
    id: 3,
    title: 'Platinum Headset',
    platform: 'PS4',
    price: 119.99,
    quantity: 1,
    image: '/images/e-bike-green.jpg',
  },
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [promoCode, setPromoCode] = useState('');
  const [shippingCost] = useState(5);

  const handleQuantity = (id, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const itemsTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = itemsTotal + shippingCost;

  return (
    <>
      <Head>
        <title>Shopping Cart | YourStore</title>
        <meta name="description" content="View and manage your shopping cart items. Apply discounts and proceed to secure checkout." />
      </Head>

      <Header />

      <div className="container py-5">
        <h2 className="fw-bold mb-4">Shopping Cart</h2>

        <div className="row gy-4">
          <div className="col-lg-8">
            {cartItems.map(item => (
              <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm mb-3" key={item.id}>
                <div className="d-flex align-items-center gap-3">
                  <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <small className="text-muted">{item.platform}</small>
                    <br />
                    <button className="btn btn-link p-0 text-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-outline-dark btn-sm" onClick={() => handleQuantity(item.id, -1)}>
                    {/* <i className="bi bi-dash"></i> */}
                    -   
                  </button>
                  <input type="text" readOnly value={item.quantity} className="form-control text-center" style={{ width: '50px' }} />
                  <button className="btn btn-outline-dark btn-sm" onClick={() => handleQuantity(item.id, 1)}>
                    {/* <i className="bi bi-plus"></i> */}
                    +
                  </button>
                </div>

                <div className="text-end">
                  <p className="mb-1 fw-bold">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <small className="text-muted">
                    £{item.price.toFixed(2)} each
                  </small>
                </div>
              </div>
            ))}
            <a href="/products" className="text-decoration-none mt-4 d-inline-block">
              <i className="bi bi-arrow-left"></i> Continue Shopping
            </a>
          </div>

          <div className="col-lg-4">
            <div className="p-4 bg-light rounded shadow-sm">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Items ({cartItems.length})</span>
                <span className="fw-semibold">£{itemsTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>£{shippingCost.toFixed(2)}</span>
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="promoCode" className="form-label">
                  Promo Code
                </label>
                <div className="input-group">
                  <input
                    id="promoCode"
                    type="text"
                    className="form-control"
                    placeholder="Enter your code"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                  />
                  <button className="btn btn-danger">Apply</button>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100 fw-semibold">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
