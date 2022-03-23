import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="page-content">
      You are now on AboutUs page
      <br />
      <div className="">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            navigate('/features');
          }}
        >
          Features
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
