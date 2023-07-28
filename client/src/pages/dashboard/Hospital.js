import moment from 'moment';
import React,{useState,useEffect} from 'react'
import Layouts from '../../components/Shared/Layout/Layouts'
import API from '../../services/Api'

const Hospital = () => {    
        const [data,setData] = useState([]);


    const getHospitalRecords = async()=>{

        try {
            const {data} = await API.get('/inventory/get-hospital');
            if(data?.status){
                setData(data?.hospitals)
            }
        console.log("data inside getHospitalrecords function is : ",data)
        } catch (error) {
            console.log("error inside get hospital function");
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getHospitalRecords();
    },[])
    return (
        <Layouts>
              <table className="table">
      <thead>
        <tr>
          <th scope="col">Hospital Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          
          <th scope="col">Phone</th>
          <th scope="col">Date</th>
         
    
        </tr>
      </thead>
      <tbody>
        {data.map((record)=>{
          return (<tr key={record._id}>
          <td>{record.hospitalName}</td>
          <td>{record.email}</td>
          <td>{record.address}</td>

          <td>{record.phone}</td>
          
          <td>{moment(record.createdAt).format("DD/MM/YY hh:mm:A" )}</td>
        </tr>)
        })}
        
        
      
      </tbody>
    </table>
        </Layouts>
      )
}

export default Hospital
