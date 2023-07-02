import React, { useContext } from 'react'
import "./ProfileFeed.css"
import { DataContext } from '../../context/DataContext'
import { AuthContext } from '../../context/AuthContext'
import { useParams } from 'react-router'
import { getUserProfileService, updateFollowList } from '../../services/UserServices'
import { Link } from 'react-router-dom'

export default function ProfileFeed() {

    const{state: {users,posts,userProfile} ,dispatch} = useContext(DataContext)

    const{token} = useContext(AuthContext)

    const {profileId} = useParams()

    const profileDetails = users.find((user) => user?._id === String(profileId));

    const isFollowed =
    profileDetails?._id !== userProfile?._id &&
    userProfile?.following.some((item) => item?._id === profileDetails?._id);

    const followHandler = (e, followUserId) => {
        e.stopPropagation();
        isFollowed
          ? updateFollowList(followUserId, token, dispatch)
          : updateFollowList(followUserId, token, dispatch);
      };
    
      const editProfileHandler = () => {
        getUserProfileService(profileDetails?._id, dispatch);
      };

      const userPosts = posts?.filter(
        (post) => post?.username === profileDetails?.username
      )?.length;


  return (
    <div className="profile_container">
        <div className="profile_ImgContainer">
          <img src={profileDetails?.profileImage} alt="profile" />
        </div>
        <div className="profile_detailsContainer flex-column">
          <div className="profile_details-partOne ">
            <div className="flex-column">
              <span className="fullname">
                {profileDetails?.firstname} {profileDetails?.lastname}
              </span>
              <span className="username">@{profileDetails?.username}</span>
            </div>

            <div>
              {userProfile?.username === profileDetails?.username ? (
                <span onClick={editProfileHandler} className="profile-edit">
                  Edit
                </span>
              ) : (
                <span
                  className="profile-edit"
                  onClick={(e) => followHandler(e, profileDetails?._id)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </span>
              )}
            </div>
          </div>

          <div className="profile_details-partTwo">
            <span>{profileDetails?.bio}</span>
          </div>
          <div className="profile_details-partThree">
            <span>{userPosts} Posts</span>
            <span> {profileDetails?.followers?.length} Followers</span>
            <span> {profileDetails?.following?.length} Following</span>
          </div>
          <div className="profile_details-partFour">
            <span>
              
              <Link to={profileDetails?.website}>
                {profileDetails?.website}
              </Link>
            </span>
          </div>
        </div>
      </div>
  )
}
