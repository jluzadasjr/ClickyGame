import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Picture from "./pictures.json";
import Cards from "./components/Cards/Cards";

// Function that will shuffle the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    Picture,
    score: 0,
    highscore: 0,
    clickPicturesArray: []
  };


  // Function wwhen the picture gets clicked
  clickPicture = id => {
    let clickPicturesArray = this.state.clickPicturesArray;
    let score = this.state.score;
    let highscore = this.state.highscore;

    // High
    if (score > highscore) {
      this.setState({ highscore: score });
    }

    // push the picture id to array
    if (clickPicturesArray.indexOf(id) === -1) {
      clickPicturesArray.push(id);
      console.log(clickPicturesArray);
      this.addToScore();
      this.shufflePictures();

      // if player wins, then alert pops up. 
    } else if (this.state.score >= 11) {
      alert("Congratulations!");
      this.setState({
        score: 0,
        clickPicturesArray: []
      })

      // if player loses, then alert pops up
    } else {
      alert("You Lost! You scored: " + score);
      this.setState({
        score: 0,
        clickPicturesArray: []
      })
    }
  }

  // add to player's current score
  addToScore = () => {
    this.setState({ score: this.state.score + 1 })
  };

  // shuffles GOT character pictures
  shufflePictures = () => {
    this.setState({ Picture: shuffle(Picture) });
  }

  render() {
    return (
      <>
        <Header
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Wrapper>
          {this.state.Picture.map(pictures => (
            <Cards
              key={pictures.id}
              id={pictures.id}
              name={pictures.name}
              image={pictures.image}
              class={"imgClass"}
              clickPicture={this.clickPicture}
              width={100}
              heigt={100}
            />
          ))}
        </Wrapper>
      </>

    )
  }

}

export default App;