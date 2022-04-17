import './CarForm.css';

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validation";
import {useEffect} from "react";

function CarForm({setNewCar, carForUpdate, setUpdatedCar, setCarForUpdate}) {

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
    }, [carForUpdate, setValue]);

    const submit = async (car) => {
        try {
            if (carForUpdate){
                const {data} = await carService.updateById(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
            } else {
                await carService.create(car);
                setNewCar(car);
            }
            reset();
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const clearForm = () => {
        setCarForUpdate(false);
        reset();
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
                <button className={'carForm-btn'}>{carForUpdate ? `Update` : `Create`}</button>
                {
                    !!carForUpdate && <button onClick={clearForm} className={`carForm-btn`}>Clear</button>
                }
            </form>
        </div>
    );
}

export {CarForm};
