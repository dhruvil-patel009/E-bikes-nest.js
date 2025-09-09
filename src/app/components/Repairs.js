// // app/repairs/page.js
// import Head from 'next/head';

// export default function Repairs() {
//   return (
//     <>
//       <Head>
//         <title>Repair, Maintenance and Custom | RIDE</title>
//         <meta name="description" content="We provide professional electric bike repairs, maintenance, and custom upgrades to keep your ride smooth." />
//         <meta name="keywords" content="bike repair, electric bike service, maintenance, custom bike work" />
//         <link rel="canonical" href="https://yourdomain.com/repairs" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Repair, Maintenance and Custom | RIDE" />
//         <meta property="og:description" content="We provide professional electric bike repairs, maintenance, and custom upgrades to keep your ride smooth." />
//         <meta property="og:image" content="https://yourdomain.com/images/repair-thumb.png" />
//       </Head>

//       <section className="py-5 bg-white">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Left Side Content */}
//             <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
//               <h2 className="fw-bold text-uppercase" style={{ fontSize: '2.5rem' }}>
//                 Repair,<br />
//                 Maintenance<br />
//                 <span className="bg-primary text-white px-3 py-1 rounded d-inline-block" style={{ fontWeight: 700 }}>
//                   AND CUSTOM
//                 </span>
//               </h2>
//               <p className="text-muted mt-3">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//               </p>
//               <a href="/contact" className="btn btn-light border mt-3 shadow-sm fw-bold">
//                 CONTACT US <span className="ms-1">➤</span>
//               </a>
//             </div>

            
//             <div className="col-md-6 text-center">
//               <img
//                 src="/images/Repair-man.jpg" 
//                 alt="Repair Technician"
//                 className="img-fluid"
//                 style={{ maxHeight: '500px' }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// app/repairs/page.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Repairs() {
  return (
    <>
      <Head>
        <title>Repair, Maintenance and Custom | RIDE</title>
        <meta name="description" content="We provide professional electric bike repairs, maintenance, and custom upgrades to keep your ride smooth." />
        <meta name="keywords" content="bike repair, electric bike service, maintenance, custom bike work" />
        <link rel="canonical" href="https://yourdomain.com/repairs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Repair, Maintenance and Custom | RIDE" />
        <meta property="og:description" content="We provide professional electric bike repairs, maintenance, and custom upgrades to keep your ride smooth." />
        <meta property="og:image" content="https://yourdomain.com/images/repair-thumb.png" />
      </Head>


<h1 className='text-center' style={{color:'#ff6b00'}}>Services</h1>
      <section
        className="py-5 bg-white"
        style={{
    backgroundImage: "url('/images/Background-Repair.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h2 className="fw-bold text-uppercase" style={{ fontSize: '2.5rem' }}>
                Repair,<br />
                Maintenance<br />
                <span className="bg-primary text-white px-3 py-1 rounded d-inline-block" style={{ fontWeight: 700 }}>
                  AND CUSTOM
                </span>
              </h2>
              <p className="text-muted mt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
              </p>
              <a href="/contact" className="btn btn-light border mt-3 shadow-sm fw-bold" style={{
              backgroundColor:'#ff6b00',
              fontSize:'13px',
              color:'#fff',
              fontWeight:'600',
              border:'none'
            }}>
                CONTACT US <span className="ms-1">➤</span>
              </a>
            </div>

            {/* Right Side Image */}
            <div className="col-md-6 text-center">
              <img
                src="/image/RemoveBackgroundRepair.png"
                alt="Repair Technician"
                className="img-fluid"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          {/* Top Section */}
          <div className="row mb-5 align-items-center" style={{margin:'0px 50px'}}>
            <div className="col-md-6">
              <h2 className="fw-bold">REPAIRS</h2>
              <ul className="fs-5">
                <li>Electric Bike</li>
                <li>Scooter</li>
                <li>Electric Bike</li>
                <li>Scooter</li>
                <li>Electric Bike</li>
                <li>Scooter</li>
                <li>Electric Bike</li>
                <li>Scooter</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/images/Repair-one.jpg"
                alt="E-bike on repair stand"
                className="img-fluid rounded shadow"
                height={'500px'}
                width={'500px'}
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="row align-items-center">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="/images/Repair-two.jpg"
                alt="Tools for bike repair"
                className="img-fluid rounded shadow"
                height={'500px'}
                width={'500px'}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">No Booking Required</h3>
              <p className='fw-600'>
                EBIKE100 offers comprehensive e-bike <br />servicing and repairs to keep your ride <br />in top condition.
                <br />
                Just visit any of our stores during <br />business hours.
              </p>
              <h5 className="text-danger fw-bold mt-3">Opening Hours</h5>
              <p className="mb-0">Monday to Saturday 10 am to 6pm</p>
              <p className="mb-0">Sunday Close</p>
            </div>
          </div>
        </div>
      </section>
      
        
      
    </>
  );
}
