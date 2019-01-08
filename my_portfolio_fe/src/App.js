import React, { Component } from 'react';
import Header from './components/header/Header'
import './App.css';

let navbar_ids = ['about-me-navbar', 'projects-navbar', 'blogs-navbar', 'contact-navbar'],
    navbars_clicked = [false, false, false, false]

class App extends Component {

  state={
    
    
  }

  NavigateTo = (index) => {
    let node = document.getElementById(navbar_ids[index])
    
    //if the nav button is already clicked, shrink it and move the bar to the left side
    if(navbars_clicked[index]){
      
      node.classList.remove('right-item-active')
      node.childNodes[0].classList.remove('name-wrapper-active')
      node.childNodes[1].classList.remove('content-wrapper-active')

      //check if there is any in-front navbar, if exists, open it
      if(index > 0){
        navbars_clicked[index-1] = true
        
        let previousNavBar = document.getElementById(navbar_ids[index-1])
        
        previousNavBar.classList.add('right-item-active')
        previousNavBar.childNodes[0].classList.add('name-wrapper-active')
        previousNavBar.childNodes[1].classList.add('content-wrapper-active')

        //remove all the other navbars transitions and reset the booleans
        for(let i =0; i < navbar_ids.length; i++){
          if(i !== (index-1)){
            let domNode = document.getElementById(navbar_ids[i])

            if(domNode.classList.contains('right-item-active')){
              domNode.classList.remove('right-item-active')
              domNode.childNodes[0].classList.remove('name-wrapper-active')
              domNode.childNodes[0].classList.remove('content-wrapper-active')
            }
              navbars_clicked[i] = false
          }
        }
      }

      //if there is none of previous navbars, leave the first page displayed
      else{
        let firstContent = document.getElementById('first-content')

        firstContent.classList.remove('first-content-shrink')

        //remove all the navbars transitions and reset the booleans
        for(let i =0; i < navbar_ids.length; i++){
            let domNode = document.getElementById(navbar_ids[i])

            if(domNode.classList.contains('right-item-active')){
              domNode.classList.remove('right-item-active')
              domNode.childNodes[0].classList.remove('name-wrapper-active')
              domNode.childNodes[0].classList.remove('content-wrapper-active')
            }
              navbars_clicked[i] = false
          
        }
      }
    }

    else{
      node.classList.add('right-item-active')
      node.childNodes[0].classList.add('name-wrapper-active')
      node.childNodes[1].classList.add('content-wrapper-active')

      let firstContent = document.getElementById('first-content')

      if(!firstContent.classList.contains('first-content-shrink')){
        firstContent.classList.add('first-content-shrink')
      }

      //remove all the other navbars transitions and reset the booleans
      for(let i =0; i < navbar_ids.length; i++){
        if(i !== index){
          let domNode = document.getElementById(navbar_ids[i])

          if(domNode.classList.contains('right-item-active')){
            domNode.classList.remove('right-item-active')
            domNode.childNodes[0].classList.remove('name-wrapper-active')
            domNode.childNodes[1].classList.remove('content-wrapper-active')
          }
            
          navbars_clicked[i] = false
        }
      }

      navbars_clicked[index] = !navbars_clicked[index]
    }

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App" role="main">

        <div className="left-navbar">

        </div>

        <div className="first-content" id="first-content">

        </div>

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

        <div className="projects-navbar right-item" id="projects-navbar" >
          <div className="name-wrapper" onClick={this.NavigateTo.bind(this, 1)}>
            <p >Projects</p>
          </div>
          
          <div className="content-wrapper">

          </div>
        </div>

        <div className="blogs-navbar right-item" id="blogs-navbar" >
          <div className="name-wrapper" onClick={this.NavigateTo.bind(this, 2)}>
            <p >Blogs</p>
          </div>
          
          <div className="content-wrapper">

          </div>
        </div>

        <div className="contact-navbar right-item" id="contact-navbar" >
          <div className="name-wrapper" onClick={this.NavigateTo.bind(this, 3)}>
            <p >Contact</p>
          </div>
          
          <div className="content-wrapper">

          </div>

        </div>

      </div>
    );
  }
}

export default App;
