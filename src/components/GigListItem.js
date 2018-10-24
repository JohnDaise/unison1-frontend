import React from "react";
import { NavLink, Link } from "react-router-dom";
import EventDetail  from './EventDetail';
import DeleteButton  from './DeleteButton';
import { Segment } from 'semantic-ui-react';
import moment from 'moment';

const GigListItem = (props) => {

  let weekday = {
   0: "Sunday",
   1: "Monday",
   2: "Tuesday",
   3: "Wednesday",
   4: "Thursday",
   5: "Friday",
   6: "Saturday",
}



console.log(props)
return(
  <Link to={`/gigs/${props.gig.id}`}>
    <h2>{props.gig.name} : {weekday[moment(props.gig.datetime).format('E')]} {moment(props.gig.datetime).format('MMMM DD YYYY')}</h2>
  </Link>
)

}



export default GigListItem ;
