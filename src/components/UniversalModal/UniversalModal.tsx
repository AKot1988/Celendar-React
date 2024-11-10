import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { CloseBtn } from "./CloseBtn";
import { ModalProps } from "./helper";
import { fadeTransparentInAnimation } from "../Animations/Animations";
import classes from "./UniversalModal.module.scss";

const UniversalModal: FC<ModalProps> = ({
  content,
  title,
  visible,
  setVisible,
}) => {
  const rootClasses: string[] = [classes.modal, visible ? classes.active : ""];
  useEffect(() => {
    const hendleKeyUP = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        console.log("Escape key pressed");
        setVisible(false);
      }
    }
    document.addEventListener("keyup", hendleKeyUP);
    return () => {document.removeEventListener("keyup", hendleKeyUP)};
    
  }, [])

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeTransparentInAnimation}
      className={rootClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        id="modal"
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={classes.modalBtnClose}
          onClick={() => setVisible(false)}
        >
          {CloseBtn.closeIcon}
        </div>
        <h2 className={classes.modalTitle}>{title}</h2>
        {content}
      </div>
    </motion.div>
  );
};

export default UniversalModal;
