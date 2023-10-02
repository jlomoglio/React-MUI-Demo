import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoMap from "../../components/GeoMap";

const Geography = () => {
    return (
        <Box m="20px">
            <Header title="GeoMap" subtitle="Basic demo of the component" />
            <Box height="75vh" width="75vw">
                <GeoMap />
            </Box>
        </Box>
    )
}

export default Geography;