import React, { Component } from 'react';
import FirstContent from './components/first-content/FirstContent'
import AboutMeNavBar from './components/about-me-navbar/AboutMeNavBar'
import ProjectsNavbar from './components/projects-navbar/ProjectsNavbar'
import BlogsNavbar from './components/blogs-navbar/BlogsNavbar'
import ContactNavbar from './components/contact-navbar/ContactNavbar'

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
        document.getElementById('footer-img-stacks').classList.remove('footer-img-disappear')
        document.getElementById('welcome-banner-holder').classList.remove('welcome-banner-disappear')

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
        document.getElementById('footer-img-stacks').classList.add('footer-img-disappear')
        document.getElementById('welcome-banner-holder').classList.add('welcome-banner-disappear')
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

        <FirstContent />

        <AboutMeNavBar NavigateTo = {this.NavigateTo}/>

        <ProjectsNavbar NavigateTo = {this.NavigateTo}/>

        <BlogsNavbar NavigateTo = {this.NavigateTo}/>

        <ContactNavbar NavigateTo = {this.NavigateTo}/>

      </div>
    );
  }
}

export default App;
