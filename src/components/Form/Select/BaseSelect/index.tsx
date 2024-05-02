import {styled} from "@mui/material";
import {KeyboardArrowDown} from "@mui/icons-material";
import {FilterSelectProps} from "../../../../types";
import React, {useEffect, useRef, useState} from "react";
import {addEventListeners, removeEventListeners} from "../../../../utils";

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
    minWidth: "150px",
    position: "relative"
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
    gridArea: "1/1/2/3",
    fontWeight: "300"
})

const InputContainer = styled('div')({
    display: "inline-grid",
    gridArea: "1/1/2/3",
    gridTemplateColumns: "0px min-content",
    margin: "2px",
    paddingBottom: "2px",
    paddingTop: "2px",
    "&&::after": {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
        gridArea: "1 / 2",
        font: "inherit",
        minWidth: "2px",
        border: "0px",
        margin: "0px",
        outline: "0px",
        padding: "0px",
    }
})

const OptionsContainer = styled("div")({
    position: "absolute",
    left: 0,
    top: "100%",
    width: "100%",
    backgroundColor: "white",
    marginTop: "8px",
    marginBottom: "8px",
    zIndex: 1,
    borderWidth: "1px",
    borderRadius: "4px",
    borderStyle: "solid",
    borderColor: "#ccc",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
})

const OptionsValueWrapper = styled("div")({
    maxHeight: "300px",
    overflow: "hidden",
    overflowY: "scroll",
})

const OptionsValueContainer = styled("div")({
    display: "grid",
    fontSize: "14px"
})

const Option = styled("div")({
    display: "flex",
    paddingTop: "9px",
    paddingBottom: "9px",
    paddingLeft: "12px",
    "&&:hover": {
        backgroundColor: "rgba(38,132,255,0.33)"
    },
    fontWeight: '300'
})

const GroupName = styled("span")({
    display: "flex",
    paddingTop: "12px",
    paddingLeft: "12px",
    paddingBottom: 0,
    color: "#ababab",
    fontSize:"12px",
    letterSpacing: "0.5px"
})

export default function BaseSelect({placeholder, options}: FilterSelectProps) {
    const [isSelectFocused, setIsSelectFocused] = useState(false)
    const [searchedText, setSearchedText] = useState("")
    const [isOptionsShown, setIsOptionsShown] = useState(false)

    const sContainerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedText(e.target.value)
    }

    const RenderOptionsBasedOnType = ({options}: { options: FilterSelectProps["options"] }) => {
        if (Array.isArray(options)) {
            return (
                <OptionsValueContainer>
                    {
                        options.map((option, index) => (
                            <Option key={index} data-key={option.key} data-value={option.value}>
                                {option.value}
                            </Option>
                        ))
                    }
                </OptionsValueContainer>
            )
        } else if (typeof options === "object") {
            return (
                <OptionsValueContainer>
                    {
                        Object.keys(options).map((key, index) => {
                            const {name, children} = options[key];
                            return (
                                <>
                                    <GroupName key={index}>
                                        {name}
                                    </GroupName>
                                    {
                                        children.map((child, childIndex) => (
                                            <Option key={childIndex} data-key={child.key} data-value={child.value}>
                                                {child.value}
                                            </Option>
                                        ))
                                    }
                                </>
                            )
                        })
                    }
                </OptionsValueContainer>
            )
        }
    }

    useEffect(() => {

        const handleSContainerClick = () => {
            if (inputRef.current) inputRef.current.focus()
            setIsOptionsShown(true)
        }

        const handleInputFocus = () => {
            setIsSelectFocused(true)
        }

        const handleInputFocusOut = () => {
            setIsSelectFocused(false)
            setIsOptionsShown(false)
        }

        const sContainerElem = sContainerRef.current
        const inputElem = inputRef.current

        const sContainerListeners = [
            {
                event: "click",
                handler: handleSContainerClick
            }
        ]

        const inputListeners = [
            {
                event: "focus",
                handler: handleInputFocus
            },
            {
                event: "focusout",
                handler: handleInputFocusOut
            }
        ]

        if (sContainerElem) {
            addEventListeners(sContainerElem, sContainerListeners)
        }

        if (inputElem) {
            addEventListeners(inputElem, inputListeners)
        }

        return () => {
            if (sContainerElem) {
                removeEventListeners(sContainerElem, sContainerListeners)
            }

            if (inputElem) {
                removeEventListeners(inputElem, inputListeners)
            }
        }
    }, []);

    return (
        <SelectContainer focused={isSelectFocused} ref={sContainerRef}>
            <ValueContainer>
                {
                    searchedText === "" && (
                        <Placeholder>{placeholder}</Placeholder>
                    )
                }
                <InputContainer data-value={searchedText}>
                    <input value={searchedText} onChange={handleOnInputChange} ref={inputRef} style={{
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
            {
                isOptionsShown && (
                    <OptionsContainer>
                        <OptionsValueWrapper>
                            <RenderOptionsBasedOnType options={options}/>
                        </OptionsValueWrapper>
                    </OptionsContainer>
                )
            }
        </SelectContainer>
    )
}