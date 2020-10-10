import React from "react";
import { Box, TextField } from "@material-ui/core";
import { MenuItem } from "material-ui";
import useStyles from "./useStyles";

export interface InputType {
  [key: string]: any;
  label: string;
  labels?: string;
  req: boolean;
  value?: string;
  helperText: string;
  error?: boolean;
  isSelect?: boolean;
  defaultValue?: any;
  option?: any[] | undefined;
  isDate?: boolean;
  inputProps?: any;
  innerRef?: any;
  mask?: any;
  ref?: any;
  maskChar?: any;
}

const index = (props: InputType) => {
  const classes = useStyles();

  return (
    <Box className={classes.BoxInline} p={1} m={1}>
      <Box className={classes.BoxText} pr={1}>
        {props.label || props.labels} : {props.req && <span>*</span>}
      </Box>
      <Box>
          {/* <InputMask
            mask={props.mask}
            disabled={false}
            maskChar={props.maskChar}
          >
         {(inputProps: any) => */}
        <TextField  
            {...props}
            variant="outlined"
            innerRef={props.innerRef}
            size="small"
            select={props.isSelect}
            type={props.isDate ? "date" : ""}
            helperText={props.helperText}
            error={props.error}
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
          {/* }
          </InputMask>  */}
      </Box>
    </Box>
  );
};


export default index;
