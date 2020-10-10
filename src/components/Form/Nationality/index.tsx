import React from "react";
import Input from "../../Common/Input";
import nationality from '../../../mock/nationality.json'

const index = (props: any) => {
  const _array:any[] = []
  for(const value of nationality) {
    _array.push(value.nationality);
  }
  return (
    <Input
        label={"Nationality"}
        req={false}
        helperText={""}
        error={false}
        isSelect={true}
        defaultValue={'Thai'}
        option={_array}
    />
  );
};

export default index;
