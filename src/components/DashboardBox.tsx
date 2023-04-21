import { Box } from "@mui/material"; // A wrapper component with css utilites
import {styled} from "@mui/system"; //Utility for style components

const DashboardBox = styled(Box)(({ theme }) => ({ //Creating a component using both imports for style
    backgroundColor: theme.palette.background.light,
    borderRadius: "1rem",
    boxShadow: ".15rem .2rem .15rem .1rem rgba(0, 0, 0, .8)"
}))


export default DashboardBox;