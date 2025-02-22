import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                textAlign: 'center',
                padding: '10px',
                position: 'relative',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body2" color="inherit">
                &copy; {new Date().getFullYear()} Jarif Ahmed Soumik. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
