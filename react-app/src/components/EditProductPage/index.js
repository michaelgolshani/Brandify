import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk, getSingleProductThunk } from '../../store/products';
import './EditProductPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SideBarDashboard from '../SideBarDashboard.js';
import { createProductThunk,updateProductThunk, deleteProductThunk } from '../../store/products';

const EditProductPage = ({ update }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { brandName, productId } = useParams();

  // const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  // const [description, setDescription] = useState('')
  // const [images, setImages] = useState(['', '', '']);
  // const [optionalImage1, setOptionalImage1] = useState('');
  // const [optionalImage2, setOptionalImage2] = useState('');
  // const [features, setFeatures] = useState(['', '', '']);
  // const [inventory, setInventory] = useState('')


  const [isLoaded, setIsLoaded] = useState(false)

  // const [checkRender, setCheckRender] = useState(true)

  console.log("UPDATE", update)
  console.log("PRODUCT ID", productId)

  const state = useSelector(state => state)
  console.log(state)
  const allProducts = useSelector(state => state?.products.allProducts)
  console.log("ALL PRODUCTS", allProducts)
  const singleBrand = useSelector(state => state.brands.singleBrand)
  console.log(singleBrand)
  const singleProduct = useSelector((state) => state.products.singleProduct)
  console.log("SINGLE PRODUCT", singleProduct)
  const allProductsArr = Object.values(allProducts)
  console.log("all products arr", allProductsArr)

  const [name, setName] = useState(singleProduct.name)
  const [price, setPrice] = useState(singleProduct.price)
  const [description, setDescription] = useState(singleProduct.description)
  const [images, setImages] = useState(singleProduct.images);
  const [optionalImage1, setOptionalImage1] = useState('');
  const [optionalImage2, setOptionalImage2] = useState('');
  const [features, setFeatures] = useState(singleProduct.features);
  const [inventory, setInventory] = useState(singleProduct.inventory)

  console.log("IMAGES", images)

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
  console.log("PRODUCTS", products)
  const currentProductTest = products.find(product => productId == product.id);
  console.log("CURRENT PRODUCT", currentProductTest)

  useEffect(() => {
    // dispatch(getSingleBrandThunk(brandName))
    dispatch(getSingleProductThunk(productId))
    // dispatch(getAllProductsThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    if(singleProduct.name){
      setName(singleProduct.name)
      setDescription(singleProduct.description)
      setPrice(singleProduct.price)
      setInventory(singleProduct.inventory)
      setImages(singleProduct.images)
      setFeatures(singleProduct.features)

    }
  }, [singleProduct,brandName])

  // const currentProduct = products.find(product => productId == product.id);

  //   console.log("CURRENT PRODUCT", currentProduct)
  //   setName(currentProduct?.name);
  //   setPrice(currentProduct?.price);
  //   setDescription(currentProduct?.description);
  //   setImages(currentProduct?.images);
  //   setFeatures(currentProduct?.features);
  //   setInventory(currentProduct?.inventory);


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



  const imagesArr = String(images ?? "").split(',');
  const featuresArr = String(features ?? "").split(',')

  //combine images before sending them to the database
  const combinedImages = [...imagesArr, optionalImage1, optionalImage2].filter(Boolean).join(',');
  console.log("COMBINED IMAGES", combinedImages)
  const combinedFeatures = [...featuresArr].filter(Boolean).join(',');
  console.log("features", combinedFeatures)

  const onDelete = async() => {
    dispatch(deleteProductThunk(productId))
    history.push(`/store-dashboard/${brandName}`)

  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      name: name,
      description: description,
      images: combinedImages,
      price: parseFloat(price),
      features: combinedFeatures,
      inventory: inventory,

    }
    await dispatch(updateProductThunk(formData, brandName, productId))

    console.log("FORM DATA", formData)


  }

  console.log("PRODUCTS OF BRAND", products)

  if (!singleProduct) {
    return <h1>loading...</h1>
  }

  return (
    <div className='product-list-dashboard-container'>
      <SideBarDashboard />
      <form className='product-list-main-container' onSubmit={onSubmit}>
        <div className='product-list-top-bar'>
          <div className='product-list-products-text'>Add Product</div>
          <button className='product-list-delete-product' onClick={onDelete}>Delete</button>
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
                  value={imagesArr[0]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 0)}
                  required
                />
              </label>
              <label>
                Photo #2
                <input
                  value={imagesArr[1]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 1)}
                  required
                />
              </label>
              <label>
                Photo #3
                <input
                  value={imagesArr[2]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 2)}
                  required
                />
              </label>
              <label>
                Photo #4
                <input
                  value={imagesArr[3]}
                  type='text'
                  onChange={(e) => updateImage(e.target.value, 3)}

                />
              </label>
              <label>
                Photo #5
                <input
                  value={imagesArr[4]}
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
              {featuresArr.map((feature, index) => (
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

      </form>
    </div>
  );
};

export default EditProductPage;
