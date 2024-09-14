import React from 'react'
import NetflixLogo from "../assets/netflixLogo.png"


const Header = () => {
  return (
    <div className='absolute w-full z-10 bg-gradient-to-b from-black'>
      <div className='w-[150px] m-2'>
        <img src={NetflixLogo} alt="" />
      </div>
    </div>
  )
}

export default Header
