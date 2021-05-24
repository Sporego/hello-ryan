import express, { response } from 'express';
import mongoose from 'mongoose';

import Applicant from '../models/applicant';

const router = express.Router();

export const postApplicant = async (req,res) => {
    const { firstName,lastName,skills} = req.body;

    const newApplicant = new Applicant({firstName,lastName,skills})

    try {
        await newApplicant.save()

        res.status(201).json(newApplicant)
    } catch (e) {
        res.status(409).json({message: e.message})
    }
}

export const getApplicants = async (req,res) => {
    const { query } = req.query;

    try {
        const applicants = await Applicant.find();

        res.status(200).json(applicants)
    } catch (e) {
        response.status(404).json({message: e.message})
    }
}

export default router;