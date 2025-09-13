"use client";
import Hero from "../components/Hero";
import Product from "../components/Product";
import "../styles/ScrollSnap.css"; 

export default function HomePage() {
  return (
    <div className="scroll-container">
      <section className="scroll-section">
        <Hero />
      </section>
      <section className="scroll-section">
        <Product />
      </section>
    </div>
  );
}
