import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  let { userName } = useParams();
  return <div className="page-content">This is Profile of {userName}</div>;
};

export default Profile;
