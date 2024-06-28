import {FC} from 'react';
import { NavLink } from 'react-router-dom';

import classes from './CustomNavLink.module.scss';

export type CustomNavLinkProps = {
  title: string
  path: string
  className: string

}

const CustomNavLink: FC<CustomNavLinkProps> = ({title, path, className}) => {
  return (
      <NavLink to={path} className={className}>{title}</NavLink>
  )
}

export default CustomNavLink