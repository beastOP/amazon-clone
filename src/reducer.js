export const initialState = {
    basket: [],
    total: 0,
    items: 0,
    user: null,
    filters: {}
};

// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          ...state,
          total: state.total + action.item.price,
          items: state.items + 1,
          basket: [...state.basket, action.item]
        }

      case 'UPDATE_ITEM_COUNT':
        return {
          ...state,
          total: state.total + action.price,
          items: state.items + 1,
          basket: state.basket.map(item => item.id === action.id ? { ...item, count: item.count++ } : item) 
        }

      case 'DELETE_PRODUCT':
        const index = state.basket.findIndex( item => item.id === action.item.id)
        const newBasket = state.basket
        newBasket.splice(index,1)
        return {
          ...state,
          items: state.items - action.item.count,
          total: state.total - (action.item.count * action.item.price), 
          basket: newBasket
        }

      case 'SET_USER':
        return {
          ...state,
          user: action.user
        }

      case 'ADD_FILTER':
        return {
          ...state,
          filters: { ...action.filters}
        }

      default:
        return state;
    }
};

export default reducer;
