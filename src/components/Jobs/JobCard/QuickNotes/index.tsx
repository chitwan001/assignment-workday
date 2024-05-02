import {Box, styled, Typography} from "@mui/material";

const JobPostTimeContainer = styled("div")({
    display: "flex",
    width: "100%",
    padding: "5px 0px",
})

const JobTimeWrapper = styled("div")({
    display: "flex",
    alignItems: "flex-start",
    padding: "5px 10px",
    flexWrap: "wrap",
    gap: "5px",
    width: "100%",
    flex: "1 1 0%",
})
export default function QuickNotes() {
    return (
        <JobPostTimeContainer>
            <JobTimeWrapper>
                <Box sx={{
                    padding: "4px 6px",
                    boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
                    borderRadius: "10px",
                    border: "1px solid rgb(230, 230, 230)",
                }}>
                    <Typography fontWeight={300} lineHeight={1.5} fontSize={9}>
                        ⏳ Posted 11 days ago
                    </Typography>
                </Box>
            </JobTimeWrapper>
        </JobPostTimeContainer>
    )
}