import React from "react";
import { Grid, List, Image, Icon, Modal } from 'semantic-ui-react'

import { connect } from "react-redux";
import { fetchEvents, fetchUsers, fetchedEvents, loading } from "../redux/actions/index";



const PlayersView = (props) => {



//each list item should be a link that renders a simple user details modal
  return(
    <Modal>

    </Modal>
  )





}


const mapStateToProps = (state, propsFromParent )=> {
  return {
    loading: state.loading,
    events: state.events,
    users: state.users
  };
};

export default connect(mapStateToProps)(PlayersView);
