import type { NextPage } from 'next'

declare var userName: string;
declare var password: string;

async function createAccount() {
    userName: userName;
    password: password;
}

export {createAccount}; {
    userName: userName;
    password: password;
}

const Login: NextPage = ({ }) => {
    return(
        <div>
            <fieldset>
            <legend>Maak een account</legend>
                <form onSubmit={createAccount()} id="createAccount">
                    <label htmlFor="userName">Name:</label>
                    <input required type="text" name="userName" id="userName"/>
                    <label htmlFor="password">Password:</label>
                    <input required type="password" name="password" id="password"/>

                    <input type="submit" value="Account aanmaken" />
                </form>
            </fieldset>
        </div>
    )
}

export default Login