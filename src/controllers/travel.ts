import { Request, Response } from 'express'
import Tarvel, { validate } from '../models/travel.js'

// Method: GET - get all travels
export const getAllTravels = async (req: Request, res: Response) => {
  try {
    const travels = await Tarvel.find()
    res.status(200).json({ message: 'ok', travels })
  } catch (err) {
    res.status(404).send(err)
  }
}

// Method: POST - add new travel
export const addNewTravel = async (req: Request, res: Response) => {
  try {
    const { value, error } = validate(req.body)

    if (error) return res.status(400).json(error.details)

    const travel = await Tarvel.create(value)

    res.status(201).json({ message: 'ok', travel })
  } catch (err) {
    res.status(404).send(err)
  }
}
