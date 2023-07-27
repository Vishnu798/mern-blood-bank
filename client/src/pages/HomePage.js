import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import Layouts from '../components/Shared/Layout/Layouts'
import Modal from '../components/Shared/modals/Modal'
import Spinner from '../components/Shared/Spinner'
import API from '../services/Api'
import moments from 'moment';


const HomePage = () => {
  const {loading,error} = useSelector(state=>state.auth)
  const [data,setData] = useState([]);

  const getBloodRecords = async()=>{
    try {
      const {data} = await API.get('/get-inventory');
      if(data?.success){
        console.log(data);
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getBloodRecords();
  },[])
  return (
    <Layouts>
     
      {error && <span>{alert(error)} </span>}
      {loading?<Spinner/>:
     
        <>
        <div className='container'>
        <h4 className='ms-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{cursor:"pointer"}}>
          <i className='fa-solid fa-plus text-success py-4'></i>
         &nbsp; Add Inventory</h4>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">bloodGroup</th>
      <th scope="col">inventoryType</th>
      <th scope="col">Quantity</th>
      <th scope="col">Donar Email</th>
      <th scope="col">Date</th>

    </tr>
  </thead>
  <tbody>
    {data.map((record)=>{
      return (<tr key={record._id}>
      <td>{record.bloodGroup}</td>
      <td>{record.inventoryType}</td>
      <td>{record.quantity}</td>
      <td>{record.email}</td>
      <td>{moments(record.createdAt).format("DD/MM/YY hh:mm:A" )}</td>
    </tr>)
    })}
    
    
  
  </tbody>
</table>

         <Modal/>
         </div>
        </>
        
         
    
      
      }
      </Layouts>
  )
}

export default HomePage
