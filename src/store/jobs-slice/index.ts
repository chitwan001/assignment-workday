import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TJob} from "../../types";


const initialState: {
    jobs: TJob[],
    offset: number
} = {
    jobs: [],
    offset: 0
}

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        updateJobs: (state, action: PayloadAction<TJob[]>) => {
            console.log(action.payload)
            state.jobs.push(...action.payload)
        },
        incrementOffset: (state) => {
            state.offset += 1
        }
    },
})
export const {updateJobs, incrementOffset} = jobsSlice.actions
export default jobsSlice.reducer