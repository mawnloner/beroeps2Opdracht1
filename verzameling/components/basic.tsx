import React from 'react'

export function Header() {
    return (
        <header>
            <ul>
                <li className="links"><a href="">Contact</a></li>
                <li className="links"><a href="">Onze Collectie</a></li>
                <li className="midden"><a href=""><img src="/media/test.jpg" alt="" /></a></li>
                <li className="rechts"><a href="">Winkelmand</a></li>
                <li className="rechts"><a href="">Inloggen</a></li>
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