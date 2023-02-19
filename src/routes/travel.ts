import { Router } from 'express'
import { getAllTravels } from '../controllers/travel.js'

const router = Router()

router.get('/', getAllTravels)

export default router
