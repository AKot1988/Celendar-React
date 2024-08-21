// import { Input } from '../../components'
import { InputType } from '../../components/Input/type'
import { AUTH_USER_ROUTES } from '../../router/routesNames'
import { FormProps, Method } from '../../components/UniversalForm/types'


export const NewTaskFormData: FormProps = {
    title: 'New Task',
    action: `${AUTH_USER_ROUTES.CALENDAR}/:currentUser/:day/newTask`,
    method: Method.POST,
    inputs: [
        {
          id: 'taskName',
          type: InputType.TEXT,
          placeHolder: 'Task name',
          value: '',
          name: 'taskName',
          required: true,
          label: 'Task name'
        },
        {
          id: 'taskDescription',
          type: InputType.TEXT,
          placeHolder: 'Task description',
          value: '',
          name: 'taskDescription',
          required: true,
          label: 'Task description'
        },
    ],
    button: {
        text: 'Create',
        clickHandler: () => console.log('Create task')
    }
}