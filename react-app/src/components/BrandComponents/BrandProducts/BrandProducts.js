import React from 'react'
import './BrandProducts.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const BrandProducts = ({ brandName, currentBrand, theme }) => {
  const history = useHistory()
  const currentBrandProducts = currentBrand.products.slice(0, 2);
  ("CURRENT BRAND PRPDUCTS TESTER", currentBrandProducts)

  return (
    <div className={`brand-products-container ${theme}`}>
      {currentBrandProducts.map((product, index) => (
        <div
          className={`brand-products-individual-product-container ${index % 2 === 0 ? 'even' : 'odd'
            }`}
          key={index}
        >
          <div className='text-container'>
            <div className='product-name'>{product.name}</div>
          </div>
          <div className='image-container'>
            <img className='product' onClick={() => history.push(`/store/${brandName}/${product.id}`)} src={product.images[index]} alt={product.name} />
          </div>
        </div>
      ))}
    </div>
  )
}
