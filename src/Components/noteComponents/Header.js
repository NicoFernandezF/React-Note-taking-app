import { React, useState, useEffect } from "react";
function Header() {
    const [weather, setWeather] = useState(null);
    const [loadingWeather, setLoadingWeather] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = "4655171e7e23a997daf3e92283320d09";
            const city = "lugo";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Weather data not available");
                }

                const data = await response.json();
                setWeather(data);
                setLoadingWeather(false);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setLoadingWeather(false);
            }
        };

        fetchWeather();
    }, []);
    return (
        <div className="header">
            <h1 className="notes__title" >Notes</h1>
            {loadingWeather ? (
                <p>Loading weather...</p>
            ) : (
                <>
                    <p className="weather__info">
                        Weather in {weather.name}, {weather.sys.country}:
                        <hr></hr>
                        {weather.weather[0].description}, {Math.round(weather.main.temp - 273.15)}°C
                    </p>
                </>
            )}

        </div>
    );
}
export default Header;