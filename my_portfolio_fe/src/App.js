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
            <div className="projects-container">
              <div className="project-item project1">
                <div className="project-content">
                  <img src="/images/projects/configurator3D/live-demo-01.png" alt="configurator3d"></img>

                  <div className="project-description">
                    <h4>
                      Configurator 3D
                    </h4>
                    <span>
                      <p>
                        Configurator 3D is a web-based application using Reactjs, Threejs, Css and Expressjs 4. Vamk owns the copyright
                        of this application. With Configurator 3D, Vamk's clients can get experience with 3D displaying interface. The 
                        behind system allows users to import their 3D JSON files (and also other formats) and modify them as update, insert,
                        and delete any of parts that they want. Afterwards, users can view their models displayed by the web app.
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-item project2">
                <div className="project-content">
                  <img src="/images/projects/oea/fpt-slovakia.jpg" alt="oea"></img>

                  <div className="project-description">
                    <h4>
                      Operation Efficiency Application
                    </h4>
                    <span>
                      <p>
                        This project is what Chinh got involved during my 2018 summer internship. Chinh was one of the IoT developer
                        team of FPT. His main duty was to help the team develope and maintain their ongoing project named Operation 
                        Efficiency Application using Angularjs, Gantella template and Mindsphere's APIs. The application allows customers
                        to keep track of their machines efficiency including recorded temperatures, battery and idle levels to Mindsphere's 
                        cloud platform.
                      </p>
                    </span>
                  </div> 
                </div>
              </div>

              <div className="project-item project3">
                <div className="project-content">
                  <img src="/images/projects/TikkeriOnTheRun/image-01.png" alt="tiontherun"></img>

                  <div className="project-description">
                    <h4>
                      Tikkeri On The Run
                    </h4>
                    <span>
                      <p>
                        Chinh loves games. And this is the first game he has ever created. Tikkeri On The Run is a 2D game created
                        by Unity3D with C#. The game's concept is inspired by Megaman series of Capcom. During the time building this,
                        Chinh had earned a lot of joy and useful knowledge.
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-item project4">
                <div className="project-content">
                  {/* <img src=""></img> */}

                  <div className="project-description">
                    <h4>
                      Werewolves of Millers Hollow web game
                    </h4>
                    <span>
                      <p>
                        People mostly know about the famous board game Werewolves of Millers Hollow. This is the web-based version
                        of it. But is it needed? At least Chinh thinks it is cool to have one. Apparently, people needs to have 
                        physical cards and a person to be the Moderator to actually play the game. However, with this web-based application, 
                        there is no need of those requirements. Players just need their electronic devices as smartphones, tablets or even laptops
                        to enjoy their moments. Nevertheless, the game is unfinished, Chinh needs more spare time to work on it.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-item project5">
                <div className="project-content">
                  <img src="/images/projects/globuzzer/first-page.png"></img>

                  <div className="project-description">
                    <h4>
                      Globuzzer Nordics home page
                    </h4>
                    <span>
                      <p>
                        This is a task required by Globuzzer. Its main goal is to create a home page using Reactjs and pure Css.
                        In addition, the built example is included simple fetching requests and database connections with Expressjs 4 
                        and Mlab's sandbox database.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blogs-navbar right-item" id="blogs-navbar" >
          <div className="name-wrapper" onClick={this.NavigateTo.bind(this, 2)}>
            <p >Blogs</p>
          </div>
          
          <div className="content-wrapper">
              <div className="blog-content-container">
                <b>Currently Chinh is lazy but don't worry, this page is comming soon.</b>
              </div>  
          </div>
        </div>

        <div className="contact-navbar right-item" id="contact-navbar" >
          <div className="name-wrapper" onClick={this.NavigateTo.bind(this, 3)}>
            <p >Contact</p>
          </div>
          
          <div className="content-wrapper">
            <div className="contact-container">
              <div className="basic-information">
                <div className="info-holder">
                  <div>
                    <h2>Basic Information</h2>
                  </div>

                  <span>
                    <b>Firstname</b>: Chinh
                  </span>
                  
                  <span>
                    <b>Lastname</b>: Duong
                  </span>
                  
                  <span>
                    <b>Middlename</b>: Minh
                  </span>
                  
                  <span>
                    <b>Age</b>: 22
                  </span>

                  <span>
                    <b>Sex</b>: male
                  </span>

                  <span>
                    <b>Nationality</b>: Vietnam
                  </span>

                  <span>
                    <b>Address</b>: Helsinki, Finland
                  </span>

                  <span>
                    <b>Tel</b>: 0469518856
                  </span>

                  <span>
                    <b>Email</b>: minhchinhduong97@gmail.com
                  </span>
                </div>
              </div>
              <div className="medium-size-self-pic">
                <img></img>
              </div>

              <div className="bussiness-section">
                <div className="bussiness-info">
                  <span>
                    <b>In case you want to hire Chinh, please feel free to contact him.</b>
                  </span>

                  <div className="links">
                    <a href="https://github.com/minhchinh97h"><i className="fab fa-github-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/chinh-duong-28679b157/"><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100014555974853"><i className="fab fa-facebook-square fa-2x"></i></a>
                    <a href="https://www.instagram.com/minhchinhduong97/"><i className="fab fa-instagram fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
