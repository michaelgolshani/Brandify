const GET_ALL_PRODUCTS = "products/all";
const CREATE_PRODUCT = 'products/new'
const GET_SINGLE_PRODUCT = 'products/productID'
const UPDATE_PRODUCT = 'products/update'
const DELETE_PRODUCT = 'products/delete'

const getAllProducts = (products) => ({
  type: GET_ALL_PRODUCTS,
  products
});

const createProduct = (product) => ({
  type: CREATE_PRODUCT,
  product
});

const getSingleProduct = (product) => ({
  type: GET_SINGLE_PRODUCT,
  product
})

const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product
})

const deleteProduct = () => ({
  type: DELETE_PRODUCT,

})


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

export const createProductThunk = (product, brandName) => async (dispatch) => {
  const res = await fetch(`/api/products/${brandName}/new`, {
    method: "POST",
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(product)
    body: product
  })

  if (res.ok) {
    const new_product = await res.json()
    dispatch(createProduct(product))

    return new_product
  }
  else {
    const errors = await res.json()
    return ("Error Response:", errors)
  }
}


export const getSingleProductThunk = (productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}`)

  if (response.ok) {

    const product = await response.json()

    dispatch(getSingleProduct(product))
    return product
  }
  else {
    const errors = await response.json()
    return errors
  }
}

export const updateProductThunk = (formData, brandName, productId) => async (dispatch) => {
  const res = await fetch(`/api/products/edit/${brandName}/${productId}`, {
    method: "PUT",
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(formData)
    body: formData
  })


  if (res.ok) {
    const updated_product = await res.json()
    dispatch(updateProduct(updated_product))

    return updated_product
  }
  else {
    const error = res.json()
    return ("Error response:", error)
  }
}


export const deleteProductThunk = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/delete/${productId}`, {
    method: "DELETE",
  });

  if (res.ok) {

    const data = await res.json()

    dispatch(deleteProduct())
    return data;
  }
  else {
    const error = await res.json()
    return error
  }

};

const initialState = { allProducts: {}, singleProduct: {} };

export default function productsReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      newState = { ...state, allProducts: { ...action.products } };
      return newState;

    case CREATE_PRODUCT:

      newState = { ...state, allProducts: { ...state.allProducts }, singleProduct: { ...state.singleProduct } }
      newState.allProducts[action.product.id] = action.product
      return newState

    case GET_SINGLE_PRODUCT:

      newState = { ...state, allProducts: { ...state.allProducts }, singleProduct: { ...action.product } }
      return newState

    case UPDATE_PRODUCT:
      newState = { ...state, allProducts: { ...state.allProducts }, singleProduct: { ...state.singleProduct } }
      if (newState.allProducts[action.product.id]) {
        newState.allProducts[action.product.id] = action.product
      }
      newState.singleProduct = action.product


      return newState

    case DELETE_PRODUCT:
      newState = { ...state, allProducts: { ...state.allProducts }, singleProduct: { ...state.singleProduct } }
      delete newState.allProducts[action.id]

      return newState


    default:
      return state;
  }
}
