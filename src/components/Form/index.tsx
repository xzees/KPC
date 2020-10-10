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
import { Field, reduxForm } from 'redux-form'
import { TextField } from "material-ui";
import { createNumberMask, createTextMask } from 'redux-form-input-masks';


export interface IreduxRender { 
  [key: string]: any;
  input: any;
  label: any;
  meta: {
    touched: any;
    error: any;
  } | undefined;
  custom?: any
}

const citizenMask = createTextMask({
  pattern: '9-9999-99999-99-9',
  // placeholder: '9',
  guide: false,
  stripMask: false
});

let Form = (props: any) => {
  const classes = useStyles();
  const { handleSubmit } = props;
  return (
    <Container justifyContent={"center !important"}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <Box {...BoxView}>
              <Title />
              <Field name="firstName"  component={FirstName} type="text"  />
              <Field name="lastName"  component={LastName} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Birthday />
              <Nationality />
            </Box>
            <Box {...BoxView}>
              <Field name="citizen_id" {...citizenMask} component={Citizen} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Gender />
            </Box>
            <button type="submit">Submit</button>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

Form = reduxForm({
  // a unique name for the form
  form: 'user',
  // validate,
  // asyncValidate,

})(Form)


export default Form;
