import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {newCarValidator} from "../../validators/car-validator/NewCarValidator.ts";
import {CarsService} from "../../service/cars.service.ts";
import type {INewCar} from "../../models/car/INewCar.ts";

interface formProps {
    brand: string;
    price: number;
    year: number;
}

export const AddNewCarForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset
    } = useForm<formProps>({mode: 'all', resolver: joiResolver(newCarValidator)})
    const onSubmit = async (values: formProps) => {
        const newCar: INewCar = {
            ...values
        }
        const res = await CarsService.addNewCar(newCar)
        console.log(res);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-4 border p-2'}>
            <label>
                Brand:
                <input type="text" {...register('brand')}/>
                {errors.brand && <p className={'text-red-400'}>{errors.brand.message}</p>}
            </label>
            <label>
                Price
                <input type="number" {...register('price')}/>
                {errors.price && <p className={'text-red-400'}>{errors.price.message}</p>}
            </label>
            <label>
                Year:
                <input type="number" {...register('year')}/>
                {errors.year && <p className={'text-red-400'}>{errors.year.message}</p>}
            </label>
            <button disabled={!isValid} className={'disabled:opacity-20'} type={'submit'}>Submit</button>
        </form>
    );
};