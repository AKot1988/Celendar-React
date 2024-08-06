import { FC } from 'react'
import { CloseBtn } from './CloseBtn'
import { ModalProps } from './helper'
import classes from './UniversalModal.module.scss'

const UniversalModal:FC<ModalProps> = ({ content, title, visible, setVisible  }) => {

    const rootClasses: string[] = [classes.modal, visible ? classes.active : '']
    
	return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modalBtnClose} onClick={() => setVisible(false)}>
                    {CloseBtn.closeIcon}
                </div>
                <h2 className={classes.modalTitle}>
                    {title}
                </h2>
                {content}
            </div>
        </div>
	)
}

export default UniversalModal