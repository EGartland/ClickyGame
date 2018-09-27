import React from 'react';
import "./NavBar.css";

const NavBar = ({ correctGuesses, bestScore, clickMessage }) => {

	return (
		<nav className="navbar bg-danger justify-content-center flex-row">

			<a href='/' className="btn btn-outline-light btn-lg" role="button">Click the Pups!</a>

			<div className="navbar-collapse">
				<ul className="navbar-nav ml-auto flex-row justify-content-center">
					<li className="nav-item">
						<h4>{clickMessage}</h4>
					</li>
				</ul>
			</div>

			<ul className="nav navbar-nav ml-auto flex-row justify-content-end">
				<li className="nav-item">
					<h4>Score: {correctGuesses} < br />Top Score: {bestScore}</h4>
				</li>
			</ul>



		</nav>
	);
};
export default NavBar;