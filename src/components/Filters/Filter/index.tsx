import {Box, useTheme} from "@mui/material";
import {FILTER_TYPE, FilterSelectProps, TFilter} from "../../../types";
import MultiSelect from "../../Form/Select/MultiSelect";
import SingleSelect from "../../Form/Select/SingleSelect";
import Search from "../../Form/Search";

function RenderFilters({type, ...others}: { type: TFilter["type"] } & FilterSelectProps) {
    switch (type) {
        case FILTER_TYPE.MULTI_SELECT:
            return (
                <MultiSelect {...others} placeholder={others.placeholder}/>
            )
        case FILTER_TYPE.SINGLE_SELECT:
            return (
                <SingleSelect {...others} placeholder={others.placeholder}/>
            )
        case FILTER_TYPE.SEARCH:
            return (
                <Search {...others} placeholder={others.placeholder}/>
            )
        default:
            return (
                <></>
            )
    }
}

export default function Filter({id, type, ...others}: TFilter) {
    const theme = useTheme()
    return (
        <Box id={'filter-' + id} sx={{
            marginY: theme.spacing(0.5),
            marginRight: theme.spacing(),
            display: "flex",
            flexDirection: "column",
            alignSelf: "end",
        }}>
            <RenderFilters {...others} type={type}/>
        </Box>
    )
}