import React from 'react'
import Form from '../../components/Shared/Forms/Form'

const Login = () => {
  return (
    <div>
      <div className='row'>

        <div className='col-md-7 form-banner'>
          <img src='./assets/images/logo512.png' alt='React here'></img>
        </div>
        <div className='col-md-4 form-container'>

      <Form submitBtn={"Login"} formTitle={"Login Page"} formType={'login'}/>

        </div>
      </div>
    </div>
  )
}

export default Login
