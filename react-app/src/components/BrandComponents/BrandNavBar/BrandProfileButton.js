import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/session";

import OpenModalButton from "../../OpenModalButton";
import LoginFormModal from "../../LoginFormModal";
import SignupFormModal from "../../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const BrandProfileButton = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenuHandler = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
    closeMenu()
  };

  const handleMyBrands = (e) => {
    history.push('/store-login')
    closeMenu()
  }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);




  return (
    <>
      <div onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={ulClassName} ref={ulRef}>



            {/* <div className="profile-dropdown-logo profile-contents">{user.email}</div> */}

            <div className="profile-dropdown-logo profile-contents" onClick={() => history.push('/explore/brands')}>
            <i class="fa-solid fa-magnifying-glass profile-dropdown-icon font-size"></i>
              <div className="font-size">Explore Brands</div>
            </div>

            <div className="profile-dropdown-logo profile-contents" onClick={() => history.push('/')}>
              <i className="fa-sharp fa-solid fa-store profile-dropdown-icon font-size"></i>
              <div>Home</div>
            </div>

            {/* <div className="profile-dropdown-logo profile-contents">
              <i class="fa-solid fa-arrow-right profile-dropdown-icon"></i>
              <div onClick={handleLogout}>Log Out</div>
            </div> */}


      </div>
    </>
  );
}
