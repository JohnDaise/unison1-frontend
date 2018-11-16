import React from "react";
import { connect } from "react-redux";

import { Grid, List } from 'semantic-ui-react';
import Post from './Post';


const GigPostList = (props) => {


  return(
    console.log(props),
    <Grid.Column>
      <List>
        {props.gigPosts ?
          props.gigPosts.reverse().map( post =>
            <List.Item><Post post={post} currentUser={props.currentUser}/></List.Item>
          ) : null
        }
      </List>
    </Grid.Column>

  )
}
///get list of posts from mapStateToProps


const mapStateToProps = (state, propsFromParent) => {
  console.log(propsFromParent)
  let gigPosts = propsFromParent.gig.posts.filter(post => post.event_id === propsFromParent.gig.id)
  return {
    loading: state.loading,
    events: state.events,
    posts: state.posts,
    gigPosts: gigPosts
  };
};


export default connect(mapStateToProps)(GigPostList);

//
// {props ?
//   props.map( post =>
//   <List.Item><Post post={post} currentUser={props.currentUser}/></List.Item>
// ): null}

// {props.currentUser.posts.map(post => {
//     <Post post={post}/>
//     }
// )}
