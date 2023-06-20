import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk } from '../../store/products';
import './ProductListPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SideBarDashboard from '../SideBarDashboard.js';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { brandName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      dispatch(getSingleBrandThunk(brandName));
    };

    fetchData();
  }, [dispatch, brandName]);


  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 20));
      dispatch(getAllProductsThunk());
    };
    fetchData();
  }, [dispatch]);
  

  console.log("BRAND NAME", brandName)
  const state = useSelector(state => state)
  console.log(state)
  const allProducts = useSelector(state => state?.products.allProducts)
  console.log("ALL PRODUCTS", allProducts)
  const singleBrand = useSelector(state => state.brands.singleBrand)
  console.log("SINGLE BRAND", singleBrand)
  const allProductsArr = Object.values(allProducts)
  console.log("all products arr", allProductsArr)

  let products = []
  if (allProducts) {
    products = []
    for (let i = 0; i < allProductsArr.length; i++) {
      let product = allProductsArr[i]
      if (product.brand_id === singleBrand.id && product.owner_id === state.session.user.id) {
        products.push(product)
      }
    }
  }

  console.log("PRODUCTS OF BRAND", products)

  return (
    <div className='product-list-dashboard-container'>
      <SideBarDashboard />
      <div className='product-list-main-container'>
        <div className='product-list-top-bar'>
          <div className='product-list-products-text'>Products</div>
          {/* <div>Export</div> */}
          <button className='product-list-add-product' onClick={() => history.push(`/store-dashboard/${brandName}/new`)}>Add Product</button>
        </div>
        <div className='product-list-white-container'>
          <div className='product-list-rows-container background-grey'>
            <div><input type="checkbox" /></div>
            <div>My Store</div>
            <div></div>
            <div>Product</div>
            <div>Price</div>
            <div>Status</div>
            <div>Inventory</div>
            <div>Vendor</div>
            <div>Edit</div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="product-list-rows-container product-list-grey-hover" onClick={() => history.push(`/store-dashboard/${brandName}/${product.id}/edit`)}>
              <div>
                <input type="checkbox" />
              </div>
              <i className="fa-sharp fa-solid fa-store store-icon" onClick={(event) => {
                event.stopPropagation();
                history.push(`/store/${brandName}/${product.id}`);
              }}></i>
              <img className='product-list-small-image' src={product.images[0]} />
              <div>{product.name}</div>
              <div>${Math.ceil(product.price)}</div>
              <div className={product.active ? "product-list-rows-active" : ""}>Active</div>
              <div>{product.inventory}</div>
              <div>{brandName}</div>
              <i className="fa-solid fa-pen-to-square store-icon"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
