import {Grid} from "@mui/material";
import Header from "./Header";
import QuickNotes from "./QuickNotes";
import EstimatedSalary from "./EstimatedSalary";
import Description from "./Description";

export default function JobCard({location, role, currencyCode, maxJDSalary, minJDSalary}: {
    location: string,
    role: string,
    currencyCode: string,
    maxJDSalary: number | null,
    minJDSalary: number | null
}) {
    return (
        <Grid sx={{
            margin: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
            flexBasis: "30%",
            flexGrow: 0,
            maxWidth: "30%",
        }}>

            <QuickNotes/>

            <Header location={location} role={role}/>

            { (minJDSalary || maxJDSalary) && <EstimatedSalary currencyCode={currencyCode} maxJDSalary={maxJDSalary} minJDSalary={minJDSalary}/>}

            <Description
                description={"This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."}/>

        </Grid>
    )
}