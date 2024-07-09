import { FC, useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '../../firebase/firebase.tsx';
import { headerProps } from './helper'
import { logOut } from '../../firebase/auth';
import { Header, Footer} from '../../components';

const Layout: FC = () => {
  const [headerData, setHeaderData] = useState(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  useEffect(() => {
    setHeaderData(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  }, [auth.currentUser]);
  const handleAuthClick = auth.currentUser ? () => logOut() : () => console.log('user is not logged in');

  return (
    <>
      <Header logo={headerData.logo} navMenu={headerData.navMenu} onClick={handleAuthClick} />
      <Outlet />
      <Footer title="Київ 2024 червень" />
    </>
  );
}

export default Layout;