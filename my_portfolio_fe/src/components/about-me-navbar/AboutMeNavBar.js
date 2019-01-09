import React, { Component } from 'react';
import './AboutMeNavBar.css';

class AboutMeNavBar extends Component{
    NavigateTo = (index) => {
        this.props.NavigateTo(index)
    } 
    
    render(){
        return(
            <div className="about-me-navbar right-item" id="about-me-navbar" >
                <div className="name-wrapper" onClick={this.NavigateTo.bind(this, 0)}>
                <p >Home</p>
                </div>
                <div className="content-wrapper">
                    <div className="home-grid">
                    <div className="home-center">
                        <div className="title">
                        <h3>WHO IS THIS GUY? WHAT DOES HE DO?</h3>
                        </div>
                        
                        <span>
                        <p>Chinh is an ordinary 22 years old student studying his 4th year at Vamk. 
                            He is passionate about using his brain and <b>he is actively looking for a trainee
                            at the moment.</b>
                        </p>
                        </span>
                    </div>
                    <div className="home-top-left">
                        <div className="title">
                        <h4>A Little Flash Back</h4>
                        </div>
                        
                        <span>
                        <p>
                        In his memory, Chinh remembers himself as an in-door
                        kid loving to play video games and still does he love games. Now he is more interested in making ones. Thus, Chinh has done publishing
                        his first 2D indie game and the game itself is not so good in his point of view. He will try hard for the next one, to produce
                        a better quality game.
                        </p>
                        </span>
                    </div>

                    <div className="home-top-right">
                        <div className="title">
                        <h4>
                            He loves to learn!
                        </h4>
                        </div>
                        <span>
                        <p>
                        Not only does Chinh like to create games, but he also likes creating functional and beautiful websites.
                        The more time goes, the more eagerness Chinh gains to learn. He doesn't always feel statisfied for what he has. 
                        Chinh is greedy.
                        </p>
                        </span>
                    </div>

                    <div className="home-bot-left">
                        <div className="title">
                        <h4>
                            Some side information
                        </h4>
                        </div>
                        <span>
                        <p>
                        Although it sounds like Chinh spends 90% of his time staying inside, he still has one favourite sport. It is tennis.
                        People would be surprised as they know that he used to be a good tennis player back to the day when he was studying his junior high school. 
                        </p>
                        </span>
                    </div>

                    <div className="home-bot-right">
                        <div className="title">
                        <h4>
                            Chinh wants to be better!
                        </h4>
                        </div>
                        <span>
                        <p>
                        It is fun when it comes to self-taught stuffs, but still he wants to know a better way to resolve and proceed things.
                        He wants to gain more practical experience about web/game technologies. Therefore, if you find him possibly fit any of your requirements,
                        please hook him up, he will be appreciate.  
                        </p>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMeNavBar