import React from "react";
import { Box, TextField } from "@material-ui/core";
import { MenuItem } from "material-ui";
import useStyles from "./useStyles";
import { InputType } from "../../../interface/user/InputType";

const index = (props: InputType) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.BoxInline} p={1}>
      <Box className={classes.BoxText} pr={1}>
        {props.label || props.labels} : {props.req && <span>*</span>}
      </Box>
      <Box>
        <TextField  
            {...props}
            variant="outlined"
            innerRef={props.innerRef}
            size="small"
            select={props.isSelect}
            type={props!.isdate ? "date" : ""}
            helperText={props.touched && props.error}
            error={(props.touched && (props.error || false))}
            value={props.value}
            defaultValue={props.defaultValue}
            inputProps={{...props.inputProps}}
            label={''}
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
      { props.children && <Box className={classes.BoxText}  pl={1}>
          {props.children}
      </Box>}
    </Box>
  );
};


export default index;
