import React from 'react';
import { connect } from "react-redux";

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

handleChange = (e, { value }) => {
  this.setState({ value })
  return this.state.value
}

///need to find a way to capture state of this dropdown and place into this callback
// props.filterBySort = (this.state.value) => {
//
// }


render(){
  console.log(this.state.value)
  // const { value } = this.props.events
//map thru the array of events and make each element of choices a include the event text and value

function createObj(obj){
  return {text: obj.name, value: obj.name }
}
  const choices = this.props.events.map( event => createObj(event))



  return(
    <React.Fragment>
        <Dropdown
          fluid selection
          size='small'
          onChange={(e, { value })=> this.handleChange(e, { value })}
          placeholder='Choose Event'
          name="choices"
          options={choices}
        />
    </React.Fragment>
  )}
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};




export default connect(mapStateToProps)(PickEvent);
