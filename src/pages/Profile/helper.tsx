import { CustomNavLinkProps } from "../../components/CustomNavLink/CustomNavLink.tsx";
import { AUTH_USER_ROUTES } from "../../router/routesNames.tsx";

export const navlinkEditProfProp: CustomNavLinkProps = {
  title: "Редагувати",
  path: `${AUTH_USER_ROUTES.PROFILE}/edit`,
  className: "editProfile",
};
