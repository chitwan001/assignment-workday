import {Box, useTheme} from "@mui/material";
import Filter from "./Filter";
import {allFilters} from "../../constants";


const Filters = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            paddingY: theme.spacing(2),
            paddingX: theme.spacing(7)
        }}>
            <div className={'jobs-filters-root'}>
                {
                    allFilters.map(({id, type, ...others}, index) => (
                        <Filter {...others} id={id} type={type}
                                key={index}/>
                    ))
                }
            </div>
        </Box>
    )
}

export default Filters