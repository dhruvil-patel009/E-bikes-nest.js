// import Head from 'next/head';
// import Image from 'next/image';

// export default function Review() {
//   const team = [
//     {
//       name: 'Zadid Kawser',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'Had a fantastic experience with Beyond Bikes! Sahil is incredibly professional and made the whole e-bike rental process super smooth and easy. Their bikes are well-maintained, reliable, and perfect for getting around the city. What really sets them apart is the warm, welcoming vibe. You’re even greeted by the sweetest dog named Jamie at the front! It’s little touches like that that make all the difference. Highly recommend them if you’re looking for a stress-free, quality e-bike rental experience.',
//       img: '/images/Latest-fifith-review.png',
//       alt: 'Paul Smith profile picture',
//       rating: 5,
//       role: 'Student',
//     },
//     {
//       name: 'Mei lisa',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'I had an excellent experience at Beyond Bikes. The owner was genuinely helpful, welcoming, and clearly passionate about what they do. The e-bike I rented has been incredibly reliable and has exceeded my expectations in performance. Highly recommend this shop to anyone looking for quality and great service.',
//       img: '/images/latest-sixth-review.png',
//       alt: 'Paul Smith profile picture',
//       rating: 5,
//       role: 'Student',
//     },
    
//     {
//       name: 'Sankeerth Reddy',
//       role: 'Student',
//       reviewtitle:'Eco-friendly and fun!',
//       reviewdescription:'Highly recommend Beyond Bike very understanding owner .Great for renting the Ebike. Lots of varieties available 👍',
//       img: '/images/Sankeerth.png',
//       alt: 'Frank Kinney profile picture',
//       rating: 5,
//     },
//     {
//       name: 'Silvano Kevin',
//       role: 'Student',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'Efficient, friendly, and fair prices. Couldn’t ask for more! Best Ebikes in Melbourne 👍Highly Recommend',
//       img: '/images/Silvano.png',
//       alt: 'John Almeda profile picture',
//       rating: 5,
//     },
//     {
//       name: 'elmuz zaman',
//       role: 'Student',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'I rented myself an Ebike from beyond bikes.Guy helped me from start to finish.Really powerful Ebike and foldable too.Highly recommend 👍',
//       img: '/images/elmuz-zaman.png',
//       alt: 'Stella Larson profile picture',
//       rating: 5,
//     },
//     {
//       name: 'Sunny Patel',
//       reviewtitle:'Reliable, fast, and convenient.',
//       reviewdescription:'Good e bike. And Its powerful, comfortable, and ready for just about anything. Thank you.',
//       img: '/images/sunny.png',
//       alt: 'Paul Smith profile picture',
//       rating: 5,
//       role: 'Student',
//     },
    
//   ];

//   const renderStars = (count, number) => {
//     return '★'.repeat(count) + '☆'.repeat(5 - count);
//   };

//   return (
//     <>
//       <Head>
//         <title>Our Team</title>
//         <meta
//           name="description"
//           content="Meet our professional and dedicated team members. Learn more about our leadership and support team."
//         />
//       </Head>

//       <main className="container px-3 py-3">
//       <h1 className='text-center py-3' style={{color:'rgb(247, 147, 30)'}}>Reviews</h1>
//         <section className="row g-4">
//           {team.map((member, index) => (
//             <article className="col-md-6 col-lg-6" key={index}>
//               <div
//                 className="p-4 text-white text-center h-100"
//                 style={{ backgroundColor: '#f8f8f8', borderRadius: '1rem' }}
//               >
//                 <div
//                   className="mx-auto mb-3"
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     border: '4px solid #f7931e',
//                     borderRadius: '50%',
//                     overflow: 'hidden',
//                     position: 'relative',
//                   }}
//                 >
//                   <Image
//                     src={member.img}
//                     alt={member.alt}
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     sizes="(max-width: 768px) 100px, 100px"
//                   />
//                 </div>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e'}}>
//                   {member.reviewtitle}
//                 </p>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e',fontStyle:'italic'}}>
//                   {member.reviewdescription}
//                 </p>
//                 <div style={{ color: '#f7931e', fontSize: '1.2rem' }}>
//                   {renderStars(member.rating)}
//                 </div>
//                 <div className="fw-bold" style={{color:'#f7931e',fontStyle:'italic'}}>- {member.name}</div>
//                 {/* <div className="small" style={{color:'#f7931e'}}>{member.role}</div> */}
//               </div>
//             </article>
//           ))}
//         </section>
//       </main>
//     </>
//   );
// }

// SEO
// import Head from 'next/head';
// import Image from 'next/image';

// export default function Review() {
//   const team = [
//     {
//       name: 'Zadid Kawser',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'Had a fantastic experience with Beyond Bikes! Sahil is incredibly professional and made the whole e-bike rental process super smooth and easy. Their bikes are well-maintained, reliable, and perfect for getting around the city. What really sets them apart is the warm, welcoming vibe. You’re even greeted by the sweetest dog named Jamie at the front! It’s little touches like that that make all the difference. Highly recommend them if you’re looking for a stress-free, quality e-bike rental experience.',
//       img: '/images/Latest-fifith-review.png',
//       alt: 'Zadid Kawser profile picture',
//       rating: 5,
//       role: 'Student',
//       date: '2025-08-15',
//     },
//     {
//       name: 'Mei Lisa',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'I had an excellent experience at Beyond Bikes. The owner was genuinely helpful, welcoming, and clearly passionate about what they do. The e-bike I rented has been incredibly reliable and has exceeded my expectations in performance. Highly recommend this shop to anyone looking for quality and great service.',
//       img: '/images/latest-sixth-review.png',
//       alt: 'Mei Lisa profile picture',
//       rating: 5,
//       role: 'Student',
//       date: '2025-08-15',
//     },
//     {
//       name: 'Sankeerth Reddy',
//       role: 'Student',
//       reviewtitle:'Eco-friendly and fun!',
//       reviewdescription:'Highly recommend Beyond Bike very understanding owner. Great for renting the Ebike. Lots of varieties available 👍',
//       img: '/images/Sankeerth.png',
//       alt: 'Sankeerth Reddy profile picture',
//       rating: 5,
//       date: '2025-08-15',
//     },
//     {
//       name: 'Silvano Kevin',
//       role: 'Student',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'Efficient, friendly, and fair prices. Couldn’t ask for more! Best Ebikes in Melbourne 👍 Highly Recommend',
//       img: '/images/Silvano.png',
//       alt: 'Silvano Kevin profile picture',
//       rating: 5,
//       date: '2025-08-15',
//     },
//     {
//       name: 'Elmuz Zaman',
//       role: 'Student',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'I rented myself an Ebike from Beyond Bikes. Guy helped me from start to finish. Really powerful Ebike and foldable too. Highly recommend 👍',
//       img: '/images/elmuz-zaman.png',
//       alt: 'Elmuz Zaman profile picture',
//       rating: 5,
//       date: '2025-08-15',
//     },
//     {
//       name: 'Sunny Patel',
//       reviewtitle:'Reliable, fast, and convenient.',
//       reviewdescription:'Good e-bike. It’s powerful, comfortable, and ready for just about anything. Thank you.',
//       img: '/images/sunny.png',
//       alt: 'Sunny Patel profile picture',
//       rating: 5,
//       role: 'Student',
//       date: '2025-08-15',
//     },
//   ];

//   const renderStars = (count) => {
//     return '★'.repeat(count) + '☆'.repeat(5 - count);
//   };

//   return (
//     <>
//       <Head>
//         {/* Primary Meta Tags */}
//         <title>Customer Reviews - Beyond Bikes E-bike Rentals</title>
//         <meta name="description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://www.beyondbikes.com.au/reviews" />

//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Customer Reviews - Beyond Bikes E-bike Rentals" />
//         <meta property="og:description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
//         <meta property="og:url" content="https://www.beyondbikes.com.au/reviews" />
//         <meta property="og:image" content="https://www.beyondbikes.com.au/images/reviews-og-image.png" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Customer Reviews - Beyond Bikes E-bike Rentals" />
//         <meta name="twitter:description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
//         <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/reviews-og-image.png" />
//       </Head>

//       <main className="container px-3 py-3">
//         <h1 className='text-center py-3' style={{color:'rgb(247, 147, 30)'}}>Customer Reviews</h1>
//         <section className="row g-4" aria-label="Customer Reviews">
//           {team.map((member, index) => (
//             <article className="col-md-6 col-lg-6" key={index} itemScope itemType="https://schema.org/Review">
//               <div
//                 className="p-4 text-center h-100"
//                 style={{ backgroundColor: '#f8f8f8', borderRadius: '1rem' }}
//               >
//                 <div
//                   className="mx-auto mb-3"
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     border: '4px solid #f7931e',
//                     borderRadius: '50%',
//                     overflow: 'hidden',
//                     position: 'relative',
//                   }}
//                 >
//                   <Image
//                     src={member.img}
//                     alt={member.alt}
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     sizes="(max-width: 768px) 100px, 100px"
//                     priority
//                   />
//                 </div>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e'}} itemProp="name">
//                   {member.reviewtitle}
//                 </p>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e', fontStyle:'italic'}} itemProp="reviewBody">
//                   {member.reviewdescription}
//                 </p>
//                 <div style={{ color: '#f7931e', fontSize: '1.2rem' }} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
//                   <meta itemProp="ratingValue" content={member.rating.toString()} />
//                   <meta itemProp="bestRating" content="5" />
//                   {renderStars(member.rating)}
//                 </div>
//                 <div className="fw-bold" style={{color:'#f7931e', fontStyle:'italic'}} itemProp="author" itemScope itemType="https://schema.org/Person">
//                   - <span itemProp="name">{member.name}</span>
//                 </div>
//               </div>

//               {/* Structured Data JSON-LD */}
//               <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                   __html: JSON.stringify({
//                     "@context": "https://schema.org",
//                     "@type": "Review",
//                     "author": { "@type": "Person", "name": member.name },
//                     "datePublished": member.date,
//                     "reviewBody": member.reviewdescription,
//                     "reviewRating": {
//                       "@type": "Rating",
//                       "ratingValue": member.rating,
//                       "bestRating": 5
//                     },
//                     "itemReviewed": {
//                       "@type": "Product",
//                       "name": "Beyond Bikes E-bike Rental"
//                     }
//                   })
//                 }}
//               />
//             </article>
//           ))}
//         </section>
//       </main>
//     </>
//   );
// }

'use client';

import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import '../styles/Review.css';

export default function Review() {
  const team = [
    {
      name: 'Zadid Kawser',
      reviewtitle: 'Perfect for city living.',
      reviewdescription: 'Had a fantastic experience with Beyond Bikes! Sahil is incredibly professional and made the whole e-bike rental process super smooth and easy. Their bikes are well-maintained, reliable, and perfect for getting around the city. What really sets them apart is the warm, welcoming vibe. You’re even greeted by the sweetest dog named Jamie at the front! It’s little touches like that that make all the difference. Highly recommend them if you’re looking for a stress-free, quality e-bike rental experience.',
      img: '/images/Latest-fifith-review.png',
      alt: 'Zadid Kawser profile picture',
      rating: 5,
      role: 'Student',
      date: '2025-08-15',
    },
    {
      name: 'Mei Lisa',
      reviewtitle: 'Great service & great bikes!',
      reviewdescription: 'I had an excellent experience at Beyond Bikes. The owner was genuinely helpful, welcoming, and clearly passionate about what they do. The e-bike I rented has been incredibly reliable and has exceeded my expectations in performance. Highly recommend this shop to anyone looking for quality and great service.',
      img: '/images/latest-sixth-review.png',
      alt: 'Mei Lisa profile picture',
      rating: 5,
      role: 'Student',
      date: '2025-08-15',
    },
    {
      name: 'Sankeerth Reddy',
      role: 'Student',
      reviewtitle: 'Eco-friendly and fun!',
      reviewdescription: 'Highly recommend Beyond Bike very understanding owner. \nGreat for renting the Ebike. Lots of varieties available 👍',
      img: '/images/Sankeerth.png',
      alt: 'Sankeerth Reddy profile picture',
      rating: 5,
      date: '2025-08-15',
    },
    {
      name: 'Silvano Kevin',
      role: 'Student',
      reviewtitle: 'Great service & great bikes!',
      reviewdescription: 'Efficient, friendly, and fair prices. \nCouldn’t ask for more! Best Ebikes in Melbourne 👍 Highly Recommend',
      img: '/images/Silvano.png',
      alt: 'Silvano Kevin profile picture',
      rating: 5,
      date: '2025-08-15',
    },
    {
      name: 'Elmuz Zaman',
      role: 'Student',
      reviewtitle: 'Perfect for city living.',
      // reviewdescription: 'I rented myself an Ebike from Beyond Bikes. Guy helped me from start to finish. Really powerful Ebike and foldable too. Highly recommend 👍',
      reviewdescription: 'I rented myself an Ebike from Beyond Bikes.\nGuy helped me from start to finish.\nReally powerful Ebike and foldable too.\nHighly recommend 👍',
      img: '/images/elmuz-zaman.png',
      alt: 'Elmuz Zaman profile picture',
      rating: 5,
      date: '2025-08-15',
    },
    {
      name: 'Sunny Patel',
      reviewtitle: 'Reliable, fast, and convenient.',
      reviewdescription: 'Good e-bike. It’s powerful, comfortable, and ready for just about anything. Thank you.',
      img: '/images/sunny.png',
      alt: 'Sunny Patel profile picture',
      rating: 5,
      role: 'Student',
      date: '2025-08-15',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

// ✅ Added scroll listener to update dots
useEffect(() => {
  const track = document.querySelector(".review-track");

  const handleScroll = () => {
    const cardWidth = track.firstChild.getBoundingClientRect().width;
    const scrollLeft = track.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  track.addEventListener("scroll", handleScroll);
  return () => track.removeEventListener("scroll", handleScroll);
}, []);

// ✅ Scroll animation effect
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
    { threshold: 0.2 } // 20% visible = trigger animation
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}, []);


  const renderStars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

  return (
    <>
      <Head>
        <title>Customer Reviews - Beyond Bikes E-bike Rentals</title>
        <meta
          name="description"
          content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.beyondbikes.com.au/reviews" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Customer Reviews - Beyond Bikes E-bike Rentals" />
        <meta property="og:description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
        <meta property="og:url" content="https://www.beyondbikes.com.au/reviews" />
        <meta property="og:image" content="https://www.beyondbikes.com.au/images/reviews-og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Reviews - Beyond Bikes E-bike Rentals" />
        <meta name="twitter:description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
        <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/reviews-og-image.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ReviewPage",
              "mainEntityOfPage": "https://www.beyondbikes.com.au/reviews",
              "headline": "Customer Reviews - Beyond Bikes E-bike Rentals",
              "description": "Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne.",
              "publisher": {
                "@type": "Organization",
                "name": "Beyond Bikes",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.beyondbikes.com.au/images/logo.png"
                }
              },
              "review": team.map(member => ({
                "@type": "Review",
                "author": { "@type": "Person", "name": member.name },
                "datePublished": member.date,
                "reviewBody": member.reviewdescription,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": member.rating,
                  "bestRating": 5
                },
                "itemReviewed": {
                  "@type": "Product",
                  "name": "Beyond Bikes E-bike Rental"
                }
              }))
            })
          }}
        />
      </Head>

      <main className="container px-3 py-3">
        <h2 className="text-center fs-1 fw-bold pt-3 pb-5" style={{ color: '#1A3B19' }}>
          Customer Reviews
        </h2>
        

        <section className="review-slider" aria-label="Customer Reviews">
  <div className="review-track">
    {team.map((member, index) => (
      <article
        className="review-card scroll-animate"
        key={index}
        itemScope
        itemType="https://schema.org/Review"
        aria-labelledby={`review-title-${index}`}
      >
        <div
          className="p-4 text-center h-100"
          style={{ backgroundColor: '#1A3B19', borderRadius: '1rem' }}
        >
          <div
            className="mx-auto"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              bottom: '47px',
            }}
          >
            <Image
              src={member.img}
              alt={member.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100px, 100px"
              priority
            />
          </div>

          <div
            style={{ color: 'orange', fontSize: '1.6rem', marginTop: '-30px' }}
            itemProp="reviewRating"
            itemScope
            itemType="https://schema.org/Rating"
          >
            <meta itemProp="ratingValue" content={member.rating.toString()} />
            <meta itemProp="bestRating" content="5" />
            {renderStars(member.rating)}
          </div>

          <p
            className="small review-text mb-2 fw-600"
            style={{ color: '#C2F829', fontStyle: 'italic' }}
            itemProp="reviewBody"
          >
            {member.reviewdescription}
          </p>

          <div
            className="fw-bold"
            style={{ color: '#C2F829', fontStyle: 'italic' }}
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            - <span itemProp="name">{member.name}</span>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

<div className="dots">
    {team.map((_, index) => (
      <span
        key={index}
        className={`dot ${activeIndex === index ? "active" : ""}`}
      ></span>
    ))}
  </div>
      </main>
    </>
  );
}
