import {Router} from 'express'
const router = Router ()

import * as authControl from '../controllers/auths.controllers'

router.post('/signup', authControl.signUp)
router.post('/signin', authControl.signin)

export default router;