import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC, ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1cb0f6",
    },
    secondary: {
      main: "#84d8ff",
    },
    text: {
      primary: "#777777",
    },
  },
});

const MUIProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MUIProvider;
