import { FC } from "react";
import { NavLink } from "react-router-dom";

export type CustomNavLinkProps = {
  title: string;
  path: string;
  className?: string;
  onClick?: () => void;
  children?: JSX.Element;
};

const CustomNavLink: FC<CustomNavLinkProps> = ({
  title,
  path,
  className,
  onClick,
  children,
}) => {
  return (
    <>
      {children ? (
        <NavLink to={path} className={className} onClick={onClick}>
          {children}
          {title}
        </NavLink>
      ) : (
        <NavLink to={path} className={className} onClick={onClick}>
          {title}
        </NavLink>
      )}
    </>
  );
};

export default CustomNavLink;