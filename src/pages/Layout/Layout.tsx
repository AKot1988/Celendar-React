import { FC, useState, useEffect} from 'react';
import { Outlet, useNavigation, useLoaderData } from 'react-router-dom';
import { auth } from '../../firebase/firebase.tsx';
import { headerProps } from './helper'
import { logOut } from '../../firebase/auth';
import { userDataProps } from '../../firebase/types.tsx';
import { Header, Footer, Loader} from '../../components';
import classes from './Layout.module.scss';

const Layout: FC = () => {
  const { state } = useNavigation();
  const userData = useLoaderData() as userDataProps;
  const [headerData, setHeaderData] = useState(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  useEffect(() => {
    setHeaderData(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  }, [auth.currentUser]);
  const handleAuthClick = auth.currentUser ? () => logOut() : () => null;

  return (
    <>
      {state === 'loading' ? <Loader/> : null}
      <Header logo={headerData.logo} navMenu={headerData.navMenu} onClick={handleAuthClick} avatarLink={userData?.avatar as string} />
      <div className={classes.container}>
      <Outlet />
    </div>
      <Footer title="Київ 2024 червень" />
    </>
  );
}

export default Layout;