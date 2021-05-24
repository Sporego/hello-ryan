import express, { response } from 'express';
import mongoose from 'mongoose';

import Applicant from '../models/applicant.js';

const router = express.Router();

export const postApplicant = async (req,res) => {
    const { firstName,lastName,skills} = req.body;

    const newApplicant = new Applicant({firstName,lastName,skills})

    try {
        await newApplicant.save()

        res.status(201).json(newApplicant._id)
    } catch (e) {
        res.status(409).json({message: e.message})
    }
}

export const getApplicants = async (req,res) => {
    const {skills} = req.body;

    try {
        const applicants = await Applicant.aggregate(
            [{
                $addFields: {
                    "count": {
                        $size: {
                            $setIntersection: ["$skills", skills]
                        }
                    }
                }
            }, {
                $sort: {
                    "count": -1
                }
            }, {
                $limit: 5
            }]
        );

        res.status(200).json(applicants)
    } catch (e) {
        response.status(404).json({message: e.message})
    }
}

export default router;