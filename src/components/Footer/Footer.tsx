import classes from './Footer.module.scss';
import {FC} from 'react';


type FooterProps = {
  title: string
  className?: string | undefined

}

const Header: FC<FooterProps> = ({title, className = 'header'}) => {
  return (
    <footer className={classes.footer}>
      <h4 className={classes.footerTitle}>{title}</h4>
    </footer>
  )
}

export default Header