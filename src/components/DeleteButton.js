import React from "react";

import EventListItem  from './EventListItem'
import { connect } from "react-redux";

import { Modal, Button } from 'semantic-ui-react'


const DeleteButton = (props) => (
  <Modal trigger={<Button circular size='mini' icon='minus'/>}>
    <Modal.Content>
      "Are you sure you would like to delete this event?"
    </Modal.Content>
  </Modal>
)
const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};


export default connect(mapStateToProps)(DeleteButton);
