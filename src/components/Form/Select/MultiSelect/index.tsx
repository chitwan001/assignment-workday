import BaseSelect from "../BaseSelect";
import {FilterSelectProps, TSelectOption} from "../../../../types";
import {useState} from "react";
import {styled} from "@mui/material";

export default function MultiSelect(props: FilterSelectProps) {
    const [selectedOptions, setSelectedOptions] = useState<TSelectOption[]>([])

    const handleOptionSelect = (option: TSelectOption) => {
        setSelectedOptions([...selectedOptions, option])
    }

    const MultiSelectOption = styled("div")({
        display: 'flex'
    })
    return (
        <BaseSelect AS={MultiSelectOption} handleOptionSelect={handleOptionSelect}
                    selectedOptions={selectedOptions} {...props}/>
    )
}