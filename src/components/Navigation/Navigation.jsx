import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <header>
            <nav>
                {!isAuth && <button onClick={() => navigate(`/private`)}>Login</button>}
                {isAuth && <button onClick={() => setIsAuth(false)}>Logout</button>}
                <Link to="/">Main</Link>
                <Link to="/tour">tour</Link>
                <Link to="/private">private</Link>
            </nav>
        </header>
    );
};

export default Navigation;
