import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from '../index'

const index = (props: IreduxRender) => {
  console.log(props);
  return (
    <Input
        label={"Passport No"}
        helperText={""}
        isSelect={false}
        error={props.meta!.error}
        {...props.input}
        {...props.custom}
        {...props.meta}
    />
  );
};

export default index;
