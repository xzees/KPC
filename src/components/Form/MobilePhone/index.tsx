import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number'

import { Box, TextField } from "@material-ui/core";
import { MenuItem } from "material-ui";
import useStyles from "../../Common/Input/useStyles";

const Input = (props: any) => {
    const classes = useStyles();
  
    return (
      <Box className={classes.BoxInline} p={1} m={1}>
        <Box className={classes.BoxText} pr={1}>
          {props.label || props.labels} : {props.req && <span>*</span>}
        </Box>
        <Box>
            <MuiPhoneNumber 
            defaultCountry={'th'} 
            variant="outlined" 
            size={'small'} 
            disableDropdown={false}
            />
        </Box>
      </Box>
    );
  };
  
const index = (props: any) => {
    return (
        <Input
            label={"Last Name"}
            req={true}
            helperText={""}
            error={true}
            isSelect={false}
            // className={touched.contactPhoneNumber && errors.contactPhoneNumber ? "has-error" : null}
            {...props.input}
            {...props.custom}
        />
    )
} 

export default index