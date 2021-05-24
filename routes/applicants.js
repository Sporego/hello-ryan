import express from 'express';

import {postApplicant,getApplicants} from '../controllers/applicants'

const router = express.Router();

router.get('/applicants/', getApplicants)
router.post('/applicants/', postApplicant)

export default router;