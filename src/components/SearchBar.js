import React from 'react';
import { connect } from 'react-redux';
import { changeSearchText } from "../redux/actions";
import { Input, Segment } from 'semantic-ui-react';



const SearchBar = (props) => (
     <Segment >
       <Input
       size='large'
       placeholder="Search..."
       value={props.value}
       onChange={e => props.onChange(e.target.value)}></Input>
    </Segment>
)

const mapStateToProps = state => {
  return {
    value: state.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(changeSearchText(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
