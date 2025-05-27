import React, { useState } from 'react'
import ExploreMenu from "./ExploreMenu.jsx"
import HireMenu from "./HireMenu.jsx"


function MobileMenu() {
  const [showExplore, setShowExplore] = useState(false)
  const [showHire, setShowHire] = useState(false)


  return (
    <div className="mobile-menu">
      <button
        className="category-button"
        onClick={() => setShowExplore(!showExplore)}
      >
        Explore ▾
      </button>
      {showExplore && <ExploreMenu />}

      <button
        className="category-button"
        onClick={() => setShowHire(!showHire)}
      >
        Hire a Designer ▾
      </button>
      {showHire && <HireMenu />}

      <button className="category-button">Find Jobs</button>
      <button className="category-button">Blog</button>

      
    </div>
  )
}

export default MobileMenu
