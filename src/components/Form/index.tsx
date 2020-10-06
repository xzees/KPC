import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    padding: "10px"
  },
  paper: {
    width: "100%",
    minHeight: "100vh"
  },
  card: {
    backgroundColor: "blue"
  }
});

const Form = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Card className={classes.card}></Card>
      </Paper>
    </div>
  );
};

export default Form;
