import React from 'react'
import FlexBetween from './FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';

type Props = {
    title: string;
    subtitle?: string
    sideText?: string
}

const BoxHeader = ({title, subtitle, sideText}: Props) => {
  const { palette } = useTheme();
    return (
    <FlexBetween color={palette.grey[400]} margin="1.1rem 1rem 0 1rem">
        
        <FlexBetween>
           
            <Box width="100%">
                <Typography variant="h4" mb="-0.1rem">{title}</Typography>
                <Typography variant="h6" mb="-0.1rem">{subtitle}</Typography>
            </Box>
        </FlexBetween>
        <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
            {sideText}
        </Typography>
    </FlexBetween>
  )
}

export default BoxHeader