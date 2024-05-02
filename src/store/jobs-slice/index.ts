import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {TJob} from "../../types";


const initialState: TJob[] = []

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        getJobs
    },
})
export const {} = jobsSlice.actions
export default jobsSlice.reducer