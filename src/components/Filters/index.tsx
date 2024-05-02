import {Box, useTheme} from "@mui/material";
import {FILTER_TYPE, TFilter} from "../../types";
import Filter from "./Filter";

const allFilters: TFilter[] = [
    {
        id: 'roles',
        type: FILTER_TYPE.MULTI_SELECT,
        placeholder: 'Roles',
    },
    {
        id: 'employees',
        type: FILTER_TYPE.MULTI_SELECT,
        placeholder: 'Number of Employees',
    }
]

const Filters = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            padding: theme.spacing(2)
        }}>
            <div className={'jobs-filters-root'}>
                {
                    allFilters.map(({id, type, ...others}, index) => (
                        <Filter placeholder={others.placeholder} id={id} type={type} key={index}/>
                    ))
                }
            </div>
        </Box>
    )
}

export default Filters