import React, { useEffect, useState } from 'react'
import { OrangeGradientWave, StraightGradientWave } from '../AllDesignContent/OrangeGradientWave'
import './ProductPage.css'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getSingleProductThunk } from '../../store/products'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch, useSelector } from 'react-redux'








const ProductPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const state = useSelector((state) => state)
  console.log("STATE", state)
  const currentProduct = state.products.singleProduct
  console.log("CURRENT PRODUCT", currentProduct)

  const currentBrand = state.brands.singleBrand
  console.log("CURRENT BRAND", currentBrand)


  const [order, setOrder] = useState(1)
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(currentProduct?.images?.[0] || '')
  const { brandName, productId } = useParams()

  console.log("BRAND NAME", brandName)
  console.log("PRODUCT ID", productId)

  useEffect(() => {
    dispatch(getSingleProductThunk(productId))
    dispatch(getSingleBrandThunk(brandName))
  }, [dispatch, productId, brandName, selectedImage])



  const handleImageLoad = () => {
    setImagesLoaded(true);
    setSelectedImage(currentProduct?.images?.[0]);
  };


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

 

  return (

    <div className='product-page-container'>


      <section className='red anim_gradient top-section'>
        <div className="wave-top-test">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 70" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className='top-section-left index'>
          <div>
            <img src={selectedImage} className='energy-drink index' />
          </div>
          <div className="small-images-product">
            {currentProduct.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`energy-drink-small-images index ${image === selectedImage ? 'selected' : ''
                  }`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className='top-section-right'>
          <h1 className='index product-title shadowed-text'>{currentProduct?.name?.toUpperCase()}</h1>
          <div className='top-title-money'>
            <div className='add-minus-sign-price'>${currentProduct.price}</div>
          </div>
          <div className='add-minus-sign-container'>
            <div className='add-minus-sign' onClick={() => {
              if (order > 1) {
                setOrder(order - 1);
              }
            }}>
              <i className="fa-solid fa-minus" ></i>
            </div >
            <div className='add-minus-sign-number' >
              {order}
            </div>
            <div className='add-minus-sign' onClick={() => setOrder(order + 1)}>
              <i className="fa-regular fa-plus"></i>
            </div>
          </div>
          <div className='buy-now-button'>
            Add to Cart
          </div>

          <p className='index product-description'>{currentProduct.description}</p>
        </div>
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 70" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>






      <section>
        <div class="wave-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      <section className='section-3'>
        <h1>Nice Curves 45</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section>
        <div class="wave-3">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section class="wave-4">
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>

    </div>
  )
}


export default ProductPage
