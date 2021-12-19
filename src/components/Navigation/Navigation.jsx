import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <header >
            <nav className={"header"}>
                <Link to="/">
                    <img className={'logo'} src={'https://www.black.space/wp-content/uploads/2021/01/Blackspace_Kia_1.jpeg'}/>
                </Link>
                {!isAuth && <button className={"header__button"} onClick={() => navigate(`/private`)}>Login</button>}
                {isAuth && <button className={"header__button"} onClick={() => setIsAuth(false)}>Logout</button>}
                <Link to="/" className={'header__link'}>Main</Link>
                <Link to="/car" className={'header__link'}>Car</Link>
                <Link to="/private" className={'header__link'}>Private</Link>
            </nav>
        </header>
    );
};

export default Navigation;
