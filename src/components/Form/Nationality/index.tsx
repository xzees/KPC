import React from "react";
import Input from "../../Common/Input";

const index = (props: any) => {
  return (
    <Input
        label={"Nationality"}
        req={false}
        helperText={""}
        error={false}
        isSelect={true}
        option={[]}
    />
  );
};

export default index;
