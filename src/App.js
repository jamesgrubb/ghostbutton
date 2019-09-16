import React, {Fragment} from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./css/GlobalStyles"
import { theme } from "./css/theme.js"
import {Container, Button} from "./components"
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Fragment>
    <GlobalStyles />
    
    <Container>
      <Button>Click!</Button>
    </Container>
      
    
    </Fragment>
    </ThemeProvider>
  );
}

export default App;
