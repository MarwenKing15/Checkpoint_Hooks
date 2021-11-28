import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col' >
			<h1 style={{color:"white"}}>{props.heading} </h1>
		</div>
	);
};

export default MovieListHeading;