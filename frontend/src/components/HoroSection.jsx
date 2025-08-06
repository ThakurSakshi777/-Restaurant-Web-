import React from 'react'
import Navebar from './Navebar'

const HoroSection = () => {
  return (
    <div className='heroSection' id='heroSection'>
        <Navebar/>
        <div className="container">
            <div className="banner">
                <div className="largBox">
                    <h1 className='title'> Delicious</h1>
                </div>
                <div className="combined_boxes">
                    <div className="imageBox">
                        <img src="/hero1.png" alt=" hero1" />
                    </div>
                    <div className="texAndLogo">
                        <div className="texWithSvg">
                            <h1 className='title'>Food</h1>
                            <h1 className='title dishes_title'> Dishes</h1>
                            <img src="/threelines.svg" alt="three" />
                        </div>
                        <img src="/logo.svg" alt="logo" className='logo' />
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="imageBox">
                    <img src="hero2.png" alt="hero" />
                </div>
                <h1 className='title dishes_title'> Dishes</h1>
            </div>
        </div>
    </div>
  )
}

export default HoroSection