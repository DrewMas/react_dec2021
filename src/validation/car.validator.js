import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().min(2).max(20).regex(/^[a-zA-ZА-яіІїЇйЙ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters are allowed'
    })
    ,
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator};
