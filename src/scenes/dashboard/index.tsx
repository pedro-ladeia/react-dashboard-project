import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`; // Organizing the grid, the all columns will be x10, so, the first column wii be a 4x3x3, the second, 4x2x4, the trhid, 3x3x2x2

const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`; //Organizing the grid on small screens

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)"); //Boolean thats verify if the screen is above 1200px
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        // Verifying the size  screen for switch the grid
        isAboveMediumScreens? 
            {
              //The min size the board can have is 370px, and the space will be divided into 3
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",

              // The min size the row can have is 60px, and the space will be divided into 10
              gridTemplateRows: "repeat(10, minmax(60px,  1fr))",

              gridTemplateAreas: gridTemplateLargeScreens,
            } 

            //ternary operator
            : 
            {
              gridAutoColumns: "1fr",

              gridAutoRows: "80px",

              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Box bgcolor="#fff" gridArea="a"></Box>
      <Box bgcolor="#fff" gridArea="b"></Box>
      <Box bgcolor="#fff" gridArea="c"></Box>
      <Box bgcolor="#fff" gridArea="d"></Box>
      <Box bgcolor="#fff" gridArea="e"></Box>
      <Box bgcolor="#fff" gridArea="f"></Box>
      <Box bgcolor="#fff" gridArea="g"></Box>
      <Box bgcolor="#fff" gridArea="h"></Box>
      <Box bgcolor="#fff" gridArea="i"></Box>
      <Box bgcolor="#fff" gridArea="j"></Box>
    </Box>
  );
};

export default Dashboard;
