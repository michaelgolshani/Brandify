
const GET_ALL_BRANDS = 'boards/all'
const GET_SINGLE_BRAND = 'boards/brandName'
const CREATE_BRAND = 'boards/new'
const UPDATE_BRAND = 'boards/edit'
const DELETE_BRAND = "boards/delete";



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



export const getAllBrandsThunk = () => async (dispatch) => {
  const response = await fetch("/api/brands/")

  if (response.ok) {
    const brands = await response.json()
    console.log("WE ARE In get all brands thunk. Response:", brands)
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
//   console.log("WE ARE IN SINGLE BRAND", response)
//   if (response.ok){

//     const brand = response.json()
//     console.log("WE ARE IN SINGLE BRAND RESPONSE", brand)
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
  console.log("WE ARE IN SINGLE BRAND", response)
  if (response.ok) {

    const brand = await response.json()
    console.log("WE ARE IN SINGLE BRAND RESPONSE", brand)
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
  console.log("WE ARE IN UPDATED BRAND THUNK", res)

  if (res.ok) {
    const updated_brand = await res.json()
    dispatch(updateBrand(updated_brand))
    console.log("WE ARE IN SUCCESFUL UPDATED BRAND THUNK", updateBrand)
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
  console.log("WE ARE IN DELETE THUNK before res", res)
  if (res.ok) {

    const data = await res.json()
    console.log("WE ARE IN DELETE THUNK", data)
    dispatch(deleteBrand())
    return data;
  }
  else {
    const error = await res.json()
    return error
  }

};

















const initialState = { allBrands: {}, singleBrand: {} }

export default function brandsReducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {

    case GET_ALL_BRANDS:
      console.log("WE ARE IN GET ALL BRANDS THUNK", action)
      newState = { ...state, allBrands: { ...action.brands }, singleBrand: { ...state.singleBrand } }
      return newState

    case CREATE_BRAND:
      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...state.singleBrand } }
      newState.allBrands[action.brand.id] = action.brand
      return newState

    case UPDATE_BRAND:
      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...state.singleBrand } }
      if (newState.allBrands[action.brand.id]) {
        newState.allBrands[action.brand.id] = action.brand
      }
      newState.singleBrand = action.brand

      console.log("WE ARE IN SUCCESFUL UPDATED BRAND REDUCER", action.brand)
      return newState

    case GET_SINGLE_BRAND:
      console.log("WE ARE IN SINGLE BRAND thunk", action.brand)
      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...action.brand } }
      return newState

    case DELETE_BRAND:
      newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: { ...state.singleBrand } }
      delete newState.allBrands[action.id]
      console.log("WE ARE IN DELETE REDUCER", action)
      // if (newState.singleBrand.id == action.brand.id) {
      //   newState = { ...state, allBrands: { ...state.allBrands }, singleBrand: {} }
      // }
      console.log("WE HAD SUCCES WITH DELETE REDUCER", action)
      return newState

    default:
      return state
  }
}
