import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import {
  addUser,
} from '../../store/User/actions'

let SearchContainer = ({ initialValues,handleSubmits }: any) => (
  <Form initialValues={initialValues} onSubmit={(values:any) => handleSubmits(values)} />
)

const mapDispatchToProps = (dispatch: any) => ({
  handleSubmits: (value: any) => dispatch(addUser(value))
})

const mapstateToProps = (state: any) => {
  return {
    initialValues: state.user.edit,
  }
}

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(SearchContainer)
