import { Box } from "@mui/material";
import { mockDataTeam } from '../../data/mockData';
import { DataGrid } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { styled } from '@mui/material/styles';


const Team = () => {

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
        { 
            field: "access", 
            headerName: "Role",  
            width: 100,
            renderCell: (params) => {
                const firstLetter =  params.value.charAt(0)
                const firstLetterCap = firstLetter.toUpperCase()
                const remainingLetters = params.value.slice(1)
                return firstLetterCap + remainingLetters
            }
        },
        { 
            field: null, 
            headerName: "Actions",  
            width: 140,
            renderCell: () => (
                <span>View  | Edit | Delete</span>
            )
        },
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
    }));

    
    return (
        <Box m="20px">
            <Header title="MANAGE TEAM" subtitle="Manage the Team Members" />
            <div
                style={{
                    height: '75vh',
                    margin: '0',
                    minWidth: 0
                }}
            >
                <StyledDataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    style={gridStyle}
                    rowHeight={40}
                />
            </div>
        </Box>
    )
}

export default Team;