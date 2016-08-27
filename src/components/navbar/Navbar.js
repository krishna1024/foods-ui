import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className='light-blue lighten-1' role='navigation' >
      <div className="nav-wrapper container">
      <a href="#" className="brand-logo">Foods</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="foods">Foods</Link></li>
        <li><Link to="menus">Menus</Link></li>
      </ul>
    </div>
   </nav>);
  }

}
