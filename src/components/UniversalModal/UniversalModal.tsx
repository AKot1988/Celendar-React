import { FC, ReactNode, SetStateAction, Dispatch } from 'react'
import { CloseBtn } from './CloseBtn'
import classes from './UniversalModal.module.scss'

type ModalProps = {
    content: ReactNode
    isOpen: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}

const UniversalModal:FC<ModalProps> = (props) => {
    const { content, isOpen, setVisible  } = props
    
    const rootClasses = [classes.modal]
    isOpen ? rootClasses.push(classes.active) : null

	return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modalBtnClose} onClick={() => setVisible(false)}>
                    {CloseBtn.closeIcon}
                </div>
                {content}
            </div>
        </div>
	)
}

export default UniversalModal