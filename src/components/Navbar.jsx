import React from 'react'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <a href="#home" aria-label="A Glorious Event">Kacy Thomas</a>
        </div>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About</a>
          <a href="#contact" className="cta">Book Your Event</a>
        </nav>
      </div>
    </header>
  )
}
