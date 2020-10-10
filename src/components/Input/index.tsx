import React from "react";
import { Box, TextField } from "@material-ui/core";
import { MenuItem } from "material-ui";
import useStyles from "./useStyles";

interface InputType {
  label: string;
  req: boolean;
  value?: string;
  helperText: string;
  error?: boolean;
  isSelect?: boolean;
  option?: any[] | undefined;
}

const index = (props: InputType) => {
  const classes = useStyles();

  return (
    <Box className={classes.BoxInline} p={1} m={1}>
      <Box className={classes.label}>
        {props.label} : {props.req && <span>*</span>}
      </Box>
      <Box>
        <TextField
          id="standard-select-currency"
          variant="outlined"
          select={props.isSelect}
          helperText={props.helperText}
          error={props.error}
          value={props.value}
        >
          {props.option && props.option.length > 0 &&
            props.option.map((value: any, index: number) => {
              return (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              );
            })}
        </TextField>
      </Box>
    </Box>
  );
};

export default index;
