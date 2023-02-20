import { Request, Response } from 'express'
import Travel, { validate } from '../models/travel.js'

// Method: GET - get all travels
export const getAllTravels = async (req: Request, res: Response) => {
  try {
    const travels = await Travel.find()
    res.status(200).json({ message: 'ok', travels })
  } catch (err) {
    res.send(err)
  }
}

// Method: GET - get one travel by id
export const getOneTravel = async (req: Request, res: Response) => {
  try {
    const travel = await Travel.findById(req.params.id)
    if (!travel) return res.status(404).send('Not found!')

    res.status(200).json({ message: 'ok', travel })
  } catch (err) {
    res.send(err)
  }
}

// Method: POST - add new travel
export const addNewTravel = async (req: Request, res: Response) => {
  try {
    const { value, error } = validate(req.body)
    if (error) return res.status(400).json(error.details)

    const travel = await Travel.create(value)
    res.status(201).json({ message: 'ok', travel })
  } catch (err) {
    res.send(err)
  }
}

// Method: PUT - update travel
export const updateTravel = async (req: Request, res: Response) => {
  try {
    const { value, error } = validate(req.body)
    if (error) return res.status(400).json(error.details)

    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, value, {
      returnDocument: 'after',
    })
    if (!updatedTravel) return res.status(404).send('Not found!')

    res.status(200).json({ message: 'updated', updatedTravel })
  } catch (err) {
    res.send(err)
  }
}

// Method: DELETE - delete travel
export const deleteTravel = async (req: Request, res: Response) => {
  try {
    const deletedTravel = await Travel.findByIdAndRemove(req.params.id)
    if (!deletedTravel) return res.status(404).send('Not found!')

    res.status(200).json({ message: 'deleted' })
  } catch (err) {
    res.send(err)
  }
}
