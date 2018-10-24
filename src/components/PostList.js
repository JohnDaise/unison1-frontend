import React from "react";
import { connect } from "react-redux";

import { Grid, List } from 'semantic-ui-react'
import Iframe from 'react-iframe'
import Post from './Post'


const PostList = (props) => {


//new post form creates an iframe element if it includes a url otherwise would just show post content
//-sets the src string and would need an id

// let post = {url: "https://www.youtube.com/embed/Rp8WL621uGM", content: "Lets do this verison :)"}

  return(
    <Grid.Column>
      <List>
        {props.eventPosts ?
          props.eventPosts.map( post =>
          <List.Item><Post post={post} currentUser={props.currentUser}/></List.Item>
        ): null }
      </List>
    </Grid.Column>
  )
}
///get list of posts from mapStateToProps


const mapStateToProps = (state, propsFromParent) => {
  let eventPosts = state.posts.filter(post => post.event_id === propsFromParent.singleEvent.id)
  return {
    loading: state.loading,
    events: state.events,
    posts: state.posts,
    eventPosts: eventPosts
  };
};


export default connect(mapStateToProps)(PostList);


// {props.currentUser.posts.map(post => {
//     <Post post={post}/>
//     }
// )}
