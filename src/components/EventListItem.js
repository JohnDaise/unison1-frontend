import React from "react";
import { Link } from "react-router-dom";

import moment from 'moment';

const EventListItem = (props) => {


  let weekday = {
   0: "Sunday",
   1: "Monday",
   2: "Tuesday",
   3: "Wednesday",
   4: "Thursday",
   5: "Friday",
   6: "Saturday",
}



return(
  <Link to={`/myevents/${props.event.id}`}>
    <h2>{props.event.name} : {weekday[moment(props.event.datetime).format('E')]} {moment(props.event.datetime).format('MMMM DD YYYY')}</h2>
  </Link>
)


}
// moment("2014-02-27T10:00:00").format('DD-MM-YYYY')


export default EventListItem ;


// console.log(moment(props.event.datetime, 'DD-MM-YYYY').toDate()),
// console.log(moment(props.event.datetime, 'DD-MM-YYYY')._d),
