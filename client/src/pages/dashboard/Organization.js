import moment from 'moment';
import React,{useState,useEffect} from 'react'
import Layouts from '../../components/Shared/Layout/Layouts'
import API from '../../services/Api'

const Organization = () => {

        const [data,setData] = useState([]);
    const getOrganization = async()=>{
        try {
            const {data} = await API.get('/inventory/get-organization');
            console.log("data inside get organization function is: ", data);
            if(data?.status){
                setData(data?.organizations)
            }

        } catch (error) {
            console.log(error);
        }
      



    }

    useEffect(()=>{
        getOrganization();
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
          <td>{record.organizationName}</td>
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

export default Organization
