import React from "react";
import Input from "../../Common/Input";


const index = (props : any) => {
  return (
        <Input
            label={"Title"}
            req={true}
            helperText={""}
            // error={props.touched || props.error}
            isSelect={true}
            option={["Mr", "Ms"]}
            // {...props.input}
            // {...props.custom}
        />    
  );
};

export default index;
