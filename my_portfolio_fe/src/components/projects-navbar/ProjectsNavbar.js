import React, { Component } from 'react';
import './ProjectsNavbar.css';

class ProjectsNavbar extends Component{
    NavigateTo = (index) => {
        this.props.NavigateTo(index)
    }
     
    render(){
        return(
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
                        <img src="/images/projects/globuzzer/first-page.png" alt="gbfhp"></img>

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
        )
    }
}

export default ProjectsNavbar