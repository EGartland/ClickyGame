import React from "react";
import "./MatchCard.css";

const MatchCard = props => (

			<div onClick={() => props.setClicked(props.id)} className="card hoverable">
					<img alt={props.name} src={props.image} />
				
			</div>
);

export default MatchCard;