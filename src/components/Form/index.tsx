import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'

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
