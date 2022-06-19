import {Router} from 'express'

import * as EventController from '../controllers/Events'
const router = Router ()


router.post('/',EventController.createEvent)
router.get('/',EventController.getEvent)
router.put("/:eventId",EventController.updateEvent)
router.delete("/:eventId",EventController.deleteEvent)


export default router;