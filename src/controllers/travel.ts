import { Request, Response } from 'express'

export const getAllTravels = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'ok', travels: 'all tarvels' })
}
