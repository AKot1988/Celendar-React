import { FC, useState, useEffect } from "react";
// import { googleSignIn, googleSignOut } from '../../firebase/auth';
import { CustomNavLinkProps } from "../CustomNavLink/CustomNavLink.tsx";
import { CustomNavLink } from "../index.tsx";
import classes from "./Header.module.scss";
import { auth } from "../../firebase/firebase.tsx";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../firebase/API.tsx";

export type HeaderProps = {
  logo: string;
  navMenu: CustomNavLinkProps[];
  onClick?: () => void;
  avatarLink?: string;
};

const Header: FC<HeaderProps> = ({ logo, navMenu, onClick = () => {}, avatarLink }) => {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src={logo} alt="logo" className={classes.headerLogo} />
        <div className={classes.headerNav}>
          <nav className={classes.headerNavMenu}>
            {navMenu.map((item, index) => (
              <CustomNavLink
                key={index}
                title={item.title}
                path={item.path}
                className={classes.headerNavItem}
              />
            ))}
          </nav>
          {avatarLink? (<img src={avatarLink as string} alt="user" className={classes.headerNavUserLogo} onClick={() => navigate("/profile")} />)
          : auth.currentUser && ( <img src={user?.photoURL as string} alt="user" className={classes.headerNavUserLogo} onClick={() => navigate("/profile")} />)}
          {auth.currentUser ? (
            <CustomNavLink
              title={"LogOut"}
              path="/"
              className={classes.headerNavButton}
              onClick={onClick}
            />
          ) : (
            <CustomNavLink
              title={"Login"}
              path="/login"
              className={classes.headerNavButton}
              onClick={onClick}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
