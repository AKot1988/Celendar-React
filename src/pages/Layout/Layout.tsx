import { FC, useState, useEffect } from "react";
import { Outlet, useNavigation, useLoaderData } from "react-router-dom";
import { auth } from "../../firebase/firebase.tsx";
import { headerProps, footerProps } from "./helper";
import { logOut } from "../../firebase/auth";
import { userDataProps } from "../../firebase/types.tsx";
import { Header, Footer, Loader } from "../../components";
import classes from "./Layout.module.scss";

const Layout: FC = () => {
  const { state } = useNavigation();
  const userData = useLoaderData() as userDataProps;
  const [headerData, setHeaderData] = useState(
    auth.currentUser ? headerProps.authorizedUser : headerProps.guest
  );
  useEffect(() => {
    setHeaderData(
      auth.currentUser ? headerProps.authorizedUser : headerProps.guest
    );
  }, [auth.currentUser]);
  const handleAuthClick = auth.currentUser ? () => logOut() : () => null;

  return (
    <>
      <Header
        logo={headerData.logo}
        navMenu={headerData.navMenu}
        onClick={handleAuthClick}
        avatarLink={userData?.avatar as string}
      />
      {state === "loading" ? (
        <Loader />
      ) : (
        <div className={classes.container}>
          <Outlet />
        </div>
      )}
      <Footer title={footerProps()} />
    </>
  );
};

export default Layout;
