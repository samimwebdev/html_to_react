import React from 'react'
import { Fade } from 'react-reveal'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('xnqwgdwy')

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <Fade duration={1000}>
      <section name='contact' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='contact-left'>
                <h3>GIVE US A GOOD NEWS</h3>

                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Name'
                    />
                    <ValidationError
                      prefix='Email'
                      field='name'
                      errors={state.errors}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      placeholder='Email'
                    />
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control'
                      id='exampleInputsubject1'
                      placeholder='Subject'
                    />
                    <ValidationError
                      prefix='Subject'
                      field='subject'
                      errors={state.errors}
                    />
                  </div>
                  <div className='mb-3'>
                    <textarea
                      name='message'
                      className='form-control'
                      rows='10'
                      placeholder='Your Massage'
                    ></textarea>
                    <ValidationError
                      prefix='Message'
                      field='message'
                      errors={state.errors}
                    />
                  </div>
                  <button
                    className='btn btn-outline-primary btn-lg'
                    type='submit'
                    disabled={state.submitting}
                  >
                    Submit
                  </button>
                  {/* <a href='#'>SUBMIT</a> */}
                </form>
              </div>
            </div>

            <div className='col-lg-5 ms-5'>
              <div className='contact-right'>
                <h3>OUR HAPPY CLIENT</h3>
              </div>
              <div className='row text-center'>
                <Fade delay={500} duration={2000} cascade>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo1.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo2.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo3.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo4.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo5.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo6.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo7.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 pb-5'>
                    <img
                      src='img/logo8.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <img
                      src='img/logo9.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <img
                      src='img/logo10.png'
                      alt='Logo not found'
                      className='img-fluid'
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
