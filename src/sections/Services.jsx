import React from 'react'
import { Zoom, Fade } from 'react-reveal'

export default function Services() {
  return (
    <section name='section-part' id='section-part'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <Zoom duration={1000}>
              <div className='service-head text-center'>
                <h2>EXPERTISE</h2>
                <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
              </div>
            </Zoom>
          </div>
        </div>

        <div className='row'>
          <Fade duration={1000} delay={500} cascade>
            <div className='col-lg-4'>
              <div className='service-text text-center'>
                <img src='img/icon1.png' alt='icon' className='img-fluid' />
                <h5>WEB DESIGN & DEVELOPMENT</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet Aenean.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-text text-center'>
                <img src='img/icon2.png' alt='icon' className='img-fluid' />
                <h5>BRANDING IDENTITY</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet Aenean.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-text text-center'>
                <img src='img/icon3.png' alt='icon' className='img-fluid' />
                <h5>MOBILE APP</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet Aenean.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-text text-center'>
                <img src='img/icon4.png' alt='icon' className='img-fluid' />
                <h5>SEARCH ENGINE OPTIMIZATION</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet Aenean.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-text text-center'>
                <img src='img/icon5.png' alt='icon' className='img-fluid' />
                <h5>GAME DEVELOPMENT</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet Aenean.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-text text-center'>
                <img src='img/icon6.png' alt='icon' className='img-fluid' />
                <h5>MADE WITH LOVE</h5>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet Aenean.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
