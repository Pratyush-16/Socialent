import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { useParams } from 'react-router'
import ProfileFeed from '../../components/ProfileFeed/ProfileFeed'
import PostList from '../../components/PostList/PostList'

export default function ProfilePage() {

    const {state: {users, posts} } = useContext(DataContext)

    const {profileId} = useParams()

    const profileUsername = users?.find(
        (user) => user?._id === String(profileId)
      )?.username;

      const userPosts = posts?.filter((post) => post.username === profileUsername);

  return (
    <div>

        <ProfileFeed/>

        <PostList postListData={userPosts} headerState={"Profile"} />


      
    </div>
  )
}
