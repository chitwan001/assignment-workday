export enum FILTER_TYPE {
    MULTI_SELECT = "multi_select",
    SINGLE_SELECT = "single_select",
    SEARCH = "search"
}

export type TFilter = {
    type: FILTER_TYPE,
    id: string,
    placeholder: string,
    title: string,
    options?: TSelectOption[] | TGroupedSelectOption
}

export type TSelectOption = {
    key: string,
    value: string
}

export type TGroupedSelectOption = {
    [K: string]: {
        name: string,
        children: TSelectOption[]
    }
}

export type EventListener = {
    event: string,
    handler: (props: any) => any
}

export type TJob = {
    jdUid: string,
    jdLink: string,
    jobDetailsFromCompany: string,
    maxJdSalary: number,
    minJdSalary: number,
    salaryCurrencyCode: string,
    location: string,
    minExp: number,
    maxExp: number,
    jobRole: string
}

export type FilterSelectProps = Partial<Omit<TFilter, "type">>