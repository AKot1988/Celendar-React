import { FC, useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '../../firebase/auth';
import { Header, Footer } from '../../components';
import { headerProps } from './helper'
import { onAuthStateChanged } from "firebase/auth"
import { googleSignIn, googleSignOut } from '../../firebase/auth';

const headerData = auth.currentUser? headerProps.authorizedUser : headerProps.guest

const Layout: FC = () => {
  const [headerData, setHeaderData] = useState(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setHeaderData(currentUser? headerProps.authorizedUser : headerProps.guest)
    })
  },[])

  // useEffect(() => {setAuthState(auth.currentUser)}, [auth])
  // const headerData = user? headerProps.authorizedUser : headerProps.guest
  return (
    <>
      <Header logo={headerData.logo} navMenu={headerData.navMenu} onClick={()=>auth.currentUser? googleSignOut(): googleSignIn()}/>
      <Outlet></Outlet>
      <Footer title='Київ 2024 червень'/>
    </>
    
  );
}

export default Layout;