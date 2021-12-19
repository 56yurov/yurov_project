import React from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const {id, title, description, image, price} = card
    let navigate = useNavigate()
    return (
        <li className="container__card">
            <h2 className="container__title">{title}</h2>
            <img className="card__image" src={image} alt={title + price}/>
            <p className="container__description">{description}</p>
            <button className="container__button" onClick={() => navigate(`/tour/${id}`)}>Перейти</button>
        </li>
    )
}

export default Card;

