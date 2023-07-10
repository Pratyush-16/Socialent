import React, { useContext } from 'react'
import "../Navbar/Navbar.css"
import {  useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import { useSearch } from '../../Utils/Utils'
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from '../../context/AuthContext'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const  Navbar =() => {

  const navigate = useNavigate()

  const{state:{userProfile}} = useContext(DataContext)
  const {logoutHandler} = useContext(AuthContext)

  const { searchInput, searchHandler, searchResult, clearSearchHandler } =
  useSearch();

  const profileHandler = (navigateStatus, profileId) => {
    navigateStatus === "home"
      ? navigate("/")
      : navigate(`profile/${profileId}`);
    clearSearchHandler();
  };

  
  return (

    <div className='navabr-main-container'>


        <span className='title' onClick={()=> navigate('/')}>My Socials</span>

        <div className="nav_search flex-center">
          <label htmlFor="searchInput">
            <input
              id="searchInput"
              type="text"
              className="searchInput"
              placeholder="Search"
              value={searchInput}
              onChange={searchHandler}
            />
            <span className="flex-center">
              {searchInput.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon onClick={clearSearchHandler} />
              )}
            </span>
          </label>

          <span
            className={`searchResult_container  ${
              searchInput.length !== 0 && "active"
            } `}
          >
            {searchResult.length > 0 ? (
              searchResult?.map((item, id) => (
                <span
                  key={item.username}
                  className="searchResult_container-section "
                >
                  <span onClick={() => profileHandler("profile", item?._id)}>
                    <span className=" searchResult_Imgcontainer">
                      <img src={item?.profileImage} alt="searched profile" />
                    </span>
                    <span className="searchResult_container-name">
                      {item.firstname} {item.lastname}
                    </span>
                  </span>
                </span>
              ))
            ) : (
              <div className="searchResult_container-section-error">
                No Results found!
              </div>
            )}
          </span>
        </div>

        <div className='navbar-links'>
            

            <span>
              <DarkModeIcon/>
            </span>
           
           <span onClick={logoutHandler}>
            <LogoutOutlinedIcon/>
           </span>
        </div>
         
      
    </div>
  )
}
