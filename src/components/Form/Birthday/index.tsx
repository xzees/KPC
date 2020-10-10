import React from "react";
import Input from "../../Common/Input";

const index = (props: any) => {
  return (
    <Input
        label={"Birthday"}
        req={true}
        helperText={""}
        error={false}
        isDate={true}
        inputProps={{ max: new Date().toISOString().slice(0,10) }}
    /> 
  );
};

export default index;
