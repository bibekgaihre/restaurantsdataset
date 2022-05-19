"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPlaces = void 0;
const axios_1 = __importDefault(require("axios"));
const searchPlaces = () => __awaiter(void 0, void 0, void 0, function* () {
    let restaurantData = [];
    let first = yield axios_1.default.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.16342766942609, 10.44767431089163&radius=45000&types=restaurant&key=AIzaSyBYH2XLzDidvgBnoxPORqdsBS7RY6xNKqs`);
    //run here once
    let pageToken = first.data.next_page_token;
    restaurantData.push(first.data.results);
    let totalData = yield fetchedOutput(pageToken);
    console.log(totalData);
    // // }
    // console.log("out of loop");
    return totalData;
});
exports.searchPlaces = searchPlaces;
function fetchedOutput(pageToken) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(pageToken);
        let remainingRestroData = [];
        if (pageToken != "") {
            let result = yield axios_1.default.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.16342766942609, 10.44767431089163&radius=45000&types=restaurant&key=AIzaSyBYH2XLzDidvgBnoxPORqdsBS7RY6xNKqs&pageToken=${pageToken}`);
            remainingRestroData.push(result.data.results);
            console.log(result.data.results);
            pageToken = result.data.next_page_token;
            console.log("here");
            yield pause();
            fetchedOutput(result.data.next_page_token);
        }
        return remainingRestroData;
    });
}
function pause() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 5000);
    });
}
