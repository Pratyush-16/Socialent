import React from 'react'
import SortIcon from "@mui/icons-material/Sort";
import PostCard from '../PostCard/PostCard';

export default function PostList({postState}) {
  return (
    <div>

     

            <header className="postFeed_container-header">
        <span> Latest posts</span>
        <span className="postFeed_settings flex-column">
            <span>Trending</span>
            <span>Latest</span>
            <span>Oldest</span>
          </span>
      </header>

      <ul>
       { postState.map((item) => (
              <PostCard key={item.username} post={item}/>
        ))
        }
      </ul>
        
      
    </div>
  )
}
