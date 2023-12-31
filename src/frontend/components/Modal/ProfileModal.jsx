import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import AvatarModal from "./AvatarModal";

import {useState, useEffect, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { validateOnlyString } from "../../Utils/Utils";
import { updateUserProfileService } from "../../services/UserServices";
import "./ProfileModal.css"

const ProfileModal = () => {
  const [updatedProfileData, setUpdatedProfileData] = useState({
    profileImage: "",
    firstname: "",
    lastname: "",
    bio: "",
    link: "",
  });

  const [profileDataError, setProfileDataError] = useState({
    firstname: "",
    lastname: "",
  });

  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const { token } = useContext(AuthContext);

  const {
    dispatch,
    state: { profileModalDetails },
  } = useContext(DataContext);

  const profileDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData({
      ...updatedProfileData,
      [name]: value,
    });

    if (name === "firstname") {
      let firstnameText = value.length;
      setProfileDataError({ ...profileDataError, [name]: "" });

      if (!validateOnlyString(value)) {
        setProfileDataError({
          ...profileDataError,
          [name]: "Firstname should be in text!",
        });
      }

      if (firstnameText < 3) {
        setProfileDataError({
          ...profileDataError,
          [name]: "Firstname should have atleast 3 character!",
        });
      }
    }

    if (name === "lastname") {
      setProfileDataError({ ...profileDataError, [name]: "" });

      if (!validateOnlyString(value)) {
        setProfileDataError({
          ...profileDataError,
          [name]: "Lastname should be in text!",
        });
      }
    }
  };

  const updateUserProfileHandler = () => {
    let flag = false;
    let errorMessage = {};

    Object.keys(updatedProfileData).forEach((element) => {
      if (updatedProfileData[element] === "") {
        errorMessage[element] = `${
          element.at(0).toUpperCase() + element.slice(1)
        } is required!`;
        flag = true;
      }
    });

    !flag
      ? updateUserProfileService(token, updatedProfileData, dispatch)
      : setProfileDataError(errorMessage);

    !flag &&
      setProfileDataError({
        firstname: "",
        lastname: "",
      }) &&
      setIsAvatarModalOpen(!isAvatarModalOpen);
  };

  const closeProfileModalHandler = () => {
    dispatch({
      type: "closeProfileModal",
    });
    setUpdatedProfileData({
      profileImage: "",
      firstname: "",
      lastname: "",
      bio: "",
      link: "",
    });
    setProfileDataError({
      firstname: "",
      lastname: "",
    });
  };

  const editUserImgHandler = (e) => {
    setIsAvatarModalOpen(!isAvatarModalOpen);
  };

  useEffect(() => {
    if (profileModalDetails) {
      setUpdatedProfileData({
        ...updatedProfileData,
        profileImage: profileModalDetails?.profileImage,
        firstname: profileModalDetails?.firstname,
        lastname: profileModalDetails?.lastname,
        bio: profileModalDetails?.bio,
        link: profileModalDetails?.website,
      });
    }
  }, []);

  return (
    <section className="profileModal-section">
      <div className="profileModal_container ">
        <div className="profileModal_container-header">
          <span className="title">Edit Profile</span>
          <span onClick={closeProfileModalHandler} className="closeModal">
            <HighlightOffIcon />
          </span>
        </div>
        <div className="profileModal_ImgContainer">
          <img src={updatedProfileData?.profileImage} alt="profile" />

          <span className="alternateImg" onClick={(e) => editUserImgHandler(e)}>
            <AddPhotoAlternateIcon />
          </span>
          {isAvatarModalOpen && (
            <AvatarModal
              isAvatarModalOpen={isAvatarModalOpen}
              setIsAvatarModalOpen={setIsAvatarModalOpen}
              setUpdatedProfileData={setUpdatedProfileData}
              updatedProfileData={updatedProfileData}
            />
          )}
        </div>

        <div className="profileModal_section type-1">
          <div className="profileModal_section-one">
            <label htmlFor="profileModalfirstname">First Name</label>
            <input
              id="profileModalfirstname"
              placeholder="Firstname"
              type="text"
              name="firstname"
              className="profileModal_firstname"
              value={updatedProfileData.firstname}
              onChange={profileDataChangeHandler}
            />
            <span>{profileDataError.firstname}</span>
          </div>
          <div className="profileModal_section-one">
            <label htmlFor="profileModallastname">Last Name</label>
            <input
              id="profileModallastname"
              placeholder="Lastname"
              type="text"
              name="lastname"
              className="profileModal_lastname"
              value={updatedProfileData.lastname}
              onChange={profileDataChangeHandler}
            />
            <span>{profileDataError.lastname}</span>
          </div>
        </div>

        <div className="profileModal_section type-2">
          <label htmlFor="profileModallink">Link</label>
          <input
            id="profileModallink"
            type="text"
            placeholder="Link"
            name="link"
            className="profileModal_link"
            value={updatedProfileData.link}
            onChange={profileDataChangeHandler}
          />
        </div>

        <div className="profileModal_section type-2">
          <label htmlFor="profileModalbio">Bio</label>
          <textarea
            id="profileModalbio"
            placeholder="Bio"
            className="profileModal_bio"
            maxLength={100}
            name="bio"
            value={updatedProfileData.bio}
            onChange={profileDataChangeHandler}
          ></textarea>
          <span className="bioLength">
            {Number(100 - updatedProfileData.bio.length)}/100
          </span>
        </div>

        <button
          onClick={updateUserProfileHandler}
          className="btn updateProfileBtn"
        >
          Update
        </button>
      </div>
    </section>
  );
};

export default ProfileModal;
