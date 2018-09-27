import React from 'react';
import "./NavBar.css";

const NavBar = ({ correctGuesses, bestScore, clickMessage }) => {

	return (
		<nav className="navbar bg-danger justify-content-center flex-row">
		<div class="container-fluid"></div>
    	<div class="row">
       		 <div class="col-md-1 col-sm-6">
		
			<a href='/' className="btn btn-outline-light btn-lg" role="button">Click the Pups!</a>
			</div>
			<div class="col-md-10 col-sm-6">
			<div className="navbar-collapse">
				<ul className="navbar-nav ml-auto flex-row justify-content-center">
					<li className="nav-message">
						<h4>{clickMessage}</h4>
					</li>
				</ul>
			</div>
			</div>
			<div class="col-md-1 col-sm-6">
			<ul className="navbar-nav ml-auto flex-row justify-content-end">
				<li className="nav-score">
					<h4>Score: {correctGuesses} < br />Top Score: {bestScore}</h4>
				</li>
			</ul>
			</div>
		</div>

		</nav>
	);
};
export default NavBar;