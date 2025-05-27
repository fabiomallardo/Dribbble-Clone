import { useState } from 'react'
import './Carosello.css' 

const images = ['image1.webp', 'image2.webp', 'image3.webp', 'image4.webp']

function Carosello() {
  const [selected, setSelected] = useState(0)

  return (
    <div className='div-image'>
      <div className='div-image1'>
        <img
          className='image-princ'
          src={images[selected]}
        />
      </div>

      <div className='div-images'>
        {images.map((src, i) => (
          <img
            key={i}
            className={`image-four ${i === selected ? 'selected' : ''}`}
            src={src}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carosello
