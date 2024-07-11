import { FC } from 'react';
import classes from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div className={classes.loader}>
      <img src='../../../public/fill-color.gif' alt="loader" />
    </div>
  )
}

export default Loader;