import React from 'react'
import Form from '../../components/Shared/Forms/Form'

const Register = () => {
  return (
    <div>
      <div className='row g-0'>

        <div className='col-md-7 form-banner'>
          <img src='./assets/images/logo512.png' alt='React here'></img>
        </div>
        <div className='col-md-4 form-container'>

      <Form submitBtn={"Register"} formTitle={"Register Page"} formType={'register'} />

        </div>
      </div>
    </div>
  )
}

export default Register
