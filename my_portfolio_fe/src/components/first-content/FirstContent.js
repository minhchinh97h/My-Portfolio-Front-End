import React, { Component } from 'react';
import './FirstContent.css';

class FirstContent extends Component{
    render(){
        return(
            <div className="first-content" id="first-content">
                <div className="welcome-banner-holder" id="welcome-banner-holder">
                    <div className="banner">
                    <span>
                        <h1>Welcome</h1>
                    </span>
                    <span>
                        <h2>To</h2>
                    </span>
                    <span>
                        <h1>DMC's </h1>
                    </span>
                    <span>
                        <h1>Portfolio</h1>
                    </span>
                    <span>
                        <p>(Duong Minh Chinh)</p>
                    </span>
                    </div>
                </div>

                <div className="footer-img-stacks" id="footer-img-stacks">
                    <div className="img-stack">
                    {/* <img srcSet="/images/welcome-page/Tikkeri.jpg" alt="welcome-img"></img> */}
                    <div className="img-holder">

                    </div>
                    </div>
                    <div className="footer-stack-holder">
                        <div className="footer-stack">
                            <span>
                            <i className="fas fa-copyright"></i>
                            </span>
                            <span>
                            <p>CopyRights 2019</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstContent