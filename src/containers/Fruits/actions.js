/* Action Types */
export const ADD_FRUIT = 'ADD_FRUIT';
export const CLEAR_FRUITS = 'CLEAR_FRUITS';

export const addFruit = (fruitName) => ({
  type: ADD_FRUIT,
  fruitName
})

export const clearFruits = () => ({
  type: CLEAR_FRUITS
})
