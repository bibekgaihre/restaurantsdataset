import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import { searchPlaces } from "../Controller/index"

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    let result = await searchPlaces();
    res.json(result);

})

export default router;
