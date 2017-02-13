import React from 'react'

const Footer = () => {
  const igLink = <a href="#">Instagram</a>;
  const fbLink = <a href="#">Facebook</a>;
  const twLink = <a href="#">Twitter</a>;
  return (
    <footer className='footer'>
      <span>© 2017 — Sparta Plaesent - {igLink} - {fbLink} - {twLink}</span>
    </footer>
  )
}

export default Footer;