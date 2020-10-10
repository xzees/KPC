import React from 'react';
import MaskedInput from '../../Common/MaskedInput';


const index = (props: any) => {
  
  return (
    <MaskedInput
        mask={'0-0000-00000-00-0'}
        label={'Citizen ID'}
        req={false}
        helperText={''}
        error={false}
        inputProps={{
          placeholder: 'x - xxxx - xxxxx - xx - x',
          style: {
            textAlign: 'center'
          }
        }}
        
    /> 
  );
};

export default index;
