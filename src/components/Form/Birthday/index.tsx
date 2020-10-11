import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from '../Form'

const index = (props: IreduxRender) => {

  return (
    <Input
        label={"Birthday"}
        req={true}
        helperText={""}
        error={false}
        isdate={true}
        inputProps={{ max: new Date().toISOString().slice(0,10) }}
        {...props.input}
        {...props.meta}
        {...props.custom}
    /> 
  );
};

export default index;
