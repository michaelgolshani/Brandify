import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk } from '../../store/products';
import './ProductListPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { brandName } = useParams();

  useEffect(() => {
    dispatch(getSingleBrandThunk(brandName))
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  const state = useSelector(state => state)
  console.log(state)
  const allProducts = useSelector(state => state?.products.allProducts)
  console.log("ALL PRODUCTS", allProducts)
  const singleBrand = useSelector(state => state.brands.singleBrand)
  console.log(singleBrand)
  const allProductsArr = Object.values(allProducts)
  console.log("all products arr", allProductsArr)

  let products = []
  if (allProducts){
    products=[]
    for (let i =0; i < allProductsArr.length ; i ++){
      let product = allProductsArr[i]
      if(product.brand_id === singleBrand.id ){
        products.push(product)
      }
    }
  }

  console.log("PRODUCTS OF BRAND",products)

  return (
    <div className='product-list-dashboard-container'>
      <div className='product-list-side-menu'>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-house"></i>
          <div className='product-list-side-bar-text' onClick={() => history.push(`/store-dashboard/${brandName}`)} >Home</div>
        </div>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-inbox"></i>
          <div className='product-list-side-bar-text'>Orders</div>
        </div>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-tag fa-rotate-90"></i>
          <div className='product-list-side-bar-text' onClick={() => history.push(`/${brandName}/products`)}>Products</div>
        </div>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-address-card"></i>
          <div className='product-list-side-bar-text'>Customers</div>
        </div>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-chart-line"></i>
          <div className='product-list-side-bar-text'>Analytics</div>
        </div>
        <div className='product-list-inidividual-choice product-list-settings'>
          <i className="fa-solid fa-gear"></i>
          <div className='product-list-side-bar-text'>Settings</div>
        </div>
      </div>



      <div className='product-list-main-container'>
        <div className='product-list-top-bar'>
          <div className='product-list-products-text'>Products</div>
          {/* <div>Export</div> */}
          <button className='product-list-add-product'>Add Product</button>
        </div>
        <div className='product-list-white-container'>
          <div className='product-list-rows-container background-grey'>
            <div><input type="checkbox" /></div>
            <div></div>
            <div>Product</div>
            <div>Status</div>
            <div>Inventory</div>
            <div>Vendor</div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="product-list-rows-container product-list-grey-hover">
              <div>
                <input type="checkbox" />
              </div>
              <div>{product.image}</div>
              <div>{product.name}</div>
              <div className={product.active ? "product-list-rows-active" : ""}>Active</div>
              <div>{product.inventory}</div>
              <div>{brandName}</div>
            </div>
          ))}


        </div>

      </div>
    </div>
  );
};

export default ProductListPage;
