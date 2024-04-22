
function fetchWeatherData(cityName) {
    const apiKey = '3a9c093f9d2ce94c9679ffd14867e6a0'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Extract relevant weather information
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const location = data.name;

            // Update HTML content to display weather information
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('location').textContent = `Location: ${location}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


fetchWeatherData('Paris');
