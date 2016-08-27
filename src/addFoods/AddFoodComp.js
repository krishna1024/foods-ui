import { Link } from 'react-router';
import React from 'react';


export default class AddFoodComp extends React.Component {

  constructor(props) {
    super();
    this.props = props;
  };

  handleName(event) {
    this.setState({name: event.target.value });
  };


  handleDescription(){
    this.setState({description: event.target.value });
  };

  onSubmit() {
    this.props.onSubmit({ name: "Kajuburffi" });
  }

  render() {
    return (
      <div className="row">
      <div className="col s12 valign-wrapper" >
        <h4 className="center orange-text" >Add Food</h4>
        <Link id="image" to="/" type="submit" className="waves-effect waves-light btn left valign" >
          <i className="mdi mdi-navigation-arrow-back" ></i>
        </Link>
      </div>
   <form className="col s12">
     <div className="row">
       <div className="input-field col s12">
         <input id="name" type="text" className="" />
         <label htmlFor="name" >Name</label>
       </div>
       <div className="input-field col s12">
         <input id="description" type="text" className="" />
         <label htmlFor="description" >Description</label>
       </div>
       <div className="input-field col s12 m3">

       </div>
       <div className="input-field col s12 m3" >
         <a onClick={ () => { this.props.onSubmit({
            name: 'Kajuburffi',
            description: 'A sweet made of kaju and sugar'
          }) } } className="waves-effect waves-light btn" >
           Add
         </a>
       </div>
     </div>
   </form>
 </div>

    );
  }
}
