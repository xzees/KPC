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

const mapstateToProps = (state: any) => ({
  initialValues: {
    title: 'Mr',
    nationality: 'Thai',
    phone_number: '+66'
  },
})

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(SearchContainer)
