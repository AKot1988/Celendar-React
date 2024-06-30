import { FC, useState, useEffect } from 'react';
// import { googleSignIn, googleSignOut } from '../../firebase/auth';
import { CustomNavLinkProps } from '../CustomNavLink/CustomNavLink.tsx'
import { CustomNavLink } from '../index.tsx';
import classes from './Header.module.scss';
import { auth } from '../../firebase/auth';
import { onAuthStateChanged } from "firebase/auth"

export type HeaderProps = {
  logo: string
  navMenu: CustomNavLinkProps[],
  onClick?: ()=>void
}

const Header: FC<HeaderProps> = ({logo, navMenu, onClick=()=>{}}) => {
  const [user, setUser] = useState(auth.currentUser)
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // })

  useEffect(() => {
    setUser(auth.currentUser)
},[auth.currentUser])
  return (
    <div className={classes.container}>
        <header className={classes.header}>
          <img src={logo} alt="logo" className={classes.headerLogo} />
          <div className={classes.headerNav}>
            <nav className={classes.headerNavMenu}>
              {navMenu.map((item, index) => (
                <CustomNavLink key={index} title={item.title} path={item.path} className={classes.headerNavItem}/>
              ))}
            </nav>
            {auth.currentUser && <img src={user?.photoURL} alt="user" className={classes.headerNavUserLogo} />}
            <button onClick={onClick} className={classes.headerNavButton}>{user?'Logout' : 'Login'}</button>
          </div>
        </header>
    </div>
  )
}

export default Header
