import React from 'react'


class Header extends React.Component {
	render() {
		//date object
		const dateObject = new Date();
		const date = dateObject.getDate().toString().padStart(2, '0');
		//Month name with short form
		const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObject);
		const year = dateObject.getFullYear();
		const day = dateObject.toLocaleString('en-us', { weekday: 'long' });
		return (
			<>
				<div className='date d-flex me-5'>
					<div className="date-text">{date}</div>
					<div className='d-flex flex-column justify-content-center'>
						<div className="month">{month}</div>
						<div className="year">{year}</div>
					</div>
				</div>
				<div className='day ms-5'>{day}</div>
			</>
		)
	}
}

export default Header;