import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import { searchPlaces } from "../Controller/index"

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    // let restaurantdata = [];
    // let response = await axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.16342766942609, 10.44767431089163&radius=500000&types=restaurant&key=AIzaSyBYH2XLzDidvgBnoxPORqdsBS7RY6xNKqs&pageToken`);
    // console.log(response.data);
    let result = await searchPlaces();
    res.json(result);

})

export default router;
