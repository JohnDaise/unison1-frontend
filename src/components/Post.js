import React from "react";
import { Grid } from 'semantic-ui-react'
import Iframe from 'react-iframe'



const Post = (props) => {


//new post form creates an iframe element if it includes a url otherwise would just show post content
//-sets the src string and would need an id

  return(
    <React.Fragment>
    {props.post.url !== "" ?
      <div>
      Notes: <p>{props.post.content}</p>
      <iframe width="380"
      height="157"
      src={props.post.url}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen></iframe>
      </div> :

      <div>
        <p>{props.post.content}</p>
      </div>
    }
    </React.Fragment>
  )


}



export default Post;

//
// <iframe width="380"
// height="157"
// src="https://www.youtube.com/embed/Rp8WL621uGM"
// frameborder="0"
// allow="autoplay; encrypted-media"
// allowfullscreen></iframe>
// <h1>"post.content"</h1>
