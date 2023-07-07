import React, { useContext } from 'react'
import "./BookmarkFeed.css"
import { DataContext } from '../../context/DataContext'
import PostList from '../PostList/PostList';

export default function BookmarkFeed() {

    const{state:{userProfile}} = useContext(DataContext)

    const bookmarksList = userProfile?.bookmarks;

    // console.log(bookmarksList
    //   )


  return (
    <div className="postFeed_container">
         <section className='bookmark-list'>
      {bookmarksList?.length > 0 ? (
        <PostList postListData={bookmarksList} headerState={"Bookmark"} />
      ) : (
        <p className="emptyBookmark">You don't have any posts bookmarked!</p>
      )}
    </section>
      
    </div>
  )
}
