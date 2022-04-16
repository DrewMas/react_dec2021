import './Cars.css';

import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";

function Cars({newCar, setCarForUpdate}) {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [newCar]);


    return (
        <div className={'allCars'}>
            {
                cars.map(value => <Car key={value.id} car={value} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
}

export {Cars};
