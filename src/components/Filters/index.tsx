import {Box, useTheme} from "@mui/material";
import {FILTER_TYPE, TFilter} from "../../types";
import Filter from "./Filter";

const allFilters: TFilter[] = [
    {
        id: 'roles',
        type: FILTER_TYPE.MULTI_SELECT,
        placeholder: 'Roles',
        options: {
            engineering: {
                name: "ENGINEERING",
                children: [
                    {
                        key: "frontend",
                        value: "Frontend"
                    },
                    {
                        key: "backend",
                        value: "Backend"
                    },
                    {
                        key: "fullstack",
                        value: "Fullstack"
                    },
                    {
                        key: "ios",
                        value: "iOS"
                    },
                    {
                        key: "android",
                        value: "Android"
                    },
                    {
                        key: "devops",
                        value: "DevOps"
                    }
                ]
            },
            design: {
                name: "DESIGN",
                children: [
                    {
                        key: "designer",
                        value: "Designer"
                    },
                    {
                        key: "graphicdesigner",
                        value: "Graphic Designer"
                    }
                ]
            },
            product: {
                name: "PRODUCT",
                children: [
                    {
                        key: "productmanager",
                        value: "Product Manager"
                    }
                ]
            },
            operations: {
                name: "OPERATIONS",
                children: [
                    {
                        key: "operationsmanager",
                        value: "Operations Manager"
                    }
                ]
            }
        }
    },
    {
        id: 'employees',
        type: FILTER_TYPE.MULTI_SELECT,
        placeholder: 'Number of Employees',
        options: [
            {
                key: "1-10",
                value: "1 - 10 Employees"
            }
        ]
    },
    {
        id: 'experience',
        type: FILTER_TYPE.SINGLE_SELECT,
        placeholder: 'Experience',
        options: [
            {key: "1", value: "1"},
            {key: "2", value: "2"},
            {key: "3", value: "3"},
            {key: "4", value: "4"},
            {key: "5", value: "5"},
            {key: "6", value: "6"},
            {key: "7", value: "7"},
            {key: "8", value: "8"},
            {key: "9", value: "9"},
            {key: "10", value: "10"}
        ]
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
                        <Filter options={others.options} placeholder={others.placeholder} id={id} type={type}
                                key={index}/>
                    ))
                }
            </div>
        </Box>
    )
}

export default Filters