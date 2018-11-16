import React from "react";

import { connect } from "react-redux";

import { Modal, Button } from 'semantic-ui-react'


const DeleteButton = (props) => (
  <Modal
    trigger={<Button circular icon={'minus'}></Button>}
    header='Delete'
    content="Are you sure you would like to delete this event?"
    actions={['No', { key: 'yes', content: 'Yes', positive: true }]}
  />
)
const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};


export default connect(mapStateToProps)(DeleteButton);
