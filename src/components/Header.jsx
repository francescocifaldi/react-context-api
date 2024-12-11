import { useContext } from "react"
import CountContext from "../contexts/CountContext"

export default function Header() {

    const providerValue = useContext(CountContext)
    console.log(providerValue)

    return (
        <header className="header">
            <div className="container">
                sono l'header
                <nav>
                    <ul>
                        <li> Posts: {providerValue.count} </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}