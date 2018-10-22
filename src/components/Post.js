import React from "react";
import { Grid } from 'semantic-ui-react';
import { connect } from "react-redux";

import Iframe from 'react-iframe';



const Post = (props) => {


//new post form creates an iframe element if it includes a url otherwise would just show post content
//-sets the src string and would need an id
//find simple way to check if there is a valid url (maybe npm package) before rendering

  return(
    console.log(props.post),
    console.log("https://www.youtube.com/embed/"+ props.post.url.split("/")[3]),
    <React.Fragment>
        {props.post.url !== "" ?
          <div>
          Notes: <p>{props.post.content}</p>
        <iframe width="380"
          height="157"
          src={"https://www.youtube.com/embed/"+ props.post.url.split("/")[3]}
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

// const mapStateToProps = (state, propsFromParent) => {
//   // let post = state.posts.find(post => post.id === props.singleEvent.id)
//   return {
//     loading: state.loading,
//     events: state.events,
//     posts: state.posts,
//   };
//  };
//
//  export default connect(mapStateToProps)(Post);
 export default Post;


// let event = state.events.find(event => event.id === parseInt(propsFromParent.eventId))



// <iframe width="380"
// height="200"
// src={props.post.url}
// frameborder="0"
// allow="autoplay; encrypted-media"
// allowfullscreen></iframe>
//
//






    // {props.post.url !== "" ?
    //   <div>
    //   Notes: <p>{props.post.content}</p>
    //   <iframe width="380"
    //   height="200"
    //   src={props.post.url}
    //   frameborder="0"
    //   allow="autoplay; encrypted-media"
    //   allowfullscreen></iframe>
    //   </div> :
    //
    //   <div>
    //     <p>{props.post.content}</p>
    //   </div>
  // }










//
// <iframe width="380"
// height="157"
// src="https://www.youtube.com/embed/Rp8WL621uGM"
// frameborder="0"
// allow="autoplay; encrypted-media"
// allowfullscreen></iframe>
// <h1>"post.content"</h1>
