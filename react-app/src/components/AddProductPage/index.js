import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk, getSingleProductThunk } from '../../store/products';
import './AddProductPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SideBarDashboard from '../SideBarDashboard.js';
import { createProductThunk } from '../../store/products';
import LoadingButton from '../LoadingButton';

const AddProductPage = ({ update }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { brandName, productId } = useParams();

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState(['', '', '']);
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [optionalImage1, setOptionalImage1] = useState('');
  const [optionalImage2, setOptionalImage2] = useState('');
  const [features, setFeatures] = useState(['', '', '']);
  const [inventory, setInventory] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({})



  const [isLoaded, setIsLoaded] = useState(false)

  // const [checkRender, setCheckRender] = useState(true)





  const state = useSelector(state => state)

  const allProducts = useSelector(state => state?.products.allProducts)

  const singleBrand = useSelector(state => state.brands.singleBrand)

  const singleProduct = useSelector((state) => state.products.singleProduct)

  const allProductsArr = Object.values(allProducts)




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

  const currentProductTest = products.find(product => productId == product.id);


  useEffect(() => {
    dispatch(getSingleBrandThunk(brandName))
    dispatch(getSingleProductThunk(productId))
    dispatch(getAllProductsThunk()).then(() => setIsLoaded(true));



  }, [dispatch]);


  // const currentProduct = products.find(product => productId == product.id);

  //
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





  //combine images before sending them to the database
  const combinedImages = [...images, optionalImage1, optionalImage2].filter(Boolean).join(',');

  const combinedFeatures = [...features].filter(Boolean).join(',');


  const validate = () => {
    const errors = {}

    if (!name) {
      errors.name = "Name is required";
    }
    if (name.length < 5) {
      errors.name = "Name must be at least 5 characters";
    }

    if (name.length > 50) {
      errors.name = "Name must be less than 50 characters"
    }

    if (!description) {
      errors.description = "Description is required";
    }
    if (description.length > 400) {
      errors.description = `Description must be less than 400 characters. You currently have ${description.length}.`
    }

    if (features.length < 2) {
      errors.features = "All features are required";
    }



    // if price is NAN, then throw an error on the web page
    if (!price) {
      errors.price = "Price is required";
    } else if (isNaN(price)) {
      errors.price = "Price is invalid";
    }

    // if (images.length < 2) {
    //   errors.images = "At least 3 images are required";
    // }

    // for (let i = 0; i < images.length; i++) {
    //   let image = images[i]
    //   if (image) {
    //     const fileExtension = image.split('.').pop().toLowerCase();
    //     const checkLast = ['jpg', 'png', 'jpeg'];
    //     if (!checkLast.includes(fileExtension)) {
    //       errors.images = "Image URL needs to end in .png, .jpg or .jpeg";
    //     }
    //   }
    // }


    if (!image1 || !image2 || !image3) {
      errors.image1 = "Please provide at least 3 images";
    }




    // if (image) {
    //   //split the image with the url. then check to see if the image has the checks needed.
    //   const fileExtension = image.split('.').pop().toLowerCase();
    //   const checkLast = ['jpg', 'png', 'jpeg'];
    //   if (!checkLast.includes(fileExtension)) {
    //     errors.image = "Image URL needs to end in .png, .jpg or .jpeg";
    //   }
    // }


    if (isNaN(inventory)) {
      errors.inventory = "Inventory needs to be a number";
    }
    if (!inventory) {
      errors.inventory = "Inventory is required"
    }

    return errors

  }


  const onSubmit = async (e) => {
    e.preventDefault()

    const errors = validate()
    const errorContent = Object.values(errors)

    if (errorContent.length) return setErrors(errors)




    const formFileData = new FormData()
    formFileData.append("name", name)
    formFileData.append("description", description)
    // formFileData.append("images", images)
    formFileData.append('image1', image1)
    formFileData.append('image2', image2)
    formFileData.append('image3', image3)
    formFileData.append('price', parseFloat(price))
    formFileData.append('features', features)
    formFileData.append('inventory', inventory)
    if (image4) {
      formFileData.append('image4', image4)
    }
    if (image5) {
      formFileData.append('image5', image5)
    }



    const formData = {
      name: name,
      description: description,
      images: combinedImages,
      price: parseFloat(price),
      features: combinedFeatures,
      inventory: inventory
    }

    // dispatch(createProductThunk(formData, brandName))
    dispatch(createProductThunk(formFileData, brandName))
    history.push(`/store-dashboard/${brandName}`)

  }




  // checks to make sure that page is given some time to load or clear any previous data.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);


  if (isLoading) {
    return <LoadingButton />
  }


  return (
    <div className='product-list-dashboard-container'>
      <SideBarDashboard />
      <form
        className='product-list-main-container'
        onSubmit={onSubmit}
        encType='multipart/form-data'
      >
        <div className='product-list-top-bar'>
          <div className='product-list-products-text'>Add Product</div>
          <button className='product-list-add-product'>Save</button>
        </div>

        <div className='add-product-left-right-container'>
          <div className='add-product-left-container-main' style={{ flex: '1 1 40%' }}>

            <div className='add-product-left-container-individual title-description'>
              <div className='add-product-title-container'>
                <div className='add-product-title'>Title</div>
              </div>
              <div className='add-product-input-container'>
                <input
                  value={name}
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='add-product-page-title-input'
                >
                </input>
              </div>

              {errors.name && <p className="error">{errors.name}</p>}


              <label className='add-product-page-description-text'>
                Description
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className='add-product-page-description'
                />
              </label>
              {errors.description && <p className="error">{errors.description}</p>}
            </div>


            <div className='add-product-left-container-individual media'>
              <div className='add-product-left-container-images'>
                <div className='add-product-image-media-text'>Media</div>
                {/* <label>
                  Product Cover Photo
                  <input
                    value={images[0]}
                    type='text'
                    onChange={(e) => updateImage(e.target.value, 0)}
                    required
                    className='add-product-page-image'
                  />
                </label>
                {errors.images && <p className="error">{errors.images}</p>}
                <label>
                  Photo #2
                  <input
                    value={images[1]}
                    type='text'
                    onChange={(e) => updateImage(e.target.value, 1)}
                    required
                    className='add-product-page-image'
                  />
                </label>
                <label>
                  Photo #3
                  <input
                    value={images[2]}
                    type='text'
                    onChange={(e) => updateImage(e.target.value, 2)}
                    required
                    className='add-product-page-image'
                  />
                </label>
                <label>
                  Photo #4
                  <input
                    value={images[3]}
                    type='text'
                    onChange={(e) => updateImage(e.target.value, 3)}
                    className='add-product-page-image'

                  />
                </label>
                <label>
                  Photo #5
                  <input
                    value={images[4]}
                    type='text'
                    onChange={(e) => updateImage(e.target.value, 4)}
                    className='add-product-page-image'

                  />
                </label> */}


                <div className="add-product-image-preview-container">
                  <div className='add-product-image-preview-left'>
                    <label>

                      <div
                        className={`add-product-image-preview ${image1 ? "" : "placeholder"}`}
                      >
                        {image1 ? (
                          <img src={URL.createObjectURL(image1)} alt="Product" />
                        ) : (
                          <div className="placeholder-text">Add Cover Image</div>
                        )}
                      </div>
                      <input
                        type="file"
                        id="image1"
                        accept="image/*"
                        onChange={(e) => setImage1(e.target.files[0])}
                        // required
                        className="add-product-page-image"
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>

                  <div className='add-product-image-preview-right'>
                    <div className='add-product-image-preview-right-top'>
                      <label>
                        <div
                          className={`add-product-image-preview-right ${image2 ? "" : "placeholder"}`}
                        >
                          {image2 ? (
                            <img src={URL.createObjectURL(image2)} alt="Product" />
                          ) : (
                            <div className="placeholder-text">Add Image 2</div>
                          )}
                        </div>
                        <input
                          type="file"
                          id="image2"
                          accept="image/*"
                          onChange={(e) => setImage2(e.target.files[0])}
                          // required
                          className="add-product-page-image"
                          style={{ display: "none" }}
                        />
                      </label>

                      <label>
                        <div
                          className={`add-product-image-preview-right ${image3 ? "" : "placeholder"}`}
                        >
                          {image3 ? (
                            <img src={URL.createObjectURL(image3)} alt="Product" />
                          ) : (
                            <div className="placeholder-text">Add Image 3</div>
                          )}
                        </div>
                        <input
                          type="file"
                          id="image3"
                          accept="image/*"
                          onChange={(e) => setImage3(e.target.files[0])}
                          // required
                          className="add-product-page-image"
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>



                    {image1 && image2 && image3 && (
                      <div className='add-product-image-preview-right-top'>
                        <label>
                          <div
                            className={`add-product-image-preview-right ${image4 ? "" : "placeholder"}`}
                          >
                            {image4 ? (
                              <img src={URL.createObjectURL(image4)} alt="Product" />
                            ) : (
                              <div className="placeholder-text">Add Image 4</div>
                            )}
                          </div>
                          <input
                            type="file"
                            id="image4"
                            accept="image/*"
                            onChange={(e) => setImage4(e.target.files[0])}
                            className="add-product-page-image"
                            style={{ display: "none" }}
                          />
                        </label>

                        {image1 && image2 && image3 && image4 && (
                          <label>
                            <div
                              className={`add-product-image-preview-right ${image5 ? "" : "placeholder"}`}
                            >
                              {image5 ? (
                                <img src={URL.createObjectURL(image5)} alt="Product" />
                              ) : (
                                <div className="placeholder-text">Add Image 5</div>
                              )}
                            </div>
                            <input
                              type="file"
                              id="image5"
                              accept="image/*"
                              onChange={(e) => setImage5(e.target.files[0])}
                              className="add-product-page-image"
                              style={{ display: "none" }}
                            />
                          </label>
                        )}

                        {/* {errors.image1 && <p className="error">{errors.image1}</p>} */}

                      </div>

                    )}

                  </div>

                </div>
                {errors.image1 && <p className="error">{errors.image1}</p>}




              </div>
            </div>

            <div className='add-product-left-container-individual media pricing'>
              <label className='pricing'>
                Pricing
                <input
                  value={price}
                  type='text'
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className='add-product-page-price'
                />
              </label>
              {errors.price && <p className="error">{errors.price}</p>}
            </div>

            <div className="add-product-left-container-individual" >
              <div className='add-product-page-feature-container'>
                {features.map((feature, index) => (
                  <div key={index}>
                    <label>
                      Feature {index + 1}
                      <input
                        value={feature}
                        type="text"
                        onChange={(e) => updateFeature(e.target.value, index)}
                        required
                        className='add-product-page-feature'
                      />
                    </label>
                    {errors.features && <p className="error">{errors.features}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className='add-product-left-container-individual media'>
              <label>
                Inventory
                <input
                  value={inventory}
                  type='number'
                  onChange={(e) => setInventory(e.target.value)}
                  required
                  className='add-product-page-price'
                />
              </label>
              {errors.inventory && <p className="error">{errors.inventory}</p>}
            </div>



          </div>









          <div className='add-product-right-container' style={{ flex: 1 }}>
            <div className='add-product-right-container-individual status'>Status</div>
            <div className='add-product-right-container-individual title-description publishing'>Publishing</div>
          </div>





        </div>

      </form>
    </div>
  );
};

export default AddProductPage;
