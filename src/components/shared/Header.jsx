import React from 'react'
import { Link } from 'react-scroll'

export default function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light stciky-top'>
      <div className='container ms'>
        <a className='navbar-brand' href='#'>
          <img src='img/main-logo.png' alt='main-logo' className='img-fluid' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link '
                activeClass='active'
                aria-current='page'
                to='banner-part'
                smooth={true}
                spy={true}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link '
                activeClass='active'
                aria-current='page'
                to='about-part'
                smooth={true}
                spy={true}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='video-part'
                spy={true}
                smooth={true}
              >
                VEDIO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link '
                activeClass='active'
                aria-current='page'
                to='section-part'
                smooth={true}
                spy={true}
              >
                EXPERTISE
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link '
                activeClass='active'
                aria-current='page'
                to='team'
                smooth={true}
                spy={true}
              >
                TEAMS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link '
                activeClass='active'
                aria-current='page'
                to='project'
                smooth={true}
                spy={true}
              >
                WORKS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link '
                activeClass='active'
                aria-current='page'
                to='team-two'
                smooth={true}
                spy={true}
              >
                People Say
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link '
                activeClass='active'
                aria-current='page'
                to='contact'
                smooth={true}
                spy={true}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
