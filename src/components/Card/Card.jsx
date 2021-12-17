import React from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const {id, title, description} = card
    let navigate = useNavigate()
    return (
        <div className="card">
            <img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => navigate(`/tour/${id}`)}>Перейти</button>
        </div>
    )
}

export default Card;
