import { FC, useState, useEffect} from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { auth } from '../../firebase/firebase.tsx';
import { headerProps } from './helper'
import { logOut } from '../../firebase/auth';
import { Header, Footer, Loader} from '../../components';
import classes from './Layout.module.scss';

const Layout: FC = () => {
  const { state } = useNavigation();
  const [headerData, setHeaderData] = useState(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  useEffect(() => {
    setHeaderData(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  }, [auth.currentUser]);
  const handleAuthClick = auth.currentUser ? () => logOut() : () => null;

  return (
    <>
      {state === 'loading' ? <Loader/> : null}
      <Header logo={headerData.logo} navMenu={headerData.navMenu} onClick={handleAuthClick} />
      <div className={classes.container}>
      <Outlet />
    </div>
      <Footer title="Київ 2024 червень" />
    </>
  );
}

export default Layout;