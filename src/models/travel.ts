import { Schema, model } from 'mongoose'
import Joi from 'joi'

type Review = {
  name: string
  body: string
  date: Date
}

type TravelType = {
  title: string
  photo: string
  description: string
  location: string
  reviews?: Review[]
}

const joiSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  photo: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  reviews: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      body: Joi.string(),
      date: Joi.date(),
    }),
  ),
})

export const validate = (data: TravelType) => {
  return joiSchema.validate(data)
}

const TravelSchema = new Schema<TravelType>({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  reviews: [
    {
      name: String,
      body: String,
      date: Date,
    },
  ],
})

export default model<TravelType>('Travel', TravelSchema)
