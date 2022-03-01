import React from 'react';
//here we get props as a object
const Card = (props) => {
  return (
    <a className="card" href='https://www.netflix.com/in/' target='new-tab'>
      <div className="card-img">
        <img src={props.imgsrc} alt="webseries poster" />
        <div className="card-info">
          <div className="series-category">{props.category}</div>
          <div className="series-name">{props.name}</div>
        </div>
      </div>
    </a>
  )
}

export default Card;