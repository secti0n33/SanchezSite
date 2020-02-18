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
        <li><a className={"nava"} href={"#contact"}>Contact</a></li>
      </ul>
    </div>
  );
}

function Info(props)
{
  return (
    <div>
      <div className={"home"}>
        <h1><code>Michael Sanchez</code></h1>
        <p><code>Freelance Web and App Developer</code><code className={"blinking"}> |</code></p>
      </div>
      <div id={"contact"} className={"contact"}>
        <h1>Contact</h1>
        <p>
          <a href={"mailto:msanchezmbm@gmail.com"}>Email</a> or
          <a href={"https://www.linkedin.com/in/michael-sanchez-02282001/"}> LinkedIn</a>
        </p>
        <p>for any service inqueries.</p>
      </div>
    </div>
  );
}

class Page extends React.Component
{
  render() {
    return (
    <div>
      <Nav/>
      <Info/>
    </div>
  );}
}

export default Page;
