import { Router } from 'express'
import { getAllTravels, addNewTravel, getOneTravel, updateTravel, deleteTravel } from '../controllers/travel.js'

const router = Router()

router.get('/', getAllTravels)
router.get('/:id', getOneTravel)
router.post('/add', addNewTravel)
router.put('/:id', updateTravel)
router.delete('/:id', deleteTravel)

export default router
