import { TCredential } from "@/types/credentials.type";
import { createSlice } from "@reduxjs/toolkit";


const initialState: TCredential={
    user: null,
    token:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser: (state, action)=>{
            const {user, token} = action.payload;
            state.user = user;
            state.token = token
        },
        logout:(state)=>{
            state.user = null;
            state.token = null
        }
    }
})

export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;