// 'use client';
// import Head from 'next/head';
// import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { FaBicycle, FaLock, FaTools, FaMapMarkedAlt, FaHardHat } from 'react-icons/fa';

// export default function RentalEbikes() {
//   return (
//     <>
//       <Head>
//         <title>Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS</title>
//         <meta name="description" content="Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance. Ideal for delivery riders and urban commuting." />
//         <meta name="keywords" content="e-bike rental, electric bike hire, GPS ebike rental, delivery ebike, affordable ebike rental, weekly ebike rental, helmet and charger included" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://yourdomain.com/rentals" />
//       </Head>

//       <Header />

//       {/* Hero Section */}
//       <section className="bg-light py-5 text-center" itemScope itemType="https://schema.org/Product">
//         <div className="container">
//           <h1 className="display-5 fw-bold mb-3" style={{color:'#1a3b19'}} itemProp="name">Affordable Weekly E-Bike Rentals</h1>
//           <p className="text-dark" itemProp="description" style={{fontSize:'18px',fontWeight:'600'}}>
//             Rent e-bikes with GPS — perfect for delivery riders. Includes helmet, charger, 2 locks, and maintenance.
//           </p>
//         </div>
//       </section>

//       {/* Terms Section */}
//       <section className="pb-2 pt-4" id="rental-terms">
//         <div className="container">
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Rental Terms & Conditions</h2>
//           <ul className="list-group list-group-flush mb-4">
//             <li className="list-group-item"><strong>1.</strong> The renter agrees to waive all claims and/or causes of action against the Lessor (BEYOND
// BIKES PTY LTD) arising from the operation, use, or misuse of the rented bicycle.
// </li>
//             <li className="list-group-item"><strong>2.</strong> The renter is responsible for all charges, including rental fees and damages to the
// equipment, and agrees to return the bicycle in the same condition as received (normal
// wear and tear excluded).
// </li>
//             <li className="list-group-item"><strong>3.</strong> Theft or total loss of the rental bike is the sole responsibility of the renter.</li>
//             <li className="list-group-item"><strong>4.</strong> The customer agrees to pay a total of $1,500 in the event of a total loss of the bike or theft of
// the battery. This amount is payable over a period of two (2) weeks following the occurrence
// of the mishap.</li>
// <li className="list-group-item"><strong>5.</strong> A minimum of 7 days notice is required prior to the scheduled return of the bike.</li>
// <li className="list-group-item"><strong>6.</strong> The renter is responsible for any misplaced, lost, or unlocked equipment and accessories.</li>
//           </ul>
//         </div>
//       </section>

//       <section className="py-2">
//         <div className="container">
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Accessories Provided</h2>
//           <ul className="list-group list-group-flush mb-4">
//             <li className="list-group-item"><strong>1.</strong> Helmet
// </li>
//             <li className="list-group-item"><strong>2.</strong> Delivery Bags
// </li>
//             <li className="list-group-item"><strong>3.</strong> GPS Tracker</li>
//             <li className="list-group-item"><strong>4.</strong> Bike Lock</li>
// <li className="list-group-item"><strong>5.</strong> Battery Lock</li>
// <li className="list-group-item"><strong>6.</strong>Charger</li>
//           </ul>
//         </div>
//       </section>

//       {/* Rental Package One */}
//       <section className="bg-white" id="no-gps">
//         <div className="container px-3">
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Bikes For Rent:-</h2>
//           {/* <p><FaBicycle className="me-2 fs-1" style={{color:'#1a3b19'}}/> Includes delivery bag, 2 locks, helmet, charger, and free maintenance.</p> */}
//           {/* <p><FaLock className="me-2 fs-2" style={{color:'#1a3b19'}}/> Bond: <strong>$300</strong> | Minimum Rental: <strong>2 weeks</strong></p> */}

//           <div className="row mt-4 mb-4 g-4">
//             {/* Bike 1 */}
            
// <div className="col-md-4" itemScope itemType="https://schema.org/Product">
//               <div className="card border-0 shadow-sm h-100">
//                 <img src="/images/Cartoon-Cycle-remove-text-latest.png" alt="Ebike100 rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 6-8h</h5>
//                   <p>Battery 48V 50A – <span style={{color:'rgb(255, 107, 0)'}} className="fw-bold">$60 AUD</span> per week</p>
//                   <p className="text-muted">Battery hours 6-8 hrs.</p>
//                 </div>
//               </div>
//             </div>
//             {/* Bike 2 */}
//             <div className="col-md-4" itemScope itemType="https://schema.org/Product">
//               <div className="card border-0 shadow-sm h-100">
//                 <img src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Flyebike electric bike rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 8-10h</h5>
//                   <p>Battery 48V 70A – <span className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                     <span itemProp="priceCurrency" content="USD" />$<span itemProp="price">65 AUD</span> 
//                   </span> per week</p>
//                   <p className="text-muted" itemProp="description">Battery hours 8-10 hrs.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4" itemScope itemType="https://schema.org/Product">
//               <div className="card border-0 shadow-sm h-100">
//                 <img src="/images/Latest-Change-Angle-Red-Cycle-latest.png" alt="Ebike100 rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 10-12h</h5>
//                   <p>Battery 48V 80A – <span style={{color:'rgb(255, 107, 0)'}} className="fw-bold">$70 AUD</span> per week</p>
//                   <p className="text-muted">Battery hours 10 - 12 hours</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Rental Package Two */}
//       {/* <section className="py-5 mt-4 bg-light" id="with-gps">
//         <div className="container">
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Package Two: With GPS Tracking</h2>
//           <p><FaMapMarkedAlt className="me-2 fs-2" style={{color:'#1a3b19'}}/> GPS installed on both battery and frame for theft protection.</p>
//           <p><FaHardHat className="me-2 fs-2" style={{color:'#1a3b19'}}/> Comes with helmet, locks, delivery bag, charger, and maintenance.</p>
//           <p><FaLock className="me-2 fs-2" style={{color:'#1a3b19'}}/> Bond: <strong>$500</strong> | Minimum Rental: <strong>2 weeks</strong></p>

//           <div className="my-5" itemScope itemType="https://schema.org/Product">
//             <Image src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Ebike100 with GPS" width={400} height={400} className="img-fluid rounded" priority itemProp="image" />
//             <h5 className="fw-bold mt-4" style={{color:'rgb(255, 107, 0)'}} itemProp="name">EBIKE100 With GPS</h5>
//             <p className="h6">Battery 48V 80AH – <span className="fw-bold" style={{color:'rgb(255, 107, 0)'}}>$80 / $90</span> per week</p>
//             <small className="text-dark" itemProp="description">Battery backup 10 - 12 hours</small>
//           </div>
//         </div>
//       </section> */}

//       {/* Call to Action */}
//       {/* <section className="text-dark py-5 text-center" style={{background:'#1a3b19'}}>
//         <div className="container">
//           <h2 className="fw-bold text-light">Book Your Rental Now</h2>
//           <p className="mb-4 text-light" style={{fontSize:'18px'}}>Get on the road with our fully equipped electric bikes. Limited stock available!</p>
//           <a href="/contact" className="btn btn-dark btn-lg px-4">Get Started</a>
//         </div>
//       </section> */}

//       <Footer />
//     </>
//   );
// }

'use client';
import { useState,useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Rental.css';
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function RentalEbikes() {
  const siteUrl = "https://www.beyondbikes.com.au";

  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleProductClick = (productName) => {
    setLoading(true);
    setTimeout(() => {
      const slug = productName.replace(/\s+/g, "-");
      router.push(`/${slug}`);
    }, 1000);
  };

  useEffect(() => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const elements = document.querySelectorAll(".scroll-animate, .scroll-left, .scroll-right, .scroll-up, .scroll-down, .scroll-pop, .scroll-zoom");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

const features = [
    { icon: "bi-tools", title: "Accessories" },
    { icon: "bi-geo-alt-fill", title: "GPS System" },
    { icon: "bi-tools", title: "Maintenance Included" },
    { icon: "bi-bicycle", title: "Free Test Ride" },
  ]

  const duplicatedFeatures = [...features, ...features, ...features]




  const bikes = [
    {
      name: "E-bike 6-8h",
      battery: "48V 50A",
      price: 60,
      hours: "6-8 hrs",
      img: "/images/Cartoon-Cycle-remove-text-latest.png",
      alt: "Ebike100 rental"
    },
    {
      name: "E-bike 8-10h",
      battery: "48V 70A",
      price: 65,
      hours: "8-10 hrs",
      img: "/images/Product-images-beyond-bikes-product-one-crop (3).png",
      alt: "Flyebike electric bike rental"
    },
    {
      name: "E-bike 10-12h",
      battery: "48V 80A",
      price: 70,
      hours: "10-12 hrs",
      img: "/images/Latest-Change-Angle-Red-Cycle-latest.png",
      alt: "Ebike100 rental"
    },
  ];

  return (
    <>
      <Head>
  {/* Primary Meta Tags */}
  <title>Affordable Weekly E-Bike Rentals in Melbourne | Beyond Bikes</title>
  <meta 
    name="description" 
    content="Rent affordable electric bikes in Melbourne with Beyond Bikes. Perfect for delivery riders and everyday commuters. Weekly plans, reliable e-bikes & free delivery." 
  />
  <meta name="keywords" content="electric bikes Melbourne, rent e-bikes Melbourne, Beyond Bikes Australia, e-bike hire Melbourne" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.beyondbikes.com.au/" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Affordable Weekly E-Bike Rentals in Melbourne | Beyond Bikes" />
  <meta 
    property="og:description" 
    content="Explore Melbourne or power through deliveries with our affordable electric bike rentals. Flexible weekly plans & reliable service." 
  />
  <meta property="og:url" content="https://www.beyondbikes.com.au/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.beyondbikes.com.au/images/og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Affordable Weekly E-Bike Rentals in Melbourne | Beyond Bikes" />
  <meta 
    name="twitter:description" 
    content="Rent an e-bike in Melbourne today! Affordable, reliable, and perfect for riders & delivery professionals." 
  />
  <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/og-image.jpg" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "E-Bike Rentals Melbourne",
      "image": "https://www.beyondbikes.com.au/images/og-image.jpg",
      "description": "Affordable electric bike rentals in Melbourne. Perfect for commuting and delivery riders.",
      "brand": {
        "@type": "Brand",
        "name": "Beyond Bikes"
      },
      "offers": {
        "@type": "AggregateOffer",
        "url": "https://www.beyondbikes.com.au/",
        "priceCurrency": "AUD",
        "lowPrice": "99",
        "highPrice": "149",
        "offerCount": "3",
        "availability": "https://schema.org/InStock"
      }
    })}
  </script>
</Head>


      <Header />

      {/* Hero Section */}
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
      <main>
      <section className="py-5 text-center scroll-animate" style={{
    backgroundImage: "url('/images/RentalBackgroundImageLatest.jpg')", // 👉 Place your image in /public/images/
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'70vh',
    display:'flex',
    alignItems:'center',
    opacity:'0.8',
    position: "relative",
    zIndex: 1, 
  }} itemScope itemType="https://schema.org/Product">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3" style={{color:'#1a3b19'}} itemProp="name">
            Affordable Weekly E-Bike Rentals
          </h1>
          {/* <p className="text-dark" itemProp="description" style={{fontSize:'18px', fontWeight:'600'}}>
            Rent e-bikes with GPS — perfect for delivery riders. Includes helmet, charger, 2 locks, and maintenance.
          </p> */}
        </div>
      </section>
     <section
      className="w-100 py-4 position-relative overflow-hidden"
      aria-label="Fleet Features"
      itemScope
      itemType="https://schema.org/Service"
      style={{
        backgroundColor: "rgb(26, 59, 25)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="position-relative">
        <div className="d-flex animate-scroll text-nowrap">
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={index}
              className="d-inline-flex align-items-center mx-4 text-white flex-shrink-0"
              itemProp="feature"
              itemScope
              itemType="https://schema.org/PropertyValue"
            >
              <i className={`bi ${feature.icon} fs-1 me-3`} aria-hidden="true"></i>
              <span className="fs-4 fw-semibold" itemProp="name">
                {feature.title}
              </span>
              <span className="mx-3" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

     
<motion.section
        id="why-choose"
        className="container text-center py-5 scroll-animate"
        aria-labelledby="why-choose-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        itemScope
        itemType="https://schema.org/Service"
      >
        <h2
          id="why-choose-heading"
          className="mb-3 fw-bold"
          style={{ color: "#1A3B19", fontFamily: "system-ui" }}
          itemProp="name"
        >
          Why Choose Our Beyond Bikes
        </h2>
        

        <div className="row">
          {/* Feature 1 */}
          <div className="col-12 col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-center"
              itemScope
              itemType="https://schema.org/Service"
            >
              <i className="bi bi-fuel-pump fs-1 mb-3" style={{ color: "#1A3B19" }}></i>
              <h3 className="fs-5 fw-semibold mb-2" style={{ color: "#1A3B19",fontStyle:'Toronto Subway W01 Regular' }} itemProp="serviceType">
                Tired Of High Fuel Costs and Unreliable Rides?
              </h3>
              <p className="text-muted small" style={{ fontFamily: "system-ui" }} itemProp="description">
                Beyond Bikes is your smarter,greener, and more affordable way to mave through Victoria.
                <br />
                Trusted by delivery riders,students,and city explorers.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-12 col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-center"
              itemScope
              itemType="https://schema.org/Service"
            >
              <i className="bi bi-lightning-charge fs-1 mb-3" style={{ color: "#1A3B19" }}></i>
              <h3 className="fs-5 fw-semibold mb-2" style={{ color: "#1A3B19" }} itemProp="serviceType">
                SMOOTH ELECTRIC RIDE - NO GEARS, NO STRESS
              </h3>
              <p className="text-muted small" style={{ fontFamily: "system-ui" }} itemProp="description">
Our e-bikes are designed for simplicity.Just hop on and go — no clutch, no fuel, no hassle.
<br />
Glide through traffic with ease and comfort.              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-12 col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-center"
              itemScope
              itemType="https://schema.org/Service"
            >
              <i className="bi bi-cash-coin fs-1 mb-3" style={{ color: "#1A3B19" }}></i>
              <h3 className="fs-5 fw-semibold mb-2" style={{ color: "#1A3B19" }} itemProp="serviceType">
SAVE FUEL. SAVE MONEY.
              </h3>
              <p className="text-muted small" style={{ fontFamily: "system-ui" }} itemProp="description">
                {/* Our team is available around the clock to assist with any issues or questions you might have. */}
                WHY SPEND MORE?
                <br />
Get your ride at just $65/week —
Includes everything you need.
<br />
No fuel. No extra maintenance.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {/* Feature 1 */}
          <div className="col-12 col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-center"
              itemScope
              itemType="https://schema.org/Service"
            >
              <i className="bi bi-geo-alt fs-1 mb-3" style={{ color: "#1A3B19" }}></i>
              <h3 className="fs-5 fw-semibold mb-2" style={{ color: "#1A3B19" }} itemProp="serviceType">
                BUILT FOR AUSTRALIAN
LIFE
              </h3>
              <p className="text-muted small" style={{ fontFamily: "system-ui" }} itemProp="description">
                Whether you are:
                <br />
  A food delivery rider,
  A student commuting to campus,
  Exploring the city on weekends.
  <br />
Beyond Bikes fits your lifestyle.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-12 col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-center"
              itemScope
              itemType="https://schema.org/Service"
            >
              <i className="bi bi-calendar-check fs-1 mb-3" style={{ color: "#1A3B19" }}></i>
              <h3 className="fs-5 fw-semibold mb-2" style={{ color: "#1A3B19" }} itemProp="serviceType">
                FREE TEST RIDE + EASY
BOOKING
              </h3>
              <p className="text-muted small" style={{ fontFamily: "system-ui" }} itemProp="description">
Still unsure? Try it first! <br />
Free Test Ride Available
Call/WhatsApp: +61 422 032 961
DM us now to book & start riding smarter!             </p>
            </div>
          </div>

          
        </div>
      </motion.section>

<section className="bg-white scroll-animate" id="bikes-for-rent">
  <div className="container px-3">
    <h2 className="fw-bolder mb-4 animated-underline" style={{ color: "#1a3b19",textAlign:'center' }}>
      Bikes For Rent
    </h2>

    <div className="row mt-4 mb-4 g-4">
      {[
        {
          name: "E-bike 6-8h",
          img: "/images/Cartoon-Cycle-remove-text-latest.png",
          alt: "E-bike 6-8h",
          specs: {
            batteryhours: "6-8 hours",
            motor: 500,
            batterylife: "48V 50A",
            topspeed: "45 MPH",
            
          },
          price: "60.00 AUD",
        },
        {
          name: "E-bike 8-10h",
          img: "/images/Product-images-beyond-bikes-product-one-crop (3).png",
          alt: "E-bike 8-10h",
          specs: {
            batteryhours: "8-10 hours",
            motor: 500,
            batterylife: "48V 70A",
            topspeed: "45 MPH",
          },
          price: "65.00 AUD",
        },
        {
          name: "E-bike 10-12h",
          img: "/images/Latest-Change-Angle-Red-Cycle-latest.png",
          alt: "E-bike 10-12h",
          specs: {
            batteryhours: "10-12 hours",
            motor: 500,
            batterylife: "48V 80A",
            topspeed: "45 MPH",
          },
          price: "70.00 AUD",
        }
      ].map((bike, idx) => (
        <div
          className="col-12 col-md-6 col-lg-4"
          key={idx}
          itemScope
          itemType="https://schema.org/Product"
        >
          <div className="card border-0 shadow-sm h-100">
            {/* Bike Image */}
            <img
              src={bike.img}
              alt={bike.alt}
              className="card-img-top product-image"
              loading="lazy"
              itemProp="image"
            />

            {/* Card Body */}
            <div className="card-body text-center">
              {/* Bike Name */}
              <h3
                className="fw-bold mb-2"
                style={{ color: "#1A3B19" }}
                itemProp="name"
              >
                {bike.name}
              </h3>

              <h4 className="fw-bold mb-2">
                
                <span
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span itemProp="priceCurrency" content="USD" />$
                  <span itemProp="price">{bike.price}</span>
                </span>
              </h4>

              {/* Specs with label left & value right */}
              <dl
                className="row text-muted small mb-3 text-start"
                itemProp="description"
              >
                <dt className="col-6">Battery Hours</dt>
                <dd className="col-6 text-end">{bike.specs.batteryhours}</dd>

                <dt className="col-6">Battery Life</dt>
                <dd className="col-6 text-end">{bike.specs.batterylife}</dd>

                <dt className="col-6">Motor</dt>
                <dd className="col-6 text-end">{bike.specs.motor}</dd>

                <dt className="col-6">Top Speed</dt>
                <dd className="col-6 text-end">{bike.specs.topspeed}</dd>

                
              </dl>

              {/* Price */}
              

              
              <button className="rent-now-rental mt-2" itemProp="url" onClick={() => handleProductClick(bike.name)}>
                Rent Bike
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Accessories Section */}
      {/* <section className="py-2">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Accessories Provided</h2>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"><strong>1.</strong> Helmet</li>
            <li className="list-group-item"><strong>2.</strong> Delivery Bags</li>
            <li className="list-group-item"><strong>3.</strong> GPS Tracker</li>
            <li className="list-group-item"><strong>4.</strong> Bike Lock</li>
            <li className="list-group-item"><strong>5.</strong> Battery Lock</li>
            <li className="list-group-item"><strong>6.</strong> Charger</li>
          </ul>
        </div>
      </section> */}

      <section 
  className="py-5 scroll-animate" 
  aria-label="Accessories Provided" 
  itemScope 
  itemType="https://schema.org/OfferCatalog"
>
  <div className="container">
    <h2 className="fw-bold mb-4 text-center" style={{ color: "#1a3b19 !important",fontFamily: "system-ui" }} itemProp="name">
      Accessories Provided
    </h2>
    <div className="row g-4">

      {/* Helmet */}
      <article className="col-6 col-md-4 col-lg-3" itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
        <div className="card h-100 text-center p-3 shadow-sm border-0">
          <i className="bi bi-shield-fill-check fs-1 mb-3 text-success" aria-hidden="true"></i>
          <h5 className="fw-semibold" itemProp="name">Helmet</h5>
        </div>
      </article>

      {/* Delivery Bags */}
      <article className="col-6 col-md-4 col-lg-3" itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
        <div className="card h-100 text-center p-3 shadow-sm border-0">
          <i className="bi bi-bag-fill fs-1 mb-3 text-success" aria-hidden="true"></i>
          <h5 className="fw-semibold" itemProp="name">Delivery Bags</h5>
        </div>
      </article>

      {/* GPS Tracker */}
      <article className="col-6 col-md-4 col-lg-3" itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
        <div className="card h-100 text-center p-3 shadow-sm border-0">
          <i className="bi bi-geo-alt-fill fs-1 mb-3 text-success" aria-hidden="true"></i>
          <h5 className="fw-semibold" itemProp="name">GPS Tracker</h5>
        </div>
      </article>

      {/* Bike Lock */}
      <article className="col-6 col-md-4 col-lg-3" itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
        <div className="card h-100 text-center p-3 shadow-sm border-0">
          <i className="bi bi-lock-fill fs-1 mb-3 text-success" aria-hidden="true"></i>
          <h5 className="fw-semibold" itemProp="name">Bike Lock</h5>
        </div>
      </article>

      {/* Battery Lock */}
      <article className="col-6 col-md-4 col-lg-3" itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
        <div className="card h-100 text-center p-3 shadow-sm border-0">
          <i className="bi bi-battery-full fs-1 mb-3 text-success" aria-hidden="true"></i>
          <h5 className="fw-semibold" itemProp="name">Battery Lock</h5>
        </div>
      </article>

      {/* Charger */}
      <article className="col-6 col-md-4 col-lg-3" itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
        <div className="card h-100 text-center p-3 shadow-sm border-0">
          <i className="bi bi-lightning-charge-fill fs-1 mb-3 text-success" aria-hidden="true"></i>
          <h5 className="fw-semibold" itemProp="name">Charger</h5>
        </div>
      </article>

    </div>
  </div>
</section>


      </main>

      <Footer />
    </>
  );
}
