import { FC, useState } from 'react';
import { Form } from 'react-router-dom'
import { FormProps } from './types.tsx'
import { Input } from '../index.ts'
import classes from './UniversalForm.module.scss';

const UniversalForm: FC<{ data: FormProps }> = ({ data }) => {
  return (
    <Form className={classes.form} method={data.method} action={data.action}>
      <p className={classes.formTitle}>{data.title}</p>
      {data.inputs.map((input) => <Input id={input.id} key={input.id} type={input.type} placeHolder={input.placeHolder} value={input.value} name={input.name} required={input.required} options={input.options} label={input.label}/>)}
      <button className={classes.formButton} type="submit" onClick={data.button.clickHandler} >{data.button.text}</button>
      <input type='hidden' name='userID' value='userTokenfromAUTHItsHidenPROP' />
    </Form>
  )
} 

export default UniversalForm;