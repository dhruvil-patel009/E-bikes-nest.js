
"use client";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import '../styles/Hero.css';

export default function Hero() {
  const router = useRouter();
  const images = [
    // "/images/02-07-2025-Latest-Hero-1.jpg",
    // "/images/Set-Product-Data-Background-Hero-28-06-2025-latest.jpg",
    "/images/Latest-hero-05-09-first.jpg",
    "/images/Latest-hero-05-09-second.jpg",
  ];

  const titles = [
    "Beyond Bikes - Freedom <br /> to Explore, Power to <br /> Move.",
    "Beyond Bikes - Quiet Power Big Freedom.",
  ];

  const subtitles = [
    "Flexible beyond e-bike rentals.",
    "Perfect for customers and delivery across the city.",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const handleRentalClick = () => {
    setLoading(true);
    setTimeout(() => router.push("/rental"), 1000);
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>
          Beyond Bikes | Electric Bike Rentals in Melbourne | E-Bike Hire
        </title>
        <meta
          name="description"
          content="Rent powerful, quiet, and flexible electric bikes in Melbourne with Beyond Bikes. Perfect for commuters, delivery riders, and city explorers."
        />
        <meta
          name="keywords"
          content="electric bike rental Melbourne, e-bike hire Melbourne, Beyond Bikes Australia, delivery e-bikes Melbourne, rent e-bikes"
        />
        <link rel="canonical" href="https://www.beyondbikes.com.au/" />
        <meta property="og:title" content="Beyond Bikes - Electric Bike Rentals Melbourne" />
        <meta
          property="og:description"
          content="Flexible electric bike rentals in Melbourne. Freedom to explore, power to move with Beyond Bikes."
        />
        <meta property="og:image" content="https://www.beyondbikes.com.au/images/02-07-2025-Latest-Hero-1.jpg" />
        <meta property="og:url" content="https://www.beyondbikes.com.au/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beyond Bikes - Electric Bike Rentals Melbourne" />
        <meta
          name="twitter:description"
          content="Rent quiet, powerful electric bikes in Melbourne with Beyond Bikes. Book now."
        />
        <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/02-07-2025-Latest-Hero-1.jpg" />

        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Beyond Bikes",
              image: "https://www.beyondbikes.com.au/images/02-07-2025-Latest-Hero-1.jpg",
              "@id": "https://www.beyondbikes.com.au/",
              url: "https://www.beyondbikes.com.au/",
              telephone: "+61422032961",
              address: {
                "@type": "PostalAddress",
                streetAddress: "576 North Rd, Ormond VIC 3204, Australia",
                addressLocality: "Melbourne",
                addressRegion: "VIC",
                postalCode: "3162",
                addressCountry: "Australia",
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://wa.me/61422032961",
              ],
            }),
          }}
        />
      </Head>

      {/* ✅ Hero Section */}
      <section
        className="d-flex position-relative responsive-bg text-white text-center text-md-start"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        role="banner"
        aria-label="Electric bike rentals in Melbourne—quiet, powerful, and flexible hire"
      >
      <h1 className="visually-hidden"><strong>Beyond Bikes</strong></h1>
        {/* Hidden but SEO indexed */}
        <Image
          src={images[currentImageIndex]}
          alt="Electric bike rentals in Melbourne - Beyond Bikes"
          width={1920}
          height={1080}
          priority
          style={{ display: "none" }}
        />

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

        <div className="container position-relative z-2 mt-sm-5 mt-2 pt-5">
          <div className="row mt-sm-0 mt-4">
            <div className="col-12 col-md-6">
              <h2
                className="display-5 mb-4"
                style={{ color: "#C6FC2A" }}
              >
              <strong className="fw-bold">
                <Typewriter
                  key={currentImageIndex + "-title"}
                  options={{
                    strings: [titles[currentImageIndex]],
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    deleteSpeed: 20,
                    pauseFor: 3500,
                  }}
                />
                </strong>
              </h2>
              <h3 className="fw-600 mb-4" style={{ fontStyle: "italic" }}>
                {subtitles[currentImageIndex]}
              </h3>
              <a
                onClick={handleRentalClick}
                className="rent-now px-4 py-2 mt-3"
                aria-label="Book your Beyond Bikes rental in Melbourne"
                title="Beyond Bikes - Rent an e-bike in Melbourne"
                
                
              >
                RENT NOW <span className="arrow">→</span>
              </a>

              {/* Fallback for crawlers */}
              <noscript>
                <h2>Electric Bike Rentals in Melbourne</h2>
                <p>
                  Your go-to for flexible 6–12 h electric bike hire—perfect for
                  commuters and food delivery riders.
                </p>
              </noscript>
            </div>
          </div>
        </div>

        {/* Hidden semantic text for crawlers */}
        <span className="visually-hidden">
          Beyond Bikes offers quiet, powerful electric bikes for rent across
          Melbourne. Rent flexible e-bikes for commuting, food delivery, and
          city exploring.
        </span>
      </section>
    </>
  );
}
