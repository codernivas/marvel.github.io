import { Grid, Paper, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react"

interface GreetingProps {
    name: string;
    date: any;
}

const greeting = new Date().getHours() < 12 ? 'Good Morning' : 'Good Afternoon'
const GreetingComp: React.FC<GreetingProps> = ({ name, date }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ px: 3, py: 5, }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={9}>
                                <Box display="flex" flexDirection="column" gap={3}>
                                    <Box>
                                        <Typography color="primary" sx={{ fontSize: { xs: ".813rem", sm: "1rem" } }}>
                                            {date}
                                        </Typography>
                                        <Typography sx={{ typography: { xs: "h6", sm: "h4", lg: "h3" } }}> {greeting}, {name}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default GreetingComp