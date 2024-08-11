import React from 'react';
import Data from "../products.json";

const ShopCategory = ({filterItem,setItem,menuItem,setProducts,selectedcategory}) => {
  return (
    <>
        <div className="widget-header">
            <h5 className="ms-2">All Categories</h5>
        </div>
        <div>
            <button className={`m-2 ${selectedcategory === "All" ? "bg-warning" : "" }`}
            onClick={() => setProducts(Data)}>    
                All
            </button>
            {
                menuItem.map((val,id) => {
                    return(
                       <button 
                       className={`m-2 ${selectedcategory === val ? "bg-warning" : "" }`}
                       key={id} onClick={() => filterItem(val)}>
                            {val}
                       </button> 
                    )
                })
            }
        </div>
    </>
  )
}

export default ShopCategory;
