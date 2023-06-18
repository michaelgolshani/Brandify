import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk } from '../../store/products';
import './AddProductPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SideBarDashboard from '../SideBarDashboard.js';

const AddProductPage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { brandName } = useParams();

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState(['', '', '']);
  const [optionalImage1, setOptionalImage1] = useState('');
  const [optionalImage2, setOptionalImage2] = useState('');
  const [features, setFeatures] = useState(['', '', '']);
  const [inventory, setInventory] = useState('')


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



  // we need to add the correct images into our array
  const updateImage = (value, index) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const updateFeature = (value, index) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };


  //find the single product
  let products = []
  if (allProducts) {
    products = []
    for (let i = 0; i < allProductsArr.length; i++) {
      let product = allProductsArr[i]
      if (product.brand_id === singleBrand.id) {
        products.push(product)
      }
    }
  }


  //combine images before sending them to the database
  const combinedImages = [...images, optionalImage1, optionalImage2].filter(Boolean).join(',');

  console.log("PRODUCTS OF BRAND", products)

  return (
    <div className='product-list-dashboard-container'>
      <SideBarDashboard />
      <div className='product-list-main-container'>
        <div className='product-list-top-bar'>
          <div className='product-list-products-text'>Add Product</div>
          <button className='product-list-add-product'>Save</button>
        </div>

        <div className='add-product-left-right-container'>
          <div className='add-product-left-container-main' style={{ flex: '1 1 40%' }}>

            <div className='add-product-left-container-individual title-description'>
              <label>
                Title
                <input
                  value={name}
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                  required
                >
                </input>
              </label>
              <label>
                Description
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
            </div>


            <div className='add-product-left-container-individual media'>
              <label>
                Product Cover Photo
                <input
                  value={images[0]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 0)}
                  required
                />
              </label>
              <label>
                Photo #2
                <input
                  value={images[1]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 1)}
                  required
                />
              </label>
              <label>
                Photo #3
                <input
                  value={images[2]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 2)}
                  required
                />
              </label>
              <label>
                Photo #4
                <input
                  value={images[3]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 3)}

                />
              </label>
              <label>
                Photo #5
                <input
                  value={images[4]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 4)}

                />
              </label>
            </div>

            <div className='add-product-left-container-individual media'>
              <label>
                Pricing
                <input
                  value={price}
                  type='text'
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="add-product-left-container-individual" >
              {features.map((feature, index) => (
                <div key={index}>
                  <label>
                    Feature {index + 1}
                    <input
                      value={feature}
                      type="text"
                      onChange={(e) => updateFeature(e.target.value, index)}
                      required
                    />
                  </label>
                </div>
              ))}
            </div>

            <div className='add-product-left-container-individual media'>
              <label>
                Inventory
                <input
                  value={inventory}
                  type='number'
                  onChange={(e) => setInventory(e.target.value)}
                  required
                />
              </label>
            </div>



          </div>









          <div className='add-product-right-container' style={{ flex: 1 }}>
            <div className='add-product-right-container-individual status'>Status</div>
            <div className='add-product-right-container-individual title-description'>Publishing</div>
          </div>





        </div>

      </div>
    </div>
  );
};

export default AddProductPage;
