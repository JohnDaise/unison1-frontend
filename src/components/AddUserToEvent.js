import React from 'react';
import { connect } from "react-redux";
import { List, Button, Form, Modal } from 'semantic-ui-react'

import { fetchedEvents } from "../redux/actions/index";



const AddUserToEvent = (props) => {
  console.log(props)
  return(
  <Modal trigger={<Button>Add Player</Button>}>
    <Form>
        <List>
          {props.currentUser ?
          props.events.filter(event => event.user_id === props.currentUser.id ).map(event =>
           <List.Item> event.name /></List.Item>
         ) : null}
       </List>}
    </Form>
  </Modal>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};




export default connect(mapStateToProps)(AddUserToEvent);
