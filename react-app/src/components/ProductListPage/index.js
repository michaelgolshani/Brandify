import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk } from '../../store/products';
import './ProductListPage.css';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { brandName } = useParams();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  const state= useSelector(state => state)
  console.log(state)

  let products = []

  return (
    <div className='product-list-dashboard-container'>
      <div className='product-list-side-menu'>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-house"></i>
          <div className='product-list-side-bar-text'>Home</div>
        </div>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-inbox"></i>
          <div className='product-list-side-bar-text'>Orders</div>
        </div>
        <div className='product-list-inidividual-choice'>
          <i className="fa-solid fa-tag fa-rotate-90"></i>
          <div className='product-list-side-bar-text'>Products</div>
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
          <div>{product.brand}</div>
        </div>
      ))}


      </div>

    </div>
    </div>
  );
};

export default ProductListPage;
