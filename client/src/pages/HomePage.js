import React from 'react'
import { useSelector } from 'react-redux'
import Layouts from '../components/Shared/Layout/Layouts'
import Modal from '../components/Shared/modals/Modal'
import Spinner from '../components/Shared/Spinner'


const HomePage = () => {
  const {loading,error} = useSelector(state=>state.auth)
  return (
    <Layouts>
     
      {error && <span>{alert(error)} </span>}
      {loading?<Spinner/>:
     
        <>
        <h4 className='ms-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{cursor:"pointer"}}>
          <i className='fa-solid fa-plus text-success py-4'></i>
         &nbsp; Add Inventory</h4>
         <Modal/>
        </>
        
         
    
      
      }
      </Layouts>
  )
}

export default HomePage
