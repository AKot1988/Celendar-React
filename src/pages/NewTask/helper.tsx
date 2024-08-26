import { InputType } from '../../components/Input/type'
import { AUTH_USER_ROUTES } from '../../router/routesNames'
import { FormProps, Method } from '../../components/UniversalForm/types'
import { UniversalModal, BasicStaticDateTimePicker } from '../../components'

export const NewTaskFormData: FormProps = {
    title: 'New Task',
    action: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day/newTask`,
    method: Method.POST,
    inputs: [
        {
          id: 'title',
          type: InputType.TEXT,
          placeHolder: 'Task name',
          value: '',
          name: 'title',
          required: true,
          label: 'Title',
          onChange: () => console.log('Title changed')
        },
        {
          id: 'taskDescription',
          type: InputType.TEXTAREA,
          placeHolder: 'Task description',
          value: '',
          name: 'taskDescription',
          required: true,
          label: 'Description',
          onChange: () => console.log('Title changed')
        },
        {
          id: 'begin',
          type: InputType.DATEPICKER,
          placeHolder: '',
          value: '',
          name: 'begin',
          required: true,
          label: 'Set begin date/time',
          onFocus: ()=>{},
        },
    ],
    button: {
        text: 'Add event',
        clickHandler: () => console.log('Create task')
    }
}