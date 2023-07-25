import React, { useState } from 'react'
import Form from '../../components/Shared/Forms/Form'
import {useSelector} from 'react-redux'
import Spinner from '../../components/Shared/Spinner'


const Login = () => {
  const [loadings,setLoading] = useState(false);
  const {loading,error,user} = useSelector(state=>state.auth) 
 
  //{error && <span>{alert(error)}</span>}
  
  if(loading){
    return <Spinner/>
  }
  
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
