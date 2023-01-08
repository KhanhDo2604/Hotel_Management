const actions = {
  new: "NEW",
  subtract: "SUBTRACT",
  add: "ADD",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.new:
      if (!state[action.data.id])
        return {
          ...state,
          [action.data.id]: {
            id: action.data.id,
            cover: action.data.foodImg,
            quantity: 1,
            price: action.data.price,
            name: action.data.name,
            description: action.data.description,
          },
        };
      else {
        state[action.data.id].quantity++;
        return { ...state };
      }
    case actions.subtract:
      if (state[action.data.id].quantity > 1) state[action.data.id].quantity--;
      else delete state[action.data.id];
      return { ...state };
    case actions.add:
      state[action.data.id].quantity++;
      return { ...state };
    default:
      return;
  }
};

export { actions, reducer };
