import type { NextPage } from 'next'
import { prisma, gebruikers } from '@prisma/client'
import { FieldValues, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Head from 'next/head'

import { Header, Footer } from '@Components/basic'

// gets all the users
export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/users/getUsers")
    const data:gebruikers[] = await res.json()
    return {
        props: {
            gebruikersData: data
        }
    }
}

// handles the addUsers with a POST json to addUsers.ts 
// needs to also handle the checkUser.ts (will be new doc)
const Login: NextPage = ({ }) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const addGebruiker = async (data) => {
        const res = fetch("http://localhost:3000/api/users/addUser", {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    const checkGebruikers = async (data) => {
        const res = fetch("http://localhost:3000/api/users/checkUsers", {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
    
    return(
        <>
        <div>
            <fieldset>
            <legend>Account aanmaken</legend>
                <form onSubmit={handleSubmit(addGebruiker)}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" {...register('naam', {required: true})}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" {...register('password', {required: true})}/>

                    <input type="submit" value="Account aanmaken" />
                </form>
            </fieldset>
        </div>

        <div>
            <fieldset>
            <legend>Inloggen</legend>
                <form onSubmit={handleSubmit(checkGebruikers)}>
                    <label htmlFor="nameInlog">Name:</label>
                    <input type="text" id="nameInlog" {...register('naam', {required: true})}/>
                    <label htmlFor="passwordInlog">Password:</label>
                    <input type="password" id="passwordInlog" {...register('password', {required: true})}/>

                    <input type="submit" value="Login" />
                </form>
            </fieldset>
        </div>
        </>

        
    )
}

export default Login