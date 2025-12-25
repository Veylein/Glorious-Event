import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Kacy Thomas — A Glorious Event</p>
        <nav>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
