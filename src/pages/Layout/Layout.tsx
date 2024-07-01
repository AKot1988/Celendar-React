import { FC, useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '../../firebase/auth';
import { headerProps } from './helper'
import { googleSignIn, googleSignOut } from '../../firebase/auth';
import { Header, Footer, UniversalModal } from '../../components';
import { LogIn } from '../../pages';

const Layout: FC = () => {
  const [headerData, setHeaderData] = useState(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHeaderData(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  }, [auth.currentUser]);

  const handleAuthClick = auth.currentUser ? () => googleSignOut() : () => setIsOpen(!isOpen);

  return (
    <>
      <Header logo={headerData.logo} navMenu={headerData.navMenu} onClick={handleAuthClick} />
      <Outlet />
      <Footer title="Київ 2024 червень" />
      {isOpen && <UniversalModal isOpen={isOpen} setVisible={() => setIsOpen(false)} content={<LogIn closeModal={() => setIsOpen(false)} />} />}
    </>
  );
}

export default Layout;