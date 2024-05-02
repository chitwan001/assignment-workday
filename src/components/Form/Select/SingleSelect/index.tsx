import BaseSelect from "../BaseSelect";
import {FilterSelectProps, TSelectOption} from "../../../../types";
import {useState} from "react";
import {styled} from "@mui/material";

export default function SingleSelect(props: FilterSelectProps) {
    const [selectedOptions, setSelectedOptions] = useState<TSelectOption[]>([])

    const handleOptionSelect = (option: TSelectOption) => {
        setSelectedOptions([option])
    }

    const SingleSelectOption = styled("div")({
        display: 'flex',
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        marginLeft: "2px",
        marginRight: "2px"
    })

    const SingleOption = ({value, ...others}: { value: string }) => {
        return (
            <SingleSelectOption {...others}>
                {value}
            </SingleSelectOption>
        )
    }

    return (
        <BaseSelect AS={SingleOption} selectedOptions={selectedOptions}
                    handleOptionSelect={handleOptionSelect} {...props}/>
    )
}