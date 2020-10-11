import React from "react";
import Input from "../../Common/Input";
import { IreduxRender } from '../index'

const index = (props : IreduxRender) => {
  console.log(props);

  return (
        <Input
            label={"Title"}
            req={true}
            helperText={""}
            defaultValue={"Mr"}
            // error={props.touched || props.error}
            isSelect={true}
            option={["Mr", "Ms"]}
            {...props.input}
            {...props.custom}
        />    
  );
};

export default index;
