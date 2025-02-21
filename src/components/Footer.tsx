import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", py: 2, mt: 4, bgcolor: "#f5f5f5" }}>
            <Typography variant="body2">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;
