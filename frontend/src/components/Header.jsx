import { useEffect, useState } from 'react';
import '../styles/Menu.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    let [auth, setauth] = useState(null);
    useEffect(() => {
        fetch("/api/user/hasauth", { credentials: 'include' }).then(t => t.json()).then(o => o.error ? null : setauth(true));
    }, [])

    const Navigate = useNavigate();

    function Logout() {
        fetch("/api/user/logout").then(t => t.json()).then(o => {
            if (o.error) {
                null
            } else {
                Navigate("/");
                setauth(false);
            }
        })
    }
    function Login() {
        Navigate("/login");
    }

    return (<>
        <header>
            <div className="brand">Sahitya Space</div>
            <div className="menu">Menu
                <div className="dropdown">
                    {
                        auth ? (
                            <button onClick={Logout} className='item'>Logg Out</button>) : (
                            <button onClick={Login}>Login</button>
                        )
                    }
                </div>
            </div>
        </header>
    </>)
}