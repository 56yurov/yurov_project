import React, {useContext} from 'react';
import {AppContext} from "../App";
import Login from "./Login";

const Private = () => {
    const {isAuth, cars} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login />
        )
    }

    const carId = localStorage.getItem('carId')
    const name = localStorage.getItem('name')
    const phone = localStorage.getItem('phone')

    if (carId && name && phone) {
        const car = cars.find(car => car.id == carId)
        return (
            <div>
                <h2>Top Secret</h2>
                <div>
                    <h3>{name}</h3>
                    <p>{phone}</p>
                    <span>{car.title}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Top Secret</h2>
            <div>
                Нет заявок
            </div>
        </div>
    )


};

export default Private;
