import config from "./config";

// crear la funcion searchByText(searchText)
// dentro harán un fetch, a esta url: 
// config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey
export const searchByText = async(searchText) =>{
    try {
        // http://www.omdbapi.com/?i=tt3896198&apikey=51d28a2d
        const response = await fetch(config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey);
        const {Search} = await response.json();
        return Search;
    } catch (error) {
        console.log(error);
    }

}

