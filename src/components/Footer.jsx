import { useContext } from "react"
import CountContext from "../contexts/CountContext"

export default function Footer() {

    const { count, setCount } = useContext(CountContext)
    return (
        <footer className="footer">
            <div className="container">
                sono il footer
            </div>
            <button onClick={() => { setCount(count + 1) }}>
                incrementa
            </button>
        </footer>
    )
}