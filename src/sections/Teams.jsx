import React from 'react'

export default function Teams() {
  return (
    <section name='team' id='team'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='team-top-text'>
              <h3>MEET OUR AMAZING TEAM</h3>
              <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
            </div>
          </div>
        </div>

        <div className='row team-slider'>
          <div className='col-lg-3'>
            <div className='team-member'>
              <div className='card team-card'>
                <img
                  src='img/man1.jpg'
                  className='card-img-top'
                  alt='man image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>SEMF UCUK</h5>
                  <p className='card-text'>CEO & FOUNDER</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='team-member'>
              <div className='card team-card'>
                <img
                  src='img/man02.jpg'
                  className='card-img-top'
                  alt='man image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>DIK ADALIN</h5>
                  <p className='card-text'>ENGINEERING</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='team-member'>
              <div className='card team-card'>
                <img
                  src='img/man3.jpg'
                  className='card-img-top'
                  alt='man image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>JENG KOL</h5>
                  <p className='card-text'>DESIGNER</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='team-member'>
              <div className='card team-card'>
                <img
                  src='img/man4.jpg'
                  className='card-img-top'
                  alt='man image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>PET ROMAK</h5>
                  <p className='card-text'>MARKETING</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-3'>
            <div className='team-member'>
              <div className='card team-card'>
                <img
                  src='img/man5.jpg'
                  className='card-img-top'
                  alt='man image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>PET ROMAK</h5>
                  <p className='card-text'>MARKETING</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='team-bottom-text'>
              <p>Become part of our dream team, let’s join us !</p>
              <a href='#'>WE ARE HIRING</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
