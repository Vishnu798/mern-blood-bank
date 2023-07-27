import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/Api";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({role,email,password},{rejectWithValue})=>{
                try {
                   // console.log("inside action",password)
                    const {data} = await API.post('/auth/login',{role,email,password});
                  //  console.log("after data variable inside action",data)
                    if(data.success){
                        localStorage.setItem('token',data.token)
                   //     console.log(data.message)
                        //toast.success(data.message)
                       
                        window.location.replace('/')
                    } 
                   return data;
                } catch (error) {
                    if(error.response && error.response.data.message){
                        return rejectWithValue(error.response.data.message)
                    }
                    else{
                        return rejectWithValue(error.message)
                    }
                }
    }
    )

    //user register

    export const userRegister = createAsyncThunk(
        'auth/register',
        async({ email,
            password,
            role,
            name,
            organizationName,
            hospitalName,
            website,
            address,
            phone},{rejectWithValue})=>{
               
                try {
                   // console.log("here inside userRegister")
                    const {data} =  await API.post('/auth/register',{email,
                        password,
                        role,
                        name,
                        organizationName,
                        hospitalName,
                        website,
                        address,
                        phone});
                     //   console.log("register data is : ",data);
                        if(data.success){
                           // console.log("register data is : ",data);
                            //toast.success(data.message)
                            alert(data.message)
                            window.location.replace('/login')
                        }
                        return data;
                } catch (error) {
                    if(error.response && error.response.data.message){
                        return rejectWithValue(error.response.data.message)
                    }
                    else{
                        return rejectWithValue(error.message)
                    }   
                }
        }
    )

    //get current user

    export const getCurrentuser= createAsyncThunk(
        'auth/current-user',
        async({rejectWithValue})=>{
            try {
                const res = await API.get('/auth/current-user');
              //  console.log("data for current user is :",res)
                if(res?.data){
                    //console.log("data for current user is :",res)
                    return res?.data;
                }
               // console.log("data is not defined inside auth action ");
            } catch (error) {
                if(error.response && error.response.data.message){
                    return rejectWithValue(error.response.data.message)
                }
                else{
                    return rejectWithValue(error.message)
                } 
            }
        }
    )