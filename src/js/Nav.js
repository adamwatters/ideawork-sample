import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <a href="#"><img className='navbar-logo' src="img/logo.svg" alt="Sparta Plaesent"/></a>
        <div className='navbar-nav'>
          <a className='navbar-item' href="#">212.555.5555</a>
          <a className='navbar-item' href="#">Login</a>
          <a className='navbar-hamburger navbar-item' href="#"></a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;