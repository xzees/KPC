import React from "react";
import Input from "../../Common/Input";
import nationality from '../../../mock/nationality.json'
import { IreduxRender } from '../index'

const index = (props: IreduxRender) => {
  console.log(props);

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
        // defaultValue={'Thai'}
        option={_array}
        {...props.input}
        {...props.custom}
        {...props.meta}
    />
  );
};

export default index;
