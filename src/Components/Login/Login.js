import React from 'react'
import './Login.css'

const Login = () => {
    return (
        

        <main className="forms">
            <form id="formular">
            <h4 className="produkt-navn">Login</h4>
            <br/>
            <label>Brugernavn:</label>
            <br/>
            <input type="text" autoFocus required/>
            <br />
            <label>Kodeord:</label>
            <br/>
            <input type="password" required />
            <br/>
            <br/>
            <input type="submit" value="Login" />
            </form>

            <h3>ELLER</h3>

            <form id="formular2">
            <h4 className="produkt-navn">Opret bruger</h4>
            <label>Fornavn:</label>
            <br/>
            <input type="text" required/>
            <br/>
            <label>Efternavn:</label>
            <br/>
            <input type="text" required/>
            <br/>
            <label>Email:</label>
            <br/>
            <input type="email" required/>
            <br/>
            <label>Kodeord:</label>
            <br/>
            <input type="password" required />
            <br/>
            <input type="checkbox" required /> Jeg acceptere brugervilkår og betingelser ved at oprette bruger
            <br/>
            <br/>
            <input type="submit" value="Opret bruger"/> 
            </form>
        </main>
    )
}

export default Login
