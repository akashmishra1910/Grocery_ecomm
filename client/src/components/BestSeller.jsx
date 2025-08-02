import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const BestSeller = () => {
    const {products}=useContext(AppContext)
  return ( <div className="px-6 md:px-16 lg:px-24 xl:px-20 py-4 border-b border-gray-300 bg-indigo-200 relative transition-all mt-16 bg-blue-200">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">{
        products.filter((product)=>product.inStock)
        .slice(0, 5)
        .map((product, index) => 
            (
             <ProductCard key={index} product={product}/>
        ))}
     </div>
      </div>
    );
}

export default BestSeller;
