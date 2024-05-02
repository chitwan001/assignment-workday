import {Box, Typography} from "@mui/material";

export default function Description({description}: { description: string }) {
    return (
        <Box sx={{
            marginTop: "10px",
            height: "250px",
            overflow: "hidden",
            maskImage: "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))"
        }}>

            <Box>
                <Typography sx={{
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                }}>
                    About the Company:
                </Typography>
                <Box sx={{
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                    fontWeight: 300
                }}>
                    {description}
                </Box>
            </Box>

        </Box>
    )
}