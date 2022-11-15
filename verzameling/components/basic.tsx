import React from 'react'

export function Header(loggedIn:boolean) {
    let loginLink = loggedIn ? <a href="/loginUser">Inloggen</a> : <a href="/logoutUser">Uitloggen</a>

    return (
        <header>
            <ul>
                <li className="links"><a href="/contact">Contact</a></li>
                <li className="links"><a href="/kristal">Onze Collectie</a></li>
                <li className="midden"><a href="/"><img src="/media/test.jpg" alt="" /></a></li>
                {/* <li className="rechts"><a href="">Winkelmand</a></li> */}
                
                <li className="rechts">{loginLink}</li>
            </ul>
        </header>
    )
}

export function Footer() {
    return (
        <footer>
            footer
        </footer>
    )
}