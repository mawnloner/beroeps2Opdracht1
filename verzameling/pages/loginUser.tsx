import type { NextPage } from 'next'
import { prisma, gebruikers } from '@prisma/client'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Head from 'next/head'

import { Header, Footer } from '@Components/basic'

const Login: NextPage = ({ }) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const checkGebruikers = async (data) => {
        const res = fetch("http://localhost:3000/api/users/checkUsers", {
            method: 'POST',
            body: JSON.stringify({data})
        })
        const user = (await res).json;
        document.cookie = `userID=${user.id}; userName=${user.naam}; userRole=${user.role}; SameSite=None; Secure`;
        console.log(document.cookie);
    }
    
    return(
        <>
        <Header />
        <div>
            <fieldset>
            <legend>Inloggen</legend>
                <form onSubmit={handleSubmit(checkGebruikers)}>
                    <label htmlFor="nameInlog">Name:</label>
                    <input defaultValue="Admin" type="text" id="nameInlog" {...register('naam', {required: true})}/>
                    <label htmlFor="passwordInlog">Password:</label>
                    <input defaultValue="admin" type="password" id="passwordInlog" {...register('password', {required: true})}/>

                    <input type="submit" value="Login" />
                </form>
            </fieldset>
        </div>
        {/* button to link to login */}
        <p>Heeft u nog geen account? </p><a href="login">Creëer een account!</a>
        <Footer />
        </>
    )
}

export default Login