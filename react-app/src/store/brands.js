
const GET_ALL_BRANDS = 'boards/all'
const GET_SINGLE_BRAND = 'boards/brandName'
const CREATE_BRAND = 'boards/new'
const UPDATE_BRAND = 'boards/edit'
const DELETE_BRAND = "boards/delete";

const GET_ALL_ORDERS = 'orders/all';
const CREATE_ORDER = 'orders/new';




const getSingleBrand = (brand) => ({
  type: GET_SINGLE_BRAND,
  brand
})


const getAllBrands = (brands) => ({
  type: GET_ALL_BRANDS,
  brands
})

const createBrand = (brand) => ({
  type: CREATE_BRAND,
  brand
})

const updateBrand = (brand) => ({
  type: UPDATE_BRAND,
  brand
})

const deleteBrand = () => ({
  type: DELETE_BRAND,
})

const getAllOrders = (orders) => ({
  type: GET_ALL_ORDERS,
  orders
});

const createOrder = (order) => ({
  type: CREATE_ORDER,
  order
});



export const getAllBrandsThunk = () => async (dispatch) => {
  const response = await fetch("/api/brands/")

  if (response.ok) {
    const brands = await response.json()

    dispatch(getAllBrands(brands))
    return brands
  }
  else {
    const errors = await response.json()
    return errors
  }

}

// export const getSingleBrandThunk = (brandId) => async (dispatch) => {
//   const response  = await fetch(`/api/brands/${brandId}`)
//
//   if (response.ok){

//     const brand = response.json()
//
//     dispatch(getSingleBrand(brand))
//     return brand
//   }
//   else {
//     const errors = await response.json()
//     return errors
//   }
// }

export const getSingleBrandThunk = (brandName) => async (dispatch) => {
  const response = await fetch(`/api/brands/${brandName}`)

  if (response.ok) {

    const brand = await response.json()

    dispatch(getSingleBrand(brand))
    return brand
  }
  else {
    const errors = await response.json()
    return errors
  }
}




export const createBrandThunk = (brand) => async (dispatch) => {
  const res = await fetch('/api/brands/new', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(brand)
  })

  if (res.ok) {
    const new_brand = await res.json()
    dispatch(createBrand(new_brand))
    return new_brand
  }
  else {
    return ("Error response:", res)
  }
}



export const updateBrandThunk = (formData, brandName) => async (dispatch) => {
  const res = await fetch(`/api/brands/edit/${brandName}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })


  if (res.ok) {
    const updated_brand = await res.json()
    dispatch(updateBrand(updated_brand))

    return updated_brand
  }
  else {
    const error = res.json()
    return ("Error response:", error)
  }
}

export const deleteBrandThunk = (brandName) => async (dispatch) => {
  const res = await fetch(`/api/brands/delete/${brandName}`, {
    method: "DELETE",
  });

  if (res.ok) {

    const data = await res.json()

    dispatch(deleteBrand())
    return data;
  }
  else {
    const error = await res.json()
    return error
  }

};


export const getAllOrdersThunk = () => async (dispatch) => {
  const response = await fetch('/api/orders');

  if (response.ok) {
    const orders = await response.json();
    dispatch(getAllOrders(orders));
    return orders;
  } else {
    const errors = await response.json();
    return errors;
  }
};



export const createOrderThunk = (order) => async (dispatch) => {
  const response = await fetch('/api/orders/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });



  if (response.ok) {

    const newOrder = await response.json();

    dispatch(createOrder(newOrder));
    return newOrder;
  } else {
    const errors = await response.json();
    return errors;
  }
};













const initialState = { allBrands: {}, singleBrand: {}, allOrders: {} }

export default function brandsReducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {

    case GET_ALL_BRANDS:

      newState = { ...state, allBrands: { ...action.brands }, singleBrand: { ...state.singleBrand }, allOrders: { ...state.allOrders } }
      return newState

    case CREATE_BRAND:
      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...state.singleBrand } }
      newState.allBrands[action.brand.id] = action.brand
      return newState

    case UPDATE_BRAND:
      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...state.singleBrand }, allOrders: { ...state.allOrders } }
      if (newState.allBrands[action.brand.id]) {
        newState.allBrands[action.brand.id] = action.brand
      }
      newState.singleBrand = action.brand


      return newState

    case GET_SINGLE_BRAND:

      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...action.brand }, allOrders: { ...state.allOrders } }
      return newState

    case DELETE_BRAND:
      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...state.singleBrand }, allOrders: { ...state.allOrders } }
      delete newState.allBrands[action.id]

      // if (newState.singleBrand.id == action.brand.id) {
      //   newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: {} }
      // }

      return newState

    case GET_ALL_ORDERS:

      newState = {
        ...state,
        allOrders: { ...action.orders }
      };
      return newState;

    case CREATE_ORDER:

      newState = {
        ...state,
        allBrands: { ...state.allBrands },
        singleBrand: { ...state.singleBrand },
        allOrders: { ...state.allOrders }
      };
      const brandId = action.order.brand_id;
      const orderId = action.order.id;

      newState.allOrders = {
        ...newState.allOrders,
        [brandId]: {
          ...newState.allOrders[brandId],
          [orderId]: action.order
        }
      };
      return newState;

    default:
      return state
  }
}
