import { FC, useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '../../firebase/auth';
import { headerProps } from './helper'
import { onAuthStateChanged } from "firebase/auth"
import { googleSignIn, googleSignOut } from '../../firebase/auth';
import { Header, Footer, Modal, UniversalModal } from '../../components';
import { LogIn } from '../../pages';

const Layout: FC = () => {
  const [headerData, setHeaderData] = useState(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
      setHeaderData(auth.currentUser? headerProps.authorizedUser : headerProps.guest)
  },[auth.currentUser])

  const handleAuthClick = auth.currentUser? () => googleSignOut() : () => ( console.log(auth.currentUser), setIsOpen(!isOpen), console.log('Modal opened'))
  // isGogi ? () => googleSignOUt() : () => somethingElse()
  // const handleAuthClick = () => {auth.currentUser? googleSignOut(): googleSignIn()}
  console.log('modalVisibility ' + isOpen)
  return (
    <>
      <Header logo={headerData.logo} navMenu={headerData.navMenu} onClick={handleAuthClick}/>
      <Outlet></Outlet>
      <Footer title='Київ 2024 червень'/>
      {/* {isOpen && <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false), console.log('Modal closed')}} content={<LogIn/>}/>} */}
      {isOpen && <UniversalModal isOpen={isOpen} setVisible={()=>{setIsOpen(false), console.log('Modal closed')}} content={<LogIn/>}/>}
      

    </>
    
  );
}

export default Layout; 

// const Layout: FC = () => {
//   const [headerData, setHeaderData] = useState(auth.currentUser ? headerProps.authorizedUser : headerProps.guest);
//   // const [isOpen, setIsOpen] = useState(false);
//   onAuthStateChanged(auth, (currentUser) => {
//       setHeaderData(currentUser? headerProps.authorizedUser : headerProps.guest)
//     })

//   // const handleAuthClick = auth.currentUser? () => googleSignOut() : () => ( console.log(auth.currentUser), setIsOpen(!isOpen), console.log('Modal opened'))
//   // isGogi ? () => googleSignOUt() : () => somethingElse()
//   const handleAuthClick = () => {auth.currentUser? googleSignOut(): googleSignIn()}
//   // console.log('modalVisibility ' + isOpen)
//   return (
//     <>
//       <Header logo={headerData.logo} navMenu={headerData.navMenu} onClick={handleAuthClick}/>
//       <Outlet></Outlet>
//       <Footer title='Київ 2024 червень'/>
//       {/* {isOpen && <Modal isOpen={isOpen} onClose={()=>{setIsOpen(false), console.log('Modal closed')}} content={<LogIn/>}/>} */}
//       {/* {isOpen && <UniversalModal isOpen={isOpen} setVisible={()=>{setIsOpen(false), console.log('Modal closed')}} content={<LogIn/>}/>} */}
      

//     </>
    
//   );
// }

// export default Layout;