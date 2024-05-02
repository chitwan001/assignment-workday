import BaseSelect from "../BaseSelect";
import {FilterSelectProps, TSelectOption} from "../../../../types";
import {useEffect, useState} from "react";
import {styled} from "@mui/material";
import {useDispatch} from "react-redux";
import {filterByExperience, filterByMinSalary} from "../../../../store/jobs-slice";

export default function SingleSelect(props: FilterSelectProps) {
    const [selectedOptions, setSelectedOptions] = useState<TSelectOption[]>([])

    const dispatch = useDispatch()
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

    useEffect(() => {
        const option = selectedOptions[0]
        if (option) {
            switch (props.id) {
                case "minimumSalary":
                    dispatch(filterByMinSalary(option.key as number))
                    break
                case "experience":
                    dispatch(filterByExperience(option.key as number))
                    break
            }
        }
    }, [selectedOptions]);

    return (
        <BaseSelect AS={SingleOption} selectedOptions={selectedOptions}
                    handleOptionSelect={handleOptionSelect} {...props}/>
    )
}