import React from 'react';
import { Grid, Image, Card, Header } from 'semantic-ui-react'

class UserCard extends React.Component {





render(){
  return(
    <Grid.Column>
    <Card >
        // <Image src={this.props.user.pic_url} size='medium' rounded={true} centered verticalAlign='middle' />
      <Card.Content>
        <Card.Header as='h3'>{this.props.user.name}</Card.Header>
        Email: {this.props.user.email}<br/>
        Phone Number: {this.props.user.phone_number}<br/>
        Bio: {this.props.user.bio}
      </Card.Content>

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
