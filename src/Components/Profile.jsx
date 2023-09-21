import React from "react";
import LogoutButton from '../Components/LogoutButton';

const Profile = ({user, isLoading}) => {
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div id="profile-section">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <button href="#">Plan Itinerary</button>
      <button href="#">Cruise Deals</button>
      <button href="#">Destinations</button>
      <button href="#">FAQ</button>
      <button href="#">Contact Us</button>
      <LogoutButton />
    </>
  )
};

export default Profile;