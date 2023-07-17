import React, { useState } from 'react'
import Input from './Input';

const Form = (submitBtn) => {

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  return (
    <div>
      <form>
        <h1 className='text-center'>Login</h1>
        <hr/>
        
        <Input 
  inputType={"email"}
  labelFor={"forEmail"}
  labelText={"Email"}
  name={"email"}
  onChange={(e)=>setEmail(e.target.value)}
  value={email}

  />

<Input 
  inputType={"password"}
  labelFor={"forPassword"}
  labelText={"Password"}
  name={"password"}
  onChange={(e)=>setPassword(e.target.value)}
  value={password}

  />

  {/* <div className='d-flex'>
    <Button className="btn btn-primary " type="submit">{submitBtn}</Button>
  </div> */}

      </form>
    </div>
  )
}

export default Form
