import React from "react";
import Auth from "./HOC/Auth";
import Card from "./HOC/Card";

const Profile = () => {
  return (
    <Auth>
      <Card>Profile</Card>
    </Auth>
  );
};

export default Profile;
