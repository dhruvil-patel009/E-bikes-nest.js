// "use client";
// import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import '../styles/ProductSection.css';
// import '../styles/ProductSection.css';
// import productsData from '../json/products.json';
// import { motion } from 'framer-motion';
// import Accessories from '../components/Accessories';
// import Header from '../components/Header';

// const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];

// export default function ProductTabs() {
//   const [activeTab, setActiveTab] = useState("Lastest Products");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("product-section");
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= window.innerHeight * 0.75) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const filteredProducts = productsData[activeTab] || [];

//   return (
//     <>
//     <Header />
//     <Accessories />
//     <motion.section
//       id="product-section"
//       className="container py-5"
//       aria-label="Product Categories"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <header className="text-center mb-4">
//         <ul className="nav nav-tabs justify-content-center border-0 mb-5">
//           {tabs.map((tab) => (
//             <li className="nav-item" key={tab}>
//               <button
//                 className={`nav-link fw-bold ${activeTab === tab ? 'active border-bottom border-2 border-danger' : ''}`}
//                 style={{ color: activeTab === tab ? '#000' : '#555', background: 'none' }}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </header>

//       <div className="row">
//         {filteredProducts.map((product) => (
//           <div className="col-6 col-md-3 mb-4 text-center shadow-hover" key={product.id}>
//             <article
//               className="product-card"
//               style={{
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//  borderRadius: "0.5rem",
// padding: "1rem",
// backgroundColor: "#fff",
// transition: "transform 0.2s ease, box-shadow 0.2s ease"
//               }}
//               itemScope
//               itemType="https://schema.org/Product"
//             >
//               <span
//                 className="sale-badge"
                
//                 aria-hidden="true"
//               >
//                 Sale
//               </span>
//               <img
//                 src={product.image}
//                 alt={`Image of ${product.name}`}
//                 className="img-fluid product-image"
//                 loading="lazy"
//                 width="200"
//                 height="200"
//                 itemProp="image"
//               />
//               <h3 className="product-title" itemProp="name">{product.name}</h3>
//               <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                 <span itemProp="price">{product.price}</span>
//                 <meta itemProp="priceCurrency" content="USD" />
//                 <span className="old-price">{product.oldPrice}</span>
//               </p>
//             </article>
//           </div>
//         ))}
//       </div>
      
//     </motion.section>
//     </>
//   );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductSection.css';
// import { useRouter } from 'next/navigation';

// import productsData from '../json/products.json';
// import { motion } from 'framer-motion';
// import Accessories from '../components/Accessories';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];

// export default function ProductTabs() {
//   const pathname = usePathname();
//   const [activeTab, setActiveTab] = useState("Lastest Products");
//   const [isVisible, setIsVisible] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("product-section");
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= window.innerHeight * 0.75) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const filteredProducts = productsData[activeTab] || [];

//   return (
//     <>
//       {/* Show Header if not on the home page */}
//       {pathname !== '/' && <Header />}

//       {/* <Accessories /> */}

//       <motion.section
//         id="product-section"
//         className="container py-4 px-3 px-sm-0"
//         aria-label="Product Categories"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* <header className="text-center mb-4">
//           <ul className="nav nav-tabs justify-content-center border-0 mb-5" style={{gap:'40px'}}>
//             {tabs.map((tab) => (
//               <li className="nav-item" key={tab}>
//                 <button
//                   className={`nav-link fw-bold ${activeTab === tab ? 'active border-bottom border-2 border-warning' : ''}`}
//                   style={{ color: activeTab === tab ? '#000' : '#555', background: 'none' }}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </header> */}
// <h1 className='mt-3 mb-5 text-center' style={{color:'#1a3b19'}}>Our Products</h1>
//         <div className="row">
//           {filteredProducts.map((product) => (
//             <div className="col-12 col-md-4 mb-4 text-center shadow-hover" key={product.id}>
//               {/* <article
//                 className="product-card"
//                 style={{
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//                   borderRadius: "0.5rem",
//                   padding: "1rem",
//                   backgroundColor: "#fff",
//                   transition: "transform 0.2s ease, box-shadow 0.2s ease"
//                 }}
//                 itemScope
//                 itemType="https://schema.org/Product"
//               >
//                 <span className="sale-badge" aria-hidden="true">Sale</span>
//                 <img
//                   src={product.image}
//                   alt={`Image of ${product.name}`}
//                   className="img-fluid product-image"
//                   loading="lazy"
//                   width="200"
//                   height="200"
//                   itemProp="image"
//                 />
//                 <h3 className="product-title" itemProp="name">{product.name}</h3>
//                 <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                   <span itemProp="price">{product.price}</span>
//                   <meta itemProp="priceCurrency" content="USD" />
//                   <span className="old-price">{product.oldPrice}</span>
//                 </p>
//               </article> */}
//               <article
//   className="product-card position-relative overflow-hidden"
//   style={{
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//     borderRadius: "0.5rem",
//     padding: "1rem",
//     backgroundColor: "#fff",
//     transition: "transform 0.2s ease, box-shadow 0.2s ease"
//   }}
//   itemScope
//   itemType="https://schema.org/Product"
// >
//   <span className="sale-badge" aria-hidden="true">Sale</span>
  
//   <img
//     src={product.image}
//     alt={`Image of ${product.name}`}
//     className="img-fluid product-image mt-3 mb-3"
//     loading="lazy"
//     style={{cursor: 'pointer'}}
//     itemProp="image"
//     onClick={() =>
//     product.name === 'E-bike 6-8h'
//   ? router.push('/cartoonproductdetails')
//   : product.name === 'E-bike 10-12h'
//   ? router.push('/latestredproductdetails')
//   : router.push('/productdetails')

//   }
//   />

//   {/* <div className="product-actions d-flex justify-content-center gap-3">
//     <button className="btn btn-sm btn-warning rounded-circle" aria-label="Add to Cart">
//       <i className="bi bi-cart"></i>
//     </button>
    
//     <button
//   className="btn btn-sm btn-outline-warning rounded-circle"
//   aria-label="Quick View"
  
// >
  
// </button>

//     <button className="btn btn-sm btn-outline-warning rounded-circle" aria-label="WishList">
//       <i className="bi bi-heart"></i>
//     </button>
//   </div> */}

//   <h1 className="product-title mt-3 fs-4" itemProp="name">{product.name}</h1>
//   <p className="product-price fs-5" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//     <span itemProp="price">{product.price}</span>
//     <meta itemProp="priceCurrency" content="USD" />
//     <span className="old-price fs-5">{product.oldPrice}</span>
//   </p>
// </article>

//             </div>
//           ))}
//         </div>
//       </motion.section>
//       {pathname === '/products' && <Footer />}
//     </>
//   );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductSection.css';
// import productsData from '../json/products.json';
// import { motion } from 'framer-motion';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];

// export default function ProductTabs() {
//   const pathname = usePathname();
//   const [activeTab, setActiveTab] = useState("Lastest Products");
//   const [isVisible, setIsVisible] = useState(false);
//   const [loading, setLoading] = useState(false); // Loader state
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("product-section");
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= window.innerHeight * 0.75) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleProductClick = (productName) => {
//     setLoading(true); // Show loader
//     setTimeout(() => {
//       if (productName === 'E-bike 6-8h') {
//         router.push('/E-bike-6-8h');
//       } else if (productName === 'E-bike 10-12h') {
//         router.push('/E-bike-10-12h');
//       } else {
//         router.push('/E-bike-8-10h');
//       }
//     }, 1000); 
//   };

//   const filteredProducts = productsData[activeTab] || [];

//   return (
//     <>
//       {pathname !== '/' && <Header />}

//       {/* Loader Overlay */}
//       {loading && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0, left: 0, right: 0, bottom: 0,
//             backgroundColor: "rgba(8, 8, 8, 0.9)",
//             zIndex: 9999,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <div className="spinner-border text-warning" style={{ width: "4rem", height: "4rem" }} role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}

//       <motion.section
//         id="product-section"
//         className="container py-4 px-3 px-sm-0"
//         aria-label="Product Categories"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h1 className='mt-3 mb-5 text-center' style={{ color: '#1a3b19' }}>Our Products</h1>

//         <div className="row">
//           {filteredProducts.map((product) => (
//             <div className="col-12 col-md-4 mb-4 text-center shadow-hover" key={product.id}>
//               <article
//                 className="product-card position-relative overflow-hidden"
                // style={{
                //   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
                //   borderRadius: "0.5rem",
                //   padding: "1rem",
                //   backgroundColor: "#fff",
                //   transition: "transform 0.2s ease, box-shadow 0.2s ease"
                // }}
//                 itemScope
//                 itemType="https://schema.org/Product"
//               >
//                 <span className="sale-badge" aria-hidden="true">Sale</span>

//                 <img
//                   src={product.image}
//                   alt={`Image of ${product.name}`}
//                   className="img-fluid product-image mt-3 mb-3"
//                   loading="lazy"
//                   style={{ cursor: 'pointer' }}
//                   itemProp="image"
//                   onClick={() => handleProductClick(product.name)}
//                 />

//                 <h1 className="product-title mt-3 fs-4" itemProp="name">{product.name}</h1>
//                 <p className="product-price fs-5" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                   <span itemProp="price">{product.price}</span>
//                   <meta itemProp="priceCurrency" content="AUD" />
//                   <span className="old-price fs-5">{product.oldPrice}</span>
//                 </p>
//               </article>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {pathname === '/products' && <Footer />}
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productsData from "../json/products.json";
import { motion } from "framer-motion";
import '../styles/ProductSection.css';

export default function ProductTabs() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Lastest Products");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("product-section");
      if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProductClick = (productName) => {
    setLoading(true);
    setTimeout(() => {
      const slug = productName.replace(/\s+/g, "-");
      router.push(`/${slug}`);
    }, 9000);
  };

  const filteredProducts = productsData[activeTab] || [];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Beyond Bikes | E-Bike Rentals Melbourne – Products</title>
        <meta
          name="description"
          content="Discover Melbourne’s premium electric bike rentals. Explore best-selling and top-rated e-bikes with Beyond Bikes."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.beyondbikes.com.au/products" />

        <meta
    name="keywords"
    content="electric bikes Melbourne, rent e-bikes, Beyond Bikes Australia, e-bike hire Melbourne"
  />

        {/* Open Graph */}
        <meta property="og:title" content="Beyond Bikes | E-Bike Rentals Melbourne – Products" />
        <meta property="og:description" content="Explore our range of Melbourne e-bikes—best sellers and top-rated electric bikes." />
        <meta property="og:url" content="https://www.beyondbikes.com.au/products" />
        <meta property="og:image" content="https://www.beyondbikes.com.au/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beyond Bikes | E-Bike Rentals Melbourne – Products" />
        <meta name="twitter:description" content="Explore our range of Melbourne e-bikes—best sellers and top-rated electric bikes." />
        <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/og-image.jpg" />
      </Head>

      {pathname !== "/" && <Header />}

      {/* Loader Overlay */}
      
{loading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="loader"
              style={{ width: "4rem", height: "4rem", color:'#1A3B19' }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      <motion.section
        id="product-section"
        className="container py-4 px-3 px-sm-0"
        aria-label="Electric Bike Products"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Dynamic Page Title */}
        {pathname === "/" ? (
          <h2 className="mt-3 mb-5 fs-1 fw-bold text-center animated-underline" style={{ color: "#1A3B19" }}>Bikes for Rent</h2>
        ) : (
          <h1 className="mt-3 mb-5 fs-1 fw-bold text-center animated-underline" style={{ color: "#1A3B19" }}>Our E-Bikes for Rent</h1>
        )}

        

        <div className="row">
  {filteredProducts.map((product, i) => (
    <div className="col-12 col-md-4 mb-4 text-center shadow-hover" key={product.id}>
      <article 
        className="product-card card border-0 shadow-sm text-center h-100 position-relative"
        itemScope 
        style={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  backgroundColor: "#f9f9f9",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
        // style="box-shadow:0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);border-radius:0.5rem;padding:1rem;background-color:#fff;transition:transform 0.2s ease, box-shadow 0.2s ease"
        itemType="https://schema.org/Product"
      >
        {/* Sale Ribbon */}
        <span 
          className="sale-badge"
          aria-hidden="true"
        >
          Sale
        </span>

        {/* Product Image */}
        <img
          src={product.image}
          alt={`${product.name} - electric bike`}
          className="img-fluid mb-3 product-image"
          loading="lazy"
          itemProp="image"
          title={product.name}
          onClick={() => handleProductClick(product.name)}
          style={{ cursor: "pointer", maxHeight: "220px", objectFit: "contain" }}
        />

        {/* Product Title */}
        {pathname === "/" ? (
          <h3 className="fs-sm-4 fs-3 fw-bold" style={{color:'#1A3B19'}} itemProp="name">
            {product.name}
          </h3>
        ) : (
          <h2 className="fs-sm-4 fs-3 fw-bold" style={{color:'#1A3B19'}} itemProp="name">
            {product.name}
          </h2>
        )}

        {/* Pricing */}
        <p 
          className="product-price mt-2 fs-5"
          itemProp="offers"
          style={{color:'#1A3B19'}}
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span itemProp="price" style={{color:'#1A3B19'}}>{product.price}</span>
          <meta itemProp="priceCurrency" content="AUD" />
          {product.oldPrice && (
            <span className="text-decoration-line-through ms-2 fw-600" style={{color:'#ccc'}}>
              {product.oldPrice}
            </span>
          )}
        </p>
        <div className="d-flex justify-content-center gap-4 my-3">
  <div className="text-center">
    <i className="bi bi-battery-charging fs-4" style={{color:'#1A3B19'}}></i>
    {/* <p className="small mb-0" style={{color:'#1A3B19'}}>Battery</p> */}
    <p className="small mb-0" style={{ color: '#1A3B19' }}>{product.battery || "Battery"}</p>
  </div>
  <div className="text-center">
    <i className="bi bi-clock-history fs-4" style={{ color: '#1A3B19' }}></i>
    {/* <p className="small mb-0" style={{color:'#1A3B19'}}>Motor</p> */}
    <p className="small mb-0" style={{ color: '#1A3B19' }}>{product.batteryHours || "Motor"}</p>
  </div>
  <div className="text-center">
    <i className="bi bi-speedometer fs-4" style={{ color: '#1A3B19' }}></i>
    {/* <p className="small mb-0" style={{color:'#1A3B19'}}>Range</p> */}
    <p className="small mb-0" style={{ color: '#1A3B19' }}>{product.topSpeed || "Range"}</p>
  </div>
</div>
      </article>
    </div>
  ))}
</div>

      </motion.section>

      {/* Structured Data for Products List */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": filteredProducts.map((p, idx) => ({
            "@type": "Product",
            position: idx + 1,
            name: p.name,
            image: `https://www.beyondbikes.com.au${p.image}`,
            url: `https://www.beyondbikes.com.au/${p.slug || p.name.replace(/\s+/g, "-")}`,
            brand: { "@type": "Brand", name: "Beyond Bikes" },
            offers: { "@type": "Offer", price: p.price, priceCurrency: "AUD", availability: "https://schema.org/InStock" }
          }))
        })
      }} />

      {pathname === "/products" && <Footer />}
    </>
  );
}
