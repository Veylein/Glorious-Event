import React from 'react'

const quotes = [
  {text: 'Kacy made our wedding flawless — every detail was magical.', author: '— A. & J.'},
  {text: 'Professional, calm, and brilliant. Highly recommend.', author: '— C. Rogers'},
  {text: 'Our corporate gala felt effortless — thanks to her team.', author: '— M. Patel'}
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="section alt">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials">
          {quotes.map((q,i)=> (
            <blockquote key={i} className="quote">
              <p>“{q.text}”</p>
              <footer>{q.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
