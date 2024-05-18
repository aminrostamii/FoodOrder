// CartContextProvider.js
import { createContext, useContext, useReducer } from "react";

// Function to calculate total items count and total price
const sumProducts = (products) => {
  const itemsCounter = products.reduce((counter, product) => counter + product.quantity, 0);
  const total = products.reduce((total, product) => {
    // Calculate price after discount if applicable
    const priceWithDiscount = product.discount ? (product.price * (1 - product.discount / 100)) : product.price;
    return total + (priceWithDiscount * product.quantity);
  }, 0).toFixed(2);
  return { itemsCounter, total };
};

// Create context for the cart
const cartContext = createContext();

// Initial state of the cart
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

// Reducer function to handle cart actions
const reducer = (state, action) => {
  switch (action.type) {
    // Add product to the cart
    case "ADD_ITEM":
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };
    
    // Remove product from the cart
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    
    // Increase quantity of a product
    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
      const increasedItem = { ...state.selectedItems[increaseIndex], quantity: state.selectedItems[increaseIndex].quantity + 1 };
      const updatedSelectedItemsIncrease = [
        ...state.selectedItems.slice(0, increaseIndex),
        increasedItem,
        ...state.selectedItems.slice(increaseIndex + 1)
      ];
      return {
        ...state,
        selectedItems: updatedSelectedItemsIncrease,
        ...sumProducts(updatedSelectedItemsIncrease),
      };
    
    // Decrease quantity of a product
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
      const updatedSelectedItemsDecrease = state.selectedItems.map((item, index) => {
        if (index === decreaseIndex && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return {
        ...state,
        selectedItems: updatedSelectedItemsDecrease,
        ...sumProducts(updatedSelectedItemsDecrease),
      };
    
    // Handle checkout
    case 'CHECKOUT':
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkOut: true,
      };
    
    // Default case to handle invalid action types
    default:
      throw new Error('invalid action type');
  }
};

// Context provider component to wrap around the app and provide cart state and dispatch
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

// Custom hook to use cart context
const useCart = () => {
  const { state, dispatch } = useContext(cartContext);
  return [state, dispatch];
};

export default CartContextProvider;
export { useCart };
