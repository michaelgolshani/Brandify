const GET_ALL_PRODUCTS = "products/all";

const getAllProducts = (products) => ({
  type: GET_ALL_PRODUCTS,
  products
});

export const getAllProductsThunk = () => async (dispatch) => {
  try {
    const response = await fetch("/api/products/");
    if (response.ok) {
      const products = await response.json();
      dispatch(getAllProducts(products));
      return products;
    } else {
      const errors = await response.json();
      return errors;
    }
  } catch (error) {
    console.error("Error in getAllProductsThunk:", error);
  }
};

const initialState = { allProducts: {}, singleProduct: {} };

export default function productsReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      newState = { ...state, allProducts: { ...action.products } };
      return newState;

    default:
      return state;
  }
}
