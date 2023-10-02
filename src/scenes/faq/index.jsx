import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from '@mui/icons-material';
import { tokens } from "../../themes";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    


    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="A List of the most common questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>

                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum. 
                        </p>
                        
                        
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h5">
                        Another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>

                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum. 
                        </p>
                        
                        
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h5">
                        The last important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>

                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum. 
                        </p>
                        
                        
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;