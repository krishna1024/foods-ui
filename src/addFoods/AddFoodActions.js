import Foods from '../api/Foods.js';
function addFoodAdding() {
  return {
    type: 'add-food',
    status: 'adding....',
    id: null
  }
};

function addFoodAdded(data) {
  return {
    type: 'add-food',
    status: 'added',
    id: data.id
  }
};

function addFoodFaild(data) {
  return {
    type: 'add-food',
    status: 'faild....',
    id: null
  }
};

function addFoodToAPI(data) {
  return function(dispatch) {
    dispatch(addFoodAdding());
    let foods = new Foods();
    foods.create(data)
    .then((data) => { dispatch(addFoodAdded(data)) });
  }
}

export { addFoodToAPI };
