import { Box } from "@mui/material"; // A wrapper component with css utilites
import {styled} from "@mui/system"; //Utility for style components

const FlexBetween = styled(Box)({ //Creating a component using both impots for stle
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center"
})


export default FlexBetween;