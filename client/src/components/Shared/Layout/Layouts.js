import React from 'react'
import Header from './Header'
import SidebarMenu from './SidebarMenu'

const Layouts = ({children}) => {
  return (
    <>
    <Header/>
    <div className='row'> 
    <div className='col-md-3'>

        <SidebarMenu/>
    </div>

    <div className='col-md-9'>
        {children}
        </div>
     </div> 
    
        
    </>
      
  )
}

export default Layouts
