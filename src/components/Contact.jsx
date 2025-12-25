import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>
        <p>Ready to plan something remarkable? Reach out via phone, email, or the contact form.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p><strong>Email:</strong> <a href="mailto:kacy@example.com">kacy@example.com</a></p>
            <p className="muted">Or connect on social: Instagram, Pinterest</p>
          </div>
          <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
            <label>
              Your name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
