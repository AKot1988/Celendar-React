import { FC } from 'react'
import { PlusBtn } from './PlusBtn'
import { AddButtonProps } from './types'
import { Link } from 'react-router-dom'
import classes from './AddButton.module.scss'

const AddButton: FC<AddButtonProps> = ({action, type = 'button', to='/'}) => {
    if(type === 'link' && !to) throw new Error('Link must have a destination')
    if(type === 'button' && to) throw new Error('Button should not have a destination')

    switch(type){
        case 'button':
            return <button className={classes.addButton} onClick={action}>{PlusBtn.plusIcon}</button>
        case 'link':
            return <Link to={to} className={classes.addButton} children={PlusBtn.plusIcon}/>
        default:
            throw new Error('Invalid button type')
    }
}
      
export default AddButton