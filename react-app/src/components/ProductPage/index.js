import React, { useEffect, useState } from 'react'
import { OrangeGradientWave, StraightGradientWave } from '../AllDesignContent/OrangeGradientWave'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getSingleProductThunk } from '../../store/products'
import { getSingleBrandThunk } from '../../store/brands'
import { useDispatch, useSelector } from 'react-redux'
import LoadingButton from '../LoadingButton'
import './PoppyProductPage.css'
import './ModernProductPage.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { getAllOrdersThunk } from '../../store/brands'
import check from '../../assets/check.png'
import ShoppingCart from '../ShoppingCart'
import BrandNavBar from '../BrandComponents/BrandNavBar/BrandNavBar'


const ProductPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const state = useSelector((state) => state)
  console.log("STATE", state)
  const currentProduct = state.products.singleProduct
  console.log("CURRENT PRODUCT", currentProduct)

  const currentBrand = state.brands.singleBrand
  console.log("CURRENT BRAND", currentBrand)

  const currentBrandProducts = currentBrand.products
  console.log("CURRENT BRAND PRODUCTS", currentBrandProducts)

  // const currentBrandProductsArr = Object.values(currentBrandProducts)
  // console.log("CURRENT BRAND PRODUCTS ARR", currentBrandProductsArr)

  const [currentProductQuantity, setCurrentProductQuantity] = useState(1)
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(currentProduct ? currentProduct.images?.[0] : '')
  const { brandName, productId } = useParams()
  // const [theme, setTheme] = useState('modern')
  const [theme, setTheme] = useState(currentBrand.theme)
  const [openCart, setOpenCart] = useState(false)
  const [cartItems, setCartItems] = useState([]);

  console.log("OPEN CART", openCart)

  // this will control straight lines or waves on the site
  // const modern = true

  const handleTheme = () => {
    if (theme === 'modern') {
      setTheme('poppy')
    } else {
      setTheme('modern')
    }
  }
  console.log("THEME", theme)


  console.log("BRAND NAME", brandName)
  console.log("PRODUCT ID", productId)
  console.log("COVER IMAGE", currentProduct?.images?.[0])

  useEffect(() => {
    dispatch(getSingleProductThunk(productId))
    dispatch(getSingleBrandThunk(brandName))
  }, [dispatch, productId, brandName])


  // Checks for the main image and also a brands theme, and refreshes the data
  useEffect(() => {
    if (currentProduct?.images?.[0]) {
      setSelectedImage(currentProduct.images[0]);
    }
    if (currentBrand?.theme) {
      setTheme(currentBrand.theme);
    }
  }, [currentProduct, currentBrand]);




  const redirectProduct = (productId) => {
    history.push(`/store/${brandName}/${productId}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  const handleImageLoad = () => {
    setImagesLoaded(true);
    setSelectedImage(currentProduct?.images?.[0]);
  };


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };




  const handleAddToCart = (product, quantity) => {

    const existingItem = cartItems.find(item => item.name === product.name)
    console.log("EXISTING ITEM", existingItem)

    if (existingItem) {
      // Product already exists in the cart, update its quantity
      const updatedItems = cartItems.map(item => {
        if (item.name === product.name) {
          console.log("ITEM", item)
          console.log("PRODUCT", product)
          console.log("ITEM QUANTITIY", item.quantity)
          console.log("PRODUCT QUANITIY", product.quantity)
          return {
            ...item,
            quantity: item.quantity + quantity // Convert product.quantity to number
          };
        }
        return item;
      });
      setCartItems(updatedItems);
      setCurrentProductQuantity(1);
    }

    else {
      const newItem = {
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: quantity,
      };
      setCartItems([...cartItems, newItem]);
      setCurrentProductQuantity(1);
    }

    setOpenCart(!openCart)


  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Perform any additional operations after the timeout (e.g., show loader, handle error)
    }, 2000); // Set the timeout duration here (in milliseconds)

    return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
  }, []); // Empty dependency array to run the effect only once


  let isProductInBrand = false;

  for( let i = 0 ; i < currentBrandProducts?.length ; i++ ){
    let currentBrandProduct = currentBrandProducts[i]
    if (currentBrandProduct.id === currentProduct.id){
      isProductInBrand = true
    } else{
      console.log("THE PRODUCT IS FALSE")
    }
  }


  if (isLoading) {
    return <LoadingButton />
  }

  return (
    <>

    <div className={`product-page-container ${theme}`}>
    <BrandNavBar brandName={brandName} currentBrand={currentBrand} cartItems={cartItems} openCart={openCart} setOpenCart={setOpenCart}/>
      <ShoppingCart openCart={openCart} currentProductQuantity={currentProductQuantity} setCurrentProductQuantity={setCurrentProductQuantity} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems} brandName={brandName} />
      <section className='red anim_gradient top-section'>
        {/* <div className="wave-top-test">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 70" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>

          </svg>
        </div> */}
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
              if (currentProductQuantity > 1) {
                setCurrentProductQuantity(currentProductQuantity - 1);
              }
            }}>
              <i className="fa-solid fa-minus" ></i>
            </div >
            <div className='add-minus-sign-number' >
              {currentProductQuantity}
            </div>
            <div className='add-minus-sign' onClick={() => setCurrentProductQuantity(currentProductQuantity + 1)}>
              <i className="fa-regular fa-plus"></i>
            </div>
            <div onClick={handleTheme} className='manage-theme'>Change Theme</div>
          </div>

          <div className='buy-now-button' onClick={() => handleAddToCart(currentProduct, currentProductQuantity)}>
            Add to Cart
          </div>

          <p className='index product-description'>{currentProduct.description}</p>


        </div>

        {theme == 'modern' ? (
          <div class="custom-shape-divider-bottom-1687372545">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
          </div>
        ) : (
          <div className="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 70" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
          </div>
        )

        }

      </section>
      {/*
      <section className='mask-section product-page-feature black-background'>


      <h2 className="masked-text">Your Text Here</h2>


      </section> */}




      {/* <section>
        <div class="wave-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </section> */}
      <section className='section-3'>

        <h1 className='index you-may-also-like shadowed-text-white'>YOU MAY ALSO LIKE</h1>
        <div className='you-may-like-image-container carousel'>
          {currentBrandProducts.map((product, index) => (
            <div className='current-brand-products-container' onClick={() => redirectProduct(product.id)}>
              <img
                key={index}
                src={product.images[0]}
                className="you-may-also-images"

              // onClick={() => handleImageClick(image)}
              />
              <div className='you-may-also-name'>{product.name}</div>
              <div className='you-may-also-name'>${product.price}</div>
            </div>
          ))}
          {currentBrandProducts.map((product, index) => (
            <div className='current-brand-products-container' onClick={() => redirectProduct(product.id)}>
              <img
                key={index}
                src={product.images[0]}
                className="you-may-also-images"

              // onClick={() => handleImageClick(image)}
              />
              <div className='you-may-also-name'>{product.name}</div>
              <div className='you-may-also-name'>${product.price}</div>
            </div>
          ))}
        </div>
        {/* <p>This is a test to see how we can do the product</p> */}



      </section>
      {/* <section> */}
      {/* <div class="wave-3">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div> */}
      {/* <div class="custom-shape-divider-top-1687372598">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div> */}

      {/* <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section class="wave-4">
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>This is a test to see how we can do the product</p>
      </section> */}


    </div>
    </>
  )
}


export default ProductPage
