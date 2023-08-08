import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk } from '../../store/products';
import './ProductListPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SideBarDashboard from '../SideBarDashboard.js';
import LoadingButton from '../LoadingButton';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { brandName } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      dispatch(getSingleBrandThunk(brandName));
    };

    fetchData();
  }, [dispatch, brandName]);


  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(getAllProductsThunk());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);



  const state = useSelector(state => state)

  const allProducts = useSelector(state => state?.products.allProducts)

  const singleBrand = useSelector(state => state.brands.singleBrand)

  const allProductsArr = Object.values(allProducts)


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

          {isLoading ? (
            <div className='loading-container'>
              <LoadingButton />
            </div>
          ) : (
            <>
              <div className='product-list-rows-container background-grey'>
                <div><input type="checkbox" /></div>
                <div>My Store</div>
                <div></div>
                <div>Product</div>
                <div>Price</div>
                {/* <div>Status</div> */}
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
                  {/* <div className={product.active ? "product-list-rows-active" : ""}>Active</div> */}
                  <div>{product.inventory}</div>
                  <div>{brandName}</div>
                  <i className="fa-solid fa-pen-to-square store-icon"></i>
                </div>
              ))}
            </>
          )}
        </div>


      </div>
    </div>
  );
};

export default ProductListPage;
