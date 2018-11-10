import React from 'react';
import { connect } from "react-redux";
import { Grid, Card, Button, Image, Icon } from 'semantic-ui-react';
import { addPlayerToEvent } from "../redux/actions/index";





class UserCard extends React.Component {

addPlayer = (e) => {
  e.preventDefault();
  let eventId = this.props.event.id
  let playerId = this.props.user.id
  let dropValue = this.props.dropValue
  let event = this.props.event
  let payload = {
    eventId: eventId,
    playerId: playerId,
    dropValue: dropValue,
    event: event
  }
  this.props.addPlayerToEvent({payload})

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
        // this.props.event.users.map( player => player.id).includes(this.props.user.id)
            this.props.user.events.map( event => event.id ).includes(this.props.event.id) ? null :
          <Button
            onClick={(e)=> {
              // this.props.addPlayerToEvent()
              this.addPlayer(e)
            }//add a function here that will listen for change in the event and re render
            }>Add Player</Button>
          }
    </Card>
    </Grid.Column>
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
  };
};






export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
