import Head from 'next/head';
import Image from 'next/image';
import aboutImg from '../../../public/images/togethering-cycling.jpg'; 
import aboutImg1 from '../../../public/images/ridinghapply.jpg'; 
import '../styles/About.css'
import Header from './Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | EBIKE100</title>
        <meta name="description" content="Get to know the team behind EBIKE100 and our passion for sustainable transport in Melbourne." />
        <meta name="keywords" content="About EBIKE100, electric bikes, Melbourne, sustainable transport" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>


      <section className='aboutSection'>
      <h1 className='text-center' style={{marginBottom:'80px',color:'#f7931e'}}>About Us</h1>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                src={aboutImg}
                alt="About EBIKE100"
                className='ovalImage'
                width={500}
                height={400}
              />
            </div>
            <div className="col-md-6">
              <h2 className='orangeHeading'>MISSION</h2>
              <p>
                Founded in 2017, Beyond Bikes was created with a singular goal: to bring a premium electric bike retail experience to the heart of Melbourne. From day one, our commitment to quality, innovation, and customer satisfaction has guided our journey.
              </p>
              <p>
                We are more than just a shop — we are a community hub for e-bike enthusiasts, commuters, and explorers alike. Our passion for excellence is reflected in every product we offer and every interaction we have. We strive to make eco-friendly transportation more accessible, reliable, and enjoyable for everyone.​
              </p>
              <p className='fw-600'>Visit us and experience the EBIKE100 difference — where quality meets service.</p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            
            <div className="col-md-6">
              <h2 className='orangeHeading'>STORE BACKGROUND</h2>
              <p>
               At Beyond Bikes PTY LTD, we believe that exceptional service starts with passionate people and deep industry knowledge. That’s why our team is composed of experienced professionals who are not only experts in e-bikes but also committed to delivering honest advice and personalised support.
              </p>
              <p>
                We offer a carefully curated range of electric bikes and accessories, each selected for performance, reliability, and value. Whether you are a first-time rider or a seasoned cyclist, we’re here to help you find the perfect solution that fits your lifestyle and budget.​
              </p>
              
              <p className='fw-600'>We’re proud of our roots — and even more excited about where we’re going.</p>
            </div>

            <div className="col-md-6 text-end mb-4 mb-md-0">
              <Image
                src={aboutImg1}
                alt="About EBIKE100"
                className='ovalImage'
                width={500}
                height={400}
              />
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                src={aboutImg}
                alt="About EBIKE100"
                className='ovalImage'
                width={500}
                height={400}
              />
            </div>
            <div className="col-md-6">
              <h2 className='orangeHeading'>BRAND PHILOSOPHY</h2>
              <p>
                At Beyond Bikes, we believe that sustainable mobility is not just a trend — it is the future. Our brand philosophy is rooted in the idea that transportation should be smart, accessible, and environmentally responsible. By promoting the use of electric bikes, we aim to inspire a shift towards greener urban living and healthier lifestyles.
              </p>
              <p>
                We view every customer interaction as an opportunity to share our passion for innovation, quality, and community. EBIKE100 is more than a business — it’s a movement powered by people who care about the planet and the freedom to move.
              </p>
              <p className='fw-600'>Ride with purpose. Choose a better way forward.
</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
