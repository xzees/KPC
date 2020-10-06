import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Form from "components/Form";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Form />
      </Container>
    </React.Fragment>
  );
}

export default App;
