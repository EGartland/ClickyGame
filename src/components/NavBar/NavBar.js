import React from 'react';
import "./NavBar.css";

const NavBar = ({ correctGuesses, bestScore, clickMessage }) => {

	return (
		<nav className="navbar bg-danger">
			<ul>
				<li className="brand">
					<a href='/' className="btn btn-outline-light btn-lg" role="button">Click the Pups!</a>
				</li>
				<li>
					<h4>{clickMessage}</h4>
				</li>
				<li>
					<h4>Score: {correctGuesses} < br />Top Score: {bestScore}</h4>
				</li>
			</ul>



		</nav>
	);
};
export default NavBar;