import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/Api";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({role,email,password},{rejectWithValue})=>{
                try {
                    console.log("inside action",password)
                    const {data} = await API.post('/auth/login',{role,email,password});
                    console.log("after data variable inside action",data)
                    if(data.success){
                        localStorage.setItem('token',data.token)
                        console.log(data.message)
                        toast.success(data.message)
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