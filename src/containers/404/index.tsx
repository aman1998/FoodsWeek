import { FC } from "react";
import { Box, Typography } from "@mui/material";

const NotFound: FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
    }}
  >
    <Typography variant="h1">404 Not Found</Typography>
  </Box>
);

export default NotFound;
