import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const grocerylistSlice = createSlice({
    name: "grocerylist",
    initialState: {
        grocerylist: [],
        loading: false,
    },
    reducers: {
        setGrocerylist: (state, action) => {
            state.grocerylist = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setGrocerylist, setLoading } = grocerylistSlice.actions
export default grocerylistSlice.reducer


export const fetchGrocerylist = ()=> {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const res= await axios.get("/api/home/grocery-list")
            if (res.data.success === true) {
                dispatch(setGrocerylist(res.data.data))
            }
            dispatch(setLoading(false))
        } catch (error) {
          console.log(error)
          dispatch(setLoading(false))
        }
        finally{
            dispatch(setLoading(false))
        }
    }

}
