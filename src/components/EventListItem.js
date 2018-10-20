import React from "react";
import { NavLink, Link } from "react-router-dom";
import EventDetail  from './EventDetail'
import DeleteButton  from './DeleteButton'
import { Segment } from 'semantic-ui-react'

const EventListItem = (props) => {

return(
  <Link to={`/myevents/${props.event.id}`}>
    <h2>{props.event.name} : {props.event.date}</h2>
  </Link>
)


}



export default EventListItem ;
