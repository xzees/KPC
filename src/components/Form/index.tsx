import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "../../layout/Container";
import { Box, Grid } from "@material-ui/core";
import useStyles , { BoxView } from "./useStyles";
import Title from "./Title";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Birthday from "./Birthday";
import Nationality from "./Nationality";
import Citizen from "./Citizen";
import Gender from "./Gender";

const Form = (props: any) => {
  const classes = useStyles();
  
  return (
    <Container justifyContent={"center !important"}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <form className={classes.root} noValidate autoComplete="off">
            <Box {...BoxView}>
              <Title />
              <FirstName />
              <LastName />
            </Box>
            <Box {...BoxView}>
              <Birthday />
              <Nationality />
            </Box>
            <Box {...BoxView}>
              <Citizen />
            </Box>
            <Box {...BoxView}>
              <Gender />
            </Box>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Form;
