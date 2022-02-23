import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const GlobalLayout = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>{children}</>
    </ThemeProvider>
  );
};

export default GlobalLayout;
