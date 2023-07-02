import React, { useEffect, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import PostCard from "../PostCard/PostCard";
import { getfilterDataBySort } from "../../Utils/Utils";

export default function PostList( { postListData, headerState } ) {

  
  return (
    <div>
       <header className="postFeed_container-header">

       
        <span> Latest posts</span>
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
      </header> 

      

      <ul>
        {postListData?.map((item) => (
          <PostCard key={item._id} post={item} />
        ))}
      </ul>
    </div>
  );
}
