import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import PostList from '../PostList/PostList';

export default function BookmarkFeed() {

    const{state:{userProfile}} = useContext(DataContext)

    const bookmarksList = userProfile?.bookmarks;

    console.log(bookmarksList
      )


  return (
    <div>
         <section className="postFeed_container">
      {bookmarksList?.length > 0 ? (
        <PostList postListData={bookmarksList} headerState={"Bookmark"} />
      ) : (
        <p className="emptyBookmark">You don't have any posts bookmarked!</p>
      )}
    </section>
      
    </div>
  )
}
