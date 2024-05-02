import BaseSelect from "../BaseSelect";
import {FilterSelectProps, TSelectOption} from "../../../../types";
import {useState} from "react";
import {styled} from "@mui/material";
import {Close} from "@mui/icons-material";

export default function MultiSelect(props: FilterSelectProps) {
    const [selectedOptions, setSelectedOptions] = useState<TSelectOption[]>([])

    const handleOptionSelect = (option: TSelectOption) => {
        setSelectedOptions([...selectedOptions, option])
    }

    const handleOptionDelete = (index: number) => {
        selectedOptions.splice(index, 1)
        setSelectedOptions([...selectedOptions])
    }

    const MultiSelectOption = styled("div")({
        display: 'flex',
        minWidth: "0px",
        backgroundColor: "rgb(230, 230, 230)",
        borderRadius: "2px",
        margin: "2px",
    })

    const MultiSelectValue = styled("span")({
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        borderRadius: "2px",
        color: "rgb(51, 51, 51)",
        fontSize: "12px",
        padding: "3px 3px 3px 6px",
    })

    const MultiSelectRemove = styled("div")({
        alignItems: "center",
        display: "flex",
        borderRadius: "2px",
        paddingLeft: "4px",
        paddingRight: "4px",
        fontSize: "12px",
    })

    const MultiOption = ({value, index}: { value: string, index: number }) => {
        return (
            <MultiSelectOption>
                <MultiSelectValue>
                    {value}
                </MultiSelectValue>
                <MultiSelectRemove onClick={() => {
                    handleOptionDelete(index)
                }}>
                    <Close style={{width: "14px", height: "14px"}}/>
                </MultiSelectRemove>
            </MultiSelectOption>
        )
    }

    return (
        <BaseSelect AS={MultiOption} handleOptionSelect={handleOptionSelect}
                    selectedOptions={selectedOptions} {...props}/>
    )
}