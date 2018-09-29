import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import matches from "./imgCards.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click any puppy to start!";

class App extends Component {

  // Setting this.state.matches to JSON
  state = {
    matches,
    correctGuesses,
    bestScore,
    clickMessage
  };

  setClicked = id => {


    const matches = this.state.matches;

    // Filter for the clicked match
    const clickedMatch = matches.filter(match => match.id === id);

    if (clickedMatch[0].clicked) {

      console.log("Correct Guesses: " + correctGuesses);
      console.log("Best Score: " + bestScore);

      correctGuesses = 0;
      clickMessage = "Woof! You already chose this puppy!"

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ matches });

      // Otherwise, if clicked = false, and the user hasn't finished
    } else if (correctGuesses < 11) {

      // Set its value to true
      clickedMatch[0].clicked = true;

      // increment the appropriate counter
      correctGuesses++;

      clickMessage = "You guess correctly! Chose another puppy!";

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
        this.setState({ bestScore });
      }

      // Shuffle the array to be rendered in a random order
      matches.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    } else {

      // Set its value to true
      clickedMatch[0].clicked = true;

      // restart
      correctGuesses = 0;

      // Play Again
      clickMessage = "You got all the puppies! See if you can do it again!";
      bestScore = 12;
      this.setState({ bestScore });

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      // Shuffle
      matches.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });

    }
  };

  render() {
    return (
      <div>
        <NavBar
          correctGuesses={this.state.correctGuesses}
          bestScore={this.state.bestScore}
          clickMessage={this.state.clickMessage}
        />
        < Title />
        <Wrapper>


          <div className="container">
            <div className="row">

              {this.state.matches.map(match => (
                <MatchCard
                  setClicked={this.setClicked}
                  id={match.id}
                  key={match.id}
                  image={match.image}
                />
              ))}
            </div>
          </div>

        </Wrapper>

        <Footer></Footer>
      </div>
    );
  };
};

export default App;