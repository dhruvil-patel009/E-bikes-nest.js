import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Product from './components/Product'
import Product from "./products/page";
import Accessories from "./components/Accessories";
import Promotion from "./components/Promotion";
import ContactPage from "./components/ContactPage";
// import About from './components/About'
import About from "./about/page";
import Footer from "./components/Footer";
// import ProductPage from './components/ProductDetails'
import ProductPage from "./E-bike-8-10h/page";
// import WarrantyPage from './components/Warranty'
// import Contact from './components/Contact'
import Contact from "./contact/page";
// import Repairs from './components/Repairs'
import Repairs from "./repairs/page";
import ChatWidget from "./components/ChatWidget";
import Cart from "./cart/page";
import BasicKnowlegePage from "./basicknowledge/page";
import RentalEbikes from "./rental/page";
import Review from "./review/page";
import AmazingOffers from "./amazingoffers/page";
import TermAndCondition from "./termsandcondition/page";
// import CheckoutPage from "./checkout/checkout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ride | Beyond Bikes</title>
        <meta
          name="description"
          content="Beyond Bikes is ride for electric purpose use."
        />
        <meta name="keywords" content="beyond bikes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ride | Electric Road Bikes" />
        <meta
          property="og:description"
          content="Explore premium electric road bikes. More mileage, more fun."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/set-e-bike.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourdomain.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header />
      <Hero />
      {/* <Accessories /> */}
      {/* <CheckoutPage /> */}
      <Product />
      <Promotion />
      <Review />
      {/* <About /> */}
      <About />
      <AmazingOffers />
      <ContactPage />

      {/* <ProductPage /> */}
      {/* <WarrantyPage /> */}

      {/* <Contact /> */}
      {/* <Contact /> */}
      {/* <Repairs /> */}
      {/* <ChatWidget /> */}
      {/* <Cart /> */}
      {/* <BasicKnowlegePage /> */}
      {/* <RentalEbikes /> */}

      {/* <TermAndCondition /> */}
      <Footer />
    </>
  );
}
