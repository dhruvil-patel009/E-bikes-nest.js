"use client";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function TermAndCondition() {
  return (
    <>
      <Head>
        <title>Terms And Condition | Your Brand</title>
        <meta
          name="description"
          content="Read the Terms of Service for using Your Brand's website, services, and products."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms of Service | Your Brand" />
        <meta
          property="og:description"
          content="Official Terms of Service for Your Brand."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/terms-of-service" />
      </Head>

      <Header/>

      {/* Header Section */}
      <header className="py-5 text-center position-relative" style={{
  height: '40vh',
 backgroundImage: "url('/images/Terms-condition-background.jpg')", // 👉 Place your image in /public/images/
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}}>
        <h1 className="fw-bold" style={{color:'#1a3b19'}}>TERMS AND CONDITIONS</h1>
        <p className="mb-0" style={{color:'#1a3b19'}}>Updated August 25, 2025</p>
      </header>

      {/* Card Overlap Section */}
      <section className="container">
        <div className="card shadow-lg terms-card mx-auto p-4">
          <div className="card-body">
            <h2 className="fw-bold text-center mb-4" style={{color:'#1a3b19'}}>Rental Terms & Conditions</h2>
          <ol className="list-group list-group-flush mb-4">
            <li className="list-group-item" style={{border:'none'}}><strong>1.</strong> The renter agrees to waive all claims and/or causes of action against the Lessor (BEYOND BIKES PTY LTD) arising from the operation, use, or misuse of the rented bicycle.</li>
            <li className="list-group-item" style={{border:'none'}}><strong>2.</strong> The renter is responsible for all charges, including rental fees and damages to the equipment, and agrees to return the bicycle in the same condition as received (normal wear and tear excluded).</li>
            <li className="list-group-item" style={{border:'none'}}><strong>3.</strong> Theft or total loss of the rental bike is the sole responsibility of the renter.</li>
            <li className="list-group-item" style={{border:'none'}}><strong>4.</strong> The customer agrees to pay a total of $1,500 in the event of a total loss of the bike or theft of the battery. This amount is payable over a period of two (2) weeks following the occurrence of the mishap.</li>
            <li className="list-group-item" style={{border:'none'}}><strong>5.</strong> A minimum of 7 days notice is required prior to the scheduled return of the bike.</li>
            <li className="list-group-item" style={{border:'none'}}><strong>6.</strong> The renter is responsible for any misplaced, lost, or unlocked equipment and accessories.</li>
          </ol>
          </div>
        </div>
      </section>
<Footer/>
      <style jsx>{`
        .terms-card {
          margin-top: -120px; /* This creates the overlap effect */
          border-radius: 12px;
          max-width: 900px;
          background: #fff;
          margin-bottom:50px;
        }
      `}</style>
    </>
  );
}
