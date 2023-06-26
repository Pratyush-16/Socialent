import React, { useContext, useEffect } from "react";
import "./Home.css";
import { Navbar } from "../../components/Navbar/Navbar";

import { getAllPost } from "../../services/DataServices";
import PostCard from "../../components/PostCard/PostCard";
import { DataContext } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import AddPost from "../../components/AddPost/AddPost";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  const {
    state: { posts, userProfile, users },
  } = useContext(DataContext);

  return (
    <article className="page-container">
      <div className="postFeed_container">
        <AddPost />

        <PostList postListData={posts} />
      </div>

      <aside className="side-container">
        <Sidebar/>
      </aside>

    </article>
  );
}
