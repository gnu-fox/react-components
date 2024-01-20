'use client'
import './Auth.css'

import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit, formState : { errors } } = useForm()
    const onSubmit = handleSubmit((data) => { console.log(data) })

    return <form onSubmit={onSubmit}>

        <label htmlFor="username">Username</label>
        <input type="text" {...register("username", { required : {
            value: true,
            message: "Username is required"
        } })} />
        { errors.username ? <span> <> { errors.username.message } </> </span> : null }
        
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password", { required : {
            value: true,
            message: "Password is required"
        } })} />
        { errors.password ? <span> <> { errors.password.message } </> </span> : null }

        <input type="submit" value="Login" />
    </form>
}

const Register = () => {

    const { register, handleSubmit, formState : { errors } } = useForm()

    const onSubmit = handleSubmit((data) => { console.log(data) })

    return <form onSubmit={ onSubmit } >

        <label htmlFor="username">Username</label>
        <input type="text" {...register("username", { required: { value: true,message: "Username is required"}})} />
        { errors.username ? <span> <> { errors.username.message } </> </span> : null }

        <label htmlFor="email">Email</label>
        <input type="email" {...register("email", {required: { value: true, message: "Email is required"}})} />
        { errors.email ? <span> <> { errors.email.message } </> </span> : null }

        <label htmlFor="password">Password</label>
        <input type="password" {...register("password",{required: true})} />
        { errors.password ? <span>Password is required</span> : null}

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" {...register("confirm-password",{required: true})}/>
        { errors["confirm-password"] ? <span>Password confirmation is required</span> : null }

        <label htmlFor="first-name">First Name</label>
        <input type="text" { ...register("first-name",{required: false}) } />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" {...register("last-name",{required: false})} />

        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" {...register("birthdate",{required: true})} />
        { errors.birthdate ? <span>Birthdate is required</span> : null }

        <label htmlFor='terms-and-conditions'>Terms and Conditions</label>
        <input type="checkbox" {...register("terms-and-conditions",{required: true})} />
        { errors['terms-and-conditions'] ? <span>You must accept terms and conditions</span> : null}

        <input type="submit" value="Register" />

    </form>
}

export { Login, Register }