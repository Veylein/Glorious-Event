import React from 'react'
import portfolio from '../../content/portfolio.json'

export default function Portfolio(){
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <p className="muted">A selection of past events — click to enlarge.</p>
        <div className="gallery">
          {portfolio.items.map((item, i) => (
            <figure key={i} className="gallery-item">
              <img src={item.image} alt={item.alt} />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
