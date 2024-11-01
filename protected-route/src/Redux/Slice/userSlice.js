import  {createSlice} from '@reduxjs/toolkit';

const InitialState={
    state:{
        isFetching:false,
    },
    user:{
        name:"Satya",
        isAuthenticated:true
    },
}


const userSlice = createSlice({
    name:"user",
    InitialState,
    reducers:{
        setIsFetching:(state)=>{
            state.state.isFetching=true;
        }
    }
})

export const {setIsFetching}=userSlice.actions;
export default userSlice.reducer;