
import moment from 'moment';
import React,{useState,useEffect} from 'react'
import Layouts from '../../components/Shared/Layout/Layouts'
import API from '../../services/Api'

const Donar = () => {
  const[data,setData] =useState([]);

  const getDonarsData = async()=>{

    try {
      const {data} = await API.get('/inventory/get-donars')
      if(data?.status){

        setData(data?.donars);
        console.log("data for donars is inside donars is : :",data);
      }
    
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    getDonarsData();
  },[])
  return (
    <Layouts>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Date</th>
     

    </tr>
  </thead>
  <tbody>
    {data.map((record)=>{
      return (<tr key={record._id}>
      <td>{record.name || record.organizationName + "(ORG)"}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
      
      <td>{moment(record.createdAt).format("DD/MM/YY hh:mm:A" )}</td>
    </tr>)
    })}
    
    
  
  </tbody>
</table>
    </Layouts>
  )
}

export default Donar
