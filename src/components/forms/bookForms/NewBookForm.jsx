import React from 'react'
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../customInput/CustomInput';
import { newBookInputes } from '../../../assets/customInputs/bookInputes';
import useForm from '../../../hooks/useForm';
import { postNewBookAction } from '../../../features/book/bookAction';

const initialState = {}
const NewBookForm = () => {
   const {form, setForm, handleOnChange} = useForm(initialState);

   const handleOnSubmit = (e) => {
    e.preventDefault();
    postNewBookAction(form);
    // console.log(form);
   }
  return (
    <div className='p-4'>
        <h3>Insert new book details below</h3>
        <Form className='m-2' onSubmit={handleOnSubmit}>

            {
                newBookInputes.map((input)=> (
                <CustomInput key={input.name} {...input} onChange = {handleOnChange}/>
                ))
            }
            
            <div className="d-grid">
                <Button type="submit">Add New Book</Button>
            </div>
            
        </Form>

        </div>
  )
}

export default NewBookForm;