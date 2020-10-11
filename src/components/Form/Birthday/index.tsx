import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from '../index'

const index = (props: IreduxRender) => {
  console.log(props);

  return (
    <Input
        label={"Birthday"}
        req={true}
        helperText={""}
        error={false}
        isDate={true}
        inputProps={{ max: new Date().toISOString().slice(0,10) }}
        {...props.input}
        {...props.custom}
    /> 
  );
};

export default index;
