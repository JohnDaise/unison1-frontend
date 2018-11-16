import React from 'react';
import { connect } from "react-redux";
import { Grid, Card, Button, Image, Icon } from 'semantic-ui-react';
import { addPlayerToEvent, fetchEvents, createdUserEvent, fetchUserEvents } from "../redux/actions/index";





class UserCard extends React.Component {

  // componentDidMount(){
  //   this.props.fetchEvents()
  // }

addPlayer = (e) => {
  e.preventDefault();
  let eventId = this.props.event.id
  let playerId = this.props.player.id
  let dropValue = this.props.dropValue
  let event = this.props.event
  let payload = {
    eventId: eventId,
    playerId: playerId,
    dropValue: dropValue,
    event: event
  }
  this.props.addPlayerToEvent({payload})
  this.props.fetchUserEvents();
}

// addPlayerToEvent = () => {
// //adjust logic and find a way to empty dropValue componentDidMount
//   if (this.props.dropValue.value && this.props.event){
//     let eventId = this.props.event.id
//     let playerId = this.props.user.id
//   if (this.props.event.users.map(user => user.id).includes(playerId)){
//     window.alert("Player already added")
//   } else {
//   fetch(`http://localhost:3001/user_events/`, {
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//     'Content-Type': 'application/json',
//     Accept: "application/json"
//   },
//   body: JSON.stringify({
//         user_id: playerId,
//         event_id: eventId
//       })
//   })
//     .then(r => r.json())
//       .then(json => console.log(json))
//   // this.props.fetchEvents();
//   this.props.openPlayerAddedModal()
//   }
// } else {
//  this.props.openWarningModal()
// }}


render(){
  console.log(this.props.user)
  // let eventId = this.props.event.id
  // let playerId = this.props.user.id
  //
  // let payload = {
  //   eventId: eventId,
  //   playerId: playerId
  // }
  // console.log(event === undefined)
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
      {this.props.event === undefined ? null :
            this.props.ue ? null :
          <Button
            onClick={(e)=> {
              this.addPlayer(e);
            }
            }>Add Player</Button>
          }
    </Card>
    </Grid.Column>
  )
  }
}

const mapStateToProps = (state, propsFromParent) => {
  let event = state.events.find( event => event.name === state.dropValue.value)
  let player = state.users.find( player => player.id === propsFromParent.user.id)
  let playerUes = state.userEvents ? state.userEvents.filter(a => a.user_id === player.id) : null
  let ue = event ? playerUes.find(ue => ue.event_id === event.id) : null
  console.log(playerUes)
  return {
    loading: state.loading,
    events: state.events,
    event: event,
    users: state.users,
    player: player,
    ue: ue,
    userEvents: state.userEvents,
    dropValue: state.dropValue.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlayerToEvent: value => dispatch(addPlayerToEvent(value)),
    fetchEvents: value => dispatch(fetchEvents(value)),
    fetchUserEvents: value => dispatch(fetchUserEvents(value)),
    createdUserEvent: ue => dispatch(createdUserEvent(ue))
  };
};






export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
