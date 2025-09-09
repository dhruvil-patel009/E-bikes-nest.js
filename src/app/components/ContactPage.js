// // components/ContactPage.js
// "use client";
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Contact.css';


// export default function ContactPage() {
//   return (
//     <section className='mt-5' style={{background:'#f8f8f8'}}>
//     <div className="container py-5 px-3 text-white" aria-label="Store Locations">
//       <div className="row justify-content-center mb-4">        
//           <h2 className="text-center" style={{color:'#ff6b00'}}>Contact Us on Store Location</h2>  
        
//       </div>

//       {/* Branch 1 */}
//       <div className="row align-items-start position-relative mb-5" itemScope itemType="https://schema.org/LocalBusiness">
//         <div className="col-md-6 set-location-padding">
//           {/* <h4 className="fw-bold" itemProp="name" style={{color:'#9b5402'}}>Branch 1: EBIKE100</h4> */}
//           <p itemProp="address" style={{color:'#ff6b00'}}><strong>Address:-</strong>  667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia</p>
//           <p itemProp="email" style={{color:'#ff6b00'}}><strong>Email Id:-</strong> info.beyondbikes@gmail.com</p>
//           <p itemProp="telephone" style={{color:'#ff6b00'}}><strong>Phone Number:-</strong> +61422032961</p>
//           {/* <div className="d-flex gap-3 mt-2">
//             <a href="#" aria-label="Instagram"><FaInstagram size={20} className="text-white" /></a>
//             <a href="#" aria-label="WhatsApp"><FaWhatsapp size={20} className="text-white" /></a>
//             <a href="#" aria-label="Facebook"><FaFacebookF size={20} className="text-white" /></a>
//           </div> */}
//         </div>
//         <div className="col-md-6 d-flex justify-content-center">
          
//   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.892981477474!2d145.01450907569838!3d-37.88618537195743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad2bb1333866ab51%3A0xa4b86ef9fc66b952!2sBeyond%20Bikes!5e0!3m2!1sen!2sin!4v1752858283636!5m2!1sen!2sin" allowFullScreen={true}
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade" className='responsive-map'></iframe>

//         </div>
//       </div>

      
//     </div>
//     </section>
//   );
// }

// SEO
// components/ContactPage.js
"use client";

import {useState} from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const handleRentalClick = () => {
    setLoading(true);
    setTimeout(() => router.push("/rental"), 1000);
  };
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Contact Beyond Bikes | E-Bike Store in Caulfield South</title>
        <meta
          name="description"
          content="Get in touch with Beyond Bikes at our Caulfield South store. Visit us for premium e-bikes, helmets, and accessories. Call +61 422 032 961 or email info.beyondbikes@gmail.com."
        />
        <meta
          name="keywords"
          content="Beyond Bikes contact, ebike store Melbourne, electric bike shop Caulfield, Beyond Bikes Australia location"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.beyondbikes.com.au/contact" />


        {/* Open Graph */}
        <meta property="og:title" content="Contact Beyond Bikes | Melbourne E-Bike Store" />
        <meta
          property="og:description"
          content="Find Beyond Bikes at 667 Glen Huntly Rd, Caulfield South VIC 3162, Australia. Call +61 422 032 961 for premium electric bikes."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://www.beyondbikes.com.au/contact" />
        <meta property="og:image" content="https://www.beyondbikes.com.au/images/storefront.jpg" />
        <meta property="business:contact_data:street_address" content="667 Glen Huntly Rd" />
        <meta property="business:contact_data:locality" content="Caulfield South" />
        <meta property="business:contact_data:region" content="VIC" />
        <meta property="business:contact_data:postal_code" content="3162" />
        <meta property="business:contact_data:country_name" content="Australia" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Beyond Bikes | Melbourne E-Bike Store" />
        <meta
          name="twitter:description"
          content="Visit Beyond Bikes in Caulfield South for premium electric bikes and accessories."
        />
        <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/storefront.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Beyond Bikes",
              "image": "https://www.beyondbikes.com.au/images/storefront.jpg",
              "@id": "",
              "url": "https://www.beyondbikes.com.au",
              "telephone": "+61 422 032 961",
              "address": {
  "@type": "PostalAddress",
  "streetAddress": "576 North Rd",
  "addressLocality": "Ormond",
  "addressRegion": "VIC",
  "postalCode": "3204",
  "addressCountry": "AU"
},

              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -37.8861853,
                "longitude": 145.0145090
              },
              "openingHours": "Mo-Su 09:00-19:00",
              "sameAs": [
                "https://www.facebook.com/BeyondBikes",
                "https://www.instagram.com/beyondbikes",
                "https://twitter.com/beyondbikes"
              ]
            })
          }}
        />
      </Head>

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

      {/* Contact Section */}
      <section className='scroll-animate'>
        <div
          className="container py-sm-5 mt-4 py-1 px-3 text-white"
          aria-label="Store Locations"
        >
          <div className="row justify-content-center mb-sm-5 mb-3">

            <h2 className="text-center fw-600 fs-1" style={{ color: '#1A3B19' }}>
              Contact Beyond Bikes in Melbourne
            </h2>
            {/* <p>Contact Us on this Located Destination and</p> */}
          </div>

          {/* Branch */}
          <div
            className="row align-items-start position-relative mb-5"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
          
            <div className="col-md-6 set-location-padding">
              <h2 className='mb-3' style={{letterSpacing:'4px',color:'rgb(26, 59, 25)',fontSize: '15px',fontWeight:'600'}}>BEYOND BIKES</h2>
              <h3
          className="fw-bold mb-3"
          style={{ color: "rgb(26, 59, 25)" }}
        >
          Explore Our Location
        </h3>

        {/* Description */}
        <p className="mb-2" style={{ color: "rgb(26, 59, 25)" }}>
          Visit us at our store for professional e-bike rentals and service.  
          Conveniently located to serve you better.
        </p>

        <a
                onClick={handleRentalClick}
                className="rent-now px-4 py-2 mt-3"
                aria-label="Book your Beyond Bikes rental in Melbourne"
                title="Beyond Bikes - Rent an e-bike in Melbourne"
                href="/contact"
                
              >
                Contact <span className="arrow">→</span>
              </a>
            </div>
<div className="col-md-6 d-flex justify-content-center mt-5 mt-sm-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.120442377545!2d145.0406816!3d-37.904247399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad669652d799b25%3A0xab28d496d1fa88c7!2s576%20North%20Rd%2C%20Ormond%20VIC%203204%2C%20Australia!5e0!3m2!1sen!2sin!4v1756139787406!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy"
                title="Beyond Bikes Location Map"
                aria-label="Beyond Bikes Store Location on Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
                className="responsive-map"
              ></iframe>
              <noscript>
                View our location on{' '}
                <a
                  href="https://goo.gl/maps/7hK3uDNWv5LJbGf86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>
              </noscript>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
