import React, { useContext } from 'react'
import "./Explore.css"
import { Navbar } from '../../components/navbar/Navbar'
import PostCard from '../../components/PostCard/PostCard'
import PostList from '../../components/PostList/PostList'
import { DataContext } from '../../context/DataContext'
import SideBar from '../../components/Sidebar/Sidebar'
import SuggestionBar from '../../components/SuggestionBar/SuggestionBar'

export default function Explore() {

  const {state:{posts,userProfile,users}}= useContext(DataContext)


  return (

    <div className="page-container">

     <aside >
        <SideBar/>
      </aside>
       

       <div className="postFeed_container">
       <PostList postListData={posts}/>
       </div>

       

       <aside >
        <SuggestionBar/>
      </aside>
      
    </div>
  )
}
