import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
        token: null

    },
    reducers:{
        setLoading:(state,action)=>{
            state.loading=action.payload
        },
        setUser:(state,action)=>{
            state.user=action.payload
        },
        logout:(state)=>{
            state.user=null
            state.token=null
            localStorage.removeItem("token")
        }
    }
})
export const {setLoading,setUser,logout}=authSlice.actions;
export default authSlice.reducer