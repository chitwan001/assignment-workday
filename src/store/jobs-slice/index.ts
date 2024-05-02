import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TJob} from "../../types";


const initialState: {
    jobs: TJob[],
    offset: number,
    filters: {
        roles?: string[],
        experience?: number,
        remote?: string[],
        minimumSalary?: number
    }
} = {
    jobs: [],
    offset: 0,
    filters: {
        roles: undefined,
        experience: undefined,
        remote: undefined,
        minimumSalary: undefined
    }
}

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        updateJobs: (state, action: PayloadAction<TJob[]>) => {
            state.jobs.push(...action.payload)
            if (state.filters.experience) {
                state.jobs = state.jobs.filter((job) => {
                    let allowed = false;
                    if (job.minExp && state.filters.experience && job.minExp >= state.filters.experience) allowed = true
                    else if (job.maxExp && state.filters.experience && job.maxExp <= state.filters.experience) allowed = true
                    return allowed
                })
            }
            if (state.filters.roles) {
                state.jobs = state.jobs.filter((job) => {
                    return state.filters.roles && state.filters.roles.includes(job.jobRole)
                })
            }
            if (state.filters.remote) {
                state.jobs = state.jobs.filter((job) => {
                    if (state.filters.remote && state.filters.remote.includes(job.location)) return true
                    else if (state.filters.remote && state.filters.remote.includes("inoffice")) return job.location !== "remote"
                    return false
                })
            }
            if (state.filters.minimumSalary) {
                state.jobs = state.jobs.filter((job) => {
                    return !!(job.minJdSalary && state.filters.minimumSalary && job.minJdSalary >= state.filters.minimumSalary)
                })
            }
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
            state.filters.experience = action.payload
        },
        filterByLocation: (state, action: PayloadAction<string[]>) => {
            state.jobs = state.jobs.filter((job) => {
                if (action.payload.includes(job.location)) return true
                else if (action.payload.includes("inoffice")) return job.location !== "remote"
                return false
            })
            state.filters.remote = action.payload
        },
        filterByMinSalary: (state, action: PayloadAction<number>) => {
            state.jobs = state.jobs.filter((job) => {
                return !!(job.minJdSalary && job.minJdSalary >= action.payload)
            })
            state.filters.minimumSalary = action.payload
        },
        filterByRoles: (state, action: PayloadAction<string[]>) => {
            state.jobs = state.jobs.filter((job) => {
                return action.payload.includes(job.jobRole)
            })
            state.filters.roles = action.payload
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