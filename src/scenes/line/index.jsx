import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Basic demo of the component" />
            <Box height="75vh" width="75vw">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;