import { useState } from "react";
import PixIcon from '@mui/icons-material/Pix';
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb=".25rem" p=".5rem 0rem" color={palette.grey[300]}>
      {/*Left side*/}

      <FlexBetween gap=".75rem">
        <PixIcon sx={{ fontSize:"28px" }} />
        <Typography variant="h4" fontSize="16px" >Finanseer</Typography>
      </FlexBetween>

      {/*Right side */}

      <FlexBetween gap="2rem" >
        <Box sx={{ "&:hover": {color: palette.primary[100]} }} ></Box>
        <Link to="/" onClick={() => setSelected("dashboard")}  >
          Dashboard
        </Link>
        <Box></Box>
      </FlexBetween>

    </FlexBetween>
  );
};

export default Navbar;
