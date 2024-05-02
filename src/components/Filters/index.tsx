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