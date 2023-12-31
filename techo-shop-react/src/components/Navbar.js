import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="navbar-bg bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-violet-50 h-20 flex justify-center items-center">
      <div className="Navbar container mx-auto flex items-center justify-between">
        <div className="left">
          <span className="text-xl font-semibold">
            Techo <span className="text-white-500">Shop</span>
          </span>
        </div>
        <div className="right flex items-center gap-5">
          <Link to="/" className="nav-link ">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-counter absolute h-5 w-5 bg-orange-600 -top-3 -right-3 rounded-full flex items-center justify-center font-medium text-xs">
                {cartItems.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
