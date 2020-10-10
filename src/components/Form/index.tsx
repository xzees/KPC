import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "../../layout/Container";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./useStyles";
import Input from "./Input";

const Form = (props: any) => {
  const classes = useStyles();


  return (
    <Container justifyContent={"center !important"}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <form className={classes.root} noValidate autoComplete="off">
            <Box display="flex" flexWrap="wrap" width={"100% !important"}>
              <Input
                label={"Title"}
                req={true}
                helperText={""}
                error={false}
                isSelect={true}
                option={["Mr", "Ms"]}
              />
              <Input
                label={"First Name"}
                req={true}
                helperText={""}
                error={false}
                isSelect={false}
              />
              <Input
                label={"Last Name"}
                req={true}
                helperText={""}
                error={false}
                isSelect={false}
              />
            </Box>
            <Box display="flex" flexWrap="wrap" width={"100% !important"}>
              <Input
                label={"Birthday"}
                req={true}
                helperText={""}
                error={false}
                isDate={true}
                inputProps={{ max: new Date().toISOString().slice(0,10)
              }}
              />
              <Input
                label={"Nationality"}
                req={false}
                helperText={""}
                error={false}
                isSelect={true}
                option={[]}
              />
            </Box>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Form;
