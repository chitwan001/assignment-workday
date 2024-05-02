import './App.css'
import Filters from "./components/Filters";
import Jobs from "./components/Jobs";
import {setAxiosDefault} from "./axiosDefault.ts";

function App() {
    setAxiosDefault()

    return (
        <div>
            <Filters/>
            <Jobs/>
        </div>
    )
}

export default App
