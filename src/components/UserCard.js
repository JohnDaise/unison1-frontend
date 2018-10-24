import React from 'react';
import { connect } from "react-redux";
import { Grid, Card, Button, Modal, Image, Icon } from 'semantic-ui-react';
import { fetchEvents } from "../redux/actions/index";
import AddUserToEvent from './AddUserToEvent'


class UserCard extends React.Component {

//dispatch fetchEvents

addPlayerToEvent = () => {
//adjust logic and find a way to empty dropValue componentDidMount
  if (this.props.dropValue.value){
    let event = this.props.events.find( event => event.name === this.props.dropValue.value)
    let eventId = event.id
    let playerId = this.props.user.id
  if (event.users.map(user => user.id).includes(playerId)){
    window.alert("Player already added")
  } else {
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
  }
} else {
 this.props.openWarningModal()
}}


render(){
  // let event = this.props.events.find( event => event.name === this.props.dropValue.value)
  // let playerId = this.props.user.id
  // let user = this.
  return(
    <Grid.Column>
    <Card>
      <Card.Content>
        <Image src={this.props.user.pic_url} circular size="small"/>
          <br/>
          <br/>
        <Card.Header as='h3' id={this.props.user.id}  >{this.props.user.name}</Card.Header>
        <Icon name="envelope"/> {this.props.user.email}<br/>
        <Icon name="phone"/> {this.props.user.phone_number}<br/>
        <Icon name="file alternate"/> {this.props.user.bio}
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
    users: state.users,
    dropValue: state.dropValue
  };
};





export default connect(mapStateToProps,{ fetchEvents })(UserCard);
