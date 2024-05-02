import './App.css'
import Filters from "./components/Filters";
import Jobs from "./components/Jobs";
import {useEffect} from "react";
import {setAxiosDefault} from "./axiosDefault.ts";

function App() {

    useEffect(() => {
        setAxiosDefault()
    }, []);

    return (
        <div>
            <Filters/>
            <Jobs/>
        </div>
    )
}

export default App
