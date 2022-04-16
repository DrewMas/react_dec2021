import './Car.css';
import {carService} from "../../services";

function Car({car, setCarForUpdate, setDeletedCar}) {
    let {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setDeletedCar(id);
    }

    return (
        <div className={'singleCar-wrapper'}>
            <div className={'singleCar-info'}>
                <p>{id} - {model}</p>
                <p>Price: {price}</p>
                <p>Production year: {year}</p></div>
            <div className={'singleCar-btnWrapper'}>
                <button className={'singleCar-btn'} onClick={() => deleteCar()}>Delete</button>
                <button className={'singleCar-btn'} onClick={() => setCarForUpdate(car)}>Update</button>
            </div>
        </div>
    );
}

export {Car};
