import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="https://images.pexels.com/videos/856142/free-video-856142.mp4">
        <source src="https://cdn.coverr.co/videos/coverr-a-couple-of-guys-walking-in-the-mountains-1550" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1 className="hero-title">You relax. I handle every detail.</h1>
        <p className="hero-sub">Luxury event planning for weddings, corporate events, and intimate gatherings.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn primary">Book Your Event</a>
          <a href="#portfolio" className="btn ghost">View Portfolio</a>
        </div>
      </div>
    </section>
  )
}
