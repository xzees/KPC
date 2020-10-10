import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from '../index'

const index = (props: IreduxRender) => {
  console.log(props);
  return (
    <Input
        label={"First Name"}
        req={true}
        helperText={""}
        isSelect={false}
        error={props.meta!.error}
        {...props.input}
        {...props.custom}
    />  
  );
};

export default index;
