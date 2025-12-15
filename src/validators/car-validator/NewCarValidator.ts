import * as Joi from "joi";

export const newCarValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).min(1).max(20).required().messages({
        'string.pattern.base': 'Only letters are allowed',
        'string.empty': 'Must be filled',
        'string.min': 'Min length must be greater than 0',
        'string.max': 'Max length must be less or equal 20',
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(2025).required(),
})