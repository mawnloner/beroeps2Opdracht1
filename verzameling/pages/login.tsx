import type { NextPage } from 'next'
import { json } from 'stream/consumers';


async function addUser(data) {
    const response = await fetch('/api/users/addUser', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    console.log(response)
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