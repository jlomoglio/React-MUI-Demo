import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Basic demo of the component" />
            <Box height="75vh" width="75vw">
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar;