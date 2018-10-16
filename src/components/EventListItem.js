import React from "react";

import EventDetail  from './EventDetail'


const EventListItem = ({event}) => {

return(
  console.log(event.name),
  <React.Fragment>
    <h2>{event.name}</h2>
  </React.Fragment>
)


}



export default EventListItem ;
