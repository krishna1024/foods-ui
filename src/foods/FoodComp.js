import React from 'react';

export default class FoodComp extends React.Component {

  render() {
    return <li className='col s12 m4 l3' >

    <div className="card" >
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="http://www.sweetshoppy.com/userdata/gfx/8e4b2d20cd78788b2a9b8de9cd93438e.jpg" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      {this.props.name}
                    </span>
                    <p><a href="#!">View More</a></p>
                  </div>
                  <div className="card-reveal" >
                    <span className="card-title grey-text text-darken-4">
                    { this.props.name }
                    <i className="mdi mdi-navigation-close right" ></i></span>
                    <p>{ this.props.description }</p>
                  </div>
      </div>
    </li>;
  }

}
