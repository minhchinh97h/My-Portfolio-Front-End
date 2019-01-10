import React, { Component } from 'react';
import './ContactNavbar.css';

class ContactNavbar extends Component{
    NavigateTo = (index) => {
        this.props.NavigateTo(index)
    } 
    
    render(){
        return(
            <div className="contact-navbar right-item" id="contact-navbar" >
                <div className="name-wrapper" onClick={this.NavigateTo.bind(this, 3)}>
                    <p >Contact</p>
                </div>
                
                <div className="content-wrapper">
                    <div className="contact-container">
                    <div className="basic-information">
                        <div className="info-holder">
                        <div>
                            <h2>BASIC INFORMATION</h2>
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
                        <img alt=""></img>
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
        )
    }
}

export default ContactNavbar