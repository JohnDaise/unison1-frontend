import React from 'react';
import { connect } from "react-redux";
import { changeDropValue } from "../redux/actions";
import { Dropdown } from 'semantic-ui-react'



class PickEvent extends React.Component {
  constructor(){
    super()
    this.state={
      value:{
        text: '',
        value: ''
      }
    }
  }

componentDidMount(){
  this.handleChange();
}

handleChange = () => {
  this.setState({
    value:{
      text: '',
      value: ''
    }
  });
};



render(){
  // const { value } = this.props.events
//map thru the array of events and make each element of choices a include the event text and value

function createObj(obj){
  return {text: obj.name, value: obj.name }
}
  const choices = this.props.userEvents.map( event => createObj(event))



  return(
    <React.Fragment>
        <Dropdown
          fluid selection
          size='medium'
          onChange={(e, value )=> {
            e.persist();
            this.props.onChange(value)}
          }
          placeholder='Choose Event'
          name="choices"
          options={choices}
        />
    </React.Fragment>
  )}
}


const mapStateToProps = (state, propsFromParent) => {
  let userEvents = state.events.filter( event => event.user_id === propsFromParent.currentUser.id)
  return {
    loading: state.loading,
    events: state.events,
    userEvents: userEvents,
    value: state.dropValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(changeDropValue(value))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(PickEvent);
