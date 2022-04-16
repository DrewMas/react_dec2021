import './CarForm.css';

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validation";
import {useEffect} from "react";

function CarForm({setNewCar, carForUpdate}) {

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue(`model`, model)
            setValue(`price`, price)
            setValue(`year`, year)
        }
    }, [carForUpdate]);

    const submit = async (car) => {
        try {
            const {data} = await carService.create(car);
            setNewCar(data);
            reset();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={'carForm'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                {errors.model && <span>{errors.model.message}</span>}
                <label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button className={'carForm-btn'}>Save</button>
            </form>
        </div>
    );
}

export {CarForm};
