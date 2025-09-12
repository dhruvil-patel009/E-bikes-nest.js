// 'use client';

// import Image from 'next/image';
// import Head from 'next/head';
// import '../styles/amazingoffers.css';

// export default function AmazingOffers() {
//   return (
//     <>
//       <Head>
//         <title>Restaurant Food Menu</title>
//         <meta name="description" content="Delicious food items on our restaurant menu with special discounts!" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

      
//       <section className="hero-section">
//   <h1 className="hero-title">STUDENTS DEAL</h1>
//   <h2 className="hero-subtitle">Coming Soon....</h2>

//   <div className="food-container">
//     {foodData.map((item, idx) => (
//       <div className="food-item" key={idx}>
//         <div className="image-wrapper">
//           <Image
//             src={item.image}
//             alt={item.label}
//             width={200}
//             height={200}
//           />
//         </div>
//         <p className="food-label">{item.label}</p>
//       </div>
//     ))}
//   </div>

  
// </section>

//     </>
//   );
// }

// const foodData = [
//   {
//     label: 'BEYOND BIKES CAPS',
//     image: '/images/cap-ebike.jpeg',
//   },
//   {
//     label: 'BEYOND BIKES HELMET',
//     image: '/images/helmetebikes.jpeg',
//   },
//   {
//     label: 'BEYOND BIKES T-SHIRT',
//     image: '/images/tshirtebikes.jpeg',
//   },
// ];




// 'use client';

// import Image from 'next/image';
// import Head from 'next/head';
// import '../styles/amazingoffers.css';

// export default function AmazingOffers() {
//   const pageTitle = "Student Deals | Beyond Bikes Melbourne | Special Offers";
//   const pageDescription =
//     "Discover exclusive student deals at Beyond Bikes Melbourne. Special discounts on e-bike accessories including caps, helmets, and T-shirts. Limited time offers!";
//   const pageUrl = "https://yourdomain.com/amazing-offers";
//   const pageImage = "https://yourdomain.com/images/helmetebikes.jpeg";

//   return (
//     <>
//       <Head>
//         {/* Primary SEO Tags */}
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="keywords" content="student deals Melbourne, beyond bikes offers, e-bike accessories, helmet discount, cap discount, T-shirt discount" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={pageUrl} />

//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:url" content={pageUrl} />
//         <meta property="og:image" content={pageImage} />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={pageTitle} />
//         <meta name="twitter:description" content={pageDescription} />
//         <meta name="twitter:image" content={pageImage} />

//         {/* Structured Data for SEO */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "ProductCollection",
//               "name": "Student Deals - Beyond Bikes",
//               "description": pageDescription,
//               "url": pageUrl,
//               "image": pageImage,
//               "brand": {
//                 "@type": "Brand",
//                 "name": "Beyond Bikes Melbourne"
//               },
//               "offers": foodData.map(item => ({
//                 "@type": "Offer",
//                 "itemOffered": {
//                   "@type": "Product",
//                   "name": item.label,
//                   "image": `https://yourdomain.com${item.image}`,
//                   "brand": "Beyond Bikes Melbourne"
//                 },
//                 "priceCurrency": "AUD",
//                 "availability": "https://schema.org/InStock"
//               }))
//             })
//           }}
//         />
//       </Head>

//       <section className="hero-section">
//         <header>
//           <h1 className="hero-title">Students Deal</h1>
//           <h2 className="hero-subtitle">Coming Soon...</h2>
//         </header>

//         <div className="food-container" role="list">
//           {foodData.map((item, idx) => (
//             <article className="food-item" key={idx} role="listitem">
//               <div className="image-wrapper">
//                 <Image
//                   src={item.image}
//                   alt={`${item.label} - Special Student Offer`}
//                   width={200}
//                   height={200}
//                   loading="lazy"
//                 />
//               </div>
//               <p className="food-label">{item.label}</p>
//             </article>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// const foodData = [
//   {
//     label: 'Beyond Bikes Cap',
//     image: '/images/cap-ebike.jpeg',
//   },
//   {
//     label: 'Beyond Bikes Helmet',
//     image: '/images/helmetebikes.jpeg',
//   },
//   {
//     label: 'Beyond Bikes T-Shirt',
//     image: '/images/tshirtebikes.jpeg',
//   },
// ];

'use client';

import Image from 'next/image';
import Head from 'next/head';
import '../styles/amazingoffers.css';
import { useEffect } from "react";


export default function AmazingOffers() {
  const pageTitle = "Student Deals | Beyond Bikes Melbourne | Special Offers";
  const pageDescription =
    "Discover exclusive student deals at Beyond Bikes Melbourne. Special discounts on e-bike accessories including caps, helmets, and T-shirts. Limited time offers!";
  const pageUrl = "https://www.beyondbikes.com.au/amazing-offers";
  const pageImage = "https://www.beyondbikes.com.au/images/helmetebikes.jpeg";

  useEffect(() => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 } // trigger when 20% visible
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}, []);


  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="student deals Melbourne, beyond bikes offers, e-bike accessories, helmet discount, cap discount, T-shirt discount" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProductCollection",
              "name": "Student Deals - Beyond Bikes",
              "description": pageDescription,
              "url": pageUrl,
              "image": pageImage,
              "brand": {
                "@type": "Brand",
                "name": "Beyond Bikes Melbourne"
              },
              "offers": foodData.map(item => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": item.label,
                  "image": `https://www.beyondbikes.com.au${item.image}`,
                  "brand": "Beyond Bikes Melbourne"
                },
                "priceCurrency": "AUD",
                "availability": "https://schema.org/InStock"
              }))
            })
          }}
        />
      </Head>

      <section className="hero-section scroll-animate">
        <header>
          <h1 className="hero-title" style={{color:'rgb(198, 252, 42)',fontFamily:'system-ui'}}>Students Deal</h1>
          <h2 className="hero-subtitle">Coming Soon...</h2>
        </header>

        <div className="food-container scroll-animate" role="list">
          {foodData.map((item, idx) => (
            <article className="food-item" key={idx} role="listitem">
              <div className="image-wrapper">
                <Image
                  src={item.image}
                  alt={`${item.label} - Special Student Offer`}
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
              <p className="rent-now" style={{textTransform:'uppercase'}}>{item.label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

const foodData = [
  {
    label: 'Beyond Bikes Caps',
    image: '/images/cap-ebike.jpeg',
  },
  {
    label: 'Beyond Bikes Helmet',
    image: '/images/helmetebikes.jpeg',
  },
  {
    label: 'Beyond Bikes T-Shirt',
    image: '/images/tshirtebikes.jpeg',
  },
];

