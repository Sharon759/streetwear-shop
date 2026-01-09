import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { CgShoppingCart } from 'react-icons/cg';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useStateContext } from '../context/StateContext';

const Navbar = ({ Searchproducts }) => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Brand Name */}
      <Link href="/" className="brand-name">
        AURORA
      </Link>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><Link href="/female">Women</Link></li>
        <li><Link href="/male">Men</Link></li>
        <li><Link href="/kids">Kids</Link></li>
        <li><Link href="/products">All Products</Link></li>
      </ul>

      {/* Search */}
      <div className="search-bar">
        <CiSearch />
        <input
          type="text"
          placeholder="Search clothing"
          onChange={Searchproducts}
        />
      </div>

      {/* Cart */}
      {showCart ? (
        <Link href="/cart">
          <button className="cart" onClick={() => setShowCart(false)}>
            <CgShoppingCart size={22} />
            <span className="cart-item-qty">{totalQty}</span>
          </button>
        </Link>
      ) : (
        <button className="cart" onClick={() => setShowCart(true)}>
          <CgShoppingCart size={22} />
          <span className="cart-item-qty">{totalQty}</span>
        </button>
      )}

      {/* Mobile Menu */}
      <div className="navbar-smallscreen">
        <RiMenu3Line fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-smallscreen_overlay">
            <div className="mobile-header">
              <span className="brand-name">AURORA</span>
              <RiCloseLine
                fontSize={27}
                className="close_icon"
                onClick={() => setToggleMenu(false)}
              />
            </div>

            <ul className="navbar-smallscreen_links">
              <Link href="/cart">
                <button
                  className="cart-small-screen"
                  onClick={() => setShowCart(false)}
                >
                  <CgShoppingCart size={22} />
                  <span className="cart-item-qty">{totalQty}</span>
                </button>
              </Link>

              <li><Link href="/female">Women</Link></li>
              <li><Link href="/male">Men</Link></li>
              <li><Link href="/kids">Kids</Link></li>
              <li><Link href="/products">All Products</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
