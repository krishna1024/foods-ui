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
      <div>
      <Link to='add'  >Add</Link>
           <ul>
             {  list.map( (food,index) => {
               return <FoodComp  key={index} name={food.name} />
             }) }
           </ul>
      </div>
         );
  }

}
