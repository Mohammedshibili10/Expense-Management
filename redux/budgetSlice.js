import axios from "axios"
import { createSlice } from "@reduxjs/toolkit"

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    budget: [],
    loading: false,
  },
  reducers: {
    setBudget: (state, action) => {
      state.budget = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setBudget, setLoading } = budgetSlice.actions
export default budgetSlice.reducer

export const fetchBudget = () => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const res = await axios.get("/api/home/budget")
      if (res.data.success) {
        dispatch(setBudget(res.data.data))
        console.log(res.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setLoading(false))
    }
  }
}
