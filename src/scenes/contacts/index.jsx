import { Box } from "@mui/material";
import { mockDataContacts } from '../../data/mockData';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { styled } from '@mui/material/styles';


const Contacts = () => {

    const columns = [
        { field: "id", headerName: "ID", width: 60, sortable: false, disableColumnMenu: true },
        { field: "name", headerName: "Name", width: 150},
        { 
            field: "email", 
            headerName: "Email", 
            width: 200, 
            renderCell: (params) => (
                <a href="mailto: null`">{params.value}</a>
            )
        },
        { field: "age", headerName: "Age", width: 80 },
        { field: "phone", headerName: "Phone Number", width: 120 },
        { field: "address", headerName: "Address",  width: 250,},
        { field: "city", headerName: "City",  width: 110,},
        { field: "zipCode", headerName: "Zip Code",  width: 100,},
        { field: "registrarId", headerName: "Registrar ID",  width: 100,}
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
        // "& .MuiDataGrid-columnHeaders": {
        //     backgroundColor: 'blue',
        //     color: "#ffffff"
        // },
        //boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#5a5a5a !important"
        },
    }));

    
    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="A list of all your contacts" />
            <div
                style={{
                    height: '75vh',
                    margin: '0',
                    minWidth: 0
                }}
            >
                <StyledDataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    style={gridStyle}
                    rowHeight={40}
                    components={{ Toolbar: GridToolbar }}
                />
            </div>
        </Box>
    )
}

export default Contacts;