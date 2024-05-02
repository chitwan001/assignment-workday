import {Box, useTheme} from "@mui/material";
import {FILTER_TYPE, FilterSelectProps, TFilter} from "../../../types";
import MultiSelect from "../../Form/Select/MultiSelect";

function RenderFilters({type, ...others}: { type: TFilter["type"] } & FilterSelectProps) {
    switch (type) {
        case FILTER_TYPE.MULTI_SELECT:
            return (
                <MultiSelect {...others} placeholder={others.placeholder}/>
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
            marginRight: theme.spacing()
        }}>
            <RenderFilters {...others} type={type}/>
        </Box>
    )
}