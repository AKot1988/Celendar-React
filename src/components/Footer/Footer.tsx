import classes from "./Footer.module.scss";
import { FC } from "react";

type FooterProps = {
  title: string;
  className?: string | undefined;
};

const Footer: FC<FooterProps> = ({ title, className = "header" }) => {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <h4 className={classes.footerTitle}>{title}</h4>
      </footer>
    </div>
  );
};

export default Footer;
