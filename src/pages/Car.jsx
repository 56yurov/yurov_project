import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../App";

const Car = () => {
    const {cars} = useContext(AppContext)
    let navigate = useNavigate();
    let {id} = useParams();

    const car = cars.find((item) => item.id === Number(id))

    if (!car) {
        return (
            <div>
                Авто не найден!
            </div>
        )
    }

    return (
        <div>
            <h2>Car</h2>

            <div className="card">
                <img src={car.image} width={250} />
                <h2>{car.title}</h2>
                <p>{car.description}</p>
                <span>{car.price}р</span>
                <button onClick={() => navigate(`/send/${id}`)}>Оставить заявку</button>
            </div>
        </div>
    );
};

export default Car;
