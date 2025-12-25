import React from 'react'

const services = [
  {title: 'Full-Service Wedding Planning', desc: 'From venue selection to day-of coordination — flawless execution.'},
  {title: 'Corporate Events', desc: 'Brand-aligned, punctual, and polished events for any company size.'},
  {title: 'Private Parties & Celebrations', desc: 'Custom themes, distinctive details, and seamless delivery.'},
  {title: 'Design & Styling', desc: 'Elevated aesthetics with curated florals, lighting, and decor.'}
]

export default function Services(){
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Services</h2>
        <div className="grid services-grid">
          {services.map((s, i) => (
            <article key={i} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
