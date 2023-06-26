import React, { useContext } from 'react'

import { DataContext } from '../../context/DataContext'
import PostList from '../PostList/PostList';

export default function LikedPostFeed() {

    const {state: {posts, userProfile}} = useContext(DataContext)   


    const likedPosts = posts.filter((post) => {
        return post.likes.likedBy.some((likedList) => {
            return likedList.username === userProfile.username;
          });
    })


  return (
    <div>

<section className="postFeed_container">
      {likedPosts.length > 0 ? (
        <PostList postListData={likedPosts} headerState={"Liked Posts"} />
      ) : (
        <p className="emptylikedPosts">You don't have any liked posts!</p>
      )}
    </section>
      
    </div>
  )
}
