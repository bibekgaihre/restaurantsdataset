import axios from "axios";
const searchPlaces = async () => {
    let apikey="";
    let restaurantData = [];
    let first = await axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.16342766942609, 10.44767431089163&radius=45000&types=restaurant&key=${apikey}`);

    //run here once
    let pageToken = first.data.next_page_token;
    restaurantData.push(first.data.results);
    let totalData = await fetchedOutput(pageToken);
    console.log(totalData);

    // // }
    // console.log("out of loop");
    return totalData;
}

async function fetchedOutput(pageToken: any) {
    let apikey="";
    let remainingRestroData: any = [];
    if (pageToken != "") {
        let result: any = await axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.16342766942609, 10.44767431089163&radius=45000&types=restaurant&key=${apikey}&pageToken=${pageToken}`);
        remainingRestroData.push(result.data.results);
        console.log(result.data.results);
        pageToken = result.data.next_page_token;
        console.log("here");
        await pause();
        fetchedOutput(result.data.next_page_token)
    }
    return remainingRestroData;
}


function pause() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 5000);
    });
}



export { searchPlaces };