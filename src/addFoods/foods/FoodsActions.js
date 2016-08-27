import Foods from '../api/Foods.js'  ;
function renderFoods(status,foods) {
 return {
    type: 'foods-list',
    status: status,
    list: foods
  }
}



function getAndRenderFoods(){
  return (dispatch) => {
      dispatch(renderFoods('loading',null))
      let food = new Foods();
      food.getAll()
       .then((data) => {
         dispatch(renderFoods('loaded',data));
      });
     };
}

export { getAndRenderFoods };
