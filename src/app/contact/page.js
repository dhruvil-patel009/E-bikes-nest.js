// "use client";
// import Head from 'next/head';
// import '../styles/Contact.css';
// import Header from '../components/Header';
// import { usePathname } from 'next/navigation';
// import Footer from '../components/Footer';

// export default function Contact() {
//   const pathname = usePathname();

//   return (
//     <>
//       <Head>
//         <title>Contact Us | EBIKE100</title>
//         <meta name="description" content="Contact EBIKE100 support team. We're ready to assist you with product issues, inquiries, and services." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/contact" />
//       </Head>

//       {/* ✅ Header will only render if NOT on home page */}
//       {pathname !== '/' && <Header />}


//       <div className="container px-sm-0 px-3 py-5">
//       <h1 className='text-center pb-4' style={{color: '#1a3b19'}}>Contact Us</h1>
//         <div className="row g-4 align-items-start">

//           {/* Form Section */}
//           <div className="col-lg-7">
//             <h1 className="fw-bold" style={{ fontSize: '30px', color: '#1a3b19' }}>Send a Message</h1>
//             <h2 className="fw-bold mb-3 mt-3" style={{ color: '#1a3b19' }}>Reach out Get in Touch</h2>
//             <p className="text-dark mb-4">
//               Please be prepared to provide details about your possible issue including your bike model.
//               The more information you can provide, the quicker our team can provide a solution.
//             </p>

//             {/* ✅ FORM: Using Formsubmit to send directly to Gmail */}
//             <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
//               {/* Hidden fields */}
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />
//               <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
//               <input type="hidden" name="_subject" value="New Contact Submission from Beyond Bikes" />

//               <div className="row g-3 mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Name"
//                     name="Full Name"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="email"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Email"
//                     name="Email Address"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="row g-3 mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Subject"
//                     name="Subject"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Phone Number"
//                     name="Phone Number"
//                   />
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <textarea
//                   className="form-control form-control-lg bg-light"
//                   rows="5"
//                   placeholder="Your Message"
//                   name="Message"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="btn text-light fw-semibold px-4 py-2"
//                 style={{ background: '#1a3b19' }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Info Section */}
//           <div className="col-lg-5">
//             <div className="bg-light rounded p-4">
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#1a3b19' }}>Address</h6>
//                 <p className="mb-0">667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia</p>
//               </div>
//               <hr />
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#1a3b19' }}>Phone</h6>
//                 <p className="mb-0">+61 422 032 961</p>
//               </div>
//               <hr />
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#1a3b19' }}>Email</h6>
//                 <p className="mb-0">info.beyondbikes@gmail.com</p>
//               </div>
//               <hr />
//               <div>
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#1a3b19' }}>Hours</h6>
//                 <div className="d-flex py-1">
//                   <span className='me-2'>Mon - Sun :</span> <span>9am - 7pm</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {pathname === '/contact' && <Footer />}
//     </>
//   );
// }

// SEO
// "use client";
// import Head from 'next/head';
// import '../styles/Contact.css';
// import Header from '../components/Header';
// import { usePathname } from 'next/navigation';
// import Footer from '../components/Footer';

// export default function Contact() {
//   const pathname = usePathname();

//   return (
//     <>
//       <Head>
//         {/* Primary Meta Tags */}
//         <title>Contact Us | Beyond Bikes</title>
//         <meta name="description" content="Contact EBIKE100 support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://ebike100.com/contact" />

//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Contact Us | EBIKE100" />
//         <meta property="og:description" content="Contact EBIKE100 support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
//         <meta property="og:url" content="https://ebike100.com/contact" />
//         <meta property="og:image" content="https://ebike100.com/images/contact-og.png" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Contact Us | EBIKE100" />
//         <meta name="twitter:description" content="Contact EBIKE100 support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
//         <meta name="twitter:image" content="https://ebike100.com/images/contact-og.png" />

//         {/* Structured Data: ContactPoint */}
//         <script type="application/ld+json">
//           {`
//             {
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "EBIKE100",
//               "url": "https://ebike100.com",
//               "logo": "https://ebike100.com/images/logo.png",
//               "contactPoint": {
//                 "@type": "ContactPoint",
//                 "telephone": "+61 422 032 961",
//                 "contactType": "customer support",
//                 "areaServed": "AU",
//                 "availableLanguage": ["English"]
//               },
//               "sameAs": [
//                 "https://www.facebook.com/ebike100",
//                 "https://www.instagram.com/ebike100",
//                 "https://twitter.com/ebike100"
//               ]
//             }
//           `}
//         </script>
//       </Head>

//       {pathname !== '/' && <Header />}

//       <main>
//         <section className="container px-sm-0 px-3 py-5">
//           <h1 className='text-center fw-bold pb-4' style={{color: '#1a3b19'}}>Contact Beyond Bikes</h1>
//           <div className="row g-4 align-items-start">

//             {/* Form Section */}
//             <div className="col-lg-7" itemScope itemType="https://schema.org/ContactPage">
//               <h2 className="fw-bold mb-3 mt-3" style={{ color: '#1a3b19' }} itemProp="name">Reach Out & Get in Touch</h2>
//               <p className="text-dark mb-4" itemProp="description">
//                 Provide details about your inquiry or issue including your bike model. Our team at Beyond Bikes will respond promptly.
//               </p>

//               <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
//                 <input type="hidden" name="_captcha" value="false" />
//                 <input type="hidden" name="_template" value="table" />
//                 <input type="hidden" name="_next" value="https://ebike100.com/thank-you" />
//                 <input type="hidden" name="_subject" value="New Contact Submission from EBIKE100" />

//                 <div className="row g-3 mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="name" className="visually-hidden">Full Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Name"
//                       name="Full Name"
//                       required
//                       aria-required="true"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="email" className="visually-hidden">Email Address</label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Email"
//                       name="Email Address"
//                       required
//                       aria-required="true"
//                     />
//                   </div>
//                 </div>

//                 <div className="row g-3 mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="subject" className="visually-hidden">Subject</label>
//                     <input
//                       type="text"
//                       id="subject"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Subject"
//                       name="Subject"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="phone" className="visually-hidden">Phone Number</label>
//                     <input
//                       type="text"
//                       id="phone"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Phone Number"
//                       name="Phone Number"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="message" className="visually-hidden">Message</label>
//                   <textarea
//                     id="message"
//                     className="form-control form-control-lg bg-light"
//                     rows="5"
//                     placeholder="Your Message"
//                     name="Message"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn text-light fw-semibold px-4 py-2"
//                   style={{ background: '#1a3b19' }}
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* Info Section */}
//             <div className="col-lg-5">
//               <address className="bg-light rounded p-4" itemScope itemType="https://schema.org/PostalAddress">
//                 <div className="mb-4">
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Address</h3>
//                   <p className="mb-0" itemProp="streetAddress">667 Glen Huntly Rd Caulfield South</p>
//                   <p className="mb-0" itemProp="addressLocality">Caulfield VIC 3162</p>
//                   <p className="mb-0" itemProp="addressCountry">Australia</p>
//                 </div>
//                 <hr />
//                 <div className="mb-4">
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Phone</h3>
//                   <p className="mb-0" itemProp="telephone">+61 422 032 961</p>
//                 </div>
//                 <hr />
//                 <div className="mb-4">
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Email</h3>
//                   <p className="mb-0" itemProp="email">info.beyondbikes@gmail.com</p>
//                 </div>
//                 <hr />
//                 <div>
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Hours</h3>
//                   <div className="d-flex py-1">
//                     <span className='me-2'>Mon - Sun :</span> <span>9am - 7pm</span>
//                   </div>
//                 </div>
//               </address>
//             </div>

//           </div>
//         </section>
//       </main>

//       {pathname === '/contact' && <Footer />}
//     </>
//   );
// }

'use client';
import Head from 'next/head';
import '../styles/Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function Contact() {
  const pathname = usePathname();
  const siteUrl = "https://www.beyondbikes.com.au/";
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {   // ✅ Added
  let error = "";

  switch (name) {
    case "Full Name":
      if (!value.trim()) error = "Name is required";
      break;
    case "Email Address":
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Enter a valid email";
      }
      break;
    case "Phone Number":
      if (value && !/^\+?\d{7,15}$/.test(value)) {
        error = "Enter a valid phone number";
      }
      break;
    default:
      break;
  }

  setErrors((prev) => ({ ...prev, [name]: error }));
};


  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Contact Us | Beyond Bikes</title>
        <meta name="description" content="Contact Beyond Bikes support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        <meta name="keywords" content="Beyond Bikes contact, ebike shop Melbourne, e-bike rentals Melbourne, electric bikes Ormond" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Beyond Bikes" />
        <meta property="og:description" content="Contact Beyond Bikes support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta property="og:image" content={`${siteUrl}/images/contact-og.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Beyond Bikes" />
        <meta name="twitter:description" content="Contact Beyond Bikes support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
        <meta name="twitter:image" content={`${siteUrl}/images/contact-og.png`} />

        {/* Structured Data: Organization + ContactPoint + PostalAddress */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Beyond Bikes",
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+61 422 032 961",
            "contactType": "customer support",
            "areaServed": "AU",
            "availableLanguage": ["English"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "576 North Rd, Ormond VIC 3204, Australia",
            "addressLocality": "Ormond VIC 3204",
            "addressCountry": "Australia"
          },
          "sameAs": [
            "https://www.facebook.com/ebike100",
            "https://www.instagram.com/ebike100",
            "https://twitter.com/ebike100"
          ]
        })}} />
      </Head>

      {pathname !== '/' && <Header />}

      <main>
        <section className="container px-sm-0 px-3 py-5">
          <h1 className='text-center fw-bold pb-4' style={{color: '#1a3b19',fontFamily:'system-ui'}}>Contact Beyond Bikes</h1>
          <div className="row g-4 align-items-start">

            {/* Form Section */}
            <div className="col-lg-6" itemScope itemType="https://schema.org/ContactPage">
              <h2 className="fw-bold mb-3 mt-3" style={{ color: '#1a3b19',fontFamily:'system-ui' }} itemProp="name">Reach Out & Get in Touch</h2>
              <p className="text-dark mb-4" itemProp="description">
                Provide details about your inquiry or issue including your bike model. Our team at Beyond Bikes will respond promptly.
              </p>

              <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${siteUrl}/thankyou`} />
                <input type="hidden" name="_subject" value="New Contact Submission from Beyond Bikes" />

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="visually-hidden">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg bg-light"
                      placeholder="Your Name"
                      name="Full Name"
                      required
                      aria-required="true"
                      onChange={(e) => validateField(e.target.name, e.target.value)}
                    />
                    {errors["Full Name"] && (   // ✅ Added
  <small className="text-danger ms-3">{errors["Full Name"]}</small>
)}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="visually-hidden">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg bg-light"
                      placeholder="Your Email"
                      name="Email Address"
                      required
                      aria-required="true"
                      onChange={(e) => validateField(e.target.name, e.target.value)}
                    />
                    {errors["Email Address"] && (   // ✅ Added
  <small className="text-danger ms-3">{errors["Email Address"]}</small>
)}
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  
                  <div className="col-md-6">
                    <label htmlFor="phone" className="visually-hidden">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      className="form-control form-control-lg bg-light"
                      placeholder="Your Phone Number"
                      name="Phone Number"
                      onChange={(e) => validateField(e.target.name, e.target.value)}
                    />
                    {errors["Phone Number"] && (   // ✅ Added
  <small className="text-danger ms-3">{errors["Phone Number"]}</small>
)}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="subject" className="visually-hidden">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control form-control-lg bg-light"
                      placeholder="Your Subject"
                      name="Subject"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="visually-hidden">Message</label>
                  <textarea
                    id="message"
                    className="form-control form-control-lg bg-light"
                    rows="5"
                    placeholder="Your Message"
                    name="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn text-light rent-now fw-semibold px-4 py-2"
                  style={{ background: '#1a3b19' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Section */}
            
            <div className="col-lg-6 d-flex justify-content-center">
              {/* <address className="bg-light rounded p-4" itemScope itemType="https://schema.org/PostalAddress">
                <div className="mb-4">
                  <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Address</h3>
                  <p className="mb-0" itemProp="addressCountry">576 North Rd, Ormond VIC 3204, Australia</p>
                 
                </div>
                <hr />
                <div className="mb-4">
                  <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Phone</h3>
                  <p className="mb-0" itemProp="telephone">+61 422 032 961</p>
                </div>
                <hr />
                <div className="mb-4">
                  <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Email</h3>
                  <p className="mb-0" itemProp="email">info.beyondbikes@gmail.com</p>
                </div>
                <hr />
                <div>
                  <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#1a3b19' }}>Hours</h3>
                  <div className="d-flex py-1">
                    <span className='me-2'>Monday - Saturday :</span> <span>9am - 7pm</span>
                  </div>
                  <span className='me-2'>Sunday :</span> <span>11am - 4pm</span>
                </div>
              </address> */}
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
          
        </section>
        <section className="py-5 bg-white" id="contact-info">
  <div className="container">
    <div className="row text-center g-4">
      
      {/* Address */}
      <div className="col-md-4">
        <div className="d-flex flex-column align-items-center">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#1a3b19"
            }}
          >
            <i className="bi bi-geo-alt-fill text-white fs-3" aria-hidden="true"></i>
          </div>
          <address className="mb-0 text-center">
            <strong>Address:</strong><br />
            576 North Rd, Ormond VIC 3204, Australia
          </address>
        </div>
      </div>

      {/* Phone */}
      <div className="col-md-4">
        <div className="d-flex flex-column align-items-center">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#1a3b19"
            }}
          >
            <i className="bi bi-telephone-fill text-white fs-3" aria-hidden="true"></i>
          </div>
          <p className="mb-0">
            <strong>Phone:</strong>{" "}
            <a href="tel:+61422032961" className="text-decoration-none text-dark">
              +61 422 032 961
            </a>
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="col-md-4">
        <div className="d-flex flex-column align-items-center">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#1a3b19"
            }}
          >
            <i className="bi bi-envelope-fill text-white fs-3" aria-hidden="true"></i>
          </div>
          <p className="mb-0">
            <strong>Email:</strong>{" "}
            <a href="mailto:info.beyondbikes@gmail.com" className="text-decoration-none text-dark">
              info.beyondbikes@gmail.com
            </a>
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      </main>

      {pathname === '/contact' && <Footer />}
    </>
  );
}

