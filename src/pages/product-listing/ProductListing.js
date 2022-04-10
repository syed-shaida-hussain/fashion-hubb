import "./ProductListing.css"
import productImg from "../../assets/images/product-image.svg"
import {useEffect,useReducer} from "react"
import axios from "axios"
import { useProduct } from "../../contexts/product-context/product-context"
import { Link } from "react-router-dom";
import {filterReducer} from "../../reducers/filter-reducer/filter-reducer"

const ProductListing = ()=> {

    const {setProductList , setCartItems , cartItems , productList ,cartCount, setCartCount} = useProduct()

    function addToCartHandler(product){
      setCartItems([...cartItems , product ])
      setCartCount(prev => prev + 1)
    }
 
    useEffect(() => {
      axios.get("/api/products").then((response) => {
        setProductList(response.data.products);
      });
    }, []);
    
      const [
        { categoryBy, showCategoryMen,showCategoryWomen,sortBy, rateBy },
        dispatch
      ] = useReducer(filterReducer, {
        showCategoryMen: false,
        showCategoryWomen:false,
        categoryBy :null,
        sortBy: null,
        rateBy: null
      });
    
      function getSortedData(sortedList, sortBy) {
        if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
          return sortedList.sort((a, b) => b["discountedPrice"] - a["discountedPrice"]);
        }
        if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
          return sortedList.sort((a, b) => a["discountedPrice"] - b["discountedPrice"]);
        }
        return sortedList;
      }
    
      function getRatingData(ratingFilteredList, rateBy) {
        if (rateBy && rateBy === "4_STARS_AND_ABOVE") {
            return ratingFilteredList.filter((item) =>item.rating >= 4)
        } 
        if (rateBy && rateBy === "3_STARS_AND_ABOVE") {
            return ratingFilteredList.filter((item) => item.rating >= 3);
        }
        if (rateBy && rateBy === "2_STARS_AND_ABOVE") {
            return ratingFilteredList.filter((item) => item.rating >= 2);
        }
        if (rateBy && rateBy === "1_STARS_AND_ABOVE") {
            return ratingFilteredList.filter((item) => item.rating >= 1);
        }
        return ratingFilteredList;
      }
    
      function getFilteredData(
        sortedList,
        ratingFilteredList , {showCategoryMen , showCategoryWomen}
      ) {
        return ratingData
        .filter(({ categoryMen }) =>
          showCategoryMen ? categoryMen : true
        )
        .filter(({ categoryWomen }) => showCategoryWomen ? categoryWomen : true);
     
      }
    
      const sortedData = getSortedData(productList, sortBy);
      const ratingData = getRatingData(productList, rateBy);
      const filteredData = getFilteredData(sortedData, ratingData , {showCategoryMen , showCategoryWomen} );
   
    return <div>
        <header className="header-nav flex">
        <ul className="navigation navbar-left flex">
            <li><a href="/index.html" className="nav-pill ">Home</a></li>
            <li><a className="nav-pill active-link"> <Link to="/products" className="nav-pill active-link">products</Link></a></li>
        </ul>

        <input className="search-bar" type="text" placeholder="Search" />

        <ul className="navigation navbar-right flex">
            <li>
                <div className="badge-on-cart wishlist-icon">
                    <a href="/Wishlist/wishlist.html" className="nav-pill"><i className="material-icons"> favorite_border</i></a>
                    <p className="icon-badge aligned-icon">5</p>
                </div>   
            </li>

            <li>
                <a href="/Authentication/login.html" className="nav-pill account-icon"><i className="material-icons"> account_circle</i></a>
            </li>

            <li>
                <div className="badge-on-cart cart-icon">
                    <a className="nav-pill"> <Link to="/cart"><i className="material-icons"> add_shopping_cart</i></Link> </a>
                    <p className="icon-badge aligned-icon">{cartCount}</p>
                </div>
                
            </li>

        </ul>
    </header>
    
    <section className="page-container flex-page">
        <aside className="filters">
            <div className="filter flex ">
                <p className="filter-heading margin-left margin-bottom margin-top">Filters</p>
                <a className="clear-link margin-right margin-bottom margin-top" href="#">Clear</a>
            </div>
            <div className="filter">
                <p className="filter-heading-text margin-left">Category</p>
                <div className="flex">
                    <input className="margin-left margin-top margin-bottom" id="category-checkbox1" name = "category"
                        type="checkbox" checked={showCategoryMen}
                        onChange={() => dispatch({ type: "CATEGORY_MEN" })}/>
                    <label className="input-label1 margin-bottom margin-top" for="category-checkbox1">
                        Men Clothing
                    </label>
                </div>
                <div className="flex">
                    <input className="margin-left margin-bottom" id="category-checkbox2" name = "category"
                        type="checkbox" checked={showCategoryWomen}
                        onChange={() => dispatch({ type: "CATEGORY_WOMEN" })}  />
                    <label className="input-label2 margin-right margin-bottom" for="category-checkbox2">Women
                        clothing</label>
                </div>
            </div>

            <p className="filter-heading-text margin-left">Rating</p>
            <div className="rating margin-top">
                <input id="rating1" className="margin-left" name="ratings" type="radio" onChange={() =>
              dispatch({ type: "RATE", payload: "4_STARS_AND_ABOVE" })
            }
            checked={rateBy && rateBy === "4_STARS_AND_ABOVE"} />
                <label for="rating1">4 stars and above</label>
            </div>
            <div className="rating">
                <input id="rating2" className="margin-left" name="ratings" type="radio" onChange={() =>
              dispatch({ type: "RATE", payload: "3_STARS_AND_ABOVE" })
            }
            checked={rateBy && rateBy === "3_STARS_AND_ABOVE"}  />
                <label for="rating2">3 stars and above</label>
            </div>
            <div className="rating">
                <input id="rating3" className="margin-left" name="ratings" type="radio" onChange={() =>
              dispatch({ type: "RATE", payload: "2_STARS_AND_ABOVE" })
            }
            checked={rateBy && rateBy === "2_STARS_AND_ABOVE"}  />
                <label for="rating3">2 stars and above</label>
            </div>
            <div className="rating">
                <input id="rating4" className="margin-left" name="ratings" type="radio" onChange={() =>
              dispatch({ type: "RATE", payload: "1_STARS_AND_ABOVE" })
            }
            checked={rateBy && rateBy === "1_STARS_AND_ABOVE"} />
                <label for="rating4">1 stars and above</label>
            </div>
            <p className="filter-heading-text margin-left">Sort by</p>
            <div className="rating">
                <input id="price-filter1" className="margin-left" name="sort" type="radio" onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}/>
                <label for="price-filter1">Price-Low to High</label>
            </div>
            <div className="rating">
                <input id="price-filter2" className="margin-left" name="sort" type="radio"  onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}/>
                <label for="price-filter2">Price-High to Low</label>
            </div>
        </aside>
        <main className="products">

            {filteredData.map(product => {
                 return <div className="wishlist-product-container">
                 <img className="product-image" src= {productImg} alt="product-image" />
 
                 <i className="material-icons like-icon black"> favorite_border</i>
 
                 <div className="wishlist-product-info">
                     <p className="wishlist-info-text margin-top-bottom ">
                         {product.name}
                     </p>
                     <p className="price-text margin-top-bottom "> Rs <span class = "line-through"> {product.originalPrice}</span> {product.discountedPrice}  </p> 
                     <p className = "margin-top-bottom">Rating : {product.rating}</p>
                 </div>
                 <button onClick={ () =>addToCartHandler(product) } className="add-to-cart-btn primary-bg">Add to cart</button>
             </div>})}
        </main>
    </section>
    </div>
}

export {ProductListing}