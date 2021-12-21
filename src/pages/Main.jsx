import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";


const Main = () => {
    const {cars} = useContext(AppContext)

    if (!cars.length) {
        return  (
            <div>...Loading</div>
        )
    }

    return  (
        <div>
        <h1 className={"title"}>KIA Models</h1>
        <ul className={"container"}>

            {cars.map((card) => {
                return (
                    <Card key={card.id} card={card}/>

                )

            })}

        </ul>
        </div>
    );
};

export default Main;
