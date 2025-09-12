"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../../styles/productdetails.css";
import Header from "../../components/Header";
import { useParams,useRouter } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../../components/Footer";
import Instagram from "../../../../public/images/instagram-latest.svg";
import Google from "../../../../public/images/google-latest.svg";
import Call from "../../../../public/images/phone-latest.svg";
import { loadStripe } from "@stripe/stripe-js";
import GooglePayInner from "../../components/GooglePayInner.js";
import ApplePayInner from "../../components/ApplePayInner.js";
import {
  Elements,
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutButton from "../../components/CheckoutButton";
import productsData from "../../../data/productData.json";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const images = {
  front: "/images/CartoonCycleProductdetailsFrontBlur.jpg",
  back: "/images/CartoonCycleProductdetailsBackBlur.jpg",
  middle: "/images/CartoonCycleProductdetailsAngleBlur.jpg",
  battery: "/images/CartoonCycleProductdetailsWholeBlur.jpg",
};

export default function ProductDetailsPage() {

  const { slug } = useParams();
  const router = useRouter();
  const product = productsData.find((p) => p.slug === slug);
  const [selectedColor, setSelectedColor] = useState("front");
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showPayModal, setShowPayModal] = useState(false);
  

  const handlePayNowbtn = () => {
    setShowPayModal(true);
  };

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState("features");



  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // just inside your component function (CartoonDetailsPage)
  // const stripePromise = loadStripe(
  //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  // );

  const handlePayNow = async (qty = 1) => {
    try {
      // call server to create session
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: qty }),
      });

      const data = await res.json();
      if (data.error) {
        console.error("Checkout creation error:", data.error);
        alert("Payment failed to initialize. Check console.");
        return;
      }

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
      if (error) console.error("Stripe redirect error:", error);
    } catch (err) {
      console.error(err);
      alert("Payment error — see console.");
    }
  };

   if (!product) {
    return (
      <div className="container py-5">
        <Header />
        <h1>Product not found</h1>
        <Footer />
      </div>
    );
  }

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };
  return (
    <>
      <Head>
        <title>{product.name} | Beyond Bikes Electric Bike</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`Beyond Bikes, ${product.name}, electric bike, e-bike, rental, battery life, performance`} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.beyondbikes.com.au/product/${product.slug}`} />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content={`${product.name} | Beyond Bikes`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://www.beyondbikes.com.au/product/${product.slug}`} />
        <meta property="og:image" content={`https://www.beyondbikes.com.au/${product.images.front}`} />
      </Head>

      <Header />

      <main
        className="container py-5"
        itemScope
        itemType="https://schema.org/Product"
      >
        <div className="row align-items-start">
          {/* Left Image Section */}
          <div className="col-xl-7 mb-4 only-mobile-center">
            <Image
              src={product.images[selectedColor]}
              alt={`${product.name} view: ${selectedColor}`}
              width={600}
              height={600}
              className="set-image-bikes"
              itemProp="image"
            />

            <div className="d-sm-flex thumbnail-gallery mt-3">
             {Object.keys(product.images).map((color) => (
                <img
                  key={color}
                  src={product.images[color]}
                  alt={`${product.name} ${color} view`}
                  className={`thumb ${selectedColor === color ? "active" : ""}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Right Info Section */}
          <div className="col-xl-5">
            <h1 className="text-center fw-bold" itemProp="name">
             {product.title}
            </h1>
            <p
              className="fs-4 text-center fw-bold"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              PRICE : ${product.price.current} {product.price.currency}{" "}
              {product.price.original && <del className="text-muted fs-4 ms-2">${product.price.original} {product.price.currency}</del>}
              <meta itemProp="price" content={product.price.toString()} />
              <meta itemProp="priceCurrency" content={product.price.currency} />
              <link itemProp="availability" href="https://schema.org/InStock" />
            </p>

{/* Example Specs (you can extend with product.specs if exists) */}
         {/* Highlights Section */}
<section className="container my-4">
  <div className="row g-3">
    {product.specifications?.highlights?.map((item, index) => (
      <div className="col-6" key={index}>
        <div className="spec-box">
          <i className={`bi ${item.icon}`}></i>
          <div>
            <strong>{item.value || "—"}</strong>
            <p>{item.label}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Tabs Section */}
<section className="mt-3" itemScope itemType="https://schema.org/Product">
  <h2 className="fw-bold text-orange mb-3">Specifications</h2>

  {/* NAV TABS */}
  <ul className="nav nav-pills mb-3 bg-light p-1 rounded-pill d-inline-flex">
    {Object.keys(product.specifications?.tabs || {}).map((tabKey) => (
      <li className="nav-item" key={tabKey}>
        <button
          className={`nav-link rounded-pill ${activeTab === tabKey ? "active" : ""}`}
          onClick={() => setActiveTab(tabKey)}
        >
          {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
        </button>
      </li>
    ))}
  </ul>

  {/* TAB CONTENT */}
  <div>
    {activeTab &&
      Object.entries(product.specifications.tabs[activeTab]).map(([itemKey, itemValue]) => (
        <div className="spec-item" key={itemKey}>
          <button
            className="spec-toggle"
            onClick={() => toggleItem(itemKey)}
            aria-expanded={openItem === itemKey}
          >
            <strong>{itemKey.charAt(0).toUpperCase() + itemKey.slice(1)}</strong>
            <span className="toggle-icon">{openItem === itemKey ? "−" : "+"}</span>
          </button>

          {openItem === itemKey && (
            <div className="spec-content">
              {Array.isArray(itemValue) ? (
                <ul>
                  {itemValue.map((val, i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ul>
              ) : (
                itemValue
              )}
            </div>
          )}
        </div>
      ))}
  </div>
</section>

<button
  className="btn btn-primary mt-4 w-50"
  onClick={() => router.push("/checkout")}
>
  Checkout Now
</button>
           
            {showModal && (
              <div
                className="modal fade show"
                style={{
                  display: "block",
                  opacity: 1,
                  transition: "opacity 0.3s ease",
                }}
                aria-labelledby="modalLabel"
                aria-hidden="false"
              >
                <div
                  className="modal-backdrop fade show"
                  style={{
                    backdropFilter: "blur(5px)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundColor: "rgba(0,0,0,0.8)",
                  }}
                ></div>

                <div
                  className="modal-dialog d-flex justify-content-center align-items-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-orange" id="modalLabel">
                        Social Media Links
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleClose}
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="d-flex justify-content-around">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/beyondbikes_vic/"
                          className="text-decoration-none text-center"
                        >
                          <Image
                            src={Instagram}
                            height={30}
                            width={30}
                            alt="Instagram Logo"
                          />
                          <br />
                          <span className="text-orange fs-6">Instagram</span>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://g.co/kgs/66Atysa"
                          className="text-decoration-none text-center"
                        >
                          <Image
                            src={Google}
                            height={30}
                            width={30}
                            alt="Google Logo"
                          />
                          <br />
                          <span className="text-orange fs-6">Google</span>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="tel:+61422032961"
                          className="text-decoration-none text-center"
                          title="Call Us"
                        >
                          <Image
                            src={Call}
                            height={30}
                            width={30}
                            alt="Phone Logo"
                          />
                          <br />
                          <span className="text-orange fs-6">Call</span>
                        </a>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn"
                        style={{ background: "#1A3B19", color: "white" }}
                        onClick={handleClose}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

         <Elements stripe={stripePromise}>
                      <GooglePayInner amountCents={6000} currency="aud" />
                    </Elements>
                    <Elements stripe={stripePromise}>
                      <ApplePayInner amountCents={6000} currency="aud" />
                    </Elements>

        {/* Product Description */}
        <section className="container py-4" aria-labelledby="description-title">
          <h2
            id="description-title"
            className="fw-bold mb-4"
            style={{ color: "rgb(26, 59, 25)" }}
          >
            Description
          </h2>

          <article className="insurance-box fs-5">
  <p>Insurance Offered</p>
  {product.insurance?.map((item, index) => (
    <p key={index}>{item}</p>
  ))}
</article>

          {/* <article>
                    <h3 style={{ color: 'rgb(26, 59, 25)' }} className='mt-3 mb-5'>Rental Information</h3>
                    <div className="info-cards">
                      <div className="info-card">
                        <h4 className="info-header">Documents for Rent</h4>
                        <ul className="info-list">
                          <li style={{listStyle:'none'}}>Name</li>
                          <li style={{listStyle:'none'}}>Phone Number</li>
                          <li style={{listStyle:'none'}}>Address & Unit Number</li>
                          <li style={{listStyle:'none'}}>Email</li>
                          <li style={{listStyle:'none'}}>Valid Visa Grant</li>
                          <li style={{listStyle:'none'}}>Passport</li>
                        </ul>
                      </div>
                      <div className="info-card">
                        <h4 className="info-header">Our Rental Fee Includes</h4>
                        <ul className="info-list">
                          <li style={{listStyle:'none'}}>Delivery bag</li>
                          <li style={{listStyle:'none'}}>Locks (2)</li>
                          <li style={{listStyle:'none'}}>Helmet</li>
                          <li style={{listStyle:'none'}}>Charger</li>
                          <li style={{listStyle:'none'}}>Basic maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </article> */}

          <article>
            <h3 style={{ color: "rgb(26, 59, 25)" }} className="mt-3 mb-5">
              Rental Information
            </h3>
            <div className="info-cards">
              {/* Left Card */}
             <div className="info-card">
  <h4 className="info-header">Documents Required</h4>
  <ul className="info-list">
    {product.rentalInfo?.documents?.map((doc, index) => (
      <li key={index}>{doc}</li>
    ))}
  </ul>
</div>


              {/* Right Card */}
             <div className="info-card">
  <h4 className="info-header">Our Rental Fee Includes</h4>
  <ul className="info-list">
    {product.rentalInfo?.includes?.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
</div>

            </div>
          </article>

         
        </section>
      </main>
      <Footer />
    </>
  );
}
