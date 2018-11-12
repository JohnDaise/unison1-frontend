import React from 'react';
import { connect } from "react-redux";
import { Modal, List, Button } from 'semantic-ui-react';
import { addPlayerToEvent, fetchEvents } from "../redux/actions/index";






class PlayerDetail extends React.Component {
  render(){
    return (
      <Modal
        open={this.props.isPlayerDetailModalOpen}
        onOpen={()=> this.props.openPlayerDetailModal()}
        onClose={()=> this.props.closePlayerDetailModal()}
        trigger={
           <Button circular >
             Player Detail
           </Button>}
        >
        Hello
      </Modal>
    )
  }
}


const mapStateToProps = state => {
  let event = state.events.find( event => event.name === state.dropValue.value)
  return {
    loading: state.loading,
    events: state.events,
    event: event,
    users: state.users,
    userEvents: state.userEvents,
    dropValue: state.dropValue.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlayerToEvent: value => dispatch(addPlayerToEvent(value)),
    fetchEvents: value => dispatch(fetchEvents(value))
  };
};






export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetail);
