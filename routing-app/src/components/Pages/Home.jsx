import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page-content">
      You are now on Home page
      <br />
      <div className="">
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
      <div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            navigate('/aboutus');
          }}
        >
          AboutUs
        </button>
      </div>
    </div>
  );
};

export default Home;
