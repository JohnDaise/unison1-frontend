import React from 'react';
import { connect } from "react-redux";
import { Grid, Card, Button, Modal } from 'semantic-ui-react';
import { fetchEvents } from "../redux/actions/index";
import AddUserToEvent from './AddUserToEvent'


class UserCard extends React.Component {

//dispatch fetchEvents

addPlayerToEvent = () => {
  console.log(this.props.dropValue.value)
  //make some sort of conditional so players are not added more than once
  if (this.props.dropValue.value){
  let eventId = this.props.events.find( event => event.name === this.props.dropValue.value).id
  let playerId = this.props.user.id
  fetch(`http://localhost:3001/user_events/`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json',
    Accept: "application/json"
  },
  body: JSON.stringify({
        user_id: playerId,
        event_id: eventId
      })
  })
    .then(r => r.json())
      .then(json => console.log(json))
  this.props.fetchEvents();
  this.props.openPlayerAddedModal()
} else {
 this.props.openWarningModal()
}}


render(){
  return(
    <Grid.Column>
    <Card>
      <Card.Content>
        <Card.Header as='h3' id={this.props.user.id}  >{this.props.user.name}</Card.Header>
        Email: {this.props.user.email}<br/>
        Phone Number: {this.props.user.phone_number}<br/>
        Bio: {this.props.user.bio}
      </Card.Content>
      <Button onClick={()=> this.addPlayerToEvent() }>Add Player</Button>
    </Card>
    </Grid.Column>
  )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events,
    dropValue: state.dropValue
  };
};





export default connect(mapStateToProps,{ fetchEvents })(UserCard);
