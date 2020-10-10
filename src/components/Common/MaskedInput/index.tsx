import React from 'react';
import {IMaskMixin} from 'react-imask';
import useStyles from "../../Common/Input/useStyles";
import { InputType } from "../../Common/Input";
import { Box, TextField } from "@material-ui/core";

interface MaskedInputType extends InputType {
    mask: any;
}

export const MaskedStyledInput = IMaskMixin(({ inputRef, ...props } : any) => (
    <TextField
      {...props}
      inputRef={inputRef}
    />
));

const index = (props: MaskedInputType) => {
    const classes = useStyles();
  
    return (
      <Box className={classes.BoxInline} p={1} m={1}>
        <Box className={classes.BoxText} pr={1}>
          {props.label || props.labels} : {props.req && <span>*</span>}
        </Box>
        <Box>
          <MaskedStyledInput 
            mask={props.mask}
            variant="outlined"
            innerRef={props.innerRef}
            size="small"
            select={props.isSelect}
            type={props.isDate ? "date" : ""}
            helperText={props.helperText}
            error={props.error}
            value={props.value}
            inputProps={props.inputProps}
          />
        </Box>
      </Box>
    )
};

export default index