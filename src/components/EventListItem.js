import React from "react";
import { Link } from "react-router-dom";
import EventDetail  from './EventDetail'
import DeleteButton  from './DeleteButton'
import { Segment } from 'semantic-ui-react'

const EventListItem = ({event}) => {

return(
  <Link
    className="item"
    event={event}
    to={`/myevents/${event.id}`}>
    <h2>{event.name}</h2>
  </Link>
)


}



export default EventListItem ;
