import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        errors.target.reset();
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: {
                        value: true,
                        message: 'campo requerido'
                    }
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Name</label>
            <input type="text" name="Username" ref={
                register({
                    required: {
                        value: true,
                        message: 'campo requerido'
                    }
                })
            }/>
            <div>
                {errors?.username?.message}
            </div>

            <button>Add User</button>
        </form>
    );
}

export default AddUserForm;