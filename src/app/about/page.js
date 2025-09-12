
// "use client";
// import Head from 'next/head';
// import Image from 'next/image';
// import aboutImg from '../../../public/images/Latest-admin-image.jpg'; 
// import aboutImg1 from '../../../public/images/Latest-repairer-admin.jpg'; 
// import aboutthree from '../../../public/images/about-image.jpg';
// import '../styles/About.css';
// import Header from '../components/Header';
// import { usePathname } from 'next/navigation';
// import Footer from '../components/Footer';

// export default function About() {
//   const pathname = usePathname();

//   return (
//     <>
//       <Head>
//         <title>About Us | EBIKE100</title>
//         <meta name="description" content="Get to know the team behind EBIKE100 and our passion for sustainable transport in Melbourne." />
//         <meta name="keywords" content="About EBIKE100, electric bikes, Melbourne, sustainable transport" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/about" />
//       </Head>

//       {/* ✅ Only render Header when not on homepage */}
//       {pathname !== "/" && <Header />}

//       <section className='aboutSection mb-5'>
//         <h1 className='text-center' style={{marginBottom:'40px',color:'#f7931e',marginTop:'40px'}}>About Us</h1>
//         <div className="container px-3 px-sm-0">
//           {/* Section 1 */}
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <Image
//                 src={aboutImg}
//                 alt="About EBIKE100"
//                 className='ovalImage'
//                 width={500}
//                 height={500}
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className='orangeHeading'>MISSION</h2>
//               <p>
//                 Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility.
//               </p>
              
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="row mt-sm-5 mt-2 align-items-center">
//             <div className="col-md-6 order-sm-1 order-2">
//               <h2 className='orangeHeading'>STORE BACKGROUND</h2>
//               <p>
//                 At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues.              </p>
//             </div>
//             <div className="col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0">
//               <Image
//                 src={aboutImg1}
//                 alt="About EBIKE100"
//                 className='ovalImage'
//                 width={500}
//                 height={500}
//               />
//             </div>
//           </div>         
//         </div>
//       </section>
//       {pathname === '/about' && <Footer />}
//     </>
//   );
// }

// "use client";
// import Head from "next/head";
// import Image from "next/image";
// import aboutImg from "../../../public/images/Latest-admin-image.jpg";
// import aboutImg1 from "../../../public/images/Latest-repairer-admin.jpg";
// import aboutthree from "../../../public/images/about-image.jpg";
// import "../styles/About.css";
// import Header from "../components/Header";
// import { usePathname } from "next/navigation";
// import Footer from "../components/Footer";

// export default function About() {
//   const pathname = usePathname();
//   const siteUrl = "https://www.beyondbikes.com.au";

//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Beyond Bikes",
//     url: siteUrl,
//     logo: `${siteUrl}/images/logo.png`, // replace with actual logo path
//     sameAs: [
//       "https://www.instagram.com/beyondbikes_vic",
//       "https://www.facebook.com/beyondbikes",
//     ],
//     description: "Reliable and affordable e-bike rentals in Melbourne for commuters and delivery riders.",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "667 Glen Huntly Rd, Caulfield South",
//       addressLocality: "Melbourne",
//       addressRegion: "VIC",
//       postalCode: "3162",
//       addressCountry: "AU"
//     },
//     contactPoint: {
//       "@type": "ContactPoint",
//       telephone: "+61 422 032 961",
//       contactType: "Customer Service"
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>About Us | Beyond Bikes – Melbourne e-Bike Rentals</title>
//         <meta
//           name="description"
//           content="Meet the team behind Beyond Bikes — Melbourne's trusted electric bike rental provider offering flexible, affordable e-bike hire for commuters and delivery riders."
//         />
//         <meta
//           name="keywords"
//           content="Beyond Bikes, e-bike rentals Melbourne, sustainable transport Melbourne, About Beyond Bikes"
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`${siteUrl}/about`} />

//         {/* Open Graph tags */}
//         <meta property="og:title" content="About Beyond Bikes — Melbourne e-Bike Rental Business" />
//         <meta
//           property="og:description"
//           content="Learn more about Beyond Bikes, our mission and dedication to affordable, reliable e-bike rentals in Melbourne."
//         />
//         <meta property="og:image" content={`${siteUrl}/images/about-og.jpg`} /> {/* replace as needed */}
//         <meta property="og:url" content={`${siteUrl}/about`} />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About Beyond Bikes – Melbourne e-Bike Experts" />
//         <meta
//           name="twitter:description"
//           content="Discover Beyond Bikes’ story and mission: to provide sustainable, flexible e-bike rentals across Melbourne."
//         />
//         <meta name="twitter:image" content={`${siteUrl}/images/about-og.jpg`} />

//         {/* JSON-LD Organization Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//         />
//       </Head>

//       {pathname !== "/" && <Header />}

//       <section className="aboutSection mb-5" itemScope itemType="https://schema.org/AboutPage">
//         <h1
//           className="text-center"
//           style={{ marginBottom: "40px", color: "#f7931e", marginTop: "40px" }}
//         >
//           About Us
//         </h1>
        
//         <div className="container px-3 px-sm-0">
//           {/* Section 1 */}
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <Image
//                 src={aboutImg}
//                 alt="Beyond Bikes team in Melbourne store"
//                 className="ovalImage"
//                 width={500}
//                 height={500}
//                 itemProp="image"
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className="orangeHeading" itemProp="headline">
//                 MISSION
//               </h2>
//               <p itemProp="text">
//                 Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide power, comfort, and efficiency. Our promise: “Freedom to Explore, Power to Move.” With flexible rentals, fast support, and service across the city, Beyond Bikes is your go-to for hassle-free electric mobility.
//               </p>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="row mt-sm-5 mt-2 align-items-center">
//             <div className="col-md-6 order-sm-1 order-2">
//               <h2 className="orangeHeading">STORE BACKGROUND</h2>
//               <p itemProp="text">
//                 At Beyond Bikes Pty Ltd, exceptional service starts with passionate people. We curate a top-quality range of electric bikes and accessories, and offer delivery anywhere in Melbourne with no battery problems. Our roots are local, and our focus is on making electric mobility seamless for every rider.
//               </p>
//             </div>
//             <div className="col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0">
//               <Image
//                 src={aboutImg1}
//                 alt="Beyond Bikes team and workshop in Melbourne"
//                 className="ovalImage"
//                 width={500}
//                 height={500}
//                 itemProp="image"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {pathname === "/about" && <Footer />}
//     </>
//   );
// }

// "use client";
// import Head from "next/head";
// import Image from "next/image";
// import "../styles/About.css";
// import Header from "../components/Header";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import Footer from "../components/Footer";
// import EbikesDeliveryAbout from "../../../public/images/EbikesDeliveryAbout.jpg";

// export default function About() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const pathname = usePathname();
//   const siteUrl = "https://www.beyondbikes.com.au";

//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Beyond Bikes",
//     url: siteUrl,
//     logo: `${siteUrl}/images/logo.png`,
//     sameAs: [
//       "https://www.instagram.com/beyondbikes_vic",
//       "https://www.facebook.com/beyondbikes",
//     ],
//     description: "Reliable and affordable e-bike rentals in Melbourne for commuters and delivery riders.",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "576 North Rd, Ormond VIC 3204, Australia",
//       addressLocality: "Melbourne",
//       addressRegion: "VIC",
//       postalCode: "3162",
//       addressCountry: "AU"
//     },
//     contactPoint: {
//       "@type": "ContactPoint",
//       telephone: "+61 422 032 961",
//       contactType: "Customer Service"
//     }
//   };

//   // Dynamic heading tags
//   const MainHeadingTag = pathname === "/about" ? "h1" : "h2";
//   const SubHeadingTag = pathname === "/about" ? "h2" : "h3";



// const contentData = [
//   {
//     title: "MISSION",
//     description:
//       "Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide power, comfort, and efficiency. Our promise: “Freedom to Explore, Power to Move.” With flexible rentals, fast support, and service across the city, Beyond Bikes is your go-to for hassle-free electric mobility.",
//     linkText: "MISSION",
//   },
//   {
//     title: "STORE BACKGROUND",
//     description:
//       "At Beyond Bikes Pty Ltd, exceptional service starts with passionate people. We curate a top-quality range of electric bikes and accessories, and offer delivery anywhere in Melbourne with no battery problems. Our roots are local, and our focus is on making electric mobility seamless for every rider.",
//     linkText: "STORE BACKGROUND",
//   },
  
// ]

// const handleArrowClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length)
//   }

//   const currentContent = contentData[currentIndex]

//   return (
//     <>
//       <Head>
//         <title>About Us | Beyond Bikes – Melbourne e-Bike Rentals</title>
//         <meta
//           name="description"
//           content="Meet the team behind Beyond Bikes — Melbourne's trusted electric bike rental provider offering flexible, affordable e-bike hire for commuters and delivery riders."
//         />
//         <meta
//           name="keywords"
//           content="Beyond Bikes, e-bike rentals Melbourne, sustainable transport Melbourne, About Beyond Bikes"
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`${siteUrl}/about`} />

//         {/* Open Graph */}
//         <meta property="og:title" content="About Beyond Bikes — Melbourne e-Bike Rental Business" />
//         <meta property="og:description" content="Learn more about Beyond Bikes, our mission and dedication to affordable, reliable e-bike rentals in Melbourne." />
//         <meta property="og:image" content={`${siteUrl}/images/about-og.jpg`} />
//         <meta property="og:url" content={`${siteUrl}/about`} />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About Beyond Bikes – Melbourne e-Bike Experts" />
//         <meta name="twitter:description" content="Discover Beyond Bikes’ story and mission: to provide sustainable, flexible e-bike rentals across Melbourne." />
//         <meta name="twitter:image" content={`${siteUrl}/images/about-og.jpg`} />

//         {/* JSON-LD */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//         />
//       </Head>

//       {pathname !== "/" && <Header />}

//       {/* <section className="aboutSection mb-5" itemScope itemType="https://schema.org/AboutPage">
//         <MainHeadingTag
//           className="text-center"
//           style={{ marginBottom: "40px", color: "#1A3B19", marginTop: "40px",fontFamily:'system-ui' }}
//         >
//           About Us
//         </MainHeadingTag>
        
//         <div className="container px-3 px-sm-0">
          
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <Image
//                 src={aboutImg}
//                 alt="Beyond Bikes team in Melbourne store"
//                 className="ovalImage"
//                 width={500}
//                 height={500}
//                 itemProp="image"
//               />
//             </div>
//             <div className="col-md-6">
//               <SubHeadingTag className="orangeHeading" itemProp="headline" style={{color:'#1A3B19',fontFamily:'system-ui'}}>
//                 MISSION
//               </SubHeadingTag>
//               <p itemProp="text">
//                 Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility.
//               </p>
//             </div>
//           </div>

          
//           <div className="row mt-sm-5 mt-2 align-items-center">
//             <div className="col-md-6 order-sm-1 order-2">
//               <SubHeadingTag className="orangeHeading" style={{color:'#1A3B19',fontFamily:'system-ui'}}>STORE BACKGROUND</SubHeadingTag>
//               <p itemProp="text">
//                 At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues.
//               </p>
//             </div>
//             <div className="col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0">
//               <Image
//                 src={aboutImg1}
//                 alt="Beyond Bikes team and workshop in Melbourne"
//                 className="ovalImage"
//                 width={500}
//                 height={500}
//                 itemProp="image"
//               />
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section
//         className="hero-section position-relative d-flex align-items-center justify-content-center text-white"
//         style={{
//           backgroundImage: `url(${EbikesDeliveryAbout.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "400px",
//         }}
//         role="banner"
//         aria-label="About Us Hero Section"
//         itemScope
//         itemType="https://schema.org/AboutPage"
//       >
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100"
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//             zIndex: 1,
//           }}
//           aria-hidden="true"
//         ></div>
//         <div className="container position-relative" style={{ zIndex: 2 }}>
//           <div className="row">
//             <div className="col-12 text-center">
//               <MainHeadingTag
//                 className="display-4 fw-bold mb-0"
//                 style={{ fontSize: "3rem", fontFamily: "system-ui" }}
//                 itemProp="headline"
//               >
//                 About Us
//               </MainHeadingTag>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-5 bg-light" aria-label="Company Information">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* <div className="col-lg-6 mb-4 mb-lg-0">
//               <div className="position-relative">
//                 <Image
//                   src="/person-working-at-computer-in-modern-office-with-b.png"
//                   alt="Professional working at computer in modern office environment with geometric design elements"
//                   width={500}
//                   height={400}
//                   className="img-fluid rounded shadow"
//                   priority
//                   style={{ objectFit: "cover" }}
//                   itemProp="image"
//                 />
//               </div>
//             </div> */}
//             <div className="col-lg-6 mb-4 mb-lg-0">
//   <div className="position-relative d-flex justify-content-center">
//     {/* BACK IMAGE */}
//     <Image
//       src="/images/Services-repairer.jpg"
//       alt="Modern office environment with geometric design elements"
//       width={500}
//       height={400}
//       className="img-fluid rounded shadow backImage"
//       priority
//       style={{ objectFit: "cover" }}
//     />

//     {/* FRONT IMAGE */}
//     {/* <Image
//       src="/images/Services-repairer.jpg"
//       alt="Professional working at computer in modern office"
//       width={300}
//       height={400}
//       className="img-fluid rounded shadow frontImage"
//       priority
//       style={{ objectFit: "cover" }}
//     /> */}
//   </div>
// </div>

//             <div className="col-lg-6">
//               <div className="ps-lg-4">
//                 <SubHeadingTag
//                   className="display-5 fw-bold mb-4 text-dark"
//                   style={{ fontSize: "2.5rem", lineHeight: "1.2", fontFamily: "system-ui" }}
//                   itemProp="headline"
//                 >
//                   {currentContent.title}
//                 </SubHeadingTag>
//                 <p className="lead mb-4 text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.6" }} itemProp="text">
//                   {currentContent.description}
//                 </p>
//                 <button
//                   onClick={handleArrowClick}
//                   className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center"
//                   style={{
//                     color: "#333",
//                     fontSize: "1rem",
//                     fontWeight: "600",
//                     transition: "all 0.3s ease",
//                   }}
//                   aria-label={`View ${currentContent.linkText} - Click to see next content`}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = "#007bff"
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = "#333"
//                   }}
//                 >
//                   <span className="me-2">{currentContent.linkText}</span>
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="arrow-icon"
//                     style={{ transition: "transform 0.3s ease" }}
//                     aria-hidden="true"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .btn:hover .arrow-icon {
//           transform: translateX(5px);
//         }
        
//         .hero-section {
//           background-attachment: fixed;
//         }
        
//         @media (max-width: 768px) {
//           .hero-section {
//             background-attachment: scroll;
//             min-height: 300px;
//           }
          
//           .display-4 {
//             font-size: 2.5rem !important;
//           }
          
//           .display-5 {
//             font-size: 2rem !important;
//           }
//         }
//       `}</style>

//       {pathname === "/about" && <Footer />}
//     </>
//   );
// }

"use client";
import Head from "next/head";
import Image from "next/image";
import "../styles/About.css";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Footer from "../components/Footer";
import EbikesDeliveryAbout from "../../../public/images/EbikesDeliveryAbout-latest.jpg";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const pathname = usePathname();
  const siteUrl = "https://www.beyondbikes.com.au";

  // ✅ Content + Image data
  const contentData = [
    {
      title: "MISSION",
      description:
        "Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility.",
      linkText: "MISSION",
      image: "/images/Latest-admin-image.jpg",
    },
    {
      title: "STORE BACKGROUND",
      description:
        "At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues.",
      linkText: "STORE BACKGROUND",
      image: "/images/Latest-repairer-admin.jpg",
    },
  ];

  const handleArrowClick = () => {
    setFade(true); // start fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
      setFade(false); // fade in new content
    }, 300); // match CSS animation time
  };

  const currentContent = contentData[currentIndex];
  const MainHeadingTag = pathname === "/about" ? "h1" : "h2";
  const SubHeadingTag = pathname === "/about" ? "h2" : "h3";

  return (
    <>
      <Head>
        <title>{currentContent.title} | Beyond Bikes – Melbourne e-Bike Rentals</title>
        <meta name="description" content={currentContent.description} />
        <link rel="canonical" href={`${siteUrl}/about`} />
        <meta name="robots" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="keywords" content="Beyond Bikes, electric bike rentals Melbourne, rent e-bikes, e-bike hire Melbourne, food delivery e-bikes" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Beyond Bikes" />
<meta property="og:title" content="About Us | Beyond Bikes – Melbourne e-Bike Rentals" />
<meta property="og:description" content="Learn more about Beyond Bikes – our mission, store background, and why we’re Melbourne’s trusted choice for e-bike rentals." />
<meta property="og:url" content="https://www.beyondbikes.com.au/about" />
<meta property="og:image" content="https://www.beyondbikes.com.au/images/EbikesDeliveryAbout-latest.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="About Us | Beyond Bikes – Melbourne e-Bike Rentals" />
<meta name="twitter:description" content="Learn more about Beyond Bikes – our mission, store background, and why we’re Melbourne’s trusted choice for e-bike rentals." />
<meta name="twitter:image" content="https://www.beyondbikes.com.au/images/EbikesDeliveryAbout-latest.jpg" />
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntityOfPage": "https://www.beyondbikes.com.au/about",
        "headline": "About Beyond Bikes – Melbourne e-Bike Rentals",
        "description":
          "Beyond Bikes offers reliable and affordable electric bike rentals designed for everyday riders and food delivery professionals in Melbourne.",
        "publisher": {
          "@type": "Organization",
          "name": "Beyond Bikes",
          "url": "https://www.beyondbikes.com.au",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.beyondbikes.com.au/images/logo.png"
          }
        }
      }),
    }}
  />
      </Head>

      {pathname !== "/" && <Header />}

      {/* Hero Banner */}
      <section
        className="hero-section position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${EbikesDeliveryAbout.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
        role="banner"
        aria-label="About Us Hero Section"
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <MainHeadingTag className="display-4 text-center fw-bold mb-0">About Us</MainHeadingTag>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <div className={`${fade ? "fade-out" : "fade-in"}`}>
                <Image
                  key={currentContent.image} // force reload on change
                  src={currentContent.image}
                  alt={currentContent.title}
                  width={500}
                  height={500}
                  className="rounded img-fluid shadow set-image-size-about-latest-ui"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="col-lg-6">
              <div className={`ps-lg-4 content-wrapper ${fade ? "fade-out" : "fade-in"}`}>
                <SubHeadingTag className="fs-3 fw-bold mb-2" style={{color:'#1A3B19',fontFamily:'system-ui'}}>
                  {currentContent.title}
                </SubHeadingTag>
                <p className="mb-2">{currentContent.description}</p>
                <button
                  onClick={handleArrowClick}
                  className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center"
                  style={{color:'#1A3B19',fontWeight:'bold',fontFamily:'system-ui'}}
                >
                  <span className="me-2">{currentContent.linkText}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="arrow-icon"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .image-wrapper,
        .content-wrapper {
          transition: opacity 0.3s ease-in-out;
        }
        .fade-out {
          opacity: 0;
        }
        .fade-in {
          opacity: 1;
        }
        .btn:hover .arrow-icon {
          transform: translateX(5px);
          transition: transform 0.3s ease;
        }
      `}</style>

      {pathname === "/about" && <Footer />}
    </>
  );
}
