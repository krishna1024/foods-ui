import { connect } from 'react-redux'
import { getAndRenderFoods } from './FoodsActions.js'
import FoodsListComp from './FoodsListComp.js'

const mapStateToProps = (state, ownProps) => {
  if(!state || !state.foodsList )
    return {
      list: [ { name: 'Kaja' } ]
    };

  if(state.foodsList.status  === 'loaded')
    return {
      list: state.foodsList.list
    };

  if(state.foodsList.status  === 'loading')
    return {
      list: [ { name: 'Loading...' }  ]
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      dispatch(getAndRenderFoods())
    }
  }
}

const FoodsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodsListComp)

export default FoodsList;
