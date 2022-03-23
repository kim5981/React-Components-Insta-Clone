import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  //posts need data from a post vv 
  const { likePost, posts } = props;
  //const likePost = props.likePost

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/** loop over the data (posts) rendering a POST as you go */}
      { posts.map(post => {
        return <Post likePost= { likePost } post= { post } /> //* <-- giving props to Post for likePost & posts 
      }) } 
      
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
