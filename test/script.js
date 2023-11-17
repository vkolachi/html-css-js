async function a(){
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-10-26&checkout=2023-10-27&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1bc0f1bee6msh7ac1097c2a5b902p145d92jsn5d5e097995ec',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
a();