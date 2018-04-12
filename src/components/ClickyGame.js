import React, { Component } from "react";
import Header from "./Header.js"
import TopBody from "./TopBody";
import Items from "./Items";
import items from "../items.json";
import Footer from "./Footer";

class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,
        items
    };

    componentDidMount() {
        this.setState({
         items: this.itemShuffle(this.state.items)  
        })
    }

    itemShuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    clickImage = (clicked, id) => {
        const itemClicked = this.state.items.filter(item => item.id === id);
        const randomItemsArray = this.itemShuffle(this.state.items)
         if(clicked === true) {
            this.resetGame();
         } else {
            itemClicked[0].clicked = true;
            this.setState({
                score: this.state.score + 1,
                items: randomItemsArray
            })
         }
    }

    resetGame = () => {
        const randomItemsArray = this.itemShuffle(this.state.items);
        if (this.state.score > this.state.highScore) {
            this.setState({
                highScore: this.state.score,
                score: 0,
                items: randomItemsArray
            })
        } else {
            this.setState({
                score: 0,
                items: randomItemsArray
            })
        }

        for (let i = 0; i < this.state.items.length; i++) {
            items[i].clicked = false;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Header score={this.state.score} highScore={this.state.highScore} />
                <TopBody />
                <div className="row all-items">
                    {this.state.items.map(item => (
                        <Items
                            name={item.name}
                            id={item.id}
                            image={item.image}
                            clicked={item.clicked}
                            clickImage={this.clickImage}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
};

export default ClickyGame;