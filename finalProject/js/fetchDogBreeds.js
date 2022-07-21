// Fetches dogData from dogBreedsData.json
export function getJSON(dogDatajson = 'json/dogBreedsData.json') {
    // console.log(dogDatajson);
    return fetch(dogDatajson)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
}