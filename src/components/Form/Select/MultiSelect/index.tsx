import BaseSelect from "../BaseSelect";
import {FilterSelectProps} from "../../../../types";

export default function MultiSelect(props: FilterSelectProps) {
    return (
        <BaseSelect placeholder={props.placeholder}/>
    )
}