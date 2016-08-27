import React from 'react';
import FoodComp from './FoodComp.js'
import { Link } from 'react-router';

export default class FoodsListComp extends React.Component {

  componentDidMount(){
    this.props.load();
  }
  render() {
    let { list } = this.props;
    return (
      <div className="row" >
        <div className="col s12 " >
        <h4 className="center orange-text" >Foods List</h4>
          <div className="valign-wrapper center" >
            <Link to='add'  className="btn-floating btn-large waves-effect waves-light red" >
       <i className='mdi mdi-content-add' ></i>
      </Link>
        </div>
      </div>
      <div className="col s12 " >
           <ul className='row' >
             {  list.map( (food,index) => {
               return <FoodComp
                 key={index}
                 name={food.name}
                 description={food.description} 
                 />
             }) }
           </ul>
           </div>
      </div>
         );
  }

}
