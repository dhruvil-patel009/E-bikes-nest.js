// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import '../styles/OpeningHours.css';

// export default function Promotion() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef();

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
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="promotion-section text-white position-relative"
//       aria-labelledby="opening-hours-heading"
//       initial={{ opacity: 0, y: 60 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       <div className="position-absolute w-100 mt-sm-5 mt-0 h-100 d-flex align-items-center justify-content-center justify-content-md-end pe-md-5">
//         <div
//           className="text-center bg-white text-dark px-5 py-4 rounded shadow-lg opening-box animate-opening"
//           itemScope
//           itemType="https://schema.org/LocalBusiness"
//         >
//           <h2 id="opening-hours-heading" className="fw-bold mb-3" itemProp="name">
//             OPENING HOURS
//           </h2>
//           <h3 className="mb-3" itemProp="openingHours">
//             <time dateTime="Mo-Su 09:00-19:00">
//               Monday - Saturday : 9am – 7pm
//             </time>
//             <time dateTime="Mo-Su 09:00-19:00">
//               Sunday : 11am – 4pm
//             </time>
//           </h3>
//           <p className="mb-0 text-muted">
//             Visit our Melbourne location anytime during our opening hours.
//           </p>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


"use client";
import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import '../styles/OpeningHours.css';

export default function Promotion() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Business Name",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "Australia"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <>
      <Head>
      <title>Opening Hours | Beyond Bikes Melbourne</title>
  <meta
    name="description"
    content="Beyond Bikes Melbourne opening hours: Mon–Sat 9am–7pm, Sun 11am–4pm. Rent e-bikes today!"
  />
  <meta
    name="keywords"
    content="Beyond Bikes opening hours Melbourne, e-bike hire Melbourne hours, electric bike rental times"
  />
  <link rel="canonical" href="https://www.beyondbikes.com.au/" />
  {/* Optional: Open Graph / Twitter for social sharing */}
  <meta property="og:title" content="Beyond Bikes Opening Hours" />
  <meta
    property="og:description"
    content="Check our opening hours—Mon–Sat 9 am–7 pm, Sun 11 am–4 pm—and rent an e-bike in Melbourne today."
  />
  <meta
    property="og:url"
    content="https://www.beyondbikes.com.au/"
  />
  <meta
    property="og:image"
    content="https://www.beyondbikes.com.au/images/Latest-beyond-logo-12-08.png"
  />
  <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <motion.section
        ref={sectionRef}
        className="promotion-section text-white position-relative"
        aria-labelledby="opening-hours-heading"
        role="region"
        initial={{ opacity: 0, y: 60 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="position-absolute w-100 mt-sm-5 mt-0 h-100 d-flex align-items-center justify-content-center justify-content-md-end pe-md-5">
          <div className={`text-center text-dark px-sm-5 px-3 py-4 rounded shadow-lg opening-box ${isVisible ? "animate-texts" : ""}`}>
            <div style={{borderRadius:'50%'}}>
            <img
            src="/images/Latest-beyond-logo-12-08.png"
            alt="Beyond Bikes Logo"
            className="set-logo-height"
            
          />
          </div>

            <h2 style={{fontWeight:'400',letterSpacing:'3px',fontFamily:'monospace'}}>Beyond Bikes</h2>
            <h3 id="opening-hours-heading" className="fw-bold mb-3" style={{fontSize:'36px',fontFamily:'system-ui'}}>
              OPENING HOURS
            </h3>
            <h4 className="mb-1 fs-5 fw-bold">
              Monday - Saturday 
            </h4>
            <h4>9:00am - 7:00pm</h4>
            <h4 className="mb-1 mt-3 fs-5 fw-bold">
              Sunday 
            </h4>
            <h4>11am - 4pm</h4>
           
          </div>
        </div>
      </motion.section>
    </>
  );
}
