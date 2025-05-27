import './Navbar.css'
import { useState, useEffect } from 'react'
import DropdownButton from './DropdownButton.jsx'
import DropdownMenu from './DropdownMenu.jsx'
import ExploreMenu from './ExploreMenu.jsx'
import HireMenu from './HireMenu.jsx'
import MobileMenu from './MobileMenu.jsx'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [mouse, setMouse] = useState(false)
  const [hire, setHire] = useState(false)
  

  const handleOpen = () => setOpen(!open)
  const handleMobileMenuOpen = () => setMobileMenuOpen(!mobileMenuOpen)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <div className='Navbar-menu'>


      {/* Hamburger menu */}
      <div className="left-section">
        <button
          className='hamburger-button'
          onClick={handleMobileMenuOpen}>
          <span className='bar bar-top'></span>
          <span className='bar bar-middle'></span>
          <span className='bar bar-bottom'></span>
        </button>

        {mobileMenuOpen && <MobileMenu />}

        {/* LogoDribbble */}
        <img src='Dribbble-Logo.jpg' className='img-nav' alt='Logo' />
      </div>
      {/* Search bar */}
      <form role='search' className='search-bar'>
        <input
          type='search'
          className='search-input'
          placeholder='What are you looking for?'
          aria-label='Search'
        />

        {/* Dropdown menu: Shots */}
        <div className='dropdown-wrapper'>
          <DropdownButton
            label='Shots'
            isOpen={open}
            onClick={handleOpen}
          />
          {open && <DropdownMenu />}
        </div>

        {/* Search button */}
        <button type='submit' className='search-button'>
          <svg width='20' height='20' className='DocSearch-Search-Icon' viewBox='0 0 20 20' aria-hidden='true'>
            <path
              d='M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z'
              stroke='currentColor'
              fill='none'
              fillRule='evenodd'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </form>

      <div className='list-wrapper'>

        {/* Explore section */}
        <div
          className='explore-wrapper'
          onMouseEnter={() => setMouse(true)}
          onMouseLeave={() => setMouse(false)}
        >
          <button type='button' className='category-button'>
            Explore ▾
          </button>
          {mouse && <ExploreMenu />}
        </div>

        {/* Hire section */}
        <div
          className='hire-wrapper'
          onMouseEnter={() => setHire(true)}
          onMouseLeave={() => setHire(false)}
        >
          <button type='button' className='category-button'>
            Hire a Designer ▾
          </button>
          {hire && <HireMenu />}
        </div>

        {/* Nav Links statici */}
        <button type='button' className='category-button'>Find Jobs</button>
        <button type='button' className='category-button'>Blog</button>
      </div>

      <div className='sign-wrapper'>
        <button type='button' className='category-button2'>Sign up</button>
      </div>

      <div className='login-wrapper'>
        <button type='button' className='category-button3'>Log in</button>
      </div>

    </div>
  )
}

export default Navbar
