import { Box } from "@mui/material"; // A wrapper component with css utilites
import {styled} from "@mui/system"; //Utility for style components

const FlexBetween = styled(Box)({ //Creating a component using both imports for style
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center"
}) //Flex box  with space between


export default FlexBetween;