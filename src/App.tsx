import './App.css'
import Filters from "./components/Filters";
import {Grid} from "@mui/material";

function App() {

  return (
    <div>
        <Filters/>
        <Grid sx={{
            width: "100vw",
            height: "100vh"
        }}/>
    </div>
  )
}

export default App
