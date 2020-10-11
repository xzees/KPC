import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "../../layout/Container";
import { Box, Button, Grid } from "@material-ui/core";
import useStyles , { BoxView } from "./useStyles";

import Title from "./Title";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Birthday from "./Birthday";
import Nationality from "./Nationality";
import Citizen from "./Citizen";
import Gender from "./Gender";
import MobilePhone from "./MobilePhone";
import PassportNo from "./PassportNo";
import ExpectedSalary from "./ExpectedSalary";

import { Field, reduxForm } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks';
import FormHelperText from '@material-ui/core/FormHelperText'
import validationForm from '../../store/User/Form/validationForm'
import asyncValidate from '../../store/User/Form/asyncValidate'
import Layout from '../Common/Input/layout'
import { IError } from "../../interface/user/IreduxRender";
import { useSelector } from "react-redux";
import Tables from '../Tables'


const citizenMask = createTextMask({
  pattern: '9-9999-99999-99-9',
  guide: false,
  stripMask: false
});


let Form = (props: any) => {
  const classes = useStyles();
  const { handleSubmit, load, pristine, reset, submitting } = props
  

  return (
    <Container >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <Box {...BoxView}>
              <Field name="title"  component={Title} type="text"  />
              <Field name="firstName"  component={FirstName} type="text"  />
              <Field name="lastName"  component={LastName} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="birthday"  component={Birthday} type="text"  />
              <Field name="nationality"  component={Nationality} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="citizen_id" {...citizenMask} component={Citizen} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="gender"  component={Gender} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="mobile_phone"  component={MobilePhone} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="passport_no"  component={PassportNo} type="text"  />
            </Box>
            <Box {...BoxView}>
              <Field name="expected_salary"  component={ExpectedSalary} type="text"  />
              <Layout>
                <Box pr={1} >
                <Button disabled={pristine || submitting} type={'submit'} variant="outlined" color="primary" >
                  Submit
                </Button>
                </Box>
                <Box >
                <Button disabled={pristine || submitting} onClick={reset} variant="outlined" color="secondary" >
                  Undo
                </Button>
                </Box>
              </Layout>
            </Box>
          </form>
        </Grid>
      </Paper>
      <Tables />
    </Container>
  );
};

export const renderFromHelper = ({ touched, error } : IError) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}



Form = reduxForm({
  form: 'user',
  initialValues: {
    title: 'Mr',
    nationality: 'Thai',
    phone_number: '+66'
  },
  enableReinitialize: true,
  validate: validationForm,
}
)
(Form)


export default Form;
