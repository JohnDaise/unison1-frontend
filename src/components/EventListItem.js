import React from "react";
import { Link } from "react-router-dom";
import EventDetail  from './EventDetail'


const EventListItem = ({event}) => {

return(
  <Link className="item" to={`/myevents/${event.id}`}>
    <h2>{event.name}</h2>
  </Link>
)


}



export default EventListItem ;
