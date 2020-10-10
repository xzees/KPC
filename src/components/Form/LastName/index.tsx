import React from "react";
import Input from "../../Common/Input";

const index = (props: any) => {
  return (
    <Input
    label={"Last Name"}
    req={true}
    helperText={""}
    error={false}
    isSelect={false}
    />
  );
};

export default index;
