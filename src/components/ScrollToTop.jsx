import React from 'react'

import { animateScroll as scroll } from 'react-scroll'
export default function ScrollToTop() {
  return (
    <img
      src='img/scroll.png'
      onClick={() => scroll.scrollToTop()}
      className='scrollTop'
    />
  )
}
