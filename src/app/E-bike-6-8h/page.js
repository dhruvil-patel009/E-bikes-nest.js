// 'use client';
// import { useEffect, useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// // import { useState } from 'react';
// // import '../styles/productdetails.css';
// import '../styles/productdetails.css'
// import Header from '../components/Header';
// import { useRouter } from 'next/navigation';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Footer from '../components/Footer';
// import Instagram from '../../../public/images/instagram-latest.svg';
// import Google from '../../../public/images/google-latest.svg';
// import Call from '../../../public/images/phone-latest.svg';

// const images = {
//   front: '/images/CartoonCycleProductdetailsFrontBlur.jpg',
//   back: '/images/CartoonCycleProductdetailsBackBlur.jpg',
//   middle: '/images/CartoonCycleProductdetailsAngleBlur.jpg',
//   battery:'/images/CartoonCycleProductdetailsWholeBlur.jpg'
// };

// export default function CartoonDetailsPage() {
//   const [selectedColor, setSelectedColor] = useState('front');
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();
//   const [showModal, setShowModal] = useState(false);

//   // const handleAddToCart = () => {
//   //   router.push('/rental'); // navigate to your cart page
//   //   alert('sbhs')
//   // };

//   const documentsForRent = [
//     'Name',
//     'Phone Number',
//     'Address & Unit Number',
//     'Email',
//     'Valid Visa Grant',
//     'Passport',
//   ];

//   const importantInformation = [
//     'Delivery bag',
//     'Locks (2)',
//     'Helmet',
//     'Charger',
//     'Basic maintenance',
//   ];

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   // Function to close the modal
//   const handleClose = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     // Ensures Bootstrap's JS is loaded once
//     import('bootstrap/dist/js/bootstrap.bundle.min.js');
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Cartoon Bikes | Electric Bike</title>
//         <meta name="description" content="Buy Cali Cruiser – a powerful all-terrain mid-drive electric bicycle for both trails and city roads. Available now!" />
//         <meta name="keywords" content="electric bike, e-bike, Cali Cruiser, green transport" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/product" />
//       </Head>

//       <Header />
//       <div className="container py-5">
//         <div className="row align-items-start">
//           {/* Left Image */}
//           <div className="col-xl-7 mb-4 only-mobile-center">
//             <Image src={images[selectedColor]} alt="Cali Cruiser" width={600} height={600} className='set-image-bikes'/>

//             {/* <div className="d-sm-flex mt-3 gap-3">
//               {Object.keys(images).map(color => (
//                 <Image
//                   key={color}
//                   src={images[color]}
//                   alt={color}
//                   width={138}
//                   height={120}
//                   className={`thumb me-4 me-sm-0 mt-3 mt-sm-0 ${selectedColor === color ? 'border border-dark' : ''}`}
//                   onClick={() => setSelectedColor(color)}
//                 />
//               ))}
//             </div> */}
//             <div className="d-sm-flex thumbnail-gallery mt-3">
//   {Object.keys(images).map(color => (
//     <img
//       key={color}
//       src={images[color]}
//       alt={color}
//       className={`thumb ${selectedColor === color ? 'active' : ''}`}
//       onClick={() => setSelectedColor(color)}
//     />
//   ))}
// </div>

//           </div>

//           {/* Right Info */}
//           <div className="col-xl-5">
//             <h1 className="text-orange fw-bold">E-bike 6-8h</h1>
//             {/* <small className="text-muted" style={{fontSize:'20px'}}>★ ★ ★ ☆ ☆ (3 Reviews)</small> */}
//             {/* <p className="mt-3">
//               Take to the streets or trails with this powerful all-terrain mid-drive electric bicycle. The City Surfer delivers unmatched performance you won’t find anywhere else.
//             </p> */}

//             <div className="fs-4 fw-bold">PRICE : $60 AUD <del className="text-muted fs-4 ms-2">$70 AUD</del></div>
//             <div className="mt-3">
//   <h5 className="fw-bold text-orange mb-3">Specifications</h5>
//   <ul className="list-unstyled">
//     <li className="mb-3">
//       <strong>Speed Modes:</strong>
//       <ul className="ps-3 mt-1">
//         <li>Gear 1: 25 km/h</li>
//         <li>Gear 2: 35 km/h</li>
//         <li>Gear 3: 45 km/h</li>
//       </ul>
//     </li>

//     <li className="mb-3">
//       <strong>Display:</strong> Multifunctional LED display, clearly visible under sunlight.
//     </li>

//     <li className="mb-3">
//       <strong>Lighting:</strong>
//       <ul className="ps-3 mt-1">
//         <li>Front high-brightness headlight with wide aperture</li>
//         <li>Rear light with laser projection for night safety</li>
//         {/* <li>Front and rear indicators</li> */}
//         {/* <li>Breathing light strips on frame and rear rack</li> */}
//       </ul>
//     </li>

//     <li className="mb-3">
//       <strong>Phone Holder:</strong> Comes with USB port (2.1A output) — no need for a power bank.
//     </li>

//     <li className="mb-3">
//       <strong>Safety System:</strong>
//       <ul className="ps-3 mt-1">
//         <li>Smart anti-theft remote (alarm + keyless start)</li>
//         <li>NFC smart unlock feature</li>
//       </ul>
//     </li>

//     <li className="mb-3">
//       <strong>Braking System:</strong> Hydraulic disc brakes (optimized for high power engine).
//     </li>
//     <li className="mb-3">
//       <strong>Battery Hours:</strong> 6-8 hours
//     </li>
//     <li className="mb-3">
//       <strong>Battery Life:</strong> 48V 50A
//     </li>
//   </ul>
// </div>

//             {/* <div className="p-3 rounded mt-3">
//               <label className="fw-semibold">Color: <span className="text-capitalize">{selectedColor}</span></label>
//               <div className="d-flex gap-3 mt-2">
//                 <button className={`color-swatch ${selectedColor === 'green' ? 'active' : ''}`} style={{ backgroundColor: 'green' }} onClick={() => setSelectedColor('green')}></button>
//                 <button className={`color-swatch ${selectedColor === 'red' ? 'active' : ''}`} style={{ backgroundColor: 'red' }} onClick={() => setSelectedColor('red')}></button>
//                 <button className={`color-swatch ${selectedColor === 'blue' ? 'active' : ''}`} style={{ backgroundColor: 'blue' }} onClick={() => setSelectedColor('blue')}></button>
//               </div>
//               <div className="mt-2"><a href="#" className="text-danger small">Clear</a></div>
//             </div> */}
// {/* <div class="mb-3 mt-4">
//   <label htmlFor="batteryOption" class="form-label fw-bold">
//     Battery Capacity Option <span class="text-danger">*</span>
//   </label>
//   <select class="form-select" id="batteryOption" required>
//     <option selected disabled>Select</option>
//     <option value="10Ah">10Ah</option>
//     <option value="13Ah">13Ah</option>
//     <option value="15Ah">15Ah</option>
//   </select>
// </div> */}

// {/* <div class="mb-3">
//   <label htmlFor="wheelSize" class="form-label fw-bold">
//     Wheel Size <span class="text-danger">*</span>
//   </label>
//   <select class="form-select" id="wheelSize" required>
//     <option selected disabled>Select</option>
//     <option value="26in">26 inch</option>
//     <option value="27.5in">27.5 inch</option>
//     <option value="29in">29 inch</option>
//   </select>
// </div> */}
// {/*
//             <div className="mt-4 d-flex align-items-center gap-3">

//               <button
//     className="btn px-3"
//     style={{border:'1px solid #f7931e',color:'#f7931e'}}
//     onClick={() => setQuantity(prev => prev + 1)}
//   >

//     +
//   </button>

//   <div className="px-3 py-2 border rounded text-center ">
//     {quantity}
//   </div>

//   <button
//     className="btn px-3"
//     style={{border:'1px solid #f7931e',color:'#f7931e'}}
//     onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//   >

//     -
//   </button>
//               <button className="btn" style={{background:'#f7931e'}}><i className="bi bi-cart text-light me-2" aria-label="cart" onClick={handleAddToCart}></i><span className='text-light'>Add to cart</span></button>
//             </div> */}

//             {/* <div className="mt-3">
//               <span className="badge rounded-pill border border-dark text-dark">Urban</span>
//             </div> */}
//             {/* <button className="btn" style={{background:'#f7931e'}} onClick={() =>router.push('/rental')}><i className="bi bi-cart text-light me-2" aria-label="cart" ></i><span className='text-light'>Rental</span></button> */}
//             <button
//         className="btn"
//         style={{ background: '#f7931e' }}
//         onClick={handleClick}
//       >
//         {/* <i className="bi bi-bike text-light me-2" aria-label="bike"></i> */}
//         <span className="text-light">Rental</span>
//       </button>
// {showModal && (
//         <div
//           className="modal fade show"
//           style={{
//             display: 'block',
//             opacity: 1,
//             transition: 'opacity 0.3s ease',
//           }}
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           {/* Modal backdrop with blur effect */}
//           <div
//             className="modal-backdrop fade show"
//             style={{
//               backdropFilter: 'blur(5px)',  // Apply blur effect to the background
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               zIndex: -1,  // Make sure the backdrop is behind the modal
//               backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
//             }}
//           ></div>

//           <div
//             className="modal-dialog"
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               minHeight: '100vh',
//             }}
//           >
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel" style={{color:'rgb(247, 147, 30)'}}>Social Media Links</h5>
//                 <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//                 {/* Icons and Labels for Instagram, Google, and Call */}
//                 <div className="d-flex justify-content-around">
//                   <a target='_blank'  href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D" className="text-decoration-none text-center"><Image src={Instagram} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Instagram</span></a>
//             <a target='_blank' href="https://g.co/kgs/66Atysa" className="text-decoration-none text-center"><Image src={Google} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Google</span></a>
//             <a target='_blank' href="tel:+61422032961" className="text-decoration-none text-center" title="Call Us">
//   <Image src={Call} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Call</span>
// </a>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn" style={{background:'#f7931e',color:'white'}} onClick={handleClose}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//           </div>
//         </div>
//       </div>
//       <div className="container text-center py-4">
//         {/* <ul className="nav nav-tabs justify-content-center border-0 mb-4">
//           <li className="nav-item">
//             <a className="nav-link active fw-bold" aria-current="page" href="#">Description</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-muted" href="#">Additional information</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-muted" href="#">Reviews (1)</a>
//           </li>
//         </ul> */}
//         <h1 className="fw-bold mb-4" aria-current="page" href="#" style={{color:'rgb(247,147,30)'}}>Description</h1>
//             <h2>Insurance offered</h2>
//             <h3>Insurance only covers theft of battery.</h3>
//             <h4>No accident compensation.</h4>
//             <h4>No third party costs insured.</h4>

//         {/* <h2 className="fw-bold display-5">Conquer the city streets or <br /><span className="text-secondary">the mountain trails</span></h2>
//         <p className="mt-3 fs-5 text-muted px-2 px-md-5">
//          The MK220 new generation 20 Cargo E-Bike comes with our Battery Efficiency Saving (BES) technology.  This new BES technology give riders 20% more of their trips distance and 10% more of the gradeability and 10% less of its weight than our old generation .
//          </p> */}
//         <div className="description-section">
//   {/* <h1 className="section-title">Description</h1> */}

//   <div className="insurance-box">
//     <h2 className="insurance-title">Insurance Offered</h2>
//     <p className="positive">✔ Insurance only covers theft of battery.</p>
//     <p className="negative">✘ No accident compensation.</p>
//     <p className="negative">✘ No third-party costs insured.</p>
//   </div>

//   <h2 className="rental-title">Rental Information</h2>

//   <div className="info-cards">
//     <div className="info-card">
//       <div className="info-header">Documents for Rent</div>
//       <ul className="info-list">
//         <li>1. Name</li>
//         <li>2. Phone Number</li>
//         <li>3. Address & Unit Number</li>
//         <li>4. Email</li>
//         <li>5. Valid Visa Grant</li>
//         <li>6. Passport</li>
//       </ul>
//     </div>

//     <div className="info-card">
//       <div className="info-header">Our Rental Fee Includes</div>
//       <ul className="info-list">
//         <li>1. Delivery bag</li>
//         <li>2. Locks(2)</li>
//         <li>3. Helmet</li>
//         <li>4. Charger</li>
//         <li>5. Basic maintenance</li>
//       </ul>
//     </div>
//   </div>
// </div>

//         <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
//           <div className="col-md-4">
//             <div className="border rounded py-4 px-2 h-100">
//               <Image src="/images/speed.svg" alt="Top Speed" width={40} height={40} />
//               <p className="text-muted mb-1 mt-3 small">Top Speed</p>
//               <h5 className="text-orange fw-bold">45 MPH</h5>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="border rounded py-4 px-2 h-100">
//               <Image src="/images/running.svg" alt="Average Miles" width={40} height={40} />
//               <p className="text-muted mb-1 mt-3 small">Battery Hour</p>
//               <h5 className="text-orange fw-bold">6-8 hours</h5>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="border rounded py-4 px-2 h-100">
//               <Image src="/images/battery.svg" alt="Battery Life" width={40} height={40} />
//               <p className="text-muted mb-1 mt-3 small">Battery Life</p>
//               <h5 className="text-orange fw-bold">48V 50A</h5>
//             </div>
//           </div>
//           {/* <div className="col">
//             <div className="border rounded py-4 px-2 h-100">
//               <Image src="/images/motor.svg" alt="Motor Output" width={40} height={40} />
//               <p className="text-muted mb-1 mt-3 small">Motor Output</p>
//               <h5 className="text-orange fw-bold">5,000 Watts</h5>
//             </div>
//           </div> */}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/productdetails.css";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/Footer";
import Instagram from "../../../public/images/instagram-latest.svg";
import Google from "../../../public/images/google-latest.svg";
import Call from "../../../public/images/phone-latest.svg";

const images = {
  front: "/images/CartoonCycleProductdetailsFrontBlur.jpg",
  back: "/images/CartoonCycleProductdetailsBackBlur.jpg",
  middle: "/images/CartoonCycleProductdetailsAngleBlur.jpg",
  battery: "/images/CartoonCycleProductdetailsWholeBlur.jpg",
};

export default function CartoonDetailsPage() {
  const [selectedColor, setSelectedColor] = useState("front");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handlePayNow = () => {
    // Redirect to checkout page with query params for currency & price
    router.push("/checkout?currency=aud&price=65");
  };
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>E-bikes-6-8h Bikes | Beyond Bikes Electric Bike</title>
        <meta
          name="description"
          content="Explore the Cartoon Bikes E-bike 6-8h by Beyond Bikes. Learn specifications, rental info, insurance, and battery details. Book your ride now!"
        />
        <meta
          name="keywords"
          content="Beyond Bikes, Cartoon Bikes, electric bike, e-bike, rental, battery life, mid-drive, all-terrain"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/product/cartoon" />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="Cartoon Bikes | Beyond Bikes Electric Bike"
        />
        <meta
          property="og:description"
          content="Explore the Cartoon Bikes E-bike 6-8h by Beyond Bikes. Learn specifications, rental info, insurance, and battery details. Book your ride now!"
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content="https://yourdomain.com/product/cartoon"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/CartoonCycleProductdetailsFrontBlur.jpg"
        />
      </Head>

      <Header />

      <main
        className="container py-5"
        itemScope
        itemType="https://schema.org/Product"
      >
        <div className="row align-items-start">
          {/* Left Image Section */}
          <div className="col-xl-7 mb-4 only-mobile-center">
            <Image
              src={images[selectedColor]}
              alt={`Cartoon Bikes E-bike view: ${selectedColor}`}
              width={600}
              height={600}
              className="set-image-bikes"
              itemProp="image"
            />

            <div className="d-sm-flex thumbnail-gallery mt-3">
              {Object.keys(images).map((color) => (
                <img
                  key={color}
                  src={images[color]}
                  alt={`Cartoon Bikes ${color} view`}
                  className={`thumb ${selectedColor === color ? "active" : ""}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Right Info Section */}
          <div className="col-xl-5">
            <h1 className="text-center fw-bold" itemProp="name">
              E-bike 6-8h
            </h1>
            <p
              className="fs-4 text-center fw-bold"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              PRICE : $60 AUD{" "}
              <del className="text-muted fs-4 ms-2">$70 AUD</del>
              <meta itemProp="price" content="60" />
              <meta itemProp="priceCurrency" content="AUD" />
              <link itemProp="availability" href="https://schema.org/InStock" />
            </p>

            <section className="container my-4">
              <div className="row g-3">
                <div className="col-6">
                  <div className="spec-box">
                    <i className="bi bi-battery-full"></i>
                    <div>
                      <strong>6-8 hours</strong>
                      <p>Battery Hours</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="spec-box">
                    <i className="bi bi-lightning-charge"></i>
                    <div>
                      <strong>500W</strong>
                      <p>Motor</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="spec-box">
                    <i className="bi bi-clock"></i>
                    <div>
                      <strong>48V 50A</strong>
                      <p>Battery Life</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="spec-box">
                    <i className="bi bi-wrench"></i>
                    <div>
                      <strong>Included</strong>
                      <p>Maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section class="mt-3" itemProp="description">
  <h2 class="fw-bold text-orange mb-3">Specifications</h2>

  <div class="accordion" id="specAccordion">
  
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingSpeed">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpeed" aria-expanded="false" aria-controls="collapseSpeed">
          <strong>Speed Modes</strong>
        </button>
      </h3>
      <div id="collapseSpeed" class="accordion-collapse collapse" aria-labelledby="headingSpeed" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          <ul>
            <li>Gear 1: 25 km/h</li>
            <li>Gear 2: 35 km/h</li>
            <li>Gear 3: 45 km/h</li>
          </ul>
        </div>
      </div>
    </div>

  
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingDisplay">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDisplay" aria-expanded="false" aria-controls="collapseDisplay">
          <strong>Display</strong>
        </button>
      </h3>
      <div id="collapseDisplay" class="accordion-collapse collapse" aria-labelledby="headingDisplay" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          Multifunctional LED display, clearly visible under sunlight.
        </div>
      </div>
    </div>

  
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingLight">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLight" aria-expanded="false" aria-controls="collapseLight">
          <strong>Lighting</strong>
        </button>
      </h3>
      <div id="collapseLight" class="accordion-collapse collapse" aria-labelledby="headingLight" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          <ul>
            <li>Front high-brightness headlight with wide aperture</li>
            <li>Rear light with laser projection for night safety</li>
          </ul>
        </div>
      </div>
    </div>

   
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingHolder">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHolder" aria-expanded="false" aria-controls="collapseHolder">
          <strong>Phone Holder</strong>
        </button>
      </h3>
      <div id="collapseHolder" class="accordion-collapse collapse" aria-labelledby="headingHolder" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          USB port (2.1A output)
        </div>
      </div>
    </div>

   
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingSafety">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSafety" aria-expanded="false" aria-controls="collapseSafety">
          <strong>Safety System</strong>
        </button>
      </h3>
      <div id="collapseSafety" class="accordion-collapse collapse" aria-labelledby="headingSafety" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          <ul>
            <li>Smart anti-theft remote (alarm + keyless start)</li>
            <li>NFC smart unlock</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingBrake">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBrake" aria-expanded="false" aria-controls="collapseBrake">
          <strong>Braking System</strong>
        </button>
      </h3>
      <div id="collapseBrake" class="accordion-collapse collapse" aria-labelledby="headingBrake" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          Hydraulic disc brakes
        </div>
      </div>
    </div>

   
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingHours">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHours" aria-expanded="false" aria-controls="collapseHours">
          <strong>Battery Hours</strong>
        </button>
      </h3>
      <div id="collapseHours" class="accordion-collapse collapse" aria-labelledby="headingHours" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          6–8 hours
        </div>
      </div>
    </div>

    
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingLife">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLife" aria-expanded="false" aria-controls="collapseLife">
          <strong>Battery Life</strong>
        </button>
      </h3>
      <div id="collapseLife" class="accordion-collapse collapse" aria-labelledby="headingLife" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          48V 50A
        </div>
      </div>
    </div>
  </div>
</section> */}

            <section
              className="mt-3"
              itemScope
              itemType="https://schema.org/Product"
            >
              <h2 className="fw-bold text-orange mb-3">Specifications</h2>

              {/* NAV TABS */}
              <ul className="nav nav-pills mb-3 bg-light p-1 rounded-pill d-inline-flex">
                <li className="nav-item">
                  <button
                    className={`nav-link rounded-pill ${
                      activeTab === "performance" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("performance")}
                  >
                    Performance
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link rounded-pill ${
                      activeTab === "features" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("features")}
                  >
                    Features
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link rounded-pill ${
                      activeTab === "safety" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("safety")}
                  >
                    Safety
                  </button>
                </li>
              </ul>

              {/* TAB CONTENT */}
              <div>
                {/* Tab 1: Features */}
                {activeTab === "features" && (
                  <>
                    {/* Display */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("display")}
                        aria-expanded={openItem === "display"}
                      >
                        <strong>Display</strong>
                        <span className="toggle-icon">
                          {openItem === "display" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "display" && (
                        <div className="spec-content">
                          Multifunctional LED display, clearly visible under
                          sunlight.
                        </div>
                      )}
                    </div>

                    {/* Lighting */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("lighting")}
                        aria-expanded={openItem === "lighting"}
                      >
                        <strong>Lighting</strong>
                        <span className="toggle-icon">
                          {openItem === "lighting" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "lighting" && (
                        <div className="spec-content">
                          <ul>
                            <li>
                              Front high-brightness headlight with wide aperture
                            </li>
                            <li>
                              Rear light with laser projection for night safety
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Phone Holder */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("holder")}
                        aria-expanded={openItem === "holder"}
                      >
                        <strong>Phone Holder</strong>
                        <span className="toggle-icon">
                          {openItem === "holder" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "holder" && (
                        <div className="spec-content">
                          USB port (2.1A output)
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Tab 2: Safety */}
                {activeTab === "safety" && (
                  <>
                    {/* Safety System */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("safety")}
                        aria-expanded={openItem === "safety"}
                      >
                        <strong>Safety System</strong>
                        <span className="toggle-icon">
                          {openItem === "safety" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "safety" && (
                        <div className="spec-content">
                          <ul>
                            <li>
                              Smart anti-theft remote (alarm + keyless start)
                            </li>
                            <li>NFC smart unlock</li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Braking System */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("brake")}
                        aria-expanded={openItem === "brake"}
                      >
                        <strong>Braking System</strong>
                        <span className="toggle-icon">
                          {openItem === "brake" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "brake" && (
                        <div className="spec-content">
                          Hydraulic disc brakes
                        </div>
                      )}
                    </div>

                    {/* Battery Hours */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("hours")}
                        aria-expanded={openItem === "hours"}
                      >
                        <strong>Battery Hours</strong>
                        <span className="toggle-icon">
                          {openItem === "hours" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "hours" && (
                        <div className="spec-content">6–8 hours</div>
                      )}
                    </div>
                  </>
                )}

                {/* Tab 3: Performance */}
                {activeTab === "performance" && (
                  <>
                    {/* Speed Modes */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("speed")}
                        aria-expanded={openItem === "speed"}
                      >
                        <strong>Speed Modes</strong>
                        <span className="toggle-icon">
                          {openItem === "speed" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "speed" && (
                        <div className="spec-content">
                          <ul>
                            <li>Gear 1: 25 km/h</li>
                            <li>Gear 2: 35 km/h</li>
                            <li>Gear 3: 45 km/h</li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Battery Life */}
                    <div className="spec-item">
                      <button
                        className="spec-toggle"
                        onClick={() => toggleItem("life")}
                        aria-expanded={openItem === "life"}
                      >
                        <strong>Battery Life</strong>
                        <span className="toggle-icon">
                          {openItem === "life" ? "−" : "+"}
                        </span>
                      </button>
                      {openItem === "life" && (
                        <div className="spec-content">48V 50A</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </section>

            <button
              className="mt-3 rent-now"
              style={{ background: "rgb(26, 59, 25)" }}
              onClick={handleClick}
              aria-label="Open Rental Modal"
            >
              <span className="text-light">Rent Now</span>
            </button>

            <div style={{ padding: 24 }}>
              <h1>Pure Kit</h1>
              <p>Price: A$65.00</p>
              <button
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#6772e5",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 16,
                }}
                onClick={handlePayNow}
              >
                Pay Now
              </button>
            </div>

            {showModal && (
              <div
                className="modal fade show"
                style={{
                  display: "block",
                  opacity: 1,
                  transition: "opacity 0.3s ease",
                }}
                aria-labelledby="modalLabel"
                aria-hidden="false"
              >
                <div
                  className="modal-backdrop fade show"
                  style={{
                    backdropFilter: "blur(5px)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundColor: "rgba(0,0,0,0.8)",
                  }}
                ></div>

                <div
                  className="modal-dialog d-flex justify-content-center align-items-center"
                  style={{ minHeight: "100vh" }}
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-orange" id="modalLabel">
                        Social Media Links
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleClose}
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="d-flex justify-content-around">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/beyondbikes_vic/"
                          className="text-decoration-none text-center"
                        >
                          <Image
                            src={Instagram}
                            height={30}
                            width={30}
                            alt="Instagram Logo"
                          />
                          <br />
                          <span className="text-orange fs-6">Instagram</span>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://g.co/kgs/66Atysa"
                          className="text-decoration-none text-center"
                        >
                          <Image
                            src={Google}
                            height={30}
                            width={30}
                            alt="Google Logo"
                          />
                          <br />
                          <span className="text-orange fs-6">Google</span>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="tel:+61422032961"
                          className="text-decoration-none text-center"
                          title="Call Us"
                        >
                          <Image
                            src={Call}
                            height={30}
                            width={30}
                            alt="Phone Logo"
                          />
                          <br />
                          <span className="text-orange fs-6">Call</span>
                        </a>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn"
                        style={{ background: "#1A3B19", color: "white" }}
                        onClick={handleClose}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Description */}
        <section className="container py-4" aria-labelledby="description-title">
          <h2
            id="description-title"
            className="fw-bold mb-4"
            style={{ color: "rgb(26, 59, 25)" }}
          >
            Description
          </h2>

          <article className="insurance-box fs-5">
            <p>Insurance Offered</p>
            <p>✔ Insurance only covers theft of battery.</p>
            <p>✘ No accident compensation.</p>
            <p>✘ No third-party costs insured.</p>
          </article>

          {/* <article>
                    <h3 style={{ color: 'rgb(26, 59, 25)' }} className='mt-3 mb-5'>Rental Information</h3>
                    <div className="info-cards">
                      <div className="info-card">
                        <h4 className="info-header">Documents for Rent</h4>
                        <ul className="info-list">
                          <li style={{listStyle:'none'}}>Name</li>
                          <li style={{listStyle:'none'}}>Phone Number</li>
                          <li style={{listStyle:'none'}}>Address & Unit Number</li>
                          <li style={{listStyle:'none'}}>Email</li>
                          <li style={{listStyle:'none'}}>Valid Visa Grant</li>
                          <li style={{listStyle:'none'}}>Passport</li>
                        </ul>
                      </div>
                      <div className="info-card">
                        <h4 className="info-header">Our Rental Fee Includes</h4>
                        <ul className="info-list">
                          <li style={{listStyle:'none'}}>Delivery bag</li>
                          <li style={{listStyle:'none'}}>Locks (2)</li>
                          <li style={{listStyle:'none'}}>Helmet</li>
                          <li style={{listStyle:'none'}}>Charger</li>
                          <li style={{listStyle:'none'}}>Basic maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </article> */}

          <article>
            <h3 style={{ color: "rgb(26, 59, 25)" }} className="mt-3 mb-5">
              Rental Information
            </h3>
            <div className="info-cards">
              {/* Left Card */}
              <div className="info-card">
                <h4 className="info-header">Documents for Rent</h4>
                <ul className="info-list">
                  <li>Name</li>
                  <li>Phone Number</li>
                  <li>Address & Unit Number</li>
                  <li>Email</li>
                  <li>Valid Visa Grant</li>
                  <li>Passport</li>
                </ul>
              </div>

              {/* Right Card */}
              <div className="info-card">
                <h4 className="info-header">Our Rental Fee Includes</h4>
                <ul className="info-list">
                  <li>Delivery bag</li>
                  <li>Locks (2)</li>
                  <li>Helmet</li>
                  <li>Charger</li>
                  <li>Basic maintenance</li>
                </ul>
              </div>
            </div>
          </article>

          {/* <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    <div className="col-md-4">
                      <div className="border rounded py-4 px-2 h-100">
                        <Image src="/images/speed.svg" alt="Top Speed Icon" width={40} height={40} />
                        <p className="text-muted mb-1 mt-3 small">Top Speed</p>
                        <h5 className="text-orange fw-bold">45 MPH</h5>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border rounded py-4 px-2 h-100">
                        <Image src="/images/running.svg" alt="Battery Hours Icon" width={40} height={40} />
                        <p className="text-muted mb-1 mt-3 small">Battery Hours</p>
                        <h5 className="text-orange fw-bold">6-8 hours</h5>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border rounded py-4 px-2 h-100">
                        <Image src="/images/battery.svg" alt="Battery Life Icon" width={40} height={40} />
                        <p className="text-muted mb-1 mt-3 small">Battery Life</p>
                        <h5 className="text-orange fw-bold">48V 50A</h5>
                      </div>
                    </div>
                  </div> */}
        </section>
      </main>
      <Footer />
    </>
  );
}
