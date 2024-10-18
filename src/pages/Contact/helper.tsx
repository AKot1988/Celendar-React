import { SVG } from "../../../public/SVG.tsx";
import { CustomNavLinkProps } from "../../components/CustomNavLink/CustomNavLink.tsx";

export const contactsData: CustomNavLinkProps[] = [
  {
    title: "github",
    children: SVG.githubIcon,
    path: "https://github.com/AKot1988",
  },
  {
    title: "telegram",
    children: SVG.telegramIcon,
    path: "https://t.me/AKot19882605",
  },
  {
    title: "Email",
    children: SVG.emailIcon,
    path: "kulibabenko@ukr.net",
  },
  {
    title: "instagram",
    children: SVG.instaIcon,
    path: "https://www.instagram.com/anton_kulibabenko/",
  },
  {
    title: "youtube",
    children: SVG.youtubeIcon,
    path: "https://www.youtube.com/@kulibabenko",
  },
  {
    title: "phone",
    children: SVG.phoneIcon,
    path: "tel:+380662605826",
  },
  {
    title: "CV",
    children: SVG.CVIcon,
    path: "https://drive.google.com/file/d/1cwMvjR3Jt3KTsn3__dTkHQ_UsEL1e28q/view?usp=drive_link",
  },
];
