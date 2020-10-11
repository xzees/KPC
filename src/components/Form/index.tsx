import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'

export interface IreduxRender { 
  [key: string]: any;
  input?: any;
  label?: any;
  meta?: IError | undefined;
  custom?: any
  rest?: any;
}

export interface IError {
  touched: any;
  error: any;
}

let SearchContainer = ({ handleSubmits }: any) => (
  <Form onSubmit={(values:any) => handleSubmits(values)} />
)

const mapDispatchToProps = (dispatch: any) => ({
  handleSubmits: (value: any) =>
    dispatch({ type: 'SEARCH_CONTAINER_SUBMIT', payload: value })
})

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer)
