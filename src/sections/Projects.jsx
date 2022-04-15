import React, { useEffect } from 'react'
import Venobox from 'venobox'
export default function Projects() {
  useEffect(() => {
    new Venobox({
      spinner: 'wave',
    })
  }, [])
  return (
    <section name='project' id='project'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
            <div className='project-part-left'>
              <h3>OUR WORKS</h3>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
            <div className='project-part-right'>
              <p>
                See All Project in dribbble
                <i className='fas fa-chevron-right'></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big1-man.jpg'
              >
                <img
                  src='img/man1.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big2-man.jpg'
              >
                <img
                  src='img/man02.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big3-man.jpg'
              >
                <img
                  src='img/man3.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big4-man.jpg'
              >
                <img
                  src='img/man4.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big5-man.jpg'
              >
                <img
                  src='img/man5.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big6-man.jpg'
              >
                <img
                  src='img/man6.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big5-man.jpg'
              >
                <img
                  src='img/man5.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big6-man.jpg'
              >
                <img
                  src='img/man6.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big4-man.jpg'
              >
                <img
                  src='img/man4.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big3-man.jpg'
              >
                <img
                  src='img/man3.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big2-man.jpg'
              >
                <img
                  src='img/man02.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-6 p-0'>
            <div className='projet-img'>
              <a
                className='venobox'
                data-gall='gallery01'
                href='img/big1-man.jpg'
              >
                <img
                  src='img/man1.jpg'
                  alt='image not found'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='project-btn text-center'>
              <a href='#'>LOAD MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
