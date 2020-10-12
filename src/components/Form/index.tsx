import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import {
  addUser
} from '../../store/User/actions'

let SearchContainer = ({ handleSubmits }: any) => (
  <Form onSubmit={(values:any) => handleSubmits(values)} />
)

const mapDispatchToProps = (dispatch: any) => ({
  handleSubmits: (value: any) =>
    dispatch(addUser(value))
})

const mapstateToProps = (state: any) => {
  const {user} = state;
  return {
    initialValues: user.edit,
  }
}

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(SearchContainer)
