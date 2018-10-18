import React from 'react';
import { connect } from "react-redux";
import { Grid, Card, Button, Modal } from 'semantic-ui-react'
import AddUserToEvent from './AddUserToEvent'


class UserCard extends React.Component {

render(){
  return(
    <Grid.Column>
    <Card>
      <Card.Content>
        <Card.Header as='h3'>{this.props.user.name}</Card.Header>
        Email: {this.props.user.email}<br/>
        Phone Number: {this.props.user.phone_number}<br/>
        Bio: {this.props.user.bio}
      </Card.Content>
      <AddUserToEvent currentUser={this.props.currentUser}/>
    </Card>
    </Grid.Column>
  )
  }
}



export default UserCard;


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
