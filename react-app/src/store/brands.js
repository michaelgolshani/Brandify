
const GET_ALL_BRANDS = 'boards/all'
const GET_SINGLE_BRAND = 'boards/id'
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

export const getSingleBrandThunk = (brandId) => async (dispatch) => {
  const response  = await fetch(`/api/brands/${brandId}`)
  console.log("WE ARE IN SINGLE BRAND", response)
  if (response.ok){

    const brand = response.json()
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



export const updateBrandThunk = (brand) => async (dispatch) => {
  const res = await fetch('/api/boards/edit', {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(brand)
  })

  if (res.ok) {
    const updated_brand = res.json()
    dispatch(updateBrand(updated_brand))
    return updated_brand
  }
  else {
    const error = res.json()
    return ("Error response:", error)
  }
}



















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
      return newState

      case GET_SINGLE_BRAND:
        console.log("WE ARE IN SINGLE BRAND thunk", action.brand)
        newState = {...state,allBrands:{...state.allBrands}, singleBrand:{...action.brand}}
        return newState

    default:
      return state
  }
}
