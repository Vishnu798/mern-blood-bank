
import React,{useState,useEffect} from 'react'
import Layouts from '../../components/Shared/Layout/Layouts'
import API from '../../services/Api'

const Donar = () => {
  const[data,setData] =useState();

  const getDonarsData = async()=>{

    try {
      const {data} = await API.get('/inventory/get-donars')
    console.log("data for donars is : :",data);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    getDonarsData();
  },[])
  return (
    <Layouts>
      <h1>Donar</h1>
    </Layouts>
  )
}

export default Donar
