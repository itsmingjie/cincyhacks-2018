import React from 'react';
import logo from '../chlogo.png';


// Import navigation bar
import NavBar from './NavBar';

class Header extends React.Component {
	handleClick = () => {
		window.open("https://docs.google.com/forms/d/e/1FAIpQLSd7h-synW9Serf1norecyFGU3XcIvW5GrwY-2s7fkjrON-86Q/viewform?usp=sf_link");
  }

	render() {
		return (
			<div id="header-container" className="section">
				<NavBar />

				<div id="title">
					<img src={logo} />
					<h1>CincyHacks</h1>
					<div id="ch-icons">
						<a href="https://twitter.com/cincyhacks" class="icon"><i class="fa fa-twitter"></i></a>
						<a href="https://www.instagram.com/cincyhacks/" class="icon"><i class="fa fa-instagram"></i></a>
					</div>
						<h2 id="h__desc" style={{fontSize: '28px'}}>Cincinnati's original high school hackathon</h2>

					<h2 id="h__date" style={{fontSize: '24px'}}>September 22nd to 23rd, 2018</h2>
						<h4><span style={{color: "white", fontWeight: "400", backgroundColor: "#EF3E4A"}}>Priority applications open now until September 10th</span></h4>

						<button onClick={this.handleClick} className="register-btn" >Apply Now!</button>
						<p><a style={{color: "#EF3E4A"}} href="https://docs.google.com/forms/d/e/1FAIpQLScXKWwBMEkjCyRpf5-l7xJe64_hsxmyLV-mOloUWvhtnBmU2w/viewform">Register as a mentor</a></p>
				</div>
			</div>
		);
	}
}

export default Header;
