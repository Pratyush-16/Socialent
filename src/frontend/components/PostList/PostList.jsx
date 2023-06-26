import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import PostCard from "../PostCard/PostCard";

export default function PostList({ postListData }) {
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
          <span>Trending</span>
          <span>Latest</span>
          <span>Oldest</span>
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
