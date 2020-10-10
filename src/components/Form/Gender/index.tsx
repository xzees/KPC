import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Box, TextField } from "@material-ui/core";
import useStyles from '../../Common/Input/useStyles';

const index = (props: any) => {
    const classes = useStyles();

    return (
        <Box className={classes.BoxInline} p={1} m={1}>
            <Box className={classes.BoxText} pr={1}>
                Gender : 
            </Box>
            <Box>
                <FormControl component="fieldset">
                
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        
                        <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="male"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="female"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="unisex"
                        control={<Radio color="primary" />}
                        label="unisex"
                        labelPlacement="end"
                        />
                        
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    );
}


export default index;