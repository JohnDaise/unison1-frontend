import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { changeDropValue, changeRouter } from "../redux/actions";
import { Dropdown } from 'semantic-ui-react'



class PickEvent extends React.Component {

constructor(props){
  super(props)
  this.props.history.listen((location, action) => {
      this.props.reset();
  });

}


render(){
  return(
    <React.Fragment>
        <Dropdown
          fluid selection
          size='medium'
          onChange={(e, value )=> {
            // e.persist();
            this.props.onChange(value)}
          }
          placeholder='Choose Event'
          name="choices"
          options={this.props.choices}
          value={this.props.value}
        />
    </React.Fragment>
  )}
}


const mapStateToProps = (state, propsFromParent) => {
  function createObj(obj){
    return {value: obj.name, text: obj.name }
  }
  let array = [{ value: '' , text: '' }]
  let userEvents = state.events.filter( event => event.user_id === propsFromParent.currentUser.id)
  let choices = array.concat(userEvents.map( event => createObj(event)))

  return {
    loading: state.loading,
    events: state.events,
    userEvents: userEvents,
    value: state.dropValue.value,
    choices: choices,
    selected: choices[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(changeDropValue(value)),
    reset: change => dispatch(changeRouter(change))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PickEvent));
