function foodsAppReducer(state,action) {
  if( action.do === 'load' )
  return {
    state: 'app-loaded'
  };
  if( action.type === 'foods-list') {
    const nextState = Object.assign({},state,{
      foodsList: action
    })
    return nextState;
  }

};

export { foodsAppReducer };
