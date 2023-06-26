import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
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

    const closeMenu = (e) => {
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
        <i className="fa-solid fa-bars nav-bar-icon-dropdown"></i>
      </div>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="profile-dropdown-logo profile-contents">Welcome, {user.username}</div>

            {/* <div className="profile-dropdown-logo profile-contents">{user.email}</div> */}

            <div className="profile-dropdown-logo profile-contents" onClick={()=> history.push('/explore/brands')}>
            <i class="fa-solid fa-magnifying-glass profile-dropdown-icon"></i>
              <div>Explore Brands</div>
            </div>

            <div className="profile-dropdown-logo profile-contents" onClick={handleMyBrands}>
              <i className="fa-sharp fa-solid fa-store profile-dropdown-icon"></i>
              <div>My Brands</div>
            </div>

            <div className="profile-dropdown-logo profile-contents">
              <i class="fa-solid fa-arrow-right profile-dropdown-icon"></i>
              <div onClick={handleLogout}>Log Out</div>
            </div>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
