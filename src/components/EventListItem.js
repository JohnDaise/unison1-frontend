import React from "react";
import { NavLink, Link } from "react-router-dom";
import EventDetail  from './EventDetail'
import DeleteButton  from './DeleteButton'
import { Segment } from 'semantic-ui-react'
import moment from 'moment';

const EventListItem = (props) => {


  let weekday = {
   1:  "Sunday",
   2: "Monday",
   3: "Tuesday",
   4:  "Wednesday",
   5: "Thursday",
   6:   "Friday",
   7:  "Saturday",
}



return(
  <Link to={`/myevents/${props.event.id}`}>
    <h2>{props.event.name} : {weekday[moment(props.event.datetime, 'DD-MM-YYYY').format('E')]} {moment(props.event.datetime, 'DD-MM-YYYY').format('MMM-DD-YYYY')}</h2>
  </Link>
)


}
// moment("2014-02-27T10:00:00").format('DD-MM-YYYY')


export default EventListItem ;


// console.log(moment(props.event.datetime, 'DD-MM-YYYY').toDate()),
// console.log(moment(props.event.datetime, 'DD-MM-YYYY')._d),
