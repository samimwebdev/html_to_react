import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-reveal'
import styled, { css } from 'styled-components'
import SectionWrapper from '../styles/SectionWrapper'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

//nesting
//hover
//media query (responsive)
const AboutWrapper = styled(SectionWrapper)`
  a {
    border: 1px solid #00e0d0;
    color: #00e0d0;
    padding: 16px 30px;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
    &:hover {
      background-color: palegoldenrod;
      color: #fff;
      transform: 1.2;
    }
  }
  @media screen and (max-width: 600px) {
    a {
      display: none;
    }
  }
`

// const StyledP = styled.p``
// const Wrapper = styled.section`
//   a {
//     border: 1px solid #00e0d0;
//     color: #00e0d0;
//     padding: 16px 30px;
//     font-weight: bold;
//     display: inline-block;
//     margin-top: 10px;
//   }
// `

const variants = {
  hidden: {
    opacity: 0,
    x: 100,
    originX: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}
export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <AboutWrapper name='about-part' id='about-part'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='about-img text-center'>
              <Slide duration={1000} left>
                <img
                  src='img/big-logo.png'
                  alt='image not found'
                  className='img-fluid'
                />
              </Slide>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='about-text'>
              <motion.h2
                ref={ref}
                variants={variants}
                initial='hidden'
                animate={controls}
              >
                OUR STORY
              </motion.h2>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus
              </p>
              <p>
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                eu in elit. ClassName aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </p>
              <a href='#'>LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
}
