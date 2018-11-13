import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Modal, Card, List, Icon, Button, Image } from 'semantic-ui-react';
import { addPlayerToEvent, fetchEvents, deleteUserEvent, fetchUserEvents, userEventDeleted } from "../redux/actions/index";



class PlayerDetail extends React.Component {

  handleClick = () => {
   this.props.openPlayerDetailModal(this.props.player)
  }

  render(){
    // console.log(this.props.p)
    return (
      <Modal
        open={this.props.isPlayerDetailModalOpen}
        onOpen={()=> this.handleClick()}
        onClose={()=> this.props.closePlayerDetailModal()}
        size={"mini"}
        trigger={
          <List.Item>
            <Image avatar src={this.props.p.pic_url} />
            <List.Content>
              <List.Header id={this.props.p.id} as='a'>{this.props.p.name}</List.Header>
              <List.Description>
              'Player'
              </List.Description>
            </List.Content>
          </List.Item>
         }
        >
            {this.props.singlePlayer ?
              <Modal.Content centered >
                <Card>
                <Card.Content centered >
                    <Image src={this.props.singlePlayer.pic_url} circular size="small" />
                      <br/>
                      <br/>
                    <h3 id={this.props.singlePlayer.id}> {this.props.singlePlayer.name} </h3>
                    <Icon name="envelope"/> {this.props.singlePlayer.email}<br/>
                    <Icon name="phone"/> {this.props.singlePlayer.phone_number}<br/>
                      <br/>
                      <br/>
                      <Button secondary id={""} onClick={(e)=> {
                          console.log(this.props.ue)
                          this.props.deleteUserEvent(this.props.ue.id);
                          this.props.fetchEvents();
                          this.props.userEventDeleted(this.props.ue);
                          //use redux action to reflect new user events
                          this.props.closePlayerDetailModal()
                        }}>
                        <Icon name='delete' />
                        Remove Player
                      </Button>
                  </Card.Content>
                  </Card>
                </Modal.Content>
            : null}
      </Modal>
    )
  }
}


const mapStateToProps = (state, propsFromParent) => {
  console.log(propsFromParent)
  // let event = state.events.find( event => event.name === state.dropValue.value)
  let player = state.users.find( player => player.id === propsFromParent.p.id )
   let ue = propsFromParent.singlePlayer ? state.userEvents.find( ue => ue.user_id === propsFromParent.singlePlayer.id ) : null
  return {
    loading: state.loading,
    events: state.events,
    // event: event,
    player: player,
    ue: ue,
    users: state.users,
    userEvents: state.userEvents,
    dropValue: state.dropValue.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserEvents: value => dispatch(fetchUserEvents(value)),
    deleteUserEvent: value => dispatch(deleteUserEvent(value)),
    addPlayerToEvent: value => dispatch(addPlayerToEvent(value)),
    fetchEvents: value => dispatch(fetchEvents(value)),
    userEventDeleted: value => dispatch(userEventDeleted(value))
  };
};






export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlayerDetail));
