import { Box, Typography, useTheme } from "@mui/material";
import { mockDataInvoices } from '../../data/mockData';
import { DataGrid } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { styled } from '@mui/material/styles';
import { tokens } from "../../themes";


const Invoices = () => {

    const columns = [
        { field: "id", headerName: "ID", width: 60, sortable: false, disableColumnMenu: true },
        { field: "name", headerName: "Name", width: 150},
        { 
            field: "email", 
            headerName: "Email", 
            width: 230, 
            renderCell: (params) => (
                <a href="mailto: null`">{params.value}</a>
            )
        },
        { 
            field: "cost", 
            headerName: "Cost", 
            width: 95 ,
            renderCell: (params) => (
                <Typography color={"#5a5a5a"}>
                    ${params.value}
                </Typography>
            )
        },
        { field: "date", headerName: "Date", width: 120 },
    ];
      
    const gridStyle = { height: "75vh" }

    const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
        "& ::-webkit-scrollbar": {
            width: "15px"
        },
        "& ::-webkit-scrollbar-track": {
            backgroundColor: "#f5f5f5"
        },
        "& ::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
            backgroundColor: "#f5f5f5"
        },
        "& .MuiDataGrid-cell:focus": {
            outline: "none !important"
        },
        "& .MuiDataGrid-sortIcon": {
            marginLeft: "5px !important"
        },
        "& div[role='columnheader']": {
            outline: "none !important"
        },
        // "& .MuiCheckbox-root": {
        //     outline: "none !important"
        // },
    }));

    
    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="A list of invoice balances" />
            <div
                style={{
                    height: '75vh',
                    margin: '0',
                    minWidth: 0
                }}
            >
                <StyledDataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                    style={gridStyle}
                    rowHeight={40}
                />
            </div>
        </Box>
    )
}

export default Invoices;