export enum FILTER_TYPE {
    MULTI_SELECT = "multi_select",
    SINGLE_SELECT = "single_select",
    SEARCH = "search"
}

export type TFilter = {
    type: FILTER_TYPE,
    id: string,
    placeholder: string
}

export type FilterSelectProps = Partial<Omit<TFilter, "type">>