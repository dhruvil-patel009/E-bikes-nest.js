'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { useState } from 'react';
import '../styles/productdetails.css';


const images = {
  green: '/images/e-bike-blue.jpg',
  red: '/images/e-bike-red.jpg',
  blue: '/images/e-bike-green.jpg'
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState('green');
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Head>
        <title>Cali Cruiser | Electric Bike</title>
        <meta name="description" content="Buy Cali Cruiser – a powerful all-terrain mid-drive electric bicycle for both trails and city roads. Available now!" />
        <meta name="keywords" content="electric bike, e-bike, Cali Cruiser, green transport" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/product" />
      </Head>

      <div className="container py-5">
        <div className="row align-items-start">
          {/* Left Image */}
          <div className="col-md-7 mb-4">
            <Image src={images[selectedColor]} alt="Cali Cruiser" width={600} height={600} className="img-fluid" />

            <div className="d-flex mt-3 gap-3">
              {Object.keys(images).map(color => (
                <Image
                  key={color}
                  src={images[color]}
                  alt={color}
                  width={100}
                  height={70}
                  className={`thumb ${selectedColor === color ? 'border border-dark' : ''}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Right Info */}
          <div className="col-md-5">
            <h1 className="text-orange fw-bold">Cali Cruiser</h1>
            <small className="text-muted">★ ★ ★ ☆ ☆ (1 Review)</small>
            <p className="mt-3">
              Take to the streets or trails with this powerful all-terrain mid-drive electric bicycle. The City Surfer delivers unmatched performance you won’t find anywhere else.
            </p>

            <div className="fs-4 fw-bold">$1,999 <del className="text-muted fs-6 ms-2">$2,300</del></div>

            <div className="bg-light p-3 rounded mt-3">
              <label className="fw-semibold">Color: <span className="text-capitalize">{selectedColor}</span></label>
              <div className="d-flex gap-3 mt-2">
                <button className={`color-swatch ${selectedColor === 'green' ? 'active' : ''}`} style={{ backgroundColor: 'green' }} onClick={() => setSelectedColor('green')}></button>
                <button className={`color-swatch ${selectedColor === 'red' ? 'active' : ''}`} style={{ backgroundColor: 'red' }} onClick={() => setSelectedColor('red')}></button>
                <button className={`color-swatch ${selectedColor === 'blue' ? 'active' : ''}`} style={{ backgroundColor: 'blue' }} onClick={() => setSelectedColor('blue')}></button>
              </div>
              <div className="mt-2"><a href="#" className="text-danger small">Clear</a></div>
            </div>

            <div className="mt-4 d-flex align-items-center gap-3">
              <input type="number" className="form-control w-auto" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} />
              <button className="btn btn-dark">Add to cart</button>
            </div>

            <div className="mt-3">
              <span className="badge rounded-pill border border-dark text-dark">Urban</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
