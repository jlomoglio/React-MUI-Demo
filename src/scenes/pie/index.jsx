import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Basic demo of the component" />
            <Box height="75vh" width="75vw">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;