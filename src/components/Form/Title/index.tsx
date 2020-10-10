import React from "react";
import Input from "../../Common/Input";

const index = (props: any) => {
  return (
        <Input
            label={"Title"}
            req={true}
            helperText={""}
            error={false}
            isSelect={true}
            option={["Mr", "Ms"]}
        />    
  );
};

export default index;
