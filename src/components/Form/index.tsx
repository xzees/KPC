import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import {
  addUser
} from '../../store/User/actions'

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
    dispatch(addUser(value))
})

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer)
