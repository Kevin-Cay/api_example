import { Router } from "express";
import { getPersons, getPerson } from "../controllers/persons.controllers";

const router = Router();


router.get('/api/persons', getPersons)
router.get('/api/persons/:id', getPerson)
export default router