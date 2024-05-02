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
            state.jobs.push(...action.payload)
        },
        incrementOffset: (state) => {
            state.offset += 1
        },
        filterByExperience: (state, action: PayloadAction<number>) => {
            state.jobs = state.jobs.filter((job) => {
                let allowed = false;
                if (job.minExp && job.minExp >= action.payload) allowed = true
                else if (job.maxExp && job.maxExp <= action.payload) allowed = true

                return allowed
            })
        },
        filterByLocation: (state, action: PayloadAction<string[]>) => {
            state.jobs = state.jobs.filter((job) => {
                if (action.payload.includes(job.location)) return true
                else if (action.payload.includes("inoffice")) return job.location !== "remote"
                return false
            })
        },
        filterByMinSalary: (state, action: PayloadAction<number>) => {
            state.jobs = state.jobs.filter((job) => {
                return !!(job.minJdSalary && job.minJdSalary >= action.payload)
            })
        },
        filterByRoles: (state, action: PayloadAction<string[]>) => {
            state.jobs = state.jobs.filter((job) => {
                return action.payload.includes(job.jobRole)
            })
        }
    },
})
export const {
    updateJobs,
    incrementOffset,
    filterByExperience,
    filterByLocation,
    filterByMinSalary,
    filterByRoles
} = jobsSlice.actions
export default jobsSlice.reducer