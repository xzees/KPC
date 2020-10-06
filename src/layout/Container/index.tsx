import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function ComplexGrid(props: any) {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
}
