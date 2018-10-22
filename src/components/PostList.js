import React from "react";
import { Grid } from 'semantic-ui-react'
import Iframe from 'react-iframe'
import Post from './Post'


const PostList = (props) => {


//new post form creates an iframe element if it includes a url otherwise would just show post content
//-sets the src string and would need an id

let post = {url: "https://www.youtube.com/embed/Rp8WL621uGM", content: "Lets do this verison :)"}

  return(
    <Grid.Column>
      <Post post={post}/>
    </Grid.Column>

  )

}



export default PostList;

// {props.currentUser.posts.map(post => {
//     <Post post={post}/>
//     }
// )}
