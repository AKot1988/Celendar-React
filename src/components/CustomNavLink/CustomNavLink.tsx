import {FC} from 'react';
import { NavLink } from 'react-router-dom';

export type CustomNavLinkProps = {
  title: string
  path: string
  className: string
  onClick?: ()=>void
}

const CustomNavLink: FC<CustomNavLinkProps> = ({title, path, className, onClick}) => {
  return (
      <NavLink to={path} className={className} onClick={onClick}>{title}</NavLink>
  )
}

export default CustomNavLink