import {FILTER_TYPE, TFilter} from "../types";

export const allFilters: TFilter[] = [
    {
        id: 'roles',
        type: FILTER_TYPE.MULTI_SELECT,
        placeholder: 'Roles',
        title: "Roles",
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
        title: "No Of Employees",
        options: [
            {
                key: "1-10",
                value: "1 - 10"
            },
            {
                key: "11-20",
                value: "11 - 20"
            },
            {
                key: "21-50",
                value: "21 - 50"
            },
            {
                key: "51-100",
                value: "51 - 100"
            },
            {
                key: "101-200",
                value: "101 - 200"
            },
            {
                key: "201-500",
                value: "201 - 500"
            },
            {
                key: "500",
                value: "500+"
            }
        ]
    },
    {
        id: 'experience',
        type: FILTER_TYPE.SINGLE_SELECT,
        placeholder: 'Experience',
        title: "Experience",
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
    },
    {
        id: 'remote',
        type: FILTER_TYPE.MULTI_SELECT,
        placeholder: 'Remote',
        title: "Remote",
        options: [
            {key: "remote", value: "Remote"},
            {key: "hybrid", value: "Hybrid"},
            {key: "inoffice", value: "In-Office"}
        ]
    },
    {
        id: 'minimumSalary',
        type: FILTER_TYPE.SINGLE_SELECT,
        placeholder: 'Minimum Base Pay Salary',
        title: "Min Base Pay",
        options: [
            {key: 0, value: "0L"},
            {key: 10, value: "10L"},
            {key: 20, value: "20L"},
            {key: 30, value: "30L"},
            {key: 40, value: "40L"},
            {key: 50, value: "50L"},
            {key: 60, value: "60L"},
            {key: 70, value: "70L"},
        ]
    },
    {
        id: "search",
        type: FILTER_TYPE.SEARCH,
        placeholder: "Search Company Name",
        title: "Company Name",
    }
]