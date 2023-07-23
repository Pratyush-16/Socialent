

import { useContext } from "react";
import PostCard from "../PostCard/PostCard";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import { userFeedPost } from "../../Utils/Utils";


export default function PostList( { postListData, headerState } ) {

  const{user} = useContext(AuthContext)
  //console.log(user,"USERData")


  const {state: {filterApplied, users, userProfile} } = useContext(DataContext) 
  //console.log("users", users)
  console.log("userProfile", userProfile)

  const userFollowing = userProfile?.following?.map((user) => user.username);
  console.log("userFollowing", userFollowing)

  const userFeed = userFeedPost(postListData, filterApplied, userFollowing, userProfile);
  console.log("userFeed", userFeed)

  return (
    <div className="post-width-container">
       {/* <header className="postFeed_container-header"> */}

       
        {/* <span> Latest posts</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'space-around',
            padding: "10px",
      borderRadius: "8px",
          }}
        >
          <span >Trending</span>
          <span >Oldest</span>
          <span >Clear Filter</span>
        </div>
      </header>  */}

      

      <ul>
        {userFeed?.map((item) => (
          <PostCard key={item._id} post={item} />
        ))}
      </ul>
    </div>
  );
}
