import React, { Component } from "react";
import Header from "./Header.js"
import TopBody from "./TopBody";
import Items from "./Items";
import items from "../items.json";

class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,
        items: items
    };

    componentDidMount() {

    }

    clickImage = () => {
        this.setState({
            score: this.state.score + 1
        })
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
                            clickImage={this.clickImage}
                        />
                    ))}
                </div>
            </div>
        )
    }
};

export default ClickyGame;