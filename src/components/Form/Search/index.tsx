import {FilterSelectProps} from "../../../types";
import {styled} from "@mui/material";
import {useRef, useState} from "react";
import {Title} from "../Title";


const SearchContainer = styled('div')(({focused}: { focused: boolean }) => ({
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    background: "white",
    borderColor: focused ? "#2684FF" : "#ccc",
    borderRadius: "4px",
    borderWidth: "1px",
    borderStyle: "solid",
    outline: "0px !important",
    minHeight: "38px",
    minWidth: "150px",
    position: "relative"
}))

const InputContainer = styled('input')({
    flex: "1 1",
    padding: "5px 8px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "#000",
    fontSize: "13px",
    fontWeight: 500,
    font: "inherit",
    letterSpacing: "inherit",
    border: "0px",
    height: "1.4375em",
    margin: "0px",
    minWidth: "0px",
    width: "100%",
    outline: "0",
    "&::placeholder": {
        color: "gray",
        fontSize: "13px",
        fontWeight: 300
    }
})

export default function Search(props: FilterSelectProps) {
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const [searchedText, setSearchedText] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const handleInputChange = (e: any) => {
        setSearchedText(e.target.value)
    }

    const handleContainerClick = () => {
        setIsSearchFocused(true)
        if (inputRef.current) inputRef.current.focus()
    }

    const handleInputBlur = () => {
        setIsSearchFocused(false)
    }

    return (
        <>
            {searchedText.length !== 0 && <Title>{props.title}</Title>}
            <SearchContainer onClick={handleContainerClick} focused={isSearchFocused}>
                <InputContainer onBlur={handleInputBlur} placeholder={props.placeholder} value={searchedText}
                                onChange={handleInputChange}
                                ref={inputRef}/>
            </SearchContainer>
        </>
    )
}