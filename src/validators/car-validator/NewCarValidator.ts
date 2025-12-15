import * as Joi from "joi";

export const newCarValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({
        "string.pattern.base": 'Only letters are allowed, length 1-20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.min': 'Price must be greater than 0',
        'number.max': 'Price must be less than or equal 1000000',
    }),
    year: Joi.number().min(1990).max(2025).messages({
        'number.min': 'Year must be greater than 1990',
        'number.max': 'Year must be less than or equal 2025',
    }),
})