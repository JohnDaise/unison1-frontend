import React from 'react';
import { connect } from "react-redux";
import { Grid, Card, Button, Modal } from 'semantic-ui-react'
import AddUserToEvent from './AddUserToEvent'


class UserCard extends React.Component {

/// create a function that finds the value of the dropdown, gets the matching event, then creates a new user_event to make association between that user and event

addPlayerToEvent = () => {
  console.log('added user to event')
  //capture user id
  //capture event id
  //create user_event using both
}

render(){
  console.log(this.props.dropValue)
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





export default connect(mapStateToProps)(UserCard);


//showDetail for a single instrument
// <Card >
//   <Card.Header as='h3'>{this.props.instrument.brand} {this.props.instrument.name}</Card.Header>
//     {this.props.instrument.category_id === 2 ?
//     <Image src={this.props.instrument.pic_url} size='medium' rounded={true} centered verticalAlign='middle' />
//     :<Image src={this.props.instrument.pic_url} size='small' rounded={true} centered verticalAlign='middle' />}
//   <Card.Content>
//     <Header as='h5' >
//       Color: {this.props.instrument.color} <br/>
//       Condition: {this.props.instrument.condition}<br/>
//     </Header>
//     <Header as='h4' color='red' >
//       Price: ${this.props.instrument.price}<br/>
//     </Header>
//   </Card.Content>
// </Card>
