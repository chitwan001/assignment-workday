import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {createRef, useCallback, useEffect, useRef, useState} from "react";
import {incrementOffset, updateJobs} from "../../store/jobs-slice";
import JobCard from "./JobCard";
import axios from "axios";
import {TJob} from "../../types";
import Loader from "../Loader";

export default function Jobs() {
    const jobs = useSelector((state: RootState) => state.jobs)
    const loading = useRef(true)
    const [loaderShown, setLoaderShown] = useState(loading.current)

    const dispatch = useDispatch()

    const loaderRef = createRef<HTMLDivElement>()

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0]
        if (target.isIntersecting && !loading.current) {
            dispatch(incrementOffset())
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loaderRef.current) observer.observe(loaderRef.current);
        else observer.disconnect()
    }, [handleObserver]);

    useEffect(() => {
        loading.current = true
        axios.post("getSampleJdJSON", {
            limit: 10,
            offset: jobs.offset
        }).then((res) => {
            let data = res.data as {
                jdList: TJob[],
            }
            dispatch(updateJobs(data.jdList))
            loading.current = false
        })

    }, [jobs.offset]);

    useEffect(() => {
        setLoaderShown(loading.current)
    }, [loading.current]);

    return (
        <Grid sx={{
            display: "flex",
            flexFlow: "wrap",
            width: "100%",
            padding: "24px",
        }}>

            <Grid sx={{
                display: "flex",
                flexFlow: "wrap",
            }}>

                {
                    jobs.jobs.map((job, index) => (
                        <JobCard key={index} location={job.location} role={job.jobRole}
                                 currencyCode={job.salaryCurrencyCode} maxJDSalary={job.maxJdSalary}
                                 minJDSalary={job.minJdSalary}/>
                    ))
                }

            </Grid>

            {
                loaderShown && (
                    <div style={{
                        margin: "auto"
                    }}>
                        <Loader/>
                    </div>
                )
            }

            <div ref={loaderRef}/>

        </Grid>
    )
}