import type { NextPage } from 'next'
import { FormEvent } from 'react'


async function addUser(data: object) {
   async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    data = new FormData();
    const response = await fetch('/api/users/addUser', {
        method: 'POST',
        headers:{
            'Content-type':'application/json;charset=UTF-8'
        },
        body: JSON.stringify({data})

    })
    console.log(response)
   }
}

const Login: NextPage = ({ }) => {
    return(
        <div>
            <fieldset>
            <legend>Maak een account</legend>
                <form
                    method='POST'
                    onSubmit={async (data) => {
                        await addUser(data)
                    }}
                    id="createAccount"
                >
                    <label htmlFor="userName">Name:</label>
                    <input required type="text" name="name" id="userName"/>
                    <label htmlFor="password">Password:</label>
                    <input required type="password" name="password" id="password"/>

                    <input type="submit" value="Account aanmaken" />
                </form>
            </fieldset>
        </div>
    )
}

export default Login