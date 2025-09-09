// import productsData from '../json/products.json';
// import '../styles/ProductSection.css';

// export default function Product() {
//  return (
//     <section className="container py-5" aria-label="Latest Products for Sale">
//   <header className="text-center mb-4">
//     <h2 className="fw-bold">Latest Products</h2>
//   </header>
//   <div className="row">
//     {productsData.map((product) => (
//       <div className="col-6 col-md-3 mb-4 text-center shadow-hover" key={product.id} 
// >
//         <article className="product-card" itemScope itemType="https://schema.org/Product" style={{
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//     borderRadius: "0.5rem",
//     padding: "1rem",
//     backgroundColor: "#fff",
//     transition: "transform 0.2s ease, box-shadow 0.2s ease"
//   }}>
//           <span
//             className="sale-badge"
//             style={{ transform: 'rotate(45deg)' }}
//             aria-hidden="true"
//           >
//             Sale
//           </span>
//           <img
//             src={product.image}
//             alt={`Image of ${product.name}`}
//             className="img-fluid product-image"
//             loading="lazy"
//             width="200"
//             height="200"
//             itemProp="image"
//           />
//           <h3 className="product-title" itemProp="name">{product.name}</h3>
//           <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//             <span itemProp="price">{product.price}</span>
//             <meta itemProp="priceCurrency" content="USD" />
//             <span className="old-price">{product.oldPrice}</span>
//           </p>
//         </article>
//       </div>
//     ))}
//   </div>
// </section>
//   );
// }

"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductSection.css';
import productsData from '../json/products.json';
import { motion } from 'framer-motion';

const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Lastest Products");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("product-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = productsData[activeTab] || [];

  return (
    <motion.section
      id="product-section"
      className="container py-5"
      aria-label="Product Categories"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="text-center mb-4">
        <ul className="nav nav-tabs justify-content-center border-0 mb-5">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link fw-bold ${activeTab === tab ? 'active border-bottom border-2 border-danger' : ''}`}
                style={{ color: activeTab === tab ? '#000' : '#555', background: 'none' }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </header>

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-6 col-md-3 mb-4 text-center shadow-hover" key={product.id}>
            <article
              className="product-card"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
 borderRadius: "0.5rem",
padding: "1rem",
backgroundColor: "#fff",
transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
              itemScope
              itemType="https://schema.org/Product"
            >
              <span
                className="sale-badge"
                
                aria-hidden="true"
              >
                Sale
              </span>
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="img-fluid product-image"
                loading="lazy"
                width="200"
                height="200"
                itemProp="image"
              />
              <h3 className="product-title" itemProp="name">{product.name}</h3>
              <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span itemProp="price">{product.price}</span>
                <meta itemProp="priceCurrency" content="USD" />
                <span className="old-price">{product.oldPrice}</span>
              </p>
            </article>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
