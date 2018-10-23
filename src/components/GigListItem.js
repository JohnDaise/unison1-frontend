import React from "react";
import { NavLink, Link } from "react-router-dom";
import EventDetail  from './EventDetail'
import DeleteButton  from './DeleteButton'
import { Segment } from 'semantic-ui-react'

const GigListItem = (props) => {

return(
  console.log(props),
  <Link to={`/gigs/${props.gig.id}`}>
    <h2>{props.gig.name} : {props.gig.date}</h2>
  </Link>
)


}



export default GigListItem ;
