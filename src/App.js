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
        <li>|</li>
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
          <p><code>Freelance Web Developer</code><code className={"blinking"}> |</code></p>
        </div>
      </div>
      <div id={"create"}>
        <h1 className={"create"} style={{padding:"10px 0 0"}}>You Design it Yourself</h1>
      </div>
      <div className={"parallax2"}>
        <div className={"home"} id="design">
          <br/>
          <p className={"design"}>Bring Your Ideas To Life</p>
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
      <div className={"parallax4"}>
        <div className={"resu"} id="resume">
          <div>
            <p>
              <h1>Skills</h1>
              <h3>Programming Languages:</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>Scheme</li>
                <li>OCaml</li>
                <li>ARMv8</li>
                <li>LEGv8</li>
                <li>XML</li>
              </ul>
              <h3>Frameworks and Technologies:</h3>
              <ul>
                <li>ReactJS</li>
                <li>Android Studio</li>
                <li>React Native</li>
                <li>Flask</li>
              </ul>
              <hr/>
              <h1>Education</h1>
              <h2>Stevens Institute of Technology</h2>
              Expected Graduation May 2023<br/>
              Bachelors of Science, Computer Science<br/>
              Relevant Courses:<br/>
              <ul>
                <li>Intro to Web Programming</li>
                <li>Intro to Computer Science</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Discrete Math</li>
                <li>Programming Languages</li>
                <li>Automata and Computation</li>
                <li>Theory of Computation</li>
                <li>Calculus 1, 2, and 3</li>
              </ul><br/>
              
                <h2>Pocono Mountain East High School</h2>
                Graduated May 2019<br/>
                Relevant Courses:<br/>
                <ul>
                  <li>Intro to Web Programming</li>
                  <li>Intro to Java</li>
                  <li>Advanced Java</li>
                  <li>AP Computer Science A</li>
                  <li>CS Independent Study</li>
                </ul><br/>
                Extra Curricular Activity:
                <ul>
                  <li>Co-Captain of the Chess Team 2018-2019</li>
                  <li>Varsity Chair Chess player 2015-2019</li>
                </ul>
            </p>
          </div>
          <hr/>
          <div>
            <h1>Work Experience</h1>
            <p>
              <h2>Stevens Tutor</h2>
              September 2020 to December 2020<br/>
              -Taught Basic Boolean Algebra and applications of logic gates<br/>
              -Challenged Students to think in new ways<br/>
              -Helped students learn to debug their own code<br/>
            </p>
          </div>
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
