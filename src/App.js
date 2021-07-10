import React from 'react';
import './App.css'

/**
 * Navigation
 */
function Nav(props)
{
  return (
    <div className={"nav"}>
      <ul>
        <li><a className={"nava"} href={"#home"}>Home</a></li>
        <li><a className={"nava"} href={"#resume"}>Resumé</a></li>
        <li><a classname={"nava"}>|</a></li>
        <li><a className={"nava"} href={"mailto:msanchezmbm@gmail.com"}>Email</a></li>
        <li><a className={"nava"} href={"https://www.linkedin.com/in/michael-sanchez-02282001/"}>LinkedIn</a></li>
        <li><a className={"nava"} href={"https://github.com/DiscardStudio"}>GitHub</a></li>
      </ul>
    </div>
  );
}

function Info(props)
{
  return (
    <div>
      <div className={"parallax1"}>
        <div className={"home"} id="home">
          <h1><code>Michael Sanchez</code></h1>
          <p><code>Freelance Web and App Developer</code><code className={"blinking"}> |</code></p>
        </div>
      </div>
      <div id={"create"}>
        <h1 className={"create"} style={{padding:"10px 0 0"}}>You Design it Yourself</h1>
      </div>
      <div className={"parallax2"}>
        <div className={"home"} id="design">
          <br/>
          <p classname={"design"}>Bring Your Ideas to Life</p>
          <br/>
        </div>
      </div>
      <div className={"create"}>
        <h1 className={"create"}>We Build it Together</h1>
      </div>
      <div className={"parallax3"} id={"contact"}>
        <div className={"home"}>
          <p>
            <p>Be a part of the process</p>
            <p>Every step of the way</p>
          </p>
        </div>
      </div>
      <div className={"create"}>
        <h1 className={"create"}>Resumé</h1>
      </div>
      <div classname={"home"} id="resume">
        <div id="Education">

        </div>
        <div id="Work">
          
        </div>
      </div>
    </div>
  );
}

class WebPage extends React.Component
{
  render() {
    return (
    <div>
      <Nav/>
      <Info/>
    </div>
  );}
}

export default WebPage;
