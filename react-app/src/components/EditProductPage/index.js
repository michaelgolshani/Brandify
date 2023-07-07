import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBrandThunk } from '../../store/brands';
import { getAllProductsThunk, getSingleProductThunk } from '../../store/products';
import './EditProductPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SideBarDashboard from '../SideBarDashboard.js';
import { createProductThunk, updateProductThunk, deleteProductThunk } from '../../store/products';
import LoadingButton from '../LoadingButton';

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
  const [image1, setImage1] = useState(singleProduct.image1)
  const [image2, setImage2] = useState(singleProduct.image2)
  const [image3, setImage3] = useState(singleProduct.image3)
  const [image4, setImage4] = useState(singleProduct.image4)
  const [image5, setImage5] = useState(singleProduct.image5)


  const [image1Preview, setImage1Preview] = useState(singleProduct.image1 ? singleProduct.image1 : null);
  const [image2Preview, setImage2Preview] = useState(singleProduct.image2 ? singleProduct.image2 : null);
  const [image3Preview, setImage3Preview] = useState(singleProduct.image3 ? singleProduct.image3 : null);
  const [image4Preview, setImage4Preview] = useState(singleProduct.image4 ? singleProduct.image4 : null);
  const [image5Preview, setImage5Preview] = useState(singleProduct.image5 ? singleProduct.image5 : null);



  const [optionalImage1, setOptionalImage1] = useState('');
  const [optionalImage2, setOptionalImage2] = useState('');
  const [features, setFeatures] = useState(singleProduct.features);
  const [isLoadingFeatures, setIsLoadingFeatures] = useState(true);
  const [inventory, setInventory] = useState(singleProduct.inventory)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const isImageSelected = (image) => {
    return image instanceof File;
  };

  console.log("IMAGES", images)


  //checks if a new file is selected for an image, and changes the state accordingly
  const updateImage1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage1(file);
      setImage1Preview(URL.createObjectURL(file));
    }
  };

  const updateImage2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage2(file);
      setImage2Preview(URL.createObjectURL(file));
    }
  };

  const updateImage3 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage3(file);
      setImage3Preview(URL.createObjectURL(file));
    }
  };

  const updateImage4 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage4(file);
      setImage4Preview(URL.createObjectURL(file));
    }
  };

  const updateImage5 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage5(file);
      setImage5Preview(URL.createObjectURL(file));
    }
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
  console.log("PRODUCTS", products)
  const currentProductTest = products.find(product => productId == product.id);
  console.log("CURRENT PRODUCT", currentProductTest)

  useEffect(() => {
    // dispatch(getSingleBrandThunk(brandName))
    dispatch(getSingleProductThunk(productId))
    dispatch(getAllProductsThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
  if (singleProduct && singleProduct.features) {
    setFeatures(singleProduct.features);
    setIsLoadingFeatures(false);
  }
}, [singleProduct]);

  useEffect(() => {
    if (singleProduct.name) {
      setName(singleProduct.name)
      setDescription(singleProduct.description)
      setPrice(singleProduct.price)
      setInventory(singleProduct.inventory)
      setImages(singleProduct.images)
      const image1Preview = singleProduct.image1 || null;
      const image2Preview = singleProduct.image2 || null;
      const image3Preview = singleProduct.image3 || null;
      const image4Preview = singleProduct.image4 || null;
      const image5Preview = singleProduct.image5 || null;

      setImage1Preview(image1Preview);
      setImage2Preview(image2Preview);
      setImage3Preview(image3Preview);
      setImage4Preview(image4Preview);
      setImage5Preview(image5Preview);

      setImage1(image1);
      setImage2(image2);
      setImage3(image3);
      setImage4(image4);
      setImage5(image5);
      setFeatures(singleProduct.features)

    }
  }, [singleProduct, brandName])

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
    } else if (price < 0 || price > 100000) {
      errors.price = "Price can't be a negative number or bigger than 100,000"
    }

    if (images.length < 2) {
      errors.images = "At least 3 images are required";
    }

    for (let i = 0; i < images.length; i++) {
      let image = images[i]
      if (image) {
        const fileExtension = image.split('.').pop().toLowerCase();
        const checkLast = ['jpg', 'png', 'jpeg'];
        if (!checkLast.includes(fileExtension)) {
          errors.images = "Image URL needs to end in .png, .jpg or .jpeg";
        }
      }
    }

    // if (!image1) {
    //   errors.image1 = "Please provide an image";
    // }

    console.log("IMAGE 1 CHECK", image1)

    console.log("CHECKING IMAGES ARR", images)
    // if (image) {
    //   //split the image with the url. then check to see if the image has the checks needed.
    //   const fileExtension = image.split('.').pop().toLowerCase();
    //   const checkLast = ['jpg', 'png', 'jpeg'];
    //   if (!checkLast.includes(fileExtension)) {
    //     errors.image = "Image URL needs to end in .png, .jpg or .jpeg";
    //   }
    // }

    console.log("ERRORS", errors)
    if (isNaN(inventory)) {
      errors.inventory = "Inventory needs to be a number";
    }
    if (!inventory) {
      errors.inventory = "Inventory is required"
    }

    return errors

  }

  const onDelete = async () => {
    await dispatch(deleteProductThunk(productId))
    history.push(`/store-dashboard/${brandName}`)

  }

  const onSubmit = async (e) => {
    e.preventDefault()

    console.log('Before onSubmit');

    const errors = validate()
    const errorContent = Object.values(errors)
    if (errorContent.length) return setErrors(errors)

    const formFileData = new FormData()
    formFileData.append("name", name)
    formFileData.append("description", description)
    formFileData.append("images", images)
    // formFileData.append('image1', image1)
    formFileData.append('price', price)
    formFileData.append('features', features)
    formFileData.append('inventory', inventory)

    if (image1 && isImageSelected(image1)) {
      formFileData.append("image1", image1);
    }

    if (image2 && isImageSelected(image2)) {
      formFileData.append("image2", image2);
    }

    if (image3 && isImageSelected(image3)) {
      formFileData.append("image3", image3);
    }

    if (image4 && isImageSelected(image4)) {
      formFileData.append("image4", image4);
    }

    if (image5 && isImageSelected(image5)) {
      formFileData.append("image5", image5);
    }


    console.log("FORM FILE DATA", formFileData)
    console.log("WE ARE RIGHT BEFORE UPDATE SUBMISSON ON FRONTEND- FORM DATA")
    const formData = {
      name: name,
      description: description,
      images: combinedImages,
      price: parseFloat(price),
      features: combinedFeatures,
      inventory: inventory,

    }



    await dispatch(updateProductThunk(formFileData, brandName, productId)).then(() => history.push(`/store-dashboard/${brandName}`))
    console.log("FORM DATA", formData)
  }

  console.log("PRODUCTS OF BRAND", products)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading || isLoadingFeatures) {
  return <LoadingButton />;
}

  return (
    <div className='product-list-dashboard-container'>
      <SideBarDashboard />
      <form className='product-list-main-container' onSubmit={onSubmit} encType='multipart/form-data'>
        <div className='product-list-top-bar'>
          <div className='product-list-products-text'>Update Product</div>
          <button className='product-list-delete-product' onClick={onDelete}>Delete</button>
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
                        {image1Preview && (
                          <img src={image1Preview} alt="Product" />
                        )}
                        {!image1Preview && (
                          <div className="placeholder-text">Add Cover Image</div>
                        )}
                      </div>
                      <input
                        type="file"
                        id="image1"
                        accept="image/*"
                        // onChange={(e) => setImage1(e.target.files[0])}
                        onChange={(e) => {
                          setImage1(e.target.files[0]);
                          setImage1Preview(URL.createObjectURL(e.target.files[0]));
                        }}
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
                          {image2Preview && (
                            <img src={image2Preview} alt="Product" />
                          )}
                          {!image2Preview && (
                            <div className="placeholder-text">Add Cover Image</div>
                          )}
                        </div>
                        <input
                          type="file"
                          id="image2"
                          accept="image/*"
                          onChange={(e) => {
                            setImage2(e.target.files[0]);
                            setImage2Preview(URL.createObjectURL(e.target.files[0]));
                          }}
                          // required
                          className="add-product-page-image"
                          style={{ display: "none" }}
                        />
                      </label>

                      <label>
                        <div
                          className={`add-product-image-preview-right ${image3 ? "" : "placeholder"}`}
                        >
                          {image3Preview && (
                            <img src={image3Preview} alt="Product" />
                          )}
                          {!image3Preview && (
                            <div className="placeholder-text">Add Cover Image</div>
                          )}
                        </div>
                        <input
                          type="file"
                          id="image3"
                          accept="image/*"
                          onChange={(e) => {
                            setImage3(e.target.files[0]);
                            setImage3Preview(URL.createObjectURL(e.target.files[0]));
                          }}
                          // required
                          className="add-product-page-image"
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>



                    {image1Preview && image2Preview && image3Preview && (
                      <div className='add-product-image-preview-right-top'>
                        <label>
                          <div
                            className={`add-product-image-preview-right ${image4 ? "" : "placeholder"}`}
                          >
                            {image4Preview && (
                              <img src={image4Preview} alt="Product" />
                            )}
                            {!image4Preview && (
                              <div className="placeholder-text">Add Cover Image</div>
                            )}
                          </div>
                          <input
                            type="file"
                            id="image4"
                            accept="image/*"
                            onChange={(e) => {
                              setImage4(e.target.files[0]);
                              setImage4Preview(URL.createObjectURL(e.target.files[0]));
                            }}
                            className="add-product-page-image"
                            style={{ display: "none" }}
                          />
                        </label>

                        {image1Preview && image2Preview && image3Preview && image4Preview && (
                          <label>
                            <div
                              className={`add-product-image-preview-right ${image5 ? "" : "placeholder"}`}
                            >
                              {image5Preview && (
                                <img src={image5Preview} alt="Product" />
                              )}
                              {!image5Preview && (
                                <div className="placeholder-text">Add Cover Image</div>
                              )}
                            </div>
                            <input
                              type="file"
                              id="image5"
                              accept="image/*"
                              onChange={(e) => {
                                setImage5(e.target.files[0]);
                                setImage5Preview(URL.createObjectURL(e.target.files[0]));
                              }}
                              className="add-product-page-image"
                              style={{ display: "none" }}
                            />
                          </label>
                        )}

                      </div>

                    )}





                  </div>

                </div>
                {errors.image1 && <p className="error">{errors.image1}</p>}



              </div>
            </div>

            <div className='add-product-left-container-individual media'>
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
                    <label className='add-product-page-feature-container-text'>
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
            <div className='add-product-right-container-individual  title-description publishing'>Publishing</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
