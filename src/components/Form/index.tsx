import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "layout/Container";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./useStyles";
import Input from "components/Input";

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
                // value={"Mr"}
                helperText={""}
                error={false}
                isSelect={true}
                option={["Mr", "Ms"]}
              />
              <Input
                label={"Title"}
                req={true}
                // value={"Mr"}
                helperText={""}
                error={false}
                isSelect={true}
                option={["Mr", "Ms"]}
              />
              <Input
                label={"Title"}
                req={true}
                // value={"Mr"}
                helperText={""}
                error={false}
                isSelect={true}
                option={["Mr", "Ms"]}
              />
            </Box>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Form;
