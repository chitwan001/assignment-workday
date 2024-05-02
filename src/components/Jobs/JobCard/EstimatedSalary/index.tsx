import {Typography} from "@mui/material";

export default function EstimatedSalary({currencyCode, maxJDSalary, minJDSalary}: {
    currencyCode: string,
    maxJDSalary: number | null,
    minJDSalary: number | null
}) {
    return (
        <Typography sx={{
            fontSize: "14px",
            fontWeight: 300,
            margin: "8px 0",
            lineHeight: 1.43,
            width: "100%"
        }}>
            Estimated Salary:
            {
                minJDSalary && maxJDSalary ? (
                    " " + minJDSalary + " - " + maxJDSalary + " " + currencyCode + " "
                ) : minJDSalary ? " " + minJDSalary + currencyCode + " " : " " + maxJDSalary + currencyCode + " "
            }
            ⚠️
        </Typography>
    )
}