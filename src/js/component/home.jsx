import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

//create your first component
const Home = (props) => {
	return (

	<div className="text-center d-flex">
		<div className="clock">
		<FontAwesomeIcon icon={faClock} />
		</div>
		<div className="DigitOne">
		<div>{Math.floor(props.count / 100000) % 10} </div>
		</div>
		<div className="DigitTwo">
		<div>{Math.floor(props.count / 10000) % 10} </div>
		</div>
		<div className="DigitThree">
		<div>{Math.floor(props.count / 1000) % 10} </div>
		</div>
		<div className="DigitFour">
		<div>{Math.floor(props.count / 100) % 10} </div>
		</div>
		<div className="DigitFive">
		<div>{Math.floor(props.count / 10) % 10} </div>
		</div>
		<div className="DigitSix">
		<div>{Math.floor(props.count / 1) % 10} </div>
		</div>	
	</div>
	);
};
export default Home;