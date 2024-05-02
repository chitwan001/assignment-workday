import {Box} from "@mui/material";

export default function Header({role, location}: { role: string, location: string }) {
    return (
        <Box sx={{
            width: "100%",
            flex: "1 1 0%",
            padding: "8px 16px",
        }}>

            <Box sx={{
                display: "flex",
                gap: "0.5rem",
            }}>
                <Box sx={{
                    display: "flex",
                    gap: "0.5rem"
                }}>
                    <img
                        style={{
                            width: "25px",
                            height: "2.5rem"
                        }}
                        src={"https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598306546_majma.jpg"}
                        alt={"logo"}/>
                    <div>
                        <div>
                            <h3 style={{
                                fontSize: "13px",
                                fontWeight: 400,
                                letterSpacing: "1px",
                                margin: 0,
                                marginBottom: "3px",
                                color: "#8b8b8b",
                            }}>
                                Company Name
                            </h3>
                            <h2 style={{
                                fontSize: "14px",
                                lineHeight: 1.5,
                                margin: 0,
                                fontWeight: 300,
                                textTransform: "uppercase"
                            }}>
                                {role}
                            </h2>
                        </div>
                        <div style={{
                            fontSize: "11px",
                            fontWeight: 400,
                            marginTop: "5px",
                            textTransform: "uppercase"
                        }}>
                            {location}
                        </div>
                    </div>
                </Box>
            </Box>

        </Box>
    )
}