import { Link } from "react-router-dom";
import {useCart} from "../contexts/cart-context/cart-context"
import {useWishlist} from "../contexts/wishlist-context/wishlist-context"

const Header = () => {
    const {cartCount} = useCart()
    const {wishCount} = useWishlist()
    return  <header className="header-nav flex">
    <ul className="navigation navbar-left flex">
        <li><a href="/index.html" className="nav-pill ">Home</a></li>
        <li><a className="nav-pill active-link"> <Link to="/products" className="nav-pill active-link">Products</Link></a></li>
    </ul>

    <input className="search-bar" type="text" placeholder="Search" />

    <ul className="navigation navbar-right flex">
        <li>
            <div className="badge-on-cart wishlist-icon">
                <a className="nav-pill"> <Link to= "/wishlist"><i className="material-icons"> favorite_border</i></Link> </a>
                <p className="icon-badge aligned-icon">{wishCount}</p>
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
}

export {Header}