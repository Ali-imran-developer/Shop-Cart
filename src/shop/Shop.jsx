import React, { useState } from 'react';
import PageHeader from '../Components/PageHeader';
import Data from "../products.json";
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';
const showResults = "Showing 01 - 12 of 139 Results";
const Shop = () => {
    // useStates
    const [ gridList , setGridList] = useState(true);
    const [ products , setProducts ] = useState(Data);
    // paggniation components
    const [ currentPage , setCurrentPage] = useState(1);
    const productPerPage = 12;
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct);
    // func to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    // filter product based on category
    const [ selectedcategory , setSelectedCategory] = useState("All");
    const menuItem = [...new Set(Data.map((val) => val.category))];
    // functionality
    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        })
        setSelectedCategory(curcat);
        setProducts(newItem);
    }

  return (
    <div>
        <PageHeader title="Our Shop Page" curPage="Shop"/>
        {/* shop main content */}
        <div className='shop-page padding-tb'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            {/* layout and title here */}
                            <div className="shop-tile d-flex flex-wrap justify-content-between">
                                <p>{showResults}</p>
                                <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                    <a className='grid' onClick={() => setGridList(!gridList)}>
                                        <i className='icofont-ghost'></i>
                                    </a>
                                    <a className='list' onClick={() => setGridList(!gridList)}>
                                        <i className='icofont-listine-dots' style={{padding:"0.5rem"}}></i>
                                    </a>
                                </div>
                            </div>
                            {/* cards */}
                            <div className=''>
                                <ProductCards gridList={gridList} products={currentProducts} />
                            </div>
                            <Pagination 
                            productPerPage={productPerPage}
                            totalProducts = {products.length}
                            paginate={paginate}
                            activePage={currentPage}
                            />
                        </article>
                    </div>
                    <div className="col-lg-4 col-12">
                        <aside>
                            <Search products={products} gridList={gridList} />
                            <ShopCategory
                            filterItem={filterItem} 
                            setItem={setProducts}
                            menuItem={menuItem}
                            setProducts={setProducts}
                            selectedcategory={selectedcategory}
                            />
                            <PopularPost/>
                            <Tags/>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Shop;
