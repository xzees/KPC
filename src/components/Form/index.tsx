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

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer)
