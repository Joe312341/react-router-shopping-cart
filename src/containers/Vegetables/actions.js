export const ADD_VEGETABLE = 'ADD_VEGETABLE';
export const CLEAR_VEGETABLES = 'CLEAR_VEGETABLES';

export const addVegetable = (vegetableName) => ({
    type: ADD_VEGETABLE,
    vegetableName
})

export const clearVegetables = () => ({
  type: CLEAR_VEGETABLES
})
