import {styled} from "@mui/material";
import {KeyboardArrowDown} from "@mui/icons-material";
import {FilterSelectProps} from "../../../../types";
import {useEffect, useRef, useState} from "react";

// This is base file for a Select component. It uses MUI functionalities to build Controlled Styled Select Component

const SelectContainer = styled('div')(({focused}: { focused: boolean }) => ({
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
    minWidth: "150px"
}))

const SelectIndicator = styled('div')({
    display: "flex",
    alignItems: "center"
})

const ValueContainer = styled('div')({
    padding: '2px 8px',
    display: "grid",
    alignItems: "center",
    flex: "1 1 0%",
})

const Separator = styled('span')({
    width: "1px",
    backgroundColor: "#ccc",
    marginTop: "8px",
    marginBottom: "8px",
    alignSelf: "stretch",
})

const DropdownIcon = styled('div')({
    display: "flex",
    color: "#ccc",
    padding: "8px"
})

const Placeholder = styled('div')({
    marginLeft: "2px",
    marginRight: "2px",
    fontSize: "12px",
    color: "gray",
    gridArea: "1/1/2/3"
})

const InputContainer = styled('div')({
    display: "inline-grid",
    gridArea: "1/1/2/3",
    gridTemplateColumns: "0px min-content",
    margin: "2px",
    paddingBottom: "2px",
    paddingTop: "2px",
})

export default function BaseSelect({placeholder}: FilterSelectProps) {
    const [isSelectFocused, setIsSelectFocused] = useState(false)

    const sContainerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

        const handleSContainerClick = () => {
            if (inputRef.current) inputRef.current.focus()
        }

        const handleInputFocus = () => {
            setIsSelectFocused(true)
        }

        const handleInputFocusOut = () => {
            setIsSelectFocused(false)
        }

        const sContainerElem = sContainerRef.current
        const inputElem = inputRef.current
        if (sContainerElem) {
            sContainerElem.addEventListener("click", handleSContainerClick)
        }

        if (inputElem) {
            inputElem.addEventListener("focus", handleInputFocus)
            inputElem.addEventListener("focusout", handleInputFocusOut)
        }

        return () => {
            if (sContainerElem) {
                sContainerElem.removeEventListener("click", handleSContainerClick)
            }
            if (inputElem) {
                inputElem.removeEventListener("focus", handleInputFocus)
                inputElem.removeEventListener("focusout", handleInputFocusOut)
            }
        }
    }, []);

    return (
        <SelectContainer focused={isSelectFocused} ref={sContainerRef}>
            <ValueContainer>
                <Placeholder>{placeholder}</Placeholder>
                <InputContainer>
                    <input ref={inputRef} style={{
                        color: "inherit",
                        background: "0px center",
                        opacity: 1,
                        width: "100%",
                        gridArea: "1 / 2",
                        font: "inherit",
                        minWidth: "2px",
                        margin: "0px",
                        outline: "0px",
                        padding: "0px",
                        border: "none"
                    }}>

                    </input>
                </InputContainer>
            </ValueContainer>
            <SelectIndicator>
                <Separator/>
                <DropdownIcon>
                    <KeyboardArrowDown width={20} height={20}/>
                </DropdownIcon>
            </SelectIndicator>
        </SelectContainer>
    )
}