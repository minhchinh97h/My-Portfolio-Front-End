import React, { Component } from 'react';
import './BlogsNavbar.css';

class BlogsNavbar extends Component{
    NavigateTo = (index) => {
        this.props.NavigateTo(index)
    } 
    
    render(){
        return(
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
        )
    }
}

export default BlogsNavbar