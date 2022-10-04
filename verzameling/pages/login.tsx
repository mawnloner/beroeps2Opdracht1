//GEEFT NU GEEN ERROR MEER, MAAR VOEGT OOK NIET TOE
//KIJK NAAR DE JSON STRINGIFY EN DEBUG DEZE
//KIJK DAN OF DAT DE ADDUSERS WEL GOED IS

import type { NextPage } from 'next'
import { FormEvent } from 'react'

async function addUser(data: object) {
   async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(data);
    data = new FormData();
    const response = await fetch('http://localhost:3000/api/users/getUsers', {
        method: 'POST',
        headers:{
            'Content-type':'application/json;charset=UTF-8',
            body: JSON.stringify({data})
        },
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
                    <label htmlFor="name">Name:</label>
                    <input required type="text" name="name" id="name"/>
                    <label htmlFor="password">Password:</label>
                    <input required type="password" name="password" id="password"/>

                    <input type="submit" value="Account aanmaken" />
                </form>
            </fieldset>
        </div>
    )
}

export default Login