import React from "react";
import Container from "./Container";
import Row from "./Row";
import Brian from "../images/brian.jpg";
import Peter from "../images/peter.jpeg";
import Bruce from "../images/bruce.jpeg";
import Chris from "../images/chris.jpg";
import Cleveland from "../images/cleveland.jpg";
import Consuela from "../images/consuela.png";
import Joe from "../images/joe.jpeg";
import Lois from "../images/lois.jpeg";
import Meg from "../images/meg.jpg";
import Mort from "../images/mort.jpg";
import Quagmire from "../images/quagmire.png";
import Stewie from "../images/stewie.jpg";
import Column from "./Column";
import Header from "./Header";
import Topfooter from "./Topfooter";

class Game extends React.Component {

    state = {
        count: 0,
        guessed: true,
        topScore: 0,
        imageArray: [Brian, Peter, Bruce, Chris, Cleveland, Consuela, Joe, Lois, Meg, Mort, Quagmire, Stewie],
        clickedArray: []
        
    };

    shuffleCards = () => {
        var array = this.state.imageArray;
        var i = array.length,
          j = 0,
          temp;
    
        while (i--) {
          j = Math.floor(Math.random() * (i + 1));
    
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }

    gameCount = (event) => {
        var clickedImage = event.currentTarget.dataset.char;
        if (this.state.clickedArray.includes(clickedImage)) {
            this.setState({guessed: false});
        }
        else {
            this.setState({guessed: true});
            this.state.clickedArray.push(clickedImage);
            this.shuffleCards();
            this.setState({ count: this.state.count + 1 });
        }
        this.gameStop()
    };
    gameStop = () => {
        if (this.state.count === 12 || this.state.guessed === false) {
            // reset all state
            this.setState({
                count: 0,
                guessed: true,
                imageArray: [Brian, Peter, Bruce, Chris, Cleveland, Consuela, Joe, Lois, Meg, Mort, Quagmire, Stewie],
                clickedArray: [],
                topScore: this.state.count
            })
        };
    }



    render() {

        return (
            
            <div>
            {console.log(this.state.clickedArray)}
                <Topfooter 
                count={this.state.count}
                guessed = {this.state.guessed}
                topScore = {this.state.topScore}/>
                <Header />
                <Container>
                    <Row>
                        <Column img={this.state.imageArray[0]} data-char={this.state.imageArray[0]} onClick={this.gameCount} />
                        <Column img={this.state.imageArray[1]} data-char={this.state.imageArray[1]} onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[2]} data-char={this.state.imageArray[2]} onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[3]} data-char={this.state.imageArray[3]} onClick={this.gameCount}/>
                    </Row>
                    <Row>
                        <Column img={this.state.imageArray[4]} data-char={this.state.imageArray[4]} onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[5]} data-char={this.state.imageArray[5]} onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[6]} data-char={this.state.imageArray[6]} onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[7]} data-char={this.state.imageArray[7]} onClick={this.gameCount}/>
                    </Row>
                    <Row>
                        <Column img={this.state.imageArray[8]} data-char={this.state.imageArray[8]} onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[9]} data-char={this.state.imageArray[9]} onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[10]} data-char={this.state.imageArray[10]}onClick={this.gameCount}/>
                        <Column img={this.state.imageArray[11]} data-char={this.state.imageArray[11]} onClick={this.gameCount}/>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Game;
