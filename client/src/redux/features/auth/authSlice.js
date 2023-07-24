import {createSlice} from  '@reduxjs/toolkit'
import { getCurrentuser, userLogin,userRegister} from './authAction';


const token  = localStorage.getItem('token')?localStorage.getItem('token'):null;
const initialState = {
    token,
    error:null,
    loading:false,
    user:null
    

}

const authSlice = createSlice({
 name:"auth",
 initialState:initialState,
 reducers:{},
 extraReducers:(builder)=>{
    builder.addCase(userLogin.pending,(state)=>{
        state.loading = true;
        state.error = null
    });
    builder.addCase(userLogin.fulfilled,(state,{payload})=>{
        state.loading = false;
        state.user = payload.existingUser;
        state.token = payload.token;
    });

    builder.addCase(userLogin.rejected,(state,{payload})=>{
        state.loading = false;
        state.error=payload;
    });

    //user register

    builder.addCase(userRegister.pending,(state)=>{
        state.loading = true;
        state.error = null
    });
    builder.addCase(userRegister.fulfilled,(state,{payload})=>{
        state.loading = false;
        state.user = payload.user;
       
    });

    builder.addCase(userRegister.rejected,(state,{payload})=>{
        state.loading = false;
        state.error=payload;
    });

    //current User

    builder.addCase(getCurrentuser.pending,(state)=>{
        state.loading = true;
        state.error = null
    });
    builder.addCase(getCurrentuser.fulfilled,(state,{payload})=>{
        state.loading = false;
        state.user = payload.user;
       
    });

    builder.addCase(getCurrentuser.rejected,(state,{payload})=>{
        state.loading = false;
        state.error=payload;
    });
 },

})

export default authSlice;