import React, { useContext, useEffect } from "react";
import "./Home.css";
import { Navbar } from "../../components/navbar/Navbar";

import { getAllPost } from "../../services/DataServices";
import PostCard from "../../components/PostCard/PostCard";
import { DataContext } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import AddPost from "../../components/AddPost/AddPost";
import Sidebar from "../../components/Sidebar/Sidebar";
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar";

export default function Home() {
  const {
    state: { posts },dispatch
  } = useContext(DataContext);

  return (
    <article className="page-container">
       <aside >
        <Sidebar/>
      </aside>
      <div className="postFeed_container">
        <AddPost />
        <hr/>
        <div>
        <button onClick={()=> dispatch({type: "filterApplied", payload: "Trending"})}>Trending</button>
        <button onClick={()=> dispatch({type: "filterApplied", payload: "Latest"})}>Latest</button>
        <button onClick={()=> dispatch({type: "filterApplied", payload: "Oldest"})}>Oldest</button> 
        </div>
        

        <PostList postListData={posts} />
      </div>

      <aside >
        <SuggestionBar/>
      </aside>

     

    </article>
  );
}
