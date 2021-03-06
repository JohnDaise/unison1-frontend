import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchEvents, fetchPosts, deletePost } from "../redux/actions/index";

import { Message, Button } from 'semantic-ui-react';



class Post extends React.Component{


renderIframe = (params) => {
    let owner = this.props.post.user_id === this.props.currentUser.id
      if (this.props.post.url.includes('youtube')){
        return (
         <Message compact floating>
           {owner ? <Button id={this.props.post.id}
             size="small"
             onClick={(e)=>{
               this.props.deletePost(e.target.id);
             }}>X</Button> : null }
         <h4>{this.props.post.content}</h4>
       <iframe width="400"
           height="300"
           title={this.props.post.id}
           src={"https://www.youtube.com/embed/"+ this.props.post.url.split("=")[1]}
           frameborder="0"
           allow="autoplay; encrypted-media"
           allowfullscreen></iframe>
       </Message>
         )
       }
      else if (this.props.post.url.includes('youtu')){
      return (
          <Message compact floating>
          {owner ? <Button id={this.props.post.id}
            onClick={(e)=>{
              this.props.deletePost(e.target.id);
            }}>X</Button> : null}
          <h4>{this.props.post.content}</h4>
        <iframe width="400"
            height="300"
            title={this.props.post.id}
            src={"https://www.youtube.com/embed/"+ this.props.post.url.split("/")[3]}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
          </Message>
          )
        }
      else if (this.props.post.url.includes('pdf')){
      return (
          <Message compact floating>
          {owner ? <Button id={this.props.post.id}
              size="small"
              onClick={(e)=>{
                this.props.deletePost(e.target.id);
              }}>X</Button> : null }
          <h4>{this.props.post.content}</h4>
        <iframe width="600"
            height="600"
            title={this.props.post.id}
            src={this.props.post.url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
            </Message>
          )
        }
      else if (this.props.post.url.includes('jpg')){
      return (
          <Message compact floating>
            {owner ? <Button id={this.props.post.id}
              size="small"
              onClick={(e)=>{
                this.props.deletePost(e.target.id);
              }}>X</Button> : null }
          <h4>{this.props.post.content}</h4>
        <iframe width="600"
            height="600"
            title={this.props.post.id}
            src={this.props.post.url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
            </Message>
          )
        }
         else {
            return (
              <Message compact floating>
                {owner ? <Button id={this.props.post.id}
                  size="small"
                  onClick={(e)=>{
                    this.props.deletePost(e.target.id);
                  }}>X</Button> : null }
                <h2>{this.props.post.content}</h2>
              </Message>
            )
          }
}


render(){
  return(
    <React.Fragment>
        {this.renderIframe(this.props.post.url)}
     </React.Fragment>
  )
  }
}

const mapStateToProps = (state, propsFromParent) => {
  return {
    loading: state.loading,
    events: state.events,
    posts: state.posts
  };
 };




export default connect(
  mapStateToProps,
  {  fetchEvents, fetchPosts, deletePost }
)(withRouter(Post));


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



 // case this.props.post.url.includes('jpg'):
 // return (
 //    <div>
 //    Notes: <p>{this.props.post.content}</p>
 //      <iframe
 //        style="border:1px solid #666CCC"
 //        title="PDF in an i-Frame"
 //        src={this.props.post.url}
 //        frameborder="1"
 //        scrolling="auto"
 //        height="1100"
 //        width="850" ></iframe>
 //      </div>
 //    )
 //      break;



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
