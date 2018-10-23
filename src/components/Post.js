import React from "react";
import { Grid } from 'semantic-ui-react';
import { connect } from "react-redux";



class Post extends React.Component{


renderIframe = (params) => {

      if (this.props.post.url.includes('youtube')){
        return (
         <div>
         Notes: <p>{this.props.post.content}</p>
       <iframe width="400"
           height="300"
           src={"https://www.youtube.com/embed/"+ this.props.post.url.split("=")[1]}
           frameborder="0"
           allow="autoplay; encrypted-media"
           allowfullscreen></iframe>
           </div>
         )
       }
      else if (this.props.post.url.includes('youtu')){
      return (
          <div>
          Notes: <p>{this.props.post.content}</p>
        <iframe width="400"
            height="300"
            src={"https://www.youtube.com/embed/"+ this.props.post.url.split("/")[3]}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
            </div>
          )
        }
      else if (this.props.post.url.includes('pdf')){
      return (
          <div>
          Notes: <p>{this.props.post.content}</p>
        <iframe width="600"
            height="300"
            src={this.props.post.url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
            </div>
          )
        }
      else if (this.props.post.url.includes('jpg')){
      return (
          <div>
          Notes: <p>{this.props.post.content}</p>
        <iframe width="600"
            height="300"
            src={this.props.post.url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
            </div>
          )
        }
         else {
            return (
              <div>
                <p>{this.props.post.content}</p>
              </div>
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

 export default Post;
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
