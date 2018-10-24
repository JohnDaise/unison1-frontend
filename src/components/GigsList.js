import React from "react";

import GigListItem  from './GigListItem'
import { connect } from "react-redux";

import { Grid, Loader, List, Button } from 'semantic-ui-react'

//map thru all userEvents that include currentUser id. those userEvents will have event ids
class GigsList extends React.Component{


render(){
  let player =  this.props.users.find(user => user.id === this.props.currentUser.id);
return(
      <React.Fragment>
        {this.props.loading ?
        <Loader active inline='centered' />
      :
        <List>
          {player ?
            player.events.length === 0 ?
            <h1>No Gigs Scheduled</h1>:
          player.events.map(gig =>
           <List.Item><GigListItem gig={gig} /></List.Item>
         )

         : null }
       </List>}
      </React.Fragment>
    )
  }
};

const mapStateToProps = (state, propsFromParent) => {
  return {
    loading: state.loading,
    events: state.events,
    users: state.users,
    userEvents: state.userEvents
  };
};


export default connect(mapStateToProps)(GigsList);
