import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { UrlChecker } from "./UrlChecker.tsx";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth={"md"}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tuta Coding Challenge
            </Typography>
          </Toolbar>
        </AppBar>
        <UrlChecker />
      </Container>
    </Box>
  );
}

export default App;
