import React from "react";
import { Link, Navigate } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navigate to="/" />
      <Link to={{ pathname: `/profile/posts` }}>Post from profile</Link>
    </>
  );
};

export default Profile;
