// // // components/CategorySection.js
// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import categoryData from '../json/categories.json';
// // import '../styles/CategorySection.css';

// // export default function Accessories() {
// //   return (
// //     <section
// //       className="container py-5"
// //       aria-label="Shop by Category"
// //       itemScope
// //       itemType="https://schema.org/ItemList"
// //     >
// //       <meta itemProp="name" content="Shop Categories" />
// //       <h1 className="text-center mb-5">Accessories</h1>
// //       <div className="category-scroll d-flex flex-nowrap overflow-auto gap-4 mt-5 px-2 px-md-0">
      
// //         {categoryData.map((category, index) => (
// //           <article
// //             key={category.id}
// //             itemScope
// //             itemType="https://schema.org/Thing"
// //             className={`category-circle-wrapper flex-shrink-0 text-center ${index === 0 ? 'active' : ''}`}
// //             style={{ width: '140px' }}
// //           >
// //             <div className="circle mt-3 position-relative mx-auto">
// //               <Image
// //                 src={category.image}
// //                 alt={category.name}
// //                 width={100}
// //                 height={100}
// //                 className="img-fluid rounded-circle"
// //                 itemProp="image"
// //               />
// //             </div>
// //             <h5 className="mt-3 mb-1 fw-medium" itemProp="name">{category.name}</h5>
// //             {category.products && (
// //               <small className="text-muted" itemProp="description">
// //                 {category.products} products
// //               </small>
// //             )}
// //           </article>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // components/CategorySection.js
// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import categoryData from '../json/categories.json';
// import '../styles/CategorySection.css';

// export default function Accessories() {
//   const scrollRef = useRef();

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = 200;
//       current.scrollBy({
//         left: direction === "next" ? scrollAmount : -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section
//       className="container py-5"
//       aria-label="Shop by Category"
//       itemScope
//       itemType="https://schema.org/ItemList"
//     >
//       <meta itemProp="name" content="Shop Categories" />
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1 className="text-center m-0 set-accesories-color">Accessories</h1>
//         <div className="d-flex gap-2">
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("prev")}>Previous</button>
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("next")}>Next</button>
//         </div>
//       </div>

//       <div
//         className="category-scroll d-flex flex-nowrap overflow-hidden gap-4"
//         ref={scrollRef}
//       >
//         {categoryData.map((category, index) => (
//           <article
//             key={category.id}
//             itemScope
//             itemType="https://schema.org/Thing"
//             className={`category-circle-wrapper flex-shrink-0 text-center ${index === 0 ? 'active' : ''}`}
//             style={{ width: '200px' }}
//           >
//             <div className="circle mt-3 position-relative mx-auto">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={300}
//                 height={300}
//                 className="img-fluid rounded-circle"
//                 itemProp="image"
//               />
//             </div>
//             <h5 className="mt-3 mb-1 fw-medium" itemProp="name">{category.name}</h5>
//             {category.products && (
//               <small className="text-muted" itemProp="description">
//                 {category.products} products
//               </small>
//             )}
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import categoryData from '../json/categories.json';
// import '../styles/CategorySection.css';
// import { motion } from "framer-motion";

// export default function Accessories() {
//   const scrollRef = useRef();
//   const sectionRef = useRef();
//   const [isVisible, setIsVisible] = useState(false);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = 200;
//       current.scrollBy({
//         left: direction === "next" ? scrollAmount : -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= window.innerHeight * 0.75) {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run on mount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="container py-5"
//       aria-label="Shop by Category"
//       itemScope
//       itemType="https://schema.org/ItemList"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <meta itemProp="name" content="Shop Categories" />
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1 className="text-center m-0 set-accesories-color">Accessories</h1>
//         <div className="d-flex gap-2">
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("prev")}>Previous</button>
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("next")}>Next</button>
//         </div>
//       </div>

//       <div
//         className="category-scroll d-flex flex-nowrap overflow-hidden gap-4"
//         ref={scrollRef}
//       >
//         {categoryData.map((category, index) => (
//           <article
//             key={category.id}
//             itemScope
//             itemType="https://schema.org/Thing"
//             className={`category-circle-wrapper flex-shrink-0 text-center ${index === 0 ? 'active' : ''}`}
//             style={{ width: '200px' }}
//           >
//             <div className="circle mt-3 position-relative mx-auto">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={300}
//                 height={300}
//                 className="img-fluid rounded-circle"
//                 itemProp="image"
//               />
//             </div>
//             <h5 className="mt-3 mb-1 fw-medium" itemProp="name">{category.name}</h5>
//             {category.products && (
//               <small className="text-muted" itemProp="description">
//                 {category.products} products
//               </small>
//             )}
//           </article>
//         ))}
//       </div>
//     </motion.section>
//   );
// }

"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import categoryData from '../json/categories.json';
import '../styles/CategorySection.css';
import { motion } from "framer-motion";

export default function Accessories() {
  const scrollRef = useRef();
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = 4; // Customize based on screen size if needed
  const totalPages = Math.ceil(categoryData.length / itemsPerPage);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth; // scroll by container width
      current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
      setCurrentSlide(prev =>
        direction === "next"
          ? Math.min(prev + 1, totalPages - 1)
          : Math.max(prev - 1, 0)
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
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

  return (
    <motion.section
      ref={sectionRef}
      className="container py-5 accessories-section"
      aria-label="Shop by Category"
      itemScope
      itemType="https://schema.org/ItemList"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <meta itemProp="name" content="Shop Categories" />
      <h1 className="text-center mb-4 set-accesories-color">Accessories</h1>

      <div className="category-scroll d-flex flex-nowrap overflow-hidden gap-4 mb-4" ref={scrollRef}>
        {categoryData.map((category, index) => (
          <article
            key={category.id}
            itemScope
            itemType="https://schema.org/Thing"
            className="category-circle-wrapper flex-shrink-0 text-center"
            style={{ width: '200px' }}
          >
            <div className="circle mt-3 position-relative mx-auto">
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
                className="img-fluid rounded-circle"
                itemProp="image"
              />
            </div>
            <h5 className="mt-3 mb-1 fw-medium" itemProp="name">{category.name}</h5>
            {category.products && (
              <small className="text-muted" itemProp="description">
                {category.products} products
              </small>
            )}
          </article>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="d-flex flex-column align-items-center mt-4">
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-outline-dark btn-sm" style={{borderRadius:'50%'}} onClick={() => scroll("prev")} disabled={currentSlide === 0}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="btn btn-outline-dark btn-sm" style={{borderRadius:'50%'}} onClick={() => scroll("next")} disabled={currentSlide === totalPages - 1}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* <div className="d-flex justify-content-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={`dot ${currentSlide === i ? 'active' : ''}`}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: currentSlide === i ? '#000' : '#ccc',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </div> */}
      </div>
    </motion.section>
  );
}
