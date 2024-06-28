import { FC, ReactNode, useState, useEffect } from 'react';
import { Button } from '../index';
import { SVG } from '../../../public/SVG';
import classes from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  content: ReactNode;
};

const Modal: FC<ModalProps> = ({ isOpen = true, onClose = () => console.log('Форма закрита нічого не відправилось'), content }) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(!open);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {open &&
      (<div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.modalSVG} onClick={handleClose}>{SVG.closeIcon}</div>
          <div className={classes.modalContent}>
            {content}
          </div>
        </div>
      </div>)}
    </>
  )
}

export default Modal;