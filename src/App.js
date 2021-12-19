import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import Car from "./pages/Car";
import Private from "./pages/Private";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database";
import Send from "./pages/Send";

export const AppContext = createContext(null)

function App() {
    const [cars, setCars] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const response = cards
        setCars(response)
    }, [])

    return (
        <AppContext.Provider value={{cars, setCars, isAuth, setIsAuth}}>
            <Navigation/>

            <main style={{padding: 32}}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/tour/:id" element={<Car/>}/>
                    <Route path="/private" element={<Private/>}/>
                    <Route path="/send/:carId" element={<Send/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </main>

        </AppContext.Provider>
    );
}

export default App;
