import './Cars.css';

import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";

function Cars({newCar, setCarForUpdate, updatedCar}) {

    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [newCar, deletedCar,updatedCar]);


    return (
        <div className={'allCars'}>
            {
                cars.map(value => <Car key={value.id} car={value} setCarForUpdate={setCarForUpdate}
                                       setDeletedCar={setDeletedCar}/>)
            }
        </div>
    );
}

export {Cars};
