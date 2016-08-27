import { connect } from 'react-redux'
import AddFoodComp from './AddFoodComp.js';
import { addFoodToAPI } from './AddFoodActions.js';

const mapStateToProps = (state, ownProps) => {
  return {

  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (data) => {
      dispatch( addFoodToAPI(data))
      console.log('Submited');
     }
  }
};

const AddFood = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFoodComp);

export default AddFood;
